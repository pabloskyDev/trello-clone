/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: 'var(--color-primary)',
      'primary-light': 'var(--color-primary-light)',
      'primary-dark': 'var(--color-primary-dark)',

      secondary: 'var(--color-secondary)',
      'secondary-light': 'var(--color-secondary-light)',
      'secondary-dark': 'var(--color-secondary-dark)',

      accent: 'var(--color-accent)',
      'accent-light': 'var(--color-accent-light)',
      'accent-dark': 'var(--color-accent-dark)',
      'gray-light': 'var(--color-gray-light)',
      blue: 'var(--color-blue)',
      green: 'var(--color-green)',
      white: colors.white,
      black: colors.black,
      red: colors.red,
    }
  },
  darkMode: 'media',
  plugins: [
    require("@tailwindcss/forms"),
  ],
}

