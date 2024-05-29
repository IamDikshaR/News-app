/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./README.md"],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#FC9F5B",
          2: "#7DCFB6",
          3: "#33CA7F",
          bg: "#F6F9FF",
        },
      },
    },
  },
  plugins: [],
};
