/** @type {import('tailwindcss').Config} */

// Single brand ramp — the warm rust/terracotta that was already carrying the
// brand on screen (as ad hoc "orange") is now the one source of truth.
// `orange` is aliased to the same ramp so every existing orange-* class in
// the app renders identically to `primary-*` without a repo-wide rename.
const brand = {
  50: '#fdf3ec',
  100: '#fae4d3',
  200: '#f3c7a8',
  300: '#e9a374',
  400: '#db7c4c',
  500: '#c1552b',
  600: '#a8431f',
  700: '#863419',
  800: '#6b2c1a',
  900: '#572619',
  950: '#2f1209',
}

// Warm stone neutral — pairs with the warm brand ramp instead of the cool
// default gray. Aliased onto `gray` so every existing gray-* class renders
// as stone without touching the ~300 call sites that use it.
const neutral = {
  50: '#fafaf9',
  100: '#f5f5f4',
  200: '#e7e5e4',
  300: '#d6d3d1',
  400: '#a8a29e',
  500: '#78716c',
  600: '#57534e',
  700: '#44403c',
  800: '#292524',
  900: '#1c1917',
  950: '#0c0a09',
}

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: brand,
        orange: brand,
        gray: neutral,
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif', 'sans-serif'],
      },
    },
  },
  plugins: [],
}