/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "3rem",
      },
      screens: {
        xl: "1440px",
      },
    },
    extend: {
      colors: {
        navy: "#00081E",
        blue: "#0E4DA4",
        white: "#FFFFFF",
        surface: "#F7FAFC",
        text: "#1A202C",
        muted: "#64748B",
        border: "#E2E8F0",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        hero: ["4.5rem", "1.1"],
        display: ["3.5rem", "1.1"],
        h1: ["3rem", "1.2"],
        h2: ["2.25rem", "1.2"],
        h3: ["1.75rem", "1.3"],
        body: ["1rem", "1.8"],
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
}
