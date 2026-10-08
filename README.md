# Arkady’s Market

English/Russian landing page for the Eastern European deli and grocery in Plymouth, Minnesota. Built with Next.js, Tailwind CSS, and TypeScript.

Published preview: https://demo.plexrs.com/arkadysmarket/. The Plex demo hub includes a project card, thumbnail, route rewrite, and sitemap entry. Its `build:landings -- arkadysmarket` command rebuilds and syncs this project from `plex/arkadysmarket`.

## Development

```sh
npm ci
npm run dev
```

## Checks and static export

```sh
npm run lint
npm run typecheck
npm run build
```

For the Plex demo hub:

```sh
NEXT_PUBLIC_BASE_PATH=/arkadysmarket npm run build
```

Copy the contents of `out/` into the hub’s `public/arkadysmarket/`. The hub rewrites `/arkadysmarket/` to its exported `index.html`. Demo builds are marked noindex. A standalone build has an empty base path.

## Content and design

Business copy and EN/RU translations live in `app/content/home.ts`; contact details and links live in `app/lib/business.ts`. Routes are thin, templates compose blocks, and components use shared tokens in `app/globals.css`.

Layout follows the public DesignInX starter v1.0.2 guide: 1240px container, 1440px above 1650; 640/1024 layout breakpoints; shared gutters; 80/64/56 section spacing; 17px body; 14px secondary text; reusable components.

Facts, photos, and the email come from the supplied Facebook page. Opening hours come from public directory listings, which differ on opening time; confirm them with the owner before a production launch. No invented prices, delivery service, testimonials, review scores, or online checkout. The logo was supplied by the user. Sources and asset provenance are in `docs/`.
