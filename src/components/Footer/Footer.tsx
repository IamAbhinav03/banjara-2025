import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Schedule
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Tickets
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Contact</h3>
              <ul className="space-y-3">
                <li>Email: info@banjaara.com</li>
                <li>Phone: +91 1234567890</li>
                <li>Address: IIT Bombay</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Newsletter
              </h3>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2024 Banjaara. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
