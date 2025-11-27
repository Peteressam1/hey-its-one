import { motion } from "framer-motion";
import { Plug, Eye, Search, MessageSquare, Zap, Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

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

  const competitors = [
    {
      name: "Traditional Vision",
      weaknesses: ["Manual setup per product", "No root cause", "Static rules break"],
    },
    {
      name: "AI Vision Startups",
      weaknesses: ["Detection only", "No diagnosis", "Needs constant retraining"],
    },
    {
      name: "In-house Development",
      weaknesses: ["6–12 months to build", "€200K+ costs", "Maintenance burden"],
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
      <div className="relative z-10 w-full max-w-7xl space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Close the Loop from Defect to Action
          </h1>
          <p className="text-2xl text-muted-foreground">
            Defect → Cause → Action, in One System
          </p>
        </motion.div>

        {/* Solution Flow */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-bold text-foreground mb-6 text-center"
          >
            How Lumina Works
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
                  <Card className="p-4 bg-card/80 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 h-full flex flex-col items-center text-center space-y-3">
                    <div className={`p-3 rounded-xl bg-background/50 ${stage.color}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground">
                      {stage.title}
                    </h3>
                    
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {stage.description}
                    </p>
                  </Card>

                  {/* Arrow between stages */}
                  {index < stages.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="hidden md:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-20"
                    >
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Competitive Edge */}
        <div className="space-y-8">
          {/* Why Lumina Wins - Full Width Rectangle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Why Lumina Wins
            </h2>
            <Card className="p-8 bg-primary/10 backdrop-blur-sm border-2 border-primary/40">
              <div className="flex flex-wrap justify-center gap-8">
                {luminaEdge.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <Check className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg text-foreground font-medium">{advantage}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* What Others Can't Do - 3 Horizontal Blocks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              What Others Can't Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {competitors.map((comp, index) => (
                <Card key={comp.name} className="p-6 bg-card/60 backdrop-blur-sm border border-border/30 hover:border-destructive/40 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                    {comp.name}
                  </h3>
                  <div className="space-y-3">
                    {comp.weaknesses.map((weakness, wIndex) => (
                      <div key={wIndex} className="flex items-start space-x-2">
                        <X className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{weakness}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SolutionAndCompetitiveEdgeSlide;
