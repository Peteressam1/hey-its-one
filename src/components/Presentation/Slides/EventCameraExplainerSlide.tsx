import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Clock, Zap, Eye, TrendingUp } from "lucide-react";
import eventDiagram from "@/assets/event-camera-diagram.jpg";

const EventCameraExplainerSlide = () => {
  const advantages = [
    {
      icon: Clock,
      title: "Ultra Low Latency",
      value: "~1 μs",
      description: "Microsecond response time"
    },
    {
      icon: Zap,
      title: "Low Bandwidth",
      value: "90% less",
      description: "Only motion data transmitted"
    },
    {
      icon: Eye,
      title: "No Motion Blur",
      value: "Perfect clarity",
      description: "Independent pixel triggering"
    },
    {
      icon: TrendingUp,
      title: "High Dynamic Range",
      value: "120 dB",
      description: "Superior light sensitivity"
    }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center px-8 py-12 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent ml-24"
        >
          What Are Event Cameras?
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl text-muted-foreground mb-12 max-w-4xl ml-24"
        >
          Bio-inspired sensors that measure only motion in the scene
        </motion.p>

        {/* Event Camera Diagram - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              How It Works
            </h3>
            
            {/* Event Camera Diagram */}
            <div className="rounded-lg overflow-hidden bg-white p-8">
              <img
                src={eventDiagram}
                alt="Event camera vs standard camera operation comparison"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            {/* Key Insight */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
              <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-foreground font-medium text-sm">
                  💡 Each pixel operates independently and asynchronously
                </p>
              </div>
              <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-foreground font-medium text-sm">
                  ⚡ Only changes are transmitted, not full frames
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Key Advantages - Below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Key Advantages
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <motion.div
                    key={advantage.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-all"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-foreground text-sm mb-1">{advantage.title}</h4>
                      <span className="text-primary font-mono font-bold text-xs block mb-1">{advantage.value}</span>
                      <p className="text-xs text-muted-foreground">{advantage.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Card>
        </motion.div>

        {/* References */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-4"
        >
          <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/30">
            <h4 className="text-sm font-bold text-muted-foreground mb-3 uppercase tracking-wider">
              References
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                [1] Lichtsteiner, Posch, Delbruck, <em>"A 128x128 120 dB 15μs Latency Asynchronous Temporal Contrast Vision Sensor"</em>, IEEE Journal of Solid-State Circuits, 2008
              </p>
              <p>
                [2] Gallego et al., <em>"Event-based Vision: A Survey"</em>, T-PAMI, 2020
              </p>
              <p>
                [3] Scaramuzza, <em>"Event Cameras: a New Way of Sensing"</em>, CVPR Workshop, 2025
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default EventCameraExplainerSlide;
