import { motion } from "framer-motion";
import luminaLogoText from "@/assets/lumina-logo-text-2.png";
import qrCode from "@/assets/qr-lumina.png";
const FinalSlide = () => {
  return <div className="w-full min-h-screen flex flex-col justify-center items-center px-8 py-12 bg-background relative overflow-hidden">
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
        <motion.div initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }} className="w-full max-w-4xl">
          <img src={luminaLogoText} alt="Lumina" className="w-full h-auto object-contain" />
        </motion.div>

        {/* Motto */}
        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }} className="text-6xl md:text-7xl lg:text-8xl font-heading text-center tracking-tight">
          <span className="block text-gradient text-glow-animate text-8xl">
            See the Invisible.
          </span>
          <span className="block text-gradient text-glow-animate mt-6 text-8xl">
            Know the Why.
          </span>
        </motion.h1>

        {/* Connect with Us */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }} className="flex flex-col items-center gap-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
            Connect with Us
          </h2>
          <div className="bg-white p-5 rounded-2xl shadow-2xl">
            <img src={qrCode} alt="Lumina QR Code" className="w-56 h-56 md:w-64 md:h-64" />
          </div>
        </motion.div>
      </div>
    </div>;
};
export default FinalSlide;