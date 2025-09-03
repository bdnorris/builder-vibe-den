/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Baloo 2"', 'cursive'],
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          '"Fira Sans"',
          '"Droid Sans"',
          '"Helvetica Neue"',
          'sans-serif',
        ],
      },
      colors: {
        brand: {
          primary: '#7C3AED',
          secondary: '#F59E0B',
          pink: '#EC4899',
        },
        rainbow: {
          red: '#ef4444',
          orange: '#f97316',
          yellow: '#eab308',
          green: '#22c55e',
          blue: '#3b82f6',
          violet: '#8b5cf6',
        },
      },
      boxShadow: {
        candy: '0 10px 25px rgba(124, 58, 237, 0.25)',
      },
      backgroundImage: {
        'rainbow-stripe':
          'linear-gradient(110deg, #ef4444 0%, #f97316 16%, #eab308 32%, #22c55e 48%, #3b82f6 64%, #8b5cf6 80%)',
      },
      borderRadius: {
        xl2: '1rem',
      },
    },
  },
  plugins: [],
}
