/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ":root": {
          "--background": "#ffffff",
          "--foreground": "#171717",
        },
        ".dark": {
          "--background": "#121212",
          "--foreground": "#f4f4f4",
        },
        body: {
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
          fontFamily: "var(--font-serif)",
          transition: "background-color 0.3s, color 0.3s",
        },
      });
    }),
  ],
};
