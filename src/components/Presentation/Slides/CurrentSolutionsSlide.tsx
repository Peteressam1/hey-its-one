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

      {/* 16:9 Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
          style={{ marginBottom: '2vh' }}
        >
          <h1 
            className="font-bold text-foreground"
            style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', marginBottom: '1vh' }}
          >
            Current Solutions? No Thanks!
          </h1>
          <p 
            className="text-muted-foreground mx-auto text-center whitespace-nowrap"
            style={{ fontSize: 'clamp(1rem, 2vw, 2rem)' }}
          >
            Existing solutions force you to choose between quality, speed, and cost.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-3 w-full" style={{ gap: 'clamp(0.75rem, 1.5vw, 2rem)' }}>
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
                <Card className={`h-full relative overflow-hidden border border-border/40 bg-card/60 backdrop-blur-xl transition-all duration-500 group ${solution.borderColor}`}>
                  
                  {/* Top Gradient Bar */}
                  <div className={`absolute top-0 left-0 w-full h-1 ${solution.iconBg.replace('bg-', 'bg-gradient-to-r from-transparent via-').replace('/10', '')} to-transparent opacity-50`} />

                  <div 
                    className="flex flex-col h-full"
                    style={{ padding: 'clamp(1.25rem, 2.5vw, 2.5rem)' }}
                  >
                    
                    {/* Icon Header */}
                    <div 
                      className="flex flex-col items-center text-center"
                      style={{ marginBottom: 'clamp(0.75rem, 2vh, 2rem)' }}
                    >
                      <div 
                        className={`rounded-2xl ${solution.iconBg} ring-1 ring-inset ring-white/10 group-hover:scale-110 transition-transform duration-500`}
                        style={{ padding: 'clamp(0.75rem, 1.5vw, 1.5rem)', marginBottom: 'clamp(0.75rem, 1.5vh, 1.5rem)' }}
                      >
                        <Icon style={{ width: 'clamp(2rem, 4vw, 4rem)', height: 'clamp(2rem, 4vw, 4rem)' }} className={solution.iconColor} />
                      </div>
                      <h3 
                        className="font-bold text-foreground"
                        style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2.5rem)', marginBottom: '0.5vh' }}
                      >
                        {solution.title}
                      </h3>
                      <p 
                        className="text-muted-foreground uppercase tracking-wider font-medium"
                        style={{ fontSize: 'clamp(0.75rem, 1.25vw, 1.25rem)' }}
                      >
                        {solution.subtitle}
                      </p>
                    </div>

                    <Separator className="bg-border/50" style={{ marginBottom: 'clamp(0.75rem, 2vh, 2rem)' }} />

                    {/* Bullets */}
                    <ul className="flex-1" style={{ marginBottom: 'clamp(0.75rem, 1.5vh, 1.5rem)' }}>
                      {solution.bullets.map((bullet, i) => (
                        <li 
                          key={i} 
                          className="flex items-start group/item"
                          style={{ gap: 'clamp(0.4rem, 0.75vw, 0.75rem)', marginBottom: 'clamp(0.5rem, 0.75vh, 0.75rem)' }}
                        >
                          <XCircle 
                            className={`${solution.iconColor} opacity-60 group-hover/item:opacity-100 transition-opacity mt-0.5 shrink-0`}
                            style={{ width: 'clamp(1.1rem, 1.75vw, 1.75rem)', height: 'clamp(1.1rem, 1.75vw, 1.75rem)' }}
                          />
                          <span 
                            className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors"
                            style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.4rem)' }}
                          >
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Verdict Footer */}
                    <div 
                      className="mt-auto border-t border-border/50 text-center"
                      style={{ paddingTop: 'clamp(0.75rem, 1.5vh, 1.5rem)' }}
                    >
                      <p 
                        className="text-muted-foreground uppercase tracking-widest"
                        style={{ fontSize: 'clamp(0.65rem, 1vw, 1rem)', marginBottom: '0.5vh' }}
                      >
                        Verdict
                      </p>
                      <p 
                        className={`font-bold ${solution.verdictColor}`}
                        style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2.5rem)' }}
                      >
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