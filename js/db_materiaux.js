/* Base de données des Matériaux - Parralela */
const natureDB = [
    {
        id: 1, category: 'mineral', name: "Argile Lunaire de Kyel", type: "Minéral", classe: "Rare",
        desc: "Argile pâle, à la texture lisse et froide, baignée uniquement par la lumière lunaire.",
        icon: "🌑"
    },
    {
        id: 2, category: 'flore', name: "Bois", type: "Flore", classe: "Standard",
        desc: "Aspect naturel, grain visible, texture variable selon l’essence.",
        icon: "🪵"
    },
    {
        id: 3, category: 'organique', name: "Coquille de Pyrocrabe Ancien", type: "Organique", classe: "Épique",
        desc: "Coquille massive aux teintes sombres, marquée par des stries et zones vitrifiées.",
        icon: "🦀"
    },
    {
        id: 4, category: 'mineral', name: "Cristal de Réfraction Binaire", type: "Minéral", classe: "Rare",
        desc: "Cristal translucide à facettes multiples, dont la surface agit comme un miroir imparfait.",
        icon: "💎"
    },
    {
        id: 5, category: 'mineral', name: "Cuivre", type: "Minéral", classe: "Standard",
        desc: "Métal à la teinte rouge-orangé caractéristique.",
        icon: "🔶"
    },
    {
        id: 6, category: 'flore', name: "Fibre de Lueur Suspendue", type: "Flore", classe: "Rare",
        desc: "Ensemble de fibres fines émettant une lueur douce, visibles principalement lorsqu’elles sont en suspension libre.",
        icon: "✨"
    },
    {
        id: 7, category: 'organique', name: "Fil de Spectre Silencieux", type: "Organique", classe: "Épique",
        desc: "Fil extrêmement fin, presque invisible, semblant flotter sans support.",
        icon: "👻"
    },
    {
        id: 8, category: 'mineral', name: "Fragment de Miroir de Solstice", type: "Minéral", classe: "Épique",
        desc: "Éclat translucide et lumineux, dont la surface agit comme un miroir pur.",
        icon: "🪞"
    },
    {
        id: 9, category: 'mineral', name: "Fragment du Miroir du Néant", type: "Minéral", classe: "Rare",
        desc: "Surface sombre et réfléchissante, renvoyant une image inversée de la réalité.",
        icon: "⚫"
    },
    {
        id: 10, category: 'organique', name: "Griffe de Kérugan", type: "Organique", classe: "Épique",
        desc: "Griffe sombre, lourde, parcourue de fissures incandescentes rappelant la lave en circulation.",
        icon: "🌋"
    },
    {
        id: 11, category: 'organique', name: "Griffes et Dents de Drakyns", type: "Organique", classe: "Peu commun",
        desc: "Griffes et dents de taille modérée, aux teintes sombres.",
        icon: "🦷"
    },
    {
        id: 12, category: 'mineral', name: "Laiton", type: "Minéral", classe: "Standard",
        desc: "Métal jaune doré, à l’aspect brillant une fois poli.",
        icon: "🛎️"
    },
    {
        id: 13, category: 'mineral', name: "L'Œil de Cyclone Silencieux", type: "Minéral", classe: "Épique",
        desc: "Sphère translucide immobile, suspendue au centre du cyclone.",
        icon: "🌀"
    },
    {
        id: 14, category: 'flore', name: "Nerf de Liane-Flamme", type: "Flore", classe: "Rare",
        desc: "Liane épaisse parcourue de zones incandescentes.",
        icon: "🔥"
    },
    {
        id: 15, category: 'mineral', name: "Parralith", type: "Minéral", classe: "Peu commun",
        desc: "Roche dense, veinée de noir, émettant une lueur bleue pulsante.",
        icon: "🔷"
    },
    {
        id: 16, category: 'mineral', name: "Parralith Pure", type: "Minéral", classe: "Unique",
        desc: "Cristal minéral à l’éclat bleu intense, parcouru de pulsations irrégulières.",
        icon: "💠"
    },
    {
        id: 17, category: 'mineral', name: "Pierre de Noxive", type: "Minéral", classe: "Épique",
        desc: "Pierre noire aux reflets mats, absorbant visuellement la lumière ambiante.",
        icon: "🖤"
    },
    {
        id: 18, category: 'organique', name: "Plume d'Hermivol", type: "Organique", classe: "Épique",
        desc: "Plume légère à l’éclat lumineux naturel.",
        icon: "🪶"
    },
    {
        id: 19, category: 'mineral', name: "Poudre d'Obsidambre", type: "Minéral", classe: "Rare",
        desc: "Poudre sombre aux reflets ambrés discrets.",
        icon: "⏳"
    },
    {
        id: 20, category: 'mineral', name: "Poussière de Lune Obscure", type: "Minéral", classe: "Rare",
        desc: "Poudre sombre aux reflets mats, semblant absorber légèrement la lumière ambiante.",
        icon: "🌑"
    },
    {
        id: 21, category: 'organique', name: "Sang Solidifié de Salamandre Dorée", type: "Organique", classe: "Rare",
        desc: "Substance solidifiée à l’éclat doré, présentant une surface lisse et compacte.",
        icon: "🩸"
    },
    {
        id: 22, category: 'flore', name: "Sève figée de Brume d'Âme", type: "Flore", classe: "Rare",
        desc: "Substance figée à l’aspect semi-cristallin, enveloppée d’une brume diffuse persistante.",
        icon: "🌫️"
    },
    {
        id: 23, category: 'organique', name: "Écaille de Vombre", type: "Organique", classe: "Rare",
        desc: "Écaille sombre aux reflets changeants, dont les contours paraissent parfois flous.",
        icon: "🐍"
    },
    {
        id: 24, category: 'flore', name: "Écorce d'Ignoronce", type: "Flore", classe: "Rare",
        desc: "Écorce sombre et rugueuse, marquée par des veinures chauffées en profondeur.",
        icon: "🌳"
    },
    {
        id: 25, category: 'organique', name: "Épine de Murmurocéan", type: "Organique", classe: "Épique",
        desc: "Épine dense et allongée, d’apparence sombre.",
        icon: "🔱"
    }
];
