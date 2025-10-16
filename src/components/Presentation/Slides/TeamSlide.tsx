import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin, GraduationCap, Briefcase, Target, Star } from "lucide-react";
import LogoStrip from "@/components/ui/logo-strip";
import { motion } from "framer-motion";
import { TUMAIBadge } from "@/components/ui/tum-ai-badge";
import alyPhoto from "@/assets/team/aly.png";
import mohamedPhoto from "@/assets/team/mohamed.png";
import peterPhoto from "@/assets/team/peter.png";

const TeamSlide = () => {
  const foundingTeam = [
    {
      name: "Mohamed El Sherbini",
      role: "Co-Founder & CEO", 
      background: "PhD-level Researcher in Space Robotics (DLR)",
      skills: ["Neuromorphic algorithms", "Industrial systems", "Strategic vision"],
      credentials: []
    },
    {
      name: "Aly Barakat",
      role: "Co-Founder & COO/CTO",
      background: "Operations & technology leadership; joint work with top-tier industrial automation leaders across DACH/GCC",
      skills: ["Operations scaling", "Business strategy", "Market development"],
      credentials: []
    },
    {
      name: "Peter Essam", 
      role: "Co-Founder & CIO",
      background: "Information systems and technology infrastructure",
      skills: ["System architecture", "IT infrastructure", "Data management"],
      credentials: []
    }
  ];

  const keyHires = [
    {
      role: "Computer Vision Engineers (3)",
      location: "Egypt", 
      timeline: "0-9 months",
      requirements: [
        "Deep learning & computer vision",
        "Event-based processing knowledge",
        "Real-time systems optimization",
        "Python/C++ proficiency"
      ],
      equity: "0.2–0.5% each (ESOP)",
      priority: "Critical"
    },
    {
      role: "Full-Stack Engineers (2)",
      location: "Egypt",
      timeline: "0-9 months", 
      requirements: [
        "SaaS platform development",
        "React/Node.js expertise",
        "Cloud infrastructure (AWS/Azure)",
        "Industrial IoT integration"
      ],
      equity: "0.15–0.35% each",
      priority: "Critical"
    },
    {
      role: "Brand & Content Lead (Design + Social)",
      location: "Egypt/Germany (remote-friendly)",
      timeline: "0-3 months",
      requirements: [
        "Brand identity, UI/UX, and social creative",
        "Design system + motion snippets",
        "Content calendar and channel strategy"
      ],
      equity: "— (salary only)",
      priority: "High"
    },
    {
      role: "Sales Head",
      location: "Germany/Dubai",
      timeline: "After first pilot (6-12 months)",
      requirements: [
        "Industrial automation sales", 
        "DACH + GCC market experience",
        "Enterprise B2B relationships",
        "Technical sales capability"
      ],
      equity: "0.25–0.5% + plan",
      priority: "High"
    }
  ];

  const egyptAdvantages = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "World-Class Talent",
      description: "Cairo University, AUC, German University - top CS programs",
      metric: "15K+ CS graduates annually"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Cost Advantage",
      description: "Tiered compensation bands for Egypt-based engineers",
      metric: "Class A: $700–1,000/mo • B: $500–700 • C: $300–500"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Strategic Location", 
      description: "Bridge between Europe and GCC markets",
      metric: "3-4 hour flights to key markets"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "German Trust + Egypt Scale",
      description: "German GmbH for enterprise trust, IP protection, DACH sales. Egypt for cost-effective R&D scaling, GCC market access.",
      metric: "Best of both: Trust + Scale"
    }
  ];

  const esopDetails = {
    poolSize: "ESOP 8–12% + Advisors 2–3% (total 10–15%)",
    vestingSchedule: "4 years, 1-year cliff",
    eligibility: "Full-time employees after 90 days",
    strikes: "Fair market value at grant",
    acceleration: "Double trigger on acquisition"
  };

  const advisoryBoard = [
    {
      profile: "Industrial Automation Executive",
      value: "DACH market access, enterprise relationships",
      equity: "0.25–0.5%"
    },
    {
      profile: "Professor of Computer Vision / AI",
      value: "Academic leadership, technical guidance, talent pipeline",
      equity: "0.2–0.4%"
    },
    {
      profile: "GCC Manufacturing Executive",
      value: "Middle East market entry, customer introductions",
      equity: "0.25–0.5%"
    }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col px-6 py-4 bg-gradient-to-br from-background via-[hsl(220_34%_8%)] to-[hsl(142_69%_8%)]">
      {/* Chromatic Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      {/* Header */}
      <div className="relative z-10 text-center space-y-4 mb-8">
        <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary bg-transparent">
          ABOUT US
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.01em]">
          <span className="text-primary">Meet the Founding Team</span>
        </h1>
        <p className="text-lg text-muted max-w-4xl mx-auto">
          Founded by experts from DLR, NASA, McKinsey, SAP, and TUM • Backed by TUM AI Incubator
        </p>
        <div className="text-sm text-muted-foreground">
          www.lumina-tech.ai
        </div>
      </div>

      <div className="relative z-10 flex-1 grid grid-cols-1 gap-6">
        {/* Founding Team */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-center">Our Founders</h3>
          <div className="space-y-6 max-w-5xl mx-auto">
            {foundingTeam.map((founder, index) => (
              <Card key={index} className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center ring-4 ring-primary/30 shadow-2xl overflow-hidden flex-shrink-0">
                    {founder.name === "Mohamed El Sherbini" && (
                      <img src={mohamedPhoto} alt="Mohamed El Sherbini" className="w-full h-full object-cover" />
                    )}
                    {founder.name === "Aly Barakat" && (
                      <img src={alyPhoto} alt="Aly Barakat" className="w-full h-full object-cover" />
                    )}
                    {founder.name === "Peter Essam" && (
                      <img src={peterPhoto} alt="Peter Essam" className="w-full h-full object-cover" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-2">{`M.Sc, ${founder.name}`}</h4>
                        <p className="text-base font-medium text-primary">{founder.role}</p>
                      </div>
                      {founder.name === "Mohamed El Sherbini" && (
                        <div className="rounded-lg bg-card/50 backdrop-blur-sm border border-border/40 px-4 py-2">
                          <LogoStrip
                            logos={[
                              { alt: "DLR", src: "/logos/dlr.png", height: 36 },
                              { alt: "NASA", src: "/logos/nasa.png", height: 34 },
                              { alt: "DeepMind", src: "/logos/deepmind-small.webp", height: 32 },
                              { alt: "Airbus Defence & Space", src: "/logos/airbus.jpeg", height: 32 },
                            ]}
                            maxHeight={38}
                            size="md"
                            grayscale={false}
                            rowClassName="gap-x-4 gap-y-2"
                          />
                        </div>
                      )}
                      {founder.name === "Aly Barakat" && (
                        <div className="rounded-lg bg-card/50 backdrop-blur-sm border border-border/40 px-4 py-2">
                          <LogoStrip
                            logos={[
                              { alt: "TUM", src: "/logos/tum.svg" },
                              { alt: "McKinsey & Company", src: "/logos/mckinsey.png" },
                              { alt: "Rohde & Schwarz", src: "/logos/rohde-schwarz.jpeg" },
                              { alt: "Mouser Electronics", src: "/logos/mouser.svg" },
                            ]}
                            maxHeight={32}
                            size="md"
                            grayscale={false}
                            rowClassName="gap-x-4 gap-y-2"
                          />
                        </div>
                      )}
                      {founder.name === "Peter Essam" && (
                        <div className="rounded-lg bg-card/50 backdrop-blur-sm border border-border/40 px-4 py-2">
                          <LogoStrip
                            logos={[
                              { alt: "SAP", src: "/logos/sap.png" },
                              { alt: "BestSecret", src: "/logos/bestsecret.gif" },
                            ]}
                            maxHeight={28}
                            size="md"
                            grayscale={false}
                            rowClassName="gap-x-4 gap-y-2"
                          />
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted mb-4">{founder.background}</p>
                    <div className="grid grid-cols-3 gap-3">
                      {founder.skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-sm text-center py-2">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Strategic Locations */}
        <div className="max-w-5xl mx-auto w-full">
          <h3 className="text-3xl font-bold mb-6 text-center">Our Strategic Locations</h3>
          <div className="grid grid-cols-2 gap-6">{egyptAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-6 text-center hover:scale-105 transition-all duration-300 h-full">
                    <div className="text-primary mb-4 flex justify-center">
                      {advantage.icon}
                    </div>
                    <h4 className="font-bold text-lg mb-3">{advantage.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{advantage.description}</p>
                    <Badge variant="outline" className="text-sm">
                      {advantage.metric}
                    </Badge>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* TUM AI Incubator Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="max-w-5xl mx-auto w-full"
          >
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <div className="space-y-4">
                <TUMAIBadge variant="prominent" />
                <div className="text-sm text-muted-foreground space-y-2">
                  <p><strong className="text-foreground">Benefits:</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>• Workspace at TUM AI headquarters in Munich</li>
                    <li>• Weekly sessions with experienced founders</li>
                    <li>• Direct access to investor network and introductions</li>
                    <li>• €100K+ in cloud credits and tools</li>
                    <li>• Access to Munich innovation ecosystem</li>
                  </ul>
                </div>
                <div className="text-xs text-muted-foreground pt-2 border-t border-border/30">
                  TUM AI is Germany's leading student-run AI incubator, backed by Technical University of Munich
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TeamSlide;