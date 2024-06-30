/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: [
          '"Segoe UI"',
          "Segoe",
          "Tahoma",
          "Arial",
          "Verdana",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
