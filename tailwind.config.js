/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hankenGrotesk: ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
