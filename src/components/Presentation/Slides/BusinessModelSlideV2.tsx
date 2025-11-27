import { Card } from "@/components/ui/card";
import { DollarSign, Users, Target, Zap, Repeat, TrendingUp, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const BusinessModelSlideV2 = () => {
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
    { year: "Year 2", amount: "€3M", value: 3000000, label: "Expansion", height: "h-40", color: "bg-primary/70" },
    { year: "Year 3", amount: "€10M", value: 10000000, label: "Scale", height: "h-64", color: "bg-primary" }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col px-8 py-6 bg-background relative overflow-hidden">
      {/* Unified Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern" />
      
      {/* Header */}
      <div className="relative z-10 text-center space-y-2 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          Business Model & Financial Projections
        </h1>
        <p className="text-lg text-muted max-w-4xl mx-auto">
          Hybrid SaaS Model Driving Rapid Scaling
        </p>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row gap-8 h-full">
        
        {/* Left Column: Revenue Streams (Cards) */}
        <div className="flex-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-primary" /> Revenue Streams
            </h2>
            <div className="space-y-4">
              {revenueStreams.map((stream, index) => {
                const Icon = stream.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="p-4 hover:shadow-lg transition-all hover:scale-[1.02] bg-card/80 backdrop-blur-sm border-border/50 group">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <h3 className="font-bold text-lg text-foreground">{stream.title}</h3>
                            <span className="text-xs font-bold px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                              {stream.model}
                            </span>
                          </div>
                          <div className="flex justify-between items-center mt-1">
                            <p className="text-sm text-muted-foreground">{stream.description}</p>
                            <span className="text-sm font-bold text-foreground">{stream.price}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Key Metric Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="p-6 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-primary/20">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Land & Expand Strategy</h4>
                  <p className="text-sm text-muted-foreground">
                    Pilot (1-2 lines) → Full Facility (10+ lines) → Enterprise (Global)
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Right Column: Financial Projections (Geometric Visualization) */}
        <div className="flex-1 flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="h-full"
          >
             <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-accent" /> Financial Projections
            </h2>
            
            <Card className="p-8 h-[500px] bg-card/80 backdrop-blur-sm border-border/50 relative overflow-hidden flex items-end justify-around pb-12">
              {/* Grid Lines */}
              <div className="absolute inset-0 w-full h-full pointer-events-none opacity-10" 
                   style={{ backgroundImage: 'linear-gradient(to bottom, #888 1px, transparent 1px)', backgroundSize: '100% 50px' }}>
              </div>

              {projections.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: item.height.replace('h-', '') * 4, opacity: 1 }} // approximating height animation
                  transition={{ duration: 1, delay: 0.5 + index * 0.2, ease: "easeOut" }}
                  className="relative flex flex-col justify-end items-center group w-1/4"
                >
                  {/* 3D Bar Effect */}
                  <div className={`w-full ${item.height} rounded-t-lg relative transition-all duration-300 group-hover:opacity-90 shadow-2xl`}>
                    <div className={`absolute inset-0 ${item.color} rounded-t-lg opacity-80`} />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 to-transparent rounded-t-lg" />
                    <div className="absolute top-0 right-0 w-2 h-full bg-black/20" /> {/* Side shadow */}
                    
                    {/* Floating Label */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-center w-32">
                      <div className="text-2xl font-bold text-foreground">{item.amount}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</div>
                    </div>
                  </div>
                  
                  {/* X-Axis Label */}
                  <div className="absolute -bottom-8 text-sm font-bold text-muted-foreground">
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

export default BusinessModelSlideV2;