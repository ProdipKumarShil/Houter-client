/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-primary": "#E02828",
        "my-secondary": "#00000080",
        "h-primary": "#1B1C57",
        "h-secondary": "#10B981"
      }
    },
  },
  plugins: [require("daisyui")],
}