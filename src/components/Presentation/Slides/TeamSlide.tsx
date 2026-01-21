import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LogoStrip from "@/components/ui/logo-strip";
import { motion } from "framer-motion";
import alyPhoto from "@/assets/team/aly.png";
import mohamedPhoto from "@/assets/team/mohamed.png";
import peterPhoto from "@/assets/team/peter.png";
const TeamSlide = () => {
  const foundingTeam = [{
    name: "Aly Barakat",
    role: "Co-Founder & CTO/COO",
    bullets: ["M.Sc. Electrical Engineering & Robotics, TUM", "Electrical Engineer at OnSemi"],
    photo: alyPhoto,
    logos: [{
      alt: "TUM",
      src: "/logos/tum-white.png"
    }, {
      alt: "OnSemi",
      src: "/logos/onsemi-white.png"
    }, {
      alt: "Rohde & Schwarz",
      src: "/logos/rs-white.png"
    }, {
      alt: "Mouser",
      src: "/logos/mouser-white.png"
    }]
  }, {
    name: "Mohamed El Sherbini",
    role: "Co-Founder & CEO",
    bullets: ["M.Sc. Electrical Engineering & Robotics, FAU", "Space Robotics Engineer, German Space Agency"],
    photo: mohamedPhoto,
    logos: [{
      alt: "FAU",
      src: "/logos/fau-white.png"
    }, {
      alt: "DLR",
      src: "/logos/dlr-white.png"
    }, {
      alt: "Airbus",
      src: "/logos/airbus-white.png"
    }, {
      alt: "BMW",
      src: "/logos/bmw-white-new.png"
    }]
  }, {
    name: "Peter Khalil",
    role: "Co-Founder & CIO",
    bullets: ["M.Sc Information Systems, Uni Bremen", "Ex-SAP Consultant at SAP"],
    photo: peterPhoto,
    logos: [{
      alt: "Uni Bremen",
      src: "/logos/uni-bremen-white.png"
    }, {
      alt: "SAP",
      src: "/logos/sap-white.png"
    }, {
      alt: "BestSecret",
      src: "/logos/bestsecret-white.png"
    }]
  }];
  return (
    <div 
      className="w-full h-screen flex items-center justify-center bg-background relative overflow-hidden"
      style={{ padding: '2.5cm' }}
    >
      {/* Unified Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern" />

      {/* 16:9 Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center">
        {/* Header */}
        <div className="text-center" style={{ marginBottom: '2vh' }}>
          <h1 
            className="font-bold text-primary"
            style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', marginBottom: '0.5vh' }}
          >
            Meet the Founding Team
          </h1>
          <p 
            className="text-muted-foreground"
            style={{ fontSize: 'clamp(1rem, 2vw, 2rem)' }}
          >
            Founded by experts from DLR, NASA, OnSemi, SAP, and TUM
          </p>
        </div>

        {/* Founder Cards */}
        <div className="grid grid-cols-3 w-full" style={{ gap: 'clamp(0.75rem, 1.5vw, 2rem)' }}>
          {foundingTeam.map((founder, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card 
                className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/40 transition-all duration-300 h-full flex flex-col"
                style={{ padding: 'clamp(1rem, 2vw, 2rem)' }}
              >
                {/* Photo */}
                <div 
                  className="mx-auto rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center ring-2 ring-primary/30 overflow-hidden"
                  style={{ 
                    width: 'clamp(5rem, 10vw, 10rem)', 
                    height: 'clamp(5rem, 10vw, 10rem)',
                    marginBottom: '1.5vh'
                  }}
                >
                  <img src={founder.photo} alt={founder.name} className="w-full h-full object-cover" />
                </div>

                {/* Name & Role */}
                <div className="text-center" style={{ marginBottom: '1vh' }}>
                  <h3 
                    className="font-bold text-white"
                    style={{ fontSize: 'clamp(1rem, 1.8vw, 2rem)', marginBottom: '0.25vh' }}
                  >
                    {founder.name}
                  </h3>
                  <p 
                    className="font-medium text-primary"
                    style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1.25rem)', marginBottom: '0.75vh' }}
                  >
                    {founder.role}
                  </p>
                  
                  {/* Bullet Points */}
                  <ul className="text-muted-foreground text-left max-w-xs mx-auto">
                    {founder.bullets.map((bullet, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-center"
                        style={{ gap: 'clamp(0.25rem, 0.5vw, 0.5rem)', marginBottom: '0.25vh' }}
                      >
                        <span className="text-primary shrink-0">•</span>
                        <span style={{ fontSize: 'clamp(0.6rem, 1vw, 1rem)' }}>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company Logos */}
                <div className="mt-auto border-t border-border/30" style={{ paddingTop: '1vh' }}>
                  <div className="flex items-center justify-center" style={{ gap: 'clamp(0.5rem, 1vw, 1rem)' }}>
                    {founder.logos.map((logo, idx) => (
                      <img 
                        key={idx} 
                        src={logo.src} 
                        alt={logo.alt} 
                        className="object-contain mix-blend-normal shrink-0" 
                        style={{ 
                          height: 'clamp(1rem, 1.5vw, 1.5rem)',
                          maxWidth: 'clamp(3rem, 5vw, 5rem)',
                          background: 'transparent'
                        }} 
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TeamSlide;