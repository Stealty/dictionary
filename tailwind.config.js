/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './page/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#eeeeee',
        'secondary-color': '#222831',
        'tertiary-color': '#393e46',
        'quaternary-color': '#00adb5',
      },
      keyframes: ({ theme }) => ({}),
    },
  },
};
