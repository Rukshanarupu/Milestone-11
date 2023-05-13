/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'vibes': ['Great Vibes', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
        'forum': ['Forum', 'cursive']

      },
      colors: {
        'primary': '#e4644a',
        'secondary': 'orange'
      }
    },
  },
  plugins: [require("daisyui")],
}

