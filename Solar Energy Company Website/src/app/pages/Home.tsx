import { motion } from "motion/react";
import { Link } from "react-router";
import { Zap, MapPin, Users, ArrowRight, Sun, Factory } from "lucide-react";
import { TeamOrbit } from "../components/TeamOrbit";
import { SupplyChain } from "../components/SupplyChain";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-amber-500/10 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-amber-500">
              Power Your Future with Solar
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Smart solar solutions addressing load shedding and power challenges across South Africa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/solutions"
                className="px-8 py-4 bg-amber-500 rounded-lg font-semibold hover:bg-amber-600 transition-all shadow-lg hover:shadow-amber-500/50 flex items-center justify-center gap-2"
              >
                Explore Solutions <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-amber-500 rounded-lg font-semibold hover:bg-amber-500/10 transition-all flex items-center justify-center gap-2"
              >
                Get Started <Zap className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Team Orbit Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <TeamOrbit />
          </motion.div>

          <p className="text-sm text-gray-400 mt-8">
            Our team of 10 dedicated professionals working together
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-500">
              Leading Solar Innovation Since 2026
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Based in Johannesburg with state-of-the-art manufacturing in Upington, 
              we're transforming South Africa's energy landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8 hover:border-amber-500/50 transition-all"
            >
              <Zap className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-2xl font-semibold text-amber-400 mb-3">Load Shedding Solutions</h3>
              <p className="text-gray-300">
                Reliable backup power systems designed specifically for South African homes and businesses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8 hover:border-amber-500/50 transition-all"
            >
              <Sun className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-2xl font-semibold text-amber-400 mb-3">2,500+ Sun Hours</h3>
              <p className="text-gray-300">
                Our Upington facility maximizes efficiency with optimal solar exposure year-round.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8 hover:border-amber-500/50 transition-all"
            >
              <Factory className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-2xl font-semibold text-amber-400 mb-3">Local Manufacturing</h3>
              <p className="text-gray-300">
                Proudly assembled in South Africa, supporting local jobs and economy.
              </p>
            </motion.div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-xl overflow-hidden group"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1635424709961-f3a150459ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGluc3RhbGxhdGlvbiUyMHJvb2Z0b3B8ZW58MXx8fHwxNzc2MzMyOTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Solar panel installation"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Professional Solar Installation</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-xl overflow-hidden group"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1670519808728-335b1eb2ef52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGZhcm0lMjByZW5ld2FibGUlMjBlbmVyZ3l8ZW58MXx8fHwxNzc2MzMyOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Solar farm"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Renewable Energy at Scale</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Supply Chain Visualization */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-500">
              Our Global Supply Chain
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From international sourcing to local manufacturing and nationwide installation
            </p>
          </motion.div>

          <SupplyChain />

          {/* Supply Chain Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 relative h-96 rounded-xl overflow-hidden"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1614568111194-3c251800e81e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBwb3J0JTIwY29udGFpbmVyc3xlbnwxfHx8fDE3NzYyNDkxNjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Port of Durban shipping containers"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent flex items-end p-8">
              <div>
                <h3 className="text-white font-bold text-2xl mb-2">Port of Durban</h3>
                <p className="text-gray-200">Gateway for our international component imports</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Locations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-500">
              Strategic Locations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Positioned across South Africa for maximum impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-xl overflow-hidden group"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1681407667247-6e8ace597b61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBzdW4lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc2MzMyOTUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Upington desert landscape"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-transparent p-8 flex flex-col justify-end">
                <MapPin className="w-10 h-10 text-amber-500 mb-3" />
                <h3 className="text-white font-bold text-3xl mb-2">Upington Manufacturing Hub</h3>
                <p className="text-gray-200 mb-4">Northern Cape, South Africa</p>
                <p className="text-gray-300">
                  Our primary manufacturing facility benefits from over 2,500 sun hours per year,
                  making it the ideal location for solar panel production and testing.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-xl overflow-hidden group"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1757843298369-6e5503c14bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwc2t5bGluZSUyMG5pZ2h0fGVufDF8fHx8MTc3NjI2NTQyMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Johannesburg city skyline"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-transparent p-8 flex flex-col justify-end">
                <MapPin className="w-10 h-10 text-amber-500 mb-3" />
                <h3 className="text-white font-bold text-3xl mb-2">Johannesburg Headquarters</h3>
                <p className="text-gray-200 mb-4">Gauteng, South Africa</p>
                <p className="text-gray-300">
                  Our headquarters in the heart of South Africa's economic hub manages operations,
                  customer relations, and strategic planning for nationwide deployment.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 rounded-lg font-semibold hover:bg-amber-600 transition-all shadow-lg hover:shadow-amber-500/50"
            >
              Explore Our Locations <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-500">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              10 dedicated professionals committed to powering South Africa's solar revolution
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-xl overflow-hidden mb-12"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758518731457-5ef826b75b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc3NjI0NDYzMHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="SolaraForge team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent flex items-end p-8">
              <div>
                <Users className="w-10 h-10 text-amber-500 mb-3" />
                <h3 className="text-white font-bold text-2xl mb-2">Innovative. Dedicated. Expert.</h3>
                <p className="text-gray-200">
                  Led by Clement, our team brings together expertise in engineering, operations,
                  and customer service to deliver exceptional solar solutions.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="text-center">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-amber-500 rounded-lg font-semibold hover:bg-amber-500/10 transition-all"
            >
              Meet the Full Team <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-500">
              Ready to Go Solar?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of South Africans who have said goodbye to load shedding
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-amber-500 rounded-lg font-semibold text-lg hover:bg-amber-600 transition-all shadow-lg hover:shadow-amber-500/50"
            >
              Get Your Free Quote <Zap className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
