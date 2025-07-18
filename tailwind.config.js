/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          light: '#c2a3fc',
          DEFAULT: '#a87cfc',
          dark: '#3a304b'
        },
        secondary: '#7cfca8',
        tertiary: '#fca87c'
      },
    },
  },
  plugins: [],
}

