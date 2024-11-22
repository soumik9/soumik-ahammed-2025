import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      padding: "2rem",
      screens: {
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        text: {
          50: "#FBFDFE",
          100: "#E7E7E7",
          200: "#D1D1D1",
          300: "#CFCFCF",
          600: "#858585",
          700: "#4F4F4F",
          900: "#222222",
        },
      },
    },
  },
  plugins: [],
};
export default config;
