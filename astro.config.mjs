import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://indieco.xyz',
  // Pages are folders (/en/, /br/), served as-is by GitHub Pages.
  trailingSlash: 'ignore',
});
