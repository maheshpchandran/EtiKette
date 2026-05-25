// @ts-check
import { defineConfig } from 'astro/config';
import remarkDirective from 'remark-directive';
import { remarkCallouts } from './src/lib/remark-callouts.mjs';

import mdx from '@astrojs/mdx';

// EtiKett(e) is served from the custom domain https://etikette.in, so it
// deploys at the site root (no `base` subpath). The repo is named "EtiKette".
// GitHub Pages needs the public/CNAME file to keep the custom domain on deploy.
export default defineConfig({
  site: 'https://etikette.in',
  trailingSlash: 'ignore',

  markdown: {
    // remarkDirective parses `:::name` blocks; remarkCallouts turns the ones
    // we recognise (tip / hygiene / tradition / variation) into styled asides.
    remarkPlugins: [remarkDirective, remarkCallouts],
    shikiConfig: {
      theme: 'github-light',
    },
  },

  integrations: [mdx()],
});