export type Country = 'PL' | 'JP' | 'EXTRA';
export type Category = 'taxi' | 'esim' | 'finance' | 'food' | 'mobility' | 'security' | 'shopping';

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
    id: 'yesim_jp',
    country: 'JP',
    category: 'esim',
    name: 'Yesim',
    color: '#7C5CFC',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://yesim.app/',
    i18nKey: 'yesim',
  },
  {
    id: 'nordvpn',
    country: 'EXTRA',
    category: 'security',
    name: 'NordVPN',
    color: '#4687FF',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://nordvpn.com/',
    i18nKey: 'nordvpn',
  },
  {
    id: 'revolut',
    country: 'EXTRA',
    category: 'finance',
    name: 'Revolut',
    color: '#191C1F',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://www.revolut.com/',
    i18nKey: 'revolut',
  },
  {
    id: 'mbank',
    country: 'EXTRA',
    category: 'finance',
    name: 'mBank',
    color: '#000000',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://www.mbank.pl/',
    i18nKey: 'mbank',
  },
  {
    id: 'wise',
    country: 'EXTRA',
    category: 'finance',
    name: 'Wise',
    color: '#9FE870',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://wise.com/',
    i18nKey: 'wise',
  },
  {
    id: 'glovo',
    country: 'EXTRA',
    category: 'food',
    name: 'Glovo',
    color: '#FFC244',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://glovoapp.com/',
    i18nKey: 'glovo',
  },
  {
    id: 'g2a',
    country: 'EXTRA',
    category: 'shopping',
    name: 'G2A',
    color: '#F05F40',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://www.g2a.com/',
    i18nKey: 'g2a',
  },
  {
    id: 'wolt',
    country: 'EXTRA',
    category: 'food',
    name: 'Wolt',
    color: '#00C2E8',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://wolt.com/',
    i18nKey: 'wolt',
  },
  {
    id: 'lisek',
    country: 'EXTRA',
    category: 'finance',
    name: 'Lisek',
    color: '#FF6B6B',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://lisek.app/',
    i18nKey: 'lisek',
  },
  {
    id: 'lime',
    country: 'EXTRA',
    category: 'mobility',
    name: 'Lime',
    color: '#00B14F',
    defaultCode: 'WELCOME',
    defaultUrl: 'https://www.li.me/',
    i18nKey: 'lime',
  },
];

export const countries: { code: Country; i18nKey: string }[] = [
  { code: 'PL', i18nKey: 'poland' },
  { code: 'JP', i18nKey: 'japan' },
];

export function appsByCountry(country: Country): AppDef[] {
  return apps.filter((app) => app.country === country);
}

export function extraApps(): AppDef[] {
  return apps.filter((app) => app.country === 'EXTRA');
}
