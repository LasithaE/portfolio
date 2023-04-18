/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
        contentContainer: "1140px",
        containerSmall: "1024px",
        containerxs: "768px",
      },
      screens: {
        xl: "1000px",
        lg: "795px",
        md: "700px",
        xs: "585px",
      },
      fontFamily: {
        bodyFont: ["Schibsted Grotesk", "sans-serif"],
      },
      height: {
        120: "20rem",
        122: "22rem",
        130: "30rem",
        140: "40rem",
      },
      width: {
        133: "33.5rem",
        129: "29rem",
      },
      margin: {
        102: "2.5rem",
        110: "10rem",
        111: "11rem",
        114: "14.5rem",
        116: "16rem",
        127: "27rem",
        140: "40rem",
      },
      colors: {
        bodyColorLight: "#FFF4EA",
        borderColorLight: "#9D5353",
        cardColorLight: "#FFD7CB",
        darkPinkColor: "#FFA4A4",
        brownColor: "#400a0a",
      },
    },
  },
  plugins: [],
};
