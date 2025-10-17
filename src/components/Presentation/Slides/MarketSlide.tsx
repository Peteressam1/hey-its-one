import { Card } from "@/components/ui/card";
import { TrendingUp, Target, Factory } from "lucide-react";
import { MarketAreaChart } from "@/components/Charts/MarketAreaChart";
import { motion } from "framer-motion";

const MarketSlide = () => {
  return (
    <div className="w-full min-h-screen flex flex-col px-8 py-12 bg-background relative">
      {/* Unified Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern" />

      {/* Header */}
      <div className="relative z-10 text-center space-y-4 mb-12 ml-24">
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-[-0.01em]">
          <span className="text-primary">$41.7B Market</span> by 2030
        </h1>
        <p className="text-xl text-muted max-w-4xl mx-auto">
          Machine Vision Market Growing at 8.1% CAGR
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 grid grid-cols-2 gap-8 max-w-7xl mx-auto w-full flex-1">
        {/* Left Column - Market Chart */}
        <div className="flex flex-col space-y-6">
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border flex-1">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Global Machine Vision Market</h3>
            <div className="h-[400px]">
              <MarketAreaChart />
            </div>
          </Card>
        </div>

        {/* Right Column - Key Metrics */}
        <div className="flex flex-col space-y-6">
          {/* Our Target */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card className="p-8 bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border-primary/40 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-primary" />
                <h4 className="text-2xl font-bold text-white">Our Target</h4>
              </div>
              <div className="text-5xl font-bold text-primary mb-2">$200M</div>
              <p className="text-lg text-muted">0.5% market share by 2030</p>
            </Card>
          </motion.div>

          {/* SAM Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-border hover:border-primary/40 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
                <h4 className="text-2xl font-bold text-white">SAM (24 months)</h4>
              </div>
              <div className="text-4xl font-bold text-accent mb-3">€240-480M</div>
              <div className="space-y-2 text-muted">
                <p className="text-sm">~4,000 plants in DACH + GCC</p>
                <p className="text-sm">High-speed QA/Inspection lines</p>
                <p className="text-sm">€30-60k ARR per line</p>
              </div>
            </Card>
          </motion.div>

          {/* Target Markets */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-border hover:border-primary/40 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Factory className="w-8 h-8 text-warning" />
                <h4 className="text-2xl font-bold text-white">Target Factory Base</h4>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">~190K</div>
                  <p className="text-sm text-muted">DACH factories</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">19K → 30K+</div>
                  <p className="text-sm text-muted">GCC by 2030</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Bottom Banner - Key Insight */}
      <motion.div 
        className="relative z-10 mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Card className="p-6 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border-primary/30">
          <div className="text-center">
            <h4 className="text-xl font-bold mb-3 text-white">🎯 Focus: Pharma, F&B, Wire & Cable Manufacturing</h4>
            <p className="text-muted max-w-4xl mx-auto">
              First-mover advantage in DACH + GCC regions where CapEx budgets and automation adoption are highest
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default MarketSlide;