/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
     fontFamily: {
        "martel": ["Martel Sans", "sans-serif"],
        "raleway": ["Raleway", "sans-serif"],
      }
    }
  },
  plugins: [],
}