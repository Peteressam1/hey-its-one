import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Minus } from "lucide-react";

const CompetitivePositioningSlide = () => {
  const competitors = [
    {
      name: "Traditional Machine Vision",
      examples: "Keyence, Cognex, Basler",
      strengths: ["Stable processes", "High accuracy for fixed defects"],
      weaknesses: ["Long setup time", "Struggles with variability", "Expensive tuning per change"],
      positioning: "Legacy"
    },
    {
      name: "AI Vision Startups",
      examples: "Landing AI, Tractable",
      strengths: ["ML-based detection", "Some automation"],
      weaknesses: ["No root cause analysis", "No closed-loop action", "Detection only"],
      positioning: "Partial"
    },
    {
      name: "In-House Development",
      examples: "Factory AI Teams",
      strengths: ["Custom to needs", "Full control"],
      weaknesses: ["Expensive talent", "Constant maintenance", "Distracts from core business"],
      positioning: "Resource Drain"
    }
  ];

  const luminaAdvantages = [
    "Defect detection + root cause + automated action",
    "Works on legacy lines with existing cameras",
    "Adapts to production drift with minimal retraining",
    "Operator-owned no-code workflows",
    "Explainable AI copilot for diagnosis",
    "Fast deployment on changing production lines"
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
      <div className="relative z-10 w-full max-w-7xl space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Why We Win
          </h1>
          <p className="text-xl text-muted-foreground">
            Closed-loop quality in one system
          </p>
        </motion.div>

        {/* Competitive Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {competitors.map((competitor, index) => (
            <Card
              key={competitor.name}
              className="p-6 bg-card/60 backdrop-blur-sm border border-border/50 hover:border-destructive/30 transition-all duration-300"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Badge variant="destructive" className="mb-2">
                    {competitor.positioning}
                  </Badge>
                  <h3 className="text-xl font-bold text-foreground">
                    {competitor.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {competitor.examples}
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2">
                      Strengths:
                    </p>
                    {competitor.strengths.map((strength, i) => (
                      <div key={i} className="flex items-start space-x-2 mb-1">
                        <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {strength}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2">
                      Weaknesses:
                    </p>
                    {competitor.weaknesses.map((weakness, i) => (
                      <div key={i} className="flex items-start space-x-2 mb-1">
                        <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {weakness}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Card>
          ))}
        </motion.div>

        {/* Lumina's Unique Position */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="p-8 bg-gradient-to-br from-primary/20 via-card/90 to-accent/20 backdrop-blur-sm border-2 border-primary/50">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <Badge className="bg-primary text-primary-foreground text-base px-4 py-1.5">
                  Our Position: Full-Stack Closed Loop
                </Badge>
                <h2 className="text-3xl font-bold text-foreground">
                  Lumina: The Only Complete System
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {luminaAdvantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                    className="flex items-start space-x-3 p-4 bg-background/50 rounded-lg"
                  >
                    <div className="p-1 rounded-full bg-primary/20 mt-0.5">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-base text-foreground font-medium">
                      {advantage}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default CompetitivePositioningSlide;
