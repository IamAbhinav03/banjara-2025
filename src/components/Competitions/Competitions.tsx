import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
import { MapPin, Gift, Users, IndianRupee } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
          registrationFee: "Rs. 900",
          prizePool: "Rs. 20,000",
        },
      },
      {
        name: "Synergy Western Group Dance",
        description:
          "A dynamic Western dance competition showcasing various styles like street, jazz, and hip-hop.",
        details: {
          teamSize: "7-20",
          registrationFee: "Rs. 1000",
          prizePool: "Rs. 30,000",
        },
      },
      {
        name: "Battle of the Bands",
        description:
          "An electrifying clash of college bands, showcasing their musical prowess across various genres.",
        details: {
          teamSize: "3-8",
          registrationFee: "Rs. 1000",
          prizePool: "Rs. 25,000",
        },
      },
      {
        name: "Concordia Acapella Competition",
        description:
          "A pure vocal magic competition where teams create intricate harmonies and arrangements without instruments.",
        details: {
          teamSize: "7-15",
          registrationFee: "Rs. 800",
          prizePool: "Rs. 12,000",
        },
      },
    ],
  },
  {
    category: "Creative Arts",
    items: [
      {
        name: "Face Card Styling Competition",
        description:
          "A hair and makeup competition where teams create transformations based on a given theme.",
        details: {
          teamSize: "2+1",
          registrationFee: "Rs. 400",
          prizePool: "Rs. 15,000",
        },
      },
      {
        name: "Beyond the Brush",
        description:
          "A mixed media art competition challenging participants to blend colors, textures, and materials.",
        details: {
          teamSize: "1-3",
          registrationFee: "Rs. 150",
          prizePool: "Rs. 5,000",
        },
      },
      {
        name: "Frame by Frame",
        description:
          "A short film competition blending pre-shot footage with on-campus scenes.",
        details: {
          teamSize: "2-6",
          registrationFee: "Rs. 500",
          prizePool: "Rs. 15,000",
        },
      },
      {
        name: "Rangreza",
        description:
          "An experimental portrait photography competition using light, motion, and vibrant hues.",
        details: {
          teamSize: "1 photographer + 1 model",
          registrationFee: "Rs. 300",
          prizePool: "Rs. 7,000",
        },
      },
    ],
  },
  {
    category: "Debate & Public Speaking",
    items: [
      {
        name: "Bhasha, Baat, Aur Bakar",
        description:
          "An open mic event blending poetry, storytelling, and humor in Hindustani culture.",
        details: {
          teamSize: "Individual",
          registrationFee: "Rs. 100",
          prizePool: "Rs. 4,000",
        },
      },
      {
        name: "Turncoat Debate",
        description:
          "A debate competition requiring participants to argue both sides of a motion.",
        details: {
          teamSize: "Individual",
          registrationFee: "Rs. 250",
          prizePool: "Rs. 7,000",
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
          registrationFee: "Rs. 200",
          prizePool: "Rs. 20,000",
        },
      },
      {
        name: "Marvel Rivals",
        description: "A 3v3 Marvel Rivals hero shooter tournament.",
        details: {
          teamSize: "3",
          registrationFee: "Rs. 400",
          prizePool: "Rs. 6,000",
        },
      },
      {
        name: "The Quizzling Competition",
        description: "A general knowledge quiz competition.",
        details: {
          teamSize: "Up to 3",
          registrationFee: "Rs. 50/person",
          prizePool: "Rs. 10,000",
        },
      },
      {
        name: "AD-MAD",
        description: "An advertising campaign creation competition.",
        details: {
          teamSize: "1-3",
          registrationFee: "Rs. 150/person",
          prizePool: "Rs. 7,000",
        },
      },
      {
        name: "The Geopolitical Intelligence Challenge",
        description:
          "A foreign policy simulation and crisis response competition.",
        details: {
          teamSize: "3-4",
          registrationFee: "Rs. 200/team",
          prizePool: "Rs. 4,000",
        },
      },
      {
        name: "Food Fiesta",
        description: "A speed-eating competition.",
        details: {
          teamSize: "Individual",
          registrationFee: "ON-THE-SPOT Rs. 50",
          prizePool: "Rs. 4,000",
        },
      },
      {
        name: "The Fitness Challenge",
        description: "A plank endurance challenge.",
        details: {
          teamSize: "Individual",
          registrationFee: "ON-THE-SPOT Rs. 50",
          prizePool: "Exciting prizes",
        },
      },
    ],
  },
];

const Competitions = () => {
  const navigate = useNavigate();

  const handleViewDetails = (category: string, item: any) => {
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
      <main className="pt-18 pb-16">
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

        {/* Competitions Section with Tabs */}
        <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5"></div>
          <div className="container mx-auto px-6 relative">
            <Tabs
              defaultValue={competitionsData[0].category}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12">
                {competitionsData.map((category, index) => (
                  <TabsTrigger
                    key={index}
                    value={category.category}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white
                             data-[state=active]:shadow-lg transition-all duration-300"
                  >
                    {category.category}
                  </TabsTrigger>
                ))}
              </TabsList>
              {competitionsData.map((category, catIndex) => (
                <TabsContent key={catIndex} value={category.category}>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.items.map((item, itemIndex) => (
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
                            <CardTitle className="font-playlist text-2xl md:text-4xl mb-6 bg-clip-text flex items-center gap-2 ">
                              {item.name}
                            </CardTitle>
                            <CardDescription className="font-playscript text-gray-600 line-clamp-3">
                              {item.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="flex-grow flex flex-col justify-end gap-3">
                            <div className="flex items-center text-sm text-gray-600">
                              <Gift className="w-5 h-5 mr-2 text-pink-500" />
                              <span className="font-medium">
                                Prize Pool:
                              </span>{" "}
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
                              <span className="font-medium">
                                Team Size:
                              </span>{" "}
                              <span className="text-blue-600">
                                {item.details.teamSize}
                              </span>
                            </div>
                            <Button
                              onClick={() =>
                                handleViewDetails(category.category, item)
                              }
                              className="mt-4 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                              View Details
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
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

      <Footer />
    </>
  );
};

export default Competitions;
