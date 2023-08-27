/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bgColor':'#f1f5f8',
        'cardbgColor':'#e9eef2',
        'btnbgColor':'#ee5253',
        'btntextColor':'#f1f5f8'
      },
      fontFamily:{
        'poppins':'Poppins'
      }
    },
  },
  plugins: [],
}

