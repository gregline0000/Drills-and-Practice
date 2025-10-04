import React, { useState } from 'react';
import { socials } from '../data/socials';

function isValidEmail(email: string): boolean {
  return /\S+@\S+\.\S+/.test(email);
}

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;

    const honeypot = (form.elements.namedItem('website') as HTMLInputElement | null)?.value || '';
    if (honeypot) {
      setStatus('Spam detected.');
      return;
    }

    const name = (form.elements.namedItem('name') as HTMLInputElement | null)?.value.trim() || '';
    const email = (form.elements.namedItem('email') as HTMLInputElement | null)?.value.trim() || '';
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement | null)?.value.trim() || '';

    if (!name || !email || !message) {
      setStatus('Please fill out all required fields.');
      return;
    }

    if (!isValidEmail(email)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;
    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message })
        });
        if (!res.ok) throw new Error('Network response was not ok');
        setStatus('Message sent successfully. Thank you!');
        form.reset();
      } catch (err) {
        setStatus('Failed to send. Please try again later.');
      }
    } else {
      const subject = encodeURIComponent('Portfolio contact from ' + name);
      const body = encodeURIComponent(message + '\n\nFrom: ' + email);
      window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`;
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-2 text-sm text-gray-700">Email: <a className="underline" href={`mailto:${socials.email}`}>{socials.email}</a></p>
      <p className="text-sm text-gray-700">LinkedIn: <a className="underline" href={socials.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/gregory-sarfo-arthur</a></p>
      <p className="text-sm text-gray-700">GitHub: <a className="underline" href={socials.github} target="_blank" rel="noreferrer">github.com/gregory-sarfo-arthur</a></p>
      <p className="text-sm text-gray-700">Location: {socials.location}</p>

      <form noValidate className="mt-6 grid gap-4 max-w-xl" onSubmit={onSubmit} aria-label="Contact form">
        <input className="border rounded px-3 py-2" name="name" placeholder="Your name" aria-label="Your name" required />
        <input className="border rounded px-3 py-2" name="email" type="email" placeholder="Your email" aria-label="Your email" required />
        <textarea className="border rounded px-3 py-2" name="message" placeholder="Your message" rows={5} aria-label="Your message" required />
        <input className="hidden" tabIndex={-1} autoComplete="off" name="website" aria-hidden="true" />
        <button className="px-4 py-2 bg-secondary text-white rounded w-max" type="submit">Send</button>
        {status && <div role="status" aria-live="polite" className="text-sm">{status}</div>}
      </form>
    </div>
  );
};
