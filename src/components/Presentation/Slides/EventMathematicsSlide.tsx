import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import sensingComparison from "@/assets/event-camera/sensing-comparison.jpg";

const EventMathematicsSlide = () => {
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
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Badge variant="outline" className="text-sm px-4 py-2 bg-card/50 backdrop-blur-sm">
            MATHEMATICAL FOUNDATION
          </Badge>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent"
        >
          Mathematical Model
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl text-muted-foreground mb-12 max-w-4xl"
        >
          Event generation through logarithmic intensity change detection
        </motion.p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Event Equation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Event Generation Formula
              </h3>
              
              {/* LaTeX Equations */}
              <div className="space-y-6 bg-background/80 rounded-lg p-8 mb-6">
                <div className="text-foreground text-lg">
                  <BlockMath math="\Delta L(x,y,t) = \log I(x,y,t) - \log I(x,y,t_{\text{last}})" />
                  <div className="text-center my-3 text-muted-foreground">
                    and an event fires if
                  </div>
                  <BlockMath math="|\Delta L(x,y,t)| \ge C" />
                </div>
                
                <div className="border-t border-border/50 pt-6 text-foreground text-lg">
                  <BlockMath math="p = \operatorname{sign}(\Delta L) \in \{+1,-1\}" />
                  <div className="text-center my-3 text-muted-foreground">
                    emit
                  </div>
                  <BlockMath math="(x,y,t,p)" />
                </div>
              </div>

              {/* Explanation */}
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">ΔL:</span>
                  <span>Log intensity change</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">I(x,y,t):</span>
                  <span>Current pixel intensity</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">t_last:</span>
                  <span>Time of last event at pixel</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">±C:</span>
                  <span>Contrast threshold</span>
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Sensing Comparison Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Conventional vs Event-Based
              </h3>
              
              {/* Diagram */}
              <div className="rounded-lg overflow-hidden bg-background/80 p-4">
                <img
                  src={sensingComparison}
                  alt="Comparison between conventional and event-based sensing"
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              {/* Key Insight */}
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-foreground font-medium">
                  🎯 Events are triggered only when change occurs, eliminating redundant data
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventMathematicsSlide;
