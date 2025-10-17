import { motion } from "framer-motion";
import multimodalImage from "@/assets/multimodal-slide.jpg";

const MultimodalApproachSlide = () => {
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
      <div className="relative z-10 w-full max-w-7xl space-y-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">Multimodal Approach</span> Viability
          </h1>
        </motion.div>

        {/* Diagram Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-white p-4 rounded-xl shadow-2xl">
            <img
              src={multimodalImage}
              alt="Hybrid Asynchronous Object Detection showing events and images processing through async GNN and CNN"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </motion.div>

        {/* Key Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-primary/20 shadow-xl max-w-5xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-foreground leading-relaxed text-center">
            Results of the paper shows that using a{" "}
            <span className="text-primary font-bold">20 fps camera</span> plus an{" "}
            <span className="text-accent font-bold">event camera</span> can achieve the same latency as a{" "}
            <span className="text-warning font-bold">5,000 fps camera</span> with the bandwidth of a{" "}
            <span className="text-primary font-bold">50 fps camera</span> without compromising accuracy.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MultimodalApproachSlide;
