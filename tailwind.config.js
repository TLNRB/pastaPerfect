/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    extend: {
      colors: {
        lightText: '#F4F4F4',
        normalText: '#606060',
        darkText: '#353535',
        lightCardBG: '#F3F1EE',
        normalCardBG: '#E9E5E0',
        darkCardBG: '#E3DBD0',
        lightRedText: '#D9042B',
        darkRedBtn: '#8C0327',
        darkBrown: '#A6907C',
        darkestBrown: '#5A4B3D',
      }
    },
  },
  plugins: [],
}
