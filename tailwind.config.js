/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'dark' : '#272727',
      'gray' : {
        DEFAULT: '#494949',
        500 : '#8E8D8A',
        400 : '#464646',
        300 : '#6F6E6C',
      },
      'white' : '#fff',
      'red' : {
        DEFAULT : '#E85A4F',
        300 : "#E98074"
      },
      'sand' : {
        DEFAULT : '#D8C3A5',
        300 : "#EAE7DC",
      },
    },
    fontSize: {
      xs: '13px',
      sm: '16px',
      base: '18px',
      md: '20px',
      lg: '25px',
      xl: '35px',
      '2xl': '60px',
    },
    borderRadius: {
      'md' : '5px',
      'lg' : '20px',
      'full' : '100px'
    },    
  },
  plugins: [],
}

