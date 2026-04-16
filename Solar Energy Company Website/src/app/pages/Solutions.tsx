import { motion } from "motion/react";
import { Home, Building2, Zap, Battery, Sun, Shield, Check } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Solutions() {
  const residentialFeatures = [
    "Backup power during load shedding",
    "Reduce electricity bills by up to 80%",
    "Battery storage systems",
    "Smart energy management",
    "25-year warranty on panels",
    "Professional installation",
  ];

  const businessFeatures = [
    "Uninterrupted business operations",
    "Scalable solar solutions",
    "Commercial-grade equipment",
    "Energy cost optimization",
    "Monitoring and analytics",
    "Maintenance packages",
  ];

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
            Solar Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solar power systems designed for South African homes and businesses
          </p>
        </motion.div>

        {/* Main Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Residential */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all"
          >
            <div className="relative h-64">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1766288176154-d4cccaefd7a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGhvdXNlJTIwc29sYXIlMjBwYW5lbHN8ZW58MXx8fHwxNzc2MzMyOTUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Residential solar installation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Home className="w-10 h-10 text-amber-500" />
                <h2 className="text-3xl font-bold text-amber-400">Residential Solutions</h2>
              </div>
              
              <p className="text-gray-300 mb-6">
                Power your home with clean, reliable solar energy. Say goodbye to load shedding
                and hello to energy independence.
              </p>

              <div className="space-y-3 mb-6">
                {residentialFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Starting from</div>
                <div className="text-3xl font-bold text-amber-400">Contact for Quote</div>
              </div>
            </div>
          </motion.div>

          {/* Commercial */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all"
          >
            <div className="relative h-64">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1684695749267-233af13276d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlfGVufDF8fHx8MTc3NjMwNTc1OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Commercial solar installation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-10 h-10 text-amber-500" />
                <h2 className="text-3xl font-bold text-amber-400">Business Solutions</h2>
              </div>
              
              <p className="text-gray-300 mb-6">
                Keep your business running smoothly with industrial-strength solar systems.
                Maximize uptime and minimize costs.
              </p>

              <div className="space-y-3 mb-6">
                {businessFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Custom pricing</div>
                <div className="text-3xl font-bold text-amber-400">Enterprise Quote</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-amber-400 mb-12">Why Choose Our Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8 hover:border-amber-500/50 transition-all">
              <Zap className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold text-amber-400 mb-3">Load Shedding Protection</h3>
              <p className="text-gray-300">
                Never worry about power outages again. Our systems keep you running 24/7.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8 hover:border-amber-500/50 transition-all">
              <Battery className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold text-amber-400 mb-3">Energy Storage</h3>
              <p className="text-gray-300">
                Advanced battery systems store excess power for use during peak times or outages.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8 hover:border-amber-500/50 transition-all">
              <Sun className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold text-amber-400 mb-3">Premium Panels</h3>
              <p className="text-gray-300">
                High-efficiency solar panels optimized for South Africa's abundant sunshine.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8 hover:border-amber-500/50 transition-all">
              <Shield className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold text-amber-400 mb-3">Warranty Protection</h3>
              <p className="text-gray-300">
                Industry-leading warranties ensure your investment is protected for decades.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8 hover:border-amber-500/50 transition-all">
              <Building2 className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold text-amber-400 mb-3">Local Manufacturing</h3>
              <p className="text-gray-300">
                Assembled in Upington with quality control at every step of production.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8 hover:border-amber-500/50 transition-all">
              <Home className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold text-amber-400 mb-3">Expert Installation</h3>
              <p className="text-gray-300">
                Professional installation teams ensure optimal performance and safety.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-amber-500/10 backdrop-blur-sm border border-amber-500/30 rounded-xl p-12"
        >
          <h2 className="text-3xl font-bold text-center text-amber-400 mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-amber-400 mb-2">Consultation</h3>
              <p className="text-gray-300 text-sm">
                Free assessment of your energy needs and property
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-amber-400 mb-2">Custom Design</h3>
              <p className="text-gray-300 text-sm">
                Tailored solar solution designed for your specific requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-amber-400 mb-2">Installation</h3>
              <p className="text-gray-300 text-sm">
                Professional installation by certified technicians
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-amber-400 mb-2">Enjoy Power</h3>
              <p className="text-gray-300 text-sm">
                Start saving money and enjoying uninterrupted power
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
