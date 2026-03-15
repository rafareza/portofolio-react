import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const navItems = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'certificates', label: 'Certificates' },
  { to: 'contact', label: 'Contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="hero" smooth={true} duration={500} className="navbar-logo">
          {'<Rafareza/>'}
        </Link>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar-cta"
            onClick={closeMenu}
          >
            Hire Me
          </Link>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
