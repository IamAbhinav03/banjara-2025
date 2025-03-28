import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../../assets/logo2.svg";

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
                className="w-12 h-12"
                style={{ transform: "scale(2)", transformOrigin: "left" }}
              />
            </div>
            <p className="text-lg font-playscript mt-6 text-gray-400">
              A carnival of magic
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="hover:text-pink-500 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="hover:text-pink-500 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
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
                <a
                  href="#home"
                  className="hover:text-pink-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#competitions"
                  className="hover:text-pink-500 transition-colors"
                >
                  Competitions
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  className="hover:text-pink-500 transition-colors"
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                  href="#tickets"
                  className="hover:text-pink-500 transition-colors"
                >
                  Tickets
                </a>
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
                  info@banjaara.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+911234567890"
                  className="hover:text-pink-500 transition-colors flex items-center gap-2"
                >
                  <FaPhone size={16} />
                  +91 1234567890
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.7277885761025!2d77.10931931508876!3d28.866354982321522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d8b53c1e0cbc3%3A0x47b82e2073e48d1d!2sAshoka%20University!5e0!3m2!1sen!2sin!4v1645509177274!5m2!1sen!2sin"
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
            &copy; 2024 Banjaara. All rights reserved.
          </p>
          <br />
          <p>Designed by Abhinav M Hari</p>
        </div>
      </div>
    </footer>
  );
}
