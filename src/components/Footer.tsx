import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Gregory Sarfo Arthur</p>
        <nav aria-label="Footer sitemap" className="flex gap-4">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
          <a href="#design">Design</a>
        </nav>
        <p className="text-gray-600">Privacy: This site uses privacy‑friendly analytics (Plausible) without cookies.</p>
      </div>
    </footer>
  );
};
