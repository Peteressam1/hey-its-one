import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Handshake, Shield, GraduationCap, Banknote } from "lucide-react";

const TractionFundingSlide = () => {
  const traction = [
    {
      icon: Handshake,
      title: "Global F&B Manufacturer",
      description: "60% of jam & honey supply in MENA",
      highlight: "35-50K€ ARR",
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
          style={{ marginBottom: '5vh' }}
        >
          <h1 
            className="font-bold text-foreground"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5.5rem)', marginBottom: '1vh' }}
          >
            Early Traction & Funding
          </h1>
          <p 
            className="text-muted-foreground"
            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.75rem)' }}
          >
            Building momentum with strategic partnerships and investment
          </p>
        </motion.div>

        {/* Traction Cards - 2x2 Grid */}
        <div 
          className="grid grid-cols-2 grid-rows-2 items-stretch" 
          style={{ gap: '2vw', maxWidth: '95%', margin: '0 auto', flex: 1, maxHeight: '60vh' }}
        >
          {traction.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex h-full"
              >
                <Card 
                  className="w-full h-full flex items-center transition-all duration-300 backdrop-blur-sm bg-accent/10 border-2 border-accent/60 shadow-[0_0_25px_hsl(var(--accent)/0.25)] hover:shadow-[0_0_35px_hsl(var(--accent)/0.35)]"
                  style={{ padding: '2.5vh 2vw', gap: '1.5vw' }}
                >
                  <div 
                    className="rounded-xl bg-accent/20 border border-accent/50"
                    style={{ padding: '1.5vh' }}
                  >
                    <Icon style={{ width: 'clamp(2rem, 3vw, 4rem)', height: 'clamp(2rem, 3vw, 4rem)' }} className="text-accent" />
                  </div>
                  
                  <div className="flex-1 min-w-0 flex flex-col justify-start">
                    <span 
                      className="font-bold text-foreground block w-full whitespace-nowrap"
                      style={{ fontSize: 'clamp(1.3rem, 2.2vw, 2.5rem)' }}
                    >
                      {item.title}
                    </span>
                    <p 
                      className="text-muted-foreground"
                      style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.5rem)', marginTop: '0.3vh' }}
                    >
                      {item.description}
                    </p>
                    <div className="flex items-center" style={{ marginTop: '0.3vh', gap: '0.8vw' }}>
                      {item.highlight && (
                        <span 
                          className="inline-block font-bold text-primary bg-primary/15 border border-primary/40 rounded-md"
                          style={{ 
                            fontSize: 'clamp(1.1rem, 1.8vw, 2rem)', 
                            padding: '0.5vh 1vw',
                          }}
                        >
                          {item.highlight}
                        </span>
                      )}
                      <span 
                        className="font-semibold rounded-full bg-accent/20 text-accent border border-accent/50 whitespace-nowrap"
                        style={{ padding: '0.6vh 1.2vw', fontSize: 'clamp(0.9rem, 1.4vw, 1.5rem)' }}
                      >
                        {item.type}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TractionFundingSlide;
