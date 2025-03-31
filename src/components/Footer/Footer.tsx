import {
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/logo-white.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="Banjaara Logo"
                className="w-4 h-4 pl--4"
                style={{ transform: "scale(10)", transformOrigin: "left" }}
              />
            </div>
            <p className="text-lg font-playscript mt-6 text-gray-400">
              A carnival of magic
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.instagram.com/banjaara.ashoka?igsh=MWF0NGltZTJqNDRvOQ=="
                className="hover:text-pink-500 transition-colors"
                aria-label="Instagram"
                target="_blank"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/banjaara-ashoka/about/"
                className="hover:text-pink-500 transition-colors"
                aria-label="LinkedIn"
                target="_blank"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://x.com/BanjaaraAshoka"
                className="hover:text-pink-500 transition-colors"
                aria-label="Twitter"
                target="_blank"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.youtube.com/@banjaara-ashokauniversity6289/featured"
                className="hover:text-pink-500 transition-colors"
                aria-label="Youtube"
                target="_blank"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-pink-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/competitions"
                  className="hover:text-pink-500 transition-colors"
                >
                  Competitions
                </Link>
              </li>
              <li>
                <Link
                  to="/schedule"
                  className="hover:text-pink-500 transition-colors"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="hover:text-pink-500 transition-colors"
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@banjaara.com"
                  className="hover:text-pink-500 transition-colors flex items-center gap-2"
                >
                  <FaEnvelope size={16} />
                  fest@ashoka.edu.in
                </a>
              </li>
              <li>
                <a
                  href="tel:+918076323162"
                  className="hover:text-pink-500 transition-colors flex items-center gap-2"
                >
                  <FaPhone size={16} />
                  +91 80763 23162
                </a>
              </li>
              <li className="text-gray-400 flex items-start gap-2">
                <FaMapMarkerAlt size={16} className="mt-1" />
                <span>
                  Ashoka University,
                  <br />
                  Plot No. 2, Rajiv Gandhi Education City,
                  <br />
                  Sonipat, Haryana - 131029
                </span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-6">Location</h3>
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=28.94712001384767, 77.10147015438375&amp;q=Ashoka%20University&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Ashoka University Location"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            &copy; 2025 Banjaara. All rights reserved.
          </p>
          <br />
          <p>Designed by Abhinav M Hari</p>
        </div>
      </div>
    </footer>
  );
}
