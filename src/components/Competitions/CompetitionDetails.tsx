import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar/Navarbar";
import Footer from "@/components/Footer/Footer";
import { Button } from "@/components/ui/button";
import { Gift, Users, IndianRupee, ArrowLeft } from "lucide-react";

interface CompetitionDetails {
  name: string;
  description: string;
  rules?: string[];
  details: {
    teamSize: string;
    registrationFee: string;
    prizePool: string;
  };
}

const CompetitionDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state as {
    item: CompetitionDetails;
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
              <Button
                onClick={() => navigate(-1)}
                className="mb-8 bg-white/10 hover:bg-white/20 text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Competitions
              </Button>
              <h1 className="font-playlist text-6xl md:text-8xl text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                {item.name}
              </h1>
              <p className="font-playscript text-2xl text-white/90 max-w-3xl mx-auto">
                {item.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5"></div>
          <div className="container mx-auto px-6 relative">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Competition Details */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h2 className="font-playlist text-3xl mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Competition Details
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <Gift className="w-6 h-6 mr-3 text-pink-500" />
                    <div>
                      <p className="font-medium">Prize Pool</p>
                      <p className="text-xl text-pink-600">
                        {item.details.prizePool}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <IndianRupee className="w-6 h-6 mr-3 text-purple-500" />
                    <div>
                      <p className="font-medium">Registration Fee</p>
                      <p className="text-xl text-purple-600">
                        {item.details.registrationFee}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users className="w-6 h-6 mr-3 text-blue-500" />
                    <div>
                      <p className="font-medium">Team Size</p>
                      <p className="text-xl text-blue-600">
                        {item.details.teamSize}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Rules Section */}
              {item.rules && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl p-8"
                >
                  <h2 className="font-playlist text-3xl mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    Rules & Guidelines
                  </h2>
                  <ul className="space-y-4">
                    {item.rules.map((rule, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span className="text-pink-500 text-xl">•</span>
                        <span className="font-playscript">{rule}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Registration CTA */}
        <section className="py-16 bg-gradient-to-br from-pink-900 via-purple-900 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 animate-pulse"></div>
          <div className="container mx-auto px-6 relative text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-playlist text-4xl md:text-5xl text-white mb-6">
                Ready to Participate?
              </h2>
              <p className="font-playscript text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Don't miss your chance to showcase your talent and win exciting
                prizes!
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

export default CompetitionDetails;
