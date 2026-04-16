import { motion } from "motion/react";
import { Users, Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const teamMembers = [
  {
    name: "Clement",
    role: "Founder & CEO",
    description: "Visionary leader driving solar innovation across South Africa",
    specialty: "Strategic Leadership",
  },
  {
    name: "Scholes",
    role: "Chief Technology Officer",
    description: "Engineering expert ensuring cutting-edge solar solutions",
    specialty: "Solar Engineering",
  },
  {
    name: "Sajeda",
    role: "Operations Director",
    description: "Manages manufacturing and quality control processes",
    specialty: "Operations Management",
  },
  {
    name: "Abdullah",
    role: "Supply Chain Manager",
    description: "Oversees global logistics from China to installation",
    specialty: "Logistics & Supply",
  },
  {
    name: "Oscar",
    role: "Installation Lead",
    description: "Ensures professional installation across all projects",
    specialty: "Technical Installation",
  },
  {
    name: "Roba",
    role: "Customer Success Manager",
    description: "Dedicated to exceptional customer experiences",
    specialty: "Client Relations",
  },
  {
    name: "Manha",
    role: "Sales Director",
    description: "Connects clients with perfect solar solutions",
    specialty: "Business Development",
  },
  {
    name: "Banz",
    role: "Quality Assurance Lead",
    description: "Maintains highest standards in manufacturing",
    specialty: "Quality Control",
  },
  {
    name: "Fayid",
    role: "Technical Support Specialist",
    description: "Provides expert technical assistance and maintenance",
    specialty: "Technical Support",
  },
  {
    name: "Aminata",
    role: "Marketing & Communications",
    description: "Shares our solar story with South Africa",
    specialty: "Brand & Marketing",
  },
];

export function Team() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the 10 passionate professionals powering South Africa's solar revolution
          </p>
        </motion.div>

        {/* Team Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-96 rounded-xl overflow-hidden mb-20"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzYzMzA0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="SolaraForge team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent flex items-end p-8">
            <div>
              <Users className="w-12 h-12 text-amber-500 mb-3" />
              <h2 className="text-3xl font-bold text-white mb-2">United in Purpose</h2>
              <p className="text-gray-200 text-lg">
                A diverse team working together to bring reliable solar energy to every corner of South Africa
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all group"
            >
              {/* Profile Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-amber-500/20 to-amber-700/20 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white text-3xl font-bold group-hover:scale-110 transition-transform">
                  {member.name.charAt(0)}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-amber-400 mb-1">{member.name}</h3>
                <p className="text-sm text-amber-300/70 mb-3">{member.role}</p>
                <p className="text-gray-300 mb-4">{member.description}</p>
                
                <div className="flex items-center gap-2 text-sm mb-4">
                  <div className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-300">
                    {member.specialty}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-amber-500/20">
                  <button className="p-2 hover:bg-amber-500/10 rounded-lg transition-colors">
                    <Linkedin className="w-5 h-5 text-amber-500" />
                  </button>
                  <button className="p-2 hover:bg-amber-500/10 rounded-lg transition-colors">
                    <Mail className="w-5 h-5 text-amber-500" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Culture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-amber-500/10 to-amber-700/10 backdrop-blur-sm border border-amber-500/30 rounded-xl p-12"
        >
          <h2 className="text-3xl font-bold text-center text-amber-400 mb-8">Our Culture</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="font-semibold text-amber-400 mb-2">Innovation First</h3>
              <p className="text-gray-300 text-sm">
                We encourage creative thinking and embrace new ideas to continuously improve our solutions
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-semibold text-amber-400 mb-2">Collaboration</h3>
              <p className="text-gray-300 text-sm">
                Working together across departments to deliver exceptional results for our clients
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">💚</div>
              <h3 className="font-semibold text-amber-400 mb-2">Sustainability</h3>
              <p className="text-gray-300 text-sm">
                Committed to environmental responsibility in everything we do
              </p>
            </div>
          </div>
        </motion.div>

        {/* Join Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-amber-400 mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals passionate about renewable energy
            and making a difference in South Africa
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-amber-500/50">
            View Open Positions
          </button>
        </motion.div>
      </div>
    </div>
  );
}
