import { motion } from "framer-motion";
import { UserSearch, Camera, Code } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CurrentSolutionsSlide = () => {
  const solutions = [
    {
      icon: UserSearch,
      title: "Manual Inspection",
      bullets: [
        "Slow and inconsistent",
        "Hard to scale",
        "Depends on expert availability"
      ],
      badge: "High Cost",
      badgeColor: "destructive"
    },
    {
      icon: Camera,
      title: "Traditional Machine Vision",
      subtitle: "(Keyence, Cognex)",
      bullets: [
        "Works for stable processes",
        "Struggles with variability",
        "Long tuning cycles per change"
      ],
      badge: "Inflexible",
      badgeColor: "warning"
    },
    {
      icon: Code,
      title: "Build In-House AI",
      bullets: [
        "Expensive talent",
        "Constant maintenance",
        "Distracts from core business"
      ],
      badge: "Resource Drain",
      badgeColor: "destructive"
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
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            Eliminate the Bottlenecks of Traditional Inspection
          </h1>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2 + index * 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <Card className="p-8 bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                  <div className="flex flex-col items-center space-y-6 flex-1">
                    <div className="p-5 rounded-2xl bg-primary/10">
                      <Icon className="w-14 h-14 text-primary" />
                    </div>
                    
                    <div className="text-center space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">
                        {solution.title}
                      </h3>
                      {solution.subtitle && (
                        <p className="text-sm text-muted-foreground">
                          {solution.subtitle}
                        </p>
                      )}
                    </div>

                    <ul className="space-y-3 flex-1 w-full">
                      {solution.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-muted-foreground mt-1.5">•</span>
                          <span className="text-base text-muted-foreground leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Badge 
                      variant={solution.badgeColor as any}
                      className="text-sm px-4 py-1.5"
                    >
                      {solution.badge}
                    </Badge>
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

export default CurrentSolutionsSlide;
