// tailwind.config.js
// import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        gradient:
          "linear-gradient(145.37deg, rgba(255, 255, 255, 0.09) -8.75%, rgba(255, 255, 255, 0.027) 83.95%)",
        gradientHover:
          "linear-gradient(145.37deg, rgba(255, 255, 255, 0.1) -8.75%, rgba(255, 255, 255, 0.057) 83.95%)",
        shine:
          "linear-gradient(45deg, rgba(255,255,255,0) 45%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 55%,rgba(255,255,255,0) 100%)",
      },

      keyframes: {
        shinee: {
          "0%": { backgroundPosition: "-80%" },
          "100%": { backgroundPosition: "80%" },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        dash: {
          "0%": { strokeDashoffset: 1000 },
          "100%": { strokeDashoffset: 0 },
        },
      },
    },
  },

  plugins: [require("@tailwindcss/container-queries")],
  // plugins: [require("@tailwindcss/container-queries"), nextui()],
};
