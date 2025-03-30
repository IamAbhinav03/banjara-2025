import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar/Navarbar";
import Footer from "@/components/Footer/Footer";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Instagram, Linkedin, Mail } from "lucide-react";

// Sample team data - replace with actual data
const teamData = {
  departments: [
    {
      name: "Core Team",
      members: [
        {
          name: "John Doe",
          role: "Festival Director",
          image: "/team/john-doe.jpg",
          socials: {
            instagram: "https://instagram.com/johndoe",
            linkedin: "https://linkedin.com/in/johndoe",
            email: "john@example.com",
          },
        },
        // Add more core team members
      ],
    },
    {
      name: "Technical Team",
      members: [
        {
          name: "Jane Smith",
          role: "Technical Head",
          image: "/team/jane-smith.jpg",
          socials: {
            instagram: "https://instagram.com/janesmith",
            linkedin: "https://linkedin.com/in/janesmith",
            email: "jane@example.com",
          },
        },
        // Add more technical team members
      ],
    },
    {
      name: "Design Team",
      members: [
        {
          name: "Mike Johnson",
          role: "Design Head",
          image: "/team/mike-johnson.jpg",
          socials: {
            instagram: "https://instagram.com/mikejohnson",
            linkedin: "https://linkedin.com/in/mikejohnson",
            email: "mike@example.com",
          },
        },
        // Add more design team members
      ],
    },
    // Add more departments
  ],
};

const ITEMS_PER_PAGE = 6;

const Team = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedDepartments, setExpandedDepartments] = useState<string[]>([]);

  const filteredDepartments = teamData.departments.filter(
    (dept) => selectedDepartment === "all" || dept.name === selectedDepartment
  );

  const filteredMembers = filteredDepartments.flatMap((dept) =>
    dept.members.filter(
      (member) =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredMembers.length / ITEMS_PER_PAGE);
  const paginatedMembers = filteredMembers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
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
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <div className="w-full md:w-64">
                <Select
                  value={selectedDepartment}
                  onValueChange={setSelectedDepartment}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    {teamData.departments.map((dept) => (
                      <SelectItem key={dept.name} value={dept.name}>
                        {dept.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-64 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search team members..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
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
                    .filter(
                      (member) =>
                        member.name
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase()) ||
                        member.role
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())
                    )
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
                        <div className="p-4 flex justify-center gap-4">
                          <a
                            href={member.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-500 hover:text-pink-600 transition-colors"
                          >
                            <Instagram className="w-5 h-5" />
                          </a>
                          <a
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600 transition-colors"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                          <a
                            href={`mailto:${member.socials.email}`}
                            className="text-purple-500 hover:text-purple-600 transition-colors"
                          >
                            <Mail className="w-5 h-5" />
                          </a>
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

        {/* Pagination */}
        {totalPages > 1 && (
          <section className="py-8">
            <div className="container mx-auto px-6">
              <div className="flex justify-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-full ${
                        currentPage === page
                          ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {page}
                    </Button>
                  )
                )}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Team;
