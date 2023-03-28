/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        overlay: "rgba(0, 0, 0, 0.5)",
        main: "#272E71",
      },
    },
  },
  plugins: [],
};
