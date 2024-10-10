/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/Components/**/*.{js,jsx}", "./src/app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FD6F00",
        secondary: "#FA8C16",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      montsrrat: ["var(--font-montsrrat)"],
      poppins: ["var(--font-poppins)"]
    },
  },
  plugins: [],
};
