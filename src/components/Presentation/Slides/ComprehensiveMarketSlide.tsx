import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Euro, Calendar, Shield, ArrowRight, Target } from "lucide-react";

const ComprehensiveMarketSlide = () => {
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
      <div className="relative z-10 w-full max-w-7xl space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            Market Opportunity
          </h1>
        </motion.div>

        {/* Section A: Two Market Sizes Side by Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Machine Vision Market */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm border border-primary/30">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-muted-foreground">Machine Vision Market</h3>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-primary">$21B → $41.7B</div>
                <div className="text-lg text-muted-foreground">by 2030</div>
              </div>
              <div className="text-2xl font-bold text-accent">13% CAGR</div>
            </div>
          </Card>

          {/* AI in Manufacturing Market */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm border border-primary/30">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-muted-foreground">AI in Manufacturing</h3>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-primary">$6B → $48B</div>
                <div className="text-lg text-muted-foreground">by 2030</div>
              </div>
              <div className="text-2xl font-bold text-accent">46% CAGR</div>
            </div>
          </Card>
        </motion.div>

        {/* Section B: TAM/SAM/SOM Single Clean Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* TAM */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm border border-border">
            <div className="text-center space-y-3">
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">TAM</div>
              <div className="text-5xl font-bold text-foreground">250K</div>
              <div className="text-base text-muted-foreground">Europe Manufacturing Factories</div>
            </div>
          </Card>

          {/* SAM */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm border border-accent/40">
            <div className="text-center space-y-3">
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">SAM</div>
              <div className="text-5xl font-bold text-accent">20K</div>
              <div className="text-base text-muted-foreground">Electronics + Automotive Electronics</div>
            </div>
          </Card>

          {/* SOM */}
          <Card className="p-8 bg-primary/10 backdrop-blur-sm border border-primary/40">
            <div className="text-center space-y-3">
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">SOM (3-Year Target)</div>
              <div className="text-5xl font-bold text-primary">100</div>
              <div className="text-base text-muted-foreground">factories → €7.2M ARR</div>
              <div className="text-sm text-muted-foreground">(0.5% penetration)</div>
            </div>
          </Card>
        </motion.div>

        {/* Section C: Expansion Strategy - Simple Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="p-8 bg-card/80 backdrop-blur-sm border border-accent/30">
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Primary Focus</h3>
                <p className="text-2xl font-bold text-primary">Automotive & Medical Electronics (DACH)</p>
              </div>
              
              <div className="flex items-center justify-center space-x-3 text-lg text-muted-foreground">
                <span className="font-semibold text-foreground">Expansion Path:</span>
                <span>Automotive Electronics</span>
                <ArrowRight className="w-5 h-5 text-accent" />
                <span>Medical</span>
                <ArrowRight className="w-5 h-5 text-accent" />
                <span>Industrial</span>
                <ArrowRight className="w-5 h-5 text-accent" />
                <span>F&B</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveMarketSlide;
