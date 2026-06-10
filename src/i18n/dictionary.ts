export interface AppCopy {
  tagline: string;
  description: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  intro: {
    taxiHeading: string;
    taxiText: string;
    esimHeading: string;
    esimText: string;
  };
  countries: {
    poland: string;
    japan: string;
    polandIntro: string;
    japanIntro: string;
  };
  card: {
    codeLabel: string;
    copyButton: string;
    copied: string;
    visit: string;
    updated: string;
  };
  apps: {
    bolt: AppCopy;
    uber: AppCopy;
    freenow: AppCopy;
    yesim: AppCopy;
    yesimJp: AppCopy;
    go: AppCopy;
  };
  faq: {
    heading: string;
    items: { q: string; a: string }[];
  };
  footer: {
    disclaimer: string;
    rights: string;
  };
  nav: {
    selectLanguage: string;
  };
}
