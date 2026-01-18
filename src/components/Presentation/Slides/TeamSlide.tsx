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
  return <div className="w-full min-h-screen flex flex-col justify-center items-center px-8 py-12 bg-background relative">
      {/* Unified Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern" />

      {/* Header */}
      <div className="relative z-10 text-center space-y-5 mb-20 -mt-8">
        <h1 className="text-6xl md:text-7xl font-bold text-white tracking-[-0.01em]">
          <span className="text-primary text-8xl">Meet the Founding Team</span>
        </h1>
        <p className="text-muted max-w-4xl mx-auto text-3xl">
          Founded by experts from DLR, NASA, OnSemi, SAP, and TUM
        </p>
      </div>

      {/* Founder Cards */}
      <div className="relative z-10 grid grid-cols-3 gap-8 max-w-7xl w-full">
        {foundingTeam.map((founder, index) => <motion.div key={index} initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.2,
        duration: 0.6
      }}>
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-border hover:border-primary/40 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
              {/* Photo */}
              <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center ring-4 ring-primary/30 shadow-2xl overflow-hidden">
                <img src={founder.photo} alt={founder.name} className="w-full h-full object-cover" />
              </div>

              {/* Name & Role */}
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-white mb-3">{founder.name}</h3>
                <p className="text-xl font-medium text-primary mb-5">{founder.role}</p>
                
                {/* Bullet Points */}
                <ul className="text-base text-muted-foreground space-y-3 text-left max-w-xs mx-auto">
                  {founder.bullets.map((bullet, idx) => <li key={idx} className="flex items-center gap-3">
                      <span className="text-primary shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>)}
                </ul>
              </div>

              {/* Company Logos */}
              <div className="mt-auto pt-8 border-t border-border/30">
                <div className="flex items-center justify-center gap-4">
                  {founder.logos.map((logo, idx) => <img key={idx} src={logo.src} alt={logo.alt} className="h-6 max-w-[70px] object-contain mix-blend-normal shrink-0" style={{
                background: 'transparent'
              }} />)}
                </div>
              </div>
            </Card>
          </motion.div>)}
      </div>
    </div>;
};
export default TeamSlide;