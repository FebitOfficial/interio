/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#f9f9f9",
        bgSecondary: "#8b8f9e",
        textPrimary: "#8b8f9e",
        textPink: "#e76589",
        textGrey: "#b4bbd2",
        bgGold: "#ffbb5c",
        bgPink: "#e76589",
      },
      screens: {
        sc0: "0px",
        sc560: "560px",
        maxSc360: { max: "360px" },
        sc600: "600px",
        sc800: "800px",
        sc1200: "1200px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
