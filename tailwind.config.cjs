/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          primary: '#8B0000',    // Deep burgundy
          secondary: '#4A0404',  // Dark burgundy
          accent: '#DAA520',     // Golden accent
          scroll: '#FFF8DC',     // Cream color
          dark: '#2B0000',       // Very dark burgundy
        }
      },
      backgroundImage: {
        'gradient-royal': 'linear-gradient(to right, #8B0000, #4A0404)',
        'gradient-gold': 'linear-gradient(120deg, #DAA520, #B8860B, #CD853F)',
      }
    },
  },
  plugins: [],
}