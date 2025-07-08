/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          light: '#c2a3fc',
          dark: '#3a304b'
        },
        secondary: '#ddfca3'
      },
    },
  },
  plugins: [],
}

