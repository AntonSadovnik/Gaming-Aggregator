import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#7300FF",
      white: "#FFFFFF",
      black: "#000000",
      darkBG: "#1A0B28",
      glass: "#E6D7E433",
      star: "#FFC700",
      electricViolet: {
        50: "#f4f0ff",
        100: "#ece4ff",
        200: "#dacdff",
        300: "#c0a6ff",
        400: "#a473ff",
        500: "#8a3bff",
        600: "#8014ff",
        700: "#7300ff",
        800: "#6101d6",
        900: "#5103af",
        950: "#300077",
      },
    },
    fontFamily: {
      main: ["Poppins", "sans-serif"],
    },
    fontSize: {
      "mobile-1": "46px",
      "mobile-2": "37px",
      "mobile-3": "29px",
      "mobile-4": "23px",
      "mobile-5": "19px",
      "mobile-6": "15px",
      "mobile-7": "12px",
      "mobile-8": "10px",
      "mobile-9": "8px",
      "desktop-1": "117px",
      "desktop-2": "94px",
      "desktop-3": "75px",
      "desktop-4": "60px",
      "desktop-5": "48px",
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
