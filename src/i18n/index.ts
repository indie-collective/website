import fr from './fr';
import en from './en';
import br from './br';

export type Dictionary = typeof fr;

type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] };
export type PartialDictionary = DeepPartial<Dictionary>;

export const languages = {
  fr: { label: 'Français', short: 'FR', path: '/' },
  en: { label: 'English', short: 'EN', path: '/en/' },
  br: { label: 'Brezhoneg', short: 'BR', path: '/br/' },
} as const;

export type Lang = keyof typeof languages;

const merge = <T extends object>(base: T, over: DeepPartial<T> | undefined): T => {
  if (!over) return base;
  const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const [key, value] of Object.entries(over)) {
    const current = (base as Record<string, unknown>)[key];
    out[key] =
      value && typeof value === 'object' && current && typeof current === 'object'
        ? merge(current as object, value as DeepPartial<object>)
        : value;
  }
  return out as T;
};

// French is the source language: a missing string falls back to it.
export const dictionaries: Record<Lang, Dictionary> = {
  fr,
  en,
  br: merge(fr, br),
};

/** Text that may exist in several languages; French is always there. */
export type Localized = { fr: string } & Partial<Record<Exclude<Lang, 'fr'>, string>>;

/** The text in `lang`, or French, with the language it's actually in. */
export const pick = (text: Localized, lang: Lang): { text: string; lang: Lang } =>
  text[lang] ? { text: text[lang]!, lang } : { text: text.fr, lang: 'fr' };
