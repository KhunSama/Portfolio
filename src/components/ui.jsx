// Small reusable pieces shared by every page.

// Page title: Japanese label, English title, red underline.
export const Heading = ({ jp, en }) => (
  <div className="mb-10 rise">
    <p className="font-serif text-red-700 dark:text-red-400 text-lg tracking-widest">{jp}</p>
    <h1 className="font-serif text-4xl md:text-5xl font-bold">{en}</h1>
    <div className="mt-4 h-1 w-16 bg-red-700 dark:bg-red-400 rounded"></div>
  </div>
);

// Bordered card with a hover lift. `delay` (ms) staggers the entrance.
export const Card = ({ children, delay = 0, className = "" }) => (
  <div
    style={{ animationDelay: delay + "ms" }}
    className={
      "rise rounded-2xl border-2 border-stone-900/80 dark:border-stone-100/70 bg-white/60 dark:bg-white/5 p-5 transition hover:-translate-y-1 hover:shadow-[6px_6px_0_#b91c1c] " +
      className
    }
  >
    {children}
  </div>
);
