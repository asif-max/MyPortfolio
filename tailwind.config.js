/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: '#EBDA1C',
        redux:'#7248B7',
        html:'#E44A16'
      },
    },
  },
  plugins: [],
}

