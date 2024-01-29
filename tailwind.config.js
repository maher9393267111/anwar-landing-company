/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],
  plugins: [require("preline/plugin")],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: "4rem",
      },

      colors: {
        primaryColor: {
          1000: "#032a45",
          900: "#0869ae",
          800: "#2078b6",
          400: "#e6f0f6",
        },
        simbleBg: "#f4f4e6",
        secondaryBg: "#f4f4e6",
        upperNavColor: "#1D2026",
        lowerNavColor: "#ffffff",
        // primaryColor: { 900: "#0095FF", 800: "#199fff" },
        secondaryColor: { 900: "#18203A", 800: "#2f364d" },
        lightColor: { 900: "#d9d9d9", 800: "#F2F2F2" },
        simpleGray: "#F2F2F2",
        grayText: "#B3B3B3",
        simpleBorderGray: "#E9EAF0",
      },
    },
    fontFamily: {
      MyFont: ["Almarai", "serif"],
    },
  },
};
