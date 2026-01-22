import { motion } from "framer-motion";
import luminaLogo from "@/assets/lumina-logo-full.png";

const WeAreLuminaSlide = () => {
  return (
    <div 
      className="w-full h-screen flex items-center justify-center bg-background relative overflow-hidden"
      style={{ padding: '2.5cm' }}
    >
      {/* Simplified Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern opacity-50" />

      {/* Content */}
      <div 
        className="relative z-10 w-full h-full flex flex-col items-center justify-center"
        style={{ gap: '3vh' }}
      >
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
          className="font-bold text-center text-foreground"
          style={{ fontSize: 'clamp(4rem, 12vw, 10rem)' }}
        >
          We Are
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
          style={{ width: 'clamp(400px, 75vw, 1100px)' }}
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
            className="font-heading tracking-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}
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
