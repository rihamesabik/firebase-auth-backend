// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <- important pour que Tailwind fonctionne avec React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
