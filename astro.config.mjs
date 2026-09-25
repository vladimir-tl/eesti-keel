import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The live domain: used for canonical, hreflang, sitemap, robots.txt and social previews.
const site = 'https://eestikeeletest.ee';

export default defineConfig({
  site,
  // Clean URLs without a trailing slash (/ru/topics) — the same form every internal link uses.
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      // The root page only redirects to /ru.
      filter: (page) => page !== site && page !== `${site}/`,
      i18n: { defaultLocale: 'ru', locales: { ru: 'ru', en: 'en' } },
    }),
  ],
});
