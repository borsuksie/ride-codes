export const locales = ['en', 'pl', 'de', 'fr', 'es', 'it', 'ru', 'ja', 'ko', 'pt', 'zh'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

// Native names shown in the language switcher
export const localeNames: Record<Locale, string> = {
  en: 'English',
  pl: 'Polski',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano',
  ru: 'Русский',
  ja: '日本語',
  ko: '한국어',
  pt: 'Português',
  zh: '中文',
};

// BCP 47 tags used for hreflang / og:locale
export const localeTags: Record<Locale, string> = {
  en: 'en-US',
  pl: 'pl-PL',
  de: 'de-DE',
  fr: 'fr-FR',
  es: 'es-ES',
  it: 'it-IT',
  ru: 'ru-RU',
  ja: 'ja-JP',
  ko: 'ko-KR',
  pt: 'pt-PT',
  zh: 'zh-CN',
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
