import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiSwift, SiAndroid, SiReact, SiVite, SiTailwindcss } from 'react-icons/si';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinkClass = ({ isActive }) =>
    `px-2 py-1 hover:text-white transition ${isActive ? 'text-white underline underline-offset-4' : 'text-[#3DDC84]'}`;

  return (
    <header className="w-screen fixed top-0 left-0 z-50" style={{ backgroundImage: 'var(--background-image-header-gradient)' }}>
      {/* Skip link for accessibility */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-black/70 text-white px-3 py-2 rounded">
        Skip to content
      </a>

      {/* Top row: social + docs icons */}
      <div className="relative h-[177px]">
        {/* Top Left Icons */}
        <div className="absolute top-4 left-6 flex items-center gap-4 text-white text-xl">
          <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
            <FaGithub />
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
            <FaLinkedin />
          </a>
        </div>

        {/* Centered Logo */}
        <div className="w-full h-full flex justify-center items-center">
          <Link to="/" aria-label="Go to home">
            <div className="relative spinY-wrap">
              {/* Ghost trail (layer 1) */}
              <img
                src="/assets/aira_icon.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-[88px] md:h-[120px] w-auto opacity-40 blur-[3px] spinY"
                style={{ animationDelay: '0.25s' }}
              />
              {/* Ghost trail (layer 2) */}
              <img
                src="/assets/aira_icon.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-[88px] md:h-[120px] w-auto opacity-20 blur-[10px] spinY"
                style={{ animationDelay: '0.5s' }}
              />
              {/* Ghost trail (layer 3) */}
              <img
                src="/assets/aira_icon.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-[88px] md:h-[120px] w-auto opacity-10 blur-[14px] spinY"
                style={{ animationDelay: '1s' }}
              />
              {/* Ghost trail (layer 4) */}
              <img
                src="/assets/aira_icon.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-[88px] md:h-[120px] w-auto opacity-5 blur-[18px] spinY"
                style={{ animationDelay: '1.5s' }}
              />
              {/* Main spinning icon (no glow) */}
              <img
                src="/assets/aira_icon.png"
                alt="J. Henry personal logo (AIRA icon)"
                className="relative h-[88px] md:h-[120px] w-auto spinY"
              />
            </div>
          </Link>
        </div>

        {/* Top Right Icons (Doc quick-links) */}
        <div className="absolute top-4 right-6 flex items-center gap-4 text-xl">
          <a aria-label="Swift Documentation" href="https://swift.org/documentation/" target="_blank" rel="noopener noreferrer">
            <SiSwift className="text-red-500 hover:opacity-80" title="Swift Docs" />
          </a>
          <a aria-label="Android Documentation" href="https://developer.android.com/docs" target="_blank" rel="noopener noreferrer">
            <SiAndroid className="text-green-500 hover:opacity-80" title="Android Docs" />
          </a>
          <a aria-label="React Documentation" href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">
            <SiReact className="text-cyan-400 hover:opacity-80" title="React Docs" />
          </a>
          <a aria-label="Vite Guide" href="https://vitejs.dev/guide/" target="_blank" rel="noopener noreferrer">
            <SiVite className="text-purple-400 hover:opacity-80" title="Vite Docs" />
          </a>
          <a aria-label="Tailwind CSS Documentation" href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer">
            <SiTailwindcss className="text-blue-400 hover:opacity-80" title="Tailwind Docs" />
          </a>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="w-full h-[30px] bg-black/50 flex items-center px-4 sm:px-6 justify-between">
        {/* Hamburger for Mobile */}
        <button
          className="text-[#3DDC84] text-2xl md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex ml-[100px]" aria-label="Primary">
          <ul className="flex items-center gap-6 text-sm uppercase font-semibold">
            <li><NavLink to="/" className={navLinkClass} end>Home</NavLink></li>
            <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
            <li><NavLink to="/portfolio" className={navLinkClass}>Portfolio</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
            <li><NavLink to="/resume" className={navLinkClass}>Resume</NavLink></li>
          </ul>
        </nav>
      </div>

      {/* Mobile Side Nav */}
      {menuOpen && (
        <div id="mobile-menu" className="fixed top-[207px] left-0 w-3/4 max-w-xs h-[calc(100vh-207px)] bg-black/80 backdrop-blur text-[#3DDC84] z-50 md:hidden">
          <nav aria-label="Mobile Primary" className="flex flex-col space-y-6 p-6">
            <NavLink to="/" onClick={() => setMenuOpen(false)} className={({isActive}) => `${isActive ? 'text-white underline' : ''}`}>Home</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({isActive}) => `${isActive ? 'text-white underline' : ''}`}>About</NavLink>
            <NavLink to="/portfolio" onClick={() => setMenuOpen(false)} className={({isActive}) => `${isActive ? 'text-white underline' : ''}`}>Portfolio</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({isActive}) => `${isActive ? 'text-white underline' : ''}`}>Contact</NavLink>
            <NavLink to="/resume" onClick={() => setMenuOpen(false)} className={({isActive}) => `${isActive ? 'text-white underline' : ''}`}>Resume</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
