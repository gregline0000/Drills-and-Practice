import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between" aria-label="Primary navigation">
        <a href="#hero" className="font-semibold" aria-label="Home">GSA</a>
        <ul className="flex gap-4 text-sm">
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#resume" className="hover:underline">Resume</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
          <li><a href="#design" className="hover:underline">Design</a></li>
        </ul>
      </nav>
    </header>
  );
};
