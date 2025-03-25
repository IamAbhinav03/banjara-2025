import React, { useState } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "lucide-react";

// Custom Indian-inspired font import (simulated)
import "@fontsource/poppins"; // A font that feels somewhat Indian-inspired
import "@fontsource/berkshire-swash"; // For headings

// Team Members Data
const teamMembers = [
  {
    name: "Priya Sharma",
    role: "Festival Director",
    image: "/api/placeholder/200/200",
  },
  {
    name: "Rahul Mehta",
    role: "Event Coordinator",
    image: "/api/placeholder/200/200",
  },
  {
    name: "Anjali Patel",
    role: "Creative Head",
    image: "/api/placeholder/200/200",
  },
  {
    name: "Vikram Singh",
    role: "Technical Lead",
    image: "/api/placeholder/200/200",
  },
];

// Competitions Data
const competitions = {
  Cultural: [
    "Traditional Dance Competition",
    "Folk Music Showcase",
    "Storytelling Contest",
  ],
  Art: [
    "Rangoli Design Challenge",
    "Traditional Painting Workshop",
    "Handicraft Exhibition",
  ],
  Performance: [
    "Theatrical Monologue",
    "Street Play Competition",
    "Comedy Skit Challenge",
  ],
};

// Schedule Data
const scheduleData = [
  { date: "Day 1", time: "10:00 AM", event: "Opening Ceremony" },
  { date: "Day 1", time: "11:30 AM", event: "Traditional Dance Competition" },
  { date: "Day 1", time: "02:00 PM", event: "Rangoli Design Challenge" },
  { date: "Day 2", time: "09:00 AM", event: "Folk Music Showcase" },
  { date: "Day 2", time: "01:00 PM", event: "Theatrical Monologue" },
  { date: "Day 3", time: "10:00 AM", event: "Closing Ceremony" },
];

// Color Palette Inspired by Holi
const holiColors = [
  "bg-red-400",
  "bg-pink-400",
  "bg-purple-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
];

// Navigation Component
const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-['Berkshire_Swash'] text-orange-600"
        >
          Banjaara
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-orange-600 transition">
            Home
          </Link>
          <Link to="/competitions" className="hover:text-orange-600 transition">
            Competitions
          </Link>
          <Link to="/team" className="hover:text-orange-600 transition">
            Team
          </Link>
          <Link to="/schedule" className="hover:text-orange-600 transition">
            Schedule
          </Link>
        </div>
      </div>
    </nav>
  );
};

// Home Page Component
const HomePage = () => {
  const [colorBlobs, setColorBlobs] = useState(
    Array(20)
      .fill(null)
      .map(() => ({
        color: holiColors[Math.floor(Math.random() * holiColors.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 100 + 50,
      }))
  );

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {colorBlobs.map((blob, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.7, 0],
            scale: [0, 1, 0],
            x: [`${blob.x}%`, `${blob.x + 10}%`, `${blob.x}%`],
            y: [`${blob.y}%`, `${blob.y + 10}%`, `${blob.y}%`],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full opacity-50 ${blob.color}`}
          style={{
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            left: `${blob.x}%`,
            top: `${blob.y}%`,
          }}
        />
      ))}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex items-center justify-center min-h-screen"
      >
        <h1 className="text-8xl font-['Berkshire_Swash'] text-orange-600">
          Banjaara
        </h1>
      </motion.div>
    </div>
  );
};

// Competitions Page Component
const CompetitionsPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-4xl font-['Berkshire_Swash'] text-orange-600 mb-8 text-center">
        Competitions
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(competitions).map(([category, items]) => (
          <motion.div
            key={category}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-lg p-6"
          >
            <h3 className="text-2xl font-bold mb-4 text-orange-500">
              {category}
            </h3>
            <ul className="space-y-2">
              {items.map((competition, index) => (
                <li key={index} className="text-gray-700">
                  • {competition}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Team Page Component
const TeamPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-4xl font-['Berkshire_Swash'] text-orange-600 mb-8 text-center">
        Our Team
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="mx-auto rounded-full mb-4 w-48 h-48 object-cover"
            />
            <h3 className="text-xl font-bold text-orange-500">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Schedule Page Component
const SchedulePage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-4xl font-['Berkshire_Swash'] text-orange-600 mb-8 text-center">
        Event Schedule
      </h2>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-orange-100">
            <tr>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Time</th>
              <th className="p-4 text-left">Event</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, index) => (
              <tr key={index} className="border-b last:border-b-0">
                <td className="p-4">{item.date}</td>
                <td className="p-4">{item.time}</td>
                <td className="p-4">{item.event}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Main App Component
const BanjaaraApp = () => {
  return (
    <Router>
      <div className="font-['Poppins'] bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/competitions" element={<CompetitionsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default BanjaaraApp;
