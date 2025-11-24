import { motion } from "framer-motion";
import { AlertCircle, Clock, Users, RefreshCw } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProblemSlideV2 = () => {
  const painPoints = [
    {
      icon: AlertCircle,
      title: "Missed Defects Cost Billions",
      description: "Factories lose €300K–€3M per site per year from scrap, rework, downtime, and customer returns",
      stat: "COPQ = 15–20% of revenue",
      source: "ASQ, Modus Advanced, Katana Manufacturing",
      color: "text-destructive",
      borderColor: "border-destructive/30"
    },
    {
      icon: Clock,
      title: "Root Cause Takes Too Long",
      description: "Finding why a defect happens takes 2–5 days of manual investigations—data gathering, cross-team coordination, trial-and-error",
      stat: "Delays fixes, multiplies losses exponentially",
      source: "IEEE & Lean Six Sigma studies",
      color: "text-warning",
      borderColor: "border-warning/30"
    },
    {
      icon: Users,
      title: "Teams Overwhelmed by Alerts",
      description: "Factories receive hundreds of alerts daily, but 52–83% are false positives",
      stat: "Operators get desensitized, miss real defects, stay reactive",
      source: "Atlassian, Strangebee 2023, Intelgic AI",
      color: "text-accent",
      borderColor: "border-accent/30"
    },
    {
      icon: RefreshCw,
      title: "Same Issues Keep Coming Back",
      description: "Most systems detect BUT don't diagnose. They can't tell which station caused it, which sensor drifted, or which setting shifted",
      stat: "So failures repeat every week, causing chronic losses",
      source: "Reddit r/manufacturing + IEEE RCA studies",
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
            Quality Losses Quietly Drain Millions
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
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-border/30 w-full space-y-2">
                      <p className="text-lg font-semibold text-primary">
                        {point.stat}
                      </p>
                      <p className="text-xs text-muted-foreground/60 italic">
                        {point.source}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-12"
        >
          <p className="text-xl text-muted-foreground italic">
            Factories don't struggle to <span className="text-foreground font-semibold">see</span> defects—they struggle to understand <span className="text-primary font-semibold">why</span> they happen.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProblemSlideV2;
