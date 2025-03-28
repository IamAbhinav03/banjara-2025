import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import backgroundVideo from "../../assets/background.mp4"; // Replace with your actual video file
import galleryImage1 from "../../assets/react.svg";
import galleryImage2 from "../../assets/react.svg";
import galleryImage3 from "../../assets/react.svg";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navarbar";
export default function Home() {
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTagline(true);
    }, 1000); // Delay tagline appearance
  }, []);

  return (
    <>
      <Navbar></Navbar>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />{" "}
        {/* Overlay for better text visibility */}
        <main className="relative h-full flex items-center justify-center pt-20 pb-16">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.09 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 5, type: "spring", stiffness: 50 }}
              className="p-10 md:p-16 mx-auto max-w-3xl"
            >
              <div className="mb-4">
                <span className="inline-block py-2 px-4 text-sm font-semibold tracking-wider text-white bg-blue-600 rounded-full">
                  2025 EDITION
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Banjaara 2025
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Where Culture Meets Innovation
              </p>
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors">
                Get Early Access
              </button>
            </motion.div>
          </div>
        </main>
      </section>

      {/* Festival Highlights Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Festival Highlights
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the magic of Banjaara 2025 with our diverse range of
              cultural events and activities
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cultural Extravaganza",
                description:
                  "Immerse yourself in diverse cultural performances from across India",
                icon: "🎭",
              },
              {
                title: "Art Exhibitions",
                description:
                  "Showcasing contemporary and traditional art forms",
                icon: "🎨",
              },
              {
                title: "Food Festival",
                description: "Savor authentic cuisines from different regions",
                icon: "🍽️",
              },
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mystery Guest Section */}
      <section className="py-32 bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-6">
              <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">
                Special Announcement
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Mystery Guest
            </h2>
            <div className="relative w-64 h-64 mx-auto mb-12">
              <div className="absolute inset-0 bg-blue-500 rounded-full animate-pulse opacity-20"></div>
              <div className="absolute inset-4 bg-gray-800 rounded-full flex items-center justify-center border-4 border-blue-500">
                <span className="text-8xl">🎭</span>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-2xl text-blue-100">
                A legendary artist is coming to Banjaara 2025!
              </p>
              <p className="text-xl text-gray-400">
                Stay tuned for the big reveal...
              </p>
              <div className="mt-8">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors">
                  Get Notified
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Throwback Gallery Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Previous Editions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Take a look back at the incredible moments from past Banjaara
              festivals
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[galleryImage1, galleryImage2, galleryImage3].map(
              (image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-lg font-medium">View More</p>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
