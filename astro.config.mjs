// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// EtiKette is served from the custom domain https://etikette.in (site root, no
// `base`). GitHub Pages keeps the domain via public/CNAME. Starlight provides
// the layout, sidebar nav, search, and dark mode; .mdx support is built in.
export default defineConfig({
  site: 'https://etikette.in',
  integrations: [
    starlight({
      title: 'EtiKette',
      description:
        'A living, open-source guide to regional dining etiquette across India, starting with Kerala.',
      favicon: '/favicon.svg',
      customCss: ['./src/styles/starlight-custom.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/maheshpchandran/EtiKette',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/maheshpchandran/EtiKette/edit/main/',
      },
      lastUpdated: true,
      sidebar: [
        {
          label: 'Kerala 🌴',
          items: [{ autogenerate: { directory: 'kerala' } }],
        },
        {
          label: 'About the project',
          items: [
            { label: 'About EtiKette', link: '/about/' },
            { label: 'Contribute', link: '/contribute/' },
          ],
        },
      ],
    }),
  ],
});
