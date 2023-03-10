/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx, js}'],
  theme: {
    extend: {
      colors: {
        // brand: '#F96162',
        brand: '#0c90e4',
      },
      backgroundImage: {
        banner: `url('../public/images/banner.png')`,
      },
    },
  },
  plugins: [],
};
