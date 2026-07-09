/* Système planétaire de Parralela, utilisé par 2/cosmologie.html. */
const cosmologieDB = [
    { id: 'parralela', name: 'PARRALELA', type: 'Monde Central', desc: "Le monde d'origine. Zone habitable et point de convergence.", img: '../img/Parralela_Planète.png', color: '#4FD1C5', moons: [] },
    {
        id: 'pyros', name: 'PYROS', type: 'Affinité Feu', desc: "Un monde volcanique instable. Surface craquelée par la lave.", img: '../img/pyros.png', color: '#FF4500',
        moons: [
            { name: 'Ignis', desc: 'Explosions et flammes instables.', img: 'Ignis.png' },
            { name: 'Vulcan', desc: 'Magma et lave manipulables.', img: 'Vulcan.png' },
            { name: 'Fumar', desc: 'Fumée, cendres et gaz brûlants.', img: 'Fumar.png' }
        ]
    },
    {
        id: 'aquaria', name: 'AQUARIA', type: 'Affinité Eau', desc: "Sphère d'eau pure sans terre émergée. Cités sous-marines.", img: '../img/aquaria.png', color: '#00BFFF',
        moons: [
            { name: 'Glacius', desc: 'Glace et froid extrême.', img: 'Glacius.png' },
            { name: 'Abyssus', desc: 'Haute pression et courants destructeurs.', img: 'Abyssus.png' },
            { name: 'Nebula', desc: 'Vapeur, brouillard et ébullition.', img: 'Nebula.png' }
        ]
    },
    {
        id: 'aeris', name: 'AERIS', type: 'Affinité Vent', desc: "Géante gazeuse aux tempêtes perpétuelles.", img: '../img/aeris.png', color: '#87CEEB',
        moons: [
            { name: 'Stratos', desc: 'Vents violents, ouragans et tornades.', img: 'Stratos.png' },
            { name: 'Zephyria', desc: 'Contrôle précis du vent, silence absolu.', img: 'Zephyria.png' },
            { name: 'Vacuum', desc: 'Absorption d’air, création de zones de vide.', img: 'Vacuum.png' }
        ]
    },
    {
        id: 'lumia', name: 'LUMIA', type: 'Affinité Lumière', desc: "Astre radiant éblouissant qui ne connaît pas la nuit.", img: '../img/lumia.png', noEffects: true, color: '#FFD700',
        moons: [
            { name: 'Solara', desc: 'Chaleur et énergie solaire concentrée.', img: 'Solara.png' },
            { name: 'Luxia', desc: 'Réfraction de la lumière, invisibilité, mirages.', img: 'Luxia.png' },
            { name: 'Photis', desc: 'Lumière dure sous forme de lasers perçants.', img: 'Photis.png' }
        ]
    },
    {
        id: 'umbra', name: 'UMBRA', type: 'Affinité Ombre', desc: "Monde plongé dans une éclipse éternelle et silencieuse.", img: '../img/umbra.png', color: '#9370DB',
        moons: [
            { name: 'Nyx', desc: 'Absorption de lumière, ombres vivantes.', img: 'Nyx.png' },
            { name: 'Noctis', desc: 'Création d’entités cauchemardesques et illusions sombres.', img: 'Noctis.png' },
            { name: 'Abyssum', desc: 'Corruption de la matière et distorsion spatiale.', img: 'Abyssum.png' }
        ]
    },
    {
        id: 'fulgora', name: 'FULGORA', type: 'Affinité Foudre', desc: "Désert de verre foudroyé par des orages statiques.", img: '../img/fulgora.png', color: '#FFFF00',
        moons: [
            { name: 'Tempestra', desc: 'Foudre pure, amplification des décharges.', img: 'Tempestra.png' },
            { name: 'Electra', desc: 'Magnétisme et manipulation des métaux.', img: 'Electra.png' },
            { name: 'Ionis', desc: 'Électricité statique et surcharge d’énergie.', img: 'Ionis.png' }
        ]
    },
    {
        id: 'verdania', name: 'VERDANIA', type: 'Affinité Nature', desc: "Une jungle planétaire ayant recouvert toute trace de civilisation.", img: '../img/verdania.png', color: '#32CD32',
        moons: [
            { name: 'Floralis', desc: 'Plantes médicinales et contrôle des pollens.', img: 'Floralis.png' },
            { name: 'Radicis', desc: 'Manipulation des racines et des sols végétalisés.', img: 'Radicis.png' },
            { name: 'Venomera', desc: 'Plantes vénéneuses et spores paralysantes.', img: 'Venomera.png' }
        ]
    },
    {
        id: 'terra', name: 'TERRA', type: 'Affinité Terre', desc: "Un roc massif, inébranlable. Montagnes spatiales.", img: '../img/terra.png', color: '#8B4513',
        moons: [
            { name: 'Golem', desc: 'Création de golems et d’armes en pierre.', img: 'Golem.png' },
            { name: 'Seismis', desc: 'Ondes de choc et tremblements de terre.', img: 'Seismis.png' },
            { name: 'Metallia', desc: 'Contrôle des minéraux et alliages métalliques.', img: 'Metallia.png' }
        ]
    }
];

const cosmologieStarInfo = { name: "L'ÉTOILE", type: "SOURCE PRIMORDIALE", desc: "Le cœur brûlant du système. Source de Mana brut qui alimente toutes les affinités.", color: '#FFA500' };
