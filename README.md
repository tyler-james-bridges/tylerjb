# tylerjb.dev

Personal site of Tyler James-Bridges, a Software Engineer III at Weedmaps working across developer tooling, test infrastructure, CI systems, and agent infrastructure.

## Stack

- Next.js 15 / React 19 / TypeScript
- Tailwind CSS
- Fraunces, Newsreader, and IBM Plex Mono via `next/font`
- React Markdown with GitHub Flavored Markdown support
- Playwright end-to-end testing
- Vercel

## Site structure

- **Home** — professional work, independent projects, career arc, and contact
- **Experience** — role history and selected internal systems
- **Projects** — selected public systems and project archive
- **Writing** — engineering notes and case studies
- **About** — QA-to-software background, independent work, and percussion
- **Drums** — selected performance archive
- **Contact** — contact form and direct links
- **Lab** — TylerOS browser experiment

## Development

```bash
npm install
npm run dev
npm run format:check
npm run lint
npm run typecheck
npm run build
npm test
```

`npm run check` runs the full local quality sequence.
