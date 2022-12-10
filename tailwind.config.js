/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
theme:{
  
  colors: {
    transparent: 'transparent',
    'white':'#fff',
    'red':'#FF0000',
    'green':'#00FF00',
    'primary':'#2e6930',// green
    'helper':'#449e48',//light green
    'black':'#000000',
    'gray':'#808080',
    'bg':'#fff'
  },
  screens: {
    'tab': '640px',
    // => @media (min-width: 640px) { ... }

    'lap': '1024px',
    // => @media (min-width: 1024px) { ... }

    'desk': '1280px',
    // => @media (min-width: 1024px) { ... }

    // 'extra': '1536px',

  },
},
  plugins: [],
}
