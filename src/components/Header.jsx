import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <h1 className={`logo ${scrolled ? "small" : ""}`}>Camila Orts</h1>

      <button
        className={`menu-btn ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={menuOpen ? "nav-open" : ""}>
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Sobre mí
            </Link>
          </li>
          <li>
            <Link to="/proyectos" onClick={() => setMenuOpen(false)}>
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="/contacto" onClick={() => setMenuOpen(false)}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
