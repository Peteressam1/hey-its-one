import { motion } from "framer-motion";
import { User, Camera, Code, XCircle, AlertTriangle, Ban, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const CurrentSolutionsSlide = () => {
  const solutions = [
    {
      icon: User,
      title: "Manual Inspection",
      subtitle: "Human Operators",
      bullets: [
        "Slow & inconsistent performance",
        "Hard to scale across shifts",
        "Dependent on expert availability"
      ],
      verdict: "High Cost",
      verdictColor: "text-destructive",
      borderColor: "hover:border-destructive/50",
      iconBg: "bg-destructive/10",
      iconColor: "text-destructive"
    },
    {
      icon: Camera,
      title: "Traditional Vision",
      subtitle: "Keyence, Cognex",
      bullets: [
        "Only works for stable processes",
        "Struggles with variability & light",
        "Long tuning cycles per change"
      ],
      verdict: "Inflexible",
      verdictColor: "text-warning",
      borderColor: "hover:border-warning/50",
      iconBg: "bg-warning/10",
      iconColor: "text-warning"
    },
    {
      icon: Code,
      title: "In-House AI",
      subtitle: "Custom Development",
      bullets: [
        "Expensive, scarce AI talent",
        "Constant model maintenance",
        "Distracts from core business"
      ],
      verdict: "Resource Drain",
      verdictColor: "text-orange-500",
      borderColor: "hover:border-orange-500/50",
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-500"
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
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
            Current Solutions? No Thanks!
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mx-auto text-center whitespace-nowrap">
            Existing solutions force you to choose between quality, speed, and cost.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
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
                className="h-full"
              >
                <Card className={`h-full relative overflow-hidden border border-border/40 bg-card/60 backdrop-blur-xl transition-all duration-500 group ${solution.borderColor} hover:shadow-2xl hover:-translate-y-2`}>
                  
                  {/* Top Gradient Bar */}
                  <div className={`absolute top-0 left-0 w-full h-1 ${solution.iconBg.replace('bg-', 'bg-gradient-to-r from-transparent via-').replace('/10', '')} to-transparent opacity-50`} />

                  <div className="p-10 flex flex-col h-full">
                    
                    {/* Icon Header */}
                    <div className="flex flex-col items-center text-center mb-10">
                      <div className={`p-5 rounded-2xl ${solution.iconBg} mb-8 ring-1 ring-inset ring-white/10 group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className={`w-12 h-12 ${solution.iconColor}`} />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-3">
                        {solution.title}
                      </h3>
                      <p className="text-base text-muted-foreground uppercase tracking-wider font-medium">
                        {solution.subtitle}
                      </p>
                    </div>

                    <Separator className="mb-10 bg-border/50" />

                    {/* Bullets */}
                    <ul className="space-y-5 flex-1 mb-10">
                      {solution.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-4 group/item">
                          <XCircle className={`w-6 h-6 ${solution.iconColor} opacity-60 group-hover/item:opacity-100 transition-opacity mt-0.5 shrink-0`} />
                          <span className="text-lg text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Verdict Footer */}
                    <div className={`mt-auto pt-8 border-t border-border/50 text-center`}>
                      <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">Verdict</p>
                      <p className={`text-3xl font-bold ${solution.verdictColor}`}>
                        {solution.verdict}
                      </p>
                    </div>
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