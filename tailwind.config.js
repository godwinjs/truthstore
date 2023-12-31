/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{css,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar-hide"),
  ],
};
