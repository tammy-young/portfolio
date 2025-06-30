/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlue: '#e5fcff',
        mainPurple: '#f0e1ff',
        mainYellow: '#fffee1',
        mainRed: '#ffe1e2',
        mainGreen: '#eeffec'
      },
    },
  },
  plugins: [],
}

