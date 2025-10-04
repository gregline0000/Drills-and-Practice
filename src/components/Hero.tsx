import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
      <h1 className="hero-title">Gregory Sarfo Arthur</h1>
      <p className="hero-subtitle">Gregory Sarfo Arthur — Computer Science graduate, educator, and emerging cybersecurity & UI/UX practitioner.</p>
      <div className="hero-cta" role="group" aria-label="Primary actions">
        <a className="px-4 py-2 bg-primary text-white rounded" href="#projects">View projects</a>
        <a className="px-4 py-2 border rounded" href="/resume.pdf" download>Download resume</a>
        <a className="px-4 py-2 bg-secondary text-white rounded" href="#contact">Contact</a>
      </div>
    </div>
  );
};
