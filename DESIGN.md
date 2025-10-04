# Design Decisions

This portfolio is designed to load fast, read clearly, and scale across devices while remaining accessible and easy to maintain.

Typography: A system‑UI font stack is used to reduce layout shift and improve performance. Hierarchy relies on Tailwind’s type scale with restrained sizes that grow progressively at `sm` and `md` breakpoints so headings remain readable on smaller screens without overwhelming the layout.

Color palette: The primary green communicates growth and reliability, complemented by a deep blue for emphasis on interactive elements. Colors were selected and verified to meet WCAG AA contrast on common backgrounds. Subtle grays support text and card surfaces without reducing contrast below AA thresholds.

Layout grid: A centered `max-w-6xl` container provides comfortable line lengths on desktop. The Projects section uses a responsive grid that expands from one column on mobile to two and three columns on larger screens. Spacing follows a 4/6/8 rhythm to maintain visual consistency.

Accessibility: Semantic landmarks are used throughout (`header`, `main`, `section`, `footer`). Headings follow a logical hierarchy beginning with the hero as the primary introduction. A visible skip link allows keyboard users to jump to `#main`. Focus states use a high‑contrast outline and are never suppressed. Images include meaningful `alt` text; ARIA attributes label navigation and the form where helpful. The site is navigable entirely by keyboard and respects reduced motion preferences by avoiding heavy animations.

Responsive breakpoints: The design is mobile‑first, with small adjustments at `sm`, `md`, and `lg` breakpoints. The hero typography increases gradually to avoid jumps and maintain balance. Cards reflow to preserve readable line lengths and tap targets.

Image optimization: Screenshots are provided in compressed PNG/WebP formats. All project images use `loading="lazy"` and explicit width/height classes to mitigate layout shift. The build leverages Vite’s asset hashing and the Netlify headers provide long‑term caching for `/assets/*`.

Performance: Critical UI relies on Tailwind utility classes to keep CSS small; the hero uses predeclared utility composites. Vite performs JS and CSS minification and tree‑shaking. Netlify headers cache static assets aggressively, while HTML is kept dynamic to allow fresh content. Inline SVG and minimal runtime dependencies help keep the bundle small. Lighthouse targets are ≥90 on desktop and ≥70 on mobile.

SEO and sharing: The document includes `title`, meta description, and Open Graph tags. Section headings are descriptive, and links use clear labels. The URL hash updates on navigation to support deep linking to sections like `#projects`.

Contact strategy: The form validates client‑side and uses a hidden honeypot field for spam prevention. If `VITE_CONTACT_ENDPOINT` is configured, submissions POST to it; otherwise, a `mailto:` fallback opens the user’s email client with a prefilled subject and body.

Tradeoffs: A static SPA avoids server complexity and is easy to host on Netlify or GitHub Pages. Server‑rendered alternatives (e.g., Next.js) could improve initial HTML for SEO, but the simplicity and performance of a small client bundle were prioritized given the content scale. Using Tailwind reduces custom CSS but introduces a build step; this is acceptable for maintainability and consistency.
