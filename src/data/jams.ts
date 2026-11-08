import type { Localized } from '../i18n';
import { COMMUNITY } from './links';

export type Project = {
  id: string;
  name: string;
  thumbnail: string;
  photo: string;
  role: Localized;
  /** Paragraphs; may contain links (trusted, written here). */
  body: { fr: string[]; en?: string[]; br?: string[] };
  links?: { label: Localized; href: string }[];
  /** Past and future editions, each a page on Community. Newest first. */
  editions?: { year: string; slug: string }[];
};

const a = (href: string, text: string) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const STUNFEST = 'https://www.stunfest.com';
const HIT_COMBO = 'https://3hitcombo.fr';

const ourRole = {
  fr: 'Notre rôle dans cet évènement se situe notamment sur sa gestion globale, sa présentation et son bon déroulement tout au long du week-end.',
  en: 'Our role covers the overall management, the presentation and the smooth running of the event all weekend long.',
  br: "Hor roll er darvoud-mañ eo e mererezh hollek, e kinnigadur hag e dirolladur mat e-pad ar dibenn-sizhun.",
};

const organising: Localized = { fr: "Organisation de l'évènement", en: 'Organising the event', br: 'Aozadur ar darvoud' };

const projects: Project[] = [
  {
    id: 'stunfest',
    name: 'Stunfest',
    thumbnail: 'portfolio/stunfest-indie-thumbnail.jpg',
    photo: 'portfolio/stunfest-indie-full.jpg',
    role: { fr: 'Co-organisation de la section « Indie »', en: 'Co-organising the Indie section', br: 'Kenaozadur ar gevrenn "Indie"' },
    body: {
      fr: [
        `Le ${a(STUNFEST, 'Stunfest')}, festival des cultures vidéoludiques à Rennes créé en 2005 et mis en place par l'association ${a(HIT_COMBO, '3 Hit Combo')}, nous accueille depuis 2012 afin de coordonner une partie du festival.`,
        "Orientée dans un premier temps vers les studios de jeux vidéo indépendants, cette partie s'élargit d'année en année afin de recevoir désormais des installations originales, des ateliers temporaires ou encore d'autres performances proposées sur le temps du festival.",
        "L'objectif de cette section est de mettre en avant la création vidéoludique dans toutes ses formes, venant de France ou non. Par ailleurs, un jury décerne plusieurs récompenses aux jeux « Coup de cœur » de la Zone Indie.",
        "Une game jam, la Stunjam, est également proposée au public en amont du festival. Elle a pour objectif de proposer une jam pour les férus (ou non) de création de jeux vidéo, mais aussi de présenter au Stunfest des jeux créés par des amateurs sur un stand dédié.",
        `L'association se charge également de mettre en place le ${a('https://indie.stunfest.com', 'site de présentation des exposants indés')}, la mise en place et le déroulement des votes du public ainsi que le ${a('https://www.youtube.com/watch?v=ScQiXpl756A&list=PLPQ275dd4YUJEc8SrOTcUdx21CTi7CGHL', 'trailer')} des jeux présentés aux Indie Awards.`,
      ],
      en: [
        `${a(STUNFEST, 'Stunfest')}, a festival of video game culture in Rennes, created in 2005 and run by the association ${a(HIT_COMBO, '3 Hit Combo')}, has welcomed us since 2012 to coordinate part of the festival.`,
        'First focused on independent game studios, this section grows year after year and now also hosts original installations, temporary workshops and other performances during the festival.',
        'Its aim is to showcase game creation in all its forms, from France and elsewhere. A jury also gives several awards to the Indie Zone’s favourite games.',
        'A game jam, the Stunjam, is open to the public ahead of the festival: a jam for game-making enthusiasts (and newcomers), whose games are then shown at Stunfest on a dedicated stand.',
        `The association also builds the ${a('https://indie.stunfest.com', 'website presenting the indie exhibitors')}, runs the public vote and makes the ${a('https://www.youtube.com/watch?v=ScQiXpl756A&list=PLPQ275dd4YUJEc8SrOTcUdx21CTi7CGHL', 'trailer')} of the games shown at the Indie Awards.`,
      ],
      br: [
        `Ar ${a(STUNFEST, 'Stunfest')}, gouel sevenadurioù ar c'hoari video e Roazhon, krouet e 2005 hag aozet gant ar gevredigezh ${a(HIT_COMBO, '3 Hit Combo')}, a zegemer ac'hanomp abaoe 2012 evit kenurzhiañ ul lodenn eus ar gouel.`,
        "Troet da gentañ war-zu ar studioioù c'hoarioù video dizalc'h, al lodenn-se a vrasa bep bloaz hag a zegemer bremañ staliadurioù orin, atalieroù berrbad hag arvestoù all e-pad ar gouel.",
        "Pal al lodenn-se eo lakaat war wel ar grouidigezh c'hoarioù video en he holl stummoù, eus Bro-C'hall pe eus lec'h all. Ur juri a ro ivez meur a briz d'ar c'hoarioù « karet » eus an Takad Indie.",
        "Ur game jam, ar Stunjam, a vez kinniget d'an holl a-raok ar gouel : ur jam evit ar re a blij dezho krouiñ c'hoarioù video, hag ar re all ivez, a ziskouez er Stunfest c'hoarioù krouet gant amatourien war ur stal dezho.",
        `Ar gevredigezh a sav ivez ${a('https://indie.stunfest.com', "al lec'hienn a ginnig an diskouezerien dizalc'h")}, a aoz votadeg an holl hag a ra ${a('https://www.youtube.com/watch?v=ScQiXpl756A&list=PLPQ275dd4YUJEc8SrOTcUdx21CTi7CGHL', 'trailer')} ar c'hoarioù kinniget en Indie Awards.`,
      ],
    },
    links: [{ label: { fr: 'Le site Indie Stunfest', en: 'The Indie Stunfest website', br: "Lec'hienn Indie Stunfest" }, href: 'https://indie.stunfest.com' }],
    editions: [
      { year: '2026', slug: 'stunfest-2026-20eme-edition' },
      { year: '2025', slug: 'stunfest-2025' },
      { year: '2019', slug: 'stunfest-2019-15eme-festival-de-jeu-video' },
      { year: '2018', slug: 'stunfest-2018' },
      { year: '2014', slug: 'stunfest-2014' },
      { year: '2013', slug: 'stunfest-2013' },
    ],
  },
  {
    id: 'ggj',
    name: 'Global Game Jam',
    thumbnail: 'portfolio/global-game-jam-rennes-thumbnail.png',
    photo: 'portfolio/global-game-jam-full.jpg',
    role: organising,
    body: {
      fr: [
        `La ${a('https://globalgamejam.org', 'Global Game Jam')} (GGJ) est un atelier mondial annuel qui propose de créer des jeux en équipe pendant 48 h, sous format jeu vidéo, jeu de plateau ou de forme hybride. Un thème est présenté au début des 48 h de création aux jammers. Par ailleurs, de nombreux succès optionnels peuvent être réalisés sur chacun des jeux afin de pimenter la difficulté de la création.`,
        `D'abord co-organisée à Rennes par l'association ${a(HIT_COMBO, '3 Hit Combo')}, la Global Game Jam est entièrement organisée par Indie Collective depuis 2021.`,
        ourRole.fr,
      ],
      en: [
        `The ${a('https://globalgamejam.org', 'Global Game Jam')} (GGJ) is a yearly worldwide event where teams make games in 48 hours: video games, board games or anything in between. Jammers discover the theme when the 48 hours start, and optional achievements add to the challenge.`,
        `First co-organised in Rennes by the association ${a(HIT_COMBO, '3 Hit Combo')}, the Global Game Jam has been fully run by Indie Collective since 2021.`,
        ourRole.en,
      ],
      br: [
        `Ar ${a('https://globalgamejam.org', 'Global Game Jam')} (GGJ) zo un atalier bedel bep bloaz ma vez kinniget krouiñ c'hoarioù e skipailh e-pad 48e, e furm c'hoari video, c'hoari taolenn pe furm hiron. Un tem a vez diskouezet da jammers e penn-kentañ 48e ar krouadenn. Mod-all, gellout a rez savet kalz trec'hadennoù opsionel war bep c'hoari evit pimantañ diaester ar krouadenn.`,
        `Da gentañ e veze kenaozet e Roazhon gant ar gevredigezh ${a(HIT_COMBO, '3 Hit Combo')}, ar Global Game Jam a vez aozet war e hed bep bloaz gant Indie Collective abaoe 2021.`,
        "Emsavlec'hiañ a ra hon roll er darvoud-se pergen war e mererezh a-bezh, e diskouez ha e mat dibun war e hed an dibenn-sizhun.",
      ],
    },
    editions: [
      { year: '2027', slug: 'global-game-jam-rennes-2027' },
      { year: '2026', slug: 'global-game-jam-rennes-2026' },
      { year: '2025', slug: 'global-game-jam-rennes-2025' },
      { year: '2024', slug: 'global-game-jam-rennes-2024' },
      { year: '2023', slug: 'global-game-jam-rennes-2023' },
      { year: '2022', slug: 'global-game-jam-rennes-2022' },
      { year: '2021', slug: 'global-game-jam-2021-rennes' },
      { year: '2020', slug: 'global-game-jam-10eme-anniversaire-2020' },
      { year: '2019', slug: 'global-game-jam-2019-rennes' },
    ],
  },
  {
    id: 'stunjam',
    name: 'Stunjam',
    thumbnail: 'portfolio/stunjam-thumbnail.png',
    photo: 'portfolio/stunjam-full.jpg',
    role: organising,
    body: {
      fr: [
        `La Stunjam est un atelier de création de jeux en équipe pendant 48 h, sous format jeu vidéo, jeu de plateau ou de forme hybride qui a lieu, le plus souvent, le week-end précédant le ${a(STUNFEST, 'Stunfest')}, festival des cultures vidéoludiques à Rennes.`,
        'Un thème est présenté au début des 48 h de création aux jammers et des succès optionnels peuvent être réalisés sur chacun des jeux afin de pimenter la difficulté de la création.',
        'La particularité de cette jam est son inscription dans le cadre du festival. Les réalisations sont présentées au Stunfest sur un stand dédié aux côtés des studios indépendants.',
        ourRole.fr,
      ],
      en: [
        `The Stunjam is a 48-hour team game-making event (video games, board games or hybrids), usually held the weekend before ${a(STUNFEST, 'Stunfest')}, the festival of video game culture in Rennes.`,
        'Jammers discover the theme when the 48 hours start, and optional achievements add spice to the challenge.',
        "What makes this jam special is that it's part of the festival: the games are shown at Stunfest on a dedicated stand, next to the independent studios.",
        ourRole.en,
      ],
      br: [
        `Ar Stunjam 'zo un atalier krouadenn c'hoari e skipailh e-pad 48e, e furm c'hoari video, c'hoari taolenn pe furm hiron, a vez aozet, peurliesañ, ar dibenn-sizhun a-roak ar ${a(STUNFEST, 'Stunfest')}, gouel sevenadurioù ar c'hoari video e Roazhon.`,
        "Un tem a vez dizoloet e deroù 48e krouadenn d'ar jammers ha palioù dibab a c'hall bezañ sevenet e bep c'hoarioù evit pimantañ ar diaester ar krouadenn.",
        "Dibarded ar jam-mañ eo lakaet e framm gouel-meur. E Stunfest e vez kinniget ar c'hoarioù er stal dediet e-kichen studios disalc'h.",
        ourRole.br,
      ],
    },
    editions: [
      { year: '2023', slug: 'stunjam-2023' },
      { year: '2022', slug: 'stunjam-2022' },
      { year: '2021', slug: 'stunjam-2021' },
      { year: '2019', slug: 'stunjam-2019' },
      { year: '2018', slug: 'stunjam-2018' },
      { year: '2015', slug: 'stunjam-2015' },
      { year: '2014', slug: 'stunjam-2014' },
    ],
  },
  {
    id: 'octojam',
    name: 'Octojam',
    thumbnail: 'portfolio/octojam-thumbnail.png',
    photo: 'portfolio/octojam-full.jpg',
    role: organising,
    body: {
      fr: [
        "L'Octojam est un atelier qui propose de créer des jeux en équipe pendant 48 h, sous format jeu vidéo, jeu de plateau ou de forme hybride, qui se déroule le dernier week-end du mois d'octobre. Un thème est présenté au début des 48 h de création aux jammers. Par ailleurs, de nombreux succès optionnels peuvent être réalisés sur chacun des jeux afin de pimenter la difficulté de la création.",
        `Cette jam a la particularité de se situer au moment du changement d'heure. Il est ainsi proposé facultativement aux jammers de participer au sein de l'Octojam à la ${a('https://0hgame.sos.gd/', '0h game jam')}, atelier d'une heure qui se déroule entre 2 h (heure d'été) et 2 h (heure d'hiver) du matin.`,
        ourRole.fr,
      ],
      en: [
        'The Octojam is a 48-hour team game-making event (video games, board games or hybrids) held on the last weekend of October. Jammers discover the theme when the 48 hours start, and optional achievements add to the challenge.',
        `It falls on the night the clocks go back, so jammers can also take part in the ${a('https://0hgame.sos.gd/', '0h game jam')}: one hour of game-making between 2 a.m. (summer time) and 2 a.m. (winter time).`,
        ourRole.en,
      ],
      br: [
        "An Octojam zo un atalier a ginnig krouiñ c'hoarioù a-skipailh e-pad 48 eurvezh, e stumm c'hoari video, c'hoari taolenn pe stumm kemmesk, e-pad dibenn-sizhun diwezhañ miz Here. Un tem a vez roet d'ar jammers e deroù an 48 eurvezh krouiñ, ha kalz palioù dibab a c'hall bezañ tizhet war bep c'hoari evit ouzhpennañ diaester.",
        `Dibar eo ar jam-mañ rak c'hoarvezout a ra pa cheñch an eur. Kinniget e vez d'ar jammers kemer perzh, e-kreiz an Octojam, er ${a('https://0hgame.sos.gd/', '0h game jam')}, un atalier un eurvezh etre 2e (eur an hañv) ha 2e (eur ar goañv) diouzh ar mintin.`,
        ourRole.br,
      ],
    },
    editions: [
      { year: '2026', slug: 'octojam-2026-stunjam-edition' },
      { year: '2025', slug: 'octojam-2025-stunjam-edition' },
      { year: '2024', slug: 'octojam-2024' },
      { year: '2022', slug: 'octojam-2022' },
      { year: '2021', slug: 'octojam-2021' },
      { year: '2020', slug: 'octojam-2020' },
      { year: '2019', slug: 'octojam-2019' },
      { year: '2018', slug: 'octojam-1-la-game-jam-rennaise-d-octobre-2018' },
    ],
  },
  {
    id: 'bbq-jam',
    name: 'BBQ Jam',
    thumbnail: 'portfolio/bbq-jam-thumbnail.png',
    photo: 'portfolio/bbq-jam-full.jpg',
    role: organising,
    body: {
      fr: [
        'La BBQ Jam est un atelier qui propose de créer des jeux en équipe pendant 48 h, sous format jeu vidéo, jeu de plateau ou de forme hybride, qui se déroule en été. Un thème est présenté au début des 48 h de création aux jammers. Par ailleurs, de nombreux succès optionnels peuvent être réalisés sur chacun des jeux afin de pimenter la difficulté de la création.',
        ourRole.fr,
      ],
      en: [
        'The BBQ Jam is a 48-hour team game-making event (video games, board games or hybrids) held in the summer. Jammers discover the theme when the 48 hours start, and optional achievements add to the challenge.',
        ourRole.en,
      ],
      br: [
        "Ar BBQ Jam zo un atalier a ginnig krouiñ c'hoarioù a-skipailh e-pad 48 eurvezh, e stumm c'hoari video, c'hoari taolenn pe stumm kemmesk, e-pad an hañv. Un tem a vez roet d'ar jammers e deroù an 48 eurvezh krouiñ, ha kalz palioù dibab a c'hall bezañ tizhet war bep c'hoari evit ouzhpennañ diaester.",
        ourRole.br,
      ],
    },
    editions: [
      { year: '2025', slug: 'bbq-jam-2025' },
      { year: '2024', slug: 'bbq-jam-2024' },
      { year: '2023', slug: 'bbq-jam-creation-de-jeux-en-48h-2023' },
    ],
  },
];

const byId = (id: string) => {
  const project = projects.find((p) => p.id === id);
  if (!project) throw new Error(`No project ${id}`);
  return project;
};

export const stunfest = byId('stunfest');
export const STUNFEST_URL = STUNFEST;

export type Season = 'winter' | 'spring' | 'summer' | 'autumn';

export type Jam = Project & {
  season: Season;
  /** One line for the card. */
  summary: Localized;
  /** Recognises this jam's events in the agenda, by name. */
  match: RegExp;
};

// One jam per season, in the order of the year.
export const jams: Jam[] = [
  {
    ...byId('ggj'),
    season: 'winter',
    summary: {
      fr: '48 h de création en même temps que le monde entier, fin janvier.',
      en: '48 hours of game-making alongside the whole world, in late January.',
      br: "48 eurvezh krouiñ asambles gant ar bed a-bezh, e dibenn miz Genver.",
    },
    match: /global game jam/i,
  },
  {
    ...byId('stunjam'),
    season: 'spring',
    summary: {
      fr: 'La jam du Stunfest : les jeux créés sont exposés au festival.',
      en: "Stunfest's own jam: the games made are shown at the festival.",
      br: "Jam ar Stunfest : diskouezet e vez ar c'hoarioù krouet er gouel.",
    },
    match: /^stunjam/i,
  },
  {
    ...byId('bbq-jam'),
    season: 'summer',
    summary: {
      fr: "La jam de l'été : 48 h de création de jeux en équipe.",
      en: 'The summer jam: 48 hours of team game-making.',
      br: "Jam an hañv : 48 eurvezh krouiñ c'hoarioù a-skipailh.",
    },
    match: /bbq jam/i,
  },
  {
    ...byId('octojam'),
    season: 'autumn',
    summary: {
      fr: "Le dernier week-end d'octobre, avec la 0h game jam au changement d'heure.",
      en: 'The last weekend of October, with the 0h game jam when the clocks go back.',
      br: 'Dibenn-sizhun diwezhañ miz Here, gant ar 0h game jam pa cheñch an eur.',
    },
    match: /octojam/i,
  },
];

export const eventUrl = (slug: string) => `${COMMUNITY}/event/${slug}`;

/** The season of the jam an event belongs to, from its name. */
export const seasonOf = (name: string): Season | null => jams.find((jam) => jam.match.test(name))?.season ?? null;
