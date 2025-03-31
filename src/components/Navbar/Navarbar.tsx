import { NavLink, useLocation } from "react-router-dom";
// import logo from "../../assets/logo2.svg";
import logoWhite from "../../assets/logo-white.svg";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar at the top of the page
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else {
        // Show navbar when scrolling up, hide when scrolling down
        setIsVisible(currentScrollY < lastScrollY);
      }

      setIsScrolled(currentScrollY > 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isVisible
          ? "transform translate-y-0 opacity-100"
          : "transform -translate-y-full opacity-0"
      }`}
    >
      <div
        className={`w-full mx-auto px-4 py-4 flex justify-between items-center transition-all duration-300 ${
          isScrolled
            ? "bg-gradient-to-r from-pink-900/90 via-purple-900/90 to-blue-900/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-2">
          <img
            src={logoWhite}
            alt="Banjaara Logo"
            className="w-10 h-10"
            style={{ transform: "scale(3)", transformOrigin: "left" }}
          />
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.829-4.828 4.829a1 1 0 0 1-1.414-1.414l4.829-4.828-4.828-4.829a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.829 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>

        <div className="hidden md:flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-sans text-white transition-colors relative ${
                isActive
                  ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-pink-500 after:to-purple-500"
                  : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/competitions"
            className={({ isActive }) =>
              `font-sans text-white transition-colors relative ${
                isActive
                  ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-pink-500 after:to-purple-500"
                  : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500"
              }`
            }
          >
            Competitions
          </NavLink>
          <NavLink
            to="/schedule"
            className={({ isActive }) =>
              `font-sans text-white transition-colors relative ${
                isActive
                  ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-pink-500 after:to-purple-500"
                  : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500"
              }`
            }
          >
            Schedule
          </NavLink>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              `font-sans text-white transition-colors relative ${
                isActive
                  ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-pink-500 after:to-purple-500"
                  : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500"
              }`
            }
          >
            Team
          </NavLink>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-40 pt-24 pb-6 px-6 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link text-xl ${
                  isActive ? "text-pink-500" : "text-gray-800"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/competitions"
              className={({ isActive }) =>
                `nav-link text-xl ${
                  isActive ? "text-pink-500" : "text-gray-800"
                }`
              }
            >
              Competitions
            </NavLink>
            <NavLink
              to="/schedule"
              className={({ isActive }) =>
                `nav-link text-xl ${
                  isActive ? "text-pink-500" : "text-gray-800"
                }`
              }
            >
              Schedule
            </NavLink>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                `nav-link text-xl ${
                  isActive ? "text-pink-500" : "text-gray-800"
                }`
              }
            >
              Team
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
