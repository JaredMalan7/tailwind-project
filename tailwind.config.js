/** @type {import('tailwindcss').Config} */
module.exports = {
  purge : false,
  content: [
    "./*{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      minWidth:{"200":"200px"}
    },
  },
  plugins: [],
}

