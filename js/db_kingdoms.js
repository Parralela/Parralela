const kingdomsDB = {
    "paidju": {
        "name": "République de Paidju",
        "type": "République civile",
        "power": "Conseil républicain",
        "stability": "Stable (Ancienne)",
        "capital": "Fertol",
        "icon": "🏛️",
        "color": "#3498db",
        "desc_short": "Une république montagneuse neutre et équilibrée, territoire natal de plusieurs héros.",
        "geo": {
            "relief": "Territoire très montagneux, structuré autour de vallées habitées.",
            "access": "Routes terrestres et souterraines uniquement.",
            "isolation": "Naturellement isolée par les montagnes."
        },
        "culture": {
            "mentality": "Chaleureux en ville, méfiants en villages.",
            "magic": "La magie fait partie du quotidien."
        },
        "defense": {
            "forces": "Protecteurs locaux assignés aux villes.",
            "doctrine": "Protection naturelle par les montagnes."
        },
        "role": {
            "function": "Territoire natal de Lily, Nova et Finn.",
            "symbol": "Lieu d’origine et de racines."
        },
        "full_text": `
            <h3>Identité</h3>
            <ul>
                <li><strong>Nom officiel :</strong> République de Paidju</li>
                <li><strong>Type de régime :</strong> République civile</li>
                <li><strong>Structure du pouvoir :</strong> Conseil républicain</li>
                <li><strong>Stabilité politique :</strong> Stable</li>
                <li><strong>Ancienneté :</strong> République installée, considérée comme ancienne</li>
                <li><strong>Capitale :</strong> Fertol</li>
            </ul>

            <h3>Géographie</h3>
            <ul>
                <li><strong>Relief dominant :</strong> Territoire très montagneux, structuré autour de vallées habitées. Les montagnes elles-mêmes sont peu peuplées.</li>
                <li><strong>Zones habitées :</strong> Vallées principales et la Plaine centrale (cas particulier).</li>
                <li><strong>Capitale – Fertol :</strong> Située dans l’une des rares plaines de la République, hors massif montagneux.</li>
                <li><strong>Créatures :</strong> Peu de créatures dangereuses sur l’ensemble du territoire (des exceptions existent, localisées).</li>
                <li><strong>Réseaux et accès :</strong> Routes terrestres et souterraines uniquement. Villes et villages implantés à des points stratégiques (accès aux montagnes, entrées souterraines, axes commerciaux).</li>
                <li><strong>Isolement :</strong> Naturellement isolée par les montagnes, mais traversée par des routes commerciales dans les vallées.</li>
            </ul>

            <h3>Culture & Société</h3>
            <ul>
                <li><strong>Mentalité générale :</strong> Habitants des villes chaleureux, habitants des villages plus méfiants. Société très communautaire.</li>
                <li><strong>Rapport à la magie :</strong> La magie fait partie du quotidien, sans statut particulier.</li>
                <li><strong>Position idéologique :</strong> République neutre et équilibrée.</li>
            </ul>

            <h3>Défense & Sécurité</h3>
            <ul>
                <li><strong>Forces armées :</strong> Peu de forces militaires structurées.</li>
                <li><strong>Protection locale :</strong> Défense assurée principalement par des Protecteurs assignés aux villes (ex. Lyrielle, Galen, Marie).</li>
                <li><strong>Doctrine défensive :</strong> La géographie montagneuse constitue la principale protection naturelle.</li>
            </ul>

            <h3>Rôle Narratif</h3>
            <ul>
                <li><strong>Fonction dans l’histoire :</strong> Territoire natal de Lily, Nova et Finn.</li>
                <li><strong>Symbolique :</strong> Lieu d’origine, d’attachement et de racines.</li>
            </ul>
        `
    },
    "kaiyurt": {
        "name": "Beylik de Kaiyurt",
        "type": "Beylik héréditaire",
        "power": "Bey + Chefs de clans",
        "stability": "Brutale mais tenue",
        "capital": "Khar-Zul",
        "icon": "⚔️",
        "color": "#e74c3c",
        "desc_short": "Une puissance souterraine et minière à la société clanique et esclavagiste.",
        "geo": {
            "relief": "Peu fertile en surface (gravier).",
            "habitat": "Population majoritairement souterraine.",
            "cities": "Cités souterraines gigantesques."
        },
        "culture": {
            "social": "Société clanique hiérarchisée.",
            "moral": "Pragmatique, esclavage assumé."
        },
        "defense": {
            "forces": "Mercenaires et troupes spécialisées.",
            "doctrine": "Réseau de galeries souterraines."
        },
        "role": {
            "function": "Exemple d’économie immorale mais efficace.",
            "symbol": "Puissance économique incontournable."
        },
        "full_text": `
            <h3>Identité</h3>
            <ul>
                <li><strong>Nom officiel :</strong> Beylik de Kaiyurt</li>
                <li><strong>Type de régime :</strong> Beylik héréditaire</li>
                <li><strong>Structure du pouvoir :</strong> Bey héréditaire gouvernant avec l’appui de chefs de clans</li>
                <li><strong>Stabilité politique :</strong> Brutale mais tenue</li>
                <li><strong>Capitale :</strong> Khar-Zul (Mégacité souterraine, organisée sur plusieurs étages)</li>
            </ul>

            <h3>Géographie</h3>
            <ul>
                <li><strong>Relief et environnement :</strong> Territoire peu fertile en surface, majoritairement composé de gravier et de sols pauvres, rendant l’exploitation de surface peu rentable.</li>
                <li><strong>Habitat :</strong> Population vivant majoritairement sous terre, avec de rares villes de surface à vocation logistique ou de transit.</li>
                <li><strong>Cités souterraines :</strong> Gigantesques, très profondes, structurées verticalement et étroitement liées aux réseaux miniers.</li>
                <li><strong>Surface :</strong> Exploitée de manière minimale, souvent ignorée au profit des profondeurs.</li>
            </ul>

            <h3>Culture & Société</h3>
            <ul>
                <li><strong>Organisation sociale :</strong> Société fortement hiérarchisée autour des clans, des mines et du pouvoir du Bey.</li>
                <li><strong>Vision morale dominante :</strong> Population globalement indifférente, pragmatique, sans cruauté gratuite.</li>
                <li><strong>Esclavage :</strong> Totalement assumé culturellement et juridiquement. Élément central du fonctionnement du Beylik.</li>
                <li><strong>Origine des esclaves :</strong> Étrangers capturés, criminels.</li>
                <li><strong>Utilisation :</strong> Principalement comme main-d’œuvre minière.</li>
            </ul>

            <h3>Défense & Contrôle</h3>
            <ul>
                <li><strong>Doctrine défensive :</strong> Basée sur le réseau de galeries souterraines et des troupes spécialisées adaptées au combat en milieu confiné.</li>
                <li><strong>Forces armées :</strong> Peu d’armée classique ; recours fréquent à des mercenaires pour la sécurité, le contrôle des zones sensibles et les opérations extérieures.</li>
                <li><strong>Contrôle interne :</strong> Assuré par la combinaison de la structure clanique et de la force armée.</li>
            </ul>

            <h3>Rôle Narratif</h3>
            <ul>
                <li><strong>Fonction thématique :</strong> Exemple d’économie immorale mais efficace.</li>
                <li><strong>Position morale :</strong> Beylik moralement gris : ni caricaturalement malveillant, ni justifiable.</li>
                <li><strong>Rôle dans le monde :</strong> Puissance économique souterraine, incontournable mais dérangeante.</li>
            </ul>
        `
    },
    "hochedenia": {
        "name": "Hochedenia",
        "type": "Cité-État académique",
        "power": "Conseil de maîtres",
        "stability": "Neutre, respecté",
        "capital": "Capitale d’État",
        "icon": "🌿",
        "color": "#2ecc71",
        "desc_short": "Une Cité-État académique neutre, pilier intellectuel de Parralela.",
        "geo": {
            "relief": "Collines modérées, région forestière.",
            "defense": "Aucune fortification massive.",
            "access": "Ouvert à tous."
        },
        "culture": {
            "institution": "Haute École centrale.",
            "society": "Population civile et académique."
        },
        "defense": {
            "doctrine": "Diplomatie et dissuasion intellectuelle.",
            "allies": "Paidju, Neusern, Unter."
        },
        "role": {
            "function": "Incarnation du savoir structuré.",
            "symbol": "État admiré et respecté."
        },
        "full_text": `
            <h3>Identité</h3>
            <ul>
                <li><strong>Nom officiel :</strong> Hochedenia</li>
                <li><strong>Type de régime :</strong> Cité-État académique</li>
                <li><strong>Nature politique :</strong> Neutralité politique forte</li>
                <li><strong>Statut international :</strong> État trop respecté pour être attaqué ouvertement</li>
                <li><strong>Capitale :</strong> Capitale d’État (fonctionnant comme toute autre capitale nationale)</li>
            </ul>

            <h3>Organisation Politique</h3>
            <ul>
                <li><strong>Structure du pouvoir :</strong> Conseil de maîtres, organe dirigeant collégial.</li>
                <li><strong>Rôle du directeur de la Haute École :</strong> Membre du conseil, sans pouvoir absolu.</li>
                <li><strong>Mode de gouvernance :</strong> Collégial, basé sur la compétence et l’expérience.</li>
                <li><strong>Politique extérieure :</strong> Décisions politiques externes évitées autant que possible.</li>
            </ul>

            <h3>Géographie</h3>
            <ul>
                <li><strong>Implantation :</strong> Territoire surfacique, composé de collines modérées (non assimilables à de la montagne).</li>
                <li><strong>Environnement :</strong> Région hautement forestière.</li>
                <li><strong>Fortifications :</strong> Aucune défense massive connue ; la protection repose avant tout sur la réputation de l’État.</li>
            </ul>

            <h3>Société & Accès</h3>
            <ul>
                <li><strong>Accès au territoire :</strong> Ouvert à tous.</li>
                <li><strong>Population :</strong> Présence permanente de civils, en plus de la population académique.</li>
                <li><strong>Statut de la Haute École :</strong> Institution centrale, mais distincte de l’État lui-même.</li>
                <li><strong>Vie civile :</strong> Fonctionnement normal d’un État, avec administration, commerce et habitants sédentaires.</li>
            </ul>

            <h3>Défense & Sécurité</h3>
            <ul>
                <li><strong>Principe de défense :</strong> Priorité absolue à la diplomatie. Défense indirecte, fondée sur alliances, influence et dissuasion intellectuelle.</li>
                <li><strong>En cas de conflit :</strong> Tentative de résolution diplomatique. Si échec : déploiement de forces.</li>
                <li><strong>Soutiens militaires :</strong> Appui d’autres États alliés (République de Paidju, République de Neusern, Principauté d’Unter) ainsi que de la Haute École d’Hochedenia.</li>
            </ul>

            <h3>Rôle Narratif</h3>
            <ul>
                <li><strong>Fonction thématique :</strong> Incarnation du savoir structuré.</li>
                <li><strong>Image dans le monde :</strong> État admiré.</li>
                <li><strong>Position dans l’univers :</strong> Pilier intellectuel et académique de Parralela.</li>
            </ul>
        `
    },
    "harmouth": {
        "name": "Grand-Duché de Harmouth",
        "type": "Monarchie héréditaire",
        "power": "Grand-Duc / Grande-Duchesse",
        "stability": "Stable (Stratégique)",
        "capital": "Aeralis",
        "icon": "👑",
        "color": "#9b59b6",
        "desc_short": "Une puissance aérienne d'îles volantes, carrefour commercial et symbole de liberté.",
        "geo": {
            "config": "Ensemble d’îles volantes naturelles.",
            "population": "70% îles volantes, 25% surface.",
            "surface": "Logistique et agriculture."
        },
        "culture": {
            "mentality": "Société ouverte, exploratrice et marchande.",
            "tech": "Structures légères (spécialité culturelle)."
        },
        "defense": {
            "doctrine": "Mobilité du territoire.",
            "forces": "Armée structurée."
        },
        "role": {
            "function": "Incarnation de la liberté et du mouvement.",
            "symbol": "Nœud de circulation et de rencontres."
        },
        "full_text": `
            <h3>Identité</h3>
            <ul>
                <li><strong>Nom officiel :</strong> Grand-Duché de Harmouth</li>
                <li><strong>Type de régime :</strong> Monarchie héréditaire avec contre-pouvoirs</li>
                <li><strong>Figure dirigeante :</strong> Grand-Duc / Grande-Duchesse (rôle principalement politique et diplomatique)</li>
                <li><strong>Stabilité politique :</strong> Stable, assurée par sa position stratégique entre le continent Ouest et le continent central</li>
                <li><strong>Capitale :</strong> Aeralis</li>
            </ul>

            <h3>Géographie</h3>
            <ul>
                <li><strong>Configuration générale :</strong> Territoire composé d’un ensemble d’îles volantes naturelles, réparties de manière inégale (zones très denses et zones plus clairsemées).</li>
                <li><strong>Nature des îles :</strong> Exclusivement naturelles.</li>
                <li><strong>Répartition de la population :</strong> 70 % sur les îles volantes, 25 % à la surface, 5 % en zones souterraines.</li>
                <li><strong>Sol continental :</strong> Principalement dédié à des fonctions logistiques et agricoles.</li>
            </ul>

            <h3>Culture & Société</h3>
            <ul>
                <li><strong>Mentalité dominante :</strong> Société ouverte, exploratrice et marchande, comparable dans l’esprit à la République de Paidju.</li>
                <li><strong>Perception extérieure :</strong> Harmouth est vu comme un point de passage majeur.</li>
                <li><strong>Accueil des étrangers :</strong> Généralement bien accueillis.</li>
                <li><strong>Valeur centrale :</strong> La liberté, dans les déplacements comme dans les échanges.</li>
            </ul>

            <h3>Structures & Savoir-faire</h3>
            <ul>
                <li><strong>Structures légères :</strong> Véritable spécialité culturelle, maîtrisée et intégrée à l’identité du Grand-Duché.</li>
                <li><strong>Rayonnement extérieur :</strong> Harmouth est reconnu pour la beauté de ses paysages et les systèmes ingénieux mis en place pour relier, habiter et exploiter les îles.</li>
            </ul>

            <h3>Défense & Sécurité</h3>
            <ul>
                <li><strong>Doctrine défensive :</strong> Repose avant tout sur la mobilité du territoire et la difficulté d’accès pour toute armée conventionnelle.</li>
                <li><strong>Forces armées :</strong> Présence d’une armée structurée.</li>
                <li><strong>Vulnérabilité :</strong> Territoire difficile à envahir, même pour une force organisée.</li>
            </ul>

            <h3>Rôle Narratif</h3>
            <ul>
                <li><strong>Fonction thématique :</strong> Incarnation de la liberté et du mouvement.</li>
                <li><strong>Atmosphère associée :</strong> Lieu d’émerveillement, aussi bien visuel que culturel.</li>
                <li><strong>Rôle dans le monde :</strong> Nœud de circulation, de transition et de rencontres entre régions.</li>
            </ul>
        `
    },

    "afordia": {
    	"name": "Royaume d'Afordia",
    	"type": "Royaume côtier",
    	"power": "Non précisé",
    	"stability": "Non précisée",
    	"capital": "Non précisée",
    	"icon": "🌊",
    	"color": "#16a085",
    	"desc_short": "Royaume maritime traversé lors de la quête de la Coquille de Pyrocrabe Ancien.",
    	"geo": {
    		"relief": "Non précisé",
    		"access": "Routes terrestres et/ou spécialisées",
    		"isolation": "Variable"
    	},
    	"culture": {
    		"mentality": "Non précisée",
    		"magic": "Présence magique locale attestée par les chapitres"
    	},
    	"defense": {
    		"forces": "Non précisées",
    		"doctrine": "Non précisée"
    	},
    	"role": {
    		"function": "Étape côtière du voyage des matériaux, notamment autour du port de Naris.",
    		"symbol": "Royaume maritime traversé lors de la quête de la Coquille de Pyrocrabe Ancien."
    	},
    	"full_text": "<h3>Rôle canon</h3><p>Étape côtière du voyage des matériaux, notamment autour du port de Naris.</p>"
    },

    "balmajosza": {
    	"name": "Royaume de Balmajosza",
    	"type": "Royaume",
    	"power": "Non précisé",
    	"stability": "Non précisée",
    	"capital": "Non précisée",
    	"icon": "🌙",
    	"color": "#bdc3c7",
    	"desc_short": "Royaume silencieux et sacralisé, associé à Orizon, à Manelis et à l'Argile Lunaire de Kyel.",
    	"geo": {
    		"relief": "Non précisé",
    		"access": "Routes terrestres et/ou spécialisées",
    		"isolation": "Variable"
    	},
    	"culture": {
    		"mentality": "Non précisée",
    		"magic": "Présence magique locale attestée par les chapitres"
    	},
    	"defense": {
    		"forces": "Non précisées",
    		"doctrine": "Non précisée"
    	},
    	"role": {
    		"function": "Étape tardive du voyage, autour d'Orizon, du Don de Manelis et des lieux sacrés lunaires.",
    		"symbol": "Royaume silencieux et sacralisé, associé à Orizon, à Manelis et à l'Argile Lunaire de Kyel."
    	},
    	"full_text": "<h3>Rôle canon</h3><p>Étape tardive du voyage, autour d'Orizon, du Don de Manelis et des lieux sacrés lunaires.</p>"
    },

    "karostos": {
    	"name": "Karostos",
    	"type": "Territoire / cité minérale",
    	"power": "Non précisé",
    	"stability": "Non précisée",
    	"capital": "Non précisée",
    	"icon": "⛓️",
    	"color": "#7f8c8d",
    	"desc_short": "Lieu minéral oppressant, associé aux enchères et à une pression morale lourde.",
    	"geo": {
    		"relief": "Non précisé",
    		"access": "Routes terrestres et/ou spécialisées",
    		"isolation": "Variable"
    	},
    	"culture": {
    		"mentality": "Non précisée",
    		"magic": "Présence magique locale attestée par les chapitres"
    	},
    	"defense": {
    		"forces": "Non précisées",
    		"doctrine": "Non précisée"
    	},
    	"role": {
    		"function": "Étape traumatique du voyage du Quattro, marquée par les enchères et le malaise social.",
    		"symbol": "Lieu minéral oppressant, associé aux enchères et à une pression morale lourde."
    	},
    	"full_text": "<h3>Rôle canon</h3><p>Étape traumatique du voyage du Quattro, marquée par les enchères et le malaise social.</p>"
    },

    "territoire_sauvage": {
    	"name": "Territoire Sauvage",
    	"type": "Territoire non dompté",
    	"power": "Non précisé",
    	"stability": "Non précisée",
    	"capital": "Non précisée",
    	"icon": "🌿",
    	"color": "#2ecc71",
    	"desc_short": "Étendue vivante, vaste et imprévisible que le Quattro traverse durant la quête des matériaux.",
    	"geo": {
    		"relief": "Non précisé",
    		"access": "Routes terrestres et/ou spécialisées",
    		"isolation": "Variable"
    	},
    	"culture": {
    		"mentality": "Non précisée",
    		"magic": "Présence magique locale attestée par les chapitres"
    	},
    	"defense": {
    		"forces": "Non précisées",
    		"doctrine": "Non précisée"
    	},
    	"role": {
    		"function": "Épreuve de voyage, de lecture du terrain et de cohésion ; le territoire se comporte presque comme un organisme.",
    		"symbol": "Étendue vivante, vaste et imprévisible que le Quattro traverse durant la quête des matériaux."
    	},
    	"full_text": "<h3>Rôle canon</h3><p>Épreuve de voyage, de lecture du terrain et de cohésion ; le territoire se comporte presque comme un organisme.</p>"
    }
};
