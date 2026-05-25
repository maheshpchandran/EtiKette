---
title: Contribute
description: How to add or correct a dining-etiquette guide on EtiKette. No coding required — just Markdown.
lastUpdated: 2026-05-25
---

EtiKette grows through contributions from people who know their region's food culture. You don't need to be a developer — every guide is a plain Markdown file.

## Three ways to help

- **Fix or refine a detail** on an existing page.
- **Add a topic** to a region that's already started.
- **Add a whole new region** (see the repository's `CONTRIBUTING.md`).

## How a page is written

Each guide lives at `src/content/docs/<region>/<topic>.md` and starts with a small block of frontmatter, then plain Markdown:

```yaml
---
title: The Sadya
description: How a Kerala feast is laid out on a banana leaf and eaten in courses.
sidebar:
  order: 1
lastUpdated: 2026-05-25
---
```

The file's path becomes its URL — `kerala/sadya.md` → `/kerala/sadya/` — and it appears automatically in the sidebar.

## Callouts

Use Starlight's asides — no components to import:

```markdown
:::caution[🧼 Hygiene note]
Shared water tumblers spread germs. Use individual glasses instead.
:::

:::tip[Start here]
Begin with parippu and ghee over rice.
:::
```

Available types: `note`, `tip`, `caution`, `danger`. We use **`caution` for hygiene notes**, `note` for traditions and regional variations, and `tip` for practical advice.

## House style

- **Describe, don't prescribe.** Record what people do; avoid “you must”.
- **Name the variation.** Say when a custom differs by community, faith, or family.
- **Cite where you can.** Add a “Sources & further reading” section at the end.
- **Be respectful about hygiene.** Explain the risk and a kinder, safer option — never mock.

## Submitting

1. Fork the repository and create a branch.
2. Add or edit the Markdown file(s). Run `npm run dev` to preview locally.
3. Open a pull request describing your change and any sources.

See **[CONTRIBUTING.md](https://github.com/maheshpchandran/EtiKette/blob/main/CONTRIBUTING.md)** for the full workflow, including how to add a new region.
