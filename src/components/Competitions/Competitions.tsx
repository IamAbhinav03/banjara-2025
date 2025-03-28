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
import { MapPin, Gift, ChevronRight } from "lucide-react";

const competitionsData = [
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
        <section className="relative py-24 bg-gradient-to-br from-pink-900 via-purple-900 to-blue-900 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/smoke.png')] opacity-10 animate-pulse"></div>
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
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
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
                        <CardHeader>
                          <CardTitle className="font-playlist text-2xl text-gray-800 flex items-center gap-2">
                            {item.name}
                          </CardTitle>
                          <CardDescription className="font-playscript text-gray-600">
                            {item.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-end gap-3">
                          <div className="flex items-center text-sm text-gray-600">
                            <Gift className="w-5 h-5 mr-2 text-pink-500" />
                            <span className="font-medium">Prize:</span>{" "}
                            <span className="text-pink-600 font-semibold">
                              {item.prize}
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="w-5 h-5 mr-2 text-purple-500" />
                            <span className="font-medium">Venue:</span>{" "}
                            <span className="text-purple-600">
                              {item.venue}
                            </span>
                          </div>
                          <Button className="mt-4 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                            View Details{" "}
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardContent>
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
          <div className="absolute inset-0 bg-[url('/smoke.png')] opacity-10 animate-pulse"></div>
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

        {/* Rules Section */}
        <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-playlist text-4xl md:text-5xl text-center mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                General Rules
              </h2>
              <Card className="bg-white rounded-2xl shadow-xl border-0">
                <CardContent className="p-8">
                  <ul className="space-y-4 text-gray-700">
                    {[
                      "All participants must register at least 3 days before the event",
                      "Participants must report 30 minutes before their scheduled time",
                      "Any form of plagiarism will result in immediate disqualification",
                      "The judge's decision will be final and binding",
                      "Each team can have a maximum of 5 members unless specified otherwise",
                      "All participants must carry valid ID proof",
                      "Any damage to venue property will be charged to the responsible participants",
                    ].map((rule, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-pink-500">•</span>
                        <span className="font-playscript">{rule}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Competitions;
