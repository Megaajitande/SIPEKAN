module.exports = {
  content: ['./resources/**/*.blade.php',
  './resources/**/*.jsx',
  './resources/**/*.vue',],
  theme: {
    extend: {fontFamily: {
      logo: '"Montserrat", sans-serif'
    }
  },
  },
  plugins: [require('@tailwindcss/forms')],
}
