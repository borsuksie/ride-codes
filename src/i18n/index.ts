import { en } from './locales/en';
import { pl } from './locales/pl';
import { de } from './locales/de';
import { fr } from './locales/fr';
import { es } from './locales/es';
import { it } from './locales/it';
import { ru } from './locales/ru';
import { ja } from './locales/ja';
import { ko } from './locales/ko';
import { pt } from './locales/pt';
import { zh } from './locales/zh';
import type { Dictionary, AppCopy } from './dictionary';
import { type Locale, defaultLocale } from './locales';

export * from './locales';
export type { Dictionary, AppCopy };

const dictionaries: Record<Locale, Dictionary> = { en, pl, de, fr, es, it, ru, ja, ko, pt, zh };

export function getDictionary(locale: string): Dictionary {
  return dictionaries[(locale as Locale)] ?? dictionaries[defaultLocale];
}
