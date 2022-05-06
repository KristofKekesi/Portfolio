const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        secondaryLight: {
          500: '#ECECEC',
        },
        activeAccentLight: {
          500: '#BE4245',
        },
        homeAccentLight: {
          500: '#173959',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
