import type { PartialDictionary } from './index';

// Breton. The strings from the old site are kept; the rest was translated in
// November 2026 and should be reviewed by a Breton speaker. Anything missing
// falls back to French (see index.ts); `npm run i18n:missing` lists it.
const br: PartialDictionary = {
  meta: {
    title: "Indie Collective · Kumuniezh krouiñ c'hoarioù video e Roazhon",
    description:
      "Lusk kumuniezh ar c'hoarioù dizalc'h tro-dro da Roazhon : kenurzhiañ game jams, aozañ takad ar c'hoarioù dizalc'h er Stunfest ha Community, roll digor ar c'hoarioù dizalc'h.",
  },
  nav: {
    skip: "Mont d'an endalc'had",
    association: 'Ar gevredigezh',
    agenda: 'Deiziataer',
    jams: 'Jams',
    stunfest: 'Stunfest',
    podcast: 'Podkast',
    team: 'Ar skipailh',
    resources: 'Media',
    join: 'Emezelit',
    language: 'Yezh',
    menu: 'Lañser',
  },
  hero: {
    kicker: 'Indie Games & Jams · Roazhon',
    title: "Lakaat a reomp ar c'hoari dizalc'h da vevañ e Roazhon",
    next: 'Emgav da-heul',
    credit: "Luc'hskeudenn : Lila Bienvenu, Stunfest 2022",
    lead: "Indie Collective eo ar gevredigezh a aoz game jams Roazhon, a genaoz takad Indie ar Stunfest hag a ra war-dro Community, roll digor ar c'hoarioù dizalc'h.",
    join: 'Emezelit er gevredigezh',
    discord: "Adkavit ac'hanomp war Discord",
    photo: 'Takad Indie ar Stunfest, gwelet eus a-us',
  },
  missions: {
    title: 'Ar gevredigezh',
    lead: "Lakaat da vevañ ar gumuniezh gant peder c'hefridi",
    items: {
      stunfest: {
        title: 'Stunfest',
        text: "Unan eus darvoudoù brasañ d'ar bloaz evit an degemer hag ar kinnig an holl a blij dezho c'hoarioù video disalc'h.",
      },
      jams: {
        title: 'Jams',
        text: "Daeoù krouadenn c'hoari er skipailh gant un bevenn hag un tem roet.",
      },
      podcast: {
        title: 'Podkast',
        text: "Indie & Co : kulisoù krouidigezh ar c'hoarioù video, hag hentoù ar re a sav anezho.",
      },
      community: {
        title: 'Community',
        text: "Binvioù evit lec'hiañ gwelloc'h oberour c'hoarioù video ha krompren ar gumuniezh c'hoari disalc'h.",
      },
    },
  },
  agenda: {
    title: 'Darvoudoù da zont',
    lead: 'Darvoudoù ar gevredigezh, tennet eus Community',
    onlyOne:
      "N'eus nemet an emgav-mañ embannet evit ar mare. Koumanantit d'an deiziadur evit gwelet ar re all o tont.",
    subscribe: "Koumanantiñ d'an deiziadur",
    all: 'Gwelet pep tra war Community',
    empty: "Darvoud ebet embannet evit ar mare. Koumanantit d'an deiziadur evit chom hep c'hwitañ an hini da-heul.",
    unavailable: "N'eus ket bet gallet kargañ an deiziataer. Kavit hon darvoudoù war Community.",
    online: 'Enlinenn',
    canceled: 'Nullet',
    details: 'Munudoù',
  },
  jams: {
    title: 'Hor jams',
    lead: "Pevar game jam bep bloaz, unan dre goulzad. 48 eurvezh evit krouiñ ur c'hoari a-skipailh, war un tem roet, ha pa vefe ho jam kentañ pe get.",
    seasons: { winter: 'Goañv', spring: 'Nevezamzer', summer: 'Hañv', autumn: 'Diskar-amzer' },
    next: 'Embannadur da-heul',
    last: 'Embannadur diwezhañ',
    more: "Gouzout hiroc'h",
    close: 'Serriñ',
    editionCount: '{n} embannadur',
    editions: 'Embannadurioù war Community',
    allJams: 'Hor jams holl war Community',
  },
  stunfest: {
    kicker: 'Kenaozadur an takad Indie',
    title: 'Stunfest',
    lead: "Gouel sevenadurioù ar c'hoari video e Roazhon a zegemer ac'hanomp abaoe 2012 evit kenurzhiañ e dakad Indie : studioioù dizalc'h, staliadurioù, atalieroù hag an Indie Awards.",
    official: "Lec'hienn ofisiel ar Stunfest",
    indie: "An diskouezerien dizalc'h",
    next: 'Embannadur da-heul',
    more: 'Hor roll er Stunfest',
    editions: 'Embannadurioù war Community',
  },
  podcast: {
    kicker: 'Podkast',
    title: 'Indie & Co',
    lead: "Dizoloit kulisoù krouidigezh ur c'hoari video, hag hentoù personel ha micherel tud eus ar bed dizalc'h. E galleg.",
    listen: 'Selaou war',
    latest: 'Rannoù diwezhañ',
    episodes: '{n} rann',
    minutes: '{n} munut',
    cover: 'Golo ar podkast Indie & Co',
  },
  community: {
    kicker: 'Hon ostilh',
    title: "Community, roll digor ar c'hoarioù dizalc'h",
    lead: "C'hoarioù, studioioù, kevredigezhioù ha darvoudoù a-dreuz ar bed, en un diaz roadennoù digor a c'hall pep hini kreskiñ. Eno ivez emañ hon deiziataer.",
    cta: 'Digeriñ Community',
    links: {
      games: "C'hoarioù",
      studios: 'Studioioù',
      events: 'Darvoudoù',
      atlas: 'Atlas',
      org: 'Hor pajenn',
    },
  },
  team: {
    title: 'Ar skipailh',
    lead: "Ar skipailh winners prest truvliañ deoc'h dindan arouez c'hoarioù video",
    groups: {
      bureau: 'Burev',
      ca: 'Kuzul-merañ',
      members: 'Izili oberiant',
    },
    photoOf: "Luc'hskeudenn",
  },
  resources: {
    title: 'Media ha Dafar',
    lead: "Evit gellout lakaat war wel hon c'hevredigezh brav",
    docs: 'Teulioù',
    logos: 'Logoioù',
    items: {
      jammerGuide: 'Sturlevr chom bev ar jammer',
      stunfestGuide: "Sturlevr chom bev an hini dizalc'h e Stunfest",
      statutes: 'Statudoù',
      minutes: 'Danevell emvod bonreizhel',
      rules: 'Reolennoù diabarzh',
    },
    logoNames: {
      mark: 'Logo',
      text: 'Logo gant an anv',
      markWhite: 'Logo gwenn',
      textWhite: 'Logo gwenn gant an anv',
    },
    docLang: 'FR',
  },
  join: {
    title: 'Emezelit er gevredigezh',
    lead: "An emezeladur a skoazell ar jams hag an degemer evit an dizalc'hidi er Stunfest. Graet e vez enlinenn dre HelloAsso.",
    widgetTitle: 'Furmskrid emezeliñ HelloAsso',
    // Breton nouns stay singular after a number: 42 ezel, 187 den.
    members: {
      thisYear: { one: 'ezel e {year}', other: 'ezel e {year}' },
      allTime: { one: 'den en deus emezelet abaoe {since}', other: 'den o deus emezelet abaoe {since}' },
    },
    contact: 'Kit e darempred',
    discord: "Adkavit ac'hanomp war Discord",
    newsletter: 'Lizher-kelaouiñ vloaziek',
    email: 'Skrivañ ur postel',
  },
  footer: {
    rights: 'Indie Collective, kevredigezh lezenn 1901, Roazhon.',
    source: 'Kod mammenn',
  },
  date: {
    locale: 'br',
  },
};

export default br;
