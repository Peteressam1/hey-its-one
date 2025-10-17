import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LogoStrip from "@/components/ui/logo-strip";
import { motion } from "framer-motion";
import alyPhoto from "@/assets/team/aly.png";
import mohamedPhoto from "@/assets/team/mohamed.png";
import peterPhoto from "@/assets/team/peter.png";

const TeamSlide = () => {
  const foundingTeam = [
    {
      name: "Mohamed El Sherbini",
      role: "Co-Founder & CEO", 
      bullets: [
        "M.Sc. Electrical Engineering & Robotics, FAU",
        "Space Robotics Engineer at DLR (German Space Agency)",
        "Projects: NASA, BMW, Mercedes Benz",
        "Expertise: Sensor fusion & AI perception"
      ],
      photo: mohamedPhoto,
      logos: [
        { alt: "DLR", src: "/logos/dlr.png" },
        { alt: "NASA", src: "/logos/nasa.png" },
        { alt: "BMW", src: "/logos/bmw.webp" },
      ]
    },
    {
      name: "Aly Barakat",
      role: "Co-Founder & CTO/COO",
      bullets: [
        "M.Sc. Electrical Engineering & Robotics, TUM",
        "Experience: OnSemi, Mouser, Rohde & Schwarz",
        "Focus: Industrial automation & edge AI"
      ],
      photo: alyPhoto,
      logos: [
        { alt: "TUM", src: "/logos/tum.svg" },
        { alt: "Rohde & Schwarz", src: "/logos/rohde-schwarz.jpeg" },
        { alt: "Mouser", src: "/logos/mouser.svg" },
      ]
    },
    {
      name: "Peter Khalil", 
      role: "Co-Founder & CIO",
      bullets: [
        "M.Sc. Information Systems, Uni Bremen",
        "Experience: SAP consulting, BestSecret GmbH",
        "Focus: ERP/MES integration & enterprise analytics"
      ],
      photo: peterPhoto,
      logos: [
        { alt: "SAP", src: "/logos/sap.png" },
        { alt: "BestSecret", src: "/logos/bestsecret.gif" },
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center px-8 py-12 bg-background relative">
      {/* Unified Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern" />

      {/* Header */}
      <div className="relative z-10 text-center space-y-4 mb-12 ml-24">
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-[-0.01em]">
          <span className="text-primary">Meet the Founding Team</span>
        </h1>
        <p className="text-xl text-muted max-w-4xl mx-auto">
          Founded by experts from DLR, NASA, McKinsey, SAP, and TUM
        </p>
      </div>

      {/* Founder Cards */}
      <div className="relative z-10 grid grid-cols-3 gap-8 max-w-7xl w-full">
        {foundingTeam.map((founder, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/40 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
              {/* Photo */}
              <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center ring-4 ring-primary/30 shadow-2xl overflow-hidden">
                <img src={founder.photo} alt={founder.name} className="w-full h-full object-cover" />
              </div>

              {/* Name & Role */}
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-white mb-2">{founder.name}</h3>
                <p className="text-lg font-medium text-primary mb-4">{founder.role}</p>
                
                {/* Bullet Points */}
                <ul className="text-sm text-muted-foreground space-y-2 text-left max-w-xs mx-auto">
                  {founder.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Logos */}
              <div className="mt-auto pt-6 border-t border-border/30">
                <LogoStrip
                  logos={founder.logos}
                  maxHeight={32}
                  size="sm"
                  grayscale={false}
                  rowClassName="gap-3 justify-center"
                />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamSlide;