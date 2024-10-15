/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      emerald: "#8AAB0E",
      fern: "#81A303",
      basil: "#BCD55E",
      maverick: "#05334F",
      aegean: "#016EB1",
      eerie: "#121212",
      white: "#ffffff",
      black: "#000000",
      palatinate: "#6A205F",
      blueberry: "#4285F4",
      dandelion: "#F7D673",
      urobilin: "#E8B827",
      "light-silver": "#D9D9D9",
      "bright-gray": "#E9E9E9",
      "quick-silver": "#A6A6A6",
      "silver-chalice": "#ABABAB",
      "egyptian-blue": "#1C3AA9",
      "north-texas-green": "#089D20",
      "light-silver-40": "#D9D9D966",
      "eerie-50": "#12121280",
      "aegean-60": "#016eb299",
      "aegean-80": "#016EB1cc",
      "eerie-80": "#121212cc",
      "white-90": "#ffffffe6",
    },
    screens: {
      s: "500px",
      sm: "640px",
      md: "768px",
      m: "890px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        lemon: ["var(--lemon-font)", ...fontFamily.sans],
        poppins: ["var(--poppins-font)", ...fontFamily.sans],
        segoe: ["var(--segoe-font)", ...fontFamily.sans],
      },
      backgroundImage: {
        "certitude-intro-bg": "url('/certitude-intro.png')",
        "for-more-info-bg": "url('/for-more-info.png')",
        "about-CCS-bg": "url('/About CCS.png')",
        "types-of-care": "url('/types-of-care.png')",
        "contact-bg": "url('/contact-bg.jpg')",
      },
    },
  },
  plugins: [],
};
