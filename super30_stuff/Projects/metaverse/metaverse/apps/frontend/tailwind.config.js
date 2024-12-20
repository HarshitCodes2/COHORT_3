/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: {
          100: "#ececec", 
          200: "#dfdfdf", // borders
          800: "#6e707b", // grey text
          900: "#7f7f7f", // bg
        },
        black: {
          100: "#000000", // heading
          200: "#141414", // heading
          500: "#212121",
          600: "#2a2a2a",
          800: "#1B1B1B", // button
          900: "#171717", // label
        },
        green: {
          500: "#23c45e",
        },
      },
    },
  },
  plugins: [],
};
