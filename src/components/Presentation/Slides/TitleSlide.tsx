import { StatTile } from "@/components/ui/stat-tile";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import luminaEmblem from "@/assets/lumina-emblem.png";
import fauLogo from "@/assets/logos/FAU_white.png";
import fapsLogo from "@/assets/logos/FAPS_white.png";
import tumAiLogo from "@/assets/logos/TUM_AI_White.png";
import tumLogo from "@/assets/logos/TUM_Logo_white.png";

const TitleSlide = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center relative bg-background">
      {/* Unified Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern" />
      {/* Lumina Emblem - Top Left */}
      <motion.div 
        className="absolute top-6 left-6 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <img src={luminaEmblem} alt="Lumina Tech" className="h-12 opacity-90" />
      </motion.div>


      {/* Content */}
      <div className="relative z-10 text-center px-8 py-16">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 mb-12"
        >
          {/* Tagline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading text-center tracking-tight">
            <span className="block text-gradient text-glow-animate">
              See the Invisible.
            </span>
            <span className="block text-gradient text-glow-animate mt-4">
              Know the Why.
            </span>
          </h1>
          
        </motion.div>

        {/* Institutional Logos */}
        <motion.div 
          className="flex items-center justify-center gap-8 max-w-3xl mx-auto mt-8"
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

export default TitleSlide;