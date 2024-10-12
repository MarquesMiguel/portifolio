/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html",
    "./static/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Merriweather Sans"', 'sans-serif']
    },
    animation: {
      'waving' : ' waving 2.5s infinite'
    },
    keyframes: {
      waving: {
        '0%': { transform: 'rotate(0deg)'},
        '10%': { transform: 'rotate(14deg)'},
        '20%': { transform: 'rotate(-8deg)'},
        '30%': { transform: 'rotate(14deg)'},
        '40%': { transform: 'rotate(-4.0deg)'},
        '50%': { transform: 'rotate(10deg)'},
        '60%': { transform: 'rotate(0deg)'},
        '100%': { transform: 'rotate(0deg)'},
      }
    },
    transformOrigin: {
      'origin-center-100/70-100/70': '70% 70%'
    },
    spacing: {
      '1/10': '10%'
    },
    colors: {
      'background-color-main': '#17202e',
      'secundary-text': '#606e83'
    }
  },
  plugins: [],
}
}
