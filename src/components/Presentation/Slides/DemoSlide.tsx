import { motion } from "framer-motion";

const DemoSlide = () => {
  return (
    <div className="relative h-screen w-full bg-background flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center"
      >
        <h1 className="text-9xl md:text-[12rem] font-bold text-foreground tracking-tight">
          DEMO
        </h1>
      </motion.div>
    </div>
  );
};

export default DemoSlide;
