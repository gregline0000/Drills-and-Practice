import React from 'react';

export const Design: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold">Design decisions</h2>
      <div className="prose max-w-none mt-4 text-sm">
        <p><strong>Typography:</strong> System UI stack for performance, consistent sizes via Tailwind scale.</p>
        <p><strong>Color palette:</strong> Greens (primary) and deep blue (secondary) for trustworthy contrast; WCAG AA checked.</p>
        <p><strong>Layout grid:</strong> 6xl container with responsive columns in projects; spacing on 4/6/8 rhythm.</p>
        <p><strong>Accessibility:</strong> Semantic landmarks, ARIA labels, visible focus, alt text, skip link, keyboard‑navigable components.</p>
        <p><strong>Responsive breakpoints:</strong> Mobile‑first with sm/md/lg adjustments; hero scales gradually.</p>
        <p><strong>Images:</strong> Optimized PNG/WebP, lazy‑loaded; dimensions set to prevent layout shift.</p>
        <p><strong>Performance:</strong> Critical hero styles inline via Tailwind utilities; Vite minification; long‑cache headers for assets.</p>
        <p><strong>Tradeoffs:</strong> Static SPA favors simplicity over server rendering; contact uses endpoint when present, mailto fallback otherwise.</p>
      </div>
    </div>
  );
};
