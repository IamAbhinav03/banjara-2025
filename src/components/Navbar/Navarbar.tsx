import { NavLink } from "react-router-dom";
// import logo from "../../assets/logo2.svg";
import logoWhite from "../../assets/logo-white.svg";
import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar at the top of the page
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else {
        // Show when scrolling up, hide when scrolling down
        setIsVisible(currentScrollY < lastScrollY);
      }

      setIsScrolled(currentScrollY > 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""} ${
        isVisible ? "visible" : "hidden"
      }`}
    >
      <img src={logoWhite} alt="Banjaara Logo" className="nav-logo" />

      {isMobile && (
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="back-icon"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          ) : (
            <>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </>
          )}
        </button>
      )}

      <ul
        className={`nav-items ${isOpen ? "open" : ""} ${
          isMobile ? "mobile" : ""
        }`}
      >
        <li>
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/competitions" onClick={() => setIsOpen(false)}>
            Competitions
          </NavLink>
        </li>
        <li>
          <NavLink to="/schedule" onClick={() => setIsOpen(false)}>
            Schedule
          </NavLink>
        </li>
        <li>
          <NavLink to="/team" onClick={() => setIsOpen(false)}>
            Team
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
