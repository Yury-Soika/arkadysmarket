# PlexRS website design and development standard

The PlexRS company standard for new websites and landing pages unless the user or an established project specifies another design system. Adapt brand colors, imagery, and composition to each business; the shared pattern is layout and component architecture, not identical-looking sites.

## Technology stack

Start with **Next.js, TypeScript, and Tailwind CSS**. Use the Next.js App Router for routes and metadata, TypeScript for application code and data contracts, and Tailwind CSS with shared design tokens for styling. Build the prototype in the same production stack and codebase that will be delivered.

**Payload CMS and PostgreSQL are optional additions, discussed and agreed with the client later.** Confirm content editing needs, data requirements, hosting, maintenance, and scope before adding them. When agreed, Payload provides the CMS and PostgreSQL stores the application/CMS data. Keep components and content models ready for that integration without making a database or CMS a requirement for the initial website.

Client choices and an established project's design system take precedence over these defaults.

## Layout contract

| Token | Phone | Tablet, from 640 | Laptop, from 1024 |
| --- | --- | --- | --- |
| Gutter | 20px | 32px | 40px |
| Header height | 60px | 60px | 72px |
| Stacked logo height | 32px | 32px | 40px |
| Section vertical padding | 56px | 64px | 80px |
| Hero vertical padding | 48px | 64px | 96px |
| Display, home hero only | 40px | 52px | 64px |
| H1 | 38px | 48px | 60px |
| H2 | 30px | 34px | 40px |
| H3 | 22px | 22px | 24px |
| Lead | 19px | 19px | 21px |

- Container: `width: min(calc(100% - 2 * var(--gutter)), var(--container))`, centered; 1240px maximum, 1440px from 1650 with a 48px gutter.
- Below 380: gutter 16, H1 34, display 36, H2 28; wrap or stack buttons.
- Only 640 and 1024 change the main layout. Do not introduce 768/1280 layout steps by habit. Supporting states: below 380, header phone from 1536, extra-wide container from 1650.
- Paragraph cards: 1 → 2 → 3 or 4 columns. Compact items: 2 on phone. Gap 24px. Text/image pairs split from 1024; image first in the stacked DOM order.
- Logo maximum width 200px; wide wordmarks use 24px/32px height instead. Header nav collapses below 1024.
- Body 17px, secondary text 14px, prose maximum 72ch. Use rem for text so browser font settings work.
- Spacing: 8, 12, 16, 24, 32, 40, 48, 56, 64, 80, 96px. Gutters, header/logo dimensions, and documented type sizes are explicit exceptions.
- Section rhythm: eyebrow → 12 → heading → 16 → lead → 40 (32 on phone) → content → 32 → action. Sections own padding; do not add inter-section margins. Separate with backgrounds; consecutive same-color sections may use a hairline.

## Architecture contract

- Use Next.js, TypeScript, and Tailwind CSS from the first build. Introduce Payload CMS and PostgreSQL only after the client agrees to their purpose and scope.
- Routes own URL and metadata and stay thin. Templates compose blocks. Components own structure. Content files own business copy, links, and image paths. One component per structure; variants as props.
- Name the custom container `.site-container` or another project-specific class. Tailwind’s generated `.container` utility can override a component-layer `.container` and silently remove the intended gutters.
- Put colors, spacing, radii, and typography in shared tokens. Tailwind uses semantic aliases; do not scatter arbitrary colors or dimensions through components. Element rules belong in `@layer base` so utilities can override them.
- Preserve approved client copy and links when provided. When writing new copy, separate verified facts from editorial wording and track sources. Do not invent logos, metrics, testimonials, business claims, or promises.
- Compose only useful blocks. A grocery page usually needs store information, authentic imagery, products/categories, and call/directions actions; do not force B2B pricing, forms, process steps, or testimonials into it.
- Add forms only with an actual requested submission path. Do not fake successful submissions. Add CMS only when requested, onto existing approved components and data shapes.
- Keep internal documentation and debug controls out of customer pages. A content review/debug mode is optional authoring tooling, not a customer-facing feature.

## Validation contract

Check 375, 390, 820, 1440, 1536, and 1728px on the production build/export. Measure the container, gutters, header, logo, and type, not just the screenshot. Verify no horizontal overflow, broken images, console errors, or missing assets. Exercise navigation, phone/email/map links, language switching, and forms if present. Check keyboard access, visible focus, 44px minimum interactive targets, reduced motion, and text enlargement. Resolve sources' conflicting business hours before presenting them as owner-approved.
