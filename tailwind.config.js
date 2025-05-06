/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "twinkle-slow": "twinkle 4s ease-in-out infinite",
        "twinkle-medium": "twinkle 3s ease-in-out infinite",
        "twinkle-fast": "twinkle 2s ease-in-out infinite",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
    },
  },
  plugins: [],
};
