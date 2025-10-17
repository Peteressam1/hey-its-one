import { motion } from "framer-motion";
import luminaLogo from "@/assets/lumina-logo-full.png";

const WeAreLuminaSlide = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center px-8 py-12 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center justify-center space-y-16">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl font-bold text-center"
        >
          <span className="text-foreground">We Are</span>
        </motion.h1>

        {/* Lumina Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-3xl"
        >
          <img
            src={luminaLogo}
            alt="Lumina"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Subtle tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl text-muted-foreground text-center max-w-3xl whitespace-nowrap"
        >
          Making vision systems faster, adaptive, and explainable in industrial automation
        </motion.p>
      </div>
    </div>
  );
};

export default WeAreLuminaSlide;
