import { motion } from "motion/react";
import { Sun } from "lucide-react";

const teamMembers = [
  "Clement",
  "Scholes",
  "Sinthiya",
  "Abdullah",
  "Oscar",
  "Roba",
  "Manha",
  "Banz",
  "Fayid",
  "Aminata",
];

export function TeamOrbit() {
  return (
    <div className="w-full max-w-2xl mx-auto py-8">
      {/* Sun Header */}
      <div className="flex flex-col items-center mb-8">
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(251,191,36,0.6)]"
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 0 30px rgba(251, 191, 36, 0.5)",
              "0 0 60px rgba(251, 191, 36, 0.8)",
              "0 0 30px rgba(251, 191, 36, 0.5)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sun className="w-8 h-8 text-white" />
        </motion.div>
      </div>

      {/* Team Names */}
      <div className="flex flex-wrap justify-center items-center gap-3">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member}
            className="bg-gray-900/80 backdrop-blur-sm border border-amber-500/40 px-4 py-2 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
            }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="text-amber-200 font-medium">{member}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
