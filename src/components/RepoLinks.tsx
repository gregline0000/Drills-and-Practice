import React from 'react';

export const RepoLinks: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-4 text-sm">
      <p>
        View the code on <a className="underline text-primary" href="https://github.com/yourusername/gregory-portfolio" target="_blank" rel="noreferrer">GitHub</a>
        {' '}and the live site at{' '}
        <a className="underline text-secondary" href={String((import.meta as any).env.VITE_SITE_URL || '#')} target="_blank" rel="noreferrer">deployment URL</a>.
      </p>
    </div>
  );
};
