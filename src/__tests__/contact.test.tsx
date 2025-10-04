import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { Contact } from '../components/Contact';

// Mock window.location to prevent actual navigation
const originalLocation = window.location;
// @ts-expect-error
delete (window as any).location;
// @ts-expect-error
window.location = { href: '' } as any;

describe('Contact form validation', () => {
  beforeEach(() => {
    // Clear href before each test
    // @ts-expect-error
    window.location.href = '';
  });

  it('shows validation message for invalid email', async () => {
    render(<Contact />);
    fireEvent.change(screen.getByLabelText('Your name'), { target: { value: 'Greg' } });
    fireEvent.change(screen.getByLabelText('Your email'), { target: { value: 'invalid' } });
    fireEvent.change(screen.getByLabelText('Your message'), { target: { value: 'Hello' } });
    fireEvent.click(screen.getByRole('button', { name: /send/i }));
    // Wait a tick for state update
    await new Promise((r) => setTimeout(r, 0));
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument();
  });

  it('uses mailto fallback when no endpoint is configured', async () => {
    render(<Contact />);
    fireEvent.change(screen.getByLabelText('Your name'), { target: { value: 'Greg' } });
    fireEvent.change(screen.getByLabelText('Your email'), { target: { value: 'g@example.com' } });
    fireEvent.change(screen.getByLabelText('Your message'), { target: { value: 'Hello there' } });
    fireEvent.click(screen.getByRole('button', { name: /send/i }));
    // Allow async handler to run
    await new Promise((r) => setTimeout(r, 0));
    expect(window.location.href).toMatch(/^mailto:/);
  });
});
