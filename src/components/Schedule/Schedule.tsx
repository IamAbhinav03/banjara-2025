import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar/Navarbar";
import Footer from "@/components/Footer/Footer";
import { Button } from "@/components/ui/button";
import { Download, Bell, MapPin } from "lucide-react";

// Schedule data organized by day
const scheduleData = {
  day1: {
    date: "March 15, 2025",
    events: [
      {
        time: "09:00 AM - 10:00 AM",
        name: "Opening Ceremony",
        venue: "Main Stage",
        category: "ceremony",
      },
      {
        time: "10:30 AM - 12:30 PM",
        name: "Dance Competition (Preliminary)",
        venue: "Auditorium",
        category: "performing",
      },
      {
        time: "10:30 AM - 01:30 PM",
        name: "Art Exhibition",
        venue: "Art Gallery",
        category: "visual",
      },
      {
        time: "12:00 PM - 02:00 PM",
        name: "Lunch Break",
        venue: "Food Court",
        category: "break",
      },
      {
        time: "02:30 PM - 04:30 PM",
        name: "Music Competition (Preliminary)",
        venue: "Music Hall",
        category: "performing",
      },
      {
        time: "03:00 PM - 05:00 PM",
        name: "Debate Competition",
        venue: "Literature Hall",
        category: "literary",
      },
      {
        time: "05:30 PM - 07:30 PM",
        name: "Cultural Performance",
        venue: "Main Stage",
        category: "performance",
      },
      {
        time: "08:00 PM - 10:00 PM",
        name: "DJ Night",
        venue: "Open Air Theatre",
        category: "performance",
      },
    ],
  },
  day2: {
    date: "March 16, 2025",
    events: [
      {
        time: "09:30 AM - 11:30 AM",
        name: "Digital Art Competition",
        venue: "Digital Lab",
        category: "visual",
      },
      {
        time: "10:00 AM - 12:00 PM",
        name: "Drama Competition (Preliminary)",
        venue: "Drama Studio",
        category: "performing",
      },
      {
        time: "11:00 AM - 01:00 PM",
        name: "Public Speaking",
        venue: "Conference Room",
        category: "literary",
      },
      {
        time: "12:30 PM - 02:00 PM",
        name: "Lunch Break",
        venue: "Food Court",
        category: "break",
      },
      {
        time: "02:00 PM - 04:00 PM",
        name: "Cooking Competition",
        venue: "Culinary Lab",
        category: "culinary",
      },
      {
        time: "03:00 PM - 05:00 PM",
        name: "Photography Exhibition",
        venue: "Craft Center",
        category: "visual",
      },
      {
        time: "05:30 PM - 07:00 PM",
        name: "Dance Competition (Finals)",
        venue: "Main Stage",
        category: "performing",
      },
      {
        time: "07:30 PM - 09:30 PM",
        name: "Celebrity Performance",
        venue: "Main Stage",
        category: "performance",
      },
    ],
  },
  day3: {
    date: "March 17, 2025",
    events: [
      {
        time: "09:30 AM - 11:30 AM",
        name: "Storytelling Competition",
        venue: "Library Amphitheatre",
        category: "literary",
      },
      {
        time: "10:00 AM - 12:00 PM",
        name: "Music Competition (Finals)",
        venue: "Music Hall",
        category: "performing",
      },
      {
        time: "11:00 AM - 01:00 PM",
        name: "Baking Competition",
        venue: "Culinary Lab",
        category: "culinary",
      },
      {
        time: "12:30 PM - 02:00 PM",
        name: "Lunch Break",
        venue: "Food Court",
        category: "break",
      },
      {
        time: "02:00 PM - 04:00 PM",
        name: "Drama Competition (Finals)",
        venue: "Open Air Theatre",
        category: "performing",
      },
      {
        time: "04:30 PM - 06:00 PM",
        name: "Award Ceremony",
        venue: "Main Stage",
        category: "ceremony",
      },
      {
        time: "06:30 PM - 08:30 PM",
        name: "Closing Performance",
        venue: "Main Stage",
        category: "performance",
      },
      {
        time: "08:30 PM - 09:30 PM",
        name: "Closing Ceremony",
        venue: "Main Stage",
        category: "ceremony",
      },
    ],
  },
};

// Category colors matching your theme
const categoryColors: Record<string, string> = {
  ceremony:
    "bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-l-pink-500",
  performing:
    "bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-l-purple-500",
  visual: "bg-gradient-to-r from-blue-500/20 to-pink-500/20 border-l-blue-500",
  literary:
    "bg-gradient-to-r from-pink-500/20 to-blue-500/20 border-l-pink-500",
  culinary:
    "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-l-purple-500",
  performance:
    "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-l-blue-500",
  break: "bg-gray-100 border-l-gray-400",
};

const Schedule = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filterEvents = (events: any[], category: string | null) => {
    if (!category) return events;
    return events.filter((event) => event.category === category);
  };

  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
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
                Event Schedule
              </h1>
              <p className="font-playscript text-2xl text-white/90 max-w-2xl mx-auto">
                Plan your Banjaara 2025 experience with our comprehensive
                schedule
              </p>
            </motion.div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="mb-8">
              <h2 className="font-playlist text-4xl mb-6 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Filter by Category
              </h2>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  { id: null, name: "All Events" },
                  { id: "ceremony", name: "Ceremonies" },
                  { id: "performing", name: "Performing Arts" },
                  { id: "visual", name: "Visual Arts" },
                  { id: "literary", name: "Literary Arts" },
                  { id: "culinary", name: "Culinary Arts" },
                  { id: "performance", name: "Performances" },
                ].map((category) => (
                  <Button
                    key={category.id || "all"}
                    onClick={() => setActiveFilter(category.id)}
                    className={`px-6 py-2 rounded-full transition-all ${
                      activeFilter === category.id
                        ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            <Tabs defaultValue="day1" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/50 backdrop-blur-sm">
                <TabsTrigger value="day1" className="text-base font-medium">
                  Day 1
                </TabsTrigger>
                <TabsTrigger value="day2" className="text-base font-medium">
                  Day 2
                </TabsTrigger>
                <TabsTrigger value="day3" className="text-base font-medium">
                  Day 3
                </TabsTrigger>
              </TabsList>

              {Object.entries(scheduleData).map(([day, data]) => (
                <TabsContent key={day} value={day} className="mt-0">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                    <h3 className="font-playlist text-3xl text-center mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                      {data.date}
                    </h3>

                    <div className="space-y-4">
                      {filterEvents(data.events, activeFilter).map(
                        (event, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className={`p-4 border-l-4 rounded-r-xl ${
                              categoryColors[event.category] ||
                              "bg-gray-100 border-l-gray-500"
                            }`}
                          >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                              <div className="mb-2 md:mb-0">
                                <h4 className="font-playlist text-xl text-gray-800">
                                  {event.name}
                                </h4>
                                <p className="font-playscript text-gray-600">
                                  {event.venue}
                                </p>
                              </div>
                              <div className="text-sm font-medium bg-white/60 px-4 py-2 rounded-full">
                                {event.time}
                              </div>
                            </div>
                          </motion.div>
                        )
                      )}

                      {filterEvents(data.events, activeFilter).length === 0 && (
                        <div className="text-center py-8 text-gray-500 font-playscript">
                          No events match your filter for this day.
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-16 bg-gradient-to-br from-pink-900 via-purple-900 to-blue-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-playlist text-4xl mb-6 text-white">
              Stay Updated
            </h2>
            <p className="font-playscript text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Download the complete schedule for offline access and subscribe
              for real-time updates during the festival
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600">
                <Download className="mr-2 h-5 w-5" />
                Download PDF Schedule
              </Button>
              <Button className="bg-white text-gray-900 hover:bg-gray-100">
                <Bell className="mr-2 h-5 w-5" />
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </section>

        {/* Venue Map */}
        <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
          <div className="container mx-auto px-6">
            <h2 className="font-playlist text-4xl mb-6 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Venue Map
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl text-center">
              <p className="font-playscript text-xl text-gray-600 mb-6">
                Find your way around the festival with our interactive venue map
              </p>
              <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
                <MapPin className="h-12 w-12 text-gray-400" />
                <p className="font-playscript text-gray-500 ml-4">
                  Interactive Map Will Be Available Soon
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Schedule;
