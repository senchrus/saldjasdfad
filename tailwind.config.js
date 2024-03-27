/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Light": ["regtext"],
        "Black": ["zagtext"],
        "Kompost": ["kompost"],
        "Karmina" : ["karmina"]
      },
      colors: {
        "Black" : "#0F0707",
        "Zelya" : "#87B553"
      }
    },
  },
  plugins: [],
}

