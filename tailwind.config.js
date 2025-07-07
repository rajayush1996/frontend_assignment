/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          500: '#6366f1',
          700: '#4f46e5',
          DEFAULT: '#F97316'
        },
        secondary: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          500: '#10b981',
          700: '#047857',
        },
        danger: {
          100: '#fee2e2',
          500: '#ef4444',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        xl: '1rem',
      },
    }
  },
  plugins: [],
}

