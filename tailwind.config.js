/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'status-on-time': '#10b981',
        'status-delayed': '#f59e0b',
        'status-cancelled': '#ef4444',
      },
    },
  },
  plugins: [],
}
