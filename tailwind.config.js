/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{svg,js,jsx}"],
  mode: "jit",
  theme: {
    screens: {
      'xs': '375px'
    },
    extend: {
      colors: {
        primary: "#FFFBEA",
        secondary: "#EA2231",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        tertiary: "#1E1E1E"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        jose: ['Josefin Sans', 'sans-serif'],
        ral: ['Raleway', 'sans-serif'],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};