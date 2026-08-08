/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FFF1CA",
        primary: "#2D4F2B",
        secondary: "#708A58",
        accent: "#FFB823",
        surface: "#FFFFFF",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        card: "20px",
      },
      boxShadow: {
        soft: "0 24px 60px -24px rgba(45,79,43,0.35)",
        "soft-sm": "0 8px 24px -12px rgba(45,79,43,0.25)",
      },
      keyframes: {
        aurora: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "100%": { transform: "translate(-2%,3%) scale(1.06)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        spinslow: {
          to: { transform: "rotate(360deg)" },
        },
        blink: {
          "50%": { opacity: 0 },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        pulsering: {
          "0%,100%": { boxShadow: "0 0 0 4px rgba(63,157,76,0.22)" },
          "50%": { boxShadow: "0 0 0 8px rgba(63,157,76,0.1)" },
        },
        dotdrop: {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "70%": { opacity: 0 },
          "100%": { transform: "translateY(14px)", opacity: 0 },
        },
      },
      animation: {
        aurora: "aurora 16s ease-in-out infinite alternate",
        floaty: "floaty 5s ease-in-out infinite",
        spinslow: "spinslow 26s linear infinite",
        blink: "blink 1s steps(1) infinite",
        marquee: "marquee 28s linear infinite",
        pulsering: "pulsering 2s ease-in-out infinite",
        dotdrop: "dotdrop 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
