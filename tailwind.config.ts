import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        error: "#b80000",
        light: {
          100: "#333F4E",
          200: "#A3B2C7",
          300: "#F2F5F9",
          400: "#F2F4F8",
        },
        dark: {
          100: "#04050c",
          200: "#131524",
        },
      },
    },
    fontFamily: {
      poppins: ["var(--font-poppins)"],
    },
  },
  plugins: [],
} satisfies Config;
