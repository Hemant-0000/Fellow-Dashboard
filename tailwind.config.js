/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'my-shadow': '3px 0px 6px 0px rgba(246, 246, 246, 0.75)'
      },
      backgroundImage:{
        'bg-image': "url('/public/logo.png')",
      }
    },
  },
  plugins: [],
}
