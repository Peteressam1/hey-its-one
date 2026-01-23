import { motion } from "framer-motion";
import { AlertTriangle, Clock, TrendingDown, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProblemSlideV2 = () => {
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
        style={{ gap: '3vh' }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h1 
            className="font-bold text-foreground tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: '0.5vh' }}
          >
            Quality Losses Drain
          </h1>
          <h2 
            className="font-bold text-destructive tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: '1vh' }}
          >
            €1.2 Trillion
          </h2>
          <p 
            className="text-muted-foreground text-center whitespace-nowrap"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.75rem)' }}
          >
            Global manufacturing loses 15-20% of revenue to defects and waste every year.
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-2 w-full" style={{ gap: 'clamp(1rem, 2vw, 2.5rem)' }}>
          {/* Card 1: Cost of Quality */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="relative h-full overflow-hidden border-0 bg-gradient-to-b from-destructive/10 to-background ring-1 ring-destructive/20 hover:ring-destructive/50 transition-all duration-500 group">
              <div className="absolute top-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity" style={{ padding: 'clamp(0.75rem, 1.5vw, 1.5rem)' }}>
                <TrendingDown style={{ width: 'clamp(5rem, 10vw, 10rem)', height: 'clamp(5rem, 10vw, 10rem)' }} className="text-destructive" />
              </div>

              <div className="flex flex-col h-full relative z-10" style={{ padding: 'clamp(1.5rem, 3vw, 3rem)' }}>
                <div 
                  className="rounded-2xl bg-destructive/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ width: 'clamp(2.5rem, 4vw, 4rem)', height: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1.5vh' }}
                >
                  <AlertTriangle style={{ width: 'clamp(1.25rem, 2vw, 2.25rem)', height: 'clamp(1.25rem, 2vw, 2.25rem)' }} className="text-destructive" />
                </div>

                <h3 
                  className="font-bold text-foreground"
                  style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2.5rem)', marginBottom: '1vh' }}
                >
                  Recurring Defects Bleed Profit
                </h3>

                <p 
                  className="text-muted-foreground leading-relaxed flex-grow"
                  style={{ fontSize: 'clamp(0.85rem, 1.25vw, 1.25rem)', marginBottom: '2vh' }}
                >
                  Factories don't just lose material—they lose capacity. Defects repeat weekly because systems detect failures but never explain the{" "}
                  <span className="text-foreground font-semibold">root cause</span>.
                </p>

                <div className="border-t border-destructive/20" style={{ paddingTop: '1.5vh' }}>
                  <div className="flex items-baseline" style={{ gap: 'clamp(0.5rem, 1vw, 1rem)' }}>
                    <span 
                      className="font-bold text-destructive"
                      style={{ fontSize: 'clamp(1.5rem, 3vw, 3rem)' }}
                    >
                      €3M+
                    </span>
                    <span 
                      className="text-muted-foreground"
                      style={{ fontSize: 'clamp(0.75rem, 1.25vw, 1.25rem)' }}
                    >
                      lost per facility / year
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 2: Inefficiency of RCA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="relative h-full overflow-hidden border-0 bg-gradient-to-b from-warning/10 to-background ring-1 ring-warning/20 hover:ring-warning/50 transition-all duration-500 group">
              <div className="absolute top-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity" style={{ padding: 'clamp(0.75rem, 1.5vw, 1.5rem)' }}>
                <Activity style={{ width: 'clamp(5rem, 10vw, 10rem)', height: 'clamp(5rem, 10vw, 10rem)' }} className="text-warning" />
              </div>

              <div className="flex flex-col h-full relative z-10" style={{ padding: 'clamp(1.5rem, 3vw, 3rem)' }}>
                <div 
                  className="rounded-2xl bg-warning/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ width: 'clamp(2.5rem, 4vw, 4rem)', height: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1.5vh' }}
                >
                  <Clock style={{ width: 'clamp(1.25rem, 2vw, 2.25rem)', height: 'clamp(1.25rem, 2vw, 2.25rem)' }} className="text-warning" />
                </div>

                <h3 
                  className="font-bold text-foreground"
                  style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2.5rem)', marginBottom: '1vh' }}
                >
                  Engineers Are Overwhelmed
                </h3>

                <p 
                  className="text-muted-foreground leading-relaxed flex-grow"
                  style={{ fontSize: 'clamp(0.85rem, 1.25vw, 1.25rem)', marginBottom: '2vh' }}
                >
                  Root cause analysis is manual and slow. Operators are flooded with false alarms, leaving them reactive instead of proactive.
                </p>

                <div className="border-t border-warning/20" style={{ paddingTop: '1.5vh' }}>
                  <div className="flex items-baseline" style={{ gap: 'clamp(0.5rem, 1vw, 1rem)' }}>
                    <span 
                      className="font-bold text-warning"
                      style={{ fontSize: 'clamp(1.5rem, 3vw, 3rem)' }}
                    >
                      2-5 Days
                    </span>
                    <span 
                      className="text-muted-foreground"
                      style={{ fontSize: 'clamp(0.75rem, 1.25vw, 1.25rem)' }}
                    >
                      to diagnose one issue
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSlideV2;
