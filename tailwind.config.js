/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "kanit": ["kanit", "sans-serif"],
        "jetbrains": ['JetBrains Mono', "monospace"]
      }
      ,
      colors: {
        'primary': '#282828',
        "primary-dark": "#212121",
        "text-primary": "#d79921",
        "text-secondary": "#665c54"
      }
    },
  },
  plugins: [],
}

