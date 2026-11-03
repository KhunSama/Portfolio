import { PROFILE } from "../data/profile";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

// Shown at the bottom of every page.
export default function Footer() {
  const githubUrl = PROFILE.github
  const instagramUrl = PROFILE.instagram
  const linkedinUrl = PROFILE.linkedin

  return (
    <footer 
      className="
        grid grid-cols-2
        items-center 
        justify-center 
        gap-2
        border-t-2 
        border-stone-900/80 
        dark:border-stone-100/70 
        px-6 py-6 pb-24 
        md:pb-6 
        text-center 
        text-sm
      ">
      <div
        className="
          max-w-2xl 
          mx-auto 
          opacity-70
        "> 
        © {new Date().getFullYear()} {PROFILE.name} · Built with React &amp; Tailwind
      </div>
      <div 
        className="
          max-w-2xl 
          mx-auto 
          opacity-70
          flex
          items-center
          gap-4
        ">
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub"
          className="hover:scale-110 transition-transform duration-200"
        >
          <FaGithub size={18} />
        </a>
        <a 
          href={instagramUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Instagram"
          className="hover:scale-110 transition-transform duration-200"
        >
          <FaInstagram size={18} />
        </a>
        <a 
          href={linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
          className="hover:scale-110 transition-transform duration-200"
        >
          <FaLinkedin size={18} />
        </a>
      </div>
    </footer>
  );
}
