/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'blue' : {
        DEFAULT: '#0032E2',
        'btn' : '#6B88EE'
      },
    },
    extend: {
      fontWeight: {

      }
    },
  },
  plugins: [],
}

