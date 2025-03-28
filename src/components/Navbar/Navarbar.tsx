import { Link } from "react-router-dom";
import logo from "../../assets/logo2.svg"; // Replace with your logo

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white/60 z-50">
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="Banjaara Logo"
          className="w-10 h-10"
          style={{ transform: "scale(3)", transformOrigin: "left" }}
        />
      </div>
      <div className="flex gap-6">
        <a href="#home" className="text-white hover:underline">
          Home
        </a>
        <Link to="/competitions" className="text-white hover:underline">
          Competition
        </Link>
        <a href="#meetings" className="text-white hover:underline">
          Meetings
        </a>
      </div>
    </nav>
  );
}
