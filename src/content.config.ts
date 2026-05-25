import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each Markdown file under src/content/regions/<region>/<topic>.md becomes
// an entry whose `id` is "<region>/<topic>" (e.g. "kerala/sadya").
// Contributors only ever write Markdown + this frontmatter — no code.
const regions = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/regions' }),
  schema: z.object({
    // Page title shown as the <h1> and in navigation.
    title: z.string(),
    // One-sentence summary used on cards and for SEO/meta description.
    summary: z.string(),
    // Sort order within a region (lower = earlier). `overview` should be 0.
    order: z.number().default(99),
    // Emoji shown on the topic card. Optional, purely decorative.
    icon: z.string().optional(),
    // Free-form tags for future filtering/search.
    tags: z.array(z.string()).default([]),
    // Sources / further reading. `url` optional so books can be cited too.
    sources: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url().optional(),
        })
      )
      .default([]),
    // When the content was last reviewed for accuracy.
    lastUpdated: z.coerce.date().optional(),
    // Hide a draft from listings without deleting it.
    draft: z.boolean().default(false),
  }),
});

export const collections = { regions };
