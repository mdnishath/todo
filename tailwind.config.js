/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      maxWidth: {
        container: "960px",
      },
    },
    boxShadow: {
      all: "0px 0px 15px 0px rgba(0,0,0,0.1)",
    },
  },
  plugins: [],
};
