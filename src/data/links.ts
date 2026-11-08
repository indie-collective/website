export const COMMUNITY = 'https://community.indieco.xyz';
export const ORG_SLUG = 'indie-collective';
export const ORG_URL = `${COMMUNITY}/org/${ORG_SLUG}`;
/** The association's events, as an iCalendar feed, published by Community. */
export const CALENDAR_ICS = `${ORG_URL}/calendar.ics`;
/** Every event on Community. */
export const CALENDAR_ALL_ICS = `${COMMUNITY}/calendar.ics`;
export const CALENDAR_WEBCAL = CALENDAR_ICS.replace(/^https:/, 'webcal:');

export const HELLOASSO_WIDGET =
  'https://www.helloasso.com/associations/indie-collective/adhesions/adhesion-indie-collective/widget';
export const DISCORD = 'https://discord.gg/hH5J88z';
export const NEWSLETTER = 'http://eepurl.com/dvqJGT';
export const EMAIL = 'contact@indieco.xyz';
export const GITHUB = 'https://github.com/indie-collective';

export const socials = [
  { name: 'Bluesky', icon: 'bluesky', href: 'https://bsky.app/profile/indieco.xyz' },
  { name: 'Instagram', icon: 'instagram', href: 'https://instagram.com/indiecolle' },
  { name: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/@indie-collective' },
  { name: 'Twitch', icon: 'twitch', href: 'https://twitch.tv/indiecollective' },
  { name: 'TikTok', icon: 'tiktok', href: 'https://www.tiktok.com/@indiecollective' },
  { name: 'Threads', icon: 'threads', href: 'https://threads.net/@indiecolle' },
  { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/IndieColle' },
  { name: 'X', icon: 'x', href: 'https://twitter.com/IndieColle' },
  { name: 'GitHub', icon: 'github', href: GITHUB },
] as const;

export const documents = [
  { key: 'jammerGuide', href: 'https://docs.google.com/document/d/16qKkw3lNPnx7FlVRvOLUzJwy-ayaCZC4gSOS2PUk6fk' },
  { key: 'stunfestGuide', href: 'https://docs.google.com/document/d/15qN79Ns9Oa0KycDchI9Zv1NzyN5Ih62q11dULBSl1OU' },
  { key: 'statutes', href: 'https://drive.google.com/file/d/1IRQUGdonebgNEgSqgh7YOktBzWV0Q2n6' },
  { key: 'minutes', href: 'https://drive.google.com/file/d/1LU9FiIW-PR2eIlGevFP2QLVw08Zegw6k' },
  { key: 'rules', href: 'https://docs.google.com/document/d/1_9HkCRfgz7xjUfXDJbty1C82x3wezHQGmLNrUuUnYqc' },
] as const;

// White logo PNGs only exist for the version with the name.
export const logos = [
  { key: 'mark', dark: false, files: [['SVG', 'logo.svg'], ['PNG 500', 'logo_500.png'], ['PNG 2000', 'logo_2000.png']] },
  { key: 'text', dark: false, files: [['SVG', 'logo_with_text.svg'], ['PNG 500', 'logo_with_text_500.png'], ['PNG 2000', 'logo_with_text_2000.png']] },
  { key: 'markWhite', dark: true, files: [['SVG', 'logo_white.svg']] },
  { key: 'textWhite', dark: true, files: [['SVG', 'logo_with_text_white.svg'], ['PNG 500', 'logo_with_text_white_500.png'], ['PNG 2000', 'logo_with_text_white_2000.png']] },
] as const;
