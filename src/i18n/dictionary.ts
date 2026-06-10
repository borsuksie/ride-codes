export interface AppCopy {
  tagline: string;
  description: string;
}

export interface SectionCopy {
  heading: string;
  intro: string;
}

export interface CountryPageCopy {
  title: string;
  description: string;
  heading: string;
  intro: string;
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
    linkLabel: string;
    openLink: string;
  };
  apps: {
    bolt: AppCopy;
    uber: AppCopy;
    freenow: AppCopy;
    yesim: AppCopy;
    yesimJp: AppCopy;
    go: AppCopy;
    revolut: AppCopy;
    mbank: AppCopy;
    wise: AppCopy;
    glovo: AppCopy;
    g2a: AppCopy;
    wolt: AppCopy;
    lisek: AppCopy;
    lime: AppCopy;
    japanwireless: AppCopy;
    klook: AppCopy;
    getyourguide: AppCopy;
  };
  sections: {
    mustHave: SectionCopy;
    travel: SectionCopy;
    food: SectionCopy;
    other: SectionCopy;
  };
  countryPages: {
    poland: CountryPageCopy;
    japan: CountryPageCopy;
  };
  home: {
    heading: string;
    intro: string;
    visitCountry: string;
  };
  trust: SectionCopy;
  partners: {
    title: string;
    description: string;
    heading: string;
    intro: string;
    note: string;
    contactLabel: string;
  };
  faq: {
    heading: string;
    items: { q: string; a: string }[];
  };
  footer: {
    disclaimer: string;
    rights: string;
    partnersLink: string;
  };
  nav: {
    selectLanguage: string;
  };
}
