import { Card } from "@/components/ui/card";
import { DollarSign, Users, Target, Zap, Repeat } from "lucide-react";
import { motion } from "framer-motion";

const BusinessModelSlideV2 = () => {
  const revenueStreams = [
    {
      icon: Zap,
      title: "Integration Fees",
      description: "One-time setup and customization for production lines",
      model: "Per-line deployment"
    },
    {
      icon: Repeat,
      title: "Recurring SaaS",
      description: "Monthly subscription for software, analytics, and support",
      model: "Per-line subscription"
    },
    {
      icon: Users,
      title: "Support & Services",
      description: "On-site system inspection, maintenance, and technical support",
      model: "Professional services"
    }
  ];

  const targetMarkets = [
    {
      icon: Target,
      industry: "Pharmaceutical Manufacturing",
      useCase: "High-speed counting, quality control, compliance validation"
    },
    {
      icon: Target,
      industry: "Food & Beverage",
      useCase: "Packaging validation, closure inspection, contamination detection"
    },
    {
      icon: Target,
      industry: "Automotive & Electronics",
      useCase: "Component inspection, assembly verification, defect detection"
    },
    {
      icon: Target,
      industry: "Wire & Cable Production",
      useCase: "Velocity monitoring, dimensional inspection, surface quality"
    }
  ];

  const pricingStrategy = [
    {
      tier: "Pilot Program",
      target: "Small Manufacturers",
      approach: "Entry-level pricing to validate ROI",
      features: ["Core detection capabilities", "Standard dashboard", "Email support"]
    },
    {
      tier: "Growth Plan",
      target: "Mid-Size Operations",
      approach: "Scalable pricing for multiple production lines",
      features: ["Advanced analytics", "MES/ERP integration", "Priority support"],
      highlight: true
    },
    {
      tier: "Enterprise Solution",
      target: "Large Corporations",
      approach: "Custom pricing for multi-site deployments",
      features: ["Custom AI models", "Multi-site management", "24/7 dedicated support"]
    }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col px-8 py-6 bg-background relative">
      {/* Unified Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern" />
      
      {/* Header */}
      <div className="relative z-10 text-center space-y-4 mb-8 ml-24">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
          <span className="text-gradient text-glow-animate">Business Model</span>
        </h1>
        <p className="text-lg text-muted max-w-4xl mx-auto">
          Hybrid SaaS model combining integration fees with recurring revenue
        </p>
      </div>

      <div className="relative z-10 flex-1 space-y-8">
        
        {/* Revenue Streams Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-foreground">Revenue Streams</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {revenueStreams.map((stream, index) => {
              const Icon = stream.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-all hover:scale-105 bg-card/80 backdrop-blur-sm border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-foreground mb-2">{stream.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{stream.description}</p>
                        <div className="text-xs text-primary font-medium">{stream.model}</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Target Markets Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-foreground">Target Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {targetMarkets.map((market, index) => {
              const Icon = market.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <Card className="p-5 hover:shadow-md transition-all bg-card/80 backdrop-blur-sm border-border/50">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground mb-1">{market.industry}</h4>
                        <p className="text-sm text-muted-foreground">{market.useCase}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Pricing Strategy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-foreground">Pricing Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingStrategy.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <Card className={`p-6 h-full transition-all ${
                  plan.highlight 
                    ? 'bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 shadow-lg scale-105' 
                    : 'bg-card/80 border-border/50'
                } hover:scale-105`}>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{plan.tier}</h3>
                      <p className="text-sm text-muted-foreground font-medium">{plan.target}</p>
                    </div>
                    <p className="text-sm text-foreground">{plan.approach}</p>
                    <div className="space-y-2">
                      {plan.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2">
                          <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-6"
        >
          <Card className="p-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20">
            <div className="flex items-center gap-4">
              <DollarSign className="w-8 h-8 text-primary shrink-0" />
              <p className="text-foreground font-medium">
                Land-and-expand strategy: Start with pilot deployment on 1-2 lines, then expand to full facility coverage
              </p>
            </div>
          </Card>
        </motion.div>

      </div>
    </div>
  );
};

export default BusinessModelSlideV2;
