/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      screens: {
        '3xl': '1920px',
    },
    colors:{
      "brain":"#00A7E5"
    }
    },
  },
  plugins: [require("flowbite/plugin")],
};
