import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ChevronDown } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const Hero = () => (
  <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 sm:px-0">
    {/* Video background */}
    <video
      className="absolute inset-0 w-full h-full object-cover z-0"
      src="/data/Untitled (1792 x 1024 px) (1).mp4"
      autoPlay
      loop
      muted
      playsInline
      style={{ minHeight: '100%', minWidth: '100%' }}
    />

    {/* Overlay for better text visibility */}
    <div className="absolute inset-0 bg-black/70 z-0" />


    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center px-4 sm:px-8"
    >
      <motion.div variants={fadeUp} className="mb-8 mt-16 sm:mt-24">
        <span className="inline-block rounded-full border border-[#a18aff]/40 bg-[#a18aff]/10 px-6 py-2 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#fff] shadow-lg backdrop-blur" style={{letterSpacing:'0.15em'}}>
          EXCLUSIVE INVITE-ONLY
        </span>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="mx-auto max-w-3xl font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-xl mb-6"
        style={{letterSpacing:'-0.01em'}}>
        CXO Leaders' <span className="text-[#ffe082]">Roundtable</span>
        <br />
        <span className="block mt-4">2026</span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg text-[#ffe7a0] font-semibold drop-shadow mb-10"
        style={{textShadow:'0 2px 8px #0008'}}>
        Strategic AV–IT Convergence for Future-Ready Enterprises
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-base sm:text-lg font-bold mb-10"
      >
        <span className="flex items-center gap-2 text-[#ffe066]">
          <Calendar className="h-5 w-5" /> 19 February 2026
        </span>
        <span className="flex items-center gap-2 text-[#ffe066]">
          <Clock className="h-5 w-5" /> 6:00 PM – 9:00 PM
        </span>
        <span className="flex items-center gap-2 text-[#ffe066]">
          <MapPin className="h-5 w-5" /> Gurugram
        </span>
      </motion.div>

      <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6 mb-12">
        <button
          href="#rsvp"
          className="px-8 py-3 rounded-xl font-extrabold text-white text-lg shadow-lg transition-all bg-gradient-to-r from-[#7b6cff] via-[#a259ff] to-[#ff6ec4] hover:brightness-110 border-none outline-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.25)' }}
        >
          Register Now
        </button>
        <a
          href="#agenda"
          className="rounded-lg border border-white/30 bg-white/10 px-8 py-3 font-heading text-base font-bold text-white shadow-xl hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/60"
        >
          View Agenda
        </a>
      </motion.div>

    </motion.div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
    >
      <ChevronDown className="h-8 w-8 animate-scroll-indicator text-white/80 drop-shadow-xl" />
    </motion.div>
  </section>
);

export default Hero;
