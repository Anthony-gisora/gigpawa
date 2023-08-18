/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,}"
  ],
  theme: {
    backgroundImage:{
      getStated: " url(./images/getStated.svg)",
      ban: " url(./images/ban.svg)",
      add: "url(./images/add.svg)"
    },
    extend: {},
  },
  plugins: [],
}

