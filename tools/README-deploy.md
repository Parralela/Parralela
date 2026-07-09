# Déploiement du site

> **Chemin retenu : GitHub Pages + Action** (voir `.github/workflows/tapas-sync.yml`).
> GitHub Pages sert le site, et l'Action lance `sync-tapas` chaque heure puis
> committe `js/chapters.js` s'il change → Pages redéploie. Aucun serveur à gérer.
>
> Le contenu du site vient toujours du PC (`tools/push-site.sh`). La suite de ce
> document décrit l'alternative **Raspberry Pi** (repo privé, auto-hébergé),
> conservée au cas où.

## Alternative Raspberry Pi — Vue d'ensemble

```
   PC (disque F:, privé)                 GitHub (repo privé)          Raspberry Pi (public, 24/7)
   ────────────────────                  ───────────────────          ──────────────────────────
   ParralelaDirector/  (rédaction)  ✗ ne sort jamais d'ici
   Parralela_SiteV3/   (site)  ──push──►   parralela-site   ──pull──►  /srv/parralela  ──►  Caddy ──► web
                                                                        + node sync-tapas (cron)
```

- **Le PC** est la source du *contenu* : rédaction, mises à jour de fin de
  chapitre (par toi ou un agent). Il pousse le site sur GitHub.
- **GitHub** (repo **privé**) est le canal de transport + une sauvegarde
  versionnée.
- **Le Pi** est l'hôte public : il tire le contenu et sert le site. Il est le
  seul à remplir les liens Tapas (via `sync-tapas.mjs`), donc pas de conflit.
- **Le dossier `ParralelaDirector/` ne quitte jamais le PC.** Seul
  `Parralela_SiteV3/` est un dépôt git.

### Ce qui n'est PAS déployé (voir `.gitignore`)

- le **texte intégral des chapitres** (`content/chapter/*.md`) sauf le prologue —
  sinon on exposerait les chapitres non sortis par URL ;
- `admin.html` (console d'admin locale), `Futur.txt`, `AGENTS.md` (internes).

Si un jour tu veux servir le texte complet d'un chapitre sur le site, il faudra
retirer son `.md` du `.gitignore` — mais alors il sera public, donc à ne faire
que pour un chapitre déjà sorti.

---

## Étape 1 — Créer le repo GitHub privé

Sur github.com (compte `parralelaproject`) : **New repository** →
nom `parralela-site` → **Private** → *ne pas* cocher « Add README » → Create.

(Le dépôt local est déjà initialisé côté PC, avec un premier commit.)

## Étape 2 — Connecter le PC au repo et pousser

Dans **Git Bash**, depuis `F:/Parralela/Parralela_SiteV3/` :

```bash
git remote add origin https://github.com/parralelaproject/parralela-site.git
git push -u origin main
```

(GitHub demandera de t'authentifier une fois — un *Personal Access Token*
classique suffit, ou GitHub CLI/Desktop si tu préfères.)

### Publier une mise à jour ensuite

Après chaque mise à jour du site (fin de chapitre, lore…), un seul geste :

```bash
tools/push-site.sh "ajout du chapitre 93"
```

Le Pi déploiera tout seul au cycle cron suivant.

## Étape 3 — Préparer le Raspberry Pi

Une seule fois. En SSH sur le Pi :

```bash
# Node.js (18+) et Caddy
sudo apt update && sudo apt install -y nodejs git caddy
node -v   # vérifier >= 18

# Cloner le site (repo privé → token/clé SSH nécessaire)
sudo mkdir -p /srv/parralela && sudo chown "$USER" /srv/parralela
git clone https://github.com/parralelaproject/parralela-site.git /srv/parralela
```

### Serveur web (Caddy)

`/etc/caddy/Caddyfile` — version LAN toute simple (remplace par ton domaine
pour du HTTPS auto si tu en as un) :

```
:80 {
    root * /srv/parralela
    file_server
    # Ne jamais servir le .git ni les outils
    @hidden path /.git/* /tools/*
    respond @hidden 404
}
```

```bash
sudo systemctl reload caddy
```

> Le bloc `@hidden` empêche de servir `/.git/…` et `/tools/…` par URL. Le
> `.gitignore` protège déjà le contenu sensible ; ceci est une ceinture en plus.

### Déploiement + synchro automatiques (cron)

```bash
# Copier le script HORS du dépôt (pour qu'un reset --hard ne le touche pas)
cp /srv/parralela/tools/pi-deploy.sh ~/deploy-parralela.sh
chmod +x ~/deploy-parralela.sh
# éditer ~/deploy-parralela.sh si le chemin SITE_DIR diffère de /srv/parralela

which node   # note le chemin (ex: /usr/bin/node), utile pour cron

crontab -e
```

Ajouter (adapter l'heure à ta publication Tapas ; ici toutes les 15 min, ce qui
couvre à la fois un nouveau push du PC et la sortie programmée d'un chapitre) :

```cron
*/15 * * * *  PATH=/usr/bin:/bin ~/deploy-parralela.sh >> ~/parralela-deploy.log 2>&1
```

C'est tout. Désormais :

- tu écris et mets à jour le site sur le PC, tu lances `push-site.sh` → le Pi
  récupère le contenu au cycle suivant ;
- quand un chapitre programmé sort sur Tapas à heure fixe, le Pi le rend visible
  tout seul, sans PC allumé.

---

## Récapitulatif « qui écrit quoi »

| Donnée | Écrite par | Où |
|---|---|---|
| Texte des chapitres, entrées `chapters.js`, lore `db_*.js` | toi / agent | PC |
| `tapasLink` + visibilité | `sync-tapas.mjs` | Pi (cron) |
| Rien | — | jamais committé sur le Pi (il ne fait que lire GitHub + écrire tapasLink localement) |
