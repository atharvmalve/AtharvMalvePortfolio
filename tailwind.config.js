/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '36rem',
        '97':'31rem',
        '98': '58rem',
        '136':'42rem',
        '256': '53rem',
        '120':'32rem',
        '512':'64rem',
        '100':'31rem',
        '99':'28rem'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

