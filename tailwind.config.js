
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'zoom_out':'zoom_out 1s ease .2s forwards',
      },
      keyframes:{
        zoom_out:{
          '0%' : {transform:'scale(1)',opacity:'0'},
          '50%':{transform:'scale(1.1)'},
          '100%':{transform:'scale(1)',opacity:'1'}
        },
        float_up:{
          '0%' : {transform:'scale(1)'},
          '50%':{transform:'scale(1.1)'},
          '100%':{transform:'scale(1)'}
        }
      },
      fontFamily: {
        lobstertwo: ["Lobster Two", "sans-serif"],
        vollkorn: ["Vollkorn", "serif"],
      },
      colors: {
        "olive-green": "#618D3D",
        "olive-green-light": "#89ba60",
        "review-green": "#CEBA5A",
        'glassMorphism-nav2': 'rgba(255, 255, 255, 1.1)',
        'glassMorphism-nav': 'rgba(255, 255, 255, 0.3)',
      },
      backdropBlur: {
        'lg': 'blur(10px)',
      },

      backgroundImage: {
        breakSec: "url('/media/breakBGIMG.jpg')",
        bandar: "url('/media/bandar.jpg')",
        phuket: "url('/media/phuket.jpg')",
        goa: "url('/media/goa.jpg')",

        bali: "url('/media/bali3.jpg')",
        angkor: "url('/media/angkor.jpg')",
        shimla: "url('/media/shimla.jpg')",
        angkor_wat: "url('/media/angkor.jpg')",

        lesGo: "url('/media/lesGo.jpg')",
        package1: "url('/media/p1.jpg')",
        package2: "url('/media/p_2.jpeg')",
        package3: "url('/media/p3.jpg')",
        package4: "url('/media/p4.jpg')",
        "5_Star_black": "url('/media/5-stars_black.png')",
        forest: "url('/media/forest.jpg')",
        trees: "url('/media/tree.jpg')",
        review: "url('/media/reviewbg2.jpg')",
        reviewUpper1: "url('/media/review1.jpg')",
        reviewUpper2: "url('/media/reviewUpper2.jpeg')",
        reviewUpper3: "url('/media/review3.jpg')",
        gallery1: "url('/media/gallery1.jpg')",
        gallery2: "url('/media/gallery2.jpg')",
        gallery3: "url('/media/gallery3.webp')",
        gallery4: "url('/media/gallery4.jpg')",
        gallery5: "url('/media/gallery5.jpg')",
        gallery6: "url('/media/gallery6.jpg')",
        gallery7: "url('/media/gallery7.jpg')",
      },
    },
  },
  plugins: [],
};
