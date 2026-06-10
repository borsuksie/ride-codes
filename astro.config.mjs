// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://travelcodes.app',
  output: 'server',
  adapter: vercel(),
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin') && !page.includes('/poland'),
      i18n: {
        defaultLocale: 'en',
        locales: {
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
        },
      },
    }),
  ],
});
