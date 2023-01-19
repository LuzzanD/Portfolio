const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
      rotate: {
        '135': '135deg',
        '225': '225deg',
        '360': '360deg'
      },
      dropShadow: {
        'grad': '0 0 1px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
};
