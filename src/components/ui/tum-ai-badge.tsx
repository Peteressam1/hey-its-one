import { motion } from "framer-motion";
import tumAiLogo from "@/assets/tum-ai-logo.png";

interface TUMAIBadgeProps {
  variant?: "prominent" | "subtle";
  className?: string;
}

export const TUMAIBadge = ({ variant = "prominent", className = "" }: TUMAIBadgeProps) => {
  if (variant === "subtle") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <img src={tumAiLogo} alt="TUM AI" className="h-4 opacity-60" />
        <span className="text-xs text-muted-foreground">Member 2025</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className={`glass-card p-4 flex items-center gap-4 ${className}`}
    >
      <img src={tumAiLogo} alt="TUM AI Incubator" className="h-12" />
      <div>
        <div className="text-sm font-semibold text-foreground">Backed by TUM AI</div>
        <div className="text-xs text-muted-foreground">14-week equity-free incubator • Member 2025</div>
      </div>
    </motion.div>
  );
};
