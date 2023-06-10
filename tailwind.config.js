/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {},
  },
  daisyui: {
    styled: true,
    themes: [
      "light", // first one will be the default theme
      "dark",
      {
        mytheme: {
          primary: "#6c6a69",
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}

