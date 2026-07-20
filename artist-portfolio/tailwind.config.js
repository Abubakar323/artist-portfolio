// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
//   theme: {
//     extend: {
//       fontFamily: {
//         display: ["'Cormorant Garamond'", "serif"],
//         arabic: ["'Amiri'", "serif"],
//         body: ["'Jost'", "sans-serif"],
//       },
//       colors: {
//         ink: {
//           DEFAULT: "#1a1410",
//           light: "#2d2620",
//           soft: "#4a3f35",
//         },
//         parchment: {
//           DEFAULT: "#f5ede0",
//           light: "#faf5ed",
//           dark: "#e8d9c5",
//         },
//         gold: {
//           DEFAULT: "#c9933a",
//           light: "#e0b060",
//           dark: "#9e6f22",
//         },
//         rose: {
//           artist: "#c4736a",
//         },
//       },
//       animation: {
//         "fade-up": "fadeUp 0.8s ease forwards",
//         "fade-in": "fadeIn 1s ease forwards",
//         "slide-left": "slideLeft 0.6s ease forwards",
//         float: "float 6s ease-in-out infinite",
//         "pulse-gold": "pulseGold 3s ease-in-out infinite",
//       },
//       keyframes: {
//         fadeUp: {
//           from: { opacity: 0, transform: "translateY(30px)" },
//           to: { opacity: 1, transform: "translateY(0)" },
//         },
//         fadeIn: {
//           from: { opacity: 0 },
//           to: { opacity: 1 },
//         },
//         slideLeft: {
//           from: { opacity: 0, transform: "translateX(30px)" },
//           to: { opacity: 1, transform: "translateX(0)" },
//         },
//         float: {
//           "0%, 100%": { transform: "translateY(0px)" },
//           "50%": { transform: "translateY(-12px)" },
//         },
//         pulseGold: {
//           "0%, 100%": { opacity: 0.6 },
//           "50%": { opacity: 1 },
//         },
//       },
//     },
//   },
//   plugins: [],
// };





/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        aston: ["'Aston Script'", "cursive"], // Registering your custom Aston Script font
        arabic: ["'Amiri'", "serif"],
        body: ["'Jost'", "sans-serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#1a1410",
          light: "#2d2620",
          soft: "#4a3f35",
        },
        parchment: {
          DEFAULT: "#f5ede0",
          light: "#faf5ed",
          dark: "#e8d9c5",
        },
        gold: {
          DEFAULT: "#c9933a",
          light: "#e0b060",
          dark: "#9e6f22",
        },
        rose: {
          artist: "#c4736a",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "slide-left": "slideLeft 0.6s ease forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-gold": "pulseGold 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: "translateY(30px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideLeft: {
          from: { opacity: 0, transform: "translateX(30px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGold: {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};