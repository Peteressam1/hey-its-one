import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ArrowRight, Factory, Globe, Target, DollarSign, Zap, Repeat, TrendingUp, Users } from "lucide-react";

const ComprehensiveMarketSlide = () => {
  const revenueStreams = [
    {
      icon: Zap,
      title: "Integration Fees",
      description: "Setup & Customization",
      model: "One-time"
    },
    {
      icon: Repeat,
      title: "Recurring SaaS",
      description: "Software & Analytics",
      model: "Monthly Subscription"
    },
    {
      icon: Users,
      title: "Support Services",
      description: "Maintenance & SLAs",
      model: "Annual"
    }
  ];

  const projections = [
    { year: "By Year 1", amount: "~€300K", label: "Validation", heightPercent: 15, color: "bg-accent", gradient: "from-accent/80 to-accent" },
    { year: "By Year 2", amount: "~€3M", label: "Expansion", heightPercent: 45, color: "bg-warning", gradient: "from-warning/80 to-warning" },
    { year: "By Year 3", amount: "~€10M", label: "Scale", heightPercent: 90, color: "bg-primary", gradient: "from-primary/80 to-primary" }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col px-8 py-10 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col flex-1 space-y-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Capitalize on a $90B Combined Market Opportunity
          </h1>
          <div className="flex flex-wrap justify-center gap-3 mb-3">
            <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-sm font-medium text-foreground">
              Machine Vision: $21B → $41B by 2030 | 13% CAGR
            </span>
            <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-sm font-medium text-foreground">
              AI in Manufacturing: $6B → $48B | 46% CAGR
            </span>
          </div>
          <p className="text-lg text-muted-foreground">
            <span className="text-primary font-semibold">Vertical:</span> Electronics → F&B → Automotive | <span className="text-accent font-semibold">Horizontal:</span> EU → MENA → US
          </p>
        </motion.div>

        {/* Top Row: The Funnel (TAM -> SAM -> SOM) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* TAM */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-7 h-7 text-muted-foreground" />
                  <span className="text-base font-bold text-muted-foreground tracking-wider">TAM</span>
                </div>
                <div className="text-5xl font-bold text-foreground">200,000</div>
                <div className="text-base text-muted-foreground mt-1">Factories in EU + DACH</div>
              </div>
              <div className="text-right">
                 <div className="text-2xl font-semibold text-foreground">~€18B</div>
                 <div className="text-sm text-muted-foreground">Revenue Potential</div>
              </div>
            </div>
          </Card>

          {/* SAM */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border border-accent/40 hover:shadow-lg transition-all duration-300">
             <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Factory className="w-7 h-7 text-accent" />
                  <span className="text-base font-bold text-accent tracking-wider">SAM</span>
                </div>
                <div className="text-5xl font-bold text-accent">~20,000</div>
                <div className="text-base text-muted-foreground mt-1">Electronics & Automotive</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-semibold text-accent">~€1.44B</div>
                <div className="text-sm text-muted-foreground">Addressable Revenue</div>
              </div>
            </div>
          </Card>

          {/* SOM */}
          <Card className="p-6 bg-primary/10 backdrop-blur-sm border border-primary/50 hover:scale-105 transition-all duration-300 shadow-xl">
             <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-7 h-7 text-primary" />
                  <span className="text-base font-bold text-primary tracking-wider">SOM (By Year 3)</span>
                </div>
                <div className="text-6xl font-bold text-primary">100</div>
                <div className="text-base text-foreground font-medium mt-1">Factories Secured</div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">~€10M</div>
                <div className="text-sm text-muted-foreground">ARR Target</div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Bottom Row: Business Model & Financials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
          
          {/* Business Model Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col h-full"
          >
            <h3 className="text-2xl font-bold flex items-center gap-2 text-foreground mb-5">
              <DollarSign className="w-7 h-7 text-primary" /> Business Model
            </h3>
            <div className="flex flex-col gap-4 flex-1">
              {revenueStreams.map((stream, index) => {
                const Icon = stream.icon;
                return (
                  <Card key={index} className="p-6 flex items-center gap-6 hover:shadow-md transition-all bg-card/60 border-border/50 flex-1">
                    <div className="p-5 rounded-xl bg-primary/10 border border-primary/20">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-xl text-foreground">{stream.title}</span>
                        <span className="text-sm font-bold px-4 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                          {stream.model}
                        </span>
                      </div>
                      <div className="text-base">
                        <span className="text-muted-foreground">{stream.description}</span>
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
            <h3 className="text-2xl font-bold flex items-center gap-2 text-foreground mb-5">
              <TrendingUp className="w-7 h-7 text-accent" /> ARR Projections
            </h3>
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 relative overflow-hidden p-8 flex-1 min-h-[300px]">
              {/* Grid Lines */}
              <div className="absolute inset-0 w-full h-full pointer-events-none opacity-5" 
                   style={{ backgroundImage: 'linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '100% 50px' }}>
              </div>

              <div className="flex items-end justify-around h-full pb-12 pt-8">
                {projections.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.2, ease: "easeOut" }}
                    className="relative flex flex-col justify-end items-center group"
                    style={{ height: '100%', width: '28%', transformOrigin: 'bottom' }}
                  >
                    {/* Bar */}
                    <div 
                      className={`w-24 rounded-t-xl relative transition-all duration-300 group-hover:scale-105 shadow-xl`}
                      style={{ height: `${item.heightPercent}%`, minHeight: '50px' }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} rounded-t-xl`} />
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent rounded-t-xl" />
                      <div className="absolute top-0 right-0 w-2 h-full bg-black/20 rounded-tr-xl" />
                      
                      {/* Floating Label */}
                      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap">
                        <div className="text-3xl font-bold text-foreground">{item.amount}</div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wider">{item.label}</div>
                      </div>
                    </div>
                    
                    {/* X-Axis Label */}
                    <div className="absolute -bottom-8 text-base font-bold text-muted-foreground whitespace-nowrap">
                      {item.year}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveMarketSlide;
