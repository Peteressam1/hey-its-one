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
      type: "Partnership",
      highlight: "35-50K€ ARR"
    },
    {
      icon: Shield,
      title: "Ministry of Defence Egypt",
      description: "Optronics sector collaboration",
      type: "Partnership",
      highlight: null
    },
    {
      icon: GraduationCap,
      title: "FAPS FAU",
      description: "University research partnership",
      type: "Partnership",
      highlight: null
    },
    {
      icon: Banknote,
      title: "€300K Angel Investment",
      description: "Secured funding",
      type: "Investment",
      highlight: null
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

      {/* 16:9 Aspect Ratio Container that scales proportionally */}
      <div 
        className="relative z-10 flex flex-col"
        style={{
          width: 'min(100vw, 177.78vh)', // 16:9 = 1.7778
          height: 'min(56.25vw, 100vh)', // 9:16 = 0.5625
          padding: '2.5vh 3vw',
        }}
      >
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '2vh' }}
        >
          <h1 
            className="font-bold text-foreground"
            style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', marginBottom: '1vh' }}
          >
            $90B Opportunity & Early Traction
          </h1>
          <div className="flex flex-wrap justify-center" style={{ gap: '1vw' }}>
            <span 
              className="rounded-full bg-primary/10 border border-primary/30 font-medium text-foreground"
              style={{ padding: '0.5vh 1.5vw', fontSize: 'clamp(0.75rem, 1.2vw, 1.25rem)' }}
            >
              Machine Vision: $21B → $41B by 2030 | 13% CAGR
            </span>
            <span 
              className="rounded-full bg-accent/10 border border-accent/30 font-medium text-foreground"
              style={{ padding: '0.5vh 1.5vw', fontSize: 'clamp(0.75rem, 1.2vw, 1.25rem)' }}
            >
              AI in Manufacturing: $6B → $48B | 46% CAGR
            </span>
          </div>
        </motion.div>

        {/* Business Model Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: '2vh' }}
        >
          <div className="flex items-center" style={{ gap: '0.5vw', marginBottom: '1vh' }}>
            <div 
              className="rounded-lg bg-primary/10 border border-primary/30"
              style={{ padding: '0.5vh' }}
            >
              <DollarSign style={{ width: 'clamp(1rem, 1.5vw, 1.5rem)', height: 'clamp(1rem, 1.5vw, 1.5rem)' }} className="text-primary" />
            </div>
            <h2 
              className="font-bold text-foreground"
              style={{ fontSize: 'clamp(1.25rem, 2vw, 2rem)' }}
            >
              Business Model
            </h2>
          </div>
          
          <div className="grid grid-cols-3" style={{ gap: '1vw' }}>
            {revenueStreams.map((stream, index) => {
              const Icon = stream.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Card 
                    className="bg-primary/5 backdrop-blur-sm border border-primary/30 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300"
                    style={{ padding: '1.5vh 1vw' }}
                  >
                    <div className="flex items-center" style={{ gap: '0.8vw' }}>
                      <div 
                        className="rounded-lg bg-primary/15 border border-primary/30"
                        style={{ padding: '0.6vh' }}
                      >
                        <Icon style={{ width: 'clamp(1rem, 1.3vw, 1.5rem)', height: 'clamp(1rem, 1.3vw, 1.5rem)' }} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 
                          className="font-bold text-foreground"
                          style={{ fontSize: 'clamp(1rem, 1.4vw, 1.5rem)' }}
                        >
                          {stream.title}
                        </h3>
                        <p 
                          className="text-muted-foreground"
                          style={{ fontSize: 'clamp(0.7rem, 1vw, 1rem)' }}
                        >
                          {stream.subtitle}
                        </p>
                      </div>
                      <span 
                        className="rounded-full bg-primary/10 text-primary font-semibold border border-primary/30"
                        style={{ padding: '0.3vh 0.8vw', fontSize: 'clamp(0.6rem, 0.9vw, 0.9rem)' }}
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

        {/* Traction & Funding Section */}
        <div className="flex-1 flex flex-col">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center"
            style={{ gap: '0.6vw', marginBottom: '1vh' }}
          >
            <div 
              className="rounded-lg bg-accent/15 border border-accent/40"
              style={{ padding: '0.5vh' }}
            >
              <TrendingUp style={{ width: 'clamp(1.2rem, 1.8vw, 1.8rem)', height: 'clamp(1.2rem, 1.8vw, 1.8rem)' }} className="text-accent" />
            </div>
            <h2 
              className="font-bold text-foreground"
              style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2.5rem)' }}
            >
              Traction & Funding
            </h2>
          </motion.div>

          {/* Traction Cards - 2x2 Grid */}
          <div className="grid grid-cols-2 flex-1" style={{ gap: '1vw' }}>
            {traction.map((item, index) => {
              const Icon = item.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex"
                >
                  <Card 
                    className="w-full flex items-center transition-all duration-300 backdrop-blur-sm bg-accent/10 border-2 border-accent/60 shadow-[0_0_25px_hsl(var(--accent)/0.25)] hover:shadow-[0_0_35px_hsl(var(--accent)/0.35)]"
                    style={{ padding: '1.5vh 1.2vw', gap: '1vw' }}
                  >
                    <div 
                      className="rounded-xl bg-accent/20 border border-accent/50"
                      style={{ padding: '1vh' }}
                    >
                      <Icon style={{ width: 'clamp(1.5rem, 2.5vw, 3rem)', height: 'clamp(1.5rem, 2.5vw, 3rem)' }} className="text-accent" />
                    </div>
                    
                    <div className="flex-1">
                      <span 
                        className="font-bold text-foreground block"
                        style={{ fontSize: 'clamp(1.1rem, 1.8vw, 2rem)' }}
                      >
                        {item.title}
                      </span>
                      <p 
                        className="text-muted-foreground"
                        style={{ fontSize: 'clamp(0.8rem, 1.2vw, 1.3rem)' }}
                      >
                        {item.description}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span 
                        className="font-semibold rounded-full bg-accent/20 text-accent border border-accent/50"
                        style={{ padding: '0.5vh 1vw', fontSize: 'clamp(0.7rem, 1vw, 1rem)' }}
                      >
                        {item.type}
                      </span>
                      {item.highlight && (
                        <span 
                          className="font-bold rounded-full bg-primary/30 text-primary border border-primary/60"
                          style={{ padding: '0.4vh 0.8vw', fontSize: 'clamp(0.65rem, 0.9vw, 0.9rem)' }}
                        >
                          {item.highlight}
                        </span>
                      )}
                    </div>
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
          className="text-center"
          style={{ marginTop: '1.5vh' }}
        >
          <p 
            className="text-muted-foreground"
            style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.5rem)' }}
          >
            <span className="text-primary font-semibold">Vertical:</span> Electronics → F&B → Automotive
            <span style={{ margin: '0 1.5vw' }}>|</span>
            <span className="text-accent font-semibold">Horizontal:</span> EU → MENA → US
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveMarketSlide;
