import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ArrowRight, Factory, Globe, Target, DollarSign, Zap, Repeat, TrendingUp, Users } from "lucide-react";

const ComprehensiveMarketSlide = () => {
  const revenueStreams = [
    {
      icon: Zap,
      title: "Integration Fees",
      description: "Setup & Customization",
      price: "€15k - €50k / site",
      model: "One-time"
    },
    {
      icon: Repeat,
      title: "Recurring SaaS",
      description: "Software & Analytics",
      price: "€2.5k - €7.5k / mo",
      model: "Monthly Subscription"
    },
    {
      icon: Users,
      title: "Support Services",
      description: "Maintenance & SLAs",
      price: "15-20% of contract",
      model: "Annual"
    }
  ];

  const projections = [
    { year: "Year 1", amount: "€300K", value: 300000, label: "Validation", height: "h-20", color: "bg-primary/40" },
    { year: "Year 2", amount: "€3M", value: 3000000, label: "Expansion", height: "h-32", color: "bg-primary/70" },
    { year: "Year 3", amount: "€10M", value: 10000000, label: "Scale", height: "h-48", color: "bg-primary" }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col px-6 py-8 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col h-full space-y-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-2"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Scale into a Massive, Underserved Market
          </h1>
          <p className="text-lg text-muted-foreground">
            Bottom-Up Strategy: From <span className="text-primary font-bold">€10T Global Output</span> to <span className="text-accent font-bold">€10M ARR</span>
          </p>
        </motion.div>

        {/* Top Row: The Funnel (TAM -> SAM -> SOM) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* TAM */}
          <Card className="p-4 bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs font-bold text-muted-foreground tracking-wider">TAM (Serviceable Regions)</span>
                </div>
                <div className="text-3xl font-bold text-foreground">250,000</div>
                <div className="text-xs text-muted-foreground">Factories in EU, US & MENA</div>
              </div>
              <div className="text-right">
                 <div className="text-lg font-semibold text-foreground">€18 Billion</div>
                 <div className="text-[10px] text-muted-foreground">Annual Revenue Potential</div>
              </div>
            </div>
          </Card>

          {/* SAM */}
          <Card className="p-4 bg-card/80 backdrop-blur-sm border border-accent/40 hover:shadow-lg transition-all duration-300">
             <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Factory className="w-4 h-4 text-accent" />
                  <span className="text-xs font-bold text-accent tracking-wider">SAM (Target Sectors)</span>
                </div>
                <div className="text-3xl font-bold text-accent">20,000</div>
                <div className="text-xs text-muted-foreground">High-Value Electronics & Auto</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-accent">€1.44 Billion</div>
                <div className="text-[10px] text-muted-foreground">Based on Growth Plan</div>
              </div>
            </div>
          </Card>

          {/* SOM */}
          <Card className="p-4 bg-primary/10 backdrop-blur-sm border border-primary/50 hover:scale-105 transition-all duration-300 shadow-xl">
             <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold text-primary tracking-wider">SOM (Year 3 Goal)</span>
                </div>
                <div className="text-4xl font-bold text-primary">100</div>
                <div className="text-xs text-foreground font-medium">Strategic Factories Secured</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">€7.2 Million</div>
                <div className="text-[10px] text-muted-foreground">Projected ARR (0.5% Share)</div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Bottom Row: Business Model & Financials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
          
          {/* Business Model Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-lg font-bold flex items-center gap-2 text-foreground">
              <DollarSign className="w-5 h-5 text-primary" /> Business Model
            </h3>
            <div className="grid grid-cols-1 gap-3 flex-1">
              {revenueStreams.map((stream, index) => {
                const Icon = stream.icon;
                return (
                  <Card key={index} className="p-3 flex items-center gap-4 hover:shadow-md transition-all bg-card/60 border-border/50">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-sm text-foreground">{stream.title}</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                          {stream.model}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">{stream.description}</span>
                        <span className="font-bold text-foreground">{stream.price}</span>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </motion.div>

          {/* Financial Projections Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col h-full"
          >
            <h3 className="text-lg font-bold flex items-center gap-2 text-foreground mb-4">
              <TrendingUp className="w-5 h-5 text-accent" /> Financial Growth (Directed Spatial Analysis)
            </h3>
            <Card className="flex-1 bg-card/80 backdrop-blur-sm border-border/50 relative overflow-hidden flex items-end justify-around pb-8 pt-8">
               {/* Grid Lines */}
              <div className="absolute inset-0 w-full h-full pointer-events-none opacity-10" 
                   style={{ backgroundImage: 'linear-gradient(to bottom, #888 1px, transparent 1px)', backgroundSize: '100% 40px' }}>
              </div>

              {projections.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2, ease: "easeOut" }}
                  className="relative flex flex-col justify-end items-center group w-1/4 h-full"
                >
                   {/* 3D Bar Effect */}
                   <div className={`w-full ${item.height} min-h-[60px] rounded-t-lg relative transition-all duration-300 group-hover:opacity-90 shadow-2xl mt-auto`}>
                    <div className={`absolute inset-0 ${item.color} rounded-t-lg opacity-80`} />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 to-transparent rounded-t-lg" />
                    <div className="absolute top-0 right-0 w-2 h-full bg-black/20" /> {/* Side shadow */}
                    
                    {/* Floating Label */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-center w-32">
                      <div className="text-xl font-bold text-foreground">{item.amount}</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{item.label}</div>
                    </div>
                  </div>
                  
                  {/* X-Axis Label */}
                  <div className="absolute -bottom-6 text-xs font-bold text-muted-foreground">
                    {item.year}
                  </div>
                </motion.div>
              ))}
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveMarketSlide;
