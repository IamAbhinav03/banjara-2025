import { motion } from "framer-motion";
import Navbar from "@/components/Navbar/Navarbar";
import Footer from "@/components/Footer/Footer";

const competitions = [
  {
    category: "Performing Arts",
    items: [
      {
        name: "Nritya Sangam",
        description:
          "Group dance competition showcasing classical and folk dance forms",
        prize: "₹15,000",
        venue: "Main Auditorium",
      },
      {
        name: "Sur Tarang",
        description:
          "Solo and duet singing competition for classical and contemporary styles",
        prize: "₹10,000",
        venue: "Music Hall",
      },
      {
        name: "Natya Manch",
        description:
          "Theatrical performance competition highlighting social themes",
        prize: "₹12,000",
        venue: "Open Air Theatre",
      },
    ],
  },
  {
    category: "Visual Arts",
    items: [
      {
        name: "Rang Bahar",
        description:
          "On-the-spot painting competition inspired by Indian festivals",
        prize: "₹8,000",
        venue: "Art Gallery",
      },
      {
        name: "Digital Canvas",
        description:
          "Digital art competition blending tradition with technology",
        prize: "₹9,000",
        venue: "Digital Lab",
      },
      {
        name: "Craft Carnival",
        description: "Handicraft competition using sustainable materials",
        prize: "₹7,000",
        venue: "Craft Center",
      },
    ],
  },
  {
    category: "Literary Arts",
    items: [
      {
        name: "Kavi Sammelan",
        description: "Poetry recitation in various Indian languages",
        prize: "₹6,000",
        venue: "Literature Hall",
      },
      {
        name: "Katha Kathan",
        description: "Storytelling competition based on folklore and mythology",
        prize: "₹7,000",
        venue: "Library Amphitheatre",
      },
      {
        name: "Debate Dynasty",
        description: "Competitive debate on cultural and societal topics",
        prize: "₹8,000",
        venue: "Conference Room",
      },
    ],
  },
  {
    category: "Culinary Arts",
    items: [
      {
        name: "Zaika",
        description: "Cooking competition featuring regional Indian cuisines",
        prize: "₹10,000",
        venue: "Food Court",
      },
      {
        name: "Sweet Symphony",
        description: "Traditional Indian dessert preparation contest",
        prize: "₹6,000",
        venue: "Culinary Lab",
      },
    ],
  },
];

const Competitions = () => {
  return (
    <>
      <Navbar />

      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-banjaara-yellow/30 to-banjaara-orange/30 py-16">
          <div className="container mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-yatra-one text-gray-800 mb-4"
            >
              Competitions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Showcase your talents and compete for exciting prizes
            </motion.p>
          </div>
        </section>

        {/* Competitions Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            {competitions.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-yatra-one text-banjaara-pink mb-6 pb-2 border-b-2 border-banjaara-pink/20">
                  {category.category}
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                      className="card-banjaara h-full flex flex-col"
                    >
                      <div className="p-6 flex-grow">
                        <h3 className="text-xl font-yatra-one text-gray-800 mb-3">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <div className="mt-auto">
                          <div className="flex items-center text-sm text-gray-500 mb-1">
                            <svg
                              className="w-4 h-4 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                            Prize: {item.prize}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <svg
                              className="w-4 h-4 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              ></path>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              ></path>
                            </svg>
                            Venue: {item.venue}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Registration CTA */}
        <section className="py-12 bg-banjaara-green/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-yatra-one text-gray-800 mb-6">
              Ready to Participate?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Registration for all competitions is now open. Don't miss your
              chance to showcase your talent and win exciting prizes!
            </p>
            <button className="btn-banjaara-primary">Register Now</button>
          </div>
        </section>

        {/* Rules Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-yatra-one text-gray-800 mb-6">
              General Rules
            </h2>
            <div className="card-banjaara p-6">
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>
                  All participants must register at least 3 days before the
                  event
                </li>
                <li>
                  Participants must report 30 minutes before their scheduled
                  time
                </li>
                <li>
                  Any form of plagiarism will result in immediate
                  disqualification
                </li>
                <li>The judge's decision will be final and binding</li>
                <li>
                  Each team can have a maximum of 5 members unless specified
                  otherwise
                </li>
                <li>All participants must carry valid ID proof</li>
                <li>
                  Any damage to venue property will be charged to the
                  responsible participants
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Competitions;
