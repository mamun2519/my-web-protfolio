/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {},
    container: {
      padding: {
        DEFAULT: "8rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "4rem",
      },
    },
    
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#DA1E37",
          "primary-focus": "#E74848",
        },
      },
    ],
  },
  plugins: [require("daisyui")],

}
