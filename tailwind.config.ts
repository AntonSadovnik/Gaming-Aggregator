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
    fontFamily: {},
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
