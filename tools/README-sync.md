# Synchronisation Tapas → site (`sync-tapas.mjs`)

Ce script maintient les liens Tapas du site à jour et pilote la visibilité des
chapitres, à partir de ce qui est **réellement publié** sur la série Tapas
*Parralela* (id `313321`).

## Ce qu'il fait

1. lit la liste ordonnée des épisodes publiés sur Tapas (API interne, sans clé
   ni navigateur) ;
2. ignore les épisodes qui ne comptent pas comme chapitres publics :
   - les « Note d'information … » (notes d'auteur, cf. `AGENTS.md`) ;
   - les épisodes **programmés / « Coming Soon »** : ils apparaissent dans la
     liste Tapas mais ne sont pas encore réellement en ligne, donc ne doivent
     pas rendre un chapitre visible sur le site (ex. un « chapitre 93 - Partie 1 »
     planifié « In 3 days » ne rend pas le chapitre 93 visible tant qu'il n'est
     pas sorti) ;
3. regroupe les épisodes découpés en « Partie 1/2/3 » sous un seul chapitre
   (regroupement par **numéro de chapitre auteur** en tête de titre, insensible
   aux fautes de frappe entre parties) ;
4. aligne cette liste sur les entrées de `js/chapters.js` et écrit, pour chaque
   chapitre déjà sorti, son `tapasLink` au format canonique
   `https://tapas.io/episode/<id>` ;
5. laisse `tapasLink = ""` pour les chapitres écrits mais **pas encore publiés**
   sur Tapas.

Le site utilise ensuite `tapasLink` comme **unique signal de visibilité** : un
chapitre sans lien Tapas est masqué de la bibliothèque, du sélecteur du lecteur
et n'est pas lisible même en accès direct (`lecture.html?id=…`). Voir la fonction
`isPublished` / la liste `publishedChapters` en bas de `js/chapters.js`.

## Filet de sécurité

Avant d'écrire, le script vérifie qu'il **reproduit à l'identique** tous les
liens Tapas déjà connus (comparaison par id d'épisode, indépendante du format
d'URL). Si l'alignement a dérivé (ex. un nouvel épisode non-chapitre non filtré),
il **refuse d'écrire** et affiche les écarts. On peut alors corriger le filtre,
ou forcer avec `--force` si le décalage est voulu.

## Utilisation manuelle

Depuis le dossier du site (`Parralela_SiteV3/`), avec **Node 18+** :

```bash
node tools/sync-tapas.mjs --dry-run   # montre ce qui changerait, sans rien écrire
node tools/sync-tapas.mjs             # applique la synchro
node tools/sync-tapas.mjs --force     # écrit même si la vérification d'ancre échoue
```

Le script est **idempotent** : le relancer sans nouvel épisode ne change rien.

## Automatisation sur le Raspberry Pi 5 (cron)

Tu publies toujours à la même heure : on lance donc la synchro peu après.
Exemple pour une publication vers 20h00 (adapte l'heure et le chemin) :

```cron
# Édite avec :  crontab -e
# Synchro Tapas → site à 20h20 et 20h50 (2 passes = filet si Tapas est lent à indexer)
20,50 20 * * *  cd /home/pi/Parralela_SiteV3 && /usr/bin/node tools/sync-tapas.mjs >> /home/pi/sync-tapas.log 2>&1
```

- Vérifie le chemin de Node : `which node` (souvent `/usr/bin/node` ou
  `/usr/local/bin/node`). cron n'a pas ton `PATH` habituel, d'où le chemin
  absolu.
- Les logs s'accumulent dans `~/sync-tapas.log`.
- Le site étant **statique**, mettre à jour `js/chapters.js` suffit : aucun
  rebuild. Si tu sers le dossier via nginx/Caddy/un serveur statique, les
  visiteurs voient les nouveaux chapitres au rechargement suivant.

Rien d'autre à faire : dès qu'un chapitre est sur Tapas, la passe cron suivante
lui pose son lien et le rend visible sur le site.

## Automatisation sur Windows (Planificateur de tâches)

Si tu préfères garder ça sur le PC Windows, crée une tâche planifiée qui exécute :

```
node.exe "F:\Parralela\Parralela_SiteV3\tools\sync-tapas.mjs"
```

avec « Commencer dans » = `F:\Parralela\Parralela_SiteV3`, déclenchée
quotidiennement à ton heure de publication.

## Si la structure Tapas change

- **Nouveau type d'épisode non-chapitre** (autre qu'une « Note … ») : ajuste
  `isNonChapter()` dans `sync-tapas.mjs`. Le filet de sécurité t'alertera par un
  écart d'ancre avant de rien casser.
- **Changement d'id de série** : mets à jour `SERIES_ID` en tête du script.
