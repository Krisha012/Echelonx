/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["Nunito", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
      "2xl": "1320px",
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: {
        200: "#3f3f40",
        300: "#2f2f2f",
        400: "#1d1f25",
      },
      blue: {
        100: "#cedcf8",
        300: "#0d6efd",
        400: "#0b5ed7",
        500: "#0b52e4",
      },
      gray: {
        50: "#f8f9fa",
        100: "#ffffff80",
        200: "#dadada",
        300: "#8492a6",
        400: "#161c2d1a",
      },
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/Image/home-bg.jpg')",
        'hero-overview': "url('/src/assets/Image/overview.png')",
        'Contact-belog': "url('/src/assets/Image/contact.jpg')"
      }
    },
    plugins: [],
  },
};