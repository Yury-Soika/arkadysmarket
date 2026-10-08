# Validation

Checked 2026-10-08 against the production static export built with `/arkadysmarket` as its base path.

- ESLint, TypeScript, and Next.js production export passed.
- Playwright checked English and Russian at 375, 390, 820, 1440, 1536, and 1728px.
- Container widths, header height, logo size, and responsive typography matched the design standard.
- No horizontal overflow, broken images, missing production assets, empty placeholder links, or browser console errors were observed.
- Language controls updated content and document language. Mobile navigation opened, closed with Escape, and closed after selecting a link.
- Call, email, Facebook, and directions links use the business details documented in `SOURCES.md`.
- Desktop and mobile screenshots were reviewed.
- The hub build script successfully exported and copied the landing into `public/arkadysmarket/`.
- Published at https://demo.plexrs.com/arkadysmarket/. HTTP checks passed for the page, hub card, thumbnail, sitemap entry, and 12 linked landing assets.
- The published browser check passed for navigation from the hub, English/Russian controls, mobile menu, and hydration.

Opening hours differ between public directories and still require owner confirmation before a production launch.
