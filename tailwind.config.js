/** @type {import('tailwindcss').Config} */
module.exports = {
  // change
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7aa0ff",
          secondary: "#58468c",
          accent: "#58468c",
          neutral: "#ff8a73",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  // change
  plugins: [require("daisyui")],
}
