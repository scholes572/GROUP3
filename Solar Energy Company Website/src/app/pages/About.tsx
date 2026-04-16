import { motion } from "motion/react";
import { Calendar, Target, Heart, Award } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-amber-500">
            About SolaraForge
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Forging a brighter, sustainable future for South Africa through innovative solar solutions
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-amber-400 mb-6">Our Story</h2>
            <p className="text-gray-300 mb-4">
              Founded in 2026, SolaraForge emerged from a clear vision: to address South Africa's
              ongoing power challenges with reliable, sustainable solar energy solutions. As load
              shedding continued to impact homes and businesses across the nation, we saw an
              opportunity to make a real difference.
            </p>
            <p className="text-gray-300 mb-4">
              With our headquarters in Johannesburg and a state-of-the-art manufacturing facility
              in Upington, we've strategically positioned ourselves to serve the entire country.
              Upington's exceptional 2,500+ sun hours per year make it the perfect location for
              both manufacturing and testing our solar solutions.
            </p>
            <p className="text-gray-300">
              Our team of 10 dedicated professionals brings together expertise from engineering,
              operations, logistics, and customer service to deliver excellence in every project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-xl overflow-hidden"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1602593977217-0bc1808b6688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTb3V0aCUyMEFmcmljYSUyMGxhbmRzY2FwZSUyMHN1bnNldHxlbnwxfHx8fDE3NzYzMzI5NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Beautiful South African landscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent"></div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-amber-400 mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/50 transition-all">
              <Target className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold text-amber-400 mb-3">Innovation</h3>
              <p className="text-gray-300">
                Constantly improving our solutions to meet South Africa's unique energy challenges.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/50 transition-all">
              <Heart className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold text-amber-400 mb-3">Customer Focus</h3>
              <p className="text-gray-300">
                Putting our customers first with tailored solutions and exceptional service.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/50 transition-all">
              <Award className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold text-amber-400 mb-3">Quality</h3>
              <p className="text-gray-300">
                Premium components and rigorous testing ensure long-lasting performance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/50 transition-all">
              <Calendar className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold text-amber-400 mb-3">Sustainability</h3>
              <p className="text-gray-300">
                Committed to reducing carbon footprints and building a greener future.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Manufacturing Excellence */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-xl overflow-hidden"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1775519520167-65f114b3ff99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjaWxpdHklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NjMzMjk0OHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Advanced manufacturing facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold text-amber-400 mb-6">Manufacturing Excellence</h2>
            <p className="text-gray-300 mb-4">
              Our Upington facility represents the cutting edge of solar panel manufacturing in
              South Africa. We source premium components from trusted suppliers in Shanghai and
              Shenzhen, China, ensuring the highest quality standards.
            </p>
            <p className="text-gray-300 mb-4">
              All components arrive through the Port of Durban and are transported to our Northern
              Cape facility where our skilled technicians assemble and rigorously test each unit
              before deployment.
            </p>
            <p className="text-gray-300">
              This vertically integrated approach allows us to maintain quality control at every
              step while supporting local jobs and the South African economy.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-amber-500/10 backdrop-blur-sm border border-amber-500/30 rounded-xl p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">2026</div>
              <div className="text-gray-300">Founded</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">10</div>
              <div className="text-gray-300">Team Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">2</div>
              <div className="text-gray-300">Strategic Locations</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">2,500+</div>
              <div className="text-gray-300">Sun Hours/Year</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
