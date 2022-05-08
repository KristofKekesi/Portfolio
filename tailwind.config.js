const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // false or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryLight: "#AAAAAA",
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
