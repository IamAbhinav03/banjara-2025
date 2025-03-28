// import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import backgroundVideo from "../../assets/background.mp4"; // Replace with your actual video file
import galleryImage2 from "../../assets/react.svg";
import galleryImage3 from "../../assets/react.svg";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navarbar";

export default function Home() {
  // const [showTagline, setShowTagline] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowTagline(true);
  //   }, 1000); // Delay tagline appearance
  // }, []);

  return (
    <>
      {/* TODO: Make the navbar responsive */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <main className="relative h-full flex items-center justify-center pt-20 pb-16">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3.5, ease: "easeInOut" }}
              className="p-10 md:p-16 mx-auto max-w-3xl"
            >
              <div className="mb-4">
                <span className="inline-block py-2 px-4 text-sm font-semibold tracking-wider text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full">
                  2025 EDITION
                </span>
              </div>
              <h1 className="font-playlist text-6xl md:text-8xl  text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                Banjaara 2025
              </h1>
              <p className="font-playscript text-2xl text-white/90 mb-8">
                A Carnival of Magic
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Early Access
              </button>
            </motion.div>
          </div>
        </main>
      </section>

      {/* Festival Information & Countdown Section */}
      {/* {/* <section className="py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden"> */}
      {/* <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div> */}
      {/* <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playlist text-5xl md:text-7xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
              The Cultural Extravaganza Awaits
            </h2>
            <p className="font-playscript text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Join us for three days of mesmerizing performances, artistic
              brilliance, and cultural celebration at IIITD's biggest cultural
              festival.
            </p>

            {/* Countdown Timer */}
      {/* <div className="mt-12 mb-16">
              <div className="flex justify-center gap-8">
                {[
                  { label: "Days", value: "124" },
                  { label: "Hours", value: "08" },
                  { label: "Minutes", value: "45" },
                ].map((time, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                      {time.value}
                    </div>
                    <span className="mt-2 text-gray-600 font-medium">
                      {time.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div> */}

      {/* Experience Highlights */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Artistic Paradise",
                description:
                  "From classical dance performances to modern art installations, immerse yourself in a world where creativity knows no bounds.",
                icon: "✨",
                gradient: "from-pink-500 to-purple-500",
              },
              {
                title: "Musical Journey",
                description:
                  "Experience soul-stirring performances from renowned artists and emerging talents across diverse musical genres.",
                icon: "🎵",
                gradient: "from-purple-500 to-blue-500",
              },
              {
                title: "Cultural Fusion",
                description:
                  "Witness the beautiful blend of traditional heritage and contemporary expression through various cultural showcases.",
                icon: "🎭",
                gradient: "from-blue-500 to-pink-500",
              },
            ].map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`text-6xl mb-6 bg-gradient-to-r ${experience.gradient} bg-clip-text text-transparent`}
                >
                  {experience.icon}
                </div>
                <h3 className="font-playlist text-2xl font-bold text-gray-800 mb-4">
                  {experience.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {experience.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Festival Information & Countdown Section */}
      <section className="py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playlist text-5xl md:text-7xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
              The Cultural Extravaganza Awaits
            </h2>
            <p className="font-playscript text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Get ready for three days of pure magic! Experience mesmerizing
              performances, artistic brilliance, and an unforgettable cultural
              celebration at Ashoka University's biggest festival.
            </p>

            {/* Countdown Timer */}
            <div className="mt-12 mb-16">
              <div className="flex justify-center gap-8">
                {[
                  { label: "Days", value: "124" },
                  { label: "Hours", value: "08" },
                  { label: "Minutes", value: "45" },
                ].map((time, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                      {time.value}
                    </div>
                    <span className="mt-2 text-gray-600 font-medium">
                      {time.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Artist Teaser */}
            <div className="mt-8">
              <p className="text-lg text-gray-800">
                🔥 Stay tuned for the grand artist reveals! Prepare to be
                amazed.
              </p>
            </div>

            {/* Call to Action Example (Add your actual link) */}
            <div className="mt-10">
              <a
                href="#"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
              >
                Get Your Tickets Now!
              </a>
            </div>
          </motion.div>

          {/* Experience Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Artistic Paradise",
                description:
                  "Immerse yourself in a world of breathtaking art installations and mesmerizing dance performances. Witness creativity unbound!",
                icon: "✨",
                gradient: "from-pink-500 to-purple-500",
              },
              {
                title: "Musical Journey",
                description:
                  "Experience soul-stirring melodies and electrifying performances from renowned artists and emerging talents. Get ready to be moved!",
                icon: "🎵",
                gradient: "from-purple-500 to-blue-500",
              },
              {
                title: "Cultural Fusion",
                description:
                  "Celebrate the vibrant tapestry of cultures with captivating showcases and fusion performances. A true celebration of diversity!",
                icon: "🎭",
                gradient: "from-blue-500 to-pink-500",
              },
            ].map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`text-6xl mb-6 bg-gradient-to-r ${experience.gradient} bg-clip-text text-transparent`}
                >
                  {experience.icon}
                </div>
                <h3 className="font-playlist text-2xl font-bold text-gray-800 mb-4">
                  {experience.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {experience.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mystery Guest Section */}
      <section className="py-32 bg-gradient-to-br from-pink-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0s opacity-10 animate-pulse"></div>
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-6">
              <span className="text-pink-400 font-playscript text-xl tracking-wider">
                Special Announcement
              </span>
            </div>
            <h2 className="font-playlist text-6xl md:text-8xl font-bold text-white mb-8">
              Mystery Guest
            </h2>
            <div className="relative w-64 h-64 mx-auto mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse opacity-20"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-pink-900 to-purple-900 rounded-full flex items-center justify-center border-4 border-pink-500">
                <span className="text-8xl">🎭</span>
              </div>
            </div>
            <div className="space-y-6">
              <p className="font-playscript text-3xl text-pink-200">
                A legendary artist is coming to Banjaara 2025!
              </p>
              <p className="text-xl text-purple-200">
                Stay tuned for the big reveal...
              </p>
              <div className="mt-8">
                <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Get Notified
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Throwback Gallery Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playlist text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
              Previous Editions
            </h2>
            <p className="font-playscript text-xl text-gray-600 max-w-2xl mx-auto">
              Take a look back at the incredible moments from past Banjaara
              festivals
            </p>
          </motion.div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {[
              "https://source.unsplash.com/random/800x600?dance",
              "https://source.unsplash.com/random/800x800?music",
              "https://source.unsplash.com/random/800x1000?festival",
              "https://source.unsplash.com/random/800x700?concert",
              galleryImage2,
              galleryImage3,
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow mb-4"
                style={{
                  height: `${Math.floor(Math.random() * (600 - 300) + 300)}px`,
                }}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="font-playscript text-white text-xl">
                    View More
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
