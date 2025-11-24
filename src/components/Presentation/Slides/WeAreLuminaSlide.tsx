import { motion } from "framer-motion";
import luminaLogo from "@/assets/lumina-logo-full.png";

const WeAreLuminaSlide = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center px-8 py-12 bg-background relative overflow-hidden">
      {/* Intensified Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern opacity-50" />
      
      {/* Lightning Flash Effects */}
      <motion.div
        className="absolute inset-0 bg-primary/30 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 0.3, 0, 0.5, 0, 0.2, 0],
        }}
        transition={{ 
          duration: 3,
          times: [0, 0.1, 0.15, 0.25, 0.3, 0.4, 0.5],
          delay: 0.5,
          ease: "easeInOut"
        }}
      />
      
      {/* Pulsing Energy Rings */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-primary/20"
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{ 
              width: [0, 800, 1600],
              height: [0, 800, 1600],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: 3,
              delay: 1.5 + i * 0.3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center justify-center space-y-16">
        
        {/* "We Are" Title with dramatic reveal */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ 
            duration: 1, 
            delay: 0.5, 
            ease: [0.22, 1, 0.36, 1],
            type: "spring",
            stiffness: 100
          }}
          className="text-6xl md:text-7xl font-bold text-center"
        >
          <span className="text-foreground">We Are</span>
        </motion.h1>

        {/* Lumina Logo with electric reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "brightness(0)" }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            filter: "brightness(1)"
          }}
          transition={{ 
            duration: 1.2, 
            delay: 1.2, 
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="w-full max-w-3xl relative"
        >
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(147, 51, 234, 0.3)",
                "0 0 60px rgba(147, 51, 234, 0.6)",
                "0 0 20px rgba(147, 51, 234, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-2xl"
          >
            <img
              src={luminaLogo}
              alt="Lumina"
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>

        {/* Tagline with reveal effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-center"
        >
          <motion.p
            className="text-3xl md:text-4xl text-foreground font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.3 }}
          >
            <motion.span
              className="text-gradient"
              animate={{ 
                textShadow: [
                  "0 0 10px rgba(147, 51, 234, 0.2)",
                  "0 0 20px rgba(147, 51, 234, 0.4)",
                  "0 0 10px rgba(147, 51, 234, 0.2)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Full-Stack Agentic AI for Quality Control
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default WeAreLuminaSlide;
