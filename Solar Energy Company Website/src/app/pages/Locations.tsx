import { motion } from "motion/react";
import { MapPin, Phone, Mail, Building2, Factory, Sun, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Locations() {
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
            Our Locations
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strategically positioned across South Africa to serve you better
          </p>
        </motion.div>

        {/* Johannesburg HQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1757843298369-6e5503c14bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwc2t5bGluZSUyMG5pZ2h0fGVufDF8fHx8MTc3NjI2NTQyMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Johannesburg city skyline"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <Building2 className="w-12 h-12 text-amber-500 mb-3" />
                <h2 className="text-3xl font-bold text-white">Johannesburg Headquarters</h2>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-amber-400 mb-6">Corporate Hub</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-white mb-1">Location</div>
                      <div className="text-gray-300">Gauteng, South Africa</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-white mb-1">Functions</div>
                      <div className="text-gray-300">
                        Strategic planning, customer relations, sales, and administrative operations
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-white mb-1">Team</div>
                      <div className="text-gray-300">
                        Leadership and customer service teams based here
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-amber-500/20 pt-6">
                  <h4 className="font-semibold text-amber-400 mb-3">Why Johannesburg?</h4>
                  <p className="text-gray-300 mb-3">
                    Located in the heart of South Africa's economic center, our Johannesburg
                    headquarters provides easy access to clients across Gauteng and serves as
                    our primary customer-facing hub.
                  </p>
                  <p className="text-gray-300">
                    The city's central location allows us to efficiently coordinate nationwide
                    installations and maintain strong relationships with our diverse client base.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Upington Manufacturing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-amber-400 mb-6">Manufacturing Excellence</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-white mb-1">Location</div>
                      <div className="text-gray-300">Upington, Northern Cape, South Africa</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Factory className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-white mb-1">Functions</div>
                      <div className="text-gray-300">
                        Solar panel assembly, quality control, testing, and distribution
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Sun className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-white mb-1">Sun Hours</div>
                      <div className="text-gray-300">
                        2,500+ hours per year - Ideal for testing and quality assurance
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-amber-500/20 pt-6">
                  <h4 className="font-semibold text-amber-400 mb-3">Why Upington?</h4>
                  <p className="text-gray-300 mb-3">
                    Upington offers some of the highest solar irradiance in South Africa with over
                    2,500 sun hours annually. This makes it the perfect location not only for
                    manufacturing but also for real-world testing of our solar solutions.
                  </p>
                  <p className="text-gray-300">
                    Our facility receives components via the Port of Durban and our skilled local
                    workforce assembles and tests each unit under optimal conditions before
                    deployment across the country.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-xl overflow-hidden order-1 lg:order-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1681407667247-6e8ace597b61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBzdW4lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc2MzMyOTUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Upington desert landscape"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <Factory className="w-12 h-12 text-amber-500 mb-3" />
                <h2 className="text-3xl font-bold text-white">Upington Manufacturing Hub</h2>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Supply Chain Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-amber-500/10 to-amber-700/10 backdrop-blur-sm border border-amber-500/30 rounded-xl p-12 mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-amber-400 mb-8">Our Supply Chain Network</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-amber-400 mb-2">Shanghai/Shenzhen</h3>
              <p className="text-gray-300 text-sm">Premium component sourcing</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-amber-400 mb-2">Port of Durban</h3>
              <p className="text-gray-300 text-sm">Import gateway</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-amber-400 mb-2">Upington Facility</h3>
              <p className="text-gray-300 text-sm">Assembly & testing</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-amber-400 mb-2">Nationwide</h3>
              <p className="text-gray-300 text-sm">Installation across SA</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-amber-400 mb-6">Visit Us</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We welcome visits to our Johannesburg headquarters. Contact us to schedule a
            consultation or facility tour.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center gap-2 justify-center">
              <Phone className="w-5 h-5 text-amber-500" />
              <span className="text-gray-300">Schedule a Call</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Mail className="w-5 h-5 text-amber-500" />
              <span className="text-gray-300">Email Us</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
