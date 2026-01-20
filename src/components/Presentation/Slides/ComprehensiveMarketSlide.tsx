import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { DollarSign, Zap, Repeat, Users, Handshake, Banknote, Shield, GraduationCap, TrendingUp } from "lucide-react";

const ComprehensiveMarketSlide = () => {
  const revenueStreams = [
    { 
      icon: Zap, 
      title: "Integration Fees", 
      subtitle: "Setup & Customization",
      model: "One-time" 
    },
    { 
      icon: Repeat, 
      title: "Recurring SaaS", 
      subtitle: "Software & Analytics",
      model: "Monthly" 
    },
    { 
      icon: Users, 
      title: "Support Services", 
      subtitle: "Maintenance & SLAs",
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
      title: "€300K Angel Investment",
      description: "Secured funding",
      type: "Investment"
    }
  ];

  return (
    <div className="w-full h-screen flex flex-col px-12 py-6 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
      </div>
      <div className="geometric-pattern" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col h-full">
        
        {/* Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            $90B Opportunity & Early Traction
          </h1>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-sm font-medium text-foreground">
              Machine Vision: $21B → $41B by 2030 | 13% CAGR
            </span>
            <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-sm font-medium text-foreground">
              AI in Manufacturing: $6B → $48B | 46% CAGR
            </span>
          </div>
        </motion.div>

        {/* Business Model Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/30">
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Business Model</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {revenueStreams.map((stream, index) => {
              const Icon = stream.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="p-4 bg-primary/5 backdrop-blur-sm border border-primary/30 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/15 border border-primary/30">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground">{stream.title}</h3>
                        <p className="text-sm text-muted-foreground">{stream.subtitle}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/30">
                        {stream.model}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Traction & Funding Section */}
        <div className="flex-1 flex flex-col min-h-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-2 mb-3"
          >
            <div className="p-1.5 rounded-lg bg-accent/15 border border-accent/40">
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Traction & Funding</h2>
          </motion.div>

          {/* Traction Cards - 2x2 Grid with Accent Color */}
          <div className="grid grid-cols-2 gap-4 flex-1">
            {traction.map((item, index) => {
              const Icon = item.icon;
              const isInvestment = item.type === "Investment";
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <Card 
                    className={`h-full p-4 flex items-center gap-4 transition-all duration-300 backdrop-blur-sm ${
                      isInvestment 
                        ? "bg-accent/10 border-2 border-accent/60 shadow-[0_0_25px_hsl(var(--accent)/0.25)] hover:shadow-[0_0_35px_hsl(var(--accent)/0.35)]"
                        : "bg-card/60 border border-muted-foreground/20 hover:border-accent/40 hover:shadow-[0_0_20px_hsl(var(--accent)/0.15)]"
                    }`}
                  >
                    <div className={`p-3 rounded-xl ${
                      isInvestment 
                        ? "bg-accent/20 border border-accent/50"
                        : "bg-muted/50 border border-muted-foreground/20"
                    }`}>
                      <Icon className={`w-7 h-7 ${isInvestment ? "text-accent" : "text-foreground/70"}`} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <span className={`font-bold text-foreground ${isInvestment ? "text-xl" : "text-lg"}`}>
                        {item.title}
                      </span>
                      <p className="text-muted-foreground text-sm truncate">
                        {item.description}
                      </p>
                    </div>

                    <span className={`text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap ${
                      isInvestment 
                        ? "bg-accent/20 text-accent border border-accent/50"
                        : "bg-muted/50 text-muted-foreground border border-muted-foreground/20"
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
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-3 text-center"
        >
          <p className="text-base text-muted-foreground">
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
