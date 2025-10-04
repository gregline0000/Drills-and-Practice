import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Design } from './components/Design';
import { Footer } from './components/Footer';
import { Metrics } from './components/Metrics';
import { Header } from './components/Header';
import { Analytics } from './components/Analytics';
import { RepoLinks } from './components/RepoLinks';

export const App: React.FC = () => {
  return (
    <div>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-primary text-white px-3 py-2 rounded">Skip to content</a>
      <Header />
      <main id="main">
        <section id="hero"><Hero /></section>
        <section id="projects"><Projects /></section>
        <section id="about"><About /></section>
        <section id="resume"><Resume /></section>
        <section id="contact"><Contact /></section>
        <section id="design"><Design /></section>
        <section id="metrics"><Metrics /></section>
      </main>
      <Footer />
      <RepoLinks />
      <Analytics />
    </div>
  );
};
