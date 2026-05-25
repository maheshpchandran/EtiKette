# EtiKette

**A living, open-source guide to regional dining etiquette across India, starting with Kerala.**

🔗 **Live site:** https://etikette.in

India has no single table manner. What counts as polite changes from state to
state, community to community, even household to household. **EtiKette**
documents how people actually eat, serve, and celebrate food (the layout of a
banana-leaf *sadya*, the etiquette of eating by hand, who gets served first),
and, where a beloved tradition carries a real health risk, it flags a more
**hygienic** alternative, respectfully.

## Tech stack

- **[Astro](https://astro.build)** + **[Starlight](https://starlight.astro.build)**,
  the official Astro docs theme: sidebar navigation, full-text search
  (Pagefind), dark/light mode, and accessibility out of the box.
- Content authored in **Markdown / MDX**; no coding required to contribute.
- Hygiene/tradition notes use Starlight **asides** (`:::caution`, `:::note`,
  `:::tip`).
- Hosted on **GitHub Pages** (custom domain `etikette.in`), deployed by GitHub
  Actions on every push to `main`.

## Local development

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321
npm run build    # build the static site into dist/
npm run preview  # preview the production build locally
```

Requires Node 18+ (developed on Node 22/25).

## Repository structure

```
src/
  content/docs/                 Markdown/MDX guides (the actual content)
    index.mdx                   Splash landing page
    about.md, contribute.md
    kerala/                     overview, sadya, hand-eating, serving-and-hosting,
                                hygiene, festivals-and-occasions, dos-and-donts, glossary
  content.config.ts             Starlight `docs` collection
  components/SadyaLeaf.astro    Labelled banana-leaf diagram (used in sadya.mdx)
  styles/starlight-custom.css   Theme overrides (banana-leaf accent, serif headings)
astro.config.mjs                Starlight config: title, sidebar, social, theming
public/                         favicon, CNAME (custom domain)
.github/workflows/deploy.yml    GitHub Pages deployment
```

## Contributing

Contributions are very welcome: fixing a detail, adding a topic, or adding a
whole new region. **You don't need to be a developer**; every guide is a plain
Markdown file. See **[CONTRIBUTING.md](CONTRIBUTING.md)** for the workflow,
frontmatter schema, callout syntax, and house style.

A note on accuracy: cultural customs vary and some are contested. Where a
convention is uncertain (e.g. which way to fold the banana leaf), we say so and
cite sources rather than stating it as fact.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages. The custom domain is kept via `public/CNAME`.
See CONTRIBUTING.md / the plan notes for the one-time DNS + Pages setup.

## License

[MIT](LICENSE) © 2026 Mahesh Premachandran.
