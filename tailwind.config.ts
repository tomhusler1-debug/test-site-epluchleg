import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#eef3ee",
          100: "#d7e3d6",
          200: "#b0c7ae",
          300: "#87a884",
          400: "#5f8a5c",
          500: "#436a41",
          600: "#31512f",
          700: "#25402a", // deep primary
          800: "#1c3121",
          900: "#132318",
          950: "#0b1610",
        },
        cream: {
          DEFAULT: "#F7F4EC",
          50: "#FFFFFF",
          100: "#FBFAF5",
          200: "#F7F4EC",
          300: "#EFE9D8",
          400: "#E4DBC0",
        },
        clay: {
          50: "#FBEDE3",
          100: "#F5D5BE",
          200: "#EBB088",
          300: "#DD8C58",
          400: "#C4622D",
          500: "#A94F22",
          600: "#8A3F1B",
          700: "#6B3115",
        },
        ink: {
          DEFAULT: "#1B2118",
          light: "#3C463A",
          muted: "#6B7568",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 6.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 3.4vw, 3rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "display-sm": ["clamp(1.5rem, 2.4vw, 2.1rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        content: "1360px",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(27, 33, 24, 0.06)",
        card: "0 8px 30px rgba(27, 33, 24, 0.08)",
        lifted: "0 24px 60px -12px rgba(27, 33, 24, 0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        marquee: "marquee 32s linear infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
