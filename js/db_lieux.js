const lieuxDB = {
    "guilde": {
        name: "La Guilde",
        type: "Organisation",
        icon: "🛡️",
        color: "#f1c40f",
        description: "L'organisation centrale régissant les aventuriers, leurs rangs et leurs missions à travers Parralela.",
        sections: [
            {
                id: "ranks",
                title: "Système de Rangs",
                icon: "📜",
                content: `
                    <h2>📜 Système de rangs de la Guilde</h2>
                    <p>Le classement des aventuriers à la Guilde ne repose pas sur des lettres ou des chiffres, mais sur des symboles célestes. Chaque symbole représente un stade de puissance, de fiabilité et de reconnaissance.</p>
                    <p>Chaque rang se divise en trois paliers :</p>
                    <ul>
                        <li><strong>Mineur</strong> → aventurier débutant dans ce stade.</li>
                        <li><strong>Normal</strong> → aventurier confirmé et stable.</li>
                        <li><strong>Majeur</strong> → aventurier au sommet de ce stade, prêt à franchir vers le suivant.</li>
                    </ul>
                    <hr>
                    <h3>🌠 1. Météore</h3>
                    <p><strong>Description :</strong> rang d’entrée. Comme un fragment tombé du ciel : rapide, fragile, mais visible.</p>
                    <ul>
                        <li><strong>Missions autorisées :</strong> tâches locales simples, escorte, petites chasses.</li>
                        <li><strong>Symbole sur la carte :</strong> un trait lumineux gravé (le météore stylisé).</li>
                    </ul>
                    <hr>
                    <h3>🌙 2. Lune</h3>
                    <p><strong>Description :</strong> lumière stable, reflet qui guide. La fiabilité commence à être reconnue.</p>
                    <ul>
                        <li><strong>Missions autorisées :</strong> quêtes de danger modéré, exploration de donjons faibles, escorte longue distance.</li>
                        <li><strong>Symbole :</strong> un croissant gravé (qui se complète en cercle quand on atteint “Lune Majeure”).</li>
                    </ul>
                    <hr>
                    <h3>🪐 3. Planète</h3>
                    <p><strong>Description :</strong> centre de gravité, force qui attire et stabilise. Les aventuriers de ce rang sont des piliers de la Guilde.</p>
                    <ul>
                        <li><strong>Missions autorisées :</strong> chasses de créatures puissantes, donjons moyens, protection de caravane, premières quêtes collectives importantes.</li>
                        <li><strong>Symbole :</strong> cercle complet, parfois entouré d’un anneau selon le palier.</li>
                    </ul>
                    <hr>
                    <h3>⭐ 4. Étoile</h3>
                    <p><strong>Description :</strong> éclat puissant. Une lumière qui brille par elle-même et oriente les autres.</p>
                    <ul>
                        <li><strong>Missions autorisées :</strong> grandes expéditions, créatures majeures, gisements sensibles (dont la parralith).</li>
                        <li><strong>Symbole :</strong> étoile à plusieurs branches, nombre de branches augmentant avec le palier.</li>
                    </ul>
                    <hr>
                    <h3>✨ 5. Constellation</h3>
                    <p><strong>Description :</strong> ultime rang. Ce ne sont plus seulement des individus puissants, mais des repères pour tout le monde.</p>
                    <ul>
                        <li><strong>Missions autorisées :</strong> toutes, y compris les expéditions continentales et les menaces exceptionnelles.</li>
                        <li><strong>Symbole :</strong> plusieurs étoiles gravées reliées entre elles, dessin unique pour chaque aventurier de ce rang (comme une “constellation personnelle”).</li>
                    </ul>
                    <hr>
                    <h3>Exemple de progression</h3>
                    <ul>
                        <li>Météore Mineur → Météore → Météore Majeur</li>
                        <li>Lune Mineure → Lune → Lune Majeure</li>
                        <li>…etc., jusqu’à Constellation Majeure.</li>
                    </ul>
                `
            }
        ]
    },
    "hochedenia": {
        name: "Haute École d’Hochedenia",
        type: "Académie",
        icon: "🎓",
        color: "#2ecc71",
        description: "Le sommet de l'enseignement magique, formant l'élite de Parralela dans un cadre mystérieux et prestigieux.",
        sections: [
            {
                id: "structure",
                title: "Structure & Système",
                icon: "🏫",
                content: `
                    <h2>🏫 Structure & Système Scolaire</h2>
                    <h3>🌳 Localisation & Environnement</h3>
                    <p>L’école est située au cœur d’une ancienne forêt dans les hauteurs vallonnées du nord d’Hochedenia. Le climat y est tempéré, et l’architecture de l’école rappelle celle d’un château magique gigantesque, avec des ailes et des extensions enchâssées dans la nature.</p>
                    <hr>
                    <h3>📅 Durée des études</h3>
                    <ul>
                        <li><strong>Scolarité principale :</strong> 6 années obligatoires</li>
                        <li><strong>Spécialisation avancée :</strong> 2 à 4 années supplémentaires (facultatives mais valorisées)</li>
                        <li>Le redoublement est possible mais très rare</li>
                        <li>Quitter l’école avant la fin implique une absence de diplôme magique reconnu</li>
                    </ul>
                    <hr>
                    <h3>📚 Organisation des cours</h3>
                    <ul>
                        <li>Élèves regroupés par tranche d’âge, plusieurs classes par groupe</li>
                        <li><strong>Cours généraux :</strong> suivis avec leur classe de référence</li>
                        <li><strong>Cours d’affinités :</strong> groupes spécifiques selon les affinités magiques (séparés)</li>
                        <li><strong>Cours Bestia :</strong> moins précisés, orientés sur le lien et la gestion de l’animal</li>
                        <li>Des spécialisations optionnelles sont proposées en plus des affinités : soutien, ingénierie magique, rituels, analyse...</li>
                    </ul>
                    <hr>
                    <h3>✅ Système de points et évaluation</h3>
                    <ul>
                        <li>Chaque année requiert un quota de points pour être validée</li>
                        <li><strong>Points gagnés par :</strong> Notes et examens, Activités pratiques, Bon comportement et initiatives</li>
                        <li><strong>Points perdus en cas de :</strong> Faute grave, Désobéissance ou mise en danger</li>
                    </ul>
                    <hr>
                    <h3>📊 Classements</h3>
                    <ul>
                        <li><strong>Plusieurs types de classements officiels existent :</strong> Puissance brute (duels), Moyennes académiques, Inventions / créations magiques, Contributions communautaires</li>
                        <li>Ces classements peuvent influencer la réputation, les recommandations, et les accès spéciaux</li>
                    </ul>
                    <hr>
                    <h3>🏛️ Zones principales de l’école</h3>
                    <ul>
                        <li>Salles de classe générales, Amphithéâtres, Salles d'entraînement magique</li>
                        <li>Bibliothèque magique, Dortoirs (non mixtes jusqu'à l'année 4, puis mixtes)</li>
                        <li>Réfectoire, Cour intérieure / jardin magique</li>
                        <li>Bureaux du corps enseignant, Ateliers et laboratoires</li>
                        <li>Tour des invocations / enchantements, Zone d’entraînement réel</li>
                        <li>Salles d’examen, Colisée magique</li>
                    </ul>
                    <hr>
                    <h3>🔒 Zones restreintes / spéciales</h3>
                    <ul>
                        <li><strong>Labyrinthe souterrain :</strong> Accessible à partir de la 3e année (seuls ou en groupe encadré). Plusieurs niveaux, dangers, mystères.</li>
                        <li>Zone des professeurs : sur autorisation seulement</li>
                        <li>Dortoirs opposés : interdits sauf années mixtes</li>
                        <li>Pièces secrètes : enchantées, découverte exceptionnelle ou via des énigmes</li>
                    </ul>
                `
            },
            {
                id: "hierarchy",
                title: "Hiérarchie & Encadrement",
                icon: "🧑‍🏫",
                content: `
                    <h2>🧑‍🏫 Hiérarchie et Encadrement</h2>
                    <h3>🏛️ Direction de l’école</h3>
                    <ul>
                        <li>L’école est dirigée par un directeur unique, connu pour sa sagesse, son calme et son autorité naturelle.</li>
                        <li>Ancien membre des Sept Cimes, il possède une puissance immense mais n’enseigne pas.</li>
                        <li>Il intervient lors de grands événements, des discours officiels, et surveille les équilibres internes.</li>
                    </ul>
                    <hr>
                    <h3>📚 Corps enseignant</h3>
                    <h4>Enseignement par affinité :</h4>
                    <ul>
                        <li>L’école d’Hochedenia est l’une des rares capables d’enseigner toutes les 24 affinités.</li>
                        <li>Il existe au minimum 8 professeurs pour les affinités planétaires.</li>
                        <li>Chaque professeur peut gérer plusieurs affinités complémentaires.</li>
                    </ul>
                    <h4>Enseignement général :</h4>
                    <ul>
                        <li>Certains professeurs ne sont affiliés à aucune affinité et enseignent : Histoire de la magie, Sorts généraux, Ingénierie magique, Stratégie...</li>
                    </ul>
                    <hr>
                    <h3>🧭 Encadrement et soutien</h3>
                    <ul>
                        <li>Chaque classe dispose d’un porte-parole (élu ou désigné).</li>
                        <li>Des groupes étudiants organisés (type BDE) peuvent exister.</li>
                        <li>Une garde magique et des professeurs spécialisés assurent la sécurité interne.</li>
                    </ul>
                    <hr>
                    <h3>⚖️ Pouvoir & autorité</h3>
                    <ul>
                        <li>L’école est autonome, elle n’est pas soumise directement à un royaume ou gouvernement.</li>
                        <li>Le diplôme délivré est reconnu officiellement dans tout Parralela.</li>
                    </ul>
                `
            },
            {
                id: "courses",
                title: "Matières Enseignées",
                icon: "📚",
                content: `
                    <h2>📚 Matières enseignées</h2>
                    <h3>🧠 1. Cours généraux (communs à tous)</h3>
                    <p>Ces cours concernent tous les élèves, peu importe leur affinité.</p>
                    <ul>
                        <li><strong>Sortilèges généraux :</strong> Manipulation de base du mana, lévitation, barrière...</li>
                        <li><strong>Potionologie :</strong> Création et dosage de potions.</li>
                        <li><strong>Création de runes :</strong> Gravure et activation.</li>
                        <li><strong>Ingénierie magique :</strong> Étude des objets magiques et enchantement.</li>
                        <li><strong>Histoire & culture magique :</strong> Civilisations, géopolitique.</li>
                        <li><strong>Botanique & Faune magique :</strong> Étude des plantes et créatures.</li>
                        <li><strong>Contrôle du mana :</strong> Gestion du flux et respiration.</li>
                    </ul>
                    <hr>
                    <h3>🌌 2. Cours spécialisés par affinité</h3>
                    <p>Un élève suit un ou plusieurs de ces cours selon ses affinités. Il y a 24 cours spécialisés.</p>
                    <ul>
                        <li>Développement des sorts spécifiques</li>
                        <li>Analyse de cas d’usage réel</li>
                        <li>Adaptation aux autres affinités</li>
                        <li>Utilisation environnementale</li>
                    </ul>
                    <hr>
                    <h3>🦅 3. Cours spécialisés Bestia</h3>
                    <p>Non obligatoires mais conseillés. Divisés selon le type d'animal (Aérien, Terrestre, Aquatique, Mystique...).</p>
                    <hr>
                    <h3>🛡️ 4. Cours centrés sur les armes uniques</h3>
                    <p>Proposés à partir d'un certain niveau ou dès l'acquisition d'une arme unique.</p>
                    <ul>
                        <li>Maîtrise d’arme spirituelle</li>
                        <li>Sorts liés à l’arme</li>
                        <li>Eveil Singuar (théorie/pratique)</li>
                    </ul>
                    <hr>
                    <h3>🏛️ 5. Matières uniques à Hochedenia</h3>
                    <ul>
                        <li>Analyse des résonances magiques</li>
                        <li>Entraînement tactique appliqué</li>
                        <li>Approche éthique de la puissance</li>
                        <li>Exploration du Labyrinthe</li>
                        <li>Magie combinatoire</li>
                    </ul>
                `
            },
            {
                id: "life",
                title: "Vie Étudiante",
                icon: "🏡",
                content: `
                    <h2>🏡 Vie Étudiante & Socialisation</h2>
                    <h3>🛏️ Dortoirs et vie quotidienne</h3>
                    <ul>
                        <li>Chambres individuelles regroupées par silo de 4.</li>
                        <li>Petite salle commune par silo, grande salle commune par dortoir.</li>
                        <li>Dortoirs mixtes possibles à partir de la 4e année.</li>
                    </ul>
                    <hr>
                    <h3>🍽️ Repas et alimentation</h3>
                    <ul>
                        <li>Grand réfectoire magique (non obligatoire).</li>
                        <li>Aucune séparation par affinité.</li>
                    </ul>
                    <hr>
                    <h3>🧪 Clubs et activités étudiantes</h3>
                    <ul>
                        <li>Possibilité de créer ou rejoindre des clubs (combat, stratégie, art...).</li>
                        <li>Clubs autogérés mais reconnus.</li>
                    </ul>
                    <hr>
                    <h3>❤️ Relations sociales</h3>
                    <ul>
                        <li>Relations amoureuses autorisées (si pas de nuisance).</li>
                        <li>Rivalités courantes (saines ou conflictuelles).</li>
                    </ul>
                `
            },
            {
                id: "rules",
                title: "Règles & Discipline",
                icon: "⚖️",
                content: `
                    <h2>⚖️ Règles, Discipline et Gestion des Conflits</h2>
                    <h3>📜 Système de gestion des fautes</h3>
                    <ul>
                        <li>Règles appliquées par le directeur et encadrants.</li>
                        <li>Conseil de discipline pour fautes graves.</li>
                        <li>Pas d'exclusion temporaire (perte de points), exclusion définitive seulement pour faute majeure.</li>
                    </ul>
                    <hr>
                    <h3>⚔️ Duels et gestion des conflits</h3>
                    <ul>
                        <li><strong>Duels d’entraînement :</strong> Libres, salle d’entraînement.</li>
                        <li><strong>Duels de conflit (officiels) :</strong> Soumis à validation, encadrés, au Colisée.</li>
                    </ul>
                    <hr>
                    <h3>🛡️ Sécurité et blessures</h3>
                    <ul>
                        <li>Mode “non-létal” obligatoire pour les armes uniques en duel.</li>
                        <li>Salles de combat renforcées magiquement.</li>
                        <li>Infirmerie pur les blessures.</li>
                    </ul>
                `
            },
            {
                id: "events",
                title: "Événements",
                icon: "📅",
                content: `
                    <h2>📅 Événements Scolaires Annuels</h2>
                    <ul>
                        <li><strong>1. Tournoi Magique Annuel :</strong> Duels et épreuves pour tous les élèves.</li>
                        <li><strong>2. Tournoi Inter-écoles :</strong> Contre d'autres grandes écoles.</li>
                        <li><strong>3. Bals saisonniers :</strong> 5 par an (fin de chaque saison).</li>
                        <li><strong>4. Exploration annuelle du Labyrinthe :</strong> Objectifs adaptés par année.</li>
                        <li><strong>5. Présentation des Projets Magiques :</strong> Exposition de créations et recherches.</li>
                        <li><strong>6. Veillée des Âmes :</strong> Hommage aux disparus.</li>
                    </ul>
                `
            },
            {
                id: "labyrinth",
                title: "Le Labyrinthe",
                icon: "🌀",
                content: `
                    <h2>🌀 Le Labyrinthe Souterrain</h2>
                    <h3>🧱 Origine et structure</h3>
                    <p>Résultat de l’évolution d’un ancien donjon haut niveau, déformé par l'accumulation d'objets magiques.</p>
                    <hr>
                    <h3>🌀 Fonctionnement général</h3>
                    <ul>
                        <li><strong>1er étage :</strong> Stable, cartographié, contrôlé.</li>
                        <li><strong>À partir du 2e étage :</strong> Instable, autonome, dangereux. Plus de 40 étages connus.</li>
                    </ul>
                    <hr>
                    <h3>🔐 Accès et restrictions</h3>
                    <ul>
                        <li><strong>Années 1-2 :</strong> Interdit sans prof.</li>
                        <li><strong>Années 3+ :</strong> Accès libre au 1er, et aux suivants à leurs risques et périls.</li>
                    </ul>
                    <hr>
                    <h3>☠️ Risques et sécurité</h3>
                    <ul>
                        <li><strong>1er étage :</strong> Faiblement dangereux, balises de traçage.</li>
                        <li><strong>2e étage+ :</strong> Risque de mort réel, aucune garantie de secours.</li>
                    </ul>
                `
            }
        ]
    },

    "tharis": {
    	"name": "Tharis",
    	"type": "Ville",
    	"icon": "🏘️",
    	"color": "#95a5a6",
    	"description": "Ville de Paidju où vivent les familles Eloiranôr et Ashford, point d'ancrage du Quattro avant Hochedenia.",
    	"sections": [
    		{
    			"id": "canon",
    			"title": "Rôle narratif",
    			"icon": "📍",
    			"content": "<h2>Tharis</h2><p>Tharis sert de foyer, de base familiale et de point de retour après les voyages, missions et préparatifs du concours d'Hochedenia.</p>"
    		}
    	]
    },

    "perchoir": {
    	"name": "Le Perchoir",
    	"type": "Ruine / repère",
    	"icon": "⛰️",
    	"color": "#7f8c8d",
    	"description": "Ancienne ruine perchée dans la montagne, devenue terrain d'entraînement et quartier général du groupe.",
    	"sections": [
    		{
    			"id": "canon",
    			"title": "Usage",
    			"icon": "📍",
    			"content": "<h2>Le Perchoir</h2><p>Le Perchoir accueille les entraînements clandestins, les essais de vol, les simulations familiales et l'éclosion des Armes Uniques.</p>"
    		}
    	]
    },

    "oakhaven": {
    	"name": "Oakhaven",
    	"type": "Village bûcheron",
    	"icon": "🌲",
    	"color": "#27ae60",
    	"description": "Village isolé de la République de Paidju, théâtre du mandat de garnison et de l'assaut du relais.",
    	"sections": [
    		{
    			"id": "canon",
    			"title": "Mandat",
    			"icon": "📍",
    			"content": "<h2>Oakhaven</h2><p>Oakhaven demande l'aide de la Guilde face à des attaques et disparitions. Le Quattro y protège le village, enquête sur la ligne nord-est et neutralise un ancien relais de coupe utilisé par des brigands.</p>"
    		}
    	]
    },

    "silo_est_quatre": {
    	"name": "Silo Est-Quatre",
    	"type": "Dortoir d'Hochedenia",
    	"icon": "🛏️",
    	"color": "#9b59b6",
    	"description": "Dortoir féminin de première année partagé par Lily, Scylla, Noéline et Marilyn.",
    	"sections": [
    		{
    			"id": "canon",
    			"title": "Occupantes",
    			"icon": "📍",
    			"content": "<h2>Silo Est-Quatre</h2><p>Le silo devient le premier espace quotidien stable de Lily et Scylla à Hochedenia, avec Noéline Rask et Marilyn Maëlstorm.</p>"
    		}
    	]
    },

    "silo_nord_deux": {
    	"name": "Silo Nord-Deux",
    	"type": "Dortoir d'Hochedenia",
    	"icon": "🛏️",
    	"color": "#3498db",
    	"description": "Dortoir masculin de première année partagé par Nova, Finn, Paul et Bastian.",
    	"sections": [
    		{
    			"id": "canon",
    			"title": "Occupants",
    			"icon": "📍",
    			"content": "<h2>Silo Nord-Deux</h2><p>Nova et Finn y partagent leur quotidien avec Paul Surnyx et Bastian Norec, en parallèle du silo Est-Quatre.</p>"
    		}
    	]
    },

    "premiere_quatre": {
    	"name": "Première-Quatre",
    	"type": "Classe",
    	"icon": "🎓",
    	"color": "#f1c40f",
    	"description": "Classe de première année d'Hochedenia regroupant le Quattro et plusieurs élèves majeurs de la saison 2.",
    	"sections": [
    		{
    			"id": "canon",
    			"title": "Voix de classe",
    			"icon": "📍",
    			"content": "<h2>Première-Quatre</h2><p>Après les premiers cours, la classe choisit informellement Noéline Rask comme référente souhaitée et Paul Surnyx comme suppléant souhaité.</p>"
    		}
    	]
    },

    "naris": {
    	"name": "Naris",
    	"type": "Port",
    	"icon": "🌊",
    	"color": "#1abc9c",
    	"description": "Port côtier d'Afordia, associé aux eaux vivantes et à la chasse aux pyrocrabes.",
    	"sections": [
    		{
    			"id": "canon",
    			"title": "Pyrocrabes",
    			"icon": "📍",
    			"content": "<h2>Naris</h2><p>Le Quattro y cherche la Coquille de Pyrocrabe Ancien, dans des eaux saturées et étrangement vivantes.</p>"
    		}
    	]
    },

    "orizon": {
    	"name": "Orizon",
    	"type": "Ville sainte",
    	"icon": "❄️",
    	"color": "#ecf0f1",
    	"description": "Ville calme du Royaume de Balmajosza, liée au Don de Manelis et au silence religieux.",
    	"sections": [
    		{
    			"id": "canon",
    			"title": "Silence",
    			"icon": "📍",
    			"content": "<h2>Orizon</h2><p>Orizon parle bas, garde ses distances et marque une étape importante du voyage avant le seuil des neiges.</p>"
    		}
    	]
    }
};
