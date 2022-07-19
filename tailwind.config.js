/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'heroBg': "url('./assets/images/mope+dimeji-hero.png')"
      },
      fontFamily: {
        'BonVivant': ["Bon Vivant Serif"],
        'BonVivantCursive': ["Bon Vivant"],
        'Montaga': ["Montaga"],
      },
    },
  },
  plugins: [],
}
