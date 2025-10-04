import React from 'react';

type Props = { title?: string; description?: string; url?: string; image?: string };

export const Seo: React.FC<Props> = ({
  title = 'Gregory Sarfo Arthur — Portfolio',
  description = 'Projects, resume, and contact information for Gregory Sarfo Arthur.',
  url = (import.meta as any).env.VITE_SITE_URL || '',
  image = `${(import.meta as any).env.VITE_SITE_URL || ''}/og-image.png`
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
    </>
  );
};
