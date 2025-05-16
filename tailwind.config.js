import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      prefix: "heroui",
      themes: {
        light: {
          colors: {
            gradColor: "#fafafa",
            scrollColor: "#9d9d9d",
            borderColor: "#c5c5c5",
          },
        },
        dark: {
          colors: {
            gradColor: "#3b82f641",
            scrollColor: "#2d2d2d",
            borderColor: "#141414",
          },
        },
      },
    }),
  ],
};

module.exports = config;
