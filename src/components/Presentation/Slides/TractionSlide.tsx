import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Factory, Shield, GraduationCap, Banknote, TrendingUp, CheckCircle2 } from "lucide-react";

const TractionSlide = () => {
  const tractionItems = [
    {
      icon: Factory,
      title: "Global F&B Manufacturer",
      subtitle: "Jam & Honey Production",
      highlight: "60% MENA Market Share",
      metric: "~€35K ARR",
      status: "Signed",
      color: "primary"
    },
    {
      icon: Shield,
      title: "Ministry of Defence",
      subtitle: "Egypt - Optronics Sector",
      highlight: "Government Partnership",
      metric: "In Progress",
      status: "Contracted",
      color: "accent"
    },
    {
      icon: GraduationCap,
      title: "FAU FAPS",
      subtitle: "Research Collaboration",
      highlight: "Academic Partnership",
      metric: "Active",
      status: "Ongoing",
      color: "warning"
    },
    {
      icon: Banknote,
      title: "Angel Investment",
      subtitle: "Pre-Seed Funding",
      highlight: "Secured",
      metric: "~€300K",
      status: "Closed",
      color: "primary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10",
          border: "border-primary/30",
          text: "text-primary",
          icon: "text-primary"
        };
      case "accent":
        return {
          bg: "bg-accent/10",
          border: "border-accent/30",
          text: "text-accent",
          icon: "text-accent"
        };
      case "warning":
        return {
          bg: "bg-warning/10",
          border: "border-warning/30",
          text: "text-warning",
          icon: "text-warning"
        };
      default:
        return {
          bg: "bg-primary/10",
          border: "border-primary/30",
          text: "text-primary",
          icon: "text-primary"
        };
    }
  };

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
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col flex-1">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Early Traction & Validation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real partnerships, real revenue, real momentum
          </p>
        </motion.div>

        {/* Traction Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
          {tractionItems.map((item, index) => {
            const Icon = item.icon;
            const colors = getColorClasses(item.color);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              >
                <Card className={`p-8 h-full bg-card/80 backdrop-blur-sm border ${colors.border} hover:scale-[1.02] transition-all duration-300`}>
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className={`p-4 rounded-2xl ${colors.bg} border ${colors.border}`}>
                      <Icon className={`w-10 h-10 ${colors.icon}`} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.text} border ${colors.border}`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-lg text-muted-foreground mb-4">{item.subtitle}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className={`w-5 h-5 ${colors.icon}`} />
                          <span className="text-lg font-medium text-foreground">{item.highlight}</span>
                        </div>
                        <div className={`text-2xl font-bold ${colors.text}`}>
                          {item.metric}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary/10 border border-primary/30">
            <TrendingUp className="w-7 h-7 text-primary" />
            <span className="text-xl font-semibold text-foreground">
              Validated across <span className="text-primary">3 sectors</span> with <span className="text-primary">~€300K</span> funding secured
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TractionSlide;
