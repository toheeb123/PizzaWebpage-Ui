/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
      },

      container: {
        center: true,
        padding: "15px",
      },

      colors: {
        OrangeColor: "#FC4B37",
        BurgaColor: "#C6E7FE",
        LightOrange: "#E6B1AA",
        BgColor: "#FFFBF5",
        TextBlack: "#1D1D1D",
      },
    },
  },
  plugins: [],
};
