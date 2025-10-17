import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import icebergImage from "@/assets/quality-control-iceberg.webp";

const IcebergSlide = () => {
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
      <div className="relative z-10 w-full max-w-7xl space-y-8">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center ml-24"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
            The Hidden Complexity
          </h1>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
            What people see vs. what they don't see
          </p>
        </motion.div>

        {/* Iceberg Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex justify-center">
              <img
                src={icebergImage}
                alt="Quality control challenges iceberg - what people see vs what they don't see"
                className="w-full max-w-5xl h-auto rounded-2xl"
              />
            </div>
          </Card>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8"
        >
          <Card className="p-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20">
            <p className="text-xl text-foreground font-medium">
              Most of the complexity lies beneath the surface...
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default IcebergSlide;
