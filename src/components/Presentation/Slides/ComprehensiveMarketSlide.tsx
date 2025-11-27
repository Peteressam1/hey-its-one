import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ArrowRight, Factory, Globe, Target } from "lucide-react";

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
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Market Opportunity
          </h1>
          <p className="text-xl text-muted-foreground">
            Bottom-Up Strategy in a €10 Trillion Global Industry
          </p>
        </motion.div>

        {/* Section A: Global Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 gap-8"
        >
          <Card className="p-8 bg-card/80 backdrop-blur-sm border border-primary/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Globe className="w-32 h-32" />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left space-y-2">
                <h3 className="text-2xl font-semibold text-muted-foreground">Global Manufacturing Output</h3>
                <div className="text-6xl font-bold text-foreground">€10 Trillion</div>
                <p className="text-lg text-accent">The macro-opportunity for industrial automation</p>
              </div>
              <div className="h-20 w-px bg-border/50 hidden md:block" />
              <div className="text-left space-y-2">
                <h3 className="text-xl font-semibold text-muted-foreground">Cost of Poor Quality (COPQ)</h3>
                <div className="text-5xl font-bold text-destructive">~€1.2 Trillion</div>
                <p className="text-base text-muted-foreground">Lost annually to defects & waste (10-15%)</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section B: Bottom-Up Funnel (TAM/SAM/SOM) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* TAM */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300">
            <div className="flex flex-col h-full justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm font-bold text-muted-foreground tracking-wider">TAM (Serviceable Regions)</span>
                </div>
                <div className="text-4xl font-bold text-foreground mb-1">250,000</div>
                <div className="text-sm text-muted-foreground">Factories in EU, US & MENA</div>
              </div>
              <div className="pt-4 border-t border-border/30">
                <div className="text-lg font-semibold text-foreground">€18 Billion</div>
                <div className="text-xs text-muted-foreground">Annual Revenue Potential</div>
              </div>
            </div>
          </Card>

          {/* SAM */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
             <div className="flex flex-col h-full justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Factory className="w-5 h-5 text-accent" />
                  <span className="text-sm font-bold text-accent tracking-wider">SAM (Target Sectors)</span>
                </div>
                <div className="text-4xl font-bold text-accent mb-1">20,000</div>
                <div className="text-sm text-muted-foreground">High-Value Electronics, Auto & Pharma Facilities</div>
              </div>
              <div className="pt-4 border-t border-accent/20">
                <div className="text-lg font-semibold text-accent">€1.44 Billion</div>
                <div className="text-xs text-muted-foreground">Based on Growth Plan (€72k/yr/site)</div>
              </div>
            </div>
          </Card>

          {/* SOM */}
          <Card className="p-6 bg-primary/10 backdrop-blur-sm border border-primary/50 hover:scale-105 transition-all duration-300 shadow-2xl shadow-primary/10">
             <div className="flex flex-col h-full justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold text-primary tracking-wider">SOM (Year 3 Goal)</span>
                </div>
                <div className="text-5xl font-bold text-primary mb-1">100</div>
                <div className="text-sm text-foreground font-medium">Strategic Factories Secured</div>
              </div>
              <div className="pt-4 border-t border-primary/20">
                <div className="text-2xl font-bold text-primary">€7.2 Million</div>
                <div className="text-xs text-muted-foreground">Projected ARR (0.5% Market Share)</div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section C: Expansion Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="p-6 bg-card/80 backdrop-blur-sm border border-border/50">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <span className="font-bold text-foreground whitespace-nowrap">Expansion Path:</span>
              
              <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                <span className="text-primary font-semibold">Electronics (PCB)</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </div>

              <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                <span className="text-foreground">Automotive Parts</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </div>

              <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                <span className="text-foreground">Pharma Packaging</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </div>

              <div className="text-sm md:text-base text-muted-foreground">
                <span>F&B / Industrial</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveMarketSlide;