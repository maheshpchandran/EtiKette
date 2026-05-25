# Contributing to EtiKette

Thank you for helping document how India eats! EtiKette grows through people who
know their region's food culture. **You don't need to be a developer** — every
guide is a plain Markdown file, and the site is built with
[Astro Starlight](https://starlight.astro.build/).

## Ways to help

1. **Fix or refine a detail** on an existing page.
2. **Add a topic** to a region that's already started.
3. **Add a whole new region.**

## How content is organised

Each topic lives at:

```
src/content/docs/<region>/<topic>.md
```

For example, `src/content/docs/kerala/sadya.mdx`. The file's path becomes its
URL (`/kerala/sadya/`) and it appears automatically in the sidebar.

- Use `.md` for normal prose.
- Use `.mdx` only if you need to embed a component (e.g. the sadya leaf diagram).

## Frontmatter

Every file starts with Starlight frontmatter:

```yaml
---
title: The Sadya                       # required — page heading & <title>
description: One-sentence summary used for SEO and link previews.
sidebar:
  order: 2                             # position within the region (overview = 1)
  label: Custom sidebar label          # optional; defaults to the title
lastUpdated: 2026-05-25                # date you last reviewed the content
---
```

## Callouts (Starlight asides)

Use Starlight's asides — no imports needed:

```markdown
:::caution[🧼 Hygiene note]
Shared water tumblers spread germs. Use individual glasses instead.
:::

:::tip[Start here]
Begin with parippu and ghee over rice.
:::
```

Our conventions for the four built-in types:

| Type | Use for | We label it |
| --- | --- | --- |
| `caution` | a health/hygiene risk + safer alternative | `🧼 Hygiene note` |
| `note` | a tradition, or a regional/community variation | `🪔 Tradition` / `🧭 Regional variation` |
| `tip` | practical, in-the-moment advice | (your own title) |
| `danger` | reserve for genuinely serious warnings | — |

## Sources

End each page with a section, and cite where you can:

```markdown
## Sources & further reading

- [Sadya — Wikipedia](https://en.wikipedia.org/wiki/Sadya)
```

## Adding a new region

1. Create the folder `src/content/docs/<region>/` and add an `overview.md`
   (`sidebar.order: 1`) plus topic files. Mirroring Kerala's set is a good
   start: the feast, eating by hand, serving & hosting, hygiene, festivals &
   occasions, do's & don'ts, glossary.
2. Add a sidebar group for it in `astro.config.mjs`:

   ```js
   sidebar: [
     { label: 'Kerala 🌴', items: [{ autogenerate: { directory: 'kerala' } }] },
     { label: 'Tamil Nadu 🪔', items: [{ autogenerate: { directory: 'tamil-nadu' } }] },
     // …
   ]
   ```

## House style

- **Describe, don't prescribe.** Record what people *do*; avoid "you must".
- **Name the variation.** Say when a custom differs by community, faith, region,
  or family. Don't present one group's practice as the whole region's.
- **Cite where you can.** Add references to a "Sources & further reading" section.
- **Be respectful about hygiene.** Explain the risk and a kinder, safer
  alternative — never mock a tradition.
- Keep a warm, plain, welcoming tone.

## Submitting a change

1. **Fork** the repository and create a branch.
2. Make your edits. Preview locally:
   ```bash
   npm install
   npm run dev
   ```
3. Make sure it builds: `npm run build`.
4. Open a **pull request** describing your change and citing any sources.

By contributing, you agree your contributions are licensed under the project's
[MIT License](LICENSE).
