# Contributing to EtiKette

Thank you for helping document how India eats! EtiKette grows through people who
know their region's food culture. **You don't need to be a developer** — every
guide is a plain Markdown file.

## Ways to help

1. **Fix or refine a detail** on an existing page.
2. **Add a topic** to a region that's already started.
3. **Add a whole new region.**

## How content is organised

Each topic lives at:

```
src/content/regions/<region>/<topic>.md
```

For example, `src/content/regions/kerala/sadya.mdx`. The file's path becomes its
URL: `/regions/kerala/sadya/`.

- Use `.md` for normal prose.
- Use `.mdx` only if you need to embed a component (e.g. the sadya leaf diagram).

## Frontmatter

Every file starts with a small frontmatter block (validated against
`src/content.config.ts`):

```yaml
---
title: The Sadya              # required — page heading
summary: One-sentence description used on cards and in search results.  # required
order: 1                      # sort order within the region (overview = 0)
icon: "🍛"                    # optional emoji for the topic card
tags: [sadya, feast]          # optional
sources:                      # optional — cite where you can
  - label: "Sadya — Wikipedia"
    url: https://en.wikipedia.org/wiki/Sadya
lastUpdated: 2026-05-25       # date you last reviewed the content
draft: false                  # set true to hide from listings
---
```

## Callouts (in plain Markdown)

Wrap a block in a directive — no imports needed:

```markdown
:::hygiene
Shared water tumblers spread germs. Offer individual glasses instead.
:::

:::tip[Start here]
Begin with parippu and ghee over rice.
:::
```

Available types: `tip`, `hygiene`, `tradition`, `variation`. The optional
`[Custom label]` overrides the default heading.

## Adding a new region

1. Add an entry to `src/data/regions.ts` with `status: 'published'`.
2. Create `src/content/regions/<region>/overview.md` (use `order: 0`).
3. Add topic files. Mirroring Kerala's set is a good starting point:
   the feast, eating by hand, serving & hosting, hygiene, festivals &
   occasions, do's & don'ts, glossary.

That's it — the region hub, navigation, and routing are generated automatically.

## House style

- **Describe, don't prescribe.** Record what people *do*; avoid "you must".
- **Name the variation.** Say when a custom differs by community, faith, region,
  or family. Don't present one group's practice as the whole region's.
- **Cite where you can.** Add references to the `sources` list.
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
