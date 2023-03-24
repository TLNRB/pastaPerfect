/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      xs: "360px",
      sm: "525px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1440px",
      xxxl: "1600px",
    },
    fontFamily: {
      "sans-serif": "Poppins",
      serif: "Italiana",
      cursive: "Italianno",
    },
    extend: {
      colors: {
        lightText: "#F4F4F4",
        normalText: "#606060",
        darkText: "#353535",
        lightCardBG: "#F3F1EE",
        normalCardBG: "#E9E5E0",
        darkCardBG: "#ECE5DB",
        lightRedText: "#D9042B",
        darkRedBtn: "#8C0327",
        darkBrown: "#A6907C",
        darkestBrown: "#5A4B3D",
      },
    },
  },
  plugins: [],
};
