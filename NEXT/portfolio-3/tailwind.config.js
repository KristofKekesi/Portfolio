const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // false or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', defaultTheme.fontFamily.sans],
        'interBold': ['InterBold', defaultTheme.fontFamily.sans],
      },
      colors: {
        primaryLight: "#AAAAAA",
        primaryLightHover: "#EFEFEF",
        secondaryLight: "#ECECEC",
        tertiaryLight: "#202124",
        activeAccentLight: "#BE4245",
        homeAccentLight: "#173959",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
