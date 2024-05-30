/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lobstertwo: ["Lobster Two", "sans-serif"],
        vollkorn: ["Vollkorn", "serif"],
      },
      colors: {
        "olive-green": "#618D3D",
        "olive-green-light": "#89ba60",
        "review-green": "#CEBA5A",
      },
      // backgroundImage: theme =>({
      //   'breakSec' : "url('/media/breakBGIMG.jpg')",
      // }),

      backgroundImage: {
        breakSec: "url('/media/breakBGIMG.jpg')",
        bandar: "url('/media/bandar.jpg')",
        phuket: "url('/media/phuket.jpg')",
        goa: "url('/media/goa.jpg')",
        lesGo: "url('/media/lesGo.jpg')",
        package1: "url('/media/p1.jpg')",
        package2: "url('/media/p_2.jpeg')",
        package3: "url('/media/p3.jpg')",
        package4: "url('/media/p4.jpg')",
        "5_Star_black": "url('/media/5-stars_black.png')",
        forest: "url('/media/forest.jpg')",
        trees: "url('/media/tree.jpg')",
        review: "url('/media/reviews.jpg')",
        reviewUpper1: "url('/media/reviewUpper1.jpg')",
        reviewUpper2: "url('/media/reviewUpper2.jpeg')",
        reviewUpper3: "url('/media/reviewUpper3.jpg')",
      },
    },
  },
  plugins: [],
};
