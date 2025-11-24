import { motion } from "framer-motion";
import luminaLogo from "@/assets/lumina-logo-full.png";

const WeAreLuminaSlide = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center px-8 py-12 bg-background relative overflow-hidden">
      {/* Simplified Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern opacity-50" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center justify-center space-y-16">
        
        {/* "We Are" Title with dramatic reveal */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.2, 
            ease: [0.22, 1, 0.36, 1],
            type: "spring",
            stiffness: 120
          }}
          className="text-6xl md:text-7xl font-bold text-center"
        >
          <span className="text-foreground">We Are</span>
        </motion.h1>

        {/* Lumina Logo with simple reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            scale: 1
          }}
          transition={{ 
            duration: 0.8, 
            delay: 0.6, 
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="w-full max-w-3xl"
        >
          <img
            src={luminaLogo}
            alt="Lumina"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Tagline with reveal effect and glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <motion.p
            className="text-3xl md:text-4xl font-heading tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <motion.span
              className="text-gradient text-glow-animate"
              animate={{ 
                textShadow: [
                  "0 0 10px rgba(147, 51, 234, 0.3)",
                  "0 0 30px rgba(147, 51, 234, 0.6)",
                  "0 0 10px rgba(147, 51, 234, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              a Full-Stack Agentic AI for Quality Control
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default WeAreLuminaSlide;
