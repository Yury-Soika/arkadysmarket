# Arkady’s Market development

Use the established Next.js, Tailwind CSS, and TypeScript stack. Business content lives in `app/content/`, contact facts in `app/lib/business.ts`, reusable blocks in `app/components/`, composition in `app/templates/`, and layout tokens in `app/globals.css`.

Apply the `plex-design-patterns` skill and `docs/DESIGN_STANDARD.md`. Use the supplied logo and authentic source photos. Do not invent business claims, prices, services, or testimonials. See `docs/SOURCES.md` for verified facts and the outstanding hours confirmation.

Before publishing, run lint, typecheck, and the production build. Verify EN/RU, keyboard navigation, the menu, links, images, and no horizontal overflow at 375, 390, 820, 1440, 1536, and 1728px. Demo export uses `NEXT_PUBLIC_BASE_PATH=/arkadysmarket` and is served by the existing Plex demo hub.
