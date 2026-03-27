import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        background: "#fbfbf7",
        foreground: "#0f172a",
        panel: "#ffffff",
        border: "#dbe3ee",
        muted: "#64748b",
        accent: "#93e0be",
        primary: "#7db7ff",
        secondary: "#b8ecd7",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(156, 212, 255, 0.55), 0 18px 50px rgba(134, 188, 255, 0.18)",
        card: "0 20px 60px rgba(15, 23, 42, 0.08)",
        soft: "0 12px 30px rgba(15, 23, 42, 0.05)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        gridShift: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(32px,32px,0)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 8s ease-in-out infinite",
        "grid-shift": "gridShift 18s linear infinite",
      },
      fontFamily: {
        display: ["SF Pro Display", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
        sans: ["SF Pro Text", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
