/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        lobstertwo: ['Lobster Two', 'sans-serif'],
      },
      colors: {
        'olive-green': '#618D3D',
        'olive-green-light': '#89ba60',
      },
      // backgroundImage: theme =>({
      //   'breakSec' : "url('/media/breakBGIMG.jpg')",
      // }),
      
      backgroundImage: {
        'breakSec' : "url('/media/breakBGIMG.jpg')",
        'bandar' : "url('/media/bandar.jpg')",
        'phuket' : "url('/media/phuket.jpg')",
        'goa': "url('/media/goa.jpg')",
        'package1' : "url('/media/p1.jpg')",
        'package2' : "url('/media/p2.jpg')",
        'package3' : "url('/media/p3.jpg')",
        'package4' : "url('/media/p4.jpg')",
      }
    }
  },
  plugins: [],
}

