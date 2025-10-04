export type Project = {
  title: string;
  problem: string;
  stack: string[];
  features: string[];
  image: string;
  repo: string;
  demo: string;
  caseStudy: string;
  category: 'fullstack' | 'frontend' | 'security';
};

export const projects: Project[] = [
  {
    title: 'CampusHub',
    problem: 'A small full‑stack hub for student announcements and events.',
    stack: ['React', 'Node', 'Express', 'MongoDB'],
    features: ['Auth', 'CRUD posts', 'Responsive UI'],
    image: '/assets/campushub.png',
    repo: 'https://github.com/yourusername/campushub',
    demo: 'https://campushub.example.com',
    caseStudy: 'Designed an end‑to‑end flow for student posts with role‑based permissions and mobile‑first UI.',
    category: 'fullstack'
  },
  {
    title: 'UI Pattern Gallery',
    problem: 'A collection of accessible UI components and patterns.',
    stack: ['React', 'Tailwind CSS'],
    features: ['ARIA patterns', 'Keyboard nav', 'Themeable'],
    image: '/assets/ui-gallery.png',
    repo: 'https://github.com/yourusername/ui-pattern-gallery',
    demo: 'https://ui-pattern-gallery.example.com',
    caseStudy: 'Built a curated set of components prioritizing contrast, focus states, and readable motion.',
    category: 'frontend'
  },
  {
    title: 'SecCheck',
    problem: 'CLI to scan basic web app configs for common issues.',
    stack: ['Node', 'TypeScript'],
    features: ['Config checks', 'CI friendly output'],
    image: '/assets/seccheck.png',
    repo: 'https://github.com/yourusername/seccheck',
    demo: 'https://npmjs.com/package/seccheck',
    caseStudy: 'Created a small tooling project to automate simple security checks and integrate into CI.',
    category: 'security'
  }
];
