import type { PartialDictionary } from './index';

// Breton. Only the strings that already had a Breton translation on the old
// site are here: everything else falls back to French (see index.ts).
// Strings still to translate are listed by `npm run i18n:missing`.
const br: PartialDictionary = {
  nav: {
    association: 'Ar gevredigezh',
    team: 'Ar skipailh',
    resources: 'Media',
    join: 'Emezelit !',
  },
  hero: {
    join: 'Emezelit er gevredigezh',
    discord: "Adkavit ac'hanomp war Discord",
  },
  missions: {
    title: 'Ar gevredigezh',
    items: {
      stunfest: {
        text: "Unan eus darvoudoù brasañ d'ar bloaz evit an degemer hag ar kinnig an holl a blij dezho c'hoarioù video disalc'h.",
      },
      jams: {
        text: "Daeoù krouadenn c'hoari er skipailh gant un bevenn hag un tem roet.",
      },
      community: {
        text: "Binvioù evit lec'hiañ gwelloc'h oberour c'hoarioù video ha krompren ar gumuniezh c'hoari disalc'h.",
      },
    },
  },
  agenda: {
    title: 'Darvoudoù da zont',
    lead: 'Emgavioù ar gevredigezh da zont !',
  },
  team: {
    title: 'Ar skipailh',
    lead: "Ar skipailh winners prest truvliañ deoc'h dindan arouez c'hoarioù video.",
  },
  resources: {
    title: 'Media ha Dafar',
    lead: "Evit gellout lakaat war wel hon c'hevredigezh brav.",
    items: {
      jammerGuide: 'Sturlevr chom bev ar jammer',
      stunfestGuide: "Sturlevr chom bev an hini dizalc'h e Stunfest",
      statutes: 'Statudoù',
      minutes: 'Danevell emvod bonreizhel',
      rules: 'Reolennoù diabarzh',
    },
    docLang: 'FR',
  },
  join: {
    title: 'Emezelit er gevredigezh',
    contact: 'Kit e darempred !',
    discord: "Adkavit ac'hanomp war Discord",
    newsletter: 'Lizher-kelaouiñ vloaziek',
  },
  date: {
    locale: 'br',
  },
};

export default br;
