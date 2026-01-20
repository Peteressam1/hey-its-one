import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { DollarSign, Zap, Repeat, Users, Handshake, Banknote, Shield, GraduationCap, TrendingUp } from "lucide-react";

const ComprehensiveMarketSlide = () => {
  const revenueStreams = [
    { icon: Zap, title: "Integration Fees", model: "One-time" },
    { icon: Repeat, title: "Recurring SaaS", model: "Monthly" },
    { icon: Users, title: "Support & SLAs", model: "Annual" }
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
      title: "€300K Angel Investment",
      description: "Secured funding",
      type: "Investment"
    }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col px-10 py-10 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
      </div>
      <div className="geometric-pattern" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col flex-1">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            $90B Opportunity & Early Traction
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-5 py-2 rounded-full bg-primary/10 border border-primary/30 text-base font-medium text-foreground">
              Machine Vision: $21B → $41B by 2030 | 13% CAGR
            </span>
            <span className="px-5 py-2 rounded-full bg-accent/10 border border-accent/30 text-base font-medium text-foreground">
              AI in Manufacturing: $6B → $48B | 46% CAGR
            </span>
          </div>
        </motion.div>

        {/* Business Model - Compact Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="p-4 bg-card/50 backdrop-blur-sm border border-border/40">
            <div className="flex items-center justify-center gap-12">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                <span className="text-lg font-semibold text-foreground">Business Model:</span>
              </div>
              {revenueStreams.map((stream, index) => {
                const Icon = stream.icon;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground font-medium">{stream.title}</span>
                    <span className="text-muted-foreground text-sm">({stream.model})</span>
                  </div>
                );
              })}
            </div>
          </Card>
        </motion.div>

        {/* Traction & Funding Section */}
        <div className="flex-1 flex flex-col">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 mb-6"
          >
            <TrendingUp className="w-7 h-7 text-accent" />
            <h2 className="text-3xl font-bold text-foreground">Traction & Funding</h2>
          </motion.div>

          {/* Full-width Traction Cards */}
          <div className="flex flex-col gap-4 flex-1">
            {traction.map((item, index) => {
              const Icon = item.icon;
              const isInvestment = item.type === "Investment";
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex-1"
                >
                  <Card 
                    className={`h-full p-6 flex items-center gap-6 transition-all duration-300 bg-card/60 backdrop-blur-sm border-2 hover:translate-x-1 ${
                      isInvestment 
                        ? "border-accent/60 hover:border-accent shadow-[0_0_25px_hsl(var(--accent)/0.2)]"
                        : "border-accent/30 hover:border-accent/60"
                    }`}
                  >
                    <div className={`p-4 rounded-xl border ${
                      isInvestment 
                        ? "bg-accent/15 border-accent/40"
                        : "bg-accent/10 border-accent/20"
                    }`}>
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    
                    <div className="flex-1">
                      <span className={`font-bold text-foreground ${isInvestment ? "text-2xl" : "text-xl"}`}>
                        {item.title}
                      </span>
                      <p className="text-muted-foreground text-base mt-1">
                        {item.description}
                      </p>
                    </div>

                    <span className={`text-sm font-semibold px-4 py-2 rounded-full ${
                      isInvestment 
                        ? "bg-accent/20 text-accent border border-accent/40"
                        : "bg-accent/10 text-accent border border-accent/20"
                    }`}>
                      {item.type}
                    </span>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Expansion Strategy Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 text-center"
        >
          <p className="text-lg text-muted-foreground">
            <span className="text-primary font-semibold">Vertical:</span> Electronics → F&B → Automotive
            <span className="mx-4">|</span>
            <span className="text-accent font-semibold">Horizontal:</span> EU → MENA → US
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveMarketSlide;
