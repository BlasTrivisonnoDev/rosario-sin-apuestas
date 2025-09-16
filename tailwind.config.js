/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3faf7",
          100: "#e6f5ef",
          200: "#c8eadd",
          300: "#a3dcc6",
          400: "#6ec3a3",
          500: "#3aa982",
          600: "#2b8a6c",
          700: "#216d56",
          800: "#1b5746",
          900: "#0f342a"
        }
      }
    },
  },
  plugins: [],
};
