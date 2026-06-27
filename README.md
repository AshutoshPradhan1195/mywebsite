# Ashutosh Pradhan — Portfolio

An editorial-broadsheet-meets-terminal portfolio site, built with Next.js (App Router), TypeScript, Tailwind CSS, and Motion (Framer Motion).

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customizing the site

**All content lives in one file: [`data/resume.ts`](data/resume.ts).** Profile copy, stats, experience, education, skills, projects, certifications, awards, contact details, and nav links are all typed exports there — edit the data, and every component (Masthead, Stats, Timeline, Skills, SkillTicker, Projects, Contact, CommandPalette) picks it up automatically. No content is hardcoded in components.

**Swapping the CV.** Replace [`public/Ashutosh_Pradhan_CV.pdf`](public/Ashutosh_Pradhan_CV.pdf) with your own PDF (keep the same filename, or update `cvPath` in `data/resume.ts` if you rename it). The "Read CV" / "Download CV" buttons and the inline preview in the Curriculum Vitae section all reference that one path.

**Changing the accent color.** Edit the CSS custom properties in [`app/globals.css`](app/globals.css):

```css
:root {
  --color-paper: #f7f4ec;   /* background */
  --color-ink: #14110f;     /* text */
  --color-accent: #c8341e;  /* spot color — links, chips, live clock */
  --color-marker: #e8b23a;  /* rare secondary highlight */
  --color-muted: #6b6258;   /* secondary text */
}

.dark {
  /* same tokens, redefined for Night Edition */
}
```

These map to Tailwind utilities (`bg-paper`, `text-ink`, `text-accent`, etc.) via the `@theme inline` block right below them, so a color change here updates the whole site, in both themes, automatically.

**Day / Night Edition** is a manual toggle (`components/theme-toggle.tsx`) backed by a `.dark` class on `<html>`, persisted to `localStorage`, defaulting to the visitor's OS preference on first visit.

## Architecture

- `app/` — routing, layout, metadata, generated favicon/OG image (`icon.tsx`, `apple-icon.tsx`, `opengraph-image.tsx`).
- `components/` — one component per section (see the list above), plus shared primitives: `section.tsx`, `section-label.tsx`, `reveal.tsx` (scroll-reveal wrapper), `theme-provider.tsx`, `command-palette.tsx`, `icons.tsx` (hand-rolled inline SVGs, no icon library dependency).
- `data/resume.ts` — the single typed content source described above.

Motion respects `prefers-reduced-motion` throughout (count-ups, scroll reveals, the timeline draw, and the skills ticker all degrade to static, instant states).

## Deploy

Any Next.js host works (e.g. [Vercel](https://vercel.com/new)). Run `pnpm build` to verify the production build before deploying.
