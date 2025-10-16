import { StatTile } from "@/components/ui/stat-tile";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import luminaEmblem from "@/assets/lumina-emblem.png";
import luminaLogo from "@/assets/lumina-logo-text.png";
import { TUMAIBadge } from "@/components/ui/tum-ai-badge";

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

      {/* TUM AI Badge - Top Right */}
      <motion.div 
        className="absolute top-6 right-6 z-20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <TUMAIBadge variant="subtle" />
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
          {/* Lumina Tech Logo */}
          <div className="flex justify-center mb-6">
            <img src={luminaLogo} alt="Lumina Tech" className="h-16 opacity-95" />
          </div>

          {/* Tagline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-center tracking-tight">
            <span className="block text-gradient text-glow-animate">
              See the Invisible.
            </span>
            <span className="block text-gradient text-glow-animate mt-2">
              Know the Why.
            </span>
          </h1>
          
        </motion.div>

        {/* Key Metrics */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} className="glass-card card-hover-3d">
            <StatTile value="$20.38B" label="2024 Market Size" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="glass-card card-hover-3d">
            <StatTile value="$41.74B" label="2030 Market Size" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="glass-card card-hover-3d">
            <StatTile value="13.0%" label="CAGR Growth" />
          </motion.div>
        </motion.div>
        
        {/* Source Attribution */}
        <motion.div
          className="text-xs text-muted-foreground text-center cursor-pointer hover:text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
           title="Click to expand: Machine Vision Market data from Grand View Research 2025"
        >
          Source: Grand View Research, Machine Vision Market, 2025. <span className="text-primary">ⓘ</span>
        </motion.div>
      </div>
    </div>
  );
};

export default TitleSlide;