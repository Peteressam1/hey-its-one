import { motion } from "framer-motion";
import { Zap, Database, Camera, Sun } from "lucide-react";
import eventCameraDiagram from "@/assets/event-camera-diagram.jpg";

const EventCameraExplainerSlide = () => {
  const advantages = [
    { icon: Zap, title: "Low Latency", value: "~1 μs", description: "1000× faster than standard cameras" },
    { icon: Database, title: "Low Bandwidth", value: "100× less", description: "Sparse events vs full frames" },
    { icon: Camera, title: "No Motion Blur", value: "Async", description: "Each pixel independent" },
    { icon: Sun, title: "High Dynamic Range", value: ">120 dB", description: "Works in any lighting" },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center px-8 py-12 bg-background relative">
      {/* Unified Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 border border-primary/30 rounded-full text-sm text-primary mb-4">
            WHAT ARE EVENT CAMERAS?
          </div>
          <h1 className="text-5xl font-bold text-gradient mb-4">
            A camera that measures only motion in the scene
          </h1>
          <p className="text-xl text-muted-foreground">
            Unlike standard cameras that capture frames, event cameras capture <span className="text-primary">changes</span>
          </p>
        </motion.div>

        {/* Visual Comparison */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-12 p-6 bg-card/80 backdrop-blur-sm border border-border rounded-lg"
        >
          <img 
            src={eventCameraDiagram} 
            alt="Event Camera Diagram" 
            className="w-full h-auto rounded-lg"
          />
          <div className="mt-4 text-center">
            <code className="text-sm text-muted-foreground">
              log I(x,y,t+Δt) - log I(x,y,t) = ±C
            </code>
            <p className="text-xs text-muted-foreground mt-2">
              When brightness change exceeds threshold C, pixel sends an event with (x, y, timestamp, polarity)
            </p>
          </div>
        </motion.div>

        {/* Key Advantages Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {advantages.map((adv, index) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              className="p-6 bg-card/80 backdrop-blur-sm border border-border rounded-lg hover:border-primary/40 transition-all duration-300 text-center"
            >
              <adv.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-1">{adv.title}</h3>
              <p className="text-2xl font-bold text-gradient mb-2">{adv.value}</p>
              <p className="text-xs text-muted-foreground">{adv.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Citation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-center text-xs text-muted-foreground"
        >
          <p>
            [1] Lichtsteiner et al., IEEE Journal of Solid-State Circuits, 2008 • 
            [2] Gallego et al., Event-based Vision: A Survey, T-PAMI, 2020
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default EventCameraExplainerSlide;
