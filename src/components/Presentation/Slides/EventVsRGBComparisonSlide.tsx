import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const EventVsRGBComparisonSlide = () => {
  const comparisonData = [
    {
      feature: "Motion Blur",
      rgb: { status: "fail", text: "Significant blur in fast motion" },
      event: { status: "pass", text: "Zero motion blur" }
    },
    {
      feature: "Latency",
      rgb: { status: "fail", text: "30-60ms (30-60 FPS)" },
      event: { status: "pass", text: "~1μs response time" }
    },
    {
      feature: "Dynamic Range",
      rgb: { status: "fail", text: "60-70 dB" },
      event: { status: "pass", text: "120+ dB" }
    },
    {
      feature: "Data Efficiency",
      rgb: { status: "fail", text: "Sends full frames continuously" },
      event: { status: "pass", text: "Only sends changes (90% reduction)" }
    },
    {
      feature: "Power Consumption",
      rgb: { status: "fail", text: "High - constant processing" },
      event: { status: "pass", text: "Low - sparse data" }
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
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Badge variant="outline" className="text-sm px-4 py-2 bg-card/50 backdrop-blur-sm">
            REAL-WORLD DEMONSTRATION
          </Badge>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent"
        >
          Event vs RGB Cameras
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl text-muted-foreground mb-12 max-w-4xl"
        >
          Industrial application: High-speed manufacturing inspection
        </motion.p>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Boeing Manufacturing Line - Real Footage
            </h3>
            
            {/* Video Container */}
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-black">
              <video
                className="w-full h-full object-contain"
                controls
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/lovable-uploads/8b333b2b-5ac1-4248-8c5d-43dfce05c0f7.png" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-foreground font-medium text-sm">
                ⚡ Event cameras capture clear images even at extreme speeds where RGB cameras show only blur
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Technical Comparison
            </h3>
            
            <div className="overflow-hidden rounded-lg border border-border/50">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50 border-b border-border/50">
                    <th className="text-left p-4 font-bold text-foreground">Feature</th>
                    <th className="text-center p-4 font-bold text-muted-foreground">RGB Camera</th>
                    <th className="text-center p-4 font-bold text-primary">Event Camera</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <motion.tr
                      key={row.feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="border-b border-border/30 hover:bg-muted/20 transition-colors"
                    >
                      <td className="p-4 font-semibold text-foreground">{row.feature}</td>
                      <td className="p-4">
                        <div className="flex items-center justify-center gap-2">
                          <X className="w-5 h-5 text-destructive shrink-0" />
                          <span className="text-sm text-muted-foreground">{row.rgb.text}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-center gap-2">
                          <Check className="w-5 h-5 text-primary shrink-0" />
                          <span className="text-sm text-foreground font-medium">{row.event.text}</span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default EventVsRGBComparisonSlide;
