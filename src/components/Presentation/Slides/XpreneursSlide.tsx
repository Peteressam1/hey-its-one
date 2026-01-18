import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Rocket, Target, Handshake, CheckCircle2, ArrowRight } from "lucide-react";

const XpreneursSlide = () => {
  const sections = [
    {
      icon: Rocket,
      title: "Why We're a Strong Fit",
      color: "primary",
      items: [
        "Deep technical execution + early industrial traction",
        "Paying customers, LOIs, and MoU with angel investor",
        "Clear venture ambition at the right inflection point",
        "Ready for structured venture building to accelerate growth"
      ]
    },
    {
      icon: Target,
      title: "Goals for the 3-Month Program",
      color: "accent",
      items: [
        "Turn pilots into repeatable, paid rollouts",
        "Refine go-to-market and pricing for enterprise customers",
        "Prepare for seed round with clear narrative and metrics"
      ]
    },
    {
      icon: Handshake,
      title: "Support We're Looking For",
      color: "warning",
      items: [
        "Enterprise sales strategy and playbook",
        "Legal and company structuring guidance",
        "Warm intros to industrial partners & experienced investors"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10",
          border: "border-primary/40",
          text: "text-primary",
          iconBg: "bg-primary/20"
        };
      case "accent":
        return {
          bg: "bg-accent/10",
          border: "border-accent/40",
          text: "text-accent",
          iconBg: "bg-accent/20"
        };
      case "warning":
        return {
          bg: "bg-warning/10",
          border: "border-warning/40",
          text: "text-warning",
          iconBg: "bg-warning/20"
        };
      default:
        return {
          bg: "bg-primary/10",
          border: "border-primary/40",
          text: "text-primary",
          iconBg: "bg-primary/20"
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
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col flex-1 justify-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Why <span className="text-primary">XPRENEURS</span>?
          </h1>
          <p className="text-xl text-muted-foreground">
            The right program at the right stage
          </p>
        </motion.div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const colors = getColorClasses(section.color);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="h-full"
              >
                <Card className={`p-8 h-full bg-card/80 backdrop-blur-sm border ${colors.border} hover:scale-[1.02] transition-all duration-300 flex flex-col`}>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl ${colors.iconBg} border ${colors.border}`}>
                      <Icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    <h3 className={`text-xl font-bold ${colors.text}`}>{section.title}</h3>
                  </div>
                  
                  {/* Bullet Points */}
                  <ul className="space-y-4 flex-1">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 ${colors.text} mt-0.5 flex-shrink-0`} />
                        <span className="text-lg text-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary/10 border border-primary/30">
            <span className="text-xl font-semibold text-foreground">
              Ready to scale with <span className="text-primary">XPRENEURS</span>
            </span>
            <ArrowRight className="w-6 h-6 text-primary" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default XpreneursSlide;
