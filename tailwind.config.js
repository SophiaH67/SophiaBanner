/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-image-rendering")(), // no options to configure
  ],
};
