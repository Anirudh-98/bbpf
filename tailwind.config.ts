import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          DEFAULT: "#9EE839",
          light: "#B8F558",
          dark: "#82CD22",
          muted: "#E2F8B6",
        },
        forest: {
          DEFAULT: "#11261C",
          light: "#1C3B2D",
          deep: "#0B1A13",
          surface: "#183628",
        },
        terracotta: {
          DEFAULT: "#C1622D",
          light: "#D68350",
          dark: "#9E4E22",
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#DBBE5E",
          dark: "#A9841E",
        },
        ivory: "#F6F7F2",
        cream: "#FAF9F5",
        card: "#FFFFFF",
        charcoal: "#1C1D1B",
        warmgrey: "#73756F",
        stonebg: "#F0F2EB",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        pill: "9999px",
        "4xl": "2.5rem",
        "5xl": "3rem",
      },
      maxWidth: {
        canvas: "1440px",
        content: "1240px",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(17, 38, 28, 0.06)",
        card: "0 8px 30px rgba(17, 38, 28, 0.08)",
        lifted: "0 20px 50px rgba(17, 38, 28, 0.12)",
        glow: "0 0 25px rgba(158, 232, 57, 0.35)",
      },
      spacing: {
        section: "6rem",
        "section-sm": "4rem",
      },
    },
  },
  plugins: [],
};

export default config;
