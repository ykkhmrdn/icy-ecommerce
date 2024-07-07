const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "congress-blue": {
          50: "#f3f6fc",
          100: "#e7eef7",
          200: "#cadaed",
          300: "#9bbbde",
          400: "#6596cb",
          500: "#4179b6",
          600: "#305f99",
          700: "#274b7a",
          800: "#244268",
          900: "#233957",
          950: "#17253a",
        },
        zircon: {
          50: "#f3f8fe",
          100: "#deeafb",
          200: "#c4ddf9",
          300: "#9bc7f5",
          400: "#6ca8ee",
          500: "#4988e8",
          600: "#346cdc",
          700: "#2b58ca",
          800: "#2948a4",
          900: "#264082",
          950: "#1c294f",
        },
      },
    },
  },
  plugins: [],
});
