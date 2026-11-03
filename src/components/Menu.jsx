import { useEffect } from "react";
import { NAV } from "../data/nav";

export default function Menu({ route, go, open, setOpen }) {
  useEffect(() => {
    if (!open) return; // only listen while the menu is open
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  const current = NAV.find((n) => n.id === route);

  return (
    <>
      {/* Vertical current-page label (desktop only) */}
      <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-3 font-serif opacity-80">
        <span className="text-3xl text-red-700 dark:text-red-400">{current.kanji}</span>
        <span className="vert tracking-[.4em] text-sm uppercase">{route}</span>
      </div>

      {/* Floating seal button */}
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
        className="fixed z-50 right-5 bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] w-16 h-16 rounded-2xl bg-red-700 text-white font-serif text-3xl shadow-xl hover:rotate-6 hover:scale-105 transition"
      >
        {open ? "×" : "門"}
      </button>

      {/* Full-screen tile grid: always mounted, fades in/out */}
      <div
        aria-hidden={!open}
        className={
          "fixed inset-0 z-40 bg-[#f6f1e7] dark:bg-[#14110f] flex items-center justify-center p-6 " +
          "transition-[opacity,visibility] duration-300 ease-out " +
          (open
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none")
        }
      >
        <nav className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
          {NAV.map((n, i) => (
            // Wrapper handles the enter/exit animation,
            // so the button's own hover effects stay snappy.
            <div
              key={n.id}
              style={{ transitionDelay: open ? 100 + i * 60 + "ms" : "0ms" }}
              className={
                "aspect-square md:aspect-[4/3] transition duration-300 ease-out " +
                (open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")
              }
            >
              <button
                onClick={() => go(n.id)}
                className={
                  "w-full h-full rounded-2xl border-2 flex flex-col items-center justify-center gap-2 transition hover:-translate-y-1 hover:bg-red-700 hover:text-white hover:border-red-700 " +
                  (route === n.id
                    ? "bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 border-transparent"
                    : "border-stone-900 dark:border-stone-100")
                }
              >
                <span className="font-serif text-5xl">{n.kanji}</span>
                <span className="font-bold tracking-wide">{n.en}</span>
              </button>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}