import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Factory, Globe, Target, DollarSign, Zap, Repeat, Users, Handshake, Banknote, Shield, GraduationCap, TrendingUp } from "lucide-react";

const ComprehensiveMarketSlide = () => {
  const revenueStreams = [
    {
      icon: Zap,
      title: "Integration Fees",
      model: "One-time"
    },
    {
      icon: Repeat,
      title: "Recurring SaaS",
      model: "Monthly"
    },
    {
      icon: Users,
      title: "Support & SLAs",
      model: "Annual"
    }
  ];

  const traction = [
    {
      icon: Handshake,
      title: "Global F&B Manufacturer",
      description: "60% of jam & honey supply in MENA",
      type: "Partnership"
    },
    {
      icon: Shield,
      title: "Ministry of Defence Egypt",
      description: "Optronics sector collaboration",
      type: "Partnership"
    },
    {
      icon: GraduationCap,
      title: "FAPS FAU",
      description: "University research partnership",
      type: "Partnership"
    },
    {
      icon: Banknote,
      title: "Angel Investment",
      description: "€300K secured funding",
      type: "Investment"
    }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col px-8 py-8 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col flex-1 gap-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            $90B Opportunity & Early Traction
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

        {/* Business Model - Compact Horizontal Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-5 bg-card/60 backdrop-blur-sm border border-border/50">
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Business Model</h3>
              </div>
              
              <div className="flex items-center gap-8 flex-1 justify-center">
                {revenueStreams.map((stream, index) => {
                  const Icon = stream.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-muted/50">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">{stream.title}</span>
                        <span className="text-muted-foreground ml-2 text-sm">({stream.model})</span>
                      </div>
                      {index < revenueStreams.length - 1 && (
                        <div className="w-px h-8 bg-border/50 ml-5" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Traction & Funding - Main Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-1 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-3 rounded-xl bg-accent/10 border border-accent/30">
              <TrendingUp className="w-7 h-7 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Traction & Funding</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1">
            {traction.map((item, index) => {
              const Icon = item.icon;
              const isInvestment = item.type === "Investment";
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <Card 
                    className={`p-6 h-full flex items-center gap-6 transition-all duration-500 group relative overflow-hidden border-0 ${
                      isInvestment 
                        ? "bg-gradient-to-br from-accent/15 to-background ring-2 ring-accent/40 hover:ring-accent/70 shadow-[0_0_30px_hsl(var(--accent)/0.15)] hover:shadow-[0_0_50px_hsl(var(--accent)/0.25)]"
                        : "bg-gradient-to-br from-accent/10 to-background ring-1 ring-accent/25 hover:ring-accent/50 shadow-[0_0_20px_hsl(var(--accent)/0.1)] hover:shadow-[0_0_40px_hsl(var(--accent)/0.2)]"
                    }`}
                  >
                    {/* Glow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className={`relative z-10 p-5 rounded-xl border transition-all duration-300 group-hover:scale-105 ${
                      isInvestment 
                        ? "bg-accent/20 border-accent/40"
                        : "bg-accent/10 border-accent/25"
                    }`}>
                      <Icon className={`w-10 h-10 ${isInvestment ? "text-accent" : "text-accent"}`} />
                    </div>
                    
                    <div className="flex-1 min-w-0 relative z-10">
                      <div className="flex justify-between items-center mb-2">
                        <span className={`font-bold text-foreground ${isInvestment ? "text-2xl" : "text-xl"}`}>
                          {item.title}
                        </span>
                        <span className={`text-sm font-bold px-4 py-1.5 rounded-full border ${
                          isInvestment 
                            ? "bg-accent/20 text-accent border-accent/40"
                            : "bg-accent/10 text-accent border-accent/25"
                        }`}>
                          {item.type}
                        </span>
                      </div>
                      <p className={`text-muted-foreground ${isInvestment ? "text-lg" : "text-base"}`}>
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveMarketSlide;
