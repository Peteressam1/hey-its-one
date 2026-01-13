import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Factory, Globe, Target, DollarSign, Zap, Repeat, Users, Handshake, Banknote, Shield } from "lucide-react";

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
      icon: Banknote,
      title: "€300K Angel Investment",
      description: "Secured funding",
      type: "Investment"
    }
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
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col flex-1 space-y-6">
        
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

        {/* TAM/SAM/SOM Row - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-4"
        >
          {/* TAM */}
          <Card className="p-4 bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-muted-foreground" />
              <div>
                <span className="text-xs font-bold text-muted-foreground tracking-wider">TAM</span>
                <div className="text-2xl font-bold text-foreground">200K <span className="text-base font-normal text-muted-foreground">factories</span></div>
              </div>
              <div className="ml-auto text-right">
                <div className="text-xl font-semibold text-foreground">~€18B</div>
              </div>
            </div>
          </Card>

          {/* SAM */}
          <Card className="p-4 bg-card/80 backdrop-blur-sm border border-accent/40 transition-all duration-300">
            <div className="flex items-center gap-3">
              <Factory className="w-6 h-6 text-accent" />
              <div>
                <span className="text-xs font-bold text-accent tracking-wider">SAM</span>
                <div className="text-2xl font-bold text-accent">~20K <span className="text-base font-normal text-muted-foreground">factories</span></div>
              </div>
              <div className="ml-auto text-right">
                <div className="text-xl font-semibold text-accent">~€1.44B</div>
              </div>
            </div>
          </Card>

          {/* SOM */}
          <Card className="p-4 bg-primary/10 backdrop-blur-sm border border-primary/50 transition-all duration-300 shadow-lg">
            <div className="flex items-center gap-3">
              <Target className="w-6 h-6 text-primary" />
              <div>
                <span className="text-xs font-bold text-primary tracking-wider">SOM (3Y)</span>
                <div className="text-2xl font-bold text-primary">100 <span className="text-base font-normal text-foreground">factories</span></div>
              </div>
              <div className="ml-auto text-right">
                <div className="text-xl font-bold text-primary">~€10M</div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Bottom Row: Business Model & Traction */}
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

          {/* Traction & Funding Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col h-full"
          >
            <h3 className="text-2xl font-bold flex items-center gap-2 text-foreground mb-5">
              <Handshake className="w-7 h-7 text-accent" /> Traction & Funding
            </h3>
            <div className="flex flex-col gap-4 flex-1">
              {traction.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-6 flex items-center gap-6 hover:shadow-md transition-all flex-1 bg-card/60 border-border/50"
                  >
                    <div className="p-5 rounded-xl bg-accent/10 border border-accent/20">
                      <Icon className="w-10 h-10 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-xl text-foreground">
                          {item.title}
                        </span>
                        <span className="text-sm font-bold px-4 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                          {item.type}
                        </span>
                      </div>
                      <div className="text-base">
                        <span className="text-muted-foreground">{item.description}</span>
                      </div>
                    </div>
                  </Card>
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
