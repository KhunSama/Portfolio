/** @type {import('tailwindcss').Config} */

/* ==========================================================
   tailwind.config.js (Tailwind v3)
   ----------------------------------------------------------
   - darkMode: "class"  -> the ThemeToggle adds/removes the
     "dark" class on <html>, and every `dark:` style follows it.
   - fontFamily         -> enables the `font-serif` and `font-sans`
     classes used across the site (Noto Serif JP / Noto Sans JP).
   - content            -> tells Tailwind which files to scan for
     class names (standard Vite + React layout).

   TAILWIND v4 USERS: v4 doesn't use this file by default.
   Put the equivalent in your CSS instead:
       @import "tailwindcss";
       @custom-variant dark (&:where(.dark, .dark *));
       @theme {
         --font-serif: "Noto Serif JP", Georgia, serif;
         --font-sans: "Noto Sans JP", system-ui, sans-serif;
       }
   ========================================================== */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Noto Serif JP"', "Georgia", "serif"],
        sans: ['"Noto Sans JP"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
