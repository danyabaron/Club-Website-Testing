export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'metal-gold': '#BA9B37',
        'bright-gold': '#FFC904',
        'gold': '#d4af37',
        'black': '#000000',
        'white': '#FFFFFF',
        'red': '#F80E0E',
        'light-red': '#ff4d62',
      },
      animation: {
        'scan-line': 'scan-line 1s linear',
        shake: 'shake 0.5s ease-in-out',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      dropShadow: {
        'red': '0 0 10px rgba(255, 0, 0, 0.7)',
        'red-lg': '0 0 15px rgba(255, 0, 0, 0.8)',
      }
    },
  },
  plugins: [],
}