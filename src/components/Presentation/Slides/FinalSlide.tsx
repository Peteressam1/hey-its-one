import { motion } from "framer-motion";
import luminaLogoText from "@/assets/lumina-logo-text-2.png";
import qrCode from "@/assets/qr-lumina.png";

const FinalSlide = () => {
  return (
    <div 
      className="w-full h-screen flex items-center justify-center bg-background relative overflow-hidden"
      style={{ padding: '2.5cm' }}
    >
      {/* Unified Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern" />

      {/* Content Container - centered with justify-center */}
      <div 
        className="relative z-10 flex flex-col items-center justify-center w-full h-full"
        style={{ gap: '2.5vh' }}
      >
        
        {/* Lumina Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: 'clamp(350px, 55vw, 850px)' }}
        >
          <img src={luminaLogoText} alt="Lumina" className="w-full h-auto object-contain" />
        </motion.div>

        {/* Motto */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} 
          className="font-heading text-center tracking-tight"
        >
          <span 
            className="block text-gradient text-glow-animate"
            style={{ fontSize: 'clamp(3rem, 7vw, 7rem)' }}
          >
            See the Invisible.
          </span>
          <span 
            className="block text-gradient text-glow-animate"
            style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', marginTop: '-0.5vh' }}
          >
            Know the Why.
          </span>
        </motion.h1>

        {/* Connect with Us */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }} 
          className="flex flex-col items-center"
          style={{ gap: '1.5vh' }}
        >
          <h2 
            className="font-semibold text-foreground"
            style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}
          >
            Connect with Us
          </h2>
          <div 
            className="bg-white rounded-xl shadow-xl"
            style={{ padding: 'clamp(0.75rem, 1.5vw, 1.5rem)' }}
          >
            <img 
              src={qrCode} 
              alt="Lumina QR Code" 
              style={{ 
                width: 'clamp(10rem, 18vw, 18rem)', 
                height: 'clamp(10rem, 18vw, 18rem)' 
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FinalSlide;
