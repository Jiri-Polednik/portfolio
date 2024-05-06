require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        normal: 300,
        semibold: 600,
        bold: 700,
      },
      colors: {
        violet: {
          light: "#A163F4",
          dark: "#4C1D95",
        },
        yellow: {
          light: "#FFC107",
          dark: "#FFA000",
        },
        blue: {
          light: "#007BFF",
          dark: "#003049",
        },
        green: {
          light: "#6FCF97",
          dark: "#219653",
        },
        gray: {
          light: "#F5F5F5",
          dark: "#212121",
        },
      },
    },
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["18px", "28px"],
      xl: ["20px", "24px"],
      "2xl": ["23px", "28px"],
      "3xl": ["24px", "28px"],
      "4xl": ["28px", "36px"],
      "5xl": ["30px", "36px"],
      "6xl": ["33px", "40px"],
      "7xl": ["36px", "44px"],
      "8xl": ["40px", "48px"],
      "9xl": ["44px", "52px"],
      "10xl": ["72px", "88px"],
    },
  },
  safelist: [
    "bg-violet-light",
    "bg-yellow-light",
    "bg-blue-light",
    "bg-green-light",
    "bg-violet-dark",
    "bg-yellow-dark",
    "bg-blue-dark",
    "bg-green-dark",
  ],
};
