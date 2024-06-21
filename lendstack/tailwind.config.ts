const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  safelist: [
    ...Array.from({ length: 11 }, (_, i) => `w-${i + 1}/12`),
    ...Array.from({ length: 11 }, (_, i) => `pl-${i + 1}`),
    ...Array.from({ length: 11 }, (_, i) => `pr-${i + 1}`),
    ...Array.from({ length: 11 }, (_, i) => `grid-cols-${i + 1}`),
    'border-l-2',
    'bg-slate-800',
    'text-slate-800',
    'overflow-x-hidden',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        'dark-gray': '#302f36',
        background: '#111522',
        foreground: '#191f34',
        primary: {
          DEFAULT: '#003eff',
          content: '#ffffff',
          dark: '#0032cc',
          light: '#3365ff',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: '#ffc100',
          content: '#000000',
          dark: '#cc9a00',
          light: '#ffcd33',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        border: '#293456',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        copy: '#fafafd',
        'copy-light': '#cbd2e6',
        'copy-lighter': '#8796c5',
        success: {
          DEFAULT: '#00ff00',
          content: '#000000',
        },
        warning: {
          DEFAULT: '#ffff00',
          content: '#000000',
        },
        error: {
          DEFAULT: '#ff0000',
          content: '#ffffff',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    addVariablesForColors,
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
