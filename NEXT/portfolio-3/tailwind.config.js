const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // false or 'media' or 'class'
  theme: {
    screens: {
      "sm": "640px",
      // => @media (min-width: 640px) { ... }

      "md": "768px",
      // => @media (min-width: 768px) { ... }

      "lg": "1024px",
      // => @media (min-width: 1024px) { ... }

      "xl": "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "article": "960px",
      // => @media (min-width: 960px) { ... }
    },
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
