import type { Localized } from '../i18n';

export type Member = {
  first: string;
  last: string;
  photo: string;
  group: 'bureau' | 'ca' | 'members';
  tagline: Localized;
  links?: { kind: 'x' | 'github' | 'bluesky'; href: string }[];
};

export const team: Member[] = [
  {
    first: 'Alexis',
    last: 'Launay',
    photo: 'team/alexis.jpg',
    group: 'bureau',
    tagline: { fr: 'Japon, punk et tartiflette', en: 'Japan, punk and tartiflette', br: 'Japan, punk ha tartiflette' },
    links: [
      { kind: 'x', href: 'https://twitter.com/YoruNoHikage' },
      { kind: 'github', href: 'https://github.com/YoruNoHikage' },
    ],
  },
  {
    first: 'Christopher',
    last: 'Humphries',
    photo: 'team/christopher.jpg',
    group: 'bureau',
    tagline: { fr: "L'Anglais posh sauce Marmite©", en: 'The posh Englishman, Marmite© sauce', br: 'Ar saozon posh lipig Marmite©' },
    links: [
      { kind: 'x', href: 'https://twitter.com/egleek' },
      { kind: 'github', href: 'https://github.com/engleek' },
    ],
  },
  {
    first: 'Etienne',
    last: 'Réhault',
    photo: 'team/etienne.jpg',
    group: 'bureau',
    tagline: { fr: 'Créateur de logos depuis 1963', en: 'Logo maker since 1963', br: 'Krouer logos abaoe 1963' },
    links: [{ kind: 'x', href: 'https://twitter.com/urmlfou' }],
  },
  {
    first: 'Vincent',
    last: 'Poesmann',
    photo: 'team/vincent.png',
    group: 'ca',
    tagline: { fr: 'Quart de cercleur à la retraite', en: 'Retired quarter-circler', br: "Kard kelc'hier war al leve" },
  },
  {
    first: 'Nathan',
    last: 'Chavry',
    photo: 'team/nathan.jpeg',
    group: 'ca',
    tagline: { fr: "Murmure à l'oreille du métal", en: 'The metal whisperer', br: 'Mouskomz a ra e skouarn ar metal' },
  },
  {
    first: 'Jean-Félix',
    last: 'Blandel',
    photo: 'team/jeff.png',
    group: 'ca',
    tagline: { fr: 'Le touriste', en: 'The tourist', br: 'An tourist' },
  },
  {
    first: 'François',
    last: 'Eoche',
    photo: 'team/francois.jpg',
    group: 'members',
    tagline: { fr: 'Casse-c▮▮▮e officiel', en: 'Official pain in the a▮▮', br: 'Torr-penn ofisiel' },
    links: [
      { kind: 'x', href: 'https://twitter.com/stvrsky' },
      { kind: 'github', href: 'https://github.com/feoche' },
    ],
  },
  {
    first: 'Florent',
    last: 'Berthelot',
    photo: 'team/florent.jpg',
    group: 'members',
    tagline: { fr: "L'homme au chapeau", en: 'The man in the hat', br: 'Den e dog' },
    links: [
      { kind: 'x', href: 'https://twitter.com/Aeden_' },
      { kind: 'github', href: 'https://github.com/Aeden-B' },
    ],
  },
  {
    first: 'Jean-Michel',
    last: 'Jam',
    photo: 'team/jmj.jpg',
    group: 'members',
    tagline: { fr: 'Membre honorable', en: 'Honourable member', br: 'Ezel a enor' },
    links: [
      { kind: 'x', href: 'https://twitter.com/IndieColle' },
      { kind: 'github', href: 'https://github.com/indie-collective' },
    ],
  },
];
