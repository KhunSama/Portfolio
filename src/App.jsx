import { useState, useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Interests from "./pages/Interests";

// Route name -> page component. Keys must match ids in src/data/nav.js.
const PAGES = { home: Home, about: About, portfolio: Portfolio, resume: Resume, contact: Contact, interests: Interests };

// Reads the current page from the URL hash (e.g. #/about)
const readRoute = () => {
  const h = window.location.hash.replace("#/", "");
  return PAGES[h] ? h : "home";
};

export default function App() {
  const [route, setRoute] = useState(readRoute);
  const [open, setOpen] = useState(false);

  // Update the page when the hash changes, and scroll to top
  useEffect(() => {
    const onHash = () => { setRoute(readRoute()); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = (id) => { window.location.hash = "#/" + id; setOpen(false); };
  const Page = PAGES[route];

  return (
    <div className="min-h-screen flex flex-col">
      <ThemeToggle />
      <Menu route={route} go={go} open={open} setOpen={setOpen} />
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 md:px-20 pt-20 pb-28">
        {/* key={route} restarts the transition animation on every page change */}
        <div key={route} className="page"><Page go={go} /></div>
      </main>
      <Footer />
    </div>
  );
}
