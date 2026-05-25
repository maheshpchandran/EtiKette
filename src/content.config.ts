import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Starlight owns the `docs` collection. Every page lives under
// src/content/docs/ as Markdown/MDX; its file path becomes its URL.
export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
