import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 80px rgba(255, 255, 255, 0.10)",
        soft: "0 24px 80px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
} satisfies Config;
