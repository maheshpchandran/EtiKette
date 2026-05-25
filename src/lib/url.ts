// Helper for building links that respect Astro's configured `base`.
// EtiKette is served from the root of etikette.in, so `BASE_URL` is `/` and
// these resolve to plain root paths. Routing links through `withBase()` keeps
// the site portable if a `base` subpath is ever reintroduced (e.g. a GitHub
// Pages project URL).

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/**
 * Join a path onto the site base.
 * - withBase('/')                 -> '/'
 * - withBase('regions/')          -> '/regions/'
 * - withBase('regions/kerala/')   -> '/regions/kerala/'
 * - withBase('favicon.svg')       -> '/favicon.svg'  (assets)
 *
 * Keep the trailing slash for page links and omit it for file assets.
 */
export function withBase(path = '/'): string {
  const clean = path.replace(/^\//, '');
  return clean ? `${BASE}/${clean}` : `${BASE}/`;
}

/** Convenience builder for a region topic page. */
export function topicHref(region: string, topic: string): string {
  return withBase(`regions/${region}/${topic}/`);
}

/** Convenience builder for a region hub page. */
export function regionHref(region: string): string {
  return withBase(`regions/${region}/`);
}
