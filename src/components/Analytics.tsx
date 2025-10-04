import React, { useEffect } from 'react';

export const Analytics: React.FC = () => {
  useEffect(() => {
    const domain = (import.meta as any).env.VITE_PLAUSIBLE_DOMAIN;
    if (!domain) return;
    const s = document.createElement('script');
    s.defer = true;
    s.setAttribute('data-domain', String(domain));
    s.src = 'https://plausible.io/js/script.js';
    document.body.appendChild(s);
    return () => { document.body.removeChild(s); };
  }, []);
  return null;
};
