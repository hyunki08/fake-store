/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans KR", ...defaultTheme.fontFamily.sans],
        price: ["Black Han Sans"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
