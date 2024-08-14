/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#1F1F1F",
        primaryLighter: "#333333",
      },
    },
  },
  plugins: ["@tailwindcss/aspect-ratio", "@tailwindcss/forms"],
};
