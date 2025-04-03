import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

export default function MusicSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="mt-24 relative">
      {/* Decorative elements */}
      <div className="hidden md:block absolute -top-12 left-1/4 w-24 h-24 rounded-full bg-pink-200 opacity-30 blur-xl"></div>
      <div className="hidden md:block absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-purple-200 opacity-40 blur-xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h2 className="font-playlist text-4xl md:text-5xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
          The Sound of Banjaara
        </h2>
        <p className="font-sans text-lg text-gray-700 max-w-2xl mx-auto">
          Experience the rhythm of our festival with the official Banjaara 2025
          anthem. Let the music transport you to the vibrant celebration ahead!
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl p-6 max-w-lg mx-auto shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        <div className="flex items-center gap-6">
          <button
            onClick={togglePlay}
            className="w-16 h-16 flex-shrink-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform"
          >
            {isPlaying ? (
              <Pause size={28} className="text-white" />
            ) : (
              <Play size={28} className="text-white ml-1" />
            )}
          </button>

          <div className="flex-grow">
            <h3 className="text-xl font-bold text-gray-800">
              Banjaara Anthem 2025
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              Official Festival Soundtrack
            </p>

            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className={`bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full ${
                  isPlaying ? "animate-playProgress" : ""
                }`}
                style={{
                  width: isPlaying ? "100%" : "0%",
                  transition: "width 180s linear",
                }}
              ></div>
            </div>
          </div>
        </div>

        <audio ref={audioRef} src="/banjaara-song.mp3" />
      </motion.div>

      {/* Optional extra info */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 italic">
          Created exclusively for Banjaara 2025 - Rangsaaj
        </p>
      </div>
    </div>
  );
}
