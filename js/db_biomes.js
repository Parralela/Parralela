const biomesData = [
    {
        "magic":  {
                      "mana":  "Chaotique, Ancienne",
                      "origin":  "Ancienne",
                      "effects":  "Distorsion de la perception, reflets impossibles, ombres incohérentes ; sensation de pression constante liée à la présence du Fragment de Miroir du Néant"
                  },
        "fauna":  {
                      "life":  "Faible, Créatures, Extrême",
                      "type":  "Créatures, Extrême"
                  },
        "icon":  "🍄",
        "constraints":  {
                            "adaptation":  "Préparation",
                            "movement":  "Restreints, Verticaux, Préparation",
                            "dangers":  "Coupures sur surfaces vitrifiées, inhalation de poussière noire, désorientation spatiale et sensorielle, fatigue mentale accrue"
                        },
        "hostility":  "Extrême",
        "type":  "Souterrain, Ancien",
        "conditions":  "Roche ayant fondu puis figé en plaques vitrifiées ; sol recouvert d’une poussière noire dense et lourde",
        "natural":  {
                        "climate":  "Air épais et immobile, absence de courants, distorsions visuelles ; la lumière et les reflets ne suivent pas les lois naturelles",
                        "light":  "Instable, Dangereuse",
                        "stability":  "Dangereuse"
                    },
        "dominantBiome":  "Biome vitrifié corrompu",
        "coherence":  "Instable",
        "color":  "#8D6E63",
        "location":  "Profondeurs de la République de Paidju",
        "morphology":  {
                           "relief":  "Cavité vaste mais désorganisée, sol irrégulier, volumes difficiles à estimer",
                           "structures":  "Plaques vitrifiées tranchantes, arches inversées plantées dans le sol, formations minérales défiant la gravité apparente",
                           "organization":  "Passages étroits / couloirs, Niveaux superposés, Environnement mouvant"
                       },
        "status":  "Ancien",
        "name":  "La Cavité Maudite / Zone Corrompue",
        "id":  "la_cavit__maudite___zone_corrompue"
    },
    {
        "magic":  {
                      "mana":  "Densifié, Naturelle",
                      "origin":  "Naturelle",
                      "effects":  "Bioluminescence naturelle des champignons diffusant une lumière bleue, verte ou violette ; spores émettant une lueur diffuse sans effet agressif immédiat"
                  },
        "fauna":  {
                      "life":  "Abondante, Créatures, Opportuniste",
                      "type":  "Créatures, Opportuniste"
                  },
        "icon":  "🍄",
        "constraints":  {
                            "adaptation":  "Préparation",
                            "movement":  "Préparation",
                            "dangers":  "Inhalation prolongée de spores, désorientation visuelle, zones de sol spongieux ou instable"
                        },
        "hostility":  "Opportuniste",
        "type":  "Souterrain, Naturel",
        "conditions":  "Humidité élevée, air chargé de spores, odeur organique marquée ; croissance fongique massive remplaçant totalement la flore classique",
        "natural":  {
                        "climate":  "Atmosphère chaude et humide, spores lumineuses flottant en suspension comme de la poussière, visibilité douce mais trompeuse",
                        "light":  "Faible, Stable",
                        "stability":  "Stable"
                    },
        "dominantBiome":  "Biome fongique souterrain, dense et bioluminescent",
        "coherence":  "Stable",
        "color":  "#9370DB",
        "location":  "Profondeurs de la République de Paidju",
        "morphology":  {
                           "relief":  "Sol souterrain relativement plat mais irrégulier, structuré par un enchevêtrement de racines fongiques épaisses",
                           "structures":  "Champignons géants aux troncs épais comme des colonnes, chapeaux formant des voûtes naturelles, réseaux mycéliens apparents",
                           "organization":  "Zone ouverte, Niveaux superposés"
                       },
        "status":  "Naturel",
        "name":  "La Forêt de Champignons",
        "id":  "la_for_t_de_champignons"
    },
    {
        "magic":  {
                      "mana":  "Fluide, Naturelle",
                      "origin":  "Naturelle",
                      "effects":  "Allègement naturel de la matière végétale et minérale, intégré à l’écosystème local"
                  },
        "fauna":  {
                      "life":  "Modérée, Animale, Neutre",
                      "type":  "Animale, Neutre"
                  },
        "icon":  "🌿",
        "constraints":  {
                            "adaptation":  "Préparation",
                            "movement":  "Verticaux, Préparation",
                            "dangers":  "Chutes lentes mais prolongées depuis les îlots, dérive imprévisible de certaines plateformes, désorientation verticale"
                        },
        "hostility":  "Neutre",
        "type":  "Terrestre, Naturel",
        "conditions":  "Arbres à structure naturellement légère, feuillage souple, racines peu profondes ; présence de rochers couverts de mousse dérivant lentement dans l’air",
        "natural":  {
                        "climate":  "Air doux et stable, absence de vents violents, dérive lente et constante des îlots rocheux",
                        "light":  "Variable, Stable",
                        "stability":  "Stable"
                    },
        "dominantBiome":  "Forêt tempérée à propriétés naturelles d’allègement",
        "coherence":  "Stable",
        "color":  "#2E8B57",
        "location":  "Hochedenia",
        "morphology":  {
                           "relief":  "Sol forestier majoritairement plat, entrecoupé de clairières et de zones surélevées accessibles par des îlots flottants",
                           "structures":  "Îles rocheuses naturelles couvertes de mousse, plateformes minérales en lévitation lente, habitations construites autour ou en appui de ces formations",
                           "organization":  "Zone ouverte, Niveaux superposés, Environnement mouvant"
                       },
        "status":  "Naturel",
        "name":  "La Forêt Légère",
        "id":  "la_for_t_l_g_re"
    },
    {
        "magic":  {
                      "mana":  "Densifié, Naturelle",
                      "origin":  "Naturelle",
                      "effects":  "Mana chauffé stagnant dans les parois, générant une sensation oppressante et une fatigue progressive"
                  },
        "fauna":  {
                      "life":  "Modérée, Animale, Hostile",
                      "type":  "Animale, Hostile"
                  },
        "icon":  "🌲",
        "constraints":  {
                            "adaptation":  "Équipement",
                            "movement":  "Restreints, Verticaux, Équipement",
                            "dangers":  "Chutes de pierres, glissades sur roche instable, embuscades facilitées par l’étroitesse du terrain"
                        },
        "hostility":  "Hostile",
        "type":  "Terrestre, Naturel",
        "conditions":  "Roche teintée de fer, ocre profond veiné de noir, accumulation permanente de poussière minérale",
        "natural":  {
                        "climate":  "Air sec et chargé de poussière, résonance sonore marquée, chaleur piégée entre les parois malgré l’altitude",
                        "light":  "Faible, Partiellement instable",
                        "stability":  "Partiellement instable"
                    },
        "dominantBiome":  "Canyon alpin encaissé, minéral et abrupt",
        "coherence":  "Stable",
        "color":  "#2E8B57",
        "location":  "Sud-Est de Tharis — République de Paidju",
        "morphology":  {
                           "relief":  "Gorge étroite et sinueuse, parois quasi verticales, sol irrégulier et fracturé",
                           "structures":  "Parois striées par l’érosion, éboulis permanents, fissures profondes dans la roche",
                           "organization":  "Passages étroits / couloirs, Niveaux superposés"
                       },
        "status":  "Naturel",
        "name":  "La Gorge de Halmoor",
        "id":  "la_gorge_de_halmoor"
    },
    {
        "magic":  {
                      "mana":  "Fluide, Naturelle",
                      "origin":  "Naturelle",
                      "effects":  "Impression d’immensité écrasante ; sensation que l’espace marin n’appartient à personne"
                  },
        "fauna":  {
                      "life":  "Abondante, Animale, Opportuniste",
                      "type":  "Animale, Opportuniste"
                  },
        "icon":  "🌊",
        "constraints":  {
                            "adaptation":  "Préparation",
                            "movement":  "Aquatiques, Préparation",
                            "dangers":  "Noyade, épuisement, dérive prolongée, perte totale de repères"
                        },
        "hostility":  "Opportuniste",
        "type":  "Aquatique, Naturel",
        "conditions":  "Masse d’eau infinie, odeur de sel et de corde mouillée ; absence de repères fixes, horizon parfaitement plat",
        "natural":  {
                        "climate":  "Alternance de calmes plats et de houles soutenues ; la nuit, la mer devient une masse noire ponctuée d’écume pâle",
                        "light":  "Variable, Stable",
                        "stability":  "Stable"
                    },
        "dominantBiome":  "Océan ouvert",
        "coherence":  "Stable",
        "color":  "#00BFFF",
        "location":  "Hors territoires définis — zones océaniques ouvertes",
        "morphology":  {
                           "relief":  "Surface plane et mouvante, profondeur inconnue et variable",
                           "structures":  "Houle continue, vagues longues, absence totale de formations émergées",
                           "organization":  "Zone ouverte, Environnement mouvant"
                       },
        "status":  "Naturel",
        "name":  "La Haute Mer",
        "id":  "la_haute_mer"
    },
    {
        "magic":  {
                      "mana":  "Chaotique, Artificielle",
                      "origin":  "Artificielle",
                      "effects":  "Distorsions thermiques et magiques permanentes, réactions anormales du mana à proximité des zones surchauffées"
                  },
        "fauna":  {
                      "life":  "Faible, Créatures, Extrême",
                      "type":  "Créatures, Extrême"
                  },
        "icon":  "⛏",
        "constraints":  {
                            "adaptation":  "Équipement",
                            "movement":  "Dangereuse",
                            "dangers":  "Brûlures thermiques, inhalation de vapeurs toxiques, effondrements, sol couvert de scories et de gravier noir instable"
                        },
        "hostility":  "Extrême",
        "type":  "Souterrain, Modifié",
        "conditions":  "Chaleur constante, atmosphère saturée de soufre et de métal chauffé à blanc ; humidité sale suintant des parois et s’évaporant aussitôt",
        "natural":  {
                        "climate":  "Vapeurs brûlantes, évaporations soudaines, chaleur pulsatile liée aux déplacements ou au souffle du Kérugan",
                        "light":  "Variable, Dangereuse",
                        "stability":  "Dangereuse"
                    },
        "dominantBiome":  "Biome industriel volcanique souterrain",
        "coherence":  "Instable",
        "color":  "#708090",
        "location":  "Beylik de Kaiyurt",
        "morphology":  {
                           "relief":  "Réseau de galeries élargies et déformées par la chaleur, sols irréguliers et affaissés",
                           "structures":  "Parois noircies, zones vitrifiées localisées, anciennes infrastructures minières partiellement fondues",
                           "organization":  "Passages étroits / couloirs, Niveaux superposés, Environnement mouvant"
                       },
        "status":  "Modifié",
        "name":  "Les Mines basses de Kaiyurt",
        "id":  "les_mines_basses_de_kaiyurt"
    },
    {
        "magic":  {
                      "mana":  "Fluide, Naturelle",
                      "origin":  "Naturelle",
                      "effects":  "Maintien naturel de la lévitation des masses terrestres ; interaction constante entre air, eau et roche"
                  },
        "fauna":  {
                      "life":  "Modérée, Animale, Neutre",
                      "type":  "Animale, Neutre"
                  },
        "icon":  "🏝",
        "constraints":  {
                            "adaptation":  "Préparation",
                            "movement":  "Verticaux, Aériens nécessaires, Préparation",
                            "dangers":  "Chutes dans le vide, désorientation dans la brume, séparation brutale entre les îles"
                        },
        "hostility":  "Neutre",
        "type":  "Aérien, Naturel",
        "conditions":  "Masses de terre arrachées au sol et suspendues dans le ciel ; face inférieure en roche brute fracturée, face supérieure composée de terre fertile et d’herbe",
        "natural":  {
                        "climate":  "Cascades se brisant en brume avant toute surface, nuages s’enroulant autour des îles comme une mer blanche, vents doux mais constants",
                        "light":  "Variable, Stable",
                        "stability":  "Stable"
                    },
        "dominantBiome":  "Biomes d’îles flottantes célestes",
        "coherence":  "Stable",
        "color":  "#87CEEB",
        "location":  "Grand-Duché de Harmouth",
        "morphology":  {
                           "relief":  "Îles de tailles variables, parfois plates, parfois vallonnées, séparées par de larges espaces aériens",
                           "structures":  "Fractures rocheuses visibles sous les îles, chutes d’eau se déversant dans le vide, nappes de brume persistantes",
                           "organization":  "Zone ouverte, Niveaux superposés, Environnement mouvant"
                       },
        "status":  "Naturel",
        "name":  "L’Archipel Céleste",
        "id":  "l_archipel_c_leste"
    },
    {
        "magic":  {
                      "mana":  "Fluide, Naturelle",
                      "origin":  "Naturelle",
                      "effects":  "Éclairage doux et constant émis par des cristaux bleutés coincés dans la roche, créant une atmosphère irréelle et apaisante"
                  },
        "fauna":  {
                      "life":  "Faible, Neutre",
                      "type":  "Neutre"
                  },
        "icon":  "🌊",
        "constraints":  {
                            "adaptation":  "Préparation",
                            "movement":  "Aquatiques, Préparation",
                            "dangers":  "Glissades sur roche humide, profondeur incertaine du bassin, refroidissement prolongé"
                        },
        "hostility":  "Neutre",
        "type":  "Souterrain, Naturel",
        "conditions":  "Humidité constante, air frais et immobile ; odeur minérale légère mêlée à l’eau stagnante",
        "natural":  {
                        "climate":  "Ruissellement régulier, gouttes résonnant doucement, surface de l’eau presque immobile",
                        "light":  "Faible, Stable",
                        "stability":  "Stable"
                    },
        "dominantBiome":  "Biome caverneux humide à bassin central",
        "coherence":  "Stable",
        "color":  "#8D6E63",
        "location":  "Réseau souterrain général",
        "morphology":  {
                           "relief":  "Caverne circulaire ou ovale, à la géométrie presque parfaite",
                           "structures":  "Voûte rocheuse lisse formant un toit homogène, fissure unique laissant tomber un filet d’eau continu, bassin central d’eau sombre",
                           "organization":  "Zone ouverte"
                       },
        "status":  "Naturel",
        "name":  "L’Étang Souterrain",
        "id":  "l__tang_souterrain"
    },
    {
        "magic":  {
                      "mana":  "Fluide, Naturelle",
                      "origin":  "Naturelle",
                      "effects":  "L’altitude et la topographie influencent la perception des distances et des hauteurs sans altérer directement les capacités magiques"
                  },
        "fauna":  {
                      "life":  "Modérée, Animale, Opportuniste",
                      "type":  "Animale, Opportuniste"
                  },
        "icon":  "🏔",
        "constraints":  {
                            "adaptation":  "Équipement",
                            "movement":  "Restreints, Verticaux, Équipement",
                            "dangers":  "Chutes, glissades sur roche ou neige, fatigue liée à l’altitude, avalanches locales en haute montagne"
                        },
        "hostility":  "Opportuniste",
        "type":  "Terrestre, Naturel",
        "conditions":  "Températures fraîches à froides, enneigement ponctuel avec neige persistante sur les sommets, saisons contrastées selon l’altitude",
        "natural":  {
                        "climate":  "Alternance de temps clair et de chutes de neige en altitude, brouillards matinaux dans les vallées, orages occasionnels",
                        "light":  "Variable, Stable",
                        "stability":  "Stable"
                    },
        "dominantBiome":  "Biome alpin : montagnes rocheuses élevées, vallées encaissées, végétation résistante et clairsemée en altitude",
        "coherence":  "Stable",
        "color":  "#2E8B57",
        "location":  "République de Paidju — Nord-Est, Centre",
        "morphology":  {
                           "relief":  "Relief marqué mais progressif, alternance de massifs rocheux, pentes abruptes, plateaux d’altitude et vallées exploitables",
                           "structures":  "Falaises naturelles, cols montagneux, cirques rocheux, lacs d’altitude, grottes naturelles liées à l’érosion",
                           "organization":  "Zone ouverte, Niveaux superposés"
                       },
        "status":  "Naturel",
        "name":  "Environnement montagneux (type alpin)",
        "id":  "environnement_montagneux__type_alpin_"
    },
    {
        "magic":  {
                      "mana":  "Densifié, Artificielle",
                      "origin":  "Artificielle",
                      "effects":  "Les zones riches en minerais perturbent légèrement la circulation du mana, créant des interférences locales imprévisibles"
                  },
        "fauna":  {
                      "life":  "Modérée, Animale, Hostile",
                      "type":  "Animale, Hostile"
                  },
        "icon":  "⛏",
        "constraints":  {
                            "adaptation":  "Équipement",
                            "movement":  "Restreints, Verticaux, Équipement",
                            "dangers":  "Effondrements, chutes dans des puits ouverts, asphyxie par poussières, terrain instable, galeries fragilisées"
                        },
        "hostility":  "Hostile",
        "type":  "Terrestre, Modifié",
        "conditions":  "Forte présence de poussières minérales, végétation rare ou absente autour des sites exploités, contrastes marqués entre zones intactes et zones excavées",
        "natural":  {
                        "climate":  "Éboulements fréquents, vibrations liées aux extractions, nappes de poussière persistantes, écoulements d’eau chargée en minéraux",
                        "light":  "Variable, Dangereuse",
                        "stability":  "Dangereuse"
                    },
        "dominantBiome":  "Montagnes rocheuses altérées par l’extraction minière, sols dénudés, parois à nu et zones instables",
        "coherence":  "Artificiellement maintenu",
        "color":  "#708090",
        "location":  "République de Paidju — Sud",
        "morphology":  {
                           "relief":  "Relief fracturé et irrégulier, montagnes entaillées de terrasses, entonnoirs d’extraction et flancs creusés",
                           "structures":  "Mines à ciel ouvert, galeries souterraines, puits verticaux, plateformes d’extraction, infrastructures abandonnées ou actives",
                           "organization":  "Zone ouverte, Passages étroits / couloirs, Niveaux superposés, Environnement mouvant"
                       },
        "status":  "Modifié",
        "name":  "Environnement montagneux (type minier)",
        "id":  "environnement_montagneux__type_minier_"
    },
    {
        "magic":  {
                      "mana":  "Densifié, Naturelle",
                      "origin":  "Naturelle",
                      "effects":  "Diffusion douce de lumière issue de cristaux ambrés ou bleutés naturellement incrustés dans la roche"
                  },
        "fauna":  {
                      "life":  "Modérée, Animale, Opportuniste",
                      "type":  "Animale, Opportuniste"
                  },
        "icon":  "🍄",
        "constraints":  {
                            "adaptation":  "Équipement",
                            "movement":  "Restreints, Équipement",
                            "dangers":  "Sol glissant, obscurité partielle, chutes dans des bassins profonds, désorientation dans le réseau"
                        },
        "hostility":  "Opportuniste",
        "type":  "Souterrain, Naturel",
        "conditions":  "Air saturé d’humidité, odeur de métal tiède mêlée à de l’eau stagnante ; parois rocheuses parfois couvertes de mousse sombre",
        "natural":  {
                        "climate":  "Condensation permanente, gouttes d’eau continues, échos prolongés, zones glissantes",
                        "light":  "Faible, Stable",
                        "stability":  "Stable"
                    },
        "dominantBiome":  "Biome caverneux humide, minéral et confiné",
        "coherence":  "Stable",
        "color":  "#8D6E63",
        "location":  "Sous les montagnes du nord de la République de Paidju",
        "morphology":  {
                           "relief":  "Réseau de galeries naturelles aux formes irrégulières, alternant cavernes larges et passages resserrés",
                           "structures":  "Voûtes minérales, fissures suintantes, bassins d’eau retenue, excroissances rocheuses incrustées de cristaux",
                           "organization":  "Passages étroits / couloirs, Niveaux superposés"
                       },
        "status":  "Naturel",
        "name":  "Réseau caverneux humide",
        "id":  "r_seau_caverneux_humide"
    },
    {
        "magic":  {
                      "mana":  "Fluide, Naturelle",
                      "origin":  "Naturelle",
                      "effects":  "Vitalité végétale exacerbée, régénération lente mais continue de la flore ; sensation d’oppression liée à la densité du vivant"
                  },
        "fauna":  {
                      "life":  "Abondante, Animale, Opportuniste",
                      "type":  "Animale, Opportuniste"
                  },
        "icon":  "🌿",
        "constraints":  {
                            "adaptation":  "Préparation",
                            "movement":  "Restreints, Verticaux, Aériens nécessaires, Préparation",
                            "dangers":  "Chutes dans le vide depuis la canopée inférieure, racines instables, enchevêtrements pouvant piéger un corps"
                        },
        "hostility":  "Opportuniste",
        "type":  "Aérien, Naturel",
        "conditions":  "Humidité lourde et constante, végétation extrêmement dense, air chaud et saturé de particules organiques ; croissance rapide et envahissante",
        "natural":  {
                        "climate":  "Atmosphère chaude et humide, condensation permanente, bruissement constant de la végétation",
                        "light":  "Faible, Stable",
                        "stability":  "Stable"
                    },
        "dominantBiome":  "Jungle suspendue dense, à forte influence verdoyante",
        "coherence":  "Stable",
        "color":  "#87CEEB",
        "location":  "Grand-Duché de Harmouth",
        "morphology":  {
                           "relief":  "Surface compacte et irrégulière, entièrement couverte de végétation, progression entravée par les racines et les feuillages",
                           "structures":  "Arbres hauts aux feuilles larges, troncs massifs entrelacés, lianes épaisses formant des ponts naturels",
                           "organization":  "Passages étroits / couloirs naturels, Niveaux superposés, Environnement mouvant"
                       },
        "status":  "Naturel",
        "name":  "Île de Jungle Suspendue",
        "id":  "_le_de_jungle_suspendue"
    },
    {
        "magic":  {
                      "mana":  "Chaotique, Naturelle",
                      "origin":  "Naturelle",
                      "effects":  "Maintien naturel de la lévitation malgré la masse et la chaleur ; interaction chaotique entre feu, roche et air"
                  },
        "fauna":  {
                      "life":  "Faible, Créatures, Élevé",
                      "type":  "Créatures, Élevé"
                  },
        "icon":  "🌋",
        "constraints":  {
                            "adaptation":  "Préparation",
                            "movement":  "Restreints, Verticaux, Aériens nécessaires, Préparation",
                            "dangers":  "Brûlures thermiques, inhalation de gaz mortels, fractures soudaines du sol, perte d’équilibre due aux déplacements de l’île"
                        },
        "hostility":  "Élevé",
        "type":  "Aérien, Naturel",
        "conditions":  "Chaleur intense et permanente, roche nue et brûlante ; émanations de gaz toxiques rendant la respiration dangereuse",
        "natural":  {
                        "climate":  "Air vibrant au-dessus de la roche, distorsions visuelles dues à la chaleur, dégagements soudains de gaz brûlants",
                        "light":  "Variable, Dangereuse",
                        "stability":  "Dangereuse"
                    },
        "dominantBiome":  "Biome volcanique aérien instable",
        "coherence":  "Instable",
        "color":  "#FF4500",
        "location":  "Grand-Duché de Harmouth",
        "morphology":  {
                           "relief":  "Île rocheuse compacte aux formes irrégulières, fractures ouvertes laissant s’échapper chaleur et vapeurs",
                           "structures":  "Coulées de roche figée, évents volcaniques actifs, zones de sol fragilisé",
                           "organization":  "Passages étroits / couloirs naturels, Niveaux superposés, Environnement mouvant"
                       },
        "status":  "Naturel",
        "name":  "Île volcanique mouvante",
        "id":  "_le_volcanique_mouvante"
    }
];