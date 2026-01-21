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
    "Closed-loop system:\nDefect → Cause → Action",
    "Adapts as production drifts—minimal retraining",
    "No disruption: Works with existing cameras"
  ];

  return (
    <div 
      className="w-full h-screen flex items-center justify-center bg-background relative overflow-hidden"
      style={{ padding: '2.5cm' }}
    >
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern" />

      {/* 16:9 Aspect Ratio Container */}
      <div 
        className="relative z-10 flex flex-col items-center justify-center w-full h-full"
        style={{ gap: '2vh' }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h1 
            className="font-bold text-foreground"
            style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', marginBottom: '0.5vh' }}
          >
            Close the Loop from Defect to Action
          </h1>
          <p 
            className="text-muted-foreground"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)' }}
          >
            Defect → Cause → Action, in One System
          </p>
        </motion.div>

        {/* Solution Flow */}
        <div className="w-full">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bold text-foreground text-center"
            style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2.5rem)', marginBottom: '1.5vh' }}
          >
            How Lumina Works
          </motion.h2>
          
          <div className="grid grid-cols-5 gap-3 w-full">
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
                  <Card 
                    className="bg-card/80 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 h-full flex flex-col items-center text-center"
                    style={{ padding: 'clamp(0.75rem, 1.5vw, 1.5rem)' }}
                  >
                    <div 
                      className={`rounded-xl bg-background/50 ${stage.color}`}
                      style={{ padding: 'clamp(0.5rem, 1vw, 1rem)', marginBottom: '0.75vh' }}
                    >
                      <Icon style={{ width: 'clamp(1.5rem, 3vw, 2.5rem)', height: 'clamp(1.5rem, 3vw, 2.5rem)' }} />
                    </div>
                    
                    <h3 
                      className="font-bold text-foreground"
                      style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.5rem)', marginBottom: '0.25vh' }}
                    >
                      {stage.title}
                    </h3>
                    
                    <p 
                      className="text-muted-foreground leading-relaxed"
                      style={{ fontSize: 'clamp(0.65rem, 1vw, 1rem)' }}
                    >
                      {stage.description}
                    </p>
                  </Card>

                  {/* Arrow between stages */}
                  {index < stages.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="absolute top-1/2 right-0 z-20"
                      style={{ 
                        transform: 'translate(calc(50% + 0.375rem), -50%)'
                      }}
                    >
                      <ArrowRight style={{ width: 'clamp(1rem, 1.5vw, 1.5rem)', height: 'clamp(1rem, 1.5vw, 1.5rem)' }} className="text-primary" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Competitive Edge */}
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 
              className="font-bold text-foreground text-center"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2.5rem)', marginBottom: '1.5vh' }}
            >
              Why Lumina Wins
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {luminaEdge.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1 + index * 0.15, duration: 0.5 }}
                >
                  <Card 
                    className="h-full bg-gradient-to-br from-primary/15 to-primary/5 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
                    style={{ padding: 'clamp(0.75rem, 1.5vw, 1.5rem)' }}
                  >
                    <div className="flex flex-col items-center text-center" style={{ gap: '0.75vh' }}>
                      <div 
                        className="rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300"
                        style={{ padding: 'clamp(0.5rem, 1vw, 1rem)' }}
                      >
                        <Check style={{ width: 'clamp(1.25rem, 2vw, 2rem)', height: 'clamp(1.25rem, 2vw, 2rem)' }} className="text-primary" />
                      </div>
                      <p 
                        className="text-foreground font-medium leading-relaxed whitespace-pre-line"
                        style={{ fontSize: 'clamp(0.75rem, 1.25vw, 1.25rem)' }}
                      >
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
