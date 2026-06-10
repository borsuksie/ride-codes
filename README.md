# RideCodes

Lekka, wielojęzyczna strona z kodami promocyjnymi do aplikacji przewozowych (Bolt, Uber, FREENOW, GO) i pakietów eSIM (Yesim) dla Polski i Japonii.

## Stack

- [Astro](https://astro.build) (SSR) + adapter Vercel
- [Upstash Redis](https://upstash.com) (REST) — przechowuje aktualne kody/linki
- 11 języków: PL, EN, DE, FR, ES, IT, RU, JA, KO, PT, ZH

## Konfiguracja

1. Skopiuj `.env.example` do `.env` i uzupełnij:
   - `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` — dane z darmowej bazy na [upstash.com](https://upstash.com) (Redis → REST API)
   - `ADMIN_PASSWORD` — hasło do panelu `/admin`
   - `ADMIN_SESSION_SECRET` — losowy długi ciąg (np. `openssl rand -hex 32`)
2. `npm install`
3. `npm run dev` — uruchamia stronę na `http://localhost:4321`

Bez skonfigurowanego Upstash strona działa i pokazuje domyślne kody/linki z `src/data/apps.ts`.

## Struktura treści

- `src/data/apps.ts` — lista aplikacji (nazwa, kraj, kolor, domyślny kod/link)
- `src/i18n/locales/*.ts` — teksty UI i opisy aplikacji w każdym języku
- `src/views/HomePage.astro` — układ strony głównej (wspólny dla wszystkich języków)
- `src/pages/{lang}/index.astro` — cienkie strony per język (`/en/`, `/pl/`, `/ja/`, …)
- `src/lib/codes.ts` — odczyt/zapis aktualnych kodów w Redis

## Panel administratora

`/admin` — logowanie hasłem (`ADMIN_PASSWORD`), sesja w podpisanym ciasteczku.
`/admin/dashboard` — formularz do edycji kodu i linku dla każdej aplikacji. Zmiana zapisuje się od razu w Redis i jest widoczna na stronie przy następnym żądaniu (bez rebuildu).

## Wdrożenie na Vercel

1. Wypchnij repo na GitHub i zaimportuj w Vercel.
2. Ustaw zmienne środowiskowe (jak w `.env`) w ustawieniach projektu Vercel.
3. Ustaw `site` w `astro.config.mjs` na docelową domenę (obecnie `https://example.com`) — wpływa na sitemapę i hreflang.
4. Zaktualizuj domenę w `public/robots.txt`.

## SEO

- Każdy język ma własny URL (`/pl/`, `/en/`, …), `hreflang` i `canonical`.
- Dane strukturalne JSON-LD: `WebSite`, `ItemList` (oferty z kodami), `FAQPage`.
- `sitemap-index.xml` generowany automatycznie (z wykluczeniem `/admin`).
- `public/llms.txt` — opis strony dla asystentów AI / wyszukiwarek opartych na LLM.
