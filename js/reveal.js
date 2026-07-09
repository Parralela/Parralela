/* Masquage du contenu "en avance" sur Tapas (Eveils, images vieillies,
   capacités d'arme futures), pour que le site ne dévoile rien qui ne soit pas
   encore sorti.

   MAX_PUBLISHED_CHAPTER est mis à jour automatiquement par tools/sync-tapas.mjs
   à partir de ce qui est réellement publié sur Tapas. Ne pas l'éditer à la main. */

// Dernier chapitre effectivement publié sur Tapas.
const MAX_PUBLISHED_CHAPTER = 92; // sync-tapas

// Un contenu "révélé au chapitre N" (champ `since`) est visible seulement si ce
// chapitre est déjà sorti. `since` absent/null => jamais révélé => caché.
// Sert pour le contenu défini à l'avance (Eveils) qui n'a pas encore de date.
function isRevealed(since) {
  return typeof since === 'number' && since <= MAX_PUBLISHED_CHAPTER;
}

// --- Helpers spécifiques aux personnages -----------------------------------

// Portrait à afficher : l'image "d'avant" (imgSafe) tant que la version
// vieillie n'est pas révélée (imgSince). Sans imgSafe, on garde img tel quel.
function displayImg(data) {
  if (data && data.imgSafe && !isRevealed(data.imgSince)) return data.imgSafe;
  return data ? data.img : undefined;
}

// L'Eveil Singuar est du contenu défini à l'avance : CACHÉ par défaut.
// Visible seulement si eveilSince est renseigné ET déjà sorti sur Tapas.
function eveilVisible(data) {
  return !!(data && data.eveil && isRevealed(data.eveilSince));
}

// Les capacités d'arme Unique sont VISIBLES par défaut (la plupart sont déjà
// canon). On ne masque que celles taguées avec un uniqueSince encore futur.
function uniqueCapVisible(data) {
  if (!data || !data.unique) return false;
  return data.uniqueSince == null || isRevealed(data.uniqueSince);
}
