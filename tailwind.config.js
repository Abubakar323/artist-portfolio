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
        // Overrides Tailwind's default purple/cyan/pink/blue shades with
        // CSS variables so the whole site re-colors when the theme switcher
        // changes data-theme on <html> (see src/index.css and
        // src/context/ThemeContext.jsx). Every existing `purple-500`,
        // `cyan-400`, etc. class in the components keeps working as-is.
        purple: {
          300: "rgb(var(--c-primary-300) / <alpha-value>)",
          400: "rgb(var(--c-primary-400) / <alpha-value>)",
          500: "rgb(var(--c-primary-500) / <alpha-value>)",
          600: "rgb(var(--c-primary-600) / <alpha-value>)",
        },
        cyan: {
          300: "rgb(var(--c-secondary-300) / <alpha-value>)",
          400: "rgb(var(--c-secondary-400) / <alpha-value>)",
          500: "rgb(var(--c-secondary-500) / <alpha-value>)",
          600: "rgb(var(--c-secondary-600) / <alpha-value>)",
        },
        blue: {
          400: "rgb(var(--c-secondary-400) / <alpha-value>)",
          500: "rgb(var(--c-secondary-500) / <alpha-value>)",
        },
        pink: {
          400: "rgb(var(--c-tertiary-400) / <alpha-value>)",
          500: "rgb(var(--c-tertiary-500) / <alpha-value>)",
          600: "rgb(var(--c-tertiary-600) / <alpha-value>)",
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