import { motion } from "framer-motion";
import { AlertTriangle, Clock, TrendingDown, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";
const ProblemSlideV2 = () => {
  return <div className="w-full min-h-screen flex flex-col justify-center items-center px-8 py-12 bg-background relative overflow-hidden">
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
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }} className="text-center mb-20">
          <h1 className="text-7xl md:text-8xl font-bold text-foreground mb-8 tracking-tight text-center">Quality Losses Drain       €1.2 Trillion<span className="text-destructive text-center">€1.2 Trillion</span>
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto text-center">Global manufacturing loses 15-20% of revenue to defects and waste every year.</p>
        </motion.div>

        {/* Pain Points Grid - Redesigned */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          
          {/* Card 1: Cost of Quality */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            <Card className="relative h-full overflow-hidden border-0 bg-gradient-to-b from-destructive/10 to-background ring-1 ring-destructive/20 hover:ring-destructive/50 transition-all duration-500 group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <TrendingDown className="w-40 h-40 text-destructive" />
              </div>
              
              <div className="p-12 flex flex-col h-full relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-destructive/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <AlertTriangle className="w-9 h-9 text-destructive" />
                </div>
                
                <h3 className="text-4xl font-bold text-foreground mb-6">
                  Recurring Defects Bleed Profit
                </h3>
                
                <p className="text-xl text-muted-foreground leading-relaxed mb-10 flex-grow">
                  Factories don't just lose material—they lose capacity. Defects repeat weekly because systems detect failures but never explain the <span className="text-foreground font-semibold">root cause</span>.
                </p>

                <div className="pt-8 border-t border-destructive/20">
                  <div className="flex items-baseline gap-4">
                    <span className="text-5xl font-bold text-destructive">€3M+</span>
                    <span className="text-xl text-muted-foreground">lost per facility / year</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 2: Inefficiency of RCA */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }}>
            <Card className="relative h-full overflow-hidden border-0 bg-gradient-to-b from-warning/10 to-background ring-1 ring-warning/20 hover:ring-warning/50 transition-all duration-500 group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Activity className="w-40 h-40 text-warning" />
              </div>
              
              <div className="p-12 flex flex-col h-full relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-warning/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-9 h-9 text-warning" />
                </div>
                
                <h3 className="text-4xl font-bold text-foreground mb-6">
                  Engineers Are Overwhelmed
                </h3>
                
                <p className="text-xl text-muted-foreground leading-relaxed mb-10 flex-grow">
                  Root cause analysis is manual and slow. Operators are flooded with false alarms, leaving them reactive instead of proactive.
                </p>

                <div className="pt-8 border-t border-warning/20">
                  <div className="flex items-baseline gap-4">
                    <span className="text-5xl font-bold text-warning">2-5 Days</span>
                    <span className="text-xl text-muted-foreground">to diagnose one issue</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </div>;
};
export default ProblemSlideV2;