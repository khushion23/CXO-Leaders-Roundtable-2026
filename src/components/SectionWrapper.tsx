import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

const SectionWrapper = ({ children, id, className = "" }: SectionWrapperProps) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={`section-padding relative ${className}`}
  >
    {/* Agenda background GIF only for Event Agenda section */}
    {id === "agenda" && (
      <div className="pointer-events-none absolute inset-0 w-full h-full z-0">
        <img src="/Untitled design (4).gif" alt="Agenda Background" className="w-full h-full object-cover" style={{filter:'blur(10px) brightness(0.7)'}} />
        <div className="absolute inset-0 w-full h-full bg-[#181929]/60 backdrop-blur-md" />
      </div>
    )}
    <div className="relative z-10 mx-auto max-w-7xl">{children}</div>
  </motion.section>
);

export default SectionWrapper;
