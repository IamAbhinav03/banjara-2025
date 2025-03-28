<section className="min-h-screen flex items-center justify-center relative pt-20 pb-16 bg-[url('/patterns/subtle-dots.svg')] bg-repeat">
            <div className="container mx-auto px-6 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 300 
                }}
                className="glass-card p-10 md:p-16 mx-auto max-w-3xl backdrop-blur-xl bg-white/50 border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
              >
                <div className="mb-2">
                  <span className="inline-block py-1 px-3 text-xs font-semibold tracking-wider text-banjaara-pink bg-banjaara-pink/10 rounded-full">
                    2025 EDITION
                  </span>
                </div>
                
                <AnimatedHeading className="text-5xl md:text-7xl font-yatra-one mb-6" gradient={true}>
                  Banjaara
                </AnimatedHeading>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-xl md:text-2xl mb-8 text-gray-800 font-medium"
                >
                  Where <span className="text-banjaara-pink font-bold">tradition</span> meets <span className="text-banjaara-purple font-bold">future</span>
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="space-x-4"
                >
                  <Button 
                    onClick={() => navigate('/competitions')}
                    className="bg-gradient-to-r from-banjaara-pink to-banjaara-purple hover:opacity-90 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Explore
                  </Button>
                  
                  <Button 
                    onClick={() => navigate('/schedule')}
                    variant="outline"
                    className="border-2 border-banjaara-pink text-banjaara-pink hover:bg-banjaara-pink hover:text-white text-lg px-8 py-6 rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule
                  </Button>
                </motion.div>
              </motion.div>