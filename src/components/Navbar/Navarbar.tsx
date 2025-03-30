import { Link } from "react-router-dom";
import logo from "../../assets/logo2.svg";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "transform -translate-y-full opacity-0"
          : "transform translate-y-0 opacity-100"
      }`}
    >
      <div
        className="w-full mx-auto px-4 py-4 flex justify-between items-center"
        style={{
          background:
            "linear-gradient(to right, rgba(100, 65, 165, 0.8), rgba(255, 165, 0, 0.8), rgba(62, 33, 251, 0.8))", // Adjust colors and opacity
          backdropFilter: "blur(1px)", // Optional blur
        }}
      >
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Banjaara Logo"
            className="w-10 h-10"
            style={{ transform: "scale(3)", transformOrigin: "left" }}
          />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
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
          <Link to="/" className="font-sans text-white hover:underline">
            Home
          </Link>
          <Link
            to="/competitions"
            className="font-sans text-white hover:text-pink-300 transition-colors"
          >
            Competitions
          </Link>
          <Link
            to="/schedule"
            className="font-sans text-white hover:text-pink-300 transition-colors"
          >
            Schedule
          </Link>
          <Link
            to="/team"
            className="font-sans text-white hover:text-pink-300 transition-colors"
          >
            Team
          </Link>
        </div>

        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden absolute top-full left-0 w-full bg-white/80 backdrop-blur-lg mt-1`}
        >
          <div className="flex flex-col items-center py-4">
            <a href="#home" className="text-black py-2 hover:underline">
              Home
            </a>
            <Link
              to="/competitions"
              className="text-black py-2 hover:underline"
            >
              Competition
            </Link>
            <a href="#meetings" className="text-black py-2 hover:underline">
              Meetings
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
