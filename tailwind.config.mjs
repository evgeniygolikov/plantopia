import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'bg-primary': 'var(--color-background-primary)',
        'bg-page': 'var(--color-background-page)',
      },
      container: {
        center: true,
        padding: {
          default: '1.25rem',
          sm: '1.5rem',
          md: '2rem',
        },
      },
      fontFamily: {
        serif: ['Bitter', ...defaultTheme.fontFamily.serif],
      },
      gridTemplateColumns: {
        'fit-240': 'repeat(auto-fit, minmax(15rem, 1fr))',
      },
    },
  },
  plugins: [],
};
