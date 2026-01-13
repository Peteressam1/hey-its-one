import { motion } from "framer-motion";
import luminaLogo from "@/assets/lumina-logo-full.png";
import fauLogo from "@/assets/logos/FAU_white.png";
import fapsLogo from "@/assets/logos/FAPS_white.png";
import tumAiLogo from "@/assets/logos/TUM_AI_White.png";
import tumLogo from "@/assets/logos/TUM_Logo_white.png";

const ClosingSlide = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center px-8 py-12 bg-background relative overflow-hidden">
      {/* Unified Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center justify-center space-y-16">
        
        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-7xl lg:text-8xl font-heading text-center tracking-tight"
        >
          <span className="block text-gradient text-glow-animate">
            See the Invisible.
          </span>
          <span className="block text-gradient text-glow-animate mt-4">
            Know the Why.
          </span>
        </motion.h1>

        {/* Lumina Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-5xl"
        >
          <img
            src={luminaLogo}
            alt="Lumina"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Institutional Logos */}
        <motion.div 
          className="flex items-center justify-center gap-12 max-w-5xl mx-auto mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
          >
            <img src={fauLogo} alt="FAU" className="h-20 opacity-80" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
          >
            <img src={fapsLogo} alt="FAPS" className="h-20 opacity-80" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
          >
            <img src={tumAiLogo} alt="TUM AI" className="h-20 opacity-80" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.15, duration: 0.5 }}
            whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
          >
            <img src={tumLogo} alt="TUM" className="h-24 opacity-80" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClosingSlide;
