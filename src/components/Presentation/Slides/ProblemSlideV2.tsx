import { motion } from "framer-motion";
import { AlertCircle, Clock, Users, RefreshCw } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProblemSlideV2 = () => {
  const painPoints = [
    {
      icon: AlertCircle,
      title: "Defects Cost Big",
      description: "Scrap, rework, delays, and customer complaints drain resources",
      color: "text-destructive",
      borderColor: "border-destructive/30"
    },
    {
      icon: Clock,
      title: "Root Cause is Slow",
      description: "Manual diagnosis takes hours or days, delaying fixes",
      color: "text-warning",
      borderColor: "border-warning/30"
    },
    {
      icon: Users,
      title: "Quality Teams Overloaded",
      description: "Too many alerts, can't keep up with the volume",
      color: "text-accent",
      borderColor: "border-accent/30"
    },
    {
      icon: RefreshCw,
      title: "Issues Repeat",
      description: "No systematic learning means the same defects keep happening",
      color: "text-destructive",
      borderColor: "border-destructive/30"
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
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            The Problem
          </h1>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <Card className={`p-8 bg-card/80 backdrop-blur-sm border-2 ${point.borderColor} hover:border-primary/50 transition-all duration-300 h-full`}>
                  <div className="flex flex-col items-start space-y-4">
                    <div className={`p-4 rounded-xl bg-background/50 ${point.color}`}>
                      <Icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {point.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProblemSlideV2;
