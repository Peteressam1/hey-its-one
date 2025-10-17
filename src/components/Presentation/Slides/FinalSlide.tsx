import { motion } from "framer-motion";
import luminaLogoText from "@/assets/lumina-logo-text-2.png";
import qrCode from "@/assets/qr-lumina.png";

const FinalSlide = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center px-8 py-12 bg-background relative overflow-hidden">
      {/* Unified Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center justify-center space-y-16">
        
        {/* Lumina Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-4xl"
        >
          <img
            src={luminaLogoText}
            alt="Lumina"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Motto */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-heading text-center tracking-tight"
        >
          <span className="block text-gradient text-glow-animate">
            See the Invisible.
          </span>
          <span className="block text-gradient text-glow-animate mt-4">
            Know the Why.
          </span>
        </motion.h1>

        {/* Connect with Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Connect with Us
          </h2>
          <div className="bg-white p-4 rounded-2xl shadow-2xl">
            <img
              src={qrCode}
              alt="Lumina QR Code"
              className="w-48 h-48 md:w-56 md:h-56"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FinalSlide;
