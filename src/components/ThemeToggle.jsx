import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

// Read the starting theme: saved choice first, then system preference.
function getInitialDark() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
  } catch (e) {
    /* storage unavailable: ignore */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(getInitialDark);

  // Keep the <html> class and saved choice in sync with state.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch (e) {
      /* storage unavailable: ignore */
    }
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark(!dark)}
      aria-label="Toggle light/dark theme"
      aria-pressed={dark}
      className="
        fixed top-4 right-4 z-30
        px-3 py-3
        rounded-full 
        border-2 border-stone-900 dark:border-stone-100
        bg-[#f6f1e7] dark:bg-[#14110f]
        text-stone-900 dark:text-[#f5eee2]
        transition
        hover:scale-105 
        hover:bg-[#14110f] hover:text-[#f5eee2]
        dark:hover:bg-[#f6f1e7] dark:hover:text-stone-900
        focus:outline-none focus-visible:ring-4 ring-red-700/40
      "
    >
      {dark ? <MoonIcon className="w-7 h-7" /> : <SunIcon className="w-7 h-7" />}
    </button>
  );
}
