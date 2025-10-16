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
      background: "PhD-level Researcher in Space Robotics (DLR)",
      photo: mohamedPhoto,
      logos: [
        { alt: "DLR", src: "/logos/dlr.png" },
        { alt: "NASA", src: "/logos/nasa.png" },
        { alt: "DeepMind", src: "/logos/deepmind-small.webp" },
        { alt: "Airbus Defence & Space", src: "/logos/airbus.jpeg" },
      ]
    },
    {
      name: "Aly Barakat",
      role: "Co-Founder & COO/CTO",
      background: "Operations & technology leadership; joint work with top-tier industrial automation leaders",
      photo: alyPhoto,
      logos: [
        { alt: "TUM", src: "/logos/tum.svg" },
        { alt: "McKinsey", src: "/logos/mckinsey.png" },
        { alt: "Rohde & Schwarz", src: "/logos/rohde-schwarz.jpeg" },
        { alt: "Mouser", src: "/logos/mouser.svg" },
      ]
    },
    {
      name: "Peter Essam", 
      role: "Co-Founder & CIO",
      background: "Information systems and technology infrastructure",
      photo: peterPhoto,
      logos: [
        { alt: "SAP", src: "/logos/sap.png" },
        { alt: "BestSecret", src: "/logos/bestsecret.gif" },
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center px-8 py-12 bg-gradient-to-br from-background via-[hsl(220_34%_8%)] to-[hsl(142_69%_8%)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center space-y-4 mb-12">
        <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary bg-transparent">
          ABOUT US
        </Badge>
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
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
              {/* Photo */}
              <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center ring-4 ring-primary/30 shadow-2xl overflow-hidden">
                <img src={founder.photo} alt={founder.name} className="w-full h-full object-cover" />
              </div>

              {/* Name & Role */}
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-white mb-2">M.Sc. {founder.name}</h3>
                <p className="text-lg font-medium text-primary mb-3">{founder.role}</p>
                <p className="text-sm text-muted">{founder.background}</p>
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