// import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import backgroundVideo from "../../assets/background.mp4"; // Replace with your actual video file
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navarbar";
import { useState } from "react";

export default function Home() {
  // const [showTagline, setShowTagline] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowTagline(true);
  //   }, 1000); // Delay tagline appearance
  // }, []);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

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
          onLoadedData={handleVideoLoad}
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
              className={`p-10 md:p-16 mx-auto max-w-3xl ${
                videoLoaded ? "animation-start" : ""
              }`}
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
                Explore
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
            <h2 className="font-playlist text-5xl md:text-7xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6 py-4">
              The Cultural Extravaganza Awaits
            </h2>
            <p className="font-sans text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Banjaara 2025 is Ashoka University's flagship cultural festival,
              drawing thousands from Delhi-NCR and beyond. Get ready for two
              unforgettable days of music, dance, theater, entrepreneurship, and
              vibrant student-driven stalls. This year’s theme, Rangsaaj,
              celebrates the artist within us all—a tribute to individuality and
              harmony, where life’s colors blend into a grand masterpiece. With
              electrifying performances and surprises awaiting, brace yourself
              for an experience like never before. Join us on 5th and 6th April
              to witness the magic unfold!
            </p>

            {/* Countdown Timer */}
            <div className="mt-12 mb-16">
              <div className="flex justify-center gap-8">
                {[
                  {
                    label: "Days",
                    value: Math.floor(
                      (new Date("2025-04-05").getTime() -
                        new Date().getTime()) /
                        (1000 * 60 * 60 * 24)
                    ).toString(),
                  },
                  {
                    label: "Hours",
                    value: String(new Date().getHours()).padStart(2, "0"),
                  },
                  {
                    label: "Minutes",
                    value: String(new Date().getMinutes()).padStart(2, "0"),
                  },
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

            {/* Experience Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
              {[
                {
                  title: "Electrifying Performances",
                  description:
                    "Get ready for thrilling shows by external artists that will light up the stage and leave you in awe.",
                  icon: "🎤",
                  gradient: "from-red-500 to-pink-500",
                },
                {
                  title: "Cultural Competitions",
                  description:
                    "Show off your talents and compete for big cash prizes across various cultural and artistic challenges.",
                  icon: "🏆",
                  gradient: "from-yellow-500 to-orange-500",
                },
                {
                  title: "Food & Fun Galore",
                  description:
                    "Savor delicious dishes from numerous food stalls while enjoying small fun activities and games throughout the venue.",
                  icon: "🍔",
                  gradient: "from-green-500 to-teal-500",
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

            {/* Call to Action Example (Add your actual link) */}
            <div className="mt-10">
              <a
                href="#"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Mystery Guest Section */}
      <section className="py-32 bg-gradient-to-br from-pink-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 animate-pulse"></div>
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="mb-6 pb-10">
              <span className="text-pink-400 font-playscript text-xl tracking-wider pb-10">
                Special Guests
              </span>
            </div>
            <h2 className="font-playlist text-6xl md:text-8xl text-white">
              Meet the Stars of Banjaara 2025
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Artist 1 - Naalayak */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row bg-black/20 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-pink-500/20"
            >
              <div className="md:w-1/2 relative">
                <img
                  src="/guest/naalayak.jpeg"
                  alt="Naalayak"
                  className="w-full h-96 md:h-full object-cover"
                />
                <div className="absolute top-0 right-0 bg-pink-500 text-white px-4 py-2 rounded-bl-lg font-bold">
                  HEADLINER
                </div>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <h3 className="font-playlist text-5xl text-white mb-4">
                  Naalayak
                </h3>
                <div className="h-1 w-24 bg-pink-500 mb-6"></div>
                <p className="text-white mb-6 leading-relaxed">
                  Experience the raw energy of{" "}
                  <span className="text-pink-400 font-bold">Naalayak</span>, the
                  indie rock band captivating audiences with their powerful live
                  performances and a unique blend of Hindi and Urdu lyrics.
                </p>
                <p className="text-white mb-8 leading-relaxed">
                  Known for their energetic stage presence and considered a
                  defining force in the new era of indie rock , NAALAYAK has
                  recently released their new single "Urf Zakir". Catch their
                  unmissable performance at Banjaara!
                </p>
                <div className="mt-auto">
                  <span className="text-pink-400 font-bold">
                    PERFORMANCE: 9:30 PM • MAIN STAGE
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Artist 2 - Aria Melody (correct name from code) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row bg-black/20 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-blue-500/20"
            >
              <div className="md:w-1/2 relative order-1 md:order-2">
                <img
                  src="/guest/RAVI GUPTA.svg"
                  alt="Aria Melody"
                  className="w-full h-96 md:h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-blue-500 text-white px-4 py-2 rounded-br-lg font-bold">
                  HEADLINER
                </div>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center order-2 md:order-1">
                <h3 className="font-playlist text-5xl text-white mb-4">
                  Ravi Gupta
                </h3>
                <div className="h-1 w-24 bg-blue-500 mb-6"></div>
                <p className="text-white mb-6 leading-relaxed">
                  Get ready for a laughter riot with{" "}
                  <span className="text-blue-400 font-bold">Ravi Gupta</span>,
                  the Delhi-based stand-up comedian celebrated for his sharp wit
                  and relatable 'desi' humor.
                </p>
                <p className="text-white mb-8 leading-relaxed">
                  Known for his observational comedy and the popular show "Kal
                  Ki Chinta Nahi Karta" , Ravi Gupta's clean and witty humor has
                  won hearts across the nation. Don't miss his hilarious set at
                  Banjaara!
                </p>
                <div className="mt-auto">
                  <span className="text-blue-400 font-bold">
                    PERFORMANCE: 8:00 PM • HARMONY STAGE
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <a
              href="#tickets"
              className="inline-block bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold py-4 px-8 rounded-full text-xl hover:scale-105 transition-transform"
            >
              SECURE YOUR SPOT NOW
            </a>
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
            <h2 className="font-playlist text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4 py-4">
              Previous Editions
            </h2>
            <p className="font-playscript text-xl text-gray-600 max-w-2xl mx-auto">
              Take a look back at the incredible moments from past Banjaara
              festivals
            </p>
          </motion.div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {[
              "/gallery/img1.webp",
              "/gallery/img2.webp",
              "/gallery/img3.webp",
              "/gallery/img4.webp",
              "/gallery/img5.webp",
              "/gallery/img6.webp",
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
