const spellsDB = [
    {
        "id": 7,
        "name": "Écran Aérien",
        "type": "Défensif / Bouclier de pression",
        "complexity": 2,
        "affinities": [
            "Aeris"
        ],
        "specific": "Stratos",
        "desc": "L’utilisateur déploie une plaque de pression atmosphérique condensée,",
        "full_desc": "L’utilisateur déploie une plaque de pression atmosphérique condensée,\u003cbr\u003epresque imperceptible à l’œil, qui agit comme un écran de tension\u003cbr\u003eextrême.\u003cbr\u003eCe mur invisible dévie, amortit ou fend les attaques physiques et\u003cbr\u003emagiques selon leur nature. Les projectiles ou ondes d’énergie se\u003cbr\u003edéchirent, se dispersent ou se brisent au contact de cette paroi\u003cbr\u003eaérienne.",
        "mana": "Moyenne à élevée selon la taille et la durée du mur",
        "duration": "Instantanée à 3 secondes (variable selon la puissance)",
        "range": "Créé directement devant l’utilisateur ou à 1–2 mètres de distance",
        "incantation": "« Souffle, ourle, et casse… Écran Aérien ! »",
        "particularity": [
            "L’écran est invisible, mais provoque de légères déformations de l’air visibles sous forte lumière",
            "Très efficace contre les sorts rapides ou directs, moins utile contre les attaques de zone ou contournantes",
            "Peut être utilisé en plein mouvement pour intercepter un tir ou une charge"
        ],
        "notes": [
            "Utilisé par des mages tactiques ou défensifs d’affinité Aeris",
            "Peut provoquer des turbulences résiduelles après dissipation",
            "Certaines variantes avancées permettent de renvoyer une petite partie de l’énergie absorbée"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Vents Dominants – Initiation à la Haute Aéromagie (Tome II)",
        "symbol": ""
    },
    {
        "id": 8,
        "name": "Trombe Cinglante",
        "type": "Offensif / Contrôle de zone",
        "complexity": 2,
        "affinities": [
            "Aeris"
        ],
        "specific": "Stratos",
        "desc": "L’utilisateur invoque une ou plusieurs petites tornades rapides et",
        "full_desc": "L’utilisateur invoque une ou plusieurs petites tornades rapides et\u003cbr\u003einstables, capables de balayer une zone étroite, provoquer des pertes\u003cbr\u003ed’équilibre, désarmer, voire soulever légèrement des adversaires ou\u003cbr\u003eobjets légers.\u003cbr\u003eLes tornades durent quelques secondes, se déplacent sur quelques\u003cbr\u003emètres, et peuvent être orientées d’un simple geste à l’activation.",
        "mana": "Moyenne à élevée selon le nombre de tornades et leur durée",
        "duration": "Non specifie",
        "range": "Jusqu’à 10 mètres devant l’utilisateur",
        "incantation": "« Stratos, entaille les cieux… Trombe Cinglante ! »",
        "particularity": [
            "Les tornades ne causent pas de dégâts directs, mais perturbent fortement les déplacements et la concentration",
            "Peut servir à isoler des cibles, briser une formation, ou interrompre un sort en préparation",
            "En terrain ouvert, les tornades peuvent durer un peu plus longtemps ; dans des espaces confinés, elles s’écrasent rapidement"
        ],
        "notes": [
            "Très utile en soutien à un autre sort ou pour préparer une attaque secondaire",
            "Peut disperser de la poussière, des projectiles légers ou des illusions visuelles",
            "La tornade ne distingue pas alliés et ennemis — à utiliser avec stratégie"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Vents Dominants – Initiation à la Haute Aéromagie (Tome II)",
        "symbol": ""
    },
    {
        "id": 9,
        "name": "Cercle Gelé",
        "type": "Défensif / Contrôle de terrain",
        "complexity": 2,
        "affinities": [
            "Aquaria"
        ],
        "specific": "Glacius",
        "desc": "L’utilisateur érige à distance un mur circulaire de glace pure, haut",
        "full_desc": "L’utilisateur érige à distance un mur circulaire de glace pure, haut\u003cbr\u003ede 8 mètres, formant une structure translucide, dense et résistante.\u003cbr\u003eLe cercle peut varier de 5 à 15 mètres de diamètre selon la puissance\u003cbr\u003edéployée.\u003cbr\u003eLa glace générée est solide, lisse et légèrement givrée, rendant le\u003cbr\u003efranchissement difficile sans magie ou force extrême.\u003cbr\u003eLa température à l’intérieur chute fortement, ce qui peut gêner\u003cbr\u003ecertaines créatures ou affinités.",
        "mana": "Élevée",
        "duration": "Jusqu’à destruction, fonte lente ou annulation volontaire",
        "range": "Jusqu’à 15 mètres autour de l’utilisateur",
        "incantation": "« Eaux immobiles, dessinez le bord du monde… Cercle Gelé ! »",
        "particularity": [
            "Le sort n’est pas mobile une fois invoqué",
            "Ne fonctionne que sur terrain solide ou stable",
            "Très utile pour créer des zones de combat fermées ou isoler une cible",
            "Peut être partiellement détruit pour créer des ouvertures tactiques"
        ],
        "notes": [

        ],
        "lore": "Nature du sort a definir...",
        "origin": "Arcanes de Glace – Contrôle et Architecture Magique (Tome II)",
        "symbol": ""
    },
    {
        "id": 10,
        "name": "Rosace Boréale",
        "type": "Contrôle / Neutralisation ciblée",
        "complexity": 2,
        "affinities": [
            "Aquaria"
        ],
        "specific": "Glacius",
        "desc": "L’utilisateur matérialise une rosace symétrique de glace pure, qu’il",
        "full_desc": "L’utilisateur matérialise une rosace symétrique de glace pure, qu’il\u003cbr\u003edirige vers la tête d’une cible.\u003cbr\u003eLa rosace se pose avec douceur mais se scelle instantanément, figée\u003cbr\u003econtre le crâne ou la gueule, immobilisant la mâchoire, gelant la\u003cbr\u003elangue ou perturbant les sens.\u003cbr\u003eLe sort est silencieux et sans force brute, mais cause une paralysie\u003cbr\u003esensorielle locale, provoquant souvent panique ou désorientation chez\u003cbr\u003ela cible.",
        "mana": "Moyenne",
        "duration": "5 à 10 secondes selon résistance de la cible",
        "range": "5 à 7 mètres (ciblage visuel nécessaire)",
        "incantation": "« Coiffe de givre, scelle la gueule… Rosace Boréale ! »",
        "particularity": [
            "Très efficace sur les créatures agressives à gueule ouverte",
            "Peut geler temporairement la langue, rendant impossible l’incantation pour les mages",
            "En cas de surpuissance, peut provoquer une surgelure de la face (à éviter contre humanoïdes)"
        ],
        "notes": [
            "Difficile à contrer une fois en place, sauf par choc thermique ou sort d’annulation",
            "Peut être combiné avec des sorts de glace supplémentaires pour figer entièrement la tête",
            "Fait partie des techniques de capture non létales les plus respectées dans les écoles de combat magique avancé"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Arcanes de Glace – Contrôle et Architecture Magique (Tome II)",
        "symbol": ""
    },
    {
        "id": 11,
        "name": "Voile d’Eau",
        "type": "Défensif / Altération de trajectoire",
        "complexity": 1,
        "affinities": [
            "Aquaria"
        ],
        "specific": "Nebula",
        "desc": "Dresse une brume épaisse qui dévie, amortit ou renvoie fluides et",
        "full_desc": "Dresse une brume épaisse qui dévie, amortit ou renvoie fluides et\u003cbr\u003eprojectiles légers ; certains jets hydriques refluent vers leur\u003cbr\u003eémetteur.",
        "mana": "Faible–moyenne (selon densité)",
        "duration": "5–15 s",
        "range": "0–5 m devant l’utilisateur",
        "incantation": "Voile d’Eau",
        "particularity": [

        ],
        "notes": [

        ],
        "lore": "Nature du sort a definir...",
        "origin": "Hydromancies Diffuses – Brumes \u0026 Réfractions (Tome I)",
        "symbol": ""
    },
    {
        "id": 12,
        "name": "Écho de la Buse",
        "type": "Sensoriel / Illusoire",
        "complexity": 2,
        "affinities": [
            "Bestia"
        ],
        "specific": "Bestia",
        "desc": "L’utilisateur émet un cri magique semblable à celui d’une buse,",
        "full_desc": "L’utilisateur émet un cri magique semblable à celui d’une buse,\u003cbr\u003eamplifié et projeté à plusieurs dizaines de mètres.\u003cbr\u003eLe son porte loin, résonne de façon inhabituelle, et provoque parfois\u003cbr\u003eun frisson animal ou une réaction instinctive chez les créatures\u003cbr\u003eproches.\u003cbr\u003eLe sort n’offre pas d’avantage réel : il peut signaler une position,\u003cbr\u003eattirer l’attention, ou intimider légèrement une cible sensible aux\u003cbr\u003esons… mais n’a pas de valeur tactique directe.\u003cbr\u003ediffusion et son originalité)",
        "mana": "Très faible",
        "duration": "Instantané",
        "range": "Jusqu’à 100 mètres pour l’écho sonore",
        "incantation": "Écho de la Buse",
        "particularity": [
            "Le cri est audible par tous, mais semble parfois venir d’en haut, comme si une buse planait réellement",
            "Certaines créatures animales ou magiques peuvent répondre ou réagir instinctivement",
            "Rarement utilisé, car son utilité en combat est nulle ou marginale"
        ],
        "notes": [
            "Certains érudits considèrent ce sort comme une bizarrerie culturelle issue d’un ancien rituel",
            "Quelques chasseurs l’utilisent encore pour repérer la résonance d’une vallée ou comme signal codé",
            "Sa rareté vient du fait qu’il est peu enseigné et peu recherché, plus folklorique que pratique"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Bestia Codex – Recueil des Sorts Animaliers (Tome II)",
        "symbol": ""
    },
    {
        "id": 13,
        "name": "Esquive de l’Hermine",
        "type": "Mobilité / Défense / Réflexe",
        "complexity": 2,
        "affinities": [
            "Bestia"
        ],
        "specific": "Bestia",
        "desc": "L’utilisateur canalise les instincts de l’hermine pour esquiver",
        "full_desc": "L’utilisateur canalise les instincts de l’hermine pour esquiver\u003cbr\u003einstantanément une attaque, un danger ou un contact hostile.\u003cbr\u003eLe mouvement peut prendre la forme d’un bond, d’un glissement, d’un\u003cbr\u003eroulé ou d’une fente acrobatique, toujours rapide et précis.\u003cbr\u003eL’effet secondaire du sort dépend de l’affinité planétaire de\u003cbr\u003el’individu, modifiant l’apparence, la vitesse, l’énergie dégagée ou\u003cbr\u003eles résidus magiques laissés derrière.",
        "mana": "Faible à moyenne (variable selon l’intensité de l’activation) - Temps de récupération : Très court, permet plusieurs utilisations dans un combat",
        "duration": "Non specifie",
        "range": "Non specifie",
        "incantation": "Esquive de l’Hermine",
        "particularity": [
            "Peut être utilisé en réaction ou de manière anticipée",
            "Ne permet pas de traverser des objets ou murs solides, mais réduit considérablement les chances d’être touché",
            "L’agilité physique de l’utilisateur influe légèrement sur la fluidité du déplacement",
            "L\u0027effet visuel et énergétique est coloré ou stylisé selon l\u0027affinité planétaire"
        ],
        "notes": [
            "Très utilisé par les combattants agiles ou en infériorité numérique",
            "Dans certaines écoles, ce sort est le premier véritable test d’harmonie Bestia / planétaire",
            "Peut être suivi d’un contre ou d’une attaque immédiate si bien maîtrisé"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Origine a definir...",
        "symbol": ""
    },
    {
        "id": 14,
        "name": "Ascension",
        "type": "Mobilité verticale / Reconnaissance / Contrôle aérien",
        "complexity": 3,
        "affinities": [

            "Aeris"
        ],
        "specific": "Stratos",
        "desc": "L’utilisateur déclenche une impulsion d’air contenue qui l’arrache du",
        "full_desc": "L’utilisateur déclenche une impulsion d’air contenue qui l’arrache du\u003cbr\u003esol sans bruit, puis grimpe à la verticale jusqu’à devenir une\u003cbr\u003e“aiguille” dans le ciel. Il peut se figer en vol stationnaire le temps\u003cbr\u003ed’un battement de cœur (ou davantage selon maîtrise) afin d’observer\u003cbr\u003eet cartographier le relief alentour avec une grande stabilité, avant\u003cbr\u003ede redescendre en taillant l’air, trajectoire fine et tendue qui\u003cbr\u003eminimise la traînée et perturbe légèrement les flux autour de lui.\u003cbr\u003eLa portée, la vitesse de montée et la durée du stationnaire varient\u003cbr\u003eavec la maîtrise.",
        "mana": "Moyenne à élevée (pics à l’impulsion et au maintien stationnaire)",
        "duration": "De quelques secondes à plus d’une minute de stationnaire selon le niveau - Altitude typique : De 15–30 m (novice) à plusieurs centaines de mètres (expert), si le couvert est dégagé",
        "range": "Non specifie",
        "incantation": "Ascension",
        "particularity": [
            "Départ quasi muet, idéal pour échapper à une mêlée ou prendre de la hauteur tactique.",
            "Nécessite un espace aérien libre ; les structures au-dessus limitent ou annulent la montée.",
            "La descente “coupante” peut dévier très légèrement poussières, fines gouttelettes ou projectiles légers proches de la trajectoire, sans être un sort offensif.",
            "Influence de l’individu (multi-affinité) :",
            "Stratos fournit la poussée verticale et la colonne de pression stable pour le stationnaire.",
            "Zephyria apporte la micro-commande : corrections fines, immobilité quasi parfaite, changements d’angle instantanés et atterrissage précis.",
            "Les utilisateurs très doués présentent un sillage laminaire à la descente, rendant la trajectoire difficile à lire."
        ],
        "notes": [
            "Excellent pour reconnaissance, repositionnement rapide, éviter une zone d’effet.",
            "Risque principal : rupture de maintien en cas de choc, perturbation violente ou fatigue — prévoir Rempart ou une roulade à l’atterrissage.",
            "Souvent combiné à Présence (signal visuel/aural depuis les hauteurs) ou à un Dash latéral juste après la descente pour surprendre."
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Vents Dominants – Aéromagie de Haute Altitude (Tome III)",
        "symbol": ""
    },
    {
        "id": 16,
        "name": "Nulléon",
        "type": "Dissimulation totale / Fusion lumineuse et ombrale",
        "complexity": 5,
        "affinities": [

            "Lumia", "Umbra"
        ],
        "specific": "Luxia / Abyssum",
        "desc": "L’utilisateur dissout son corps dans une interférence parfaite entre",
        "full_desc": "L’utilisateur dissout son corps dans une interférence parfaite entre\u003cbr\u003elumière et ombre, annulant toute réflexion, absorption et émission\u003cbr\u003evisible.\u003cbr\u003eLe résultat est une invisibilité absolue, dépourvue de toute\u003cbr\u003edistorsion visuelle, magique ou énergétique — un effacement pur,\u003cbr\u003eimperceptible même par les sens magiques classiques.\u003cbr\u003eLe sort peut s’étendre à plusieurs individus en contact direct avec Lily\u003cbr\u003eau moment de l’activation, formant un voile collectif.\u003cbr\u003eContrairement aux sorts de dissimulation connus (luxiques, illusoires ou\u003cbr\u003eumbrales), Nulléon ne masque pas — il supprime l’existence optique de ce\u003cbr\u003equ’il englobe.\u003cbr\u003econnue)",
        "mana": "Variable – faible au déclenchement, soutenue pour le maintien",
        "duration": "Limitée par la concentration de l’utilisatrice (peut durer plusieurs minutes)",
        "range": "Auto-appliqué, ou étendu par contact direct",
        "incantation": "« Silence de lumière… chute d’ombre… Nulléon. » (L’incantation disparaît ensuite de l’usage : le sort s’active sans un mot, silencieusement.)",
        "particularity": [
            "Véritable annulation de la perception visuelle, et non une illusion",
            "Ne laisse aucune trace lumineuse, ombre, chaleur ou refraction d’air",
            "Fonctionne même sous observation magique ou à travers des lentilles énergétiques",
            "L’effet se rompt instantanément si le contact est perdu entre les entités invisibles",
            "L’incantation a rapidement été abandonnée : le sort répond directement à la volonté de Lily",
            "Influence de l’individu :",
            "Seule Lily est capable de maintenir l’équilibre absolu entre Luxia et Abyssum",
            "Tout autre mage tentant de le reproduire verrait son mana se déchirer entre les deux affinités opposées",
            "L’état d’invisibilité totale s’accompagne d’une sensation d’absence, comme si le corps n’était plus qu’une idée"
        ],
        "notes": [
            "Considéré comme le premier et seul véritable sort d’invisibilité de Parralela",
            "Étudié mais jamais reproduit : les chercheurs parlent de “Singularité Luxombre”",
            "Lily aurait décrit sa création comme « le silence du monde lui-même »",
            "Le nom Nulléon vient de la fusion des termes Nullus (rien) et Eón (énergie, éternité) — littéralement : l’énergie du néant"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Créatrice : Lily Eloiranôr",
        "symbol": ""
    },
    {
        "id": 17,
        "name": "Fusion ponctuelle : Trombe de Lave",
        "type": "Offensif / Zone / Enveloppement",
        "complexity": 3,
        "affinities": [

            "Aeris", "Pyros"
        ],
        "specific": "Stratos / Vulcan",
        "desc": "Résulte de la fusion en combat du sort Trombe Cinglante (vent en",
        "full_desc": "Résulte de la fusion en combat du sort Trombe Cinglante (vent en\u003cbr\u003espirale rapide) et Cri du Volcan (projection de lave ascendante).\u003cbr\u003eLa lave est captée dans le flux, tressée dans l’air, et prend la forme\u003cbr\u003ed’une tornade orange sombre, capable d’engloutir une cible entière.\u003cbr\u003eLa température à la base devient extrême, les flux de vent rendent\u003cbr\u003el’évasion presque impossible, et le corps est soumis à des pressions\u003cbr\u003econtraires violentes.\u003cbr\u003e- Conditions :\u003cbr\u003e- Nécessite une coordination parfaite entre les deux mages\u003cbr\u003e- Peut devenir instable si mal exécutée (explosion de lave non\u003cbr\u003emaîtrisée)",
        "mana": "Non specifie",
        "duration": "Non specifie",
        "range": "Non specifie",
        "incantation": "",
        "particularity": [
            "Non reproductible en solo sans un sort multi-affinité dédié",
            "Peut être interrompu si le flux d’air est brisé",
            "Peut déclencher des réactions violentes du sol ou de l’atmosphère selon l’environnement",
            "Nom officiel : Aucun – combinaison tactique improvisée"
        ],
        "notes": [

        ],
        "lore": "Nature du sort a definir...",
        "origin": "Origine a definir...",
        "symbol": ""
    },
    {
        "id": 18,
        "name": "Éruption Foudroyante",
        "type": "Offensif / Zone / Percussion",
        "complexity": 3,
        "affinities": [

            "Pyros"
        ],
        "specific": "Vulcan",
        "desc": "L’utilisateur concentre une masse de magma instable, compressée par",
        "full_desc": "L’utilisateur concentre une masse de magma instable, compressée par\u003cbr\u003eune charge d’énergie explosive pure.\u003cbr\u003eEn l’expulsant en cloche ou en jet direct, la masse explose violemment\u003cbr\u003eà l’impact, projetant à la fois des fragments incandescents et des\u003cbr\u003eéclats de lave brûlante dans un rayon étroit.\u003cbr\u003eL’explosion est plus violente que les sorts Pyros basiques, avec un\u003cbr\u003eimpact thermique et cinétique simultané.",
        "mana": "Haute",
        "duration": "Non specifie",
        "range": "6 à 10 mètres (dépend du lancer)",
        "incantation": "« Que la terre bouille et le feu crache sa rage… Éruption Foudroyante ! »",
        "particularity": [
            "L’impact marque le sol d’un résidu de lave semi-active durant quelques secondes",
            "Très difficile à contrer avec un simple bouclier magique classique",
            "Interdit dans les duels scolaires à cause du risque de brûlures graves ou de perte de contrôle",
            "Influence de l’individu :",
            "La forme du projectile varie : certains le condensent en une sphère lisse, d’autres en masse tourbillonnante",
            "La zone de projection peut être allongée ou rendue plus instable selon la sensibilité à Ignis (plus explosif) ou Vulcan (plus brûlant)",
            "L’aura émise par le lanceur au moment de l’incantation peut provoquer une pression de chaleur ressentie même avant le lancement"
        ],
        "notes": [
            "Très utilisé en combat contre des créatures massives ou en groupe",
            "Nécessite une certaine résistance à la chaleur, car l’utilisateur subit un léger contrecoup thermique",
            "Peut transformer le terrain local (sol fondu, nappe de feu temporaire)"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Coeur de Cendres – Maîtrise des Fusions Pyriques (Tome I)",
        "symbol": ""
    },
    {
        "id": 19,
        "name": "Aether Transe",
        "type": "Déplacement / Téléportation atmosphérique",
        "complexity": 4,
        "affinities": [
            "Fulgora"
        ],
        "specific": "Tempestra",
        "desc": "L’utilisateur déclenche une concentration atmosphérique violente,",
        "full_desc": "L’utilisateur déclenche une concentration atmosphérique violente,\u003cbr\u003eformant au-dessus du point d’origine un nuage gris métallique chargé\u003cbr\u003ed’énergie.\u003cbr\u003eEn un instant, un éclair s’abat, frappant le sol avec un fracas\u003cbr\u003ecolossal.\u003cbr\u003eLorsque la lumière se dissipe, le mage a disparu, emporté dans la\u003cbr\u003etrame du tonnerre.\u003cbr\u003eLe même phénomène se reproduit au point d’arrivée, souvent accompagné\u003cbr\u003ed’un nouvel éclair et d’une onde de choc sonore.\u003cbr\u003eCe déplacement peut couvrir des distances régionales, franchissant en\u003cbr\u003emoins d’une minute plusieurs dizaines de kilomètres, voire des\u003cbr\u003efrontières entières si le ciel est déjà chargé électriquement.\u003cbr\u003eéquivalent)",
        "mana": "Colossale",
        "duration": "Instantanée (mais provoque un orage localisé pouvant durer quelques secondes)",
        "range": "Variable – jusqu’à plusieurs régions selon la stabilité du flux atmosphérique",
        "incantation": "« Aether Transe »",
        "particularity": [
            "Le sort ne se téléporte pas réellement : l’utilisateur fusionne temporairement avec le flux électrique atmosphérique, parcourant la distance à une vitesse proche de celle de la foudre",
            "Peut être suivi à la trace par les anomalies magnétiques qu’il laisse derrière",
            "L’apparition à l’arrivée provoque une onde de choc capable de repousser les objets et d’éteindre les flammes",
            "Utilisable uniquement sous une atmosphère chargée (orage naturel, terrain humide, ou champ de mana dense)",
            "Influence de l’individu :",
            "Les mages de rang inférieur s’évaporeraient s’ils tentaient d’imiter ce sort",
            "Le contrôle du flux électrique nécessite une harmonie absolue avec Tempestra, ainsi qu’un ancrage corporel exceptionnel",
            "La 4ᵉ Cime, réputée pour l’utiliser, serait la seule capable d’enchaîner plusieurs Transe Tempestaire consécutives sans perte de conscience"
        ],
        "notes": [
            "Le déplacement est précédé d’un silence atmosphérique total, souvent considéré comme la \"signature\" du mage",
            "Dans les archives, ce sort est parfois surnommé « Le Chemin du Tonnerre », car il transforme la foudre en passage, et le ciel en route",
            "Il s’agit d’un symbole de suprématie magique, démontrant la domination absolue du mage sur les flux naturels"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Aucun",
        "symbol": ""
    },
    {
        "id": 20,
        "name": "Judicium Fulmen",
        "type": "Mobilité offensive / Attaque terminale",
        "complexity": 3,
        "affinities": [
            "Fulgora"
        ],
        "specific": "Tempestra",
        "desc": "L’utilisateur enveloppe ses membres inférieurs d’un champ de foudre",
        "full_desc": "L’utilisateur enveloppe ses membres inférieurs d’un champ de foudre\u003cbr\u003econductrice, lui permettant de prendre appui sur des surfaces\u003cbr\u003everticales comme si la gravité était momentanément redéfinie.\u003cbr\u003eChaque pas contre la roche ou le métal provoque un crépitement\u003cbr\u003eélectrique, un flash bref et une odeur d’ozone, signe de l’ancrage\u003cbr\u003etemporaire de Tempestra.\u003cbr\u003eAprès une montée fulgurante, l’utilisateur rompt volontairement\u003cbr\u003el’équilibre, pivote en l’air et se projette vers le bas.\u003cbr\u003eLa chute est alors canalisée, la foudre se compacte autour du corps, et\u003cbr\u003el’impact final devient une frappe verticale écrasante, comparable à une\u003cbr\u003eguillotine de foudre.",
        "mana": "Élevée (pic majeur lors de la frappe finale)",
        "duration": "1 à 2 secondes (enchaînement continu)",
        "range": "Dépend de la hauteur atteinte (jusqu’à plusieurs dizaines de mètres)",
        "incantation": "Judicium Fulmen",
        "particularity": [
            "Le sort ne permet pas de voler : il transforme brièvement les surfaces en points d’appui conducteurs.",
            "L’impact final combine vitesse de chute + charge électrique, causant dégâts physiques et électriques simultanés.",
            "Très dangereux sans maîtrise : une erreur de timing peut entraîner une chute non amortie.",
            "L’onde de choc à l’impact peut déséquilibrer ou projeter les entités proches."
        ],
        "notes": [
            "Souvent utilisé comme coup de grâce contre des créatures massives.",
            "Le Bestia–Espadon, lorsqu’il est présent, augmente la pénétration et la violence, mais n’est pas requis pour le sort.",
            "Les témoins décrivent souvent un silence bref juste avant l’impact, suivi d’un fracas électrique brutal.",
            "Dans les archives, le sort est surnommé « La Sentence du Ciel »."
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Orages Primordiaux – Cinétique et Foudre Conductrice (Tome II)",
        "symbol": ""
    },
    {
        "id": 21,
        "name": "Dash",
        "type": "Mobilité / Esquive",
        "complexity": 1,
        "affinities": [

        ],
        "specific": "Universel",
        "desc": "L’utilisateur concentre son mana dans son corps puis déclenche une",
        "full_desc": "L’utilisateur concentre son mana dans son corps puis déclenche une\u003cbr\u003epropulsion instantanée dans la direction voulue (avant, arrière,\u003cbr\u003elatérale).\u003cbr\u003eLa distance parcourue, la vitesse et l’éventuelle traînée résiduelle\u003cbr\u003edépendent directement de son affinité planétaire :\u003cbr\u003e- Certaines affinités favorisent une poussée longue et rapide (ex :\u003cbr\u003eAeris, Fulgora).\u003cbr\u003e- D’autres produisent une poussée brève mais violente (ex :\u003cbr\u003ePyros–Ignis).\u003cbr\u003e- Certaines encore laissent une trace persistante (flamme, givre,\u003cbr\u003eombre, éclats, spores…).\u003cbr\u003eLe Dash peut être utilisé pour esquiver une attaque, réduire une\u003cbr\u003edistance, changer brutalement de position ou surprendre un adversaire.\u003cbr\u003edifficile)",
        "mana": "Faible à moyenne selon la distance parcourue",
        "duration": "Non specifie",
        "range": "Varie de 1 à 5 mètres pour un novice, bien plus pour des mages expérimentés",
        "incantation": "Dash ou aucune",
        "particularity": [
            "L’utilisateur conserve son inertie après le mouvement → risque de chute ou de déséquilibre s’il n’est pas préparé",
            "Peut être utilisé en plein air ou au sol, mais reste limité en environnement fermé"
        ],
        "notes": [
            "Forme la base de nombreuses techniques avancées de mobilité (enchaînements d’attaques, esquives parfaites, assauts soudains)",
            "Les mages aguerris combinent plusieurs Dash avec d’autres sorts pour créer des styles de combat uniques",
            "Dans les académies, le Dash est souvent un premier test de synergie entre affinité et mana pur"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Fondamentaux du Mana – Sorts Universels de Survie (Tome I)",
        "symbol": ""
    },
    {
        "id": 23,
        "name": "Présence",
        "type": "Social / Détection / Symbolique",
        "complexity": 1,
        "affinities": [

        ],
        "specific": "Universel",
        "desc": "Projette une manifestation pure de l’essence magique de l’utilisateur.",
        "full_desc": "Projette une manifestation pure de l’essence magique de l’utilisateur.\u003cbr\u003eCe n’est ni un sort d’attaque, ni un sort matériel, mais une\u003cbr\u003edéclaration d’identité magique.\u003cbr\u003eLe sort révèle :\u003cbr\u003e- L’affinité principale (et parfois lunaire)\u003cbr\u003e- La quantité brute de mana\u003cbr\u003e- Le style personnel de l’utilisateur (intimidant, serein, éclatant,\u003cbr\u003einstable, lourd, vide…)\u003cbr\u003e- Éventuellement la présence d’une Bestia ou d’un héritage rare",
        "mana": "Très faible en théorie, mais peut être amplifiée volontairement pour impressionner ou influencer",
        "duration": "Instantané ou maintenu quelques secondes. Projeté localement, sa portée dépend directement de la quantité brute de mana.",
        "range": "Non specifie",
        "incantation": "Présence",
        "particularity": [
            "N’est pas conçu pour blesser ou affecter physiquement.",
            "Sort hautement contextuel : utilisé pour montrer, dissuader, évaluer, reconnaître, dialoguer ou marquer un territoire magique.",
            "Très utilisé dans les duels officiels pour annoncer son niveau, éviter un combat inutile, ou tester discrètement un adversaire.",
            "Influence de l’individu : Le sort varie fortement selon l’utilisateur. → Chez un novice : une simple impression faible, souvent brouillonne. → Chez un mage accompli : une aura spectaculaire qui impose le respect ou la crainte. → Chez certains porteurs de Bestia ou affinités rares : des manifestations uniques (hurlement silencieux, reflets lunaires, illusions, grondement interne…).",
            "Utilisation stratégique :",
            "Pour signaler sa position à un allié à distance",
            "Pour imposer un silence ou calmer un environnement tendu",
            "Pour créer un effet psychologique lors d’une négociation ou d’un affrontement"
        ],
        "notes": [
            "Les duels de Présence (silencieux ou publics) sont une pratique courante dans certains clans, académies ou milieux militaires.",
            "La maîtrise de Présence est un marqueur de maturité magique. Ceux qui la contrôlent bien savent projeter exactement ce qu’ils veulent montrer… ou masquer."
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Non référencé (connu de tous)",
        "symbol": ""
    },
    {
        "id": 24,
        "name": "Rempart",
        "type": "Défensif / Protection instantanée",
        "complexity": 1,
        "affinities": [

        ],
        "specific": "Universel",
        "desc": "L’utilisateur crée un bouclier magique adaptatif entre lui et la",
        "full_desc": "L’utilisateur crée un bouclier magique adaptatif entre lui et la\u003cbr\u003emenace perçue.\u003cbr\u003eLe type, la forme, la résistance et l’apparence du rempart dépendent\u003cbr\u003eentièrement de l’affinité planétaire de l’utilisateur, mais aussi de\u003cbr\u003ela nature de l’attaque reçue.\u003cbr\u003eLe rempart peut bloquer des attaques physiques ou magiques, mais il est\u003cbr\u003eplus ou moins efficace selon :\u003cbr\u003e- La compatibilité avec l’affinité\u003cbr\u003e- La maîtrise de l’utilisateur\u003cbr\u003e- Le type d’énergie ou de force subie\u003cbr\u003eExemples :\u003cbr\u003e- Un Rempart généré par un utilisateur Terra–Golem sera parfait contre\u003cbr\u003eles projectiles, mais vulnérable aux attaques fluides ou\u003cbr\u003econtournantes.\u003cbr\u003e- Un Rempart d’un mage Umbra–Noctis pourra dévier une attaque lumineuse\u003cbr\u003emais se briser face à une explosion directe.\u003cbr\u003edéclencher, difficile à maîtriser)",
        "mana": "Variable – faible pour une simple protection frontale, élevée pour un rempart complet ou prolongé",
        "duration": "Non specifie",
        "range": "Centré sur l’utilisateur",
        "incantation": "Rempart ou aucune si très bonne maîtrise.",
        "particularity": [
            "Peut être déclenché instantanément pour une défense réflexe",
            "La forme et la matière perçue changent visuellement selon l’affinité (feu, roche, lumière, vent, etc.)",
            "Peut être projeté devant un allié à courte portée avec un haut niveau de contrôle"
        ],
        "notes": [
            "Enseigné dès les premiers entraînements de survie magique",
            "Les utilisateurs expérimentés parviennent à moduler la densité, la forme et même l’orientation du rempart",
            "Les combattants vétérans savent observer un Rempart pour lire l’affinité d’un adversaire"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Non référencé (connu de tous)",
        "symbol": ""
    },
    {
        "id": 25,
        "name": "Ancrage Lumineux",
        "type": "Utilitaire / Environnement",
        "complexity": 1,
        "affinities": [
            "Lumia"
        ],
        "specific": "Solara",
        "desc": "L’utilisateur matérialise un point d’éclairage fixe sur une surface de",
        "full_desc": "L’utilisateur matérialise un point d’éclairage fixe sur une surface de\u003cbr\u003eson choix (sol, mur, plafond). Le point émet une lueur stable, blanche\u003cbr\u003eou légèrement dorée, sans chaleur, qui éclaire doucement une zone\u003cbr\u003edéfinie.\u003cbr\u003eL’éclairage est indépendant de l’utilisateur : il peut quitter les\u003cbr\u003elieux sans que le sort ne disparaisse.",
        "mana": "Faible (dépend de la durée d’ancrage)",
        "duration": "Varient selon le niveau : - Débutant : 2 à 5 minutes de lumière pour un rayon d’environ 2 mètres - Avancé : jusqu’à plusieurs heures et un rayon de 5 mètres ou plus",
        "range": "Non specifie",
        "incantation": "Ancrage Lumineux",
        "particularity": [
            "→ Utilisable dans l’obscurité totale, les souterrains, les donjons, ou pour marquer une zone de sécurité → Le point lumineux est immobile, mais peut être désactivé volontairement à distance si l’utilisateur est encore à portée visuelle ou sensorielle",
            "Influence de l’individu :",
            "Les utilisateurs Lumia affiliés à Luxia peuvent moduler la teinte, la forme ou la douceur de la lumière (ex : lumière pulsée, cercles concentriques, halo flottant au lieu d’un simple point).",
            "Un utilisateur expérimenté peut créer plusieurs Ancrages Lumineux en parallèle, jusqu’à trois maximum (selon l’entraînement)."
        ],
        "notes": [
            "Très utilisé lors des expéditions nocturnes, des entraînements dans des zones non éclairées, ou des rituels nécessitant de la lumière pure.",
            "Peut perturber certains sorts d’Ombre ou illusions faibles."
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Lumières Premières – Initiation à la magie lumineuse (Tome I)",
        "symbol": ""
    },
    {
        "id": 26,
        "name": "Bang",
        "type": "Offensif / Déstabilisation / Illusoire",
        "complexity": 1,
        "affinities": [
            "Lumia"
        ],
        "specific": "Solara",
        "desc": "L’utilisateur crée une sphère de lumière flottante, visuellement",
        "full_desc": "L’utilisateur crée une sphère de lumière flottante, visuellement\u003cbr\u003esemblable au sort de base Sphère Lumineuse. Elle peut être lancée\u003cbr\u003emanuellement, affectée par la gravité, et rebondit au contact des\u003cbr\u003esurfaces malgré sa nature immatérielle.\u003cbr\u003eAprès un court délai ou au moment choisi, l’utilisateur prononce\u003cbr\u003el’incantation « Bang », provoquant une détonation lumineuse en flash\u003cbr\u003eaveuglant, dans toutes les directions.\u003cbr\u003eCe flash n’inflige aucun dégât, mais aveugle temporairement les\u003cbr\u003epersonnes regardant la sphère ou présentes dans sa zone d’effet,\u003cbr\u003edésorientant même les adversaires entraînés.",
        "mana": "Faible",
        "duration": "Non specifie",
        "range": "- Zone d’aveuglement : environ 3 à 4 mètres autour de l’explosion (variable selon le niveau) - Délai avant activation : minimum 2 secondes (le flash n\u0027est pas immédiat) - Rebondit 2 à 3 fois avant de perdre son inertie",
        "incantation": "Bang",
        "particularity": [
            "Peut être confondue volontairement avec une simple source de lumière pour piéger un adversaire",
            "Aucun bruit n’est produit lors de l’explosion : c’est un éclair silencieux",
            "Ne fonctionne pas à travers des surfaces opaques (murs, protections physiques)"
        ],
        "notes": [
            "Très utile pour ouvrir une brèche dans une formation, interrompre un sort en préparation, ou prendre l’avantage en duel rapproché",
            "Peut gêner également les alliés si mal positionnée"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Lumières Premières – Initiation à la magie lumineuse (Tome I)",
        "symbol": ""
    },
    {
        "id": 27,
        "name": "Couloir Lumineux",
        "type": "Contrôle de terrain / Canalisation",
        "complexity": 2,
        "affinities": [
            "Lumia"
        ],
        "specific": "Solara",
        "desc": "Erige un couloir de lumière (deux lignes parallèles) qui éclaire,",
        "full_desc": "Erige un couloir de lumière (deux lignes parallèles) qui éclaire,\u003cbr\u003erefroidit visuellement et déroute les affinités très thermiques le\u003cbr\u003elong de ses bords, canalisant la trajectoire d’une cible.",
        "mana": "Faible–moyenne",
        "duration": "10–20 s",
        "range": "0–12 m",
        "incantation": "Couloir Lumineux",
        "particularity": [
            "effets thermiques aux limites."
        ],
        "notes": [

        ],
        "lore": "Nature du sort a definir...",
        "origin": "Lumières Premières – Initiation à la magie lumineuse (Tome I)",
        "symbol": ""
    },
    {
        "id": 28,
        "name": "Flash",
        "type": "Offensif / Déstabilisation visuelle",
        "complexity": 1,
        "affinities": [
            "Lumia"
        ],
        "specific": "Solara",
        "desc": "L’utilisateur déclenche un éclat de lumière brutale et concentrée,",
        "full_desc": "L’utilisateur déclenche un éclat de lumière brutale et concentrée,\u003cbr\u003eprojetée depuis le point de son choix (main, arme, surface, œil,\u003cbr\u003eetc.).\u003cbr\u003eLe flash aveugle temporairement toutes les personnes regardant dans sa\u003cbr\u003edirection et désoriente les cibles proches par un effet d’explosion\u003cbr\u003elumineuse.\u003cbr\u003eIl n’inflige aucun dégât, mais son efficacité réside dans la surprise\u003cbr\u003eet la rupture visuelle totale.",
        "mana": "Très faible",
        "duration": "1 à 3 secondes (peut s’allonger si répété à courte distance)",
        "range": "De 2 à 6 mètres selon l’intensité choisie",
        "incantation": "Flash",
        "particularity": [
            "Peut être émis dans toutes les directions ou concentré en cône frontal",
            "Inefficace contre des créatures ou individus insensibles à la lumière",
            "Peut masquer un déplacement, une esquive ou une attaque rapide",
            "Ne laisse aucune trace résiduelle, la lumière disparaît aussitôt"
        ],
        "notes": [
            "Sort souvent sous-estimé, mais extrêmement utile en combat rapproché ou pour briser le rythme d’un adversaire",
            "Sert de contre instantané aux sorts d’invocation ou de visée optique",
            "Enseigné très tôt dans la formation Lumia, car il apprend la modulation de l’intensité lumineuse"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Lumières Premières – Initiation à la magie lumineuse (Tome I)",
        "symbol": ""
    },
    {
        "id": 29,
        "name": "Linceul de Lune",
        "type": "Défensif / Illusoire",
        "complexity": 1,
        "affinities": [
            "Lumia"
        ],
        "specific": "Luxia",
        "desc": "Le corps de l’utilisateur est enveloppé d’une brume pâle et lumineuse,",
        "full_desc": "Le corps de l’utilisateur est enveloppé d’une brume pâle et lumineuse,\u003cbr\u003epresque éthérée. Cette brume trouble légèrement la vision de ceux qui\u003cbr\u003eregardent l’utilisateur, rendant ses contours flous, presque irréels.\u003cbr\u003eL’effet altère la perception, réduisant la précision des attaques\u003cbr\u003eennemies à courte et moyenne distance. Il peut également gêner la\u003cbr\u003ereconnaissance visuelle dans l’obscurité ou à contre-jour.",
        "mana": "Faible à moyenne (selon durée et qualité de l’effet)",
        "duration": "Variables selon le niveau de maîtrise. → À bas niveau : l’effet dure une dizaine de secondes, avec une légère brume uniquement visible à courte portée. → À haut niveau : la brume devient plus dense, plus active, et peut suivre les mouvements du corps pour accentuer l\u0027effet d’irréalité.",
        "range": "Non specifie",
        "incantation": "Linceul de Lune",
        "particularity": [
            "Le sort est non offensif, mais précieux pour l’évasion, la dissimulation partielle ou la perturbation d’un adversaire durant un duel. Très utilisé dans les exercices de déplacement furtif à l’académie.",
            "Influence de l’individu : → Les utilisateurs Lumia à forte affinité avec Luxia peuvent produire une brume iridescente qui réfracte la lumière ambiante, accentuant l\u0027effet d\u0027illusion ou créant de légers mirages autour d’eux."
        ],
        "notes": [
            "S’utilise souvent en complément de sorts d’évitement ou de feintes.",
            "Certains mages expérimentés l’utilisent même pour tromper des capteurs magiques ou semer leurs poursuivants."
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Principes élémentaires des affinités – Tome I",
        "symbol": ""
    },
    {
        "id": 30,
        "name": "Sphère Lumineuse",
        "type": "Utilitaire / Éclairage",
        "complexity": 1,
        "affinities": [
            "Lumia"
        ],
        "specific": "Solara",
        "desc": "Crée une ou plusieurs sphères de lumière stable qui éclairent une zone",
        "full_desc": "Crée une ou plusieurs sphères de lumière stable qui éclairent une zone\u003cbr\u003eet peuvent s’accrocher/se placer près d’éléments (murs, pierres) pour\u003cbr\u003eun éclairage tactique. Intensité modulable.",
        "mana": "Très faible",
        "duration": "Minutes (varie avec l’intensité)",
        "range": "0–10 m (placement à vue)",
        "incantation": "Sphère Lumineuse",
        "particularity": [
            "inoffensive)."
        ],
        "notes": [

        ],
        "lore": "Nature du sort a definir...",
        "origin": "Lumières Premières – Initiation à la magie lumineuse (Tome I)",
        "symbol": ""
    },
    {
        "id": 31,
        "name": "Clou Photique",
        "type": "Offensif / Entrave",
        "complexity": 1,
        "affinities": [
            "Lumia"
        ],
        "specific": "Photis",
        "desc": "L’utilisateur projette un ou plusieurs pieux fins de lumière",
        "full_desc": "L’utilisateur projette un ou plusieurs pieux fins de lumière\u003cbr\u003econdensée, longs et translucides, ressemblant à des clous ou épines\u003cbr\u003ed’énergie dure.\u003cbr\u003eLorsqu’un clou touche une cible vivante, il traverse sans perforer\u003cbr\u003eréellement : la lumière pénètre l’enveloppe physique sans blesser,\u003cbr\u003epuis se fige dans la matière traversée (air ou surface).\u003cbr\u003eSi le projectile touche une cible + une surface rigide (mur, sol,\u003cbr\u003earbre…), il se fixe dans la matière et immobilise le membre ou la partie\u003cbr\u003edu corps qui était sur la trajectoire.\u003cbr\u003eL\u0027effet est non douloureux mais paralysant, gênant fortement les\u003cbr\u003emouvements.",
        "mana": "Moyenne (augmente si plusieurs clous sont générés)",
        "duration": "Non specifie",
        "range": "Dépend du niveau du lanceur. À bas niveau : 1 seul clou à la fois, porté à 5-6 mètres. À haut niveau : jusqu’à 3 clous à la fois, plus rapides et précis.",
        "incantation": "Clou Photique",
        "particularity": [
            "Ne cause aucune blessure physique, sauf vibration magique forte ou contre-sort violent",
            "Les clous restent figés jusqu’à : • Dissipation volontaire du sort • Rupture par un sort externe ou un choc suffisant • Fin naturelle après un temps variable",
            "Influence de l’individu : Les mages à forte affinité Photis peuvent produire :",
            "Des clous plus fins et rapides (presque comme des lasers solides)",
            "Des effets stroboscopiques ou aveuglants à l’impact",
            "Une lueur persistante sur la zone touchée (comme une cicatrice lumineuse temporaire)"
        ],
        "notes": [
            "Sort très utilisé en duel pour restreindre les mouvements d’un adversaire sans danger vital",
            "Utilisé également en situation d’arrestation ou de retenue temporaire en combat d’équipe",
            "Peut être annulé plus facilement par des affinités de type Umbra ou Terra selon le contexte"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Principes élémentaires des affinités – Tome I",
        "symbol": ""
    },
    {
        "id": 32,
        "name": "Anneau Solaire",
        "type": "Rituel / Contrôle de zone / Détection passive",
        "complexity": 2,
        "affinities": [
            "Lumia"
        ],
        "specific": "Solara",
        "desc": "L’utilisateur trace au sol un anneau de chaleur douce et stable,",
        "full_desc": "L’utilisateur trace au sol un anneau de chaleur douce et stable,\u003cbr\u003epresque invisible à l’œil nu, mais parfaitement perceptible\u003cbr\u003emagiquement.\u003cbr\u003eCet anneau agit comme un territoire sensoriel : tant que le lanceur\u003cbr\u003ereste à l’intérieur, il ressent toute perturbation, variation de\u003cbr\u003etempérature, ou déplacement magique dans le cercle.\u003cbr\u003eLe cercle n’attaque pas, ne protège pas, mais affirme une présence :\u003cbr\u003ecelle du mage et de sa maîtrise de la lumière comme frontière.",
        "mana": "Faible et constante (plus élevée si maintenu longtemps)",
        "duration": "Tant que le lanceur reste connecté à la zone",
        "range": "Cercle de 3 à 5 mètres de rayon - Visibilité : Invisible à l’œil nu, visible sous perception magique ou thermique",
        "incantation": "Anneau Solaire",
        "particularity": [
            "L’anneau dégage une chaleur presque imperceptible, suffisante pour marquer le sol à faible intensité",
            "Toute intrusion ou mouvement dans la zone provoque un écho thermique que le mage perçoit instantanément",
            "Peut servir de repère magique, cercle de concentration, ou frontière symbolique"
        ],
        "notes": [
            "Très utilisé par les mages lumineux expérimentés pour conserver le contrôle d’un espace",
            "Peut interagir avec d’autres sorts Lumia, amplifiant les effets de lumière ou de perception à l’intérieur du cercle",
            "Certaines versions avancées (non enseignées) peuvent brûler légèrement les intrus franchissant la frontière"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Rayons Premiers – Fondements de la Magie Lumineuse (Tome II)",
        "symbol": ""
    },
    {
        "id": 33,
        "name": "Rayon Solarien",
        "type": "Offensif / Perforation lumineuse",
        "complexity": 2,
        "affinities": [
            "Lumia"
        ],
        "specific": "Solara",
        "desc": "L’utilisateur condense dans sa paume une sphère de lumière dense,",
        "full_desc": "L’utilisateur condense dans sa paume une sphère de lumière dense,\u003cbr\u003ejaune vif, trop intense pour être soutenue à l’œil nu.\u003cbr\u003eEn relâchant la charge, la sphère se déplie en un rayon solaire\u003cbr\u003econcentré, extrêmement chaud, qui brûle la peau, traverse les tissus,\u003cbr\u003eet laisse une douleur interne profondément ancrée dans les muscles.\u003cbr\u003eLe rayon se déplace quasi instantanément et vise une zone précise,\u003cbr\u003esouvent le torse ou le visage.",
        "mana": "Moyenne",
        "duration": "Instantanée",
        "range": "5 à 12 mètres selon maîtrise",
        "incantation": "Rayon Solarien",
        "particularity": [
            "Couleur jaune solaire, plus agressive et plus chaude que les sorts Lumia standards.",
            "Brûlure lumineuse : la douleur pénètre en profondeur, laissant parfois une trace interne sur le muscle.",
            "Très difficile à esquiver sans couverture ou Dash.",
            "Inefficace à travers les surfaces opaques mais peut traverser certaines matières semi-transparentes."
        ],
        "notes": [
            "Sort souvent utilisé pour terminer une ouverture ou punir une garde levée trop tard.",
            "Peut provoquer une cécité ponctuelle si l’adversaire regarde l’éclat initial.",
            "Fonctionne particulièrement bien en synergie avec Bang ou des illusions Luxia (le flash d’une sphère peut masquer la préparation du tir)."
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Rayons Premiers – Techniques de Lumière Concentrée (Tome II)",
        "symbol": ""
    },
    {
        "id": 34,
        "name": "Voile de Cendres",
        "type": "Contrôle / Camouflage",
        "complexity": 1,
        "affinities": [
            "Pyros"
        ],
        "specific": "Fumar",
        "desc": "L’utilisateur génère une épaisse nappe de fumée sombre, couvrant une",
        "full_desc": "L’utilisateur génère une épaisse nappe de fumée sombre, couvrant une\u003cbr\u003ezone définie (de 3 à 6 mètres de rayon pour un débutant).\u003cbr\u003eCette fumée obscurcit totalement la vision et réduit la perception\u003cbr\u003evisuelle à quasi-néant, mais n’affecte pas la respiration : il s’agit\u003cbr\u003ed’une fumée illusoire et non toxique, créée pour perturber et masquer,\u003cbr\u003eet non pour suffoquer.\u003cbr\u003eElle se dissipe naturellement en quelques secondes, ou plus vite si\u003cbr\u003eventilée par un sort de vent.",
        "mana": "Faible à moyenne (selon densité et durée)",
        "duration": "1 à 2 minutes",
        "range": "Zone centrée à quelques mètres devant l’utilisateur",
        "incantation": "Voile de Cendres",
        "particularity": [
            "La fumée est complètement opaque à l’œil nu, mais certaines affinités (Umbra, Lumia, Aquaria–Nebula) peuvent y voir partiellement",
            "Ne provoque aucune gêne respiratoire, ce qui permet son usage tactique en équipe",
            "Peut être dissipée par des courants d’air naturels ou magiques"
        ],
        "notes": [
            "Très utilisé dans les duels, escarmouches et replis tactiques",
            "Peut masquer un déplacement, une invocation, ou servir de rideau visuel pour préparer un sort",
            "Sa neutralité respiratoire en fait un sort enseigné tôt, contrairement aux variantes toxiques plus avancées"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Brumes Ardentes – Initiation à la magie des Fumées (Tome I)",
        "symbol": ""
    },
    {
        "id": 35,
        "name": "Impact Ciblé",
        "type": "Offensif",
        "complexity": 1,
        "affinities": [
            "Pyros"
        ],
        "specific": "Ignis",
        "desc": "Génère une détonation localisée dans la direction des paumes tendues.",
        "full_desc": "Génère une détonation localisée dans la direction des paumes tendues.\u003cbr\u003eFaible zone d’impact, visée précise, idéale pour frapper un point ou\u003cbr\u003edétruire un objet ciblé.",
        "mana": "Faible à modérée",
        "duration": "Non specifie",
        "range": "Dépendent du niveau de l’utilisateur. À bas niveau, l’explosion se déclenche dans un rayon d’environ 3 mètres, avec un effet destructeur modéré. À haut niveau, la précision, la force d’impact et le délai d’exécution sont nettement améliorés.",
        "incantation": "Impact Ciblé",
        "particularity": [
            "Requiert une bonne coordination entre l’incantation et le geste. La gestuelle est donc essentielle à la réussite du sort."
        ],
        "notes": [

        ],
        "lore": "Nature du sort a definir...",
        "origin": "Principes élémentaires des affinités – Tome I",
        "symbol": ""
    },
    {
        "id": 36,
        "name": "Percée",
        "type": "Offensif / Jet frontal",
        "complexity": 2,
        "affinities": [
            "Pyros"
        ],
        "specific": "Ignis",
        "desc": "Projette un jet de flammes concentré et très directif pour percer une",
        "full_desc": "Projette un jet de flammes concentré et très directif pour percer une\u003cbr\u003eligne, ouvrir une brèche ou repousser une cible. Impact net, bref,\u003cbr\u003epuissant, sans propagation large.",
        "mana": "Moyenne",
        "duration": "Non specifie",
        "range": "6–10 m",
        "incantation": "Percée",
        "particularity": [
            "latéraux de la cible."
        ],
        "notes": [
            "l’alignement."
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Étincelles Premières – Initiation à la magie explosive (Tome I)",
        "symbol": ""
    },
    {
        "id": 37,
        "name": "Souffle de Choc",
        "type": "Offensif / Contrôle / Non-létal",
        "complexity": 1,
        "affinities": [
            "Pyros"
        ],
        "specific": "Ignis",
        "desc": "Génère une détonation ciblée qui explose à une distance allant jusqu’à",
        "full_desc": "Génère une détonation ciblée qui explose à une distance allant jusqu’à\u003cbr\u003e5 mètres, provoquant une onde de choc puissante mais faiblement\u003cbr\u003ebrûlante.\u003cbr\u003eL’objectif est de propulser violemment la cible, provoquant un\u003cbr\u003edéséquilibre ou un choc secondaire (mur, chute, etc.) plutôt qu’un\u003cbr\u003edégât direct.",
        "mana": "Moyenne - Précision \u0026 portée : Excellente jusqu’à 5 mètres. Perte de contrôle ou dispersion au-delà.",
        "duration": "Non specifie",
        "range": "Non specifie",
        "incantation": "Souffle de Choc",
        "particularity": [
            "Explosion instantanée et précise sur un corps mobile",
            "Non létale, ne laisse pas de flammes persistantes",
            "Très utilisée dans les duels ou entraînements pour mettre un adversaire hors combat rapidement sans le blesser gravement"
        ],
        "notes": [
            "Devient plus efficace dans des environnements confinés",
            "Peut désarmer ou déséquilibrer plusieurs adversaires si bien placé"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Étincelles Premières – Initiation à la magie explosive (Tome I)",
        "symbol": ""
    },
    {
        "id": 38,
        "name": "Aiguillons de Lave",
        "type": "Offensif / Multi-projectiles perforants",
        "complexity": 2,
        "affinities": [
            "Pyros"
        ],
        "specific": "Vulcan",
        "desc": "L’utilisateur génère une salve de projectiles tranchants, faits de",
        "full_desc": "L’utilisateur génère une salve de projectiles tranchants, faits de\u003cbr\u003elave semi-solidifiée en forme d’aiguilles ou éclats.\u003cbr\u003eLes projectiles sont chauffés à très haute température et perforent\u003cbr\u003eleur cible à l’impact, provoquant des brûlures profondes autant que\u003cbr\u003edes blessures mécaniques.\u003cbr\u003eIls sont lancés simultanément, en volée large ou concentrée, et\u003cbr\u003epeuvent se planter dans la chair ou la matière, laissant une chaleur\u003cbr\u003epersistante.",
        "mana": "Moyenne",
        "duration": "Non specifie",
        "range": "6 à 10 mètres (selon la puissance et la densité de la volée) - Nombre de projectiles : 5 à 12 aiguillons (variable selon maîtrise)",
        "incantation": "« Scories, couteaux… Aiguillons de Lave ! »",
        "particularity": [
            "Très efficace contre les protections magiques non thermiques",
            "Les aiguillons peuvent rester enfoncés, rendant les soins douloureux ou ralentissant les mouvements",
            "Peut être partiellement contrecarré par des affinités défensives (Terra – Golem, Aquaria – Glacius)"
        ],
        "notes": [
            "L’impact est autant psychologique que physique : odeur, douleur, désorientation",
            "L’utilisateur peut moduler la forme : éclats dentelés, flèches, épines plates",
            "Redoutable en combat rapproché ou pour forcer un déplacement de la cible"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Coeur de Cendres – Maîtrise des Fusions Pyriques (Tome I)",
        "symbol": ""
    },
    {
        "id": 39,
        "name": "Cri du Volcan",
        "type": "Offensif / Projection ascendante",
        "complexity": 3,
        "affinities": [
            "Pyros"
        ],
        "specific": "Vulcan",
        "desc": "L’utilisateur invoque une colonne de lave brute, surgie du sol ou",
        "full_desc": "L’utilisateur invoque une colonne de lave brute, surgie du sol ou\u003cbr\u003econdensée magiquement, qui s’élève comme un cri thermique.\u003cbr\u003eCette colonne tourbillonne à l’émission, fend l’air avec violence, et\u003cbr\u003epeut engloutir une cible, provoquant brûlures profondes, étouffement\u003cbr\u003ethermique ou enchaînement de projections internes.",
        "mana": "Haute",
        "duration": "Instantané, mais résidu brûlant au sol",
        "range": "4 à 6 mètres de haut, ~2 mètres de rayon",
        "incantation": "« Roche en fusion, viens avec moi… Cri du Volcan ! »",
        "particularity": [
            "Peut transformer le sol en lave temporaire",
            "Crée une pression montante qui gêne les déplacements proches",
            "Dangereux pour l’utilisateur s’il est trop proche au déclenchement"
        ],
        "notes": [
            "Utilisé pour piéger ou bloquer une cible dans une zone restreinte",
            "Peut faire office de rideau de séparation ou de mur de flammes vertical"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Coeur de Cendres – Maîtrise des Fusions Pyriques (Tome II)",
        "symbol": ""
    },
    {
        "id": 40,
        "name": "Fouet de Lave",
        "type": "Offensif / Mêlée à distance courte",
        "complexity": 2,
        "affinities": [
            "Pyros"
        ],
        "specific": "Vulcan",
        "desc": "L’utilisateur forme un fouet de lave semi-liquide, tiré de son arme ou",
        "full_desc": "L’utilisateur forme un fouet de lave semi-liquide, tiré de son arme ou\u003cbr\u003ede sa main, qu’il projette avec violence sur une cible.\u003cbr\u003eLe fouet épouse les mouvements du bras et frappe avec une vitesse et\u003cbr\u003eune précision chirurgicale, infligeant à la fois chocs brûlants,\u003cbr\u003ecloques profondes et perturbations nerveuses au point d’impact.\u003cbr\u003eLa lave refroidit en partie en touchant l’air, donnant au fouet une\u003cbr\u003etexture visqueuse mais tranchante.",
        "mana": "Moyenne à élevée",
        "duration": "Instantané ou maintien sur 2 à 3 coups rapides",
        "range": "2 à 4 mètres selon maîtrise du geste",
        "incantation": "« Basalte, déploie-toi… Fouet de Lave ! »",
        "particularity": [
            "Le fouet suit les mouvements du bras, permettant des angles d’attaque variés",
            "Peut contourner partiellement un bouclier ou viser un point vulnérable (nuque, articulation)",
            "Laisser une trace brûlante persistante sur les chairs ou les vêtements touchés"
        ],
        "notes": [
            "Très efficace contre des créatures massives ou à carapace (pour fendre ou fendre les articulations)",
            "Peut être difficile à contrôler pour un novice — risque de recul thermique ou fouet mal orienté",
            "Peut être enchaîné avec un coup physique ou une attaque perçante (technique de Marie)"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Coeur de Cendres – Maîtrise des Fusions Pyriques (Tome II)",
        "symbol": ""
    },
    {
        "id": 41,
        "name": "Chant du Marteau",
        "type": "Technique / Renforcement / Résonance",
        "complexity": 2,
        "affinities": [
            "Terra"
        ],
        "specific": "Metallia",
        "desc": "L’utilisateur modifie la structure interne de son arme métallique en",
        "full_desc": "L’utilisateur modifie la structure interne de son arme métallique en\u003cbr\u003efrappant selon une séquence rythmique précise.\u003cbr\u003eChaque frappe émet une onde sonore distincte, ajustant les vibrations\u003cbr\u003einternes du métal et synchronisant sa fréquence avec celle du sol.\u003cbr\u003eLe résultat peut servir à :\u003cbr\u003e- Renforcer la densité ou la cohésion du métal\u003cbr\u003e- Créer des ondes sismiques courtes à chaque impact\u003cbr\u003e- Perturber les résonances magiques proches, rendant inefficaces\u003cbr\u003ecertains sorts de contrôle du sol ou des racines (comme Tresse\u003cbr\u003eSouterraine)",
        "mana": "Moyenne",
        "duration": "Tant que le rythme est maintenu (souvent quelques secondes à peine)",
        "range": "Zone immédiate (onde de résonance ~3 à 5 mètres)",
        "incantation": "Chant du Marteau",
        "particularity": [
            "L’efficacité dépend du rythme et de la justesse sonore de la modulation",
            "Le sort est inaudible pour les non-initiés, mais les mages expérimentés sentent la vibration dans le sol",
            "Peut neutraliser ou brouiller certaines magies végétales, telluriques ou de surface"
        ],
        "notes": [
            "Nécessite une arme métallique creuse ou à chambre interne (marteau, masse, cloche, etc.)",
            "Certaines versions avancées permettent de transmettre le son dans le sol, pour cartographier une zone ou détecter des cavités",
            "Considéré comme un art ancien des forgerons-mages, plus rituel que combatif"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Ancrages Métalliques – Études sur la Résonance Tellurique",
        "symbol": ""
    },
    {
        "id": 42,
        "name": "Cuirasse",
        "type": "Défensif / Renforcement physique",
        "complexity": 2,
        "affinities": [
            "Terra"
        ],
        "specific": "Metallia",
        "desc": "L’utilisateur recouvre son corps d’une couche métallique vivante, fine",
        "full_desc": "L’utilisateur recouvre son corps d’une couche métallique vivante, fine\u003cbr\u003emais dense, qui épouse parfaitement les contours des muscles.\u003cbr\u003eL’armure se forme sous la forme :\u003cbr\u003e- d’un plastron lisse,\u003cbr\u003e- de gantelets articulés,\u003cbr\u003e- de renforts sur les jambes et les flancs,\u003cbr\u003e- parfois d’un masque partiel ou d’arêtes protectrices selon la\u003cbr\u003emaîtrise.\u003cbr\u003eCette armure renforce :\u003cbr\u003e- la résistance aux impacts,\u003cbr\u003e- la pression physique,\u003cbr\u003e- la tension musculaire (légère augmentation de force),\u003cbr\u003esans gêner la mobilité : elle se comporte comme une seconde peau\u003cbr\u003emétallique.",
        "mana": "Moyenne sur la durée",
        "duration": "Environ 10 minutes pour un utilisateur standard ; davantage avec concentration",
        "range": "Auto-appliqué uniquement",
        "incantation": "Cuirasse",
        "particularity": [
            "La matière n’est ni froide ni lourde : c’est un métal tellurique malléable, animé par le mana.",
            "Peut absorber une partie d’un choc ou le répartir sur une large surface.",
            "Très efficace contre :",
            "SUB::coups directs,",
            "SUB::morsures,",
            "SUB::projectiles physiques,",
            "SUB::griffes de créatures.",
            "Vulnérable aux affinités très chaudes (Pyros—Vulcan) qui peuvent ramollir le métal, ou Umbra—Abyssum qui peut en saper la cohésion."
        ],
        "notes": [
            "Sort emblématique des défenseurs Terra, souvent utilisé en première intention dans un combat prolongé.",
            "Peut être entretenu ou remodelé légèrement pendant la durée (renforcer un bras, épaissir un gantelet).",
            "Certains maîtres Metallia peuvent créer des pointes ou des lignes tranchantes en surface, mais ce n’est pas inclus dans la forme basique."
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Forge Tellurique – Métallomancie Corporelle (Tome II)",
        "symbol": ""
    },
    {
        "id": 43,
        "name": "Griffe Ferrugineuse",
        "type": "Offensif / Arme corporelle",
        "complexity": 1,
        "affinities": [
            "Terra"
        ],
        "specific": "Metallia",
        "desc": "L’utilisateur condense du métal tellurique au bout de ses doigts pour",
        "full_desc": "L’utilisateur condense du métal tellurique au bout de ses doigts pour\u003cbr\u003eformer une lame unique, fine, longue et rigide, semblable à une griffe\u003cbr\u003eacérée.\u003cbr\u003eCette lame suit les mouvements naturels de la main et se comporte\u003cbr\u003ecomme une extension vivante, capable de :\u003cbr\u003e- trancher,\u003cbr\u003e- perforer,\u003cbr\u003e- déchirer,\u003cbr\u003e- ancrer dans une surface.\u003cbr\u003eSa formation est quasi instantanée, idéale pour surprendre un\u003cbr\u003eadversaire.",
        "mana": "Faible (maintien très léger)",
        "duration": "Jusqu’à annulation volontaire",
        "range": "Corps-à-corps (extension de 10 à 40 cm selon maîtrise)",
        "incantation": "Griffe Ferrugineuse",
        "particularity": [
            "La griffe est solide et coupante, mais peut se fissurer face à une affinité de chaleur extrême.",
            "Peut changer légèrement de forme (plus courbe, plus fine, plus large) lors du maintien.",
            "Très efficace pour briser des défenses, ouvrir une armure ou menacer un point vital.",
            "L’utilisateur ressent un retour tactile, comme si la griffe faisait partie de son propre doigt."
        ],
        "notes": [
            "Sort apprécié par les combattants rapides ou brutaux ; souvent utilisé par les mercenaires Metallia.",
            "Peut être couplé à un Dash pour créer une attaque assassin.",
            "Certains experts forgent plusieurs griffes simultanées, mais ce n’est pas inclus dans la version basique."
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Forge Tellurique – Métallomancie Corporelle (Tome II)",
        "symbol": ""
    },
    {
        "id": 44,
        "name": "Onde Fracturante",
        "type": "Offensif / Contrôle de terrain",
        "complexity": 1,
        "affinities": [
            "Terra"
        ],
        "specific": "Seismis",
        "desc": "L’utilisateur frappe le sol (du pied, du poing ou simplement par",
        "full_desc": "L’utilisateur frappe le sol (du pied, du poing ou simplement par\u003cbr\u003eincantation), provoquant une onde de choc souterraine rapide, qui\u003cbr\u003efracture et soulève légèrement la surface sur son passage.\u003cbr\u003eL’effet ne provoque aucun cratère ou ravin, mais fait trébucher,\u003cbr\u003edéséquilibre ou interrompt les mouvements sur sa trajectoire.\u003cbr\u003eLe sort n’affecte que le sol solide, ne perturbe ni l’air, ni les\u003cbr\u003eobjets flottants.",
        "mana": "Faible à moyenne",
        "duration": "Non specifie",
        "range": "- Ligne droite de 3 à 6 mètres de long selon le niveau - Environ 1 mètre de large - Onde suffisamment rapide pour surprendre un adversaire statique",
        "incantation": "Onde Fracturante",
        "particularity": [
            "Ne cause pas de blessures, mais interrompt les postures, les courses, les lancers",
            "Très efficace sur les adversaires au sol, mais inutile contre un sort en l’air ou contre un utilisateur en lévitation",
            "Peut faire tomber ou désarmer brièvement"
        ],
        "notes": [
            "Utilisé couramment pour casser le rythme d’un duel ou faire perdre l’équilibre à un adversaire en mouvement",
            "Peut être combiné avec d’autres sorts Terra pour déstabiliser une zone entière (ex : projections, piliers, piéges)"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Masses Primaires – Initiation à la magie tellurique (Tome I)",
        "symbol": ""
    },
    {
        "id": 45,
        "name": "Entrave Abyssale",
        "type": "Contrôle / Immobilisation",
        "complexity": 1,
        "affinities": [
            "Umbra"
        ],
        "specific": "Nyx",
        "desc": "Étend une ombre adhésive qui saisit et colle membres ou pattes de la",
        "full_desc": "Étend une ombre adhésive qui saisit et colle membres ou pattes de la\u003cbr\u003ecible aux surfaces proches (marche, paroi), immobilisant\u003cbr\u003epartiellement/totalement le mouvement.",
        "mana": "Faible à moyenne",
        "duration": "Quelques secondes (maintien ↑ avec concentration)",
        "range": "6–8 m",
        "incantation": "Entrave Abyssale (abrégé en « Entrave » en combat)",
        "particularity": [
            "Nyx)."
        ],
        "notes": [

        ],
        "lore": "Nature du sort a definir...",
        "origin": "Fondements Occultes – Initiation à la magie d’Ombre (Tome I)",
        "symbol": ""
    },
    {
        "id": 46,
        "name": "Fil d’Abyssum",
        "type": "Contrôle / Guidage",
        "complexity": 2,
        "affinities": [
            "Umbra"
        ],
        "specific": "Abyssum",
        "desc": "Tisse un fil sombre entre un projectile/objet (ex.",
        "full_desc": "Tisse un fil sombre entre un projectile/objet (ex. chakram) et un\u003cbr\u003epoint/porteur, permettant retour, ricochet dirigé ou courbe\u003cbr\u003eimpossible.",
        "mana": "Faible (maintien continu)",
        "duration": "Tant que le lien est tenu",
        "range": "10–15 m (à vue)",
        "incantation": "Fil d’Abyssum",
        "particularity": [

        ],
        "notes": [

        ],
        "lore": "Nature du sort a definir...",
        "origin": "Voiles \u0026 Lignes – Guidages Obscurs (Tome I)",
        "symbol": ""
    },
    {
        "id": 47,
        "name": "Point d’Encre",
        "type": "Utilitaire / Offensif léger",
        "complexity": 1,
        "affinities": [
            "Umbra"
        ],
        "specific": "Nyx",
        "desc": "Projette une tache d’ombre mouvante sur une surface visible.",
        "full_desc": "Projette une tache d’ombre mouvante sur une surface visible. Ressemble\u003cbr\u003eà de l’encre sombre, fluide et non physique. Sert à désorienter,\u003cbr\u003emasquer une zone ou poser une base pour des sorts d’Ombre plus\u003cbr\u003eélaborés.",
        "mana": "Très faible",
        "duration": "Non specifie",
        "range": "Varient selon le niveau de maîtrise. À bas niveau, la portée dépasse rarement 5 mètres et la tache reste simple et petite. Les utilisateurs avancés peuvent produire des formes plus grandes, complexes ou mouvantes.",
        "incantation": "Point d’Encre",
        "particularity": [
            "Sert d’introduction à la manipulation de l’ombre. Couramment utilisé pour apprendre la gestion fine du mana et la précision magique."
        ],
        "notes": [

        ],
        "lore": "Nature du sort a definir...",
        "origin": "Principes élémentaires des affinités – Tome I",
        "symbol": ""
    },
    {
        "id": 48,
        "name": "Sol Maudit",
        "type": "Contrôle de terrain / Piège",
        "complexity": 1,
        "affinities": [
            "Umbra"
        ],
        "specific": "Abyssum",
        "desc": "L’utilisateur corrompt une portion de sol (environ 1 mètre carré pour",
        "full_desc": "L’utilisateur corrompt une portion de sol (environ 1 mètre carré pour\u003cbr\u003eles débutants), la teintant d’une teinte noir violacé, mate, marquée\u003cbr\u003ede craquelures mouvantes.\u003cbr\u003eCette première phase ne nécessite aucune incantation : c’est une\u003cbr\u003epréparation muette du terrain.\u003cbr\u003eUne fois la zone placée, l’utilisateur peut dire l’incantation « Sol\u003cbr\u003eMaudit » pour transformer instantanément la zone en une substance\u003cbr\u003esemi-liquide, instable et gluante, dans laquelle on s’enfonce jusqu’aux\u003cbr\u003ejambes. Il faut mettre sa main au sol.\u003cbr\u003eEn répétant l’incantation, la zone redevient solide, piégeant ce qui s’y\u003cbr\u003etrouve.",
        "mana": "Faible pour la mise en place, légèrement plus à chaque activation / désactivation - Surface \u0026 durée : - Dépend du niveau de l’utilisateur. - Débutant : ~1m², activation maintenue 10–15 secondes max - Avancé : jusqu’à 3m², plusieurs activations possibles sur plusieurs zones",
        "duration": "Non specifie",
        "range": "Non specifie",
        "incantation": "Sol Maudit",
        "particularity": [
            "La première phase est silencieuse, permettant des stratégies discrètes",
            "Le sol n’est pas glissant : il absorbe légèrement le poids, mais la texture visuelle ne change qu’à peine",
            "L’état « solide » est beaucoup plus résistant qu’un sol normal, rendant le dégagement difficile sans aide"
        ],
        "notes": [
            "Très utilisé lors des duels ou comme moyen d’interrompre une charge ou une esquive",
            "Peut être contré par certains sorts de lévitation, saut, ou affinités Terre et Vent",
            "Il existe des versions avancées (non enseignées dans ce tome) capables de digérer les objets pris dans la zone…"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Fondements Occultes – Initiation à la magie d’Ombre (Tome I)",
        "symbol": ""
    },
    {
        "id": 49,
        "name": "Dissociation",
        "type": "Défensif / Réactif / Substitution partielle",
        "complexity": 2,
        "affinities": [
            "Umbra"
        ],
        "specific": "Noctis",
        "desc": "L’utilisateur sépare temporairement son ombre de son corps, lui",
        "full_desc": "L’utilisateur sépare temporairement son ombre de son corps, lui\u003cbr\u003epermettant d’intercepter un choc physique ou magique à sa place.\u003cbr\u003eL’ombre agit comme un voile mimétique, reproduisant la posture du\u003cbr\u003elanceur avec un léger décalage, et absorbe une partie de l’impact\u003cbr\u003ereçu.\u003cbr\u003eCependant, la dissociation est incomplète : une fraction du coup\u003cbr\u003etraverse malgré tout, touchant le corps réel, et l’ombre se désintègre\u003cbr\u003eaprès usage.",
        "mana": "Moyenne à élevée selon la force de l’attaque interceptée",
        "duration": "1 à 2 secondes d’existence réelle",
        "range": "Limitée à la position du lanceur (l’ombre reste liée à lui par un axe fixe)",
        "incantation": "Dissociation d’Ombre",
        "particularity": [
            "L’ombre n’a pas de consistance physique, elle amortit par distorsion énergétique",
            "Inefficace si l’ombre du lanceur est absente (zone sans lumière, contre-jour total)",
            "L’ombre ne peut pas intercepter un sort lumineux ou thermique trop puissant"
        ],
        "notes": [
            "Souvent utilisée en réflexe de survie par les mages Noctis expérimentés",
            "L’ombre conserve la trace du coup reçu, visible un court instant sur le sol",
            "Les mages très doués peuvent enchaîner la dissociation avec un contre d’ombre, frappant depuis le reflet avant qu’il ne se dissipe"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Voiles Silencieux – Études des Projections et Reflets (Tome I)",
        "symbol": ""
    },
    {
        "id": 50,
        "name": "Mise au Silence",
        "type": "Pression psychique / Domination passive",
        "complexity": 3,
        "affinities": [
            "Umbra"
        ],
        "specific": "Noctis",
        "desc": "L’utilisateur relâche une micro-pression d’ombre consciente,",
        "full_desc": "L’utilisateur relâche une micro-pression d’ombre consciente,\u003cbr\u003eimperceptible physiquement mais immédiatement ressentie par les\u003cbr\u003eesprits alentours.\u003cbr\u003eCe n’est ni une attaque, ni une illusion, ni une entrave magique\u003cbr\u003edirecte : c’est une intention imposée.\u003cbr\u003eLa présence Umbra–Noctis s’insinue dans la nuque, dans le dos, dans\u003cbr\u003el’instinct, provoquant une sensation nette :\u003cbr\u003equelque chose est là, trop proche, trop précis.\u003cbr\u003eLes individus affectés ressentent :\u003cbr\u003e- une inhibition immédiate de la parole,\u003cbr\u003e- une hésitation réflexe à agir,\u003cbr\u003e- une certitude silencieuse d’être observés et vulnérables.\u003cbr\u003eLe sort ne force rien.\u003cbr\u003eIl rappelle simplement que l’utilisateur pourrait agir — et que cela\u003cbr\u003esuffirait.",
        "mana": "Très faible",
        "duration": "Quelques secondes à une minute selon la volonté du lanceur",
        "range": "Zone diffuse autour de l’utilisateur (jusqu’à plusieurs dizaines de mètres)",
        "incantation": "Aucune. (Le nom n’est jamais prononcé. Il est compris.)",
        "particularity": [
            "Inefficace contre les entités dépourvues d’instinct ou de conscience",
            "D’autant plus puissant que l’utilisateur est connu, craint ou reconnu",
            "Ne laisse aucune trace magique stable : impossible à analyser après coup",
            "Peut être utilisé sans se rendre visible entièrement"
        ],
        "notes": [
            "Surnommé « le sort qui ne frappe pas »",
            "Utilisé pour interrompre un conflit, briser une agitation, ou rétablir une hiérarchie",
            "Les témoins décrivent souvent un froid à la base du crâne, suivi d’un silence instinctif",
            "Théo est connu pour l’utiliser comme on ferme une porte : sans bruit"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Aucun (transmission informelle, pratique d’initiés)",
        "symbol": ""
    },
    {
        "id": 51,
        "name": "Arc-Boutement",
        "type": "Défensif / Réactif / Renvoi physique",
        "complexity": 2,
        "affinities": [
            "Verdania"
        ],
        "specific": "Radicis",
        "desc": "En frappant le sol, l’utilisateur transforme l’herbe ou la mousse",
        "full_desc": "En frappant le sol, l’utilisateur transforme l’herbe ou la mousse\u003cbr\u003eprésente en une structure solide et arquée, ressemblant à une racine\u003cbr\u003eépaissie ou à un bois flexible.\u003cbr\u003eL’arceau se soulève brutalement sous la cible, modifie sa trajectoire\u003cbr\u003eet peut la repousser ou la projeter dans une direction choisie.\u003cbr\u003eL’effet est instantané, réactif, et sans visée magique directe : tout\u003cbr\u003erepose sur le placement et le moment de l’activation.",
        "mana": "Moyenne",
        "duration": "Instantanée – structure se fige et se fane quelques secondes après",
        "range": "Zone immédiate au sol (1–2 mètres autour du point d’impact)",
        "incantation": "« Arc-Boutement ! »",
        "particularity": [
            "Fonctionne uniquement sur un sol naturel végétalisé",
            "Peut rediriger un adversaire, un projectile lourd, ou protéger un allié derrière la poussée",
            "Peut désarçonner, déséquilibrer, ou même soulever brièvement la cible selon sa masse"
        ],
        "notes": [
            "Très utile dans les combats de terrain où le placement est crucial",
            "Parfait pour interrompre une charge ou un saut",
            "Peut être utilisé en enchaînement avec d\u0027autres sorts de contrôle (ex : Entrave Rampante)"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Forêts Ancrées – Magie des Sols Végétaux (Tome I)",
        "symbol": ""
    },
    {
        "id": 52,
        "name": "Entrave Rampante",
        "type": "Contrôle / Immobilisation",
        "complexity": 2,
        "affinities": [
            "Verdania"
        ],
        "specific": "Radicis",
        "desc": "L’utilisateur invoque une série de racines épaisses et noueuses à",
        "full_desc": "L’utilisateur invoque une série de racines épaisses et noueuses à\u003cbr\u003epartir du sol sous ou autour de sa cible. Ces racines surgissent avec\u003cbr\u003evitesse, se tordent, et cherchent à s’enrouler autour des membres\u003cbr\u003einférieurs, du torse ou des bras pour entraver totalement les\u003cbr\u003emouvements.\u003cbr\u003eLe sort fonctionne uniquement sur sol végétalisé, humide ou meuble\u003cbr\u003e(terre, mousse, herbe, racines existantes). Il est inefficace sur\u003cbr\u003epierre sèche ou sol artificiel.",
        "mana": "Moyenne",
        "duration": "Non specifie",
        "range": "Jusqu’à 8 mètres autour de l’utilisateur",
        "incantation": "« Terre vivante, saisie la proie… Entrave Rampante ! »",
        "particularity": [
            "Le sort est silencieux jusqu’à l’émergence des racines",
            "Les racines peuvent maintenir une cible immobile jusqu’à 10 à 15 secondes (ou plus avec concentration continue)",
            "Peut être brisé par la force brute ou des sorts tranchants / feu"
        ],
        "notes": [
            "Très efficace pour interrompre une charge, empêcher une fuite, ou offrir une ouverture à un allié",
            "Peut également être utilisé pour créer une zone dissuasive",
            "Fonctionne particulièrement bien sur des créatures au sol ou à faible mobilité"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Forêts Ancrées – Magie des Sols Végétaux (Tome I)",
        "symbol": ""
    },
    {
        "id": 53,
        "name": "Lames d’Échardes",
        "type": "Offensif / Piège / Tranchant",
        "complexity": 2,
        "affinities": [
            "Verdania"
        ],
        "specific": "Radicis",
        "desc": "L’utilisateur fait surgir depuis le sol plusieurs lames de bois brut,",
        "full_desc": "L’utilisateur fait surgir depuis le sol plusieurs lames de bois brut,\u003cbr\u003eépaisses et irrégulières, aux bords dentelés et tranchants comme des\u003cbr\u003eéchardes géantes.\u003cbr\u003eCes lames percent, fendent ou lacèrent tout ce qui se trouve dans leur\u003cbr\u003etrajectoire. Elles peuvent jaillir sous un ennemi, ou former une ligne\u003cbr\u003edéfensive tranchante.\u003cbr\u003eLa pousse est instantanée, mais la trajectoire reste fixe au moment de\u003cbr\u003el’incantation.",
        "mana": "Moyenne",
        "duration": "Non specifie",
        "range": "Jusqu’à 4 mètres autour de l’utilisateur - Zone d’impact : De 1 à 5 lames (selon la précision et la mana disponible)",
        "incantation": "« Fends, dalle, fends ! Lames d’Échardes ! »",
        "particularity": [
            "Fonctionne uniquement sur un sol naturel ou enrichi en végétation",
            "Les lames ne durent que quelques secondes avant de se désagréger en copeaux",
            "Peuvent transpercer armures légères ou déstabiliser un adversaire au sol"
        ],
        "notes": [
            "Souvent utilisé en ouverture de duel ou pour intercepter une charge",
            "Les mages expérimentés peuvent courber légèrement la croissance des lames pour viser un point précis",
            "Sort interdit dans les arènes d’entraînement classiques à cause du risque de mutilation"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Forêts Ancrées – Magie des Sols Végétaux (Tome II)",
        "symbol": ""
    },
    {
        "id": 54,
        "name": "Tresse Souterraine",
        "type": "Contrôle / Préparation / Piège",
        "complexity": 2,
        "affinities": [
            "Verdania"
        ],
        "specific": "Radicis",
        "desc": "L’utilisateur tisse sous le sol une tresse de fibres vivantes, presque",
        "full_desc": "L’utilisateur tisse sous le sol une tresse de fibres vivantes, presque\u003cbr\u003eindétectable, qui s’étend sur quelques mètres.\u003cbr\u003eCette tresse reste inerte tant qu’aucune menace n’est perçue ou qu’un\u003cbr\u003eordre direct n’est donné.\u003cbr\u003eLorsqu’activée, elle peut se resserrer, surgir, ou s’enrouler autour\u003cbr\u003ed’un point précis (membre, jambe, arme…).\u003cbr\u003eLe sort repose sur la patience et la connexion sensorielle avec le\u003cbr\u003esol, et non sur la force brute.",
        "mana": "Moyenne (faible à la pose, moyenne à l’activation)",
        "duration": "Illimitée tant que le lien n’est pas rompu ou la tresse détruite",
        "range": "Zone souterraine de 2 à 4 mètres autour de l’utilisateur",
        "incantation": "Tresse Souterraine",
        "particularity": [
            "Indétectable à l’œil nu, mais perceptible par les mages de type Terra ou sensibles aux vibrations",
            "Peut être perturbée par des chocs telluriques, des ondes sismiques ou des pressions anormales",
            "Sa réactivité dépend du calme et de la concentration du lanceur : un esprit agité réduit sa précision"
        ],
        "notes": [
            "Sort souvent utilisé pour préparer un terrain avant un combat ou piéger une créature en approche",
            "Nécessite un sol meuble ou organique (terre, sable, herbe, boue)",
            "Très apprécié des mages tacticiens : il incarne la maîtrise du terrain et la lecture du rythme ennemi"
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Forêts Ancrées – Magie des Sols Végétaux (Tome II)",
        "symbol": ""
    },
    {
        "id": 55,
        "name": "Fumar Plastrons",
        "type": "Défensif / Survie environnementale",
        "complexity": 3,
        "affinities": [
            "Pyros"
        ],
        "specific": "Fumar",
        "desc": "L’utilisateur génère autour de lui (et des individus en contact",
        "full_desc": "L’utilisateur génère autour de lui (et des individus en contact\u003cbr\u003eou proches) des bulles de fumée dense et stabilisée, compressibles\u003cbr\u003emais cohérentes.\u003cbr\u003eCes bulles :\u003cbr\u003e- Créent une réserve d’air respirable.\u003cbr\u003e- Atténuent la pression de l’eau environnante en répartissant la contrainte sur la structure gazeuse.\u003cbr\u003e- Filtrent ou neutralisent les toxines dissoutes dans l’eau.\u003cbr\u003eLa fumée ne brûle pas.\u003cbr\u003eElle est maintenue dans un état stable, dense et protecteur, à la limite entre gaz et matière.",
        "mana": "Élevée en maintien prolongé",
        "duration": "Variable (quelques minutes à plus selon maîtrise)",
        "range": "Individuelle ou petit groupe (rayon limité autour du lanceur)",
        "incantation": "Fumar Plastrons",
        "particularity": [
            "Les bulles sont compressibles, mais ne se rompent pas immédiatement sous pression normale.",
            "Sensibles aux courants violents (Aeris–Stratos peut les disperser).",
            "Une surcharge thermique excessive peut déstabiliser la cohésion de la fumée.",
            "Le sort nécessite une concentration constante pour éviter la dissipation."
        ],
        "notes": [
            "Sort très rare en dehors des régions côtières ou sous-marines.",
            "Utilisé pour exploration aquatique, plongée magique, ou progression en milieu toxique liquide.",
            "Visuellement, les bulles donnent l’impression que les membres sont enveloppés d’une armure de brume mouvante."
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Brumes Ardentes – Applications Avancées des Fumées (Tome II)",
        "symbol": ""
    },
    {
        "id": 56,
        "name": "Vigie de Roche",
        "type": "Construction / Contrôle de terrain",
        "complexity": 2,
        "affinities": [
            "Terra"
        ],
        "specific": "Golem",
        "desc": "L’utilisateur canalise son mana Terra dans le sol et ordonne à la",
        "full_desc": "L’utilisateur canalise son mana Terra dans le sol et ordonne à la pierre de se dresser.\u003cbr\u003eUne tour compacte jaillit alors, dense et brute, comme si la terre se souvenait de sa capacité à s’élever.\u003cbr\u003eLa structure comprend :\u003cbr\u003e- un fût principal massif,\u003cbr\u003e- des marches grossières formées dans l’épaisseur,\u003cbr\u003e- une plateforme sommitale stable permettant observation ou défense.\u003cbr\u003eLa croissance s’arrête immédiatement lorsque la forme est complète.\u003cbr\u003eAucune décoration. Aucun raffinement.\u003cbr\u003eJuste une masse solide, avec cette sensation claire : ça va tenir.",
        "mana": "Élevée à l’activation (faible ensuite)",
        "duration": "Permanente jusqu’à destruction naturelle ou dissipation volontaire",
        "range": "Surface de contact direct avec le sol",
        "incantation": "Vigie de Roche",
        "particularity": [
            "La tour est monolithique, difficile à fissurer sans puissance conséquente.",
            "Ne peut être créée que sur un sol minéral ou riche en pierre.",
            "Résiste bien aux impacts physiques et aux vents violents.",
            "Vulnérable à : Pyros–Vulcan prolongé, Terra–Seismis puissant, Abyssum corrosif."
        ],
        "notes": [
            "Utilisé pour : observation stratégique, point de tir, protection temporaire d’un groupe, démonstration de maîtrise Terra.",
            "Typiquement le genre de sort que Darrun lance sans théâtralité : solide, fiable, assumé.",
            "Peut servir de base à des constructions plus complexes si prolongé."
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Architectures Telluriques – Fondations et Élévations (Tome II)",
        "symbol": ""
    },
    {
        "id": 57,
        "name": "Murmure de Pollen",
        "type": "Dissuasion / Protection de périmètre",
        "complexity": 2,
        "affinities": [
            "Verdania"
        ],
        "specific": "Floralis",
        "desc": "L’utilisateur prépare un mélange de poudres végétales, pollens et",
        "full_desc": "L’utilisateur prépare un mélange de poudres végétales, pollens et extraits séchés, qu’il active par insufflation de mana.\u003cbr\u003eLe parfum qui en résulte se diffuse en cercle autour du lanceur, porté par un micro-courant végétal guidé, imperceptible mais structuré.\u003cbr\u003eLe pollen :\u003cbr\u003e- s’accroche aux plantes proches,\u003cbr\u003e- adhère aux surfaces organiques,\u003cbr\u003e- imprègne légèrement les vêtements et la végétation alentour.\u003cbr\u003eIl ne bloque pas physiquement.\u003cbr\u003eIl dissuade.\u003cbr\u003eCertaines créatures :\u003cbr\u003e- hésitent à franchir la zone,\u003cbr\u003e- ressentent une irritation instinctive,\u003cbr\u003e- perçoivent une menace chimique latente.\u003cbr\u003eSi une entité traverse malgré tout, le cercle envoie une vibration subtile au lanceur, comme une alerte sensorielle.",
        "mana": "Faible (préparation + activation)",
        "duration": "Plusieurs heures selon conditions climatiques",
        "range": "Cercle de 5 à 15 mètres de rayon",
        "incantation": "Murmure de Pollen",
        "particularity": [
            "N’est pas une barrière physique.",
            "Fonctionne surtout contre : bêtes sauvages, créatures sensibles aux toxines végétales, prédateurs prudents.",
            "Moins efficace contre : entités artificielles, morts-vivants, créatures dépourvues d’odorat ou d’instinct.",
            "Peut être affaibli par vent fort (Aeris–Stratos)."
        ],
        "notes": [
            "Sort idéal pour un campement temporaire.",
            "Très apprécié des soigneurs et botanistes.",
            "Peut être modifié selon les poudres utilisées (plus dissuasif, plus irritant, plus anesthésiant léger).",
            "Son efficacité repose autant sur la chimie végétale que sur la magie."
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Herbiers Vivants – Botanique Défensive (Tome II)",
        "symbol": ""
    },
    {
        "id": 58,
        "name": "Pas Zephyria",
        "type": "Mobilité / Évasion silencieuse",
        "complexity": 2,
        "affinities": [
            "Aeris"
        ],
        "specific": "Zephyria",
        "desc": "L’utilisateur s’enveloppe d’un flux d’air ultra-fin, ajusté en",
        "full_desc": "L’utilisateur s’enveloppe d’un flux d’air ultra-fin, ajusté en continu par Zephyria.\u003cbr\u003eAu lieu de pousser l’air, il négocie avec lui.\u003cbr\u003eLe résultat :\u003cbr\u003e- un déplacement silencieux,\u003cbr\u003e- une glisse nette,\u003cbr\u003e- une absence quasi totale de friction,\u003cbr\u003e- un mouvement trop propre pour sembler humain.\u003cbr\u003eLe corps ne bondit pas, ne frappe pas le sol.\u003cbr\u003eIl s’efface dans le mouvement.\u003cbr\u003eLe sort est idéal pour :\u003cbr\u003e- gagner quelques secondes,\u003cbr\u003e- sortir d’un axe d’attaque,\u003cbr\u003e- retarder une pression.",
        "mana": "Faible à moyenne (maintien continu)",
        "duration": "Quelques secondes, extensible selon endurance",
        "range": "Déplacement au sol ou latéral sur 3 à 10 mètres",
        "incantation": "Pas Zephyria ou aucune après plusieurs utilisation à la suite",
        "particularity": [
            "Aucun bruit de pas.",
            "Très difficile à anticiper visuellement.",
            "Inefficace en terrain extrêmement instable.",
            "Ne permet pas un bond vertical important (contrairement à Stratos).",
            "Demande un contrôle corporel précis."
        ],
        "notes": [
            "Sort de duel raffiné.",
            "Souvent utilisé pour “arracher du temps” sans engager une vraie fuite.",
            "Peut être combiné à un Dash pour créer un mouvement imprévisible.",
            "Chez Hendor, le mouvement paraît presque artificiel, tant il est net."
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Souffles Subtils – Maîtrise des Vents Fins (Tome II)",
        "symbol": ""
    },
    {
        "id": 59,
        "name": "Coupe-Stratos",
        "type": "Offensif tactique / Déviation",
        "complexity": 2,
        "affinities": [
            "Aeris"
        ],
        "specific": "Stratos",
        "desc": "L’utilisateur condense l’air ambiant en une lame de pression dense,",
        "full_desc": "L’utilisateur condense l’air ambiant en une lame de pression dense, fine et tranchante, qu’il projette vers une cible.\u003cbr\u003eContrairement à une attaque létale, Coupe-Stratos n’est pas conçu pour ouvrir la chair, mais pour :\u003cbr\u003e- dévier une charge,\u003cbr\u003e- forcer un pivot,\u003cbr\u003e- modifier une trajectoire,\u003cbr\u003e- créer une ouverture stratégique.\u003cbr\u003eL’impact est sec, brutal, mais contrôlé :\u003cbr\u003eune pression latérale suffisante pour déséquilibrer ou rediriger une masse en mouvement.",
        "mana": "Faible à moyenne",
        "duration": "Instantané",
        "range": "5 à 15 mètres selon compression",
        "incantation": "Coupe-Stratos",
        "particularity": [
            "Peut être ajusté en largeur ou en densité selon l’effet recherché.",
            "Très efficace contre des cibles en mouvement.",
            "Peu efficace contre une masse parfaitement ancrée.",
            "Peut couper des éléments légers (cordes, végétation fine).",
            "Ne provoque pas d’explosion ni de dispersion massive."
        ],
        "notes": [
            "Sort idéal pour les duels techniques.",
            "Permet de créer une ouverture sans engager une attaque totale.",
            "Souvent utilisé en combinaison avec Pas Zephyria.",
            "Chez un expert Stratos, la lame peut devenir réellement tranchante, mais ce n’est pas l’usage de base."
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Vents Dominants – Pressions et Découpes Atmosphériques (Tome II)",
        "symbol": ""
    },
    {
        "id": 60,
        "name": "Prisme Fuyant",
        "type": "Illusion cinétique / Déviation perceptive",
        "complexity": 3,
        "affinities": [
            "Lumia"
        ],
        "specific": "Luxia",
        "desc": "L’utilisateur infuse son arme ou objet réceptif d’un noyau prismatique",
        "full_desc": "L’utilisateur infuse son arme ou objet réceptif d’un noyau prismatique Luxia.\u003cbr\u003eÀ chaque déplacement, la lumière autour du porteur se brise et se recompose, générant :\u003cbr\u003e- des silhouettes décalées,\u003cbr\u003e- des faux départs,\u003cbr\u003e- des trajectoires alternatives éphémères.\u003cbr\u003eLes doubles ne sont pas autonomes : ils sont des réfractions retardées et anticipées du mouvement réel.\u003cbr\u003ePour un observateur, la cible semble occuper plusieurs positions successives à la fois, rendant l’anticipation extrêmement difficile.\u003cbr\u003eLe but n’est pas d’attaquer —\u003cbr\u003emais de faire frapper une erreur.",
        "mana": "Moyenne (continue tant que le mouvement est actif)",
        "duration": "Quelques secondes par activation",
        "range": "Autour du porteur uniquement",
        "incantation": "Prisme Fuyant",
        "particularity": [
            "Nécessite un support capable de stocker ou canaliser le sort.",
            "Inefficace si le porteur reste immobile.",
            "Les silhouettes ne produisent aucune masse ni interaction réelle.",
            "Peut être partiellement percé par une perception Umbra–Noctis très fine.",
            "Plus le mouvement est rapide, plus les réfractions sont nombreuses."
        ],
        "notes": [
            "Très efficace contre les combattants qui frappent à l’anticipation.",
            "Combine parfaitement avec Dash ou Pas Zephyria.",
            "Visuellement spectaculaire, mais techniquement très exigeant.",
            "Chez un expert, les silhouettes peuvent sembler légèrement tangibles à l’œil non entraîné."
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Luxia Supérieure – Réfractions et Trajectoires (Tome II)",
        "symbol": ""
    },
    {
        "id": 61,
        "name": "Rideau de Suie",
        "type": "Contrôle visuel / Rupture de ligne",
        "complexity": 1,
        "affinities": [
            "Pyros"
        ],
        "specific": "Fumar",
        "desc": "L’utilisateur déclenche une éruption de suie dense, noire et lourde,",
        "full_desc": "L’utilisateur déclenche une éruption de suie dense, noire et lourde, depuis un point précis (main, arme, sol, impact).\u003cbr\u003eLa fumée se déploie en un rideau compact et sale, opaque à courte distance, brouillant totalement la vision à travers la zone.\u003cbr\u003eElle ne brûle pas, mais :\u003cbr\u003e- colle légèrement aux surfaces,\u003cbr\u003e- marque l’air d’une odeur âcre,\u003cbr\u003e- crée une coupure nette dans la perception visuelle.\u003cbr\u003eLe but n’est pas d’étouffer —\u003cbr\u003emais de casser un angle, voler une ligne de vue, désynchroniser un adversaire.",
        "mana": "Faible",
        "duration": "5 à 12 secondes selon densité",
        "range": "3 à 8 mètres selon point d’impact",
        "incantation": "Rideau de Suie",
        "particularity": [
            "Plus opaque que les brumes neutres.",
            "Se dissipe plus lentement que les fumées ordinaires.",
            "Peut être dispersé par Aeris–Stratos puissant.",
            "Très efficace contre des adversaires dépendants de la vision directe."
        ],
        "notes": [
            "Sort très utilisé en duel ou combat mobile.",
            "Permet de masquer : un Dash, une esquive, une préparation d’attaque.",
            "L’Unique FumaStride amplifie la vitesse de déploiement, mais le sort existe indépendamment."
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Brumes Ardentes – Initiation aux Fumées Combatives (Tome I)",
        "symbol": ""
    },
    {
        "id": 62,
        "name": "Angle Mort",
        "type": "Manipulation sensorielle / Désorientation ciblée",
        "complexity": 3,
        "affinities": [
            "Umbra"
        ],
        "specific": "Noctis",
        "desc": "L’utilisateur projette une micro-pression d’ombre concentrée dans un",
        "full_desc": "L’utilisateur projette une micro-pression d’ombre concentrée dans un angle mort de la cible.\u003cbr\u003ePendant une fraction de seconde à une seconde complète :\u003cbr\u003e- une zone de l’espace semble perdre sa présence,\u003cbr\u003e- la perception y devient floue,\u003cbr\u003e- la localisation d’un objet, d’un corps ou d’un mouvement devient incertaine.\u003cbr\u003eCe n’est pas une invisibilité.\u003cbr\u003eCe n’est pas une illusion.\u003cbr\u003eC’est un effacement partiel du repère perceptif —\u003cbr\u003ecomme si un morceau du monde venait d’être retiré au pinceau.\u003cbr\u003eMême une cible expérimentée peut ressentir une hésitation instinctive :\u003cbr\u003e« Quelque chose est là… mais je ne sais plus où. »",
        "mana": "Moyenne",
        "duration": "0,5 à 1 seconde",
        "range": "5 à 12 mètres, nécessite un angle non frontal",
        "incantation": "Angle Mort",
        "particularity": [
            "Fonctionne mieux si l’utilisateur est déjà partiellement dissimulé.",
            "Inefficace si la cible voit directement la zone ciblée.",
            "Ne masque pas un bruit ou un impact physique.",
            "Plus la cible est concentrée, plus l’effet est bref.",
            "Très puissant contre des adversaires qui anticipent par lecture spatiale."
        ],
        "notes": [
            "Sort typique des combattants Noctis stratégiques.",
            "Souvent utilisé pour créer une fenêtre d’ouverture, pas pour tuer.",
            "Peut être combiné avec Dissociation d’Ombre ou un Dash.",
            "Les témoins décrivent souvent une pression froide dans la nuque avant l’effet."
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Voiles Silencieux – Altérations Perceptives (Tome III)",
        "symbol": ""
    },
    {
        "id": 63,
        "name": "Coupure Noctis",
        "type": "Offensif technique / Désynchronisation",
        "complexity": 3,
        "affinities": [
            "Umbra"
        ],
        "specific": "Noctis",
        "desc": "L’utilisateur imprègne son arme d’une fine couche d’ombre Noctis,",
        "full_desc": "L’utilisateur imprègne son arme d’une fine couche d’ombre Noctis, quasi invisible, qui agit comme une coupure d’intention.\u003cbr\u003eLorsque la lame frappe :\u003cbr\u003e- elle ne cherche pas la chair,\u003cbr\u003e- elle ne cherche pas la destruction,\u003cbr\u003e- elle cherche le point de bascule.\u003cbr\u003eSur une armure, une jointure, une articulation, la Coupure Noctis :\u003cbr\u003e- crée une micro-désynchronisation du mouvement,\u003cbr\u003e- perturbe la transmission d’élan,\u003cbr\u003e- vole une fraction de seconde à l’adversaire.\u003cbr\u003eLe geste adverse devient imparfait.\u003cbr\u003eUn bras arrive trop tard.\u003cbr\u003eUn pivot se rate.\u003cbr\u003eUn appui glisse.",
        "mana": "Faible à moyenne",
        "duration": "Activation brève (quelques frappes)",
        "range": "Corps-à-corps",
        "incantation": "Coupure Noctis",
        "particularity": [
            "Nécessite une arme capable de stocker le sort.",
            "Inefficace si frappé sur une surface pleine sans articulation.",
            "Ne cause que des dégâts physiques minimes.",
            "Très efficace contre adversaires mécaniques, lourdement armurés ou puissants.",
            "Peut être enchaîné avec un sort offensif pour exploiter l’ouverture."
        ],
        "notes": [
            "Sort de duelliste expérimenté.",
            "Repose sur la lecture du mouvement adverse.",
            "Devient redoutable dans les mains d’un stratège comme Théo.",
            "Souvent utilisé pour transformer un combat frontal en duel d’angles."
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Voiles Silencieux – Applications Martiales (Tome III)",
        "symbol": ""
    },
    {
        "id": 64,
        "name": "Reflet Fuyant",
        "type": "Mobilité perceptive / Tromperie visuelle",
        "complexity": 3,
        "affinities": [
            "Lumia"
        ],
        "specific": "Luxia",
        "desc": "L’utilisateur plie brièvement la lumière autour de son corps pour",
        "full_desc": "L’utilisateur plie brièvement la lumière autour de son corps pour créer un reflet décalé de sa position réelle.\u003cbr\u003ePendant un instant très court, la perception de l’observateur est attirée vers une silhouette lumineuse légèrement déplacée, tandis que la véritable position de l’utilisateur reste ailleurs.\u003cbr\u003eCe reflet n’est ni une illusion complète ni une invisibilité :\u003cbr\u003eil s’agit d’un alignement trompeur de lumière, qui fait glisser le regard vers une position erronée.\u003cbr\u003eL’effet ne dure généralement qu’un pas, parfois deux chez un utilisateur expérimenté.\u003cbr\u003eMais ce bref décalage suffit souvent à :\u003cbr\u003e- casser une ligne de vue,\u003cbr\u003e- provoquer une attaque dans le vide,\u003cbr\u003e- créer une ouverture de mouvement.",
        "mana": "Faible à moyenne",
        "duration": "Fraction de seconde",
        "range": "Autour du corps de l’utilisateur",
        "incantation": "Reflet Fuyant (aucune après maitrise)",
        "particularity": [
            "Ne rend pas invisible.",
            "Ne déplace pas réellement le corps de l’utilisateur.",
            "Fonctionne surtout lors d’un mouvement court et précis.",
            "Plus la cible se fie à la vision, plus l’effet est efficace.",
            "Inefficace contre une perception sensorielle non visuelle très développée."
        ],
        "notes": [
            "Sort typiquement utilisé par des combattants rapides et techniques.",
            "Se situe entre une réfraction Luxia et un déplacement tactique.",
            "Très efficace en duel où une fraction de seconde décide de l’échange."
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Luxia Supérieure – Réfractions et Trajectoires (Tome II)",
        "symbol": ""
    },
    {
        "id": 65,
        "name": "Couture Creuse",
        "type": "Liaison magique / Canalisation",
        "complexity": 3,
        "affinities": [
            "Umbra"
        ],
        "specific": "Abyssum",
        "desc": "L’utilisateur trace entre deux points proches une fine couture",
        "full_desc": "L’utilisateur trace entre deux points proches une fine couture d’ombre, une ligne d’Abyssum creuse qui agit comme un canal de circulation du mana.\u003cbr\u003eCette couture ne déchire pas l’espace et ne permet pas de téléportation.\u003cbr\u003eElle crée plutôt une liaison stable et discrète à travers laquelle l’utilisateur peut :\u003cbr\u003e- ancrer son mana,\u003cbr\u003e- faire glisser une impulsion magique,\u003cbr\u003e- rediriger un sort,\u003cbr\u003e- préparer une technique plus complexe.\u003cbr\u003eLa ligne agit comme un chemin privilégié, permettant au mana de circuler avec une vitesse et une précision très élevées.\u003cbr\u003eVisuellement, la couture ressemble à une suture sombre dans l’air, fine et presque invisible, qui absorbe légèrement la lumière.",
        "mana": "Faible (maintien léger)",
        "duration": "Quelques secondes à plusieurs dizaines de secondes selon stabilité",
        "range": "Liaison courte (1 à 5 mètres en général)",
        "incantation": "Couture Creuse (aucune après maitrise)",
        "particularity": [
            "Ne transporte pas de matière solide.",
            "Fonctionne uniquement pour le mana de l’utilisateur.",
            "Peut servir de base pour des sorts Umbra–Abyssum plus complexes.",
            "Très difficile à repérer si on ne regarde pas précisément la zone."
        ],
        "notes": [
            "Sort extrêmement utile dans des environnements complexes (piliers, murs, angles).",
            "Permet de créer des points d’appui magiques invisibles.",
            "Synergie naturelle avec des techniques comme Fil d’Abyssum.",
            "Chez un utilisateur méthodique comme Nova, ce sort devient un véritable outil de construction tactique."
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Structures Abyssales – Liaisons et Ancrages (Tome II)",
        "symbol": ""
    },
    {
        "id": 66,
        "name": "Poussée Sèche",
        "type": "Mobilité / Propulsion directionnelle",
        "complexity": 2,
        "affinities": [
            "Pyros"
        ],
        "specific": "Ignis",
        "desc": "L’utilisateur condense brièvement un burst Ignis compact, qu’il",
        "full_desc": "L’utilisateur condense brièvement un burst Ignis compact, qu’il libère dans une direction précise.\u003cbr\u003eContrairement aux explosions Ignis classiques, Poussée Sèche privilégie :\u003cbr\u003e- la direction,\u003cbr\u003e- la compression,\u003cbr\u003e- la brièveté.\u003cbr\u003eLe sort génère une impulsion courte et brutale, capable de :\u003cbr\u003e- propulser le corps sur quelques mètres,\u003cbr\u003e- corriger un angle de déplacement,\u003cbr\u003e- freiner ou réorienter une trajectoire.\u003cbr\u003eL’effet ressemble moins à une explosion qu’à un coup de réacteur instantané.",
        "mana": "Faible",
        "duration": "Instantané",
        "range": "Propulsion courte (1 à 4 mètres selon maîtrise)",
        "incantation": "Poussée Sèche (aucune après maitrise)",
        "particularity": [
            "Produit moins de lumière et de bruit qu’un impact Ignis classique.",
            "Peut être déclenché depuis les paumes, les pieds, ou les jambes.",
            "Nécessite un bon contrôle du corps pour éviter la perte d’équilibre.",
            "Très utile pour ajuster un mouvement déjà lancé."
        ],
        "notes": [
            "Sort idéal pour les combattants mobiles.",
            "Souvent utilisé en combinaison avec un saut, un coup ou un Dash.",
            "Chez un utilisateur explosif comme Finn, il devient rapidement un outil instinctif de déplacement."
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Dynamiques Ignis – Propulsions et Impacts (Tome I)",
        "symbol": ""
    },
    {
        "id": 67,
        "name": "Arc Muet",
        "type": "Décharge contrôlée / Liaison conductrice",
        "complexity": 2,
        "affinities": [
            "Fulgora"
        ],
        "specific": "Tempestra",
        "desc": "L’utilisateur compresse une décharge Tempestra en un filament électrique",
        "full_desc": "L’utilisateur compresse une décharge Tempestra en un filament électrique extrêmement fin, silencieux et rapide.\u003cbr\u003eCe filament relie brièvement l’utilisateur à :\u003cbr\u003e- une surface conductrice,\u003cbr\u003e- un objet métallique,\u003cbr\u003e- ou une cible proche.\u003cbr\u003eContrairement à la foudre classique, Arc Muet ne produit ni tonnerre ni explosion.\u003cbr\u003eLa décharge est contenue, tendue et directionnelle, permettant une conduction précise.\u003cbr\u003eSelon l’intention de l’utilisateur, le filament peut servir à :\u003cbr\u003e- délivrer une impulsion électrique brève,\u003cbr\u003e- tester une surface conductrice,\u003cbr\u003e- créer un point d’accroche temporaire,\u003cbr\u003e- ou perturber légèrement une cible.\u003cbr\u003eLe trait apparaît comme un fil bleu-blanc vif, tendu un instant avant de disparaître.",
        "mana": "Faible",
        "duration": "Instantané (impulsion unique)",
        "range": "3 à 10 mètres selon conductivité de la cible",
        "incantation": "Arc Muet (Aucune après maitrise)",
        "particularity": [
            "Presque totalement silencieux.",
            "Très difficile à anticiper visuellement.",
            "Fonctionne mieux avec des surfaces conductrices.",
            "Peut servir de point d’ancrage temporaire pour d’autres actions."
        ],
        "notes": [
            "Sort parfait pour les combattants rapides.",
            "Utile autant pour tester un environnement que pour frapper brièvement.",
            "Chez un utilisateur instinctif, il devient une extension nerveuse du mouvement.",
            "Sa discrétion en fait un outil redoutable en duel rapproché."
        ],
        "lore": "Nature du sort a definir...",
        "origin": "Tempestra Subtile – Conductions et Décharges Fines (Tome I)",
        "symbol": ""
    }
,
    {
        "id": 68,
        "name": "Nervures du Néant",
        "type": "Contrôle de terrain / Verrouillage d'espace / Pression psychologique",
        "complexity": 3,
        "affinities": [
            "Umbra",
            "Lumia"
        ],
        "specific": "Abyssum / Luxia",
        "desc": "Nova propage une corruption sombre traversée de nervures lumineuses violettes pour rendre l'espace hostile et difficile à lire.",
        "full_desc": "L'utilisateur propage une corruption Umbra-Abyssum sur les surfaces proches : sol, bois, pierre, fissures, joints et appuis. Des nervures Lumia-Luxia violettes attirent et détournent les regards, perturbent la perception et verrouillent tactiquement les lignes de fuite.",
        "mana": "Élevée, surtout lors de la propagation et du maintien sur plusieurs surfaces",
        "duration": "Variable, limitée par la concentration, l'état physique et la quantité de terrain contaminé",
        "range": "Variable depuis le point d'ancrage, souvent la lame d'Éoniris plantée dans une surface",
        "incantation": "« Nervures du Néant »",
        "particularity": [
            "Combine corruption du terrain et perturbation perceptive",
            "Particulièrement efficace dans les couloirs, relais, ruines et passages contraints",
            "Éoniris sert de conduit et de point d'ancrage"
        ],
        "notes": [
            "Révélé lors de l'assaut du relais d'Oakhaven",
            "Ne doit pas être confondu avec Sol Maudit"
        ],
        "lore": "Sort combiné de Nova, né de son Umbra-Abyssum dominant et de sa résonance Lumia-Luxia.",
        "origin": "Révélé en situation de combat, chapitre 94",
        "symbol": ""
    }
];