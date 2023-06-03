/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "clear-weather": "url('/src/assets/clear.png')",
        "clouds-weather": "url('/src/assets/clouds.png')",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
