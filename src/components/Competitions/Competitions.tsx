import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Navbar from "@/components/Navbar/Navarbar";
import Footer from "@/components/Footer/Footer";
import { Button } from "@/components/ui/button";
import { Gift, Users, IndianRupee } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const competitionsData = [
  {
    category: "Performing Arts",
    items: [
      {
        name: "नाटक BAAZI",
        description:
          "A raw, unfiltered storytelling platform in the spirit of street theatre. Teams blend powerful performances, social commentary, and creative expression.",
        details: {
          teamSize: "15-20 + 3 (set up)",
          registrationFee: "₹ 900",
          prizePool: "₹ 20,000",
          registrationLink: "https://unstop.com/events/natakabaazi-banjaara-2025-ashoka-university-sonepat-haryana-1419831"
        },
      },
      {
        name: "Synergy Western Group Dance",
        description:
          "A dynamic Western dance competition showcasing various styles like street, jazz, and hip-hop.",
        details: {
          teamSize: "7-20",
          registrationFee: "₹ 1000",
          prizePool: "₹ 30,000",
          registrationLink: "https://unstop.com/events/synergy-banjaara-2025-ashoka-university-sonepat-haryana-1421126"
        },
      },
      {
        name: "Battle of the Bands",
        description:
          "An electrifying clash of college bands, showcasing their musical prowess across various genres.",
        details: {
          teamSize: "3-8",
          registrationFee: "₹ 1000",
          prizePool: "₹ 25,000",
          registrationLink: "https://unstop.com/events/battle-of-bands-banjaara-2025-ashoka-university-sonepat-haryana-1421042"
        },
      },
      {
        name: "Concordia Acapella Competition",
        description:
          "A pure vocal magic competition where teams create intricate harmonies and arrangements without instruments.",
        details: {
          teamSize: "7-15",
          registrationFee: "₹ 800",
          prizePool: "₹ 12,000",
          registrationLink: "https://unstop.com/events/concordia-banjaara-2025-ashoka-university-sonepat-haryana-1421050"
        },
      },
    ],
  },
  {
    category: "Visual Arts",
    items: [
      {
        name: "Face Card Styling Competition",
        description:
          "A hair and makeup competition where teams create transformations based on a given theme.",
        details: {
          teamSize: "2+1",
          registrationFee: "₹ 400",
          prizePool: "₹ 15,000",
          registrationLink:"https://unstop.com/events/face-card-banjaara-2025-ashoka-university-sonepat-haryana-1421052"
        },
      },
      {
        name: "Beyond the Brush",
        description:
          "A mixed media art competition challenging participants to blend colors, textures, and materials.",
        details: {
          teamSize: "1-3",
          registrationFee: "₹ 150",
          prizePool: "₹ 5,000",
          registrationLink: "https://unstop.com/events/beyond-the-brush-banjaara-2025-ashoka-university-sonepat-haryana-1421056"
        },
      },
      {
        name: "Frame by Frame",
        description:
          "A short film competition blending pre-shot footage with on-campus scenes.",
        details: {
          teamSize: "2-6",
          registrationFee: "₹ 500",
          prizePool: "₹ 15,000",
          registrationLink: "https://unstop.com/events/frame-by-frame-banjaara-2025-ashoka-university-sonepat-haryana-1421060"
        },
      },
      {
        name: "Rangreza",
        description:
          "An experimental portrait photography competition using light, motion, and vibrant hues.",
        details: {
          teamSize: "1 photographer + 1 model",
          registrationFee: "₹ 300",
          prizePool: "₹ 7,000",
        },
      },
    ],
  },
  {
    category: "Literary Arts",
    items: [
      {
        name: "Bhasha, Baat, Aur Bakar",
        description:
          "An open mic event blending poetry, storytelling, and humor in Hindustani culture.",
        details: {
          teamSize: "Individual",
          registrationFee: "₹ 100",
          prizePool: "₹ 4,000",
          registrationLink: "https://unstop.com/events/rangreza-banjaara-2025-ashoka-university-sonepat-haryana-1421064"
        },
      },
      {
        name: "Turncoat Debate",
        description:
          "A debate competition requiring participants to argue both sides of a motion.",
        details: {
          teamSize: "Individual",
          registrationFee: "₹ 250",
          prizePool: "₹ 7,000",
          registrationLink: "https://unstop.com/events/turncoat-debate-banjaara-2025-ashoka-university-sonepat-haryana-1421075"
        },
      },
    ],
  },
  {
    category: "Other Competitions",
    items: [
      {
        name: "The Corporate Conquest",
        description:
          "A business strategy challenge involving crisis management and market manipulation.",
        details: {
          teamSize: "3-6",
          registrationFee: "₹ 200",
          prizePool: "₹ 20,000",
          registrationLink: "https://unstop.com/competitions/the-corporate-conquest-banjaara-2025-ashoka-university-sonepat-haryana-1421081"
        },
      },
      {
        name: "Marvel Rivals",
        description: "A 3v3 Marvel Rivals hero shooter tournament.",
        details: {
          teamSize: "3",
          registrationFee: "₹ 400",
          prizePool: "₹ 6,000",
          registrationLink: "https://unstop.com/events/marvel-rivals-banjaara-2025-ashoka-university-sonepat-haryana-1421088"
        },
      },
      {
        name: "The Quizzling Competition",
        description: "A general knowledge quiz competition.",
        details: {
          teamSize: "Up to 3",
          registrationFee: "₹ 50/person",
          prizePool: "₹ 10,000",
          registrationLink: "https://unstop.com/quiz/quizzing-competition-banjaara-2025-ashoka-university-sonepat-haryana-1421095"
        },
      },
      {
        name: "AD-MAD",
        description: "An advertising campaign creation competition.",
        details: {
          teamSize: "1-3",
          registrationFee: "₹ 150/person",
          prizePool: "₹ 7,000",
          registrationLink: "https://unstop.com/competitions/ad-mad-banjaara-2025-ashoka-university-sonepat-haryana-1421098"
        },
      },
      {
        name: "The Geopolitical Intelligence Challenge",
        description:
          "A foreign policy simulation and crisis response competition.",
        details: {
          teamSize: "3-4",
          registrationFee: "₹ 200/team",
          prizePool: "₹ 4,000",
          registrationLink:"https://unstop.com/competitions/geopolitical-intelligence-challenge-crafting-foreign-policy-banjaara-2025-ashoka-university-sonepat-haryana-1421103"
        },
      },
      {
        name: "Food Fiesta",
        description: "A speed-eating competition.",
        details: {
          teamSize: "Individual",
          registrationFee: "ON-THE-SPOT ₹ 50",
          prizePool: "₹ 4,000",
          registrationLink: "https://unstop.com/workshops-webinars/food-fiesta-banjaara-2025-ashoka-university-sonepat-haryana-1421106"
        },
      },
      {
        name: "The Fitness Challenge",
        description: "A plank endurance challenge.",
        details: {
          teamSize: "Individual",
          registrationFee: "ON-THE-SPOT ₹ 50",
          prizePool: "Exciting prizes",
          registrationLink: "https://unstop.com/workshops-webinars/the-fitness-challenge-banjaara-2025-ashoka-university-sonepat-haryana-1421116"
        },
      },
    ],
  },
];

const Competitions = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(
    competitionsData[0].category
  );

  const handleViewDetails = (category: string, item: { name: string }) => {
    navigate(
      `/competitions/${category.toLowerCase().replace(/\s+/g, "-")}/${item.name
        .toLowerCase()
        .replace(/\s+/g, "-")}`,
      {
        state: { category, item },
      }
    );
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-pink-900 via-purple-900 to-blue-900 overflow-hidden">
          <div className="absolute inset-0 opacity-10 animate-pulse"></div>
          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="font-playlist text-6xl md:text-8xl text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                Competitions
              </h1>
              <p className="font-playscript text-2xl text-white/90 max-w-2xl mx-auto">
                Showcase your talents and compete for exciting prizes in our
                diverse range of cultural competitions!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Competitions Section with Category Buttons */}
        <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5"></div>
          <div className="container mx-auto px-6 relative">
            <div className="mb-12">
              <h2 className="font-playlist text-4xl mb-6 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent py-2">
                Filter by Category
              </h2>
              <div className="flex flex-wrap gap-2 justify-center">
                {competitionsData.map((category, index) => (
                  <Button
                    key={index}
                    onClick={() => setActiveCategory(category.category)}
                    className={`font-sans px-6 py-5 rounded-full transition-all ${
                      activeCategory === category.category
                        ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {category.category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {competitionsData
                .find((cat) => cat.category === activeCategory)
                ?.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                    className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <Card className="h-full flex flex-col">
                      <CardHeader>
                        <CardTitle className="font-sans text-lg md:text-2xl mb-6 bg-clip-text flex items-center gap-2">
                          {item.name}
                        </CardTitle>
                        <CardDescription className="font-sans text-gray-600 line-clamp-3">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow flex flex-col justify-end gap-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <Gift className="w-5 h-5 mr-2 text-pink-500" />
                          <span className="font-medium">Prize Pool:</span>{" "}
                          <span className="text-pink-600 font-semibold">
                            {item.details.prizePool}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <IndianRupee className="w-5 h-5 mr-2 text-purple-500" />
                          <span className="font-medium">Registration:</span>{" "}
                          <span className="text-purple-600">
                            {item.details.registrationFee}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="w-5 h-5 mr-2 text-blue-500" />
                          <span className="font-medium">Team Size:</span>{" "}
                          <span className="text-blue-600">
                            {item.details.teamSize}
                          </span>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button
                            onClick={() =>
                              handleViewDetails(activeCategory, item)
                            }
                            className="w-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-sm"
                          >
                            Details
                          </Button>
                          <a
                            href={item.details.registrationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-1/2"
                          >
                            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-blue-600 hover:to-green-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-sm">
                              Register
                            </Button>
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* Registration CTA */}
        <section className="py-16 bg-gradient-to-br from-pink-900 via-purple-900 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 animate-pulse"></div>
          <div className="container mx-auto px-6 relative text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-playlist text-4xl md:text-5xl text-white mb-6">
                Ready to Participate?
              </h2>
              <p className="font-playscript text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Registration for all competitions is now open. Don't miss your
                chance to showcase your talent and win exciting prizes!
              </p>
              <Button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Register Now
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* General Rules Section */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-playlist text-4xl md:text-5xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6 py-2">
              General Rules & Guidelines
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Please read these guidelines carefully before participating in any
              competition
            </p>
          </motion.div>

          <div className="bg-slate-50/80 backdrop-blur-sm rounded-xl p-8 shadow-sm max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></div>
                <p className="text-gray-700">
                  All events will be conducted at the Ashoka University campus
                  unless explicitly mentioned in the brochure (some events may
                  have an online preliminary round).
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></div>
                <p className="text-gray-700">
                  Participants must report at the event's venue at least 1 hour
                  before the scheduled time.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></div>
                <p className="text-gray-700">
                  For all team events, teams should finalize the number and
                  names of all participants before filling out the form to avoid
                  any last-minute changes.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></div>
                <p className="text-gray-700">
                  There is no cap on the number of entries into an event from
                  one university unless explicitly stated otherwise.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></div>
                <p className="text-gray-700">
                  There is no limit on the number of events that one person can
                  participate in as long as it doesn't conflict with the
                  schedule.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></div>
                <p className="text-gray-700">
                  All Participants will be given a certificate of participation.
                  Those who win events will also be given a certificate of
                  merit.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></div>
                <p className="text-gray-700">
                  All judges invited to judge the competitions will be highly
                  trained professionals, and their decision will be final and
                  binding.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></div>
                <p className="text-gray-700">
                  Making use of any unfair means or violating any of the event
                  rules mentioned will result in penalties being imposed. The
                  degree of the penalty imposed will be according to the
                  discretion of the organizing team.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></div>
                <p className="text-gray-700">
                  In any dispute, the organizing team will have the final say.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></div>
                <p className="text-gray-700">
                  The organizing team reserves the right to change any of the
                  information mentioned in the brochure at any time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Competitions;
