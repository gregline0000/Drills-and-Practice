# Gregory Sarfo Arthur — Portfolio

A responsive single‑page portfolio showcasing projects, a downloadable resume, and clear contact methods. Built with Vite + React + TypeScript + Tailwind CSS and deployed on Netlify.

## Tech stack
- Vite, React, TypeScript
- Tailwind CSS
- Vitest + Testing Library (unit tests)
- Netlify (static hosting)

## Features
- Single‑page smooth scrolling with anchored sections
- Projects with repo and live links, badges, and case studies
- Downloadable resume.pdf served from `/public`
- Contact form with validation and honeypot spam protection and `mailto:` fallback
- Accessibility: semantic HTML, visible focus, alt text, ARIA where needed
- Performance: lazy‑loaded images, minified bundle, long‑cache headers
- SEO/Open Graph tags and privacy‑friendly analytics (Plausible optional)

## Getting started
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Tests
```bash
npm run test
```

## Deployment
- Netlify is configured via `netlify.toml`.
- Set environment variables:
  - `VITE_SITE_URL` — your production URL (e.g., https://gregorysa.com)
  - `VITE_PLAUSIBLE_DOMAIN` — domain for analytics
  - `VITE_CONTACT_ENDPOINT` — optional; if set, form POSTs here; otherwise uses `mailto:` fallback

## Repository structure
```
/public
  - resume.pdf
  - og-image.png
/src
  - components
  - utils
  - styles.css
package.json
netlify.toml
```

## Live deployment
Add your Netlify site URL here after first deploy.

## LICENSE
MIT
