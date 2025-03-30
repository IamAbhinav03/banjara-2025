import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '../Navbar/Navarbar';
import Footer from '../Footer/Footer';


// page transition missing was giving errors

// Schedule data organized by day
const scheduleData = {
    "day1": {
        date: "October 15, 2023",
        events: [
            { time: "09:00 AM - 10:00 AM", name: "Opening Ceremony", venue: "Main Stage", category: "ceremony" },
            { time: "10:30 AM - 12:30 PM", name: "Nritya Sangam (Preliminary)", venue: "Auditorium", category: "performing" },
            { time: "10:30 AM - 01:30 PM", name: "Rang Bahar", venue: "Art Gallery", category: "visual" },
            { time: "12:00 PM - 02:00 PM", name: "Lunch Break", venue: "Food Court", category: "break" },
            { time: "02:30 PM - 04:30 PM", name: "Sur Tarang (Preliminary)", venue: "Music Hall", category: "performing" },
            { time: "03:00 PM - 05:00 PM", name: "Kavi Sammelan", venue: "Literature Hall", category: "literary" },
            { time: "05:30 PM - 07:30 PM", name: "Cultural Performance", venue: "Main Stage", category: "performance" },
            { time: "08:00 PM - 10:00 PM", name: "DJ Night", venue: "Open Air Theatre", category: "performance" }
        ]
    },
    "day2": {
        date: "October 16, 2023",
        events: [
            { time: "09:30 AM - 11:30 AM", name: "Digital Canvas", venue: "Digital Lab", category: "visual" },
            { time: "10:00 AM - 12:00 PM", name: "Natya Manch (Preliminary)", venue: "Drama Studio", category: "performing" },
            { time: "11:00 AM - 01:00 PM", name: "Debate Dynasty", venue: "Conference Room", category: "literary" },
            { time: "12:30 PM - 02:00 PM", name: "Lunch Break", venue: "Food Court", category: "break" },
            { time: "02:00 PM - 04:00 PM", name: "Zaika", venue: "Culinary Lab", category: "culinary" },
            { time: "03:00 PM - 05:00 PM", name: "Craft Carnival", venue: "Craft Center", category: "visual" },
            { time: "05:30 PM - 07:00 PM", name: "Nritya Sangam (Finals)", venue: "Main Stage", category: "performing" },
            { time: "07:30 PM - 09:30 PM", name: "Celebrity Performance", venue: "Main Stage", category: "performance" }
        ]
    },
    "day3": {
        date: "October 17, 2023",
        events: [
            { time: "09:30 AM - 11:30 AM", name: "Katha Kathan", venue: "Library Amphitheatre", category: "literary" },
            { time: "10:00 AM - 12:00 PM", name: "Sur Tarang (Finals)", venue: "Music Hall", category: "performing" },
            { time: "11:00 AM - 01:00 PM", name: "Sweet Symphony", venue: "Culinary Lab", category: "culinary" },
            { time: "12:30 PM - 02:00 PM", name: "Lunch Break", venue: "Food Court", category: "break" },
            { time: "02:00 PM - 04:00 PM", name: "Natya Manch (Finals)", venue: "Open Air Theatre", category: "performing" },
            { time: "04:30 PM - 06:00 PM", name: "Award Ceremony", venue: "Main Stage", category: "ceremony" },
            { time: "06:30 PM - 08:30 PM", name: "Closing Performance", venue: "Main Stage", category: "performance" },
            { time: "08:30 PM - 09:30 PM", name: "Closing Ceremony", venue: "Main Stage", category: "ceremony" }
        ]
    }
};

// Updated category colors using Tailwind CSS classes
const categoryColors = {
    "ceremony": "bg-yellow-300 border-l-yellow-500",
    "performing": "bg-pink-300 border-l-pink-500",
    "visual": "bg-blue-300 border-l-blue-500",
    "literary": "bg-purple-300 border-l-purple-500",
    "culinary": "bg-orange-300 border-l-orange-500",
    "performance": "bg-green-300 border-l-green-500",
    "break": "bg-gray-100 border-l-gray-400"
};

type Event = {
    time: string;
    name: string;
    venue: string;
    category: string;
};

const Events = () => {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);

    const filterEvents = (events: Event[], category: string | null) => {
        if (!category) return events;
        return events.filter(event => event.category === category);
    };

    return (
        <>
            <Navbar />
            <main className="pt-20 pb-16">
                <section className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-16">
                    <div className="container mx-auto px-6 text-center">
                        <motion.h1 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl font-bold text-white mb-4"
                        >
                            Events
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-xl text-white max-w-2xl mx-auto"
                        >
                            Explore the vibrant events of Banjaara 2025
                        </motion.p>
                    </div>
                </section>

                <section className="py-12">
                    <div className="container mx-auto px-6">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Filter by Category</h2>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    { id: null, name: "All Events" },
                                    { id: "ceremony", name: "Ceremonies" },
                                    { id: "performing", name: "Performing Arts" },
                                    { id: "visual", name: "Visual Arts" },
                                    { id: "literary", name: "Literary Arts" },
                                    { id: "culinary", name: "Culinary Arts" },
                                    { id: "performance", name: "Performances" }
                                ].map((category) => (
                                    <button
                                        key={category.id || "all"}
                                        onClick={() => setActiveFilter(category.id)}
                                        className={`px-4 py-2 rounded-full transition-all text-sm font-medium ${
                                            activeFilter === category.id
                                                ? "bg-pink-600 text-white"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <Tabs defaultValue="day1" className="w-full">
                            <TabsList className="grid w-full grid-cols-3 mb-8">
                                <TabsTrigger value="day1" className="text-base font-medium">Day 1</TabsTrigger>
                                <TabsTrigger value="day2" className="text-base font-medium">Day 2</TabsTrigger>
                                <TabsTrigger value="day3" className="text-base font-medium">Day 3</TabsTrigger>
                            </TabsList>

                            {Object.entries(scheduleData).map(([day, data]) => (
                                <TabsContent key={day} value={day} className="mt-0">
                                    <div className="p-6 bg-white rounded-lg shadow-lg">
                                        <h3 className="text-xl font-bold text-pink-600 mb-4">{data.date}</h3>
                                        
                                        <div className="space-y-4">
                                            {filterEvents(data.events, activeFilter).map((event, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                                    className={`p-4 border-l-4 rounded-r-md ${categoryColors[event.category] || "bg-gray-100 border-l-gray-500"}`}
                                                >
                                                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                                                        <div className="mb-2 md:mb-0">
                                                            <h4 className="font-semibold text-gray-800">{event.name}</h4>
                                                            <p className="text-gray-600 text-sm">{event.venue}</p>
                                                        </div>
                                                        <div className="text-sm font-medium bg-white px-3 py-1 rounded-full">
                                                            {event.time}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}

                                            {filterEvents(data.events, activeFilter).length === 0 && (
                                                <div className="text-center py-8 text-gray-500">
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
            </main>
            <Footer />
        </>
    );
};

export default Events;
