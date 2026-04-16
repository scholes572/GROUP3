import { motion } from "motion/react";
import { Users } from "lucide-react";

const teamMembers = [
  "Clement",
  "Scholes",
  "Sajeda",
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
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* Center Sun/Core */}
      <motion.div
        className="absolute w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-2xl z-10"
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 0 30px rgba(251, 191, 36, 0.5)",
            "0 0 50px rgba(251, 191, 36, 0.8)",
            "0 0 30px rgba(251, 191, 36, 0.5)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Users className="w-12 h-12 text-white" />
      </motion.div>

      {/* Orbiting Team Members */}
      {teamMembers.map((member, index) => {
        const angle = (360 / teamMembers.length) * index;
        const radius = 140;

        return (
          <motion.div
            key={member}
            className="absolute"
            style={{
              width: "60px",
              height: "60px",
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: (index * 20) / teamMembers.length,
            }}
          >
            <motion.div
              className="relative"
              style={{
                transformOrigin: `center center`,
                transform: `rotate(${angle}deg) translateX(${radius}px)`,
              }}
              whileHover={{ scale: 1.2 }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500/30 to-amber-700/30 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-amber-400/50 shadow-lg">
                <motion.div
                  className="text-xs text-amber-200 text-center px-1"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    delay: (index * 20) / teamMembers.length,
                  }}
                >
                  {member}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Orbit Ring */}
      <div className="absolute w-72 h-72 border-2 border-amber-500/20 rounded-full"></div>
    </div>
  );
}
