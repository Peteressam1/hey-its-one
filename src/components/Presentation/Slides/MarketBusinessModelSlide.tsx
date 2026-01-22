import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { DollarSign, Zap, Repeat, Users, TrendingUp } from "lucide-react";

const MarketBusinessModelSlide = () => {
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

  return (
    <div className="w-full h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
      </div>
      <div className="geometric-pattern" />

      {/* 16:9 Aspect Ratio Container */}
      <div 
        className="relative z-10 flex flex-col justify-center"
        style={{
          width: 'min(100vw, 177.78vh)',
          height: 'min(56.25vw, 100vh)',
          padding: '2.5vh 3vw',
        }}
      >
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '4vh' }}
        >
          <div className="flex items-center justify-center" style={{ gap: '1vw', marginBottom: '2vh' }}>
            <div 
              className="rounded-xl bg-primary/15 border border-primary/40"
              style={{ padding: '1vh' }}
            >
              <TrendingUp style={{ width: 'clamp(1.5rem, 2.5vw, 3rem)', height: 'clamp(1.5rem, 2.5vw, 3rem)' }} className="text-primary" />
            </div>
            <h1 
              className="font-bold text-foreground"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
            >
              $90B Market Opportunity
            </h1>
          </div>
          
          {/* Market Pills */}
          <div className="flex flex-wrap justify-center" style={{ gap: '1.5vw' }}>
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-full bg-primary/10 border border-primary/30 font-semibold text-foreground"
              style={{ padding: '1vh 2vw', fontSize: 'clamp(1rem, 1.5vw, 1.75rem)' }}
            >
              Machine Vision: $21B → $41B by 2030 | 13% CAGR
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-full bg-accent/10 border border-accent/30 font-semibold text-foreground"
              style={{ padding: '1vh 2vw', fontSize: 'clamp(1rem, 1.5vw, 1.75rem)' }}
            >
              AI in Manufacturing: $6B → $48B | 46% CAGR
            </motion.span>
          </div>
        </motion.div>

        {/* Business Model Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-center" style={{ gap: '0.8vw', marginBottom: '3vh' }}>
            <div 
              className="rounded-lg bg-primary/10 border border-primary/30"
              style={{ padding: '0.8vh' }}
            >
              <DollarSign style={{ width: 'clamp(1.2rem, 2vw, 2rem)', height: 'clamp(1.2rem, 2vw, 2rem)' }} className="text-primary" />
            </div>
            <h2 
              className="font-bold text-foreground"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 3rem)' }}
            >
              Business Model
            </h2>
          </div>
          
          <div className="grid grid-cols-3" style={{ gap: '2vw', maxWidth: '90%', margin: '0 auto' }}>
            {revenueStreams.map((stream, index) => {
              const Icon = stream.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <Card 
                    className="bg-primary/5 backdrop-blur-sm border border-primary/30 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-all duration-300"
                    style={{ padding: '3vh 2vw' }}
                  >
                    <div className="flex flex-col items-center text-center" style={{ gap: '1.5vh' }}>
                      <div 
                        className="rounded-xl bg-primary/15 border border-primary/30"
                        style={{ padding: '1.2vh' }}
                      >
                        <Icon style={{ width: 'clamp(1.5rem, 2.5vw, 3rem)', height: 'clamp(1.5rem, 2.5vw, 3rem)' }} className="text-primary" />
                      </div>
                      <div>
                        <h3 
                          className="font-bold text-foreground"
                          style={{ fontSize: 'clamp(1.2rem, 2vw, 2.25rem)', marginBottom: '0.5vh' }}
                        >
                          {stream.title}
                        </h3>
                        <p 
                          className="text-muted-foreground"
                          style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.5rem)' }}
                        >
                          {stream.subtitle}
                        </p>
                      </div>
                      <span 
                        className="rounded-full bg-primary/10 text-primary font-semibold border border-primary/30"
                        style={{ padding: '0.5vh 1.5vw', fontSize: 'clamp(0.8rem, 1.2vw, 1.25rem)' }}
                      >
                        {stream.model}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Expansion Strategy Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
          style={{ marginTop: '4vh' }}
        >
          <p 
            className="text-muted-foreground"
            style={{ fontSize: 'clamp(1rem, 1.6vw, 1.75rem)' }}
          >
            <span className="text-primary font-semibold">Vertical:</span> Electronics → F&B → Automotive
            <span style={{ margin: '0 2vw' }}>|</span>
            <span className="text-accent font-semibold">Horizontal:</span> EU → MENA → US
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MarketBusinessModelSlide;
