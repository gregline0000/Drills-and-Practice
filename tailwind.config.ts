import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1b5e20',
        primaryAccent: '#2e7d32',
        secondary: '#0d47a1',
        muted: '#f7fafc'
      }
    },
  },
  plugins: [],
} satisfies Config;
