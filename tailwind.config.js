/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "greenkga":"#89c440",
        "pinkkga":"#ed1479",
        "bluekga":"#53a3da",
        "yellowkga":"#f9cc12"
      },
    },
  },
  plugins: [],
}

