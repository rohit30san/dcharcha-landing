/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    animation: {
      'pulse-fast': 'pulse 2s ease-in-out infinite',
      'pulse-slow': 'pulse 6s ease-in-out infinite',
    },
  },
},
  plugins: [],
};
