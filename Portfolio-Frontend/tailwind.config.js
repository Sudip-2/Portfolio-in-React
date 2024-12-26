/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        customBlue:'#0077FF'
      },
      keyframes:{
        autorun:{
          from:{left:'100%'},
          to:{left:'-121px'}
        }
      },
      animation:{
        autorun:'autorun 8s linear infinite'
      }
    },
  },
  plugins: [],
}

