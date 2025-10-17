import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Target } from "lucide-react";
import { motion } from "framer-motion";

const CompetitionSlide = () => {
  const competitors = [
    {
      name: "Lumina Tech",
      hardware: false,
      sdk: true,
      integrator: true,
      fullStackPaaS: true,
      eventExpertise: true,
      mesErp: true,
      position: "Full-stack event-based PaaS"
    },
    {
      name: "Cognex",
      hardware: true,
      sdk: true,
      integrator: false,
      fullStackPaaS: false,
      eventExpertise: false,
      mesErp: true,
      position: "Hardware + basic software"
    },
    {
      name: "Instrumental",
      hardware: false,
      sdk: true,
      integrator: true,
      fullStackPaaS: false,
      eventExpertise: false,
      mesErp: true,
      position: "AI QC platform (frame-based)"
    },
    {
      name: "Landing AI",
      hardware: false,
      sdk: true,
      integrator: true,
      fullStackPaaS: false,
      eventExpertise: false,
      mesErp: true,
      position: "Vision platform + services"
    },
    {
      name: "Elementary",
      hardware: true,
      sdk: true,
      integrator: true,
      fullStackPaaS: false,
      eventExpertise: false,
      mesErp: true,
      position: "Edge cameras + AI (frame-based)"
    },
    {
      name: "V7/Matroid",
      hardware: false,
      sdk: true,
      integrator: true,
      fullStackPaaS: false,
      eventExpertise: false,
      mesErp: false,
      position: "Labeling + model ops (frame)"
    },
    {
      name: "Keyence", 
      hardware: true,
      sdk: false,
      integrator: true,
      fullStackPaaS: false,
      eventExpertise: false,
      mesErp: true,
      position: "Closed hardware ecosystem"
    },
    {
      name: "Basler",
      hardware: true,
      sdk: true,
      integrator: false,
      fullStackPaaS: false,
      eventExpertise: false,
      mesErp: false,
      position: "Camera hardware focus"
    },
    {
      name: "Prophesee",
      hardware: true,
      sdk: true,
      integrator: false,
      fullStackPaaS: false,
      eventExpertise: true,
      mesErp: false,
      position: "Event sensors + SDK (Partner)"
    }
  ];

  const categories = ["Hardware", "SDK", "Integrator", "Full-Stack PaaS", "Event Expertise", "MES/ERP"];

  return (
    <div className="w-full min-h-screen flex flex-col px-8 py-6 bg-gradient-to-br from-background via-[hsl(220_34%_8%)] to-[hsl(287_77%_8%)]">
      {/* Dynamic Chromatic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/8 via-transparent to-secondary/10"></div>
        <div className="absolute top-1/6 left-1/4 w-96 h-96 bg-primary/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-88 h-88 bg-secondary/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-2/3 w-64 h-64 bg-accent/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      </div>
      
      {/* Header */}
      <div className="relative z-10 text-center space-y-4 mb-8 ml-24">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.01em]">
          <span className="text-primary">Partners, Not Competitors:</span> We Layer SaaS on Hardware
        </h1>
        <p className="text-lg text-muted max-w-4xl mx-auto">
          Prophesee sells sensors; they don't integrate into plant MES/QA workflows. We're the SaaS layer + integrator.
        </p>
      </div>

      <div className="relative z-10 flex-1 max-w-6xl mx-auto">
        {/* Competitive Matrix - Full Width */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">Competitive Matrix</h3>
          <Card className="p-8 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg">
            <div className="space-y-4">
              {/* Header */}
              <div className="grid grid-cols-7 gap-2 pb-3 border-b border-border">
                <div className="text-sm font-semibold text-white">Company</div>
                {categories.map((category, index) => (
                  <div key={index} className="text-xs font-semibold text-muted text-center">
                    {category}
                  </div>
                ))}
              </div>
              
              {/* Rows */}
              {competitors.map((competitor, index) => {
                const isLumina = competitor.name === "Lumina Tech";
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`grid grid-cols-7 gap-2 py-3 rounded-lg relative ${
                      isLumina
                        ? 'bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 border-2 border-primary/40 shadow-lg shadow-primary/20' 
                        : 'py-2'
                    }`}
                  >
                    {/* Dynamic light rays for Lumina */}
                    {isLumina && (
                      <>
                        <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
                          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/60 via-primary/20 to-transparent animate-pulse"></div>
                          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-primary/80 via-primary/30 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-primary/60 via-primary/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 blur-sm rounded-lg animate-pulse"></div>
                      </>
                    )}
                    
                    <div className={`text-sm font-semibold relative z-10 ${
                      isLumina ? 'text-primary text-base' : 'text-white text-sm'
                    }`}>
                      {competitor.name}
                    </div>
                    <div className="flex justify-center relative z-10">
                      {competitor.hardware ? 
                        <CheckCircle className={`w-4 h-4 ${isLumina ? 'text-primary' : 'text-primary'}`} /> : 
                        <Circle className="w-4 h-4 text-muted/50" />
                      }
                    </div>
                    <div className="flex justify-center relative z-10">
                      {competitor.sdk ? 
                        <CheckCircle className={`w-4 h-4 ${isLumina ? 'text-primary' : 'text-primary'}`} /> : 
                        <Circle className="w-4 h-4 text-muted/50" />
                      }
                    </div>
                    <div className="flex justify-center relative z-10">
                      {competitor.integrator ? 
                        <CheckCircle className={`w-4 h-4 ${isLumina ? 'text-primary' : 'text-primary'}`} /> : 
                        <Circle className="w-4 h-4 text-muted/50" />
                      }
                    </div>
                    <div className="flex justify-center relative z-10">
                      {competitor.fullStackPaaS ? 
                        <CheckCircle className={`w-4 h-4 ${isLumina ? 'text-primary' : 'text-primary'}`} /> : 
                        <Circle className="w-4 h-4 text-muted/50" />
                      }
                    </div>
                    <div className="flex justify-center relative z-10">
                      {competitor.eventExpertise ? 
                        <CheckCircle className={`w-4 h-4 ${isLumina ? 'text-primary' : 'text-primary'}`} /> : 
                        <Circle className="w-4 h-4 text-muted/50" />
                      }
                    </div>
                    <div className="flex justify-center relative z-10">
                      {competitor.mesErp ? 
                        <CheckCircle className={`w-4 h-4 ${isLumina ? 'text-primary' : 'text-primary'}`} /> : 
                        <Circle className="w-4 h-4 text-muted/50" />
                      }
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-4 text-xs text-muted text-center">
              Based on public docs as of 2025; scope = industrial QA deployments
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="relative z-10 mt-8"
      >
        <Card className="p-6 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg text-center">
          <p className="text-lg text-white font-medium">
            <span className="text-primary font-bold">What We Do That They Don't:</span> Event-first SDK that integrates QC data into MES/ERP workflows.
          </p>
        </Card>
      </motion.div>
    </div>
  );
};

export default CompetitionSlide;
