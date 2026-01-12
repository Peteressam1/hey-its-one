import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Factory, Globe, Target, DollarSign, Zap, Repeat, Users, Handshake, Banknote, Shield, ArrowRight, Sparkles } from "lucide-react";

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
      model: "Monthly"
    },
    {
      icon: Users,
      title: "Support Services",
      description: "Maintenance & SLAs",
      model: "Annual"
    }
  ];

  const traction = [
    {
      icon: Handshake,
      title: "Global F&B Manufacturer",
      description: "60% of jam & honey supply in MENA",
      type: "Partnership",
      highlight: false
    },
    {
      icon: Shield,
      title: "Ministry of Defence Egypt",
      description: "Optronics sector collaboration",
      type: "Partnership",
      highlight: false
    },
    {
      icon: Banknote,
      title: "€300K Angel Investment",
      description: "Secured funding",
      type: "Investment",
      highlight: true
    }
  ];

  const marketFunnel = [
    { label: "TAM", value: "200K", unit: "factories", revenue: "~€18B", icon: Globe, color: "text-muted-foreground", bgColor: "bg-muted/20", borderColor: "border-muted/30" },
    { label: "SAM", value: "~20K", unit: "factories", revenue: "~€1.44B", icon: Factory, color: "text-accent", bgColor: "bg-accent/10", borderColor: "border-accent/40" },
    { label: "SOM", value: "100", unit: "factories", revenue: "~€10M", icon: Target, color: "text-primary", bgColor: "bg-primary/15", borderColor: "border-primary/50", isTarget: true }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col px-8 py-8 bg-background relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern" />
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col flex-1 space-y-5">
        
        {/* Header with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                $90B Combined Market
              </span>
            </h1>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-3">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 text-sm font-medium text-foreground backdrop-blur-sm"
            >
              <span className="text-primary font-bold">Machine Vision:</span> $21B → $41B | 13% CAGR
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-accent/5 border border-accent/30 text-sm font-medium text-foreground backdrop-blur-sm"
            >
              <span className="text-accent font-bold">AI in Manufacturing:</span> $6B → $48B | 46% CAGR
            </motion.span>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base text-muted-foreground"
          >
            <span className="text-primary font-semibold">Vertical:</span> Electronics → F&B → Automotive 
            <span className="mx-3 text-muted">|</span>
            <span className="text-accent font-semibold">Horizontal:</span> EU → MENA → US
          </motion.p>
        </motion.div>

        {/* TAM/SAM/SOM Funnel - Horizontal Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2"
        >
          {marketFunnel.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                className="flex items-center"
              >
                <Card className={`px-6 py-4 ${item.bgColor} backdrop-blur-sm border ${item.borderColor} transition-all duration-300 hover:scale-105 ${item.isTarget ? 'shadow-lg shadow-primary/20 ring-1 ring-primary/30' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-lg ${item.isTarget ? 'bg-primary/20' : 'bg-white/5'}`}>
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className={`text-xs font-bold ${item.color} tracking-wider uppercase`}>{item.label}</span>
                        {item.isTarget && <span className="text-[10px] text-primary/70">(3Y)</span>}
                      </div>
                      <div className={`text-2xl font-bold ${item.color}`}>
                        {item.value} <span className="text-sm font-normal text-muted-foreground">{item.unit}</span>
                      </div>
                    </div>
                    <div className="pl-4 border-l border-white/10">
                      <div className={`text-xl font-bold ${item.color}`}>{item.revenue}</div>
                    </div>
                  </div>
                </Card>
                {index < marketFunnel.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-muted-foreground/50 mx-1" />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Row: Business Model & Traction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
          
          {/* Business Model Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col"
          >
            <h3 className="text-xl font-bold flex items-center gap-2 text-foreground mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
              Business Model
            </h3>
            <div className="flex flex-col gap-3 flex-1">
              {revenueStreams.map((stream, index) => {
                const Icon = stream.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <Card className="p-4 flex items-center gap-4 hover:shadow-lg hover:border-primary/30 transition-all duration-300 bg-gradient-to-r from-card/80 to-card/40 backdrop-blur-sm border-border/50 group">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-lg text-foreground">{stream.title}</span>
                          <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                            {stream.model}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">{stream.description}</span>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Traction & Funding Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col"
          >
            <h3 className="text-xl font-bold flex items-center gap-2 text-foreground mb-4">
              <div className="p-2 rounded-lg bg-accent/10">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              Traction & Funding
            </h3>
            <div className="flex flex-col gap-3 flex-1">
              {traction.map((item, index) => {
                const Icon = item.icon;
                const isInvestment = item.highlight;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <Card 
                      className={`p-4 flex items-center gap-4 transition-all duration-300 group ${
                        isInvestment 
                          ? "bg-gradient-to-r from-primary/25 via-primary/15 to-accent/10 border-primary/50 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20" 
                          : "bg-gradient-to-r from-card/80 to-card/40 backdrop-blur-sm border-border/50 hover:border-accent/30 hover:shadow-lg"
                      }`}
                    >
                      <div className={`p-3 rounded-xl transition-transform group-hover:scale-110 ${
                        isInvestment 
                          ? "bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/40" 
                          : "bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20"
                      }`}>
                        <Icon className={`w-7 h-7 ${isInvestment ? "text-primary" : "text-accent"}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <span className={`font-bold text-lg ${isInvestment ? "text-primary" : "text-foreground"}`}>
                            {item.title}
                          </span>
                          <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                            isInvestment 
                              ? "bg-primary/20 text-primary border border-primary/30" 
                              : "bg-accent/10 text-accent border border-accent/20"
                          }`}>
                            {item.type}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">{item.description}</span>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveMarketSlide;
