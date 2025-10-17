import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import motionBlurImg from "@/assets/challenges/Motion_Blur.png";
import dynamicRangeImg from "@/assets/challenges/Dynamic_Range.png";
import bandwidthLatencyImg from "@/assets/challenges/BandwidthLatencyTrade.png";

const OpenChallengesSlide = () => {
  const challenges = [
    {
      title: "Motion Blur",
      image: motionBlurImg,
      description: "Fast motion causes blur in frame-based cameras"
    },
    {
      title: "Dynamic Range",
      image: dynamicRangeImg,
      description: "Limited ability to capture both bright and dark areas"
    },
    {
      title: "Bandwidth-Latency Tradeoff",
      image: bandwidthLatencyImg,
      description: "Higher resolution means more data and slower processing"
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
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent ml-24"
        >
          Open Challenges in Computer Vision
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl text-muted-foreground mb-16 max-w-4xl"
        >
          The past 60 years of research have been devoted to frame-based cameras but they are not good enough
        </motion.p>

        {/* Challenge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
            >
              <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden bg-muted/30">
                  <img
                    src={challenge.image}
                    alt={challenge.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {challenge.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpenChallengesSlide;
