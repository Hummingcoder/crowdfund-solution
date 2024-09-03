/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        commissioner: ['"Commissioner"', "sans-serif"],
      },
      colors: {
        cyan: {
          moderate: "#3cb4ab",
          dark: "#137a73",
        },
        neutral: {
          black: "#1a1a1a",
          lightGray: "#e4e4e6",
          darkGray: "#52535c",
        },
      },
    },
  },
  plugins: [],
};
