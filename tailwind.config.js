/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        customDark: '#212228', // Your custom color
      },
      backgroundImage: {
        'custom-pattern': 'linear-gradient(#292a30 0.1em, transparent 0.1em), linear-gradient(90deg, #292a30 0.1em, transparent 0.1em)',
        'light-custom-pattern': 'linear-gradient(#ffffff 0.1em, transparent 0.1em), linear-gradient(90deg, #ffffff 0.1em, transparent 0.1em)',

      },
      backgroundSize: {
        'custom-pattern': '5em 5em',
      },
      transitionDuration: {
        '3000': '3000ms', // Adds a custom duration of 3000ms
      },
    },
  },
  plugins: [],
}

