import { motion } from "framer-motion";
import { Plug, Eye, Search, MessageSquare, Zap, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const OurSolutionSlide = () => {
  const stages = [
    {
      icon: Plug,
      title: "Connect",
      description: "Uses existing cameras + line data",
      badge: "No disruption",
      color: "text-primary"
    },
    {
      icon: Eye,
      title: "Detect",
      description: "Spots defects visually in real-time",
      badge: "Adaptive AI",
      color: "text-accent"
    },
    {
      icon: Search,
      title: "Diagnose",
      description: "Links to machine signals & recipes",
      badge: "Root cause",
      color: "text-warning"
    },
    {
      icon: MessageSquare,
      title: "Explain",
      description: "AI copilot shows likely cause with evidence",
      badge: "Clear insights",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Automate",
      description: "No-code workflows: reroute, alert, adjust",
      badge: "Operator-owned",
      color: "text-accent"
    }
  ];

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
      <div className="relative z-10 w-full max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Lumina Closes the Loop
          </h1>
          <p className="text-2xl text-muted-foreground">
            Defect → Cause → Action, in One System
          </p>
        </motion.div>

        {/* Flow Diagram */}
        <div className="relative">
          {/* Stages */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.2 + index * 0.2,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="relative"
                >
                  <Card className="p-6 bg-card/80 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 h-full flex flex-col items-center text-center space-y-4">
                    <div className={`p-4 rounded-xl bg-background/50 ${stage.color}`}>
                      <Icon className="w-10 h-10" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground">
                      {stage.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {stage.description}
                    </p>
                    
                    <Badge className="text-xs px-3 py-1">
                      {stage.badge}
                    </Badge>
                  </Card>

                  {/* Arrow between stages */}
                  {index < stages.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.4 + index * 0.2,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-20"
                    >
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Adaptation Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="p-6 bg-accent/10 backdrop-blur-sm border border-accent/30 text-center">
              <div className="flex items-center justify-center space-x-3">
                <TrendingUp className="w-6 h-6 text-accent" />
                <p className="text-lg text-foreground font-medium">
                  Keeps adapting as production drifts — minimal retraining
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurSolutionSlide;
