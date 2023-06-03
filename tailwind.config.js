/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "clear-weather": "url('/src/assets/clear.png')",
        "clouds-weather": "url('/src/assets/clouds.png')",
        "drizzle-weather": "url('/src/assets/drizzle.png')",
        "rain-weather": "url('/src/assets/rain.png')",
        "snow-weather": "url('/src/assets/snow.png')",
        "thunderstorm-weather": "url('/src/assets/thunderstorm.png')",
        "wind-weather": "url('/src/assets/wind.png')",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
