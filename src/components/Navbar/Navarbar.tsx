import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo2.svg";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const isMainPage = location.pathname === "/";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isMainPage && !isScrolled
            ? "bg-transparent text-white"
            : "backdrop-blur-md bg-[#f8f8f8] text-black"
        }`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="w-full px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <img
              src={logo}
              alt="Banjaara Logo"
              className="w-12 h-12"
              style={{ transform: "scale(1.5)", transformOrigin: "left" }}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10">
            <Link to="/" className="hover:underline font-semibold">Home</Link>
            <Link to="/competitions" className="hover:text-pink-500 font-medium">Competitions</Link>
            <Link to="/team" className="hover:text-pink-500 font-medium">Team</Link>
            <Link to="/schedule" className="hover:text-pink-500 font-medium">Schedule</Link>
            <Link to="/contact" className="hover:text-pink-500 font-medium">Contact</Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-black z-50 relative">
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
        </div>
      </nav>

      {/* TRUE FULLPAGE OVERLAY (within its own full wrapper div) */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-[9999] bg-white flex flex-col justify-center items-center transition-all duration-300">
          <div className="absolute top-4 right-4">
            <button onClick={toggleMobileMenu} className="text-black">
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.829-4.828 4.829a1 1 0 0 1-1.414-1.414l4.829-4.828-4.828-4.829a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.829 4.828z"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center gap-6">
            <Link
              to="/"
              onClick={toggleMobileMenu}
              className="text-black text-2xl font-semibold"
            >
              Home
            </Link>
            <Link
              to="/competitions"
              onClick={toggleMobileMenu}
              className="text-black text-2xl font-medium"
            >
              Competitions
            </Link>
            <Link
              to="/team"
              onClick={toggleMobileMenu}
              className="text-black text-2xl font-medium"
            >
              Team
            </Link>
            <Link
              to="/schedule"
              onClick={toggleMobileMenu}
              className="text-black text-2xl font-medium"
            >
              Schedule
            </Link>
            <Link
              to="/contact"
              onClick={toggleMobileMenu}
              className="text-black text-2xl font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
