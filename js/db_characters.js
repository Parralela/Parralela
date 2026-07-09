const charactersDB = {

	// --- LILY ELOIRANÔR ---
	"lily_eloiranôr": {
		name: "LILY ELOIRANÔR",
		nickname: "Aberration",
		race: "Humaine",
		tier: "main",
		img: "../img/lily2.png",
		imgSafe: "../img/lily1.png", // image "d'avant", montrée tant que la version vieillie n'est pas révélée (mettre imgSince: N pour révéler)

		rank: { letter: "P", level: "Mi" }, // C = Lettre du rang, Ma = Majeur (Or)

		affinities: [
			{ name: "Lumia", sub: "Lune : Luxia", color: "var(--col-lumia)", link: "lumia_luxia.html" },
			{ name: "Umbra", sub: "Lune : Abyssum (Faible)", color: "var(--col-umbra)", link: "umbra_abyssum.html" },
			{ name: "-", sub: "Aucune", color: "", link: null }
		],

		bestia: {
			name: "BUSE",
			desc: "Instinct Aérien : Confère vitesse, acuité visuelle, réflexes accrus et le pressentiment des attaques venant d'en haut.",
			link: "bestia_buse.html"
		},

		unique: {
			name: "ALCYONE",
			type: "Unique • Double Faux",
			desc: "Arme vivante au style dansant, réagissant à la dualité Lumino-Obscure.",
			fullDesc: `
                <div class="detail-group">
                    <span class="detail-label">Capacité Passive : Dualité</span>
                    <p class="content-text">L'arme réagit à l'affinité dominante de l'environnement :</p>
                    <ul class="tech-list">
                        <li style="border-color: var(--col-lumia);"><strong>Pleine Lumière (Luxia) :</strong> Les lames deviennent translucides. Projette des ondes lumineuses perçantes. Améliore la précision, la vitesse et éblouit partiellement les ennemis.</li>
                        <li style="border-color: var(--col-umbra);"><strong>Obscurité (Abyssum) :</strong> Les lames absorbent la lumière. Elles deviennent plus lourdes mais plus puissantes, infligeant des coupures silencieuses difficiles à percevoir.</li>
                        <li style="border-color: #fff;"><strong>Équilibre Parfait :</strong> À la clarté voilée (crépuscule), l'arme devient totalement silencieuse, fluide et quasi intangible.</li>
                    </ul>
                </div>
                <div class="detail-group">
                    <span class="detail-label">Particularités</span>
                    <ul class="tech-list">
                        <li><strong>Lien Spirituel :</strong> L'arme peut agir d'elle-même pour bloquer une attaque si Lily est inconsciente ou distraite.</li>
                        <li><strong>Lévitation :</strong> Grâce au Bestia, l'arme peut léviter partiellement pour des attaques aériennes.</li>
                    </ul>
                </div>
            `
		},

		eveil: {
			name: "CRESCENT FALL",
			type: "Éveil Singuar",
			desc: "« L’Oiseau Éternel »",
			fullDesc: `
                <p class="content-text" style="font-style:italic; margin-bottom:15px; color:#fff;">Fusion céleste de l’âme, de la lumière et de l’instinct.</p>
                <div class="detail-group">
                    <span class="detail-label">Manifestation</span>
                    <p class="content-text">Alcyone se sépare en rotation suspendue autour de Lily. Des ailettes de lumière prismatique se déploient dans son dos (Buse Céleste). Son corps devient éthéré, parcouru de filaments dorés, et ses yeux virent au blanc pur. L'environnement se charge d'un halo doré et silencieux.</p>
                </div>
                <div class="detail-group">
                    <span class="detail-label">Capacités Actives</span>
                    <ul class="tech-list">
                        <li><strong>Vision Céleste Absolue :</strong> Perçoit les intentions, les mouvements et les flux d’énergie (halos émotionnels). Esquives quasi instinctives.</li>
                        <li><strong>Danse "Plumes de Lumen" :</strong> Les deux faux flottent et frappent à distance. Téléportation par éclairs lumineux sur courte distance.</li>
                        <li><strong>Attaque Ultime "Crescent Fall" :</strong> Une descente fulgurante depuis le ciel. Génère un choc de lumière pure. Applique la marque "Blessure du Rapace" qui rend la magie ennemie instable ou bloquée pendant 60 secondes. Une ombre de buse immobilise les fuyards.</li>
                    </ul>
                </div>
                <div class="detail-group">
                    <span class="detail-label" style="color: #e74c3c;">Contreparties & Coûts</span>
                    <ul class="tech-list">
                        <li class="drawback"><strong>Cécité Temporaire :</strong> Brûlure de la vision par saturation lumineuse (quelques heures).</li>
                        <li class="drawback"><strong>Affaiblissement :</strong> Baisse drastique de force, vitesse et réactivité (2 à 3 jours).</li>
                        <li class="drawback"><strong>Rupture Bestia :</strong> L'instinct de la buse se retire, rendant le style de combat plus rigide pendant plusieurs jours.</li>
                    </ul>
                </div>
            `
		},

		lore: "Observatrice, pragmatique et légèrement provocatrice, Lily utilise souvent le sarcasme pour garder une distance émotionnelle. Elle entretient un lien fusionnel avec Nova et se montre très protectrice envers elle. Elle incarne le pivot du récit et détient les clés du passé caché de Parralela, représentant la dualité entre lumière et obscurité.",
		quote: "« Un regard qui voit tout, mais que personne ne regarde. »"
	},

	// --- NOVA ELOIRANÔR ---
	"nova_eloiranôr": {
		name: "NOVA ELOIRANÔR",
		nickname: "Le Jumeau Obscur",
		race: "Humain",
		tier: "main",
		img: "../img/nova1.jpg",

		rank: { letter: "P", level: "Mi" }, // C = Lettre du rang, Ma = Majeur (Or)

		affinities: [
			{ name: "Umbra", sub: "Lune : Abyssum", color: "var(--col-umbra)", link: "umbra.html" },
			{ name: "Lumia", sub: "Lune : Luxia (faible)", color: "var(--col-lumia)", link: "lumia.html" },
			{ name: "-", sub: "Aucune", color: "", link: null }
		],

		bestia: null,

		unique: {
			name: "ÉONIRIS",
			type: "Bouclier rituel + Lame courte d’éclipse",
			desc: "Arme double et vivante, composée d’un bouclier noir-miroir et d’une lame sombre au tranchant inversé.",
			fullDesc: `
                <div class="detail-group">
                    <span class="detail-label">Description</span>
                    <p class="content-text">
                        Bouclier rond noir-miroir orné d'un motif central en spirale (pupille vivante). 
                        Il absorbe lumière, magie et impact, et ne renvoie que ce qu'il accepte.
                        La lame courte et sombre, fine et maniable, possède un tranchant inversé : 
                        elle découpe illusions, liens spirituels et protections internes.
                    </p>
                </div>
                <div class="detail-group">
                    <span class="detail-label">Style de Combat</span>
                    <ul class="tech-list">
                        <li><strong>Défensif instable :</strong> manipulation précise des angles d’impact.</li>
                        <li><strong>Lame mentale :</strong> frappe les failles psychiques avant les failles physiques.</li>
                        <li><strong>Lecture du terrain :</strong> la spirale du bouclier analyse énergie et intentions.</li>
                    </ul>
                </div>
            `
		},

		eveil: {
			name: "ABYSSERA LUX",
			type: "Éveil Singuar",
			desc: "La lumière née de l’abysse",
			fullDesc: `
                <p class="content-text" style="font-style:italic; margin-bottom:15px; color:#fff;">
                    L’Abyssum devient miroir fracturé : lumière inversée, ombres diffractées, perception altérée. Nova marche au centre d’une réalité qui se replie autour de lui.
                </p>
                <div class="detail-group">
                    <span class="detail-label">Manifestation</span>
                    <p class="content-text">
                        Le sol se craquelle comme du verre noir, aspirant la lumière.
                        Un disque d'ombre cerclé de lumière blanche se forme derrière Nova.
                        Le bouclier devient un miroir liquide, la lame brille d'un fil blanc quasi invisible.
                        Une silhouette inversée — un “reflet vivant” — flotte à ses côtés.
                    </p>
                </div>
                <div class="detail-group">
                    <span class="detail-label">Capacités principales</span>
                    <ul class="tech-list">
                        <li><strong>Champ de Disjonction :</strong> altère perception, orientation et conscience des ennemis. Nova voit au contraire plus clairement.</li>
                        <li><strong>Contre-Mémoire :</strong> le bouclier retient une intention adverse et la renvoie sous forme d’écho spectral à travers la lame.</li>
                        <li><strong>Attaque Ultime "Jugement du Reflet Silencieux" :</strong> sphère d’ombre totale enfermant l’ennemi avec une version inversée de lui-même. Permet de sceller magie, affinités ou volonté selon la résistance du cible.</li>
                    </ul>
                </div>
                <div class="detail-group">
                    <span class="detail-label" style="color:#e74c3c;">Contreparties</span>
                    <ul class="tech-list">
                        <li class="drawback"><strong>Perception inversée temporaire :</strong> Nova voit tout en niveaux de gris inversés pendant plusieurs heures.</li>
                        <li class="drawback"><strong>Sourdeur de l’arme :</strong> ÉONIRIS devient inerte pendant quelques jours.</li>
                        <li class="drawback"><strong>Contrecoup émotionnel :</strong> il ressent tout ce que l’adversaire ressent dans le jugement.</li>
                        <li class="drawback"><strong>Risque de dissociation :</strong> usage répété → perte mémoire courte, insensibilité émotionnelle.</li>
                    </ul>
                </div>
                <div class="detail-group">
                    <span class="detail-label">Symbolique</span>
                    <p class="content-text">Nova ne combat pas pour vaincre : il combat pour révéler. L’autre, mais surtout lui-même.</p>
                </div>
            `
		},

		lore: "Gardien calme du récit, détenteur d’une vision plus sombre et introspective. Porte la charge émotionnelle du groupe tout en masquant ses propres failles. Figure essentielle de la dualité lumière/ombre et des futures révélations.",
		quote: "« Ce qui est caché finit toujours par parler, même dans le silence. »"
	},


	"finn_ashford": {
		name: "FINN ASHFORD",
		nickname: "Ash",
		race: "Humain",
		tier: "main",
		img: "../img/finn1.png",

		rank: { letter: "P", level: "Mi" }, // C = Lettre du rang, Ma = Majeur (Or)

		affinities: [
			{ name: "Pyros", sub: "Lune : Ignis", color: "var(--col-pyros)", link: "pyros.html" },
			{ name: "-", sub: "Aucune", color: "", link: null },
			{ name: "-", sub: "Aucune", color: "", link: null }
		],

		bestia: null,

		unique: {
			name: "PURION",
			type: "Gantelets-blasters ignés",
			desc: "Deux gantelets massifs canalisant Ignis, ornés de motifs de braises mouvantes. Chaque impact génère une micro-détonation et augmente leur puissance tant que la chaleur reste contrôlée.",
			fullDesc: `
		<div class="detail-group">
			<span class="detail-label">Description</span>
			<p class="content-text">
				Deux gantelets massifs couplés à des canaux à haute pression thermique. 
				Leur surface rouge sombre est parcourue de motifs de braises mobiles. 
				Chaque coup génère une micro-détonation, amplifiant la puissance de Finn au fil du combat.
			</p>
		</div>

		<div class="detail-group">
			<span class="detail-label">Style de Combat</span>
			<ul class="tech-list">
				<li><strong>Impact Explosif :</strong> chaque frappe libère chaleur, souffle et pression.</li>
				<li><strong>Mobilité Ardente :</strong> Pirouettes, sauts, propulsion au sol ou en l’air.</li>
				<li><strong>Surchauffe contrôlée :</strong> plus la température grimpe, plus PURION devient rapide et destructeur.</li>
			</ul>
		</div>

					`
		},

		eveil: {
			name: "SOLBURN CLIMAX",
			type: "Éveil Singuar",
			desc: "Le point de rupture",
			fullDesc: `
		<p class="content-text" style="font-style:italic; margin-bottom:15px; color:#fff;">
			L’atmosphère devient rouge ardent : la chaleur d’Ignis se libère sans filtre. 
			Finn n’avance plus, il déferle.
		</p>

		<div class="detail-group">
			<span class="detail-label">Manifestation</span>
			<p class="content-text">
				Des marques incandescentes apparaissent sur son corps. 
				Ses gantelets se fissurent et révèlent un noyau de feu blanc. 
				Chaque pas laisse une trace fumante et l’air vibre autour de lui comme au cœur d’un volcan.
			</p>
		</div>

		<div class="detail-group">
			<span class="detail-label">Capacités principales</span>
			<ul class="tech-list">
				<li><strong>Ignition Pulse :</strong> onde explosive à chaque mouvement, créant un champ de souffle autour de Finn.</li>
				<li><strong>Ash Drive :</strong> propulsion fulgurante en ligne droite ou diagonale, permettant de rebondir ou d’annuler une chute.</li>
				<li><strong>Attaque Ultime "Flare Nova Fist" :</strong> explosion solaire contrôlée concentrée dans un unique coup destructeur.</li>
			</ul>
		</div>

		<div class="detail-group">
			<span class="detail-label" style="color:#e74c3c;">Contreparties</span>
			<ul class="tech-list">
				<li class="drawback"><strong>Surchauffe interne :</strong> épuisement sévère et douleurs musculaires.</li>
				<li class="drawback"><strong>Surcharge nerveuse :</strong> tremblements et perte de précision pendant 1 à 2 jours.</li>
				<li class="drawback"><strong>Instabilité de PURION :</strong> les gantelets restent inutilisables plusieurs heures.</li>
			</ul>
		</div>

		<div class="detail-group">
			<span class="detail-label">Symbolique</span>
			<p class="content-text">
				Finn n’est pas fait pour contenir son feu. 
				Son Éveil est l’acceptation totale de ce qu’il est : force brute, joie et explosion pour protéger.
			</p>
		</div>

					`
		},

		lore: "Fonceur, bruyant et loyal, Finn agit comme moteur émotionnel du groupe. Son impulsivité cache un instinct de combattant exceptionnel et une profonde envie de protéger ses proches. Il évolue progressivement vers un rôle de stratège explosif.",
		quote: "« J’suis pas né pour faire dans la finesse. Mais t’inquiète : je vise jamais à côté. »"
	},


	"galen_eloiranôr": {
		name: "Galen Eloiranôr",
		nickname: "La Binouse ",
		race: "Humain",
		tier: "secondary",
		img: "../img/galen1.png",

		rank: { letter: "P", level: "Ma" }, // C = Lettre du rang, Ma = Majeur (Or)

		affinities: [
			{ name: "Verdania", sub: "Lune : Radicis", color: "var(--col-verdania)", link: "verdania.html" },
			{ name: "-", sub: "Aucune", color: "", link: null },
			{ name: "-", sub: "Aucune", color: "", link: null }
		],

		bestia: null,

		unique: {
			name: "Brasse-Terre",
			type: "Masse-arbre vivante",
			desc: "Masse colossale composée d’un tronc noueux et d’une souche vivante, parcourue de racines capables d’attaquer ou de bloquer. L’arme respire et ronronne faiblement lorsqu’elle est contente.",
			fullDesc: `
		<div class="detail-group">
			<span class="detail-label">Description</span>
			<p class="content-text">
				Une masse végétale gigantesque : manche en tronc noueux, tête sculptée dans une souche vivante couverte de racines mobiles. 
				Des racines émergent du sol pour accompagner les frappes, ériger des défenses ou immobiliser des ennemis. 
				Brasse-Terre émet parfois un ronronnement de sève lorsqu’elle est en harmonie avec Galen.
			</p>
		</div>

		<div class="detail-group">
			<span class="detail-label">Style de Combat</span>
			<ul class="tech-list">
				<li><strong>Force brute :</strong> frappes larges, chocs de zone, domination physique.</li>
				<li><strong>Contrôle du terrain :</strong> racines jaillissantes, murs naturels, pièges vivants.</li>
				<li><strong>Défense enracinée :</strong> posture immobile mais inébranlable.</li>
			</ul>
		</div>

					`
		},

		eveil: {
			name: "Chêne de Fer Sacré",
			type: "Éveil Singuar",
			desc: "Incarnation de la patience, de la force et de la joie enracinée.",
			fullDesc: `
		<p class="content-text" style="font-style:italic; margin-bottom:15px; color:#fff;">
			La terre s’ouvre pour lui, et la sève sacrée répond à son rire.
		</p>

		<div class="detail-group">
			<span class="detail-label">Manifestation</span>
			<p class="content-text">
				Il frappe son torse et le sol se fissure en spirales de racines géantes. 
				Son dos se couvre de lignes de sève lumineuse, ses bras d’écorce renforcée. 
				Quelques fleurs poussent dans ses cheveux et sur Brasse-Terre.
			</p>
		</div>

		<div class="detail-group">
			<span class="detail-label">Capacités principales</span>
			<ul class="tech-list">
				<li><strong>Étreinte de la Terre :</strong> racines massives enfermant et écrasant les ennemis, zone contrôlée par ses réflexes.</li>
				<li><strong>Ressort Vivant :</strong> plus il encaisse, plus il devient vigoureux ; peut se soigner en restant enraciné.</li>
				<li><strong>Attaque Ultime "Festin de la Sève" :</strong> une main végétale jaillit du sol, absorbe l’énergie ennemie et laisse place à une fleur géante.
				</li>
			</ul>
		</div>

		<div class="detail-group">
			<span class="detail-label" style="color:#e74c3c;">Contreparties</span>
			<ul class="tech-list">
				<li class="drawback"><strong>Engourdissement complet :</strong> corps lourd et lent pendant plusieurs heures.</li>
				<li class="drawback"><strong>Ancrage forcé :</strong> besoin de rester en contact avec la terre pendant 1 à 2 jours.</li>
				<li class="drawback"><strong>Masse figée :</strong> Brasse-Terre refuse d’être utilisée tant que Galen n’a pas retrouvé calme et humour.</li>
				<li class="drawback"><strong>Terrain stérilisé :</strong> les racines sacrifiées meurent après usage.</li>
			</ul>
		</div>

		<div class="detail-group">
			<span class="detail-label">Symbolique</span>
			<p class="content-text">
				Galen ne pousse pas vite, mais il pousse droit. 
				Sa force est un sourire enraciné dans la terre elle-même.
			</p>
		</div>

					`
		},

		lore: "Bon vivant, blagueur et sportif, Galen est un ancien aventurier aussi chaleureux que puissant. Sa présence apporte stabilité, humour et humanité au récit, particulièrement dans les scènes familiales et les décisions importantes. Il dissimule une sensibilité profonde derrière son humour.",
		quote: "« Tout finit par pousser, même quand on a la tête dans la terre. »"
	},


	"lyrielle_eloiranôr": {
		name: "Lyrielle Eloiranôr",
		nickname: "La Dame des Silences",
		race: "Humaine",
		tier: "secondary",
		img: "../img/lyrielle1.png",

		rank: { letter: "E", level: "N" }, // C = Lettre du rang, Ma = Majeur (Or)

		affinities: [
			{ name: "Aquaria ", sub: "Lune : Glacius", color: "var(--col-aquaria)", link: "aquaria.html" },
			{ name: "Aeris", sub: "Lune : Stratos", color: "var(--col-aeris)", link: "aeris.html" },
			{ name: "-", sub: "Aucune", color: "", link: null }
		],

		bestia: {
			name: "Hermine",
			desc: "Agilité fluide, furtivité naturelle, endurance froide. Très peu d’altérations physiques visibles.",
			link: "bestia_hermine.html"
		},

		unique: {
			name: "Brume-Miroir",
			type: "Éventail-lame à doubles voiles",
			desc: "Arme hybride entre éventail et lames courbes, dotée de voiles semi-transparents réactifs au vent et au froid. Idéale pour la dissimulation, les lames d’air et le contrôle de terrain.",
			fullDesc: `
		<div class="detail-group">
			<span class="detail-label">Description</span>
			<p class="content-text">
				Un éventail-lame composé de deux voiles semi-transparents reliés à des lames courbes fines. 
				Le tissu réagit au vent et au froid, permettant de créer des lames d’air ou des voiles de givre. 
				La danse de combat de Lyrielle est fluide, presque chorégraphiée, mais redoutablement précise.
			</p>
		</div>

		<div class="detail-group">
			<span class="detail-label">Style de Combat</span>
			<ul class="tech-list">
				<li><strong>Dissimulation glacée :</strong> mouvements peu lisibles, voiles qui masquent brièvement sa silhouette.</li>
				<li><strong>Lames d’air :</strong> attaques rapides et presque silencieuses.</li>
				<li><strong>Contrôle de terrain :</strong> givre, vents dirigés, pièges aériens.</li>
			</ul>
		</div>

					`
		},

		eveil: {
			name: "Vent de Verre Éternel",
			type: "Éveil Singuar",
			desc: "Une tempête figée dans le temps, où l’air tranche et le froid suspend.",
			fullDesc: `
		<p class="content-text" style="font-style:italic; margin-bottom:15px; color:#fff;">
			Dans son Éveil, même la tempête retient son souffle.
		</p>

		<div class="detail-group">
			<span class="detail-label">Manifestation</span>
			<p class="content-text">
				L’air autour d’elle devient immobile. 
				Des éclats de glace flottent en suspension dans un vent figé. 
				Les voiles de Brume-Miroir s’allongent en rubans cristallisés, et sa silhouette se brouille légèrement.
			</p>
		</div>

		<div class="detail-group">
			<span class="detail-label">Capacités principales</span>
			<ul class="tech-list">
				<li><strong>Halo de Verre :</strong> dôme de givre et d’air figé ralentissant les ennemis et déviant les projectiles.</li>
				<li><strong>Lacération Aérienne :</strong> lames de vent glacé tranchant surfaces et mouvements, engourdissant immédiatement.</li>
				<li><strong>Attaque Ultime "Silence Astral" :</strong> sphère de vide et de givre annulant bruit, mouvement et magie avant un coup supersonique gelant tout sur son passage.</li>
			</ul>
		</div>

		<div class="detail-group">
			<span class="detail-label" style="color:#e74c3c;">Contreparties</span>
			<ul class="tech-list">
				<li class="drawback"><strong>Perte de sensation thermique :</strong> vulnérable au froid et au chaud pendant plusieurs heures.</li>
				<li class="drawback"><strong>Désynchronisation élémentaire :</strong> impossible de manipuler air ou eau pendant 2 à 3 jours.</li>
				<li class="drawback"><strong>Détachement mental :</strong> nécessite un ancrage émotionnel pour revenir à elle.</li>
				<li class="drawback"><strong>Risque de pertes de mémoire :</strong> usage répété entraîne oublis immédiats.</li>
			</ul>
		</div>

		<div class="detail-group">
			<span class="detail-label">Symbolique</span>
			<p class="content-text">
				Lyrielle n’écrase jamais. Elle apaise. Même la tempête, entre ses mains, devient un silence.
			</p>
		</div>

					`
		},

		lore: "Douce, attentive et sereine, Lyrielle est une ancienne aventurière à la sagesse tranquille. Figure maternelle du foyer, elle apporte paix, soins et clarté dans les moments difficiles. Très liée à sa famille, elle est le centre émotionnel de la maison Eloiranôr.",
		quote: "« Le calme n’est pas l’absence de vent. C’est la certitude qu’il reviendra. »"
	},


	"marie_ashford": {
		name: "Marie Ashford",
		nickname: "Bang Mother",
		race: "Humaine",
		tier: "secondary",
		img: "../img/marie1.png",

		rank: { letter: "E", level: "Mi" }, // C = Lettre du rang, Ma = Majeur (Or)

		affinities: [
			{ name: "Pyros", sub: "Lune : Ignis", color: "var(--col-pyros)", link: "pyros.html" },
			{ name: "Pyros", sub: "Lune : Vulcan", color: "var(--col-pyros)", link: "pyros.html" },
			{ name: "-", sub: "Aucune", color: "", link: null }
		],

		bestia: null,

		unique: {
			name: "Speralis",
			type: "Lance volcanique à hampe sombre",
			desc: "Lance massive parcourue de veines incandescentes. Sa pointe peut s’embraser ou se recouvrir de lave. Conçue pour des frappes explosives ou magmatiques à mi-distance.",
			fullDesc: `
		<div class="detail-group">
			<span class="detail-label">Description</span>
			<p class="content-text">
				Une lance à hampe sombre parcourue de veines incandescentes semblables à de la roche volcanique fissurée. 
				Sa pointe, forgée avec des cristaux de feu, peut s’embraser ou se couvrir de lave en fusion. 
				Chaque coup canalise Ignis pour des explosions soudaines ou Vulcan pour des projections de magma.
			</p>
		</div>

		<div class="detail-group">
			<span class="detail-label">Style de Combat</span>
			<ul class="tech-list">
				<li><strong>Puissance à mi-distance :</strong> charges, percées, lignes de feu.</li>
				<li><strong>Feu contrôlé :</strong> explosions précises malgré leur violence.</li>
				<li><strong>Zone volcanique :</strong> magma, braises et éclats brûlants à chaque impact.</li>
			</ul>
		</div>

					`
		},

		eveil: {
			name: "Cataclysme de l’Aube Ardente",
			type: "Éveil Singuar",
			desc: "Quand la terre s’ouvre et que le ciel s’embrase.",
			fullDesc: `
		<p class="content-text" style="font-style:italic; margin-bottom:15px; color:#fff;">
			Une aurore de flammes, assez vive pour ébranler les montagnes.
		</p>

		<div class="detail-group">
			<span class="detail-label">Manifestation</span>
			<p class="content-text">
				L’air devient suffocant et le sol se craquelle sous ses pas, laissant jaillir du magma. 
				Speralis s’embrase d’une lumière dorée et écarlate, envoyant des étincelles dansantes. 
				Marie semble auréolée d’un halo flamboyant, comme si elle portait une aube ardente sur ses épaules.
			</p>
		</div>

		<div class="detail-group">
			<span class="detail-label">Capacités principales</span>
			<ul class="tech-list">
				<li><strong>Mur de Braises :</strong> rempart de feu et de lave protégeant les alliés et brûlant les assaillants.</li>

				<li><strong>Percée Volcanique :</strong> charge fulgurante ; la pointe explose en flammes et roches en fusion à l’impact.</li>

				<li><strong>Attaque Ultime "Aube Cataclysmique" :</strong> tornade de magma et explosion solaire, engloutissant la zone dans une lumière incandescente.</li>
			</ul>
		</div>

		<div class="detail-group">
			<span class="detail-label" style="color:#e74c3c;">Contreparties</span>
			<ul class="tech-list">
				<li class="drawback"><strong>Surchauffe extrême :</strong> fièvre, déshydratation, tremblements.</li>
				<li class="drawback"><strong>Insensibilité à la douleur :</strong> risque d’aggraver des blessures sans le sentir.</li>
				<li class="drawback"><strong>Mana instable :</strong> vulnérable émotionnellement pendant plusieurs jours.</li>
				<li class="drawback"><strong>Fissures corporelles :</strong> risque si usage trop rapproché.</li>
			</ul>
		</div>

		<div class="detail-group">
			<span class="detail-label">Symbolique</span>
			<p class="content-text">
				Marie ne retient pas les flammes : elle les guide. 
				Son feu n’est pas destruction — c’est une aurore qui protège.
			</p>
		</div>

					`
		},

		lore: "Énergique, franche et passionnée, Marie maîtrise deux aspects du feu : l’explosion et le magma. Protectrice et autoritaire mais juste, elle représente la transmission Ashford et sert de modèle (ou mise en garde) pour Finn.",
		quote: "« Le feu, c’est simple : soit tu le guides, soit il te consume. »"
	},


	"???": {
		name: "???? ?????????",
		nickname: "",
		race: "",
		tier: "main",
		img: "",

		rank: { letter: "C", level: "Ma", specialPath: "../svg/Cimes/I.svg", rankClass: "rank-cime-1" }, // C = Lettre du rang, Ma = Majeur (Or)

		affinities: [
			{ name: "-", sub: "Aucune", color: "", link: null },
			{ name: "-", sub: "Aucune", color: "", link: null },
			{ name: "-", sub: "Aucune", color: "", link: null }
		],

		bestia: null,

		unique: null,

		eveil: null,

		lore: "T'es seulement à l'étape une...",
		quote: "« Enfin. »"
	},

	"Test": {
		name: "Test",
		nickname: "",
		race: "",
		img: "",

		rank: { specialPath: "../svg/Cimes/VII.svg", rankClass: "rank-cime-7" }, // C = Lettre du rang, Ma = Majeur (Or)

		affinities: [
			{ name: "-", sub: "Aucune", color: "", link: null },
			{ name: "-", sub: "Aucune", color: "", link: null },
			{ name: "-", sub: "Aucune", color: "", link: null }
		],

		bestia: null,

		unique: null,

		eveil: null,

		lore: "",
		quote: ""
	},


	"darrun_stoneward": {
		name: "Darrun Stoneward",
		nickname: "Le Rempart des Vôles",
		race: "Humain",
		tier: "secondary",
		img: "../img/darrun1.jpg",

		rank: { letter: "E", level: "Ma" }, // C = Lettre du rang, Ma = Majeur (Or)

		affinities: [
			{ name: "Terra", sub: "Lune : Golem", color: "var(--col-terra)", link: "terra.html" },
			{ name: "-", sub: "Aucune", color: "", link: null },
			{ name: "-", sub: "Aucune", color: "", link: null }
		],

		bestia: {
			name: "Ours",
			desc: "Force colossale, endurance extrême, instincts protecteurs puissants.",
			link: "bestia_ours.html"
		},

		unique: {
			name: "Terrabastion",
			type: "Bouclier colossal minéral",
			desc: "Bouclier rectangulaire gigantesque composé de plaques minérales superposées. Peut s’ancrer au sol pour arrêter des charges et absorber les impacts.",
			fullDesc: `
		<div class="detail-group">
			<span class="detail-label">Description</span>
			<p class="content-text">
				Bouclier massif formé de strates minérales superposées, aussi haut que Darrun. 
				Un cercle runique en spirale au centre pulse comme un cœur de pierre. 
				Terrabastion peut s’ancrer dans le sol ou se réarranger selon l’état magique de Darrun.
			</p>
		</div>

		<div class="detail-group">
			<span class="detail-label">Particularités</span>
			<ul class="tech-list">
				<li>Se densifie lorsque Darrun protège un allié.</li>
				<li>Peut absorber et neutraliser des impacts énormes.</li>
				<li>Permet des charges de bélier d’une puissance sismique.</li>
			</ul>
		</div>

					`
		},

		eveil: {
			name: "URSORUM TECTON",
			type: "Éveil Singuar",
			desc: "Le Rempart Vivant",
			fullDesc: `
		<p class="content-text" style="font-style:italic; margin-bottom:15px; color:#fff;">
			Quand la terre se lève, Darrun devient un mur vivant.
		</p>

		<div class="detail-group">
			<span class="detail-label">Manifestation</span>
			<p class="content-text">
				La terre se soulève autour de lui. 
				Une armure de roche vivante fusionne avec sa peau. 
				Terrabastion grandit jusqu’à devenir monumental. 
				Une silhouette spectrale d’ours apparaît derrière lui.
			</p>
		</div>

		<div class="detail-group">
			<span class="detail-label">Capacités principales</span>
			<ul class="tech-list">
				<li><strong>Carapace Tectonique :</strong> défense absolue, régénération minérale.</li>
				<li><strong>Âme de l’Ours Gardien :</strong> force colossale, protection instinctive de ses alliés.</li>
				<li><strong>Bastion Totem :</strong> champ de stabilité repoussant les ennemis et réduisant les dégâts subis par les alliés.</li>
				<li><strong>Attaque Ultime "L’Ours des Profondeurs" :</strong> charge sismique provoquant onde tectonique et pétrification partielle.</li>
			</ul>
		</div>

		<div class="detail-group">
			<span class="detail-label" style="color:#e74c3c;">Contreparties</span>
			<ul class="tech-list">
				<li class="drawback"><strong>Effondrement physique :</strong> son corps devient trop lourd pour bouger pendant plusieurs heures.</li>
				<li class="drawback"><strong>Lenteur mentale :</strong> son esprit reste ancré dans la terre, difficulté à retrouver sa vivacité.</li>
				<li class="drawback"><strong>Faim excessive :</strong> le Bestia-Ours vide ses réserves, nécessitant des repas colossaux.</li>
				<li class="drawback"><strong>Rigidification partielle :</strong> risque de zones du corps temporairement minéralisées.</li>
			</ul>
		</div>

					`
		},

		lore: "Jovial, rassurant et toujours prêt à détendre l’atmosphère, Darrun est le pilier défensif du groupe. Sa bonne humeur cache un sens profond du devoir et de la protection.",
		quote: "« Je tiens bon. Toujours. »"
	},


	"hendor_veynar": {
		name: "Hendor Veynar",
		nickname: "L’Œil du Courant",
		race: "Humain",
		tier: "secondary",
		img: "../img/hendor1.jpg",

		rank: { letter: "C", level: "Mi" }, // C = Lettre du rang, Ma = Majeur (Or)

		affinities: [
			{ name: "Aeris", sub: "Lune : Stratos", color: "var(--col-aeris)", link: "aeris.html" },
			{ name: "Aeris", sub: "Lune : Zephyria", color: "var(--col-aeris)", link: "aeris.html" },
			{ name: "Lumia", sub: "Lune : Luxia", color: "var(--col-lumia)", link: "lumia.html" }
		],

		bestia: null,

		unique: {
			name: "Aérolithe",
			type: "Épée longue prismatique",
			desc: "Lame translucide formée de vent condensé et de lumière réfractée. Sa trajectoire se dédouble en illusions et en reflets impossibles à lire, surtout lorsqu’Hendor accélère.",
			fullDesc: `
		<div class="detail-group">
			<span class="detail-label">Description</span>
			<p class="content-text">
				Une épée prismatique composée de vent condensé et de lumière réfractée. 
				Sa lame projette des scintillements multiples, donnant l’illusion d’une dizaine de lames. 
				Sous Stratos, la lame s’allonge en onde de vent, permettant de frapper à distance.
			</p>
		</div>

		<div class="detail-group">
			<span class="detail-label">Style de Combat</span>
			<ul class="tech-list">
				<li><strong>Précision tactique :</strong> lecture parfaite des trajectoires.</li>
				<li><strong>Illusions de Luxia :</strong> dédoublements et mirages d’attaque.</li>
				<li><strong>Contrôle aérien :</strong> mouvements rapides, horizontaux et lévitants.</li>
			</ul>
		</div>

					`
		},

		eveil: {
			name: "Auralith Ascendant",
			type: "Éveil Singuar",
			desc: "Le Cœur du Vent",
			fullDesc: `
		<p class="content-text" style="font-style:italic; margin-bottom:15px; color:#fff;">
			Quand Hendor s’élève, le vent retient son souffle.
		</p>

		<div class="detail-group">
			<span class="detail-label">Manifestation</span>
			<p class="content-text">
				Le vent devient silencieux autour de lui. 
				Aérolithe se fragmente en douze lames de lumière formant un cercle prismatique. 
				Une silhouette-mirage d’Hendor flotte derrière lui. 
				Ses yeux prennent une teinte bleu-argent vibrante.
			</p>
		</div>

		<div class="detail-group">
			<span class="detail-label">Capacités principales</span>
			<ul class="tech-list">
				<li><strong>Stratos Visionnaire :</strong> lecture totale de l’espace et anticipation des mouvements.</li>
				<li><strong>Zephyria Fantôme :</strong> silence absolu, déplacements invisibles, coups créant des vides d’air.</li>
				<li><strong>Lumière Dédoublée :</strong> reflets tangibles et attaques depuis plusieurs angles.</li>
				<li><strong>Attaque Ultime "Halo-Impact" :</strong> frappe verticale amplifiée, dissipant illusions et stabilisations magiques.</li>
			</ul>
		</div>

		<div class="detail-group">
			<span class="detail-label" style="color:#e74c3c;">Contreparties</span>
			<ul class="tech-list">
				<li class="drawback"><strong>Sens hypersaturés :</strong> lumière et son difficiles à supporter.</li>
				<li class="drawback"><strong>Vertiges :</strong> pression aérienne mal rééquilibrée.</li>
				<li class="drawback"><strong>Baisse d’analyse :</strong> perte temporaire de clairvoyance tactique.</li>
				<li class="drawback"><strong>Manque d’air :</strong> risque d’hypoxie si la lame se fragmente trop longtemps.</li>
			</ul>
		</div>

					`
		},

		lore: "Stratège calme et méthodique, Hendor analyse toujours deux coups à l’avance. Ses affinités lui donnent contrôle de l’air, du son et de la lumière, faisant de lui un combattant aussi imprévisible que précis.",
		quote: "« Le vent voit avant nous. »"
	},


	"elsera_valmorin": {
		name: "Elsera Valmorin",
		nickname: "Le Cœur Inflexible",
		race: "Humaine",
		tier: "secondary",
		img: "../img/elsera1.jpg",

		rank: { letter: "E", level: "N" }, // C = Lettre du rang, Ma = Majeur (Or)

		affinities: [
			{ name: "Verdania", sub: "Lune : Floralis", color: "var(--col-verdania)", link: "verdania.html" },
			{ name: "Fulgora", sub: "Lune : Electra", color: "var(--col-fulgora)", link: "fulgora.html" },
			{ name: "-", sub: "Aucune", color: "", link: null }
		],

		bestia: null,

		unique: {
			name: "Couronne de Vitalis",
			type: "Halo vivant floralo-magnétique",
			desc: "Un halo de pétales lumineux et d’anneaux métalliques en lévitation, capable de soigner, protéger et détourner les projectiles.",
			fullDesc: `
		<div class="detail-group">
			<span class="detail-label">Description</span>
			<p class="content-text">
				Un halo vivant composé de pétales lumineux, filaments floraux et anneaux métalliques orbitant autour d’elle. 
				Les pétales oscillent comme suspendus dans le vent, tandis que les anneaux modulant un champ magnétique doux mais inflexible. 
				La Couronne s’intensifie selon le degré de protection qu’Elsera veut offrir.
			</p>
		</div>

		<div class="detail-group">
			<span class="detail-label">Style de Combat</span>
			<ul class="tech-list">
				<li><strong>Défense active :</strong> déviation instantanée des projectiles.</li>
				<li><strong>Soutien vital :</strong> amplification des soins et de la régénération.</li>
				<li><strong>Protection maternelle :</strong> champ magnétique renforcé autour des alliés.</li>
			</ul>
		</div>

					`
		},

		eveil: {
			name: "Vitae Sanctum",
			type: "Éveil Singuar",
			desc: "Le Sanctuaire Vivant",
			fullDesc: `
		<p class="content-text" style="font-style:italic; margin-bottom:15px; color:#fff;">
			Son Éveil transforme l’air en refuge, et chaque souffle devient guérison.
		</p>

		<div class="detail-group">
			<span class="detail-label">Manifestation</span>
			<p class="content-text">
				La Couronne se déploie comme une auréole complète. 
				Un nuage de pollen doré illumine l’air, tandis que des herbes luminescentes s’élèvent et s’enroulent autour de ses jambes. 
				Ses yeux deviennent émeraude brillant et un mandala floral se forme dans son dos.
			</p>
		</div>

		<div class="detail-group">
			<span class="detail-label">Capacités principales</span>
			<ul class="tech-list">
				<li><strong>Sanctuaire Floralis :</strong> zone régénérante où blessures, douleurs et fatigue se dissipent.</li>

				<li><strong>Champ Magnétique Maternel :</strong> anneaux protecteurs déviant projectiles et verrouillant armes métalliques.</li>

				<li><strong>Renaissance – "Fleurs de Second Souffle" :</strong> soin accéléré purifiant poisons et corruptions.</li>

				<li><strong>Attaque Ultime "Rosa Magna" :</strong> onde florale protectrice pour les alliés, lianes électroflorales entravant les ennemis.</li>
			</ul>
		</div>

		<div class="detail-group">
			<span class="detail-label" style="color:#e74c3c;">Contreparties</span>
			<ul class="tech-list">
				<li class="drawback"><strong>Sacrifice vital :</strong> chaque soin puissant la nourrit en énergie mais l’épuise.</li>
				<li class="drawback"><strong>Épuisement profond :</strong> risque de syncope après l’Éveil.</li>
				<li class="drawback"><strong>Empathie extrême :</strong> ressent la douleur émotionnelle et physique des alliés.</li>
				<li class="drawback"><strong>Transe florale :</strong> état semi-conscient la protégeant mais la rendant immobile.</li>
			</ul>
		</div>

					`
		},

		lore: "Figure maternelle du groupe originel, Elsera est douce, apaisante et protectrice. Sa magie florale et magnétique en fait un soutien vital capable de défendre aussi efficacement qu’elle soigne.",
		quote: "« Je veille. Toujours. »"
	},


	"theo_varrow": {
		name: "Théo Varrow",
		nickname: "Le Tranchant Silencieux",
		race: "Humain",
		tier: "secondary",
		img: "../img/theo1.jpg",

		rank: { letter: "C", level: "Mi" }, // C = Lettre du rang, Ma = Majeur (Or)

		affinities: [
			{ name: "Umbra", sub: "Lune : Noctis", color: "var(--col-umbra)", link: "umbra.html" },
			{ name: "-", sub: "Aucune", color: "", link: null },
			{ name: "-", sub: "Aucune", color: "", link: null }
		],

		bestia: null,

		unique: {
			name: "NullBlade",
			type: "Lame métamorphique d’ombre condensée",
			desc: "Lame noire semi-matérielle qui change de forme selon l’intention : dague, fil, pointe, mini-épée. Silence, précision et imprévisibilité absolue.",
			fullDesc: `
		<div class="detail-group">
			<span class="detail-label">Description</span>
			<p class="content-text">
				Une lame d’ombre condensée, noire et semi-matérielle, dont la forme varie en continu selon l’intention de Théo. 
				Légère, silencieuse, indestructible, elle se déstructure puis se reforme instantanément.
			</p>
		</div>

		<div class="detail-group">
			<span class="detail-label">Style de Combat</span>
			<ul class="tech-list">
				<li><strong>Silence total :</strong> mouvements invisibles et inaudibles.</li>
				<li><strong>Précision létale :</strong> frappes chirurgicales, sans puissance brute.</li>
				<li><strong>Illusions d’ombre :</strong> trajectoires impossibles à anticiper.</li>
			</ul>
		</div>

					`
		},

		eveil: {
			name: "Umbra Silentium",
			type: "Éveil Singuar",
			desc: "La Lame de l’Ombre Vivante",
			fullDesc: `
		<p class="content-text" style="font-style:italic; margin-bottom:15px; color:#fff;">
			Il ne frappe pas plus fort. Il frappe sans exister.
		</p>

		<div class="detail-group">
			<span class="detail-label">Manifestation</span>
			<p class="content-text">
				Son ombre se détache du sol et pulse comme une marée noire. 
				Son corps devient mat et sans reflet. 
				Nullblade se divise : une version dans sa main, une autre flottante. 
				La lumière disparaît autour de lui et l’air se tait.
			</p>
		</div>

		<div class="detail-group">
			<span class="detail-label">Capacités principales</span>
			<ul class="tech-list">
				<li><strong>Silence Terminal :</strong> dissimulation parfaite sensorielle et magique.</li>

				<li><strong>Nullblade Gemina :</strong> seconde lame autonome attaquant les angles morts.</li>

				<li><strong>Éclipse Mentale :</strong> illusions d’ombres simulant les futurs immédiats des ennemis.</li>

				<li><strong>Dénouement – "Fil de Nuit" :</strong> fil noir coupant la continuité magique.</li>

				<li><strong>Attaque Ultime "Chute du Voile" :</strong> rideau d’ombre isolant la cible, rupture mentale par frappe sur l’ombre.</li>
			</ul>
		</div>

		<div class="detail-group">
			<span class="detail-label" style="color:#e74c3c;">Contreparties</span>
			<ul class="tech-list">
				<li class="drawback"><strong>Épuisement nerveux :</strong> surcharge mentale sévère.</li>
				<li class="drawback"><strong>Pertes sensorielles :</strong> ouïe et vision altérées.</li>
				<li class="drawback"><strong>Affaiblissement physique :</strong> muscles mous et engourdis.</li>
				<li class="drawback"><strong>Sommeil forcé :</strong> risque d’évanouissement glaçant.</li>
			</ul>
		</div>

					`
		},

		lore: "Silencieux et calculateur, Théo maîtrise Noctis avec une précision terrifiante. Il ne tue jamais par plaisir mais par nécessité, animé par une loyauté profonde et un respect strict de la vie.",
		quote: "« Je frappe où l’ombre passe. »"
	},


	"zeyra_korran": {
		name: "Zeyra Korran",
		nickname: "L’Air qui Meurt",
		race: "Humaine",
		tier: "secondary",
		img: "../img/zeyra1.jpg",

		rank: { letter: "E", level: "Mi" }, // C = Lettre du rang, Ma = Majeur (Or)

		affinities: [
			{ name: "Pyros", sub: "Lune : Fumar", color: "var(--col-pyros)", link: "pyros.html" },
			{ name: "-", sub: "Aucune", color: "", link: null },
			{ name: "-", sub: "Aucune", color: "", link: null }
		],

		bestia: null,

		unique: {
			name: "FumaStride",
			type: "Botte fumigène à chambre pyrique",
			desc: "Une botte d’armure sombre contenant une chambre interne où Zeyra compresse fumée, cendres et gaz brûlants, libérés à chaque impact.",
			fullDesc: `
		<div class="detail-group">
			<span class="detail-label">Description</span>
			<p class="content-text">
				Botte asymétrique en métal sombre, renfermant une chambre pyrique où Zeyra compresse fumée, cendres et gaz brûlants. 
				Chaque impact du pied libère un nuage dense contrôlé par sa volonté. 
				La fumée devient vivante autour d’elle, guidée par son intention.
			</p>
		</div>

		<div class="detail-group">
			<span class="detail-label">Style de Combat</span>
			<ul class="tech-list">
				<li><strong>Pression thermique :</strong> air brûlant, suffocation progressive.</li>
				<li><strong>Saturation du champ visuel :</strong> fumée épaisse coupant les perceptions.</li>
				<li><strong>Mobilité chaotique :</strong> déplacements glissés dans un brouillard qu’elle seule comprend.</li>
			</ul>
		</div>

					`
		},

		eveil: {
			name: "Fumar Obscurantis",
			type: "Éveil Singuar",
			desc: "La Fumée Vivante",
			fullDesc: `
		<p class="content-text" style="font-style:italic; margin-bottom:15px; color:#fff;">
			La fumée respire pour elle — et étouffe le reste.
		</p>

		<div class="detail-group">
			<span class="detail-label">Manifestation</span>
			<p class="content-text">
				Le sol exhale une fumée sombre. 
				L’air devient lourd et suffocant. 
				FumaStride s’ouvre en micro-fentes rouges. 
				Une nappe de fumée dense engloutit son corps, ses yeux brillent d’un rouge tamisé.
			</p>
		</div>

		<div class="detail-group">
			<span class="detail-label">Capacités principales</span>
			<ul class="tech-list">
				<li><strong>Voile Mortifère :</strong> fumée chaude et abrasive, absorbant lumière et son.</li>

				<li><strong>Spirale Fumar :</strong> montée thermique oppressante étouffant sorts et respiration.</li>

				<li><strong>Souffle Noctueux :</strong> cendre animée immobilisant ou désorientant.</li>

				<li><strong>FumaStride Ascendante :</strong> déplacements silencieux et insaisissables dans le brouillard.</li>

				<li><strong>Attaque Ultime "Chambre Cendrée" :</strong> sphère de fumée dense privant d’air, de lumière et de repères avant une frappe unique.</li>
			</ul>
		</div>

		<div class="detail-group">
			<span class="detail-label" style="color:#e74c3c;">Contreparties</span>
			<ul class="tech-list">
				<li class="drawback"><strong>Irritation interne :</strong> brûlure des voies respiratoires.</li>
				<li class="drawback"><strong>Déshydratation :</strong> la chaleur assèche son corps.</li>
				<li class="drawback"><strong>Vertiges :</strong> excès de fumée autour du crâne.</li>
				<li class="drawback"><strong>Voix altérée :</strong> extinction temporaire.</li>
				<li class="drawback"><strong>Tremblements :</strong> chaleur accumulée dans les muscles.</li>
				<li class="drawback"><strong>Fragilité de FumaStride :</strong> nécessite réharmonisation sous peine de fissures.</li>
			</ul>
		</div>

					`
		},

		lore: "Spontanée et imprévisible, Zeyra agit avant de réfléchir. Sa fumée est aussi chaotique qu’elle, mais son intuition la rend redoutable. Tantôt désastreuse, tantôt géniale, elle apporte chaos, humour et surprises.",
		quote: "« J’vois rien, mais j’y vais ! »"
	},


	"rodd_karn": {
		name: "Rodd Karn",
		nickname: "Le Guetteur Insolent",
		race: "Humain",
		tier: "tertiary",
		img: "../img/rodd1.jpg",

		affinities: [
			{ name: "Aquaria", sub: "Lune : Abyssus", color: "var(--col-aquaria)", link: "aquaria.html" },
			{ name: "Umbra", sub: "Lune : Nyx", color: "var(--col-umbra)", link: "umbra.html" },
			{ name: "-", sub: "Aucune", color: "", link: null }
		],

		bestia: null,

		unique: null,

		eveil: null,

		lore: "Meneur autoproclamé d’une mini-guilde d’enfants, Rodd est provocateur, sûr de lui et constamment moqueur. Il compense son manque de puissance par son aplomb et son envie d’impressionner les autres.",
		quote: "« On va voir si vous faites les malins. »"
	},


	"sylva_rensar": {
		name: "Sylva Rensar",
		nickname: "L’Aiguille Lumineuse",
		race: "Humaine",
		tier: "tertiary",
		img: "../img/sylva1.jpg",

		affinities: [
			{ name: "Lumia", sub: "Lune : Photis", color: "var(--col-lumia)", link: "lumia.html" },
			{ name: "-", sub: "Aucune", color: "", link: null },
			{ name: "-", sub: "Aucune", color: "", link: null }
		],

		bestia: null,

		unique: null,

		eveil: null,

		lore: "Sylva est rapide, précise et méthodique. Sa maîtrise de Lumia-Photis lui permet de créer des projectiles tranchants et lumineux d’une grande précision. Sérieuse et compétitive, elle prend chaque duel comme une démonstration de compétence.",
		quote: "« Je rate rarement ma cible. »"
	},


	"kael_drometh": {
		name: "Kael Drometh",
		nickname: "Le Mur de Roche",
		race: "Humain",
		tier: "tertiary",
		img: "../img/kael1.jpg",

		affinities: [
			{ name: "Terra", sub: "Lune : Seismis", color: "var(--col-terra)", link: "terra.html" },
			{ name: "-", sub: "Aucune", color: "", link: null },
			{ name: "-", sub: "Aucune", color: "", link: null }
		],

		bestia: null,

		unique: null,

		eveil: null,

		lore: "Kael est calme, concentré et très endurant. Sa maîtrise de Terra-Seismis lui permet de provoquer des vibrations et ondes de choc capables de déstabiliser ses adversaires. Sous sa réserve apparente se cache une fierté robuste — et une rancune tenace lorsqu’il est humilié.",
		quote: "« Je ne tombe pas. »"
	},


	"vaylen_oris": {
		name: "Vaylen Oris",
		nickname: "L’Éclair Transcendant",
		race: "Humain",
		tier: "secondary",
		img: "../img/vaylen1.jpg",

		rank: { letter: "C", level: "Ma", specialPath: "../svg/Cimes/IV.svg", rankClass: "rank-cime-4" }, // C = Lettre du rang, Ma = Majeur (Or)

		affinities: [
			{ name: "Fulgora", sub: "Lune : Tempestra", color: "var(--col-tempestra)", link: "tempestra.html" },
			{ name: "-", sub: "Aucune", color: "", link: null },
			{ name: "-", sub: "Aucune", color: "", link: null },
		],
		bestia: null,
		unique: {
			name: "FULGAUNT",
			type: "The Bound Spear - Javelot + Gant conducteur lié",
			desc: "Un javelot de foudre stabilisée relié spirituellement à un gant conducteur. Fulgaunt traverse l’espace comme un éclair et revient instantanément à son porteur.",
			fullDesc: `
		<div class="detail-group">
			<span class="detail-label">Description</span>
			<p class="content-text">
				Un javelot long et affiné, constitué d’éclair solidifié, lié à un gant conducteur que Vaylen porte à la main gauche. 
				Le javelot est rappelé instantanément par un arc électrique, même au travers d’un sort adverse. 
				Fulgaunt ne produit pas d’éclair : il est un éclair figé et stabilisé.
			</p>
		</div>

		<div class="detail-group">
			<span class="detail-label">Particularités</span>
			<ul class="tech-list">
				<li><strong>Rappel instantané :</strong> le gant “appelle” le javelot, quelle que soit la distance.</li>
				<li><strong>Changement d’état :</strong> conduction pure, rigidité absolue, pointe traversante.</li>
				<li><strong>Inutilisable par d’autres :</strong> quiconque tente de le saisir est foudroyé spirituellement.</li>
				<li><strong>Style Cime :</strong> précision absolue, lancers silencieux, trajectoires impossibles.</li>
			</ul>
		</div>

					`
		},
		eveil: {
			name: "THUNDER SPIRE FIELD",
			type: "Éveil Singuar",
			desc: "Le Champ des Pylônes Vivants", // Ce champ existe maintenant !
			fullDesc: `
		<p class="content-text" style="font-style:italic; margin-bottom:15px; color:#fff;">
			Ce n’est pas Vaylen qui entre en Éveil. C’est le monde qui entre en lui.
		</p>

		<div class="detail-group">
			<span class="detail-label">Manifestation</span>
			<p class="content-text">
				L’air perd ses couleurs. Le sol trace des lignes d’argent menant à Vaylen. 
				Des pylônes de foudre figée émergent, hauts, translucides, vibrant comme des spires vivantes. 
				Une forêt de paratonnerres arcaniques transforme la zone en champ de tension absolue.
			</p>
		</div>

		<div class="detail-group">
			<span class="detail-label">Capacités principales</span>
			<ul class="tech-list">
				<li><strong>Spire Conduction :</strong> les pylônes absorbent, divisent et renvoient les sorts.</li>
				<li><strong>Stormline Stride :</strong> déplacement instantané le long de lignes d’éclairs stabilisés.</li>
				<li><strong>Fulgora Anchor :</strong> ancre de foudre indestructible, attirant tous flux adverses.</li>
				<li><strong>The Bound Javelin :</strong> Fulgaunt devient une ligne de loi, amplifié par chaque spire.</li>
				<li><strong>Attaque Ultime "Skybreak Array" :</strong> réseau de pylônes synchronisés, lumière blanche totale, rupture des flux adverses.</li>
			</ul>
		</div>

		<div class="detail-group">
			<span class="detail-label" style="color:#e74c3c;">Contreparties</span>
			<ul class="tech-list">
				<li class="drawback"><strong>Épuisement nerveux :</strong> surcharge intense du système sensoriel.</li>
				<li class="drawback"><strong>Tremblements musculaires :</strong> conduction forcée prolongée.</li>
				<li class="drawback"><strong>Affaiblissement interne :</strong> flux incapable de se plier pendant plusieurs jours.</li>
				<li class="drawback"><strong>Douleurs thoraciques :</strong> micro-chocs internes répétés.</li>
				<li class="drawback"><strong>Risque rare :</strong> rupture de cohésion, attirance involontaire vers une spire.</li>
			</ul>
		</div>

					`
		},

		lore: "Vaylen représente la maîtrise absolue : aucune perte, aucun mouvement inutile, aucune surcharge. Quatrième Cime et figure majeure de Fertol, il impose une tension silencieuse dès son arrivée. Sa force est méthodique, disciplinée, construite uniquement par le travail.",
		quote: "« La force est une structure. »"
	},


	"edris_varen": {
		name: "Edris Varen",
		nickname: "La Brume Tremblante",
		race: "Humain",
		tier: "tertiary",
		img: "../img/edris1.jpg",

		rank: { letter: "L", level: "Mi" }, // C = Lettre du rang, Ma = Majeur (Or)

		affinities: [
			{ name: "Aquaria", sub: "Lune : Nebula", color: "var(--col-aquaria)", link: "aquaria.html" },
			{ name: "-", sub: "Aucune", color: "", link: null },
			{ name: "-", sub: "Aucune", color: "", link: null },
		],
		bestia: null,
		unique: null,
		eveil: null,

		lore: "Edris est un jeune Lune Mineure encore hésitant mais volontaire. Sa brume Aquaria-Nebula réagit à ses émotions : tremblante quand il doute, dense quand il se concentre. Timide mais courageux, il apprend vite en observant Lily, Nova et Finn, et cherche constamment à “agir avant que ça casse”.",
		quote: "« Je… j’essaie. »"
	},


	"rysa_halden": {
		name: "Rysa Halden",
		nickname: "La Gardienne de Comptoir",
		race: "Humaine",
		tier: "tertiary",
		img: "../img/rysa1.jpg",

		rank: { letter: "P", level: "N" }, // M, L, P, E, C = Lettre du rang, Mi, N, Ma = Niveau 

		affinities: [
			{ name: "Aquaria", sub: "Lune : Glacius", color: "var(--col-aquaria)", link: "aquaria.html" },
			{ name: "-", sub: "Aucune", color: "", link: null },
			{ name: "-", sub: "Aucune", color: "", link: null },
		],
		bestia: {
			name: "Serpent",
			desc: "Instinct sinueux : confère réflexes rapides, souplesse extrême, perception thermique et mouvements silencieux.",
			link: "bestia_serpent.html"
		},
		unique: null,
		eveil: null,

		lore: "Guildeuse posée et fiable, Rysa tient le comptoir avec un calme solide et une chaleur discrète. Professionnelle, attentive et dotée d’un humour subtil, elle traite les jeunes aventuriers avec respect et vigilance. Elle incarne la stabilité de la guilde et la première marche rassurante vers le monde réel.",
		quote: "« Revenez entiers, d’accord ? »"
	},



	"cayden_virell": {
		name: "Cayden Virell",
		nickname: "Le Prédateur du Vide",
		race: "Elfe", // Supposé
		tier: "secondary",
		img: "../img/cayden1.png",


		rank: { letter: "E", level: "N" }, // Étoile Normal


		affinities: [
			{ name: "Umbra", sub: "Lune : Abyssum", color: "var(--col-umbra)", link: "umbra.html" },
			{ name: "-", sub: "Aucune", color: "", link: null },
			{ name: "-", sub: "Aucune", color: "", link: null },
		],
		bestia: {
			name: "Faucon Pèlerin",
			desc: "Vitesse extrême, vision perçante, maîtrise absolue du corps en chute libre, attaques en piqué.",
			link: "bestia_faucon.html"
		},
		unique: {
			name: "NÉANTAILLE",
			type: "Lames du Point de Chute",
			desc: "Paire de lames courtes courbées, fixées aux avant-bras. Tranchants sombres, comme mangés par le vide.",
			fullDesc: `
		<div class="detail-group">
			<span class="detail-label">Description</span>
			<p class="content-text">
				Paire de lames courtes courbées, fixées aux avant-bras. Tranchants sombres, comme mangés par le vide, sans reflet. 
				Les lames semblent légèrement désynchronisées de l’espace, laissant des traînées d’ombre après chaque mouvement. 
				Optimisées pour les attaques en piqué, les frappes rapides et les passages éclair.
			</p>
		</div>

		<div class="detail-group">
			<span class="detail-label">Particularités</span>
			<ul class="tech-list">
				<li><strong>Instabilité :</strong> Plus Cayden est en chute ou en déplacement rapide, plus les lames deviennent instables et pénétrantes.</li>
				<li><strong>Micro-Vide :</strong> Les impacts créent de micro-zones de vide qui déséquilibrent la cible au moment du contact.</li>
				<li><strong>Faiblesse :</strong> Perd une partie de son efficacité à l’arrêt ou en combat statique.</li>
			</ul>
		</div>
			`
		},
		eveil: {
			name: "ABYSSUS FALCONIS",
			type: "Éveil Singuar",
			desc: "Celui qui accepte la chute",
			fullDesc: `
		<p class="content-text" style="font-style:italic; margin-bottom:15px; color:#fff;">
			L’Éveil se déclenche en chute libre ou juste avant un piqué volontaire — jamais depuis le sol.
		</p>

		<div class="detail-group">
			<span class="detail-label">Manifestation</span>
			<p class="content-text">
				Les ombres autour de Cayden se déforment et s’étirent vers le bas, comme attirées par un gouffre invisible. 
				Le ciel au-dessus de lui semble s’assombrir. Une silhouette spectrale de faucon géant, faite d’ombre abyssale, apparaît derrière lui. 
				Ses yeux deviennent noirs, traversés de lignes argentées mouvantes.
			</p>
		</div>

		<div class="detail-group">
			<span class="detail-label">Capacités principales</span>
			<ul class="tech-list">
				<li><strong>Corps de Chute Absolue :</strong> Immunité partielle aux effets de gravité. Peut modifier sa trajectoire en plein vol sans point d’appui.</li>
				<li><strong>Ailes de l’Abyssum :</strong> Accélérations instantanées en piqué et changements d’axe impossibles à prédire.</li>
				<li><strong>Zone de Vide – « Point Mort » :</strong> En traversant une zone, il y laisse une empreinte abyssale où les distances deviennent trompeuses.</li>
				<li><strong>Attaque Ultime "Chute du Faucon Noir" :</strong> Impact dévastateur en piqué vertical, créant un cratère de vide temporaire aspirant tout vers le centre.</li>
			</ul>
		</div>

		<div class="detail-group">
			<span class="detail-label" style="color:#e74c3c;">Contreparties</span>
			<ul class="tech-list">
				<li class="drawback"><strong>Désynchronisation spatiale :</strong> Après l’Éveil, Cayden a du mal à évaluer les distances.</li>
				<li class="drawback"><strong>Instabilité mentale :</strong> L’Abyssum renforce ses penchants à la prise de risque excessive.</li>
				<li class="drawback"><strong>Effondrement physique :</strong> Muscles et nerfs saturés, tremblements.</li>
				<li class="drawback"><strong>Risque de chute réelle :</strong> S’il prolonge l’Éveil trop longtemps, son corps peut ne plus distinguer le vide réel du vide créé.</li>
			</ul>
		</div>

		<div class="detail-group">
			<span class="detail-label">Symbolique</span>
			<p class="content-text">
				« Le ciel n’est pas un refuge. C’est un mensonge confortable. Le vide, lui, est honnête. »
			</p>
		</div>
			`
		},

		lore: "Direct, cash, sans filtre. Cayden est toujours prêt à plaisanter, surtout dans les situations dangereuses. Légèrement instable, il aime flirter avec la perte de contrôle. Originaire du Grand-Duché de Harmouth, il enseigne à Lily que voler ne consiste pas seulement à s’élever, mais à survivre à la chute.",
		quote: "« Le ciel ment. Le vide, lui, ne triche jamais. »"
	},


	"aurelien_kane": {
		name: "Aurélien Kane",
		nickname: "Le Jardin de l’Agonie",
		race: "Humain", // Supposé
		tier: "secondary",
		img: "../img/aurelien1.png",

		rank: { letter: "C", level: "N" }, // Non spécifié

		affinities: [
			{ name: "Verdania", sub: "Lune : Venomera", color: "var(--col-verdania)", link: "verdania.html" },
			{ name: "-", sub: "Aucune", color: "", link: null },
			{ name: "-", sub: "Aucune", color: "", link: null },
		],
		bestia: {
			name: "Manticore",
			desc: "Réflexes félins, musculature souple et puissante, dards osseux venimeux, instinct de chasseur apex.",
			link: "bestia_manticore.html"
		},
		unique: {
			name: "SPINAE REGIS",
			type: "Dards du Jardin Noir",
			desc: "Ensemble de dards osseux rétractiles, formés à partir de la queue et des avant-bras. Chaque dard est parcouru de veines végétales sombres, pulsant de toxines vivantes.",
			fullDesc: `
		<div class="detail-group">
			<span class="detail-label">Description</span>
			<p class="content-text">
				Ensemble de dards osseux rétractiles, formés à partir de la queue et des avant-bras. 
				Chaque dard est parcouru de veines végétales sombres, pulsant de toxines vivantes. 
				Peut être projeté à distance ou utilisé en arme perforante au corps-à-corps.
			</p>
		</div>

		<div class="detail-group">
			<span class="detail-label">Particularités</span>
			<ul class="tech-list">
				<li><strong>Toxines variables :</strong> Chaque blessure inocule un poison différent selon l’état émotionnel d’Aurélien (paralysie, douleur, suffocation).</li>
				<li><strong>Régénération :</strong> Les dards se régénèrent lentement à partir de son mana verdanien.</li>
				<li><strong>Limites :</strong> Inefficaces contre des cibles totalement insensibles aux toxines ou purifiées par le feu.</li>
			</ul>
		</div>
			`
		},
		eveil: {
			name: "HORTUS MORTIS",
			type: "Éveil Singuar",
			desc: "« Là où tout ce qui respire apprend à mourir »",
			fullDesc: `
		<p class="content-text" style="font-style:italic; margin-bottom:15px; color:#fff;">
			L’Éveil se déclenche lorsqu’Aurélien décide consciemment de condamner une zone entière, et non une simple cible.
		</p>

		<div class="detail-group">
			<span class="detail-label">Manifestation</span>
			<p class="content-text">
				La végétation alentour noircit et se couvre d’épines translucides. Un brouillard verdâtre chargé de spores se déploie silencieusement. 
				Des excroissances végétales émergent de son corps. Une silhouette spectrale de manticore apparaît derrière lui.
			</p>
		</div>

		<div class="detail-group">
			<span class="detail-label">Capacités principales</span>
			<ul class="tech-list">
				<li><strong>Domaine Vénéneux Absolu :</strong> Aurélien transforme la zone en un écosystème mortel où l’air devient toxique pour toute forme de vie.</li>
				<li><strong>Instinct du Prédateur Légendaire :</strong> Vitesse accrue, déplacements silencieux et capacité à frapper les points vitaux avec précision.</li>
				<li><strong>Ronces de Supplication :</strong> Des lianes vénéneuses jaillissent du sol pour immobiliser et injecter des toxines paralysantes.</li>
				<li><strong>Attaque ultime – « Couronne de l’Extinction » :</strong> Une floraison monstrueuse recouvre la zone, soumettant les ennemis à plusieurs toxines simultanées (douleur, asphyxie, paralysie).</li>
			</ul>
		</div>

		<div class="detail-group">
			<span class="detail-label" style="color:#e74c3c;">Contreparties</span>
			<ul class="tech-list">
				<li class="drawback"><strong>Épuisement vital :</strong> L’Éveil puise directement dans ses réserves biologiques (fatigue extrême).</li>
				<li class="drawback"><strong>Isolement sensoriel :</strong> Perçoit encore des odeurs et hallucinations toxiques après usage.</li>
				<li class="drawback"><strong>Dépendance au contrôle :</strong> Plus il utilise Hortus Mortis, plus il devient détaché émotionnellement.</li>
				<li class="drawback"><strong>Vulnérabilités :</strong> Le feu (Pyros) brûle ses spores, et les vents violents (Aeris) peuvent disperser ses toxines.</li>
			</ul>
		</div>

		<div class="detail-group">
			<span class="detail-label">Symbolique</span>
			<p class="content-text">
				« La mort n’est pas brutale. Elle est patiente. Je ne fais qu’accélérer ce qui est déjà en marche. »
			</p>
		</div>
			`
		},

		lore: "D'une élégance presque dérangeante, Aurélien est courtois, calme et stratège. Il voit le combat comme une chasse raffinée et préfère l'épuisement de ses ennemis à la force brute. Il incarne le 'Létal sophistiqué', agissant comme saboteur et affaiblisseur du groupe, créant parfois des tensions morales par ses méthodes cruelles.",
		quote: "« La mort n’est pas brutale. Elle est patiente. »"
	},



	"scylla_ashford": {
		"name": "Scylla Ashford",
		"nickname": "Quattro",
		"race": "Humaine",
		"tier": "secondary",
		"img": "../img/image_0.png",
		"rank": {
			"letter": "P",
			"level": "Mi"
		},
		"affinities": [
			{
				"name": "Fulgora",
				"sub": "Lune : Tempestra",
				"color": "var(--col-fulgora)",
				"link": "fulgora.html"
			},
			{
				"name": "Bestia",
				"sub": "Espadon",
				"color": "var(--col-bestia)",
				"link": "bestia_espadon.html"
			},
			{
				"name": "-",
				"sub": "Aucune",
				"color": "",
				"link": null
			}
		],
		"bestia": {
			"name": "ESPADON",
			"desc": "Instinct de trajectoire, précision fulgurante et lecture du danger par l'angle, la vitesse et l'appui.",
			"link": "bestia_espadon.html"
		},
		"unique": {
			"name": "FRACTEA",
			"type": "Arc-estoc cobalt",
			"desc": "Arme Unique de Scylla, capable de passer de l'arc à l'estoc dans le mouvement.",
			"fullDesc": "<div class=\"detail-group\"><span class=\"detail-label\">Description</span><p class=\"content-text\">Fractea apparaît comme une arme cobalt et cyan, à la fois arc long, lame d'estoc et trajectoire déjà choisie. Elle répond à l'instinct de Scylla avant même que son geste soit pleinement visible.</p></div><div class=\"detail-group\"><span class=\"detail-label\">Usage connu</span><ul class=\"tech-list\"><li>Projection de traits de foudre silencieuse.</li><li>Transition rapide entre tir, couverture et frappe d'estoc.</li><li>Lecture instinctive des angles morts, sorties et menaces.</li></ul></div>"
		},
		"eveil": null,
		"lore": "Membre du Quattro et élève de Première-Quatre. Sauvée à Kaiyurt puis adoptée dans les faits par la famille Ashford, Scylla est calme, directe et extrêmement attentive aux trajectoires. Depuis Hochedenia, elle s'apaise, trouve des repères, et sa relation avec Finn est réciproquement déclarée.",
		"quote": "« Je peux répondre moi-même. »"
	},

	"marilyn_maelstorm": {
		"name": "Marilyn Maëlstorm",
		"nickname": "Last Clause",
		"race": "Mi-elfe, mi-humaine",
		"tier": "secondary",
		"img": "../img/image_0.png",
		"rank": null,
		"affinities": [
			{
				"name": "Pyros",
				"sub": "Lune : Vulcan",
				"color": "var(--col-pyros)",
				"link": "pyros.html"
			},
			{
				"name": "Aquaria",
				"sub": "Lune : Abyssus",
				"color": "var(--col-aquaria)",
				"link": "aquaria.html"
			},
			{
				"name": "Terra",
				"sub": "Lune : Metallia",
				"color": "var(--col-terra)",
				"link": "terra.html"
			}
		],
		"bestia": {
			"name": "DRAGON",
			"desc": "Bestia de rang exceptionnel, associée à une pression naturelle écrasante et à une puissance difficile à contenir.",
			"link": "bestia_dragon.html"
		},
		"unique": {
			"name": "LAST CLAUSE",
			"type": "Hallebarde noire",
			"desc": "Arme Unique de Marilyn, révélée durant la démonstration d'entrée à Hochedenia.",
			"fullDesc": "<div class=\"detail-group\"><span class=\"detail-label\">Description</span><p class=\"content-text\">Last Clause est une hallebarde dont l'apparition change immédiatement la pression d'une pièce. Marilyn l'appelle rarement, brièvement, et même contenue l'arme impose le silence.</p></div>"
		},
		"eveil": null,
		"lore": "Élève de Première-Quatre et colocataire du silo Est-Quatre. Marilyn paraît constamment épuisée, garde les yeux fermés et dort presque partout. Elle perçoit Lily malgré Nulléon, apaise la présence du fragment de Parralith Pure, et s'installe souvent sur son dos en retirant presque tout son poids.",
		"quote": "« Trop. »"
	},

	"noeline_rask": {
		"name": "Noéline Rask",
		"nickname": "Référente pressentie",
		"race": "Humaine / traits Bestia visibles",
		"tier": "secondary",
		"img": "../img/image_0.png",
		"rank": null,
		"affinities": [
			{
				"name": "Aeris",
				"sub": "Lune : Zephyria",
				"color": "var(--col-aeris)",
				"link": "aeris.html"
			},
			{
				"name": "Terra",
				"sub": "Lune : Seismis",
				"color": "var(--col-terra)",
				"link": "terra.html"
			},
			{
				"name": "Bestia",
				"sub": "Serval",
				"color": "var(--col-bestia)",
				"link": "bestia_serval.html"
			}
		],
		"bestia": {
			"name": "SERVAL",
			"desc": "Oreilles expressives, vivacité et instinct plus prédateur qu'il n'y paraît quand la Présence se stabilise.",
			"link": "bestia_serval.html"
		},
		"unique": {
			"name": "LUNELARGE",
			"type": "Arme Unique",
			"desc": "Arme de Noéline, stable mais encombrée quand son esprit essaie de tout organiser à la fois.",
			"fullDesc": "<div class=\"detail-group\"><span class=\"detail-label\">État connu</span><p class=\"content-text\">Lunelarge répond à Noéline lorsqu'elle réduit son intention à quelque chose de simple : tenir, stabiliser, agir sans se perdre dans les notes.</p></div>"
		},
		"eveil": null,
		"lore": "Élève de Première-Quatre, colocataire de Lily, Scylla et Marilyn. Vive, anxieuse et très bavarde, elle transforme les problèmes en méthodes concrètes. Au chapitre 117, la classe la choisit informellement comme référente souhaitée.",
		"quote": "« Stable ne veut pas dire déjà choisi. »"
	},

	"paul_surnyx": {
		"name": "Paul Surnyx",
		"nickname": "Suppléant pressenti",
		"race": "Humain",
		"tier": "secondary",
		"img": "../img/image_0.png",
		"rank": null,
		"affinities": [
			{
				"name": "Lumia",
				"sub": "Lune : Photis",
				"color": "var(--col-lumia)",
				"link": "lumia.html"
			},
			{
				"name": "Fulgora",
				"sub": "Lune : Tempestra",
				"color": "var(--col-fulgora)",
				"link": "fulgora.html"
			},
			{
				"name": "Bestia",
				"sub": "Griffon",
				"color": "var(--col-bestia)",
				"link": "bestia_griffon.html"
			}
		],
		"bestia": {
			"name": "GRIFFON",
			"desc": "Pupilles dorées, plumes métalliques discrètes et lecture sociale précise.",
			"link": "bestia_griffon.html"
		},
		"unique": {
			"name": "OCULIS",
			"type": "Diadème d'analyse",
			"desc": "Diadème d'or asymétrique couvrant la moitié gauche du visage, associé à une analyse presque mentale.",
			"fullDesc": "<div class=\"detail-group\"><span class=\"detail-label\">Description</span><p class=\"content-text\">Oculis apparaît comme un diadème d'or asymétrique. L'oeil gauche de Paul prend un or solaire sobre ; l'appel est propre, discret, et dépend de son temps d'analyse.</p></div>"
		},
		"eveil": null,
		"lore": "Élève de Première-Quatre et colocataire de Finn, Nova et Bastian au silo Nord-Deux. Noble par l'éducation plus que par la pose, Paul aide sans infantiliser et sait reformuler sans voler la parole. La classe le choisit informellement comme suppléant souhaité de Noéline.",
		"quote": "« Je peux aider sans prendre la place. »"
	},

	"bastian_norec": {
		"name": "Bastian Norec",
		"nickname": "Vif-Éclat",
		"race": "Humain",
		"tier": "secondary",
		"img": "../img/image_0.png",
		"rank": null,
		"affinities": [
			{
				"name": "Fulgora",
				"sub": "Lune : Ionis",
				"color": "var(--col-fulgora)",
				"link": "fulgora.html"
			},
			{
				"name": "Pyros",
				"sub": "Lune : Fumar",
				"color": "var(--col-pyros)",
				"link": "pyros.html"
			},
			{
				"name": "-",
				"sub": "Aucune",
				"color": "",
				"link": null
			}
		],
		"bestia": null,
		"unique": {
			"name": "VIF-ÉCLAT",
			"type": "Bâton court segmenté",
			"desc": "Arme Unique de Bastian, vive et articulée, révélée en cours de contrôle du mana.",
			"fullDesc": "<div class=\"detail-group\"><span class=\"detail-label\">Description</span><p class=\"content-text\">Vif-Éclat est un bâton court segmenté aux articulations fines. Son appel gagne en stabilité lorsque Bastian laisse son corps agir avant la blague.</p></div>"
		},
		"eveil": null,
		"lore": "Élève de Première-Quatre et colocataire du silo Nord-Deux. Drôle, énergique et immédiatement sociable, il s'adapte très vite à l'absurde du groupe et apporte une légèreté sincère aux premiers jours d'Hochedenia.",
		"quote": "« Je retire ma confiance. »"
	},

	"serevan_auln": {
		"name": "Serevan Auln",
		"nickname": "Directeur d'Hochedenia",
		"race": "Elfe",
		"tier": "tertiary",
		"img": "../img/image_0.png",
		"rank": null,
		"affinities": [
			{
				"name": "-",
				"sub": "Non révélées",
				"color": "",
				"link": null
			},
			{
				"name": "-",
				"sub": "Non révélées",
				"color": "",
				"link": null
			},
			{
				"name": "-",
				"sub": "Non révélées",
				"color": "",
				"link": null
			}
		],
		"bestia": null,
		"unique": null,
		"eveil": null,
		"lore": "Directeur de la Haute École d'Hochedenia et ancien membre des Sept Cimes. Il accueille la cohorte de Serewin, rappelle que la démonstration d'Arme Unique n'est pas une invitation à la gloire, et observe ce que les élèves font sous pression.",
		"quote": "« Bienvenue à Hochedenia. »"
	},

	"edith_veyrane": {
		"name": "Édith Veyrane",
		"nickname": "Contrôle du mana",
		"race": "Humaine",
		"tier": "tertiary",
		"img": "../img/image_0.png",
		"rank": null,
		"affinities": [
			{
				"name": "Aeris",
				"sub": "Lune : Zephyria",
				"color": "var(--col-aeris)",
				"link": "aeris.html"
			},
			{
				"name": "Lumia",
				"sub": "Lune : Solara",
				"color": "var(--col-lumia)",
				"link": "lumia.html"
			},
			{
				"name": "-",
				"sub": "Aucune",
				"color": "",
				"link": null
			}
		],
		"bestia": null,
		"unique": null,
		"eveil": null,
		"lore": "Professeure de sortilèges généraux et de contrôle du mana à Hochedenia. Elle mène le premier vrai cours montré en Première-Quatre, diagnostique les appels d'Armes Uniques et force chaque élève à réduire son intention à un geste stable.",
		"quote": "« Une seule intention. »"
	}
};
