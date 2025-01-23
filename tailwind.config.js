/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Jua", "sans-serif"],
      monospace: ["monospace"]
    },
    extend: {
      colors: {
        "front": {
          DEFAULT: "rgb(56, 56, 56)",
          "dark": "rgb(20, 20, 20)",
          "light": "rgb(129, 129, 129)",
          "bright": "rgb(218, 218, 218)",
          "important": "rgb(255, 100, 100)"
        },
        "back": {
          DEFAULT: "rgb(231, 216, 164)",
          "dark": "rgb(185, 177, 148)",
          "light": "rgb(255, 243, 198)",
          "important": "rgb(107, 25, 25)",
          "modal": "rgb(0, 0, 0, 0.3)"
        }
      }
    },
  },
  plugins: [],
}

