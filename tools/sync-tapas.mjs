#!/usr/bin/env node
// sync-tapas.mjs — Synchronise js/chapters.js avec la série Tapas.
//
// Ce que fait le script :
//   1. lit la liste ordonnée des épisodes publiés sur Tapas (série 313321) ;
//   2. regroupe les épisodes découpés en « Partie 1/2 » sous un seul chapitre ;
//   3. aligne cette liste sur les entrées de js/chapters.js (dans l'ordre) ;
//   4. écrit le tapasLink de chaque chapitre déjà sorti (ep{N} = position Tapas) ;
//   5. laisse tapasLink = "" pour les chapitres pas encore publiés (→ cachés sur le site).
//
// Filet de sécurité : le script vérifie d'abord qu'il reproduit EXACTEMENT les liens
// Tapas déjà connus et corrects dans chapters.js. Au moindre écart sur cette zone
// « ancre », il refuse d'écrire (sauf --force) pour éviter de décaler tous les liens.
//
// Usage :
//   node sync-tapas.mjs            # applique la synchro (écrit chapters.js)
//   node sync-tapas.mjs --dry-run  # affiche ce qui changerait, sans écrire
//   node sync-tapas.mjs --force    # écrit même si la vérification d'ancre échoue
//
// Aucune dépendance externe (Node 18+, fetch global).

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const SERIES_ID = 313321;
const __dirname = dirname(fileURLToPath(import.meta.url));
const CHAPTERS_FILE = join(__dirname, '..', 'js', 'chapters.js');
const REVEAL_FILE = join(__dirname, '..', 'js', 'reveal.js');

const args = new Set(process.argv.slice(2));
const DRY_RUN = args.has('--dry-run');
const FORCE = args.has('--force');

// --- 1. Récupération de la liste ordonnée des épisodes Tapas ---------------

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&#x27;|&apos;/g, "'")
    .replace(/&ecirc;/g, 'ê').replace(/&egrave;/g, 'è').replace(/&eacute;/g, 'é')
    .replace(/&agrave;/g, 'à').replace(/&ocirc;/g, 'ô').replace(/&icirc;/g, 'î')
    .replace(/&nbsp;/g, ' ');
}

async function fetchAllEpisodes() {
  const episodes = [];
  for (let page = 1; page <= 100; page++) {
    // NB : Tapas plafonne max_limit à 20 (au-delà → HTTP 500).
    const url = `https://tapas.io/series/${SERIES_ID}/episodes?page=${page}&sort=OLDEST&max_limit=20`;
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
    });
    if (!res.ok) throw new Error(`Tapas HTTP ${res.status} (page ${page})`);
    const json = await res.json();
    const body = json?.data?.body ?? '';
    const liRe = /<li\b([^>]*)>([\s\S]*?)<\/li>/g;
    let m;
    for (; (m = liRe.exec(body)); ) {
      const attrs = m[1], inner = m[2];
      const idM = attrs.match(/data-id="(\d+)"/);
      const numM = inner.match(/info__label">\s*Episode\s*(\d+)/);
      const titleM = inner.match(/info__title">([\s\S]*?)<\/a>/);
      if (!idM || !numM || !titleM) continue;
      // Épisode programmé / « Coming Soon » : présent dans la liste mais pas
      // encore réellement en ligne. Marqueurs : classe js-coming-soon sur le
      // <li>, overlay verrouillé, ou icône planning.
      const comingSoon = /js-coming-soon/.test(attrs)
        || /thumb__overlay--locked/.test(inner)
        || /ico--schedule/.test(inner);
      episodes.push({
        id: Number(idM[1]),
        n: Number(numM[1]),                  // position affichée « Episode N »
        title: decodeEntities(titleM[1]).trim(),
        comingSoon,
      });
    }
    if (!json?.data?.pagination?.has_next) break;
  }
  episodes.sort((a, b) => a.n - b.n);
  return episodes;
}

// Épisodes Tapas qui ne sont PAS des chapitres du site (notes d'auteur, etc.).
// Convention du projet : les « Note d'information - ... » ne sont jamais des
// chapitres (voir AGENTS.md). On les retire avant l'alignement, sinon chacun
// décale tous les liens suivants d'un cran.
function isNonChapter(title) {
  const t = title.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
  return /^note\b/.test(t);
}

// --- 2. Normalisation + regroupement des parties ---------------------------

function normTitle(t) {
  return t
    .normalize('NFD').replace(/[̀-ͯ]/g, '')      // sans accents
    .toLowerCase()
    .replace(/\s*[-–—]\s*partie?\s*\d+.*$/i, '')           // « - Partie 2 »
    .replace(/\s*\(?\s*part(?:ie)?\s*\d+\s*\)?\s*$/i, '')  // « part 2 », « (partie 2) »
    .replace(/^\s*\d+[.)]\s*/, '')                         // préfixe « 1. »
    .replace(/[^a-z0-9]+/g, ' ')                           // ponctuation → espace
    .trim();
}

// Clé de regroupement d'un épisode en « chapitre ».
// Les épisodes tardifs sont préfixés du numéro de chapitre auteur (« 90. … ») :
// on regroupe alors par ce numéro, ce qui est insensible aux fautes de frappe
// ou aux variations de titre entre parties (ex. « Garnision » vs « Garnison »).
// Les premiers épisodes n'ont pas de numéro (« Prologue », « On rêve »…) :
// on retombe sur le titre normalisé (parties « - Partie N » regroupées).
function chapterKey(title) {
  const m = title.match(/^\s*(\d+)\s*[.)]/);
  return m ? `num:${m[1]}` : `title:${normTitle(title)}`;
}

// Regroupe les épisodes consécutifs de même clé en « unités chapitre ».
function groupIntoChapters(episodes) {
  const units = [];
  for (const ep of episodes) {
    const key = chapterKey(ep.title);
    const last = units[units.length - 1];
    if (last && last.key === key) {
      last.parts.push(ep);
    } else {
      units.push({ key, firstN: ep.n, firstId: ep.id, title: ep.title, parts: [ep] });
    }
  }
  return units;
}

// --- 3. Lecture / écriture ciblée de chapters.js ---------------------------

// On ne réécrit PAS tout le fichier : on remplace seulement la valeur tapasLink
// de chaque entrée, repérée par son id, pour préserver preview/titres/formatage.
function parseChapterEntries(src) {
  const re = /\{\s*id:\s*(\d+)\s*,[\s\S]*?tapasLink:\s*"((?:[^"\\]|\\.)*)"/g;
  const entries = [];
  let m;
  for (; (m = re.exec(src)); ) {
    entries.push({ id: Number(m[1]), tapasLink: m[2], matchIndex: m.index, full: m[0] });
  }
  return entries;
}

function setTapasLink(src, entry, newLink) {
  const replaced = entry.full.replace(/tapasLink:\s*"(?:[^"\\]|\\.)*"/, `tapasLink: "${newLink}"`);
  return src.slice(0, entry.matchIndex) + replaced + src.slice(entry.matchIndex + entry.full.length);
}

// Tient à jour js/reveal.js (masquage du lore en avance) avec le dernier
// chapitre publié sur Tapas. Renvoie true si le fichier a changé.
async function updateRevealFile(maxPublished) {
  let src;
  try {
    src = await readFile(REVEAL_FILE, 'utf8');
  } catch {
    return false; // pas de reveal.js => rien à faire
  }
  const re = /const MAX_PUBLISHED_CHAPTER = \d+;/;
  const next = `const MAX_PUBLISHED_CHAPTER = ${maxPublished};`;
  if (!re.test(src) || re.exec(src)[0] === next) return false;
  await writeFile(REVEAL_FILE, src.replace(re, next), 'utf8');
  return true;
}

// --- Programme principal ---------------------------------------------------

// On écrit l'URL CANONIQUE d'épisode (https://tapas.io/episode/<id>) plutôt que
// l'URL « vanity » /series/<slug>/ep<N>. Raison : la vanity du tout dernier
// épisode publié renvoie un 404 tant que Tapas ne l'a pas indexée (juste après
// la publication), alors que l'URL canonique fonctionne immédiatement. C'est de
// toute façon la cible vers laquelle /ep<N> redirige.
function episodeUrl(id) {
  return `https://tapas.io/episode/${id}`;
}

// Ramène n'importe quel format de lien Tapas à l'id d'épisode, pour comparer
// deux liens indépendamment de leur forme (canonique ou vanity).
//   - https://tapas.io/episode/12345        → 12345
//   - https://tapas.io/series/Parralela/ep7 → id de la 7e position (via nToId)
function linkToEpisodeId(link, nToId) {
  if (!link) return null;
  let m = link.match(/\/episode\/(\d+)/);
  if (m) return Number(m[1]);
  m = link.match(/\/ep(\d+)\b/);
  if (m) return nToId.get(Number(m[1])) ?? null;
  return null;
}

async function main() {
  const src = await readFile(CHAPTERS_FILE, 'utf8');
  const entries = parseChapterEntries(src);
  console.log(`Chapitres dans chapters.js : ${entries.length}`);

  const allEpisodes = await fetchAllEpisodes();
  // On ne garde que les épisodes RÉELLEMENT publiés : ni notes d'auteur, ni
  // épisodes programmés (« Coming Soon », pas encore en ligne). Un épisode
  // programmé apparaît dans la liste Tapas mais ne doit pas rendre un chapitre
  // visible sur le site tant qu'il n'est pas sorti.
  const skippedNotes = allEpisodes.filter(e => isNonChapter(e.title));
  const skippedSoon = allEpisodes.filter(e => !isNonChapter(e.title) && e.comingSoon);
  const episodes = allEpisodes.filter(e => !isNonChapter(e.title) && !e.comingSoon);
  if (skippedNotes.length) {
    console.log(`Notes d'auteur ignorées : ${skippedNotes.length}`);
    for (const e of skippedNotes) console.log(`   (note)  ep${e.n} « ${e.title} »`);
  }
  if (skippedSoon.length) {
    console.log(`Épisodes programmés (pas encore en ligne) ignorés : ${skippedSoon.length}`);
    for (const e of skippedSoon) console.log(`   (à venir) ep${e.n} « ${e.title} »`);
  }
  const units = groupIntoChapters(episodes);
  console.log(`Épisodes Tapas : ${episodes.length}  →  chapitres Tapas (parties regroupées) : ${units.length}`);

  // Carte position → id d'épisode (sur TOUS les épisodes, note comprise), pour
  // pouvoir interpréter d'éventuels anciens liens au format /ep<N>.
  const nToId = new Map(allEpisodes.map(e => [e.n, e.id]));

  // Vérification d'ancre : sur les chapitres qui ONT déjà un lien, l'épisode
  // recalculé doit désigner le MÊME épisode (comparaison par id, insensible au
  // format d'URL). Sinon l'alignement a dérivé.
  const anchorMismatches = [];
  const plan = [];  // { id, oldLink, newLink, oldEpId, newEpId, unitTitle }
  for (let i = 0; i < entries.length; i++) {
    const e = entries[i];
    const unit = units[i];
    const newLink = unit ? episodeUrl(unit.firstId) : '';
    const oldEpId = linkToEpisodeId(e.tapasLink, nToId);
    const newEpId = unit ? unit.firstId : null;
    plan.push({ id: e.id, oldLink: e.tapasLink, newLink, oldEpId, newEpId, unitTitle: unit?.title ?? null });
    if (oldEpId && newEpId && oldEpId !== newEpId) {
      anchorMismatches.push({ id: e.id, old: e.tapasLink, recomputed: newLink, unitTitle: unit?.title });
    }
  }

  if (anchorMismatches.length) {
    console.error('\n⚠️  ÉCART sur des liens déjà connus (l\'alignement a dérivé) :');
    for (const a of anchorMismatches.slice(0, 15)) {
      console.error(`   id ${a.id}: ${a.old}  ≠  ${a.recomputed}  (« ${a.unitTitle} »)`);
    }
    if (!FORCE) {
      console.error('\n❌ Écriture annulée. Vérifie le mapping ci-dessus, puis relance avec --force si c\'est voulu.');
      process.exit(1);
    }
    console.error('\n--force : on continue malgré tout.');
  } else {
    console.log('✅ Vérification d\'ancre OK : tous les liens déjà connus sont reproduits à l\'identique.');
  }

  // Catégorisation par id d'épisode.
  const added   = plan.filter(p => !p.oldEpId && p.newEpId);                       // gagne un lien
  const removed = plan.filter(p =>  p.oldEpId && !p.newEpId);                      // perd son lien
  const migrated = plan.filter(p => p.oldEpId && p.newEpId && p.oldEpId === p.newEpId && p.oldLink !== p.newLink); // même épisode, format d'URL mis à jour
  const changed = plan.filter(p => p.oldEpId && p.newEpId && p.oldEpId !== p.newEpId); // vrai changement de cible (anchor mismatch)

  console.log(`\nNouveaux liens (chapitres désormais sur Tapas) : ${added.length}`);
  for (const p of added) console.log(`   + id ${p.id} → ${p.newLink}  « ${p.unitTitle} »`);
  if (removed.length) {
    console.log(`\nLiens retirés (plus trouvés sur Tapas) : ${removed.length}`);
    for (const p of removed) console.log(`   - id ${p.id} (était ${p.oldLink})`);
  }
  if (migrated.length) console.log(`\nLiens réécrits au format canonique /episode/<id> : ${migrated.length}`);
  if (changed.length && FORCE) {
    console.log(`\nLiens modifiés (cible différente) : ${changed.length}`);
    for (const p of changed) console.log(`   ~ id ${p.id}: ${p.oldLink} → ${p.newLink}`);
  }

  const stillHidden = plan.filter(p => !p.newEpId).length;
  console.log(`\nChapitres encore cachés (pas sur Tapas) : ${stillHidden}`);

  if (DRY_RUN) {
    console.log('\n(--dry-run : aucun fichier modifié.)');
    return;
  }

  // Masquage du lore en avance : tenir js/reveal.js à jour avec le dernier
  // chapitre publié (indépendant de l'écriture de chapters.js).
  const publishedIds = plan.filter(p => p.newEpId).map(p => p.id);
  const maxPublished = publishedIds.length ? Math.max(...publishedIds) : 0;
  if (await updateRevealFile(maxPublished)) {
    console.log(`\nreveal.js : MAX_PUBLISHED_CHAPTER mis à jour → ${maxPublished}`);
  }

  const toWrite = added.length + removed.length + migrated.length + (FORCE ? changed.length : 0);
  if (!toWrite) {
    console.log('\nRien à écrire, chapters.js est déjà à jour.');
    return;
  }

  // Application : on repart de la source et on remplace entrée par entrée.
  // On retraite du dernier au premier pour ne pas invalider les index de match.
  let out = src;
  const freshEntries = parseChapterEntries(out);
  for (let i = freshEntries.length - 1; i >= 0; i--) {
    const e = freshEntries[i];
    const p = plan.find(x => x.id === e.id);
    if (!p) continue;
    const target = p.newLink;  // '' si le chapitre n'est pas (ou plus) sur Tapas
    if (target !== e.tapasLink) out = setTapasLink(out, e, target);
  }

  await writeFile(CHAPTERS_FILE, out, 'utf8');
  console.log(`\n✅ chapters.js mis à jour (${added.length} ajout(s), ${removed.length} retrait(s), ${migrated.length} migration(s) de format).`);
}

main().catch(err => { console.error('Erreur :', err.message); process.exit(1); });
