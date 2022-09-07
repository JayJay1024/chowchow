/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / 0.9)",
        secondary: "rgb(var(--color-secondary) / 0.6)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
