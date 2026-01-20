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
    <div className="w-full min-h-screen flex flex-col px-10 py-8 bg-background relative overflow-hidden">
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
          className="text-center mb-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-3">
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

        {/* Business Model Section - Larger & More Organized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Business Model</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-5">
            {revenueStreams.map((stream, index) => {
              const Icon = stream.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="p-6 bg-card/60 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground">{stream.title}</h3>
                        <p className="text-lg text-muted-foreground mt-1">{stream.subtitle}</p>
                        <span className="inline-block mt-3 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-base font-semibold border border-primary/20">
                          {stream.model}
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Traction & Funding Section */}
        <div className="flex-1 flex flex-col">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <TrendingUp className="w-8 h-8 text-accent" />
            <h2 className="text-3xl font-bold text-foreground">Traction & Funding</h2>
          </motion.div>

          {/* Orange Glowy Traction Cards - 2x2 Grid */}
          <div className="grid grid-cols-2 gap-5 flex-1">
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
                    className={`h-full p-6 flex items-center gap-5 transition-all duration-300 backdrop-blur-sm ${
                      isInvestment 
                        ? "bg-accent/10 border-2 border-accent shadow-[0_0_40px_hsl(var(--accent)/0.4)] hover:shadow-[0_0_60px_hsl(var(--accent)/0.5)]"
                        : "bg-accent/5 border-2 border-accent/50 shadow-[0_0_25px_hsl(var(--accent)/0.2)] hover:shadow-[0_0_40px_hsl(var(--accent)/0.35)] hover:border-accent"
                    }`}
                  >
                    <div className={`p-4 rounded-xl ${
                      isInvestment 
                        ? "bg-accent/20 border-2 border-accent/60"
                        : "bg-accent/10 border border-accent/40"
                    }`}>
                      <Icon className={`w-9 h-9 ${isInvestment ? "text-accent" : "text-accent"}`} />
                    </div>
                    
                    <div className="flex-1">
                      <span className={`font-bold text-foreground ${isInvestment ? "text-2xl" : "text-xl"}`}>
                        {item.title}
                      </span>
                      <p className="text-muted-foreground text-lg mt-1">
                        {item.description}
                      </p>
                    </div>

                    <span className={`text-base font-semibold px-5 py-2.5 rounded-full ${
                      isInvestment 
                        ? "bg-accent/25 text-accent border-2 border-accent/60"
                        : "bg-accent/15 text-accent border border-accent/40"
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
          className="mt-5 text-center"
        >
          <p className="text-xl text-muted-foreground">
            <span className="text-primary font-semibold">Vertical:</span> Electronics → F&B → Automotive
            <span className="mx-6">|</span>
            <span className="text-accent font-semibold">Horizontal:</span> EU → MENA → US
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveMarketSlide;
