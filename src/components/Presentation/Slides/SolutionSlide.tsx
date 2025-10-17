import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Database, Cpu, Shield } from "lucide-react";
import { motion } from "framer-motion";

const SolutionSlide = () => {
  const realWorldApplications = [
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "High-Speed Counting",
      description: "Count 500+ objects/second with >99% accuracy at high line speeds",
      industries: "Pharmaceutical • F&B • Electronics",
      metric: "500+ obj/s @ >99%",
      color: "bg-card/80 border-border"
    },
    {
      icon: <Database className="w-10 h-10 text-accent" />,
      title: "Surface Defect Detection", 
      description: "Detect holes, spots, scratches at high speeds - no complex lighting needed",
      industries: "Glass • Film • Sheet Metal",
      metric: "High-speed detection",
      color: "bg-card/80 border-border"
    },
    {
      icon: <Cpu className="w-10 h-10 text-warning" />,
      title: "Particle Size Monitoring",
      description: "Real-time distribution analysis for perfect recipe mix composition",
      industries: "Milled Products • Plastics • Powders",
      metric: "Instant feedback",
      color: "bg-card/80 border-border"
    },
    {
      icon: <Shield className="w-10 h-10 text-accent" />,
      title: "Predictive Maintenance",
      description: "Motion analysis with microsecond precision for equipment health monitoring",
      industries: "Equipment Health • Kinematic Monitoring",
      metric: "1000x faster response",
      color: "bg-card/80 border-border"
    }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col px-8 py-6 bg-background relative">
      {/* Unified Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern" />
      
      {/* Header */}
      <div className="relative z-10 text-center space-y-4 mb-6 ml-24">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.01em]">
          <span className="text-primary">Proven Applications</span> in Industry
        </h1>
        <p className="text-lg text-muted max-w-4xl mx-auto">
          Real-world deployments showing the power of event-based vision technology
        </p>
      </div>

      {/* Industrial Video Demos - 3 Videos in Row */}
      <div className="relative z-10 max-w-7xl mx-auto mb-8 mt-16">
        <div className="grid grid-cols-3 gap-8">
          {/* Event-Based Demo 1 */}
          <Card className="p-4 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl shadow-lg">
            <div className="aspect-[16/9] rounded-lg overflow-hidden mb-3">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/AuUijt8D2tU?autoplay=1&mute=1&controls=1&showinfo=0&modestbranding=1&loop=1&playlist=AuUijt8D2tU"
                title="Event-Based Vision Demo"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="text-center">
              <h4 className="text-base font-bold text-white mb-2">Cable Velocity and Slippage</h4>
              <p className="text-sm text-muted mb-3">Real-time cable monitoring</p>
              <div className="flex gap-2 justify-center">
                <Badge variant="secondary" className="bg-primary text-white border-0 text-sm px-3 py-1">Real-time</Badge>
                <Badge variant="secondary" className="bg-accent text-white border-0 text-sm px-3 py-1">High-speed</Badge>
              </div>
            </div>
          </Card>

          {/* Event-Based Demo 2 */}
          <Card className="p-4 bg-card/80 backdrop-blur-sm border border-accent/20 rounded-xl shadow-lg">
            <div className="aspect-[16/9] rounded-lg overflow-hidden mb-3">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/5plQO__oeL4?start=25&autoplay=1&mute=1&controls=1&showinfo=0&modestbranding=1&loop=1&playlist=5plQO__oeL4"
                title="Event Camera Applications"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="text-center">
              <h4 className="text-base font-bold text-white mb-2">HIGH-SPEED COUNTING</h4>
              <p className="text-sm text-muted mb-3">1,000+ objects/second</p>
              <div className="flex gap-2 justify-center">
                <Badge variant="secondary" className="bg-accent text-white border-0 text-sm px-3 py-1">1K+ obj/s</Badge>
                <Badge variant="secondary" className="bg-warning text-white border-0 text-sm px-3 py-1">Precision</Badge>
              </div>
            </div>
          </Card>

          {/* Event-Based Demo 3 */}
          <Card className="p-4 bg-card/80 backdrop-blur-sm border border-warning/20 rounded-xl shadow-lg">
            <div className="aspect-[16/9] rounded-lg overflow-hidden mb-3">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/PbSVm4fix0c?start=5&autoplay=1&mute=1&controls=1&showinfo=0&modestbranding=1&loop=1&playlist=PbSVm4fix0c"
                title="Event Vision Technology"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="text-center">
              <h4 className="text-base font-bold text-white mb-2">Particle Size Monitoring</h4>
              <p className="text-sm text-muted mb-3">Real-time distribution analysis</p>
              <div className="flex gap-2 justify-center">
                <Badge variant="secondary" className="bg-warning text-white border-0 text-sm px-3 py-1">Real-time</Badge>
                <Badge variant="secondary" className="bg-primary text-white border-0 text-sm px-3 py-1">μs latency</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>


      {/* Bottom Section: Other Applications */}
      <div className="relative z-10 flex-1 max-w-4xl mx-auto">
        {/* Other Market Applications */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white text-center">Beyond Manufacturing</h2>
          
          {/* Other Industries */}
          <Card className="p-4 bg-card/80 backdrop-blur-sm border border-accent/20 rounded-xl shadow-lg">
            <h4 className="text-lg font-bold mb-3 text-white text-center">Market Expansion</h4>
            <div className="grid grid-cols-2 gap-3 text-sm text-center">
              <div className="p-3 bg-accent/10 rounded-lg text-accent font-medium">
                <div className="text-base mb-1">🛡️ Defense</div>
                <div className="text-xs text-muted">Surveillance & Tracking</div>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg text-primary font-medium">
                <div className="text-base mb-1">🚀 Space</div>
                <div className="text-xs text-muted">Orbital Debris Monitoring</div>
              </div>
              <div className="p-3 bg-warning/10 rounded-lg text-warning font-medium">
                <div className="text-base mb-1">🏥 Medical</div>
                <div className="text-xs text-muted">Surgical Precision</div>
              </div>
              <div className="p-3 bg-accent/10 rounded-lg text-accent font-medium">
                <div className="text-base mb-1">🚗 Automotive</div>
                <div className="text-xs text-muted">ADAS & Robotics</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SolutionSlide;