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
        "Karmina" : ["karmina"],
        "Semibold" : ["semibold"],
        "Regular" : ["regular"],
      },
      colors: {
        "Black" : "#0F0707",
        "Zelya" : "#87B553",
        "Gray" : "#B3B3B3" , 
        "BorderTop": "#979797",
        "light-blue" : "#64818E",
        "N2" : "#BEA45D",
        "N3" : "#619A87",
        "N4" : "#62749E",

        
      }
    },
  },
  plugins: [],
}

