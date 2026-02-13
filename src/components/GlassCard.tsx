import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const GlassCard = ({ children, className = "", delay = 0 }: GlassCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
    className={`glass-card glass-card-hover rounded-xl p-6 transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

export default GlassCard;
