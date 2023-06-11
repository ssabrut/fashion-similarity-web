/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./scr/*.vue",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

