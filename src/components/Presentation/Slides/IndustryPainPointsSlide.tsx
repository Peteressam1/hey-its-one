import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Clock, RefreshCw, Lightbulb, BarChart3, DollarSign } from "lucide-react";

const IndustryPainPointsSlide = () => {
  const quotes = [
    {
      icon: Clock,
      quote: "It's common to hear about 6–12 month lead times before a machine vision system reaches stable, reliable detection.",
      source: "Zetamotion Machine Vision Quality Control Challenges Report, 2025",
      color: "text-destructive"
    },
    {
      icon: RefreshCw,
      quote: "Every new SKU feels like a new project.",
      source: "Reddit r/AskEngineers PCB Manufacturing Discussion, 2021",
      color: "text-warning"
    },
    {
      icon: Lightbulb,
      quote: "Glare from different supplier batches frequently breaks their defect detection setup. Engineers spend hours adjusting optics and rewriting thresholds.",
      source: "Zetamotion Report, Automotive Metal Parts Case Study, 2025",
      color: "text-orange-400"
    },
    {
      icon: BarChart3,
      quote: "Many quality assurance dashboards go unused because they overwhelm users with information rather than providing actionable insights.",
      source: "Call Criteria QA Dashboard Analysis, 2025",
      color: "text-cyan-400"
    },
    {
      icon: DollarSign,
      quote: "Full ROI achievement: 2+ years typical timeline.",
      source: "Deep Vision Systems Report, 2025",
      color: "text-accent"
    }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center px-8 py-12 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl space-y-12">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center ml-24"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
            What The Industry Says
          </h1>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
            About today's vision systems for quality control
          </p>
        </motion.div>

        {/* Quotes Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {quotes.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Card className="p-5 h-full bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all hover:scale-105">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-muted/50 ${item.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <p className="text-sm text-foreground font-medium leading-relaxed flex-1">
                        "{item.quote}"
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-auto italic">
                      — {item.source}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8"
        >
          <Card className="p-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20">
            <p className="text-xl text-foreground font-medium">
              The industry is frustrated. There has to be a better way...
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default IndustryPainPointsSlide;
