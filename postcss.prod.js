const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const tailwindConfig = require('./tailwind.prod.js');

module.exports = {
  plugins: [tailwind(tailwindConfig), autoprefixer],
};
