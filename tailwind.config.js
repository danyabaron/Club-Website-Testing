/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // This tells Tailwind to look inside all files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        'metal-gold': '#BA9B37',
        'bright-gold': '#FFC904',
        'black': '#000000',
        'white': '#FFFFFF',
      }
    },
  },
  plugins: [],
};
