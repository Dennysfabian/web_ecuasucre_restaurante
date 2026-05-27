/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:    { DEFAULT: '#0D0806', alt: '#110904', alt2: '#160C06' },
        card:  { DEFAULT: '#1C0F07', h: '#231408' },
        cream: { DEFAULT: '#F0E4CC', soft: '#C4AE8A' },
        gold:  { DEFAULT: '#C89632', light: '#DDB040' },
        terra: { DEFAULT: '#B85C26', light: '#C86E34' },
        amber: '#C87820',
      },
      fontFamily: {
        brand:   ['Cinzel', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        body:    ['Lato', 'sans-serif'],
      },
      animation: {
        'ken-burns':    'kenBurns 22s ease-in-out infinite alternate',
        'marquee-l':    'marqLeft 32s linear infinite',
        'marquee-r':    'marqRight 28s linear infinite',
        'scroll-drop':  'scrollDrop 2s ease infinite',
        'float':        'float 6s ease-in-out infinite',
        'pulse-gold':   'pulseGold 2.4s ease infinite',
        'spin-slow':    'spin 14s linear infinite',
      },
      keyframes: {
        kenBurns: {
          from: { transform: 'scale(1) translateX(0)' },
          to:   { transform: 'scale(1.1) translateX(-2.5%)' },
        },
        marqLeft: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        marqRight: {
          from: { transform: 'translateX(-50%)' },
          to:   { transform: 'translateX(0)' },
        },
        scrollDrop: {
          '0%, 100%': { transform: 'translateY(0)',   opacity: '.5' },
          '60%':      { transform: 'translateY(8px)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(200,150,50,.5)' },
          '50%':      { boxShadow: '0 0 0 14px rgba(200,150,50,0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
