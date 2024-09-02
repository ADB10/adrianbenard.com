/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-color': 'var(--main-color)',
        'background-color': 'var(--background-color)',
        'paragraph-color': 'var(--paragraph-color)',
        'main-white': 'var(--main-white)',
        'main-black': 'var(--main-black)',
        'main-shade': {
          50: 'var(--main-shade-50)',
          100: 'var(--main-shade-100)',
          200: 'var(--main-shade-200)',
          300: 'var(--main-shade-300)',
          400: 'var(--main-shade-400)',
          500: 'var(--main-shade-500)',
          600: 'var(--main-shade-600)',
          700: 'var(--main-shade-700)',
          800: 'var(--main-shade-800)',
          900: 'var(--main-shade-900)',
        },
      },
    },
  },
  plugins: [],
};
