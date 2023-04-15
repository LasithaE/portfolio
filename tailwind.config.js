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
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Schibsted Grotesk", "sans-serif"],
      },
      colors: {
        bodyColorLight: "#FFF3E2",
        textDark: "#F6F6E6",
        textLight: "#241313",
        headingDark: "#063227",
        headingLight: "#701B1B",
        bodyColorDark: "#052038",
        inlineBodyDark: "#76B3B7",
        inlineBodyLight: "#FF9F81",
      },
    },
  },
  plugins: [],
};
