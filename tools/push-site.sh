#!/usr/bin/env bash
# Publie les changements du site vers GitHub, depuis le PC (Git Bash).
# À lancer en fin de mise à jour du site (nouveau chapitre, lore, etc.).
# Le Pi déploiera automatiquement au cycle suivant.
#
# Usage :  tools/push-site.sh "message de commit"
set -euo pipefail
cd "$(dirname "$0")/.."

git add -A
if git diff --cached --quiet; then
  echo "Rien à publier (aucun changement)."
  exit 0
fi
git commit -m "${1:-Mise à jour du site}"
git push
echo "✅ Poussé sur GitHub. Le Pi déploiera au prochain cycle cron."
