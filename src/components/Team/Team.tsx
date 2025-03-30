import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar/Navarbar";
import Footer from "@/components/Footer/Footer";
import { Button } from "@/components/ui/button";

// Sample team data - replace with actual data
const teamData = {
  departments: [
    {
      name: "Fest Secretaries",
      members: [
        {
          name: "Ushnish Bhattacharya",
          role: "Fest Secretary",
          image: "/team/ushnish.jpg",
        },
        {
          name: "Parvi Takkar",
          role: "Deputy Fest Secretary, Competitions and Informals",
          image: "/team/parvi.jpeg",
        },
        {
          name: "Krish Goenka",
          role: "Deputy Fest Secretary",
          image: "/team/krish.jpeg",
        },
        {
          name: "Achintya Nevatia",
          role: "Deputy Fest Secretary",
          image: "/team/achintya.jpeg",
        },
      ],
    },
    {
      name: "Head of Departments",
      members: [
        {
          name: "Tanjal Shah",
          role: "HOD Informal Events",
          image: "/team/tanjal.jpeg",
        },
        {
          name: "Viveka Ramakrishnan",
          role: "Deputy HOD Informal Events",
          image: "/team/viveka.jpg",
        },
        {
          name: "Sanah Arora",
          role: "HOD Competitions",
          image: "/team/sanah.jpeg",
        },
        {
          name: "Shresth Modi",
          role: "Deputy HOD Competitions",
          image: "/team/shresth.jpeg",
        },
        {
          name: "Varnima Agarwal",
          role: "HOD Finance",
          image: "/team/varnima.jpeg",
        },
        {
          name: "Krishika Daga",
          role: "HOD Finance",
          image: "/team/krishika.jpeg",
        },
      ],
    },
  ],
};

const Team = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [expandedDepartments, setExpandedDepartments] = useState<string[]>([]);

  const filteredDepartments = teamData.departments.filter(
    (dept) => activeFilter === null || dept.name === activeFilter
  );

  const toggleDepartment = (departmentName: string) => {
    setExpandedDepartments((prev) =>
      prev.includes(departmentName)
        ? prev.filter((d) => d !== departmentName)
        : [...prev, departmentName]
    );
  };

  return (
    <>
      <Navbar />
      <main className="pt-18">
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
                Meet the Team
              </h1>
              <p className="font-playscript text-2xl text-white/90 max-w-2xl mx-auto">
                The passionate individuals behind Banjaara 2025
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
          <div className="container mx-auto px-6">
            <h2 className="font-playlist text-4xl mb-6 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent py-2">
              Filter by Department
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { id: null, name: "All Departments" },
                ...teamData.departments.map((dept) => ({
                  id: dept.name,
                  name: dept.name,
                })),
              ].map((category) => (
                <Button
                  key={category.id || "all"}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-5 rounded-full transition-all ${
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
        </section>

        {/* Team Members Section */}
        <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
          <div className="container mx-auto px-6">
            {filteredDepartments.map((department, deptIndex) => (
              <motion.div
                key={department.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: deptIndex * 0.1 }}
                className="mb-16"
              >
                <h2 className="font-playlist text-4xl mb-8 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  {department.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {department.members
                    .slice(
                      0,
                      expandedDepartments.includes(department.name)
                        ? undefined
                        : 3
                    )
                    .map((member, index) => (
                      <motion.div
                        key={member.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                      >
                        <div className="relative h-64">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="font-playlist text-2xl text-white">
                              {member.name}
                            </h3>
                            <p className="font-playscript text-white/90">
                              {member.role}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
                {department.members.length > 3 &&
                  !expandedDepartments.includes(department.name) && (
                    <div className="text-center mt-8">
                      <Button
                        onClick={() => toggleDepartment(department.name)}
                        className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600"
                      >
                        See More
                      </Button>
                    </div>
                  )}
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Team;
