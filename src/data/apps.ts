export type Country = 'PL' | 'JP';
export type Section = 'mustHave' | 'food' | 'travel' | 'other';
export type Category = 'taxi' | 'esim' | 'finance' | 'food' | 'mobility' | 'security' | 'shopping' | 'activities';

export interface AppDef {
  /** Stable identifier, also used as the Redis key suffix */
  id: string;
  /** Countries whose page should feature this app */
  countries: Country[];
  /** Which themed section of a country page this app belongs to */
  section: Section;
  category: Category;
  /** Display name of the app/brand */
  name: string;
  /** Brand color used for the card accent */
  color: string;
  /** Fallback promo code shown until an admin sets a real one */
  defaultCode: string;
  /** Fallback link (app store / website) opened after the code is copied */
  defaultUrl: string;
  /** Translation key used to look up the marketing copy in the dictionaries */
  i18nKey: string;
}

export const apps: AppDef[] = [
  {
    id: 'bolt',
    countries: ['PL'],
    section: 'travel',
    category: 'taxi',
    name: 'Bolt',
    color: '#FFC244',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://bolt.eu/en/rider-promo/',
    i18nKey: 'bolt',
  },
  {
    id: 'uber',
    countries: ['PL'],
    section: 'travel',
    category: 'taxi',
    name: 'Uber',
    color: '#FFC244',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://www.uber.com/pl/en/',
    i18nKey: 'uber',
  },
  {
    id: 'freenow',
    countries: ['PL'],
    section: 'mustHave',
    category: 'taxi',
    name: 'FREENOW',
    color: '#FFC244',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://www.free-now.com/pl/',
    i18nKey: 'freenow',
  },
  {
    id: 'yesim_pl',
    countries: ['PL'],
    section: 'mustHave',
    category: 'esim',
    name: 'Yesim',
    color: '#FFC244',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://yesim.app/',
    i18nKey: 'yesim',
  },
  {
    id: 'yesim_jp',
    countries: ['JP'],
    section: 'mustHave',
    category: 'esim',
    name: 'Yesim',
    color: '#FFC244',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://yesim.app/',
    i18nKey: 'yesim',
  },
  {
    id: 'revolut',
    countries: ['PL', 'JP'],
    section: 'mustHave',
    category: 'finance',
    name: 'Revolut',
    color: '#FFC244',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://www.revolut.com/',
    i18nKey: 'revolut',
  },
  {
    id: 'mbank',
    countries: ['PL'],
    section: 'mustHave',
    category: 'finance',
    name: 'mBank',
    color: '#FFC244',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://www.mbank.pl/',
    i18nKey: 'mbank',
  },
  {
    id: 'wise',
    countries: ['PL', 'JP'],
    section: 'other',
    category: 'finance',
    name: 'Wise',
    color: '#FFC244',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://wise.com/',
    i18nKey: 'wise',
  },
  {
    id: 'glovo',
    countries: ['PL'],
    section: 'food',
    category: 'food',
    name: 'Glovo',
    color: '#FFC244',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://glovoapp.com/',
    i18nKey: 'glovo',
  },
  {
    id: 'g2a',
    countries: ['PL', 'JP'],
    section: 'other',
    category: 'shopping',
    name: 'G2A',
    color: '#FFC244',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://www.g2a.com/',
    i18nKey: 'g2a',
  },
  {
    id: 'wolt',
    countries: ['PL'],
    section: 'food',
    category: 'food',
    name: 'Wolt',
    color: '#FFC244',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://wolt.com/',
    i18nKey: 'wolt',
  },
  {
    id: 'lisek',
    countries: ['PL'],
    section: 'other',
    category: 'finance',
    name: 'Lisek',
    color: '#FFC244',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://lisek.app/',
    i18nKey: 'lisek',
  },
  {
    id: 'lime',
    countries: ['PL'],
    section: 'travel',
    category: 'mobility',
    name: 'Lime',
    color: '#FFC244',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://www.li.me/',
    i18nKey: 'lime',
  },
  {
    id: 'japanwireless',
    countries: ['JP'],
    section: 'mustHave',
    category: 'esim',
    name: 'Japan Wireless',
    color: '#FFC244',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://www.japan-wireless.com/',
    i18nKey: 'japanwireless',
  },
  {
    id: 'klook',
    countries: ['JP'],
    section: 'travel',
    category: 'activities',
    name: 'Klook',
    color: '#FFC244',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://www.klook.com/',
    i18nKey: 'klook',
  },
  {
    id: 'getyourguide',
    countries: ['JP'],
    section: 'travel',
    category: 'activities',
    name: 'GetYourGuide',
    color: '#FFC244',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://www.getyourguide.com/',
    i18nKey: 'getyourguide',
  },
];

export const countries: { code: Country; i18nKey: 'poland' | 'japan' }[] = [
  { code: 'PL', i18nKey: 'poland' },
  { code: 'JP', i18nKey: 'japan' },
];

export const sectionOrder: Section[] = ['mustHave', 'travel', 'food', 'other'];

export function appsByCountry(country: Country): AppDef[] {
  return apps.filter((app) => app.countries.includes(country));
}

export function appsBySection(country: Country, section: Section): AppDef[] {
  return apps.filter((app) => app.countries.includes(country) && app.section === section);
}
