import { motion } from "framer-motion";
import factoryMap from "@/assets/factory-automation-map.png";

const FactoryApplicationsSlide = () => {
  return (
    <div className="relative h-screen w-full bg-background flex flex-col items-center justify-center overflow-hidden px-8 py-12">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            <span className="text-primary">Factory-Wide</span> Applications
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Event-based vision across the entire production line
          </p>
        </motion.div>

        {/* Factory Map Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-primary/20 shadow-2xl">
            <img
              src={factoryMap}
              alt="Factory-wide event-based vision applications map showing safety, quality, predictive maintenance, and productivity use cases"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FactoryApplicationsSlide;
