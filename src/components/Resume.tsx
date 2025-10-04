import React from 'react';

export const Resume: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold">Resume</h2>
      <div className="mt-4 flex items-center gap-3">
        <a className="px-4 py-2 bg-primary text-white rounded" href="/resume.pdf" download>
          Download PDF
        </a>
        <p className="text-sm text-gray-700">BEd Computer Science; experience in public relations, student leadership, teaching practice, web development, UI/UX design, and foundational cybersecurity.</p>
      </div>
      <div className="mt-6">
        <h3 className="font-semibold">Highlights</h3>
        <ul className="list-disc pl-5 mt-2 text-sm">
          <li>HTML/CSS/JavaScript; React; Node/Python basics</li>
          <li>Cybersecurity fundamentals; UI/UX design</li>
          <li>Teaching and public speaking</li>
        </ul>
      </div>
      <div className="mt-6">
        <h3 className="font-semibold">Timeline</h3>
        <ol className="relative border-s mt-2 ps-4 text-sm">
          <li className="mb-4"><div className="absolute -left-1.5 w-3 h-3 bg-primary rounded-full"></div> BEd Computer Science — University of Cape Coast</li>
          <li className="mb-4"><div className="absolute -left-1.5 w-3 h-3 bg-primary rounded-full"></div> Public Relations Officer — APSU HOPSA UCC</li>
          <li className="mb-4"><div className="absolute -left-1.5 w-3 h-3 bg-primary rounded-full"></div> Organizer & Hall Coordinator — Rosa UCC</li>
          <li className="mb-4"><div className="absolute -left-1.5 w-3 h-3 bg-primary rounded-full"></div> Teaching practice — UPSHS</li>
          <li><div className="absolute -left-1.5 w-3 h-3 bg-primary rounded-full"></div> Cybersecurity (Alisson) and UI/UX coursework (UCC)</li>
        </ol>
      </div>
    </div>
  );
};
