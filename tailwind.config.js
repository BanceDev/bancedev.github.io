/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}", "./blog/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'heading': ["'Ubuntu'", 'sans-serif'],
      'body': ["'JetBrains Mono'", 'monospace']
    }
  },
  plugins: [],
};
