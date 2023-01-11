/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dictionary: {
          black: '#222831',
          gray: '#393E46',
          teal: '#00ADB5',
          white: '#EEEEEE',
        },
      },
      keyframes: ({ theme }) => ({}),
    },
  },
};
