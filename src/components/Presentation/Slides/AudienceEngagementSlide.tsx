import { motion } from "framer-motion";
import { Brain, Eye, Zap } from "lucide-react";

const AudienceEngagementSlide = () => {
  const terms = [
    { icon: Eye, text: "Event-based cameras" },
    { icon: Brain, text: "Neuromorphic vision sensors" },
    { icon: Zap, text: "Dynamic Vision Sensors (DVS)" },
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
      <div className="relative z-10 text-center max-w-4xl">
        {/* Question Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-bold text-gradient mb-6">
            Has anyone here ever heard of...
          </h1>
          <p className="text-xl text-muted-foreground">
            (By show of hands)
          </p>
        </motion.div>

        {/* Terms List */}
        <div className="space-y-6">
          {terms.map((term, index) => (
            <motion.div
              key={term.text}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              className="flex items-center justify-center gap-4 p-6 bg-card/80 backdrop-blur-sm border border-border rounded-lg hover:border-primary/40 transition-all duration-300"
            >
              <term.icon className="w-8 h-8 text-primary" />
              <span className="text-2xl font-medium text-foreground">
                {term.text}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 text-lg text-muted-foreground italic"
        >
          Let's rewind and make sure we're all on the same page.
        </motion.p>
      </div>
    </div>
  );
};

export default AudienceEngagementSlide;
