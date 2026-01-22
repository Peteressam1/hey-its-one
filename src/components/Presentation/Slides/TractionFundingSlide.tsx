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
                  className="w-full h-full grid transition-all duration-300 backdrop-blur-sm bg-accent/10 border-2 border-accent/60 shadow-[0_0_25px_hsl(var(--accent)/0.25)] hover:shadow-[0_0_35px_hsl(var(--accent)/0.35)]"
                  style={{ 
                    padding: '2vh 2vw', 
                    gridTemplateColumns: 'auto 1fr auto',
                    alignItems: 'center',
                    gap: '1.5vw'
                  }}
                >
                  {/* Icon - Fixed width */}
                  <div 
                    className="rounded-xl bg-accent/20 border border-accent/50 flex items-center justify-center"
                    style={{ padding: '1.2vh', width: 'clamp(3.5rem, 5vw, 6rem)', height: 'clamp(3.5rem, 5vw, 6rem)' }}
                  >
                    <Icon style={{ width: 'clamp(1.8rem, 2.5vw, 3.5rem)', height: 'clamp(1.8rem, 2.5vw, 3.5rem)' }} className="text-accent" />
                  </div>
                  
                  {/* Content - Flexible width with consistent structure */}
                  <div className="flex flex-col justify-center" style={{ minHeight: 'clamp(4rem, 8vh, 8rem)' }}>
                    <span 
                      className="font-bold text-foreground block leading-tight"
                      style={{ fontSize: 'clamp(1.1rem, 1.8vw, 2rem)', marginBottom: '0.3vh' }}
                    >
                      {item.title}
                    </span>
                    <p 
                      className="text-muted-foreground leading-snug"
                      style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1.3rem)' }}
                    >
                      {item.description}
                    </p>
                    {item.highlight && (
                      <span 
                        className="inline-block font-bold text-primary bg-primary/15 border border-primary/40 rounded-md self-start"
                        style={{ 
                          fontSize: 'clamp(0.9rem, 1.4vw, 1.5rem)', 
                          padding: '0.3vh 0.8vw',
                          marginTop: '0.5vh'
                        }}
                      >
                        {item.highlight}
                      </span>
                    )}
                  </div>

                  {/* Badge - Fixed width */}
                  <span 
                    className="font-semibold rounded-full bg-accent/20 text-accent border border-accent/50 text-center whitespace-nowrap"
                    style={{ padding: '0.5vh 1vw', fontSize: 'clamp(0.7rem, 1vw, 1rem)', minWidth: 'clamp(5rem, 7vw, 8rem)' }}
                  >
                    {item.type}
                  </span>
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
