/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT: '#1877f2'
        },
        secondary:{
          DEFAULT: '#fbfff1'
        },
        item:{
          DEFAULT: '#70d6ff'
        }
      }
    },
  },
  plugins: [],
}

