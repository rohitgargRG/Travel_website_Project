
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

      backgroundImage: {
        breakSec: "url('/dist/media/breakBGIMG.jpg')",
        bandar: "url('/dist/media/bandar.jpg')",
        phuket: "url('/dist/media/phuket.jpg')",
        goa: "url('/dist/media/goa.jpg')",

        bali: "url('/dist/media/bali3.jpg')",
        angkor: "url('/dist/media/angkor.jpg')",
        shimla: "url('/dist/media/shimla.jpg')",
        angkor_wat: "url('/dist/media/angkor.jpg')",

        lesGo: "url('/dist/media/lesGo.jpg')",
        package1: "url('/dist/media/p1.jpg')",
        package2: "url('/dist/media/p_2.jpeg')",
        package3: "url('/dist/media/p3.jpg')",
        package4: "url('/dist/media/p4.jpg')",
        "5_Star_black": "url('/dist/media/5-stars_black.png')",
        forest: "url('/dist/media/forest.jpg')",
        trees: "url('/dist/media/tree.jpg')",
        review: "url('/dist/media/reviewbg2.jpg')",
        reviewUpper1: "url('/dist/media/review1.jpg')",
        reviewUpper2: "url('/dist/media/reviewUpper2.jpeg')",
        reviewUpper3: "url('/dist/media/review3.jpg')",
        gallery1: "url('/dist/media/gallery1.jpg')",
        gallery2: "url('/dist/media/gallery2.jpg')",
        gallery3: "url('/dist/media/gallery3.webp')",
        gallery4: "url('/dist/media/gallery4.jpg')",
        gallery5: "url('/dist/media/gallery5.jpg')",
        gallery6: "url('/dist/media/gallery6.jpg')",
        gallery7: "url('/dist/media/gallery7.jpg')",
      },
    },
  },
  plugins: [],
};
