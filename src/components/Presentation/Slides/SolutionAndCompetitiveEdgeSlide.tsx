import { motion } from "framer-motion";
import { Plug, Eye, Search, MessageSquare, Zap, Check, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const SolutionAndCompetitiveEdgeSlide = () => {
  const stages = [
    {
      icon: Plug,
      title: "Connect",
      description: "Uses existing cameras + line data",
      color: "text-primary"
    },
    {
      icon: Eye,
      title: "Detect",
      description: "Spots defects in real-time",
      color: "text-accent"
    },
    {
      icon: Search,
      title: "Diagnose",
      description: "Links to machine signals & recipes",
      color: "text-warning"
    },
    {
      icon: MessageSquare,
      title: "Explain",
      description: "AI shows likely cause with evidence",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Act",
      description: "Auto-workflows: reroute, alert, adjust",
      color: "text-accent"
    }
  ];

  const luminaEdge = [
    "Closed-loop system: Defect → Cause → Action",
    "Adapts as production drifts—minimal retraining",
    "No disruption: Works with existing cameras"
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
      <div className="relative z-10 w-full max-w-7xl space-y-16 flex flex-col h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6">
            Close the Loop from Defect to Action
          </h1>
          <p className="text-3xl md:text-4xl text-muted-foreground">
            Defect → Cause → Action, in One System
          </p>
        </motion.div>

        {/* Solution Flow */}
        <div className="flex-1 flex flex-col">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-foreground mb-10 text-center"
          >
            How Lumina Works
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 flex-1">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.3 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="relative"
                >
                  <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 h-full flex flex-col items-center text-center space-y-5">
                    <div className={`p-5 rounded-xl bg-background/50 ${stage.color}`}>
                      <Icon className="w-12 h-12" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground">
                      {stage.title}
                    </h3>
                    
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {stage.description}
                    </p>
                  </Card>

                  {/* Arrow between stages */}
                  {index < stages.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20"
                    >
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Competitive Edge */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
              Why Lumina Wins
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {luminaEdge.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1 + index * 0.15, duration: 0.5 }}
                >
                  <Card className="p-8 h-full bg-gradient-to-br from-primary/15 to-primary/5 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-4 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300">
                        <Check className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-xl text-foreground font-medium leading-relaxed">
                        {advantage}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SolutionAndCompetitiveEdgeSlide;
