import React from 'react';
import { projects } from '../data/projects';

export const Projects: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((p) => (
          <article key={p.title} className="border rounded-lg overflow-hidden bg-white">
            <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" width="640" height="240" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-gray-700 mt-1">{p.problem}</p>
              <ul className="flex flex-wrap gap-2 mt-2" aria-label="Tech stack">
                {p.stack.map((s) => (
                  <li key={s} className="text-xs bg-gray-100 px-2 py-1 rounded">{s}</li>
                ))}
              </ul>
              <ul className="list-disc pl-5 text-sm mt-3">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className="text-sm mt-3 text-gray-700">{p.caseStudy}</p>
              <div className="mt-4 flex gap-3">
                <a className="text-primary underline" href={p.repo} target="_blank" rel="noreferrer">Repository</a>
                <a className="text-secondary underline" href={p.demo} target="_blank" rel="noreferrer">Live demo</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
