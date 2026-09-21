/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sunflower: {
          50: "#FFFDF0",
          100: "#FFF9C4",
          200: "#FFF385",
          400: "#F5C400",
          500: "#FFD400", // Dominant Brand Yellow
          600: "#E5BE00",
        },
        crimson: {
          500: "#E23B3B", // Accent Red CTA
          600: "#D62F2F",
          700: "#B82323",
        },
        warmBg: "#FFFBF2", // Off-white background
        darkText: "#1A1A1A",
      },
      fontFamily: {
        heading: ["Space Grotesk", "Poppins", "Fredoka", "sans-serif"],
        sans: ["Inter", "Manrope", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '24px',
      }
    },
  },
  plugins: [],
}
