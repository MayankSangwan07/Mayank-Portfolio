/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0a0a0f",
          secondary: "#0f0f1a",
          card: "#13131f",
          border: "#1e1e2e",
        },
        accent: {
          primary: "#6c63ff",
          secondary: "#a78bfa",
          glow: "rgba(108,99,255,0.15)",
          border: "rgba(108,99,255,0.3)",
        },
        text: {
          primary: "#f0f0ff",
          secondary: "#a0a0b8",
          muted: "#5a5a7a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle, rgba(108,99,255,0.18) 1px, transparent 1px)",
        "accent-radial":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(108,99,255,0.18) 0%, transparent 60%)",
      },
      backgroundSize: {
        "dot-sm": "24px 24px",
        "dot-md": "32px 32px",
      },
      animation: {
        "marquee-left": "marqueeLeft 30s linear infinite",
        "marquee-right": "marqueeRight 30s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "border-spin": "borderSpin 4s linear infinite",
      },
      keyframes: {
        marqueeLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(30px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        glowPulse: {
          "0%,100%": { opacity: 0.4 },
          "50%": { opacity: 0.8 },
        },
        borderSpin: {
          "0%": { "--angle": "0deg" },
          "100%": { "--angle": "360deg" },
        },
      },
      boxShadow: {
        accent: "0 0 30px rgba(108,99,255,0.25)",
        "accent-sm": "0 0 12px rgba(108,99,255,0.2)",
        card: "0 4px 24px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};