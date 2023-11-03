/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"'],
        poppins: ['"Poppins"'],
      },
      backgroundImage: {
        hero: "url('./img/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
};
