/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF5FF',
          100: '#E6EFFE',
          200: '#DCDCDE',
          300: '#A9BEE0',
          400: '#6D8EC5',
          500: '#4272B7',
          600: '#2F5DAA',
          650: '#1D518A',
          700: '#244C8C',
          800: '#1A3C6E',
          900: '#142E54',
        },
        ink: '#1A1615',
        charcoal: '#252120',
        cream: '#F8F4F3',
        body: '#333333',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-body)', 'sans-serif'],
      },
      boxShadow: {
        card: '0 5px 60px 0 rgba(0, 0, 0, 0.10)',
        float: '0 3px 29px 10px rgba(0, 0, 0, 0.15)',
        glow: '0 0 82px 0 rgba(0, 0, 0, 0.10)',
      },
      borderRadius: {
        card: '20px',
      },
    },
  },
  plugins: [],
}
