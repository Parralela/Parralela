#!/usr/bin/env bash
# =========================================================================
#  Déploiement + synchro Tapas du site Parralela, sur le Raspberry Pi.
#
#  À exécuter par cron sur le Pi. Deux rôles :
#    1. récupérer le dernier contenu poussé depuis le PC (source de vérité) ;
#    2. re-remplir les liens Tapas + la visibilité depuis ce qui est EN LIGNE.
#
#  IMPORTANT : copie ce script HORS du dépôt (ex. ~/deploy-parralela.sh) et
#  fais pointer cron sur cette copie, pour qu'un 'git reset --hard' ne réécrive
#  pas le script pendant son exécution.
# =========================================================================
set -euo pipefail

SITE_DIR="/srv/parralela"   # <-- chemin du clone du site sur le Pi (à adapter)
BRANCH="main"

cd "$SITE_DIR"

# 1. Aligner le contenu sur le PC, uniquement s'il a changé.
#    reset --hard écrase les liens tapasLink posés localement : c'est voulu,
#    ils sont reconstruits juste après. (Le contenu vient du PC, les liens de Tapas.)
git fetch --quiet origin "$BRANCH"
if [ "$(git rev-parse HEAD)" != "$(git rev-parse "origin/$BRANCH")" ]; then
  echo "[$(date '+%F %T')] nouveau contenu depuis le PC → mise à jour"
  git reset --hard --quiet "origin/$BRANCH"
fi

# 2. Synchro Tapas (remplit les liens, révèle les chapitres désormais en ligne).
node tools/sync-tapas.mjs

echo "[$(date '+%F %T')] déploiement + synchro OK"
