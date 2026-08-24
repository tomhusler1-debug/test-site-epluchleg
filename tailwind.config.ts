import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand accent — extracted from the EPLUCH'LEG logo (#F08A00 = orange-500).
        // Used sparingly: CTAs, active states, key numbers. Never a large flat area.
        orange: {
          50: "#FFF6E9",
          100: "#FFE7C2",
          200: "#FFCE85",
          300: "#FFB246",
          400: "#FA9C1A",
          500: "#F08A00",
          600: "#CC7300",
          700: "#A55D00",
          800: "#7D4700",
        },
        // Secondary — warm sand/taupe. Structure: cards, alternating sections,
        // secondary buttons, and (800) the mid-dark surfaces.
        beige: {
          50: "#FBF7F0",
          100: "#F3EAD9",
          200: "#E8D8BE",
          300: "#DAC29E",
          400: "#C7A87C",
          500: "#B08D5C",
          600: "#8F7148",
          700: "#705838",
          800: "#4F3E28",
        },
        cream: {
          DEFAULT: "#F7F4EC",
          50: "#FFFFFF",
          100: "#FBF8F2",
          200: "#F6F1E6",
          300: "#EDE4CF",
          400: "#E4DBC0",
        },
        ink: {
          DEFAULT: "#241C14",
          light: "#453A2C",
          // Kept at the WCAG-fixed value (was #6B7568 pre-fix): #746650 reads
          // clearly on white but drops under 4.5:1 on the cream-200/300
          // section backgrounds this token is used on for body text.
          muted: "#5A5145",
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
