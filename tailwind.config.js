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
      },
    },
  },
  plugins: [],
}

