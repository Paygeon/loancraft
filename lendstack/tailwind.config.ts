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
			sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
		  },
		  colors: {
			'dark-gray': '#302f36',
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			primary: {
			  DEFAULT: 'hsl(var(--primary))',
			  foreground: 'hsl(var(--primary-foreground))',
			},
			secondary: {
			  DEFAULT: 'hsl(var(--secondary))',
			  foreground: 'hsl(var(--secondary-foreground))',
			},
			border: {
			  DEFAULT: 'hsl(var(--secondary))',
			  foreground: 'hsl(var(--secondary-foreground))',
			},
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
			customYellow: '#FCC016',
			customBlue: '#419EFE',
		  },
		  backgroundImage: {
			'custom-gradient': 'linear-gradient(45deg, #FCC016, black, #419EFE)',
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