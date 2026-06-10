export type Country = 'PL' | 'JP';
export type Category = 'taxi' | 'esim';

export interface AppDef {
  /** Stable identifier, also used as the Redis key suffix */
  id: string;
  country: Country;
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
    country: 'PL',
    category: 'taxi',
    name: 'Bolt',
    color: '#34D07F',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://bolt.eu/en/rider-promo/',
    i18nKey: 'bolt',
  },
  {
    id: 'uber',
    country: 'PL',
    category: 'taxi',
    name: 'Uber',
    color: '#000000',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://www.uber.com/invite/',
    i18nKey: 'uber',
  },
  {
    id: 'freenow',
    country: 'PL',
    category: 'taxi',
    name: 'FREENOW',
    color: '#FFCC00',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://www.free-now.com/pl/',
    i18nKey: 'freenow',
  },
  {
    id: 'yesim_pl',
    country: 'PL',
    category: 'esim',
    name: 'Yesim',
    color: '#7C5CFC',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://yesim.app/',
    i18nKey: 'yesim',
  },
  {
    id: 'go_jp',
    country: 'JP',
    category: 'taxi',
    name: 'GO',
    color: '#1A1A1A',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://go.mo-t.com/',
    i18nKey: 'go',
  },
  {
    id: 'yesim_jp',
    country: 'JP',
    category: 'esim',
    name: 'Yesim',
    color: '#7C5CFC',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://yesim.app/',
    i18nKey: 'yesim',
  },
];

export const countries: { code: Country; i18nKey: string }[] = [
  { code: 'PL', i18nKey: 'poland' },
  { code: 'JP', i18nKey: 'japan' },
];

export function appsByCountry(country: Country): AppDef[] {
  return apps.filter((app) => app.country === country);
}
