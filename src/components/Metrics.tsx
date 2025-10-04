import React from 'react';
import { getLighthouseBadges } from '../utils/metrics';

export const Metrics: React.FC = () => {
  const siteUrl = (import.meta as any).env.VITE_SITE_URL || '';
  const badges = getLighthouseBadges(siteUrl);
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold">Metrics</h2>
      <p className="text-sm text-gray-700 mt-2">Performance and accessibility targets on desktop and mobile.</p>
      <div className="flex gap-3 mt-4 items-center">
        <img src={badges.performance} alt="Performance score badge" />
        <img src={badges.accessibility} alt="Accessibility score badge" />
      </div>
    </div>
  );
};
