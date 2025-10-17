import { motion } from "framer-motion";
import { Brain, Eye, Zap } from "lucide-react";
const AudienceEngagementSlide = () => {
  const terms = [{
    icon: Eye,
    text: "Event Based Cameras?"
  }, {
    icon: Brain,
    text: "Neuromorphic Vision?"
  }, {
    icon: Zap,
    text: "Dynamic Vision Sensors?"
  }];
  return <div className="w-full min-h-screen flex flex-col justify-center items-center px-8 py-12 bg-background relative">
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
        <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="mb-16">
          
          <p className="text-xl text-muted-foreground">
        </p>
        </motion.div>

        {/* Terms List */}
        <div className="space-y-6">
          {terms.map((term, index) => <motion.div key={term.text} initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.3 + index * 0.2,
          duration: 0.6
        }} className="flex items-center justify-center gap-4">
              <term.icon className="w-8 h-8 text-primary" />
              <span className="text-2xl font-medium text-foreground">
                {term.text}
              </span>
            </motion.div>)}
        </div>

        {/* Footer */}
        
      </div>
    </div>;
};
export default AudienceEngagementSlide;