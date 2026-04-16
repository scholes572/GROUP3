import { motion } from "motion/react";
import { Ship, Factory, MapPin, Zap } from "lucide-react";

const supplyChainSteps = [
  {
    icon: Factory,
    title: "Source",
    location: "Shanghai/Shenzhen, China",
    description: "Premium solar components",
  },
  {
    icon: Ship,
    title: "Ship",
    location: "Port of Durban",
    description: "Efficient maritime logistics",
  },
  {
    icon: Factory,
    title: "Manufacture",
    location: "Upington, Northern Cape",
    description: "2,500+ sun hours/year",
  },
  {
    icon: Zap,
    title: "Install",
    location: "Nationwide",
    description: "All across South Africa",
  },
];

export function SupplyChain() {
  return (
    <div className="relative py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        {/* Connection Line */}
        <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-amber-500/30"></div>

        {supplyChainSteps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/50 transition-all">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-4 relative">
                <div className="w-16 h-16 mx-auto bg-amber-500/20 rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-amber-400" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-amber-400 mb-2 text-center">
                {step.title}
              </h3>
              <p className="text-sm text-gray-300 mb-2 text-center">{step.location}</p>
              <p className="text-xs text-gray-400 text-center">{step.description}</p>
            </div>

            {/* Arrow */}
            {index < supplyChainSteps.length - 1 && (
              <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <motion.div
                  animate={{
                    x: [0, 8, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    className="w-8 h-8 text-amber-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
