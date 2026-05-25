// Region-level metadata. The dining guidance itself lives in Markdown under
// src/content/regions/<slug>/ — this file only describes the region as a
// whole (its name, blurb, and whether content exists yet).
//
// To add a new region: add an entry here with status 'published', then create
// src/content/regions/<slug>/overview.md plus topic pages. See CONTRIBUTING.md.

export interface Region {
  /** URL slug, must match the content folder name. */
  slug: string;
  /** Display name in English. */
  name: string;
  /** Name in the local script, if applicable. */
  localName?: string;
  /** State / area within India. */
  area: string;
  /** Short blurb for the region card and hub hero. */
  blurb: string;
  /** 'published' regions have content; 'planned' show as "coming soon". */
  status: 'published' | 'planned';
  /** Decorative emoji for cards. */
  emoji: string;
}

export const regions: Region[] = [
  {
    slug: 'kerala',
    name: 'Kerala',
    localName: 'കേരളം',
    area: 'South India',
    blurb:
      'Banana-leaf sadya feasts, eating by hand, and the unhurried rhythm of being served on Kerala’s Malabar and backwater tables.',
    status: 'published',
    emoji: '🌴',
  },
  {
    slug: 'tamil-nadu',
    name: 'Tamil Nadu',
    localName: 'தமிழ்நாடு',
    area: 'South India',
    blurb: 'Meals served on the leaf, filter coffee rituals, and temple-town dining customs.',
    status: 'planned',
    emoji: '🪔',
  },
  {
    slug: 'west-bengal',
    name: 'West Bengal',
    localName: 'পশ্চিমবঙ্গ',
    area: 'East India',
    blurb: 'Course-by-course serving, the place of fish, and the etiquette of the Bengali thala.',
    status: 'planned',
    emoji: '🐟',
  },
  {
    slug: 'punjab',
    name: 'Punjab',
    localName: 'ਪੰਜਾਬ',
    area: 'North India',
    blurb: 'Langar traditions, communal hospitality, and the generosity of the Punjabi table.',
    status: 'planned',
    emoji: '🌾',
  },
];

export const publishedRegions = regions.filter((r) => r.status === 'published');

export function getRegion(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}
