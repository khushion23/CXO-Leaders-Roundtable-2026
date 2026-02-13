import SectionWrapper from "@/components/SectionWrapper";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const agendaItems = [
  { time: "6:00 PM", title: "Registration & Speaker Joining", description: "Welcome reception and check-in" },
  { time: "6:30 PM", title: "Welcome Note", description: "Opening address by ObserveNow Media" },
  { time: "6:45 PM", title: "Executive Briefing", description: "Logitech & Zones India leadership presentation" },
  { time: "7:00 PM", title: "CXO Roundtable Discussion", description: "Moderated strategic dialogue on AV–IT convergence" },
  { time: "8:30 PM", title: "Interactive Q&A", description: "Open floor discussion with audience participation" },
  { time: "8:45 PM", title: "Closing Remarks & Group Picture", description: "Summary and ceremonial photo" },
  { time: "9:00 PM", title: "Networking Dinner & Cocktails", description: "Exclusive dining and peer networking" },
];

const Agenda = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <SectionWrapper id="agenda" className="overflow-hidden relative">
      {/* Blurry GIF background - full section */}
      <div className="pointer-events-none absolute inset-0 w-full h-full z-0">
        <img src="/Untitled design (4).gif" alt="Agenda Background" className="w-full h-full object-cover" style={{filter:'blur(10px) brightness(0.7)'}} />
        <div className="absolute inset-0 w-full h-full bg-[#181929]/60 backdrop-blur-md" />
      </div>
      <div className="relative z-10">
        <div className="text-center pt-8">
          <h2 className="font-heading text-3xl font-800 sm:text-4xl lg:text-5xl">
            Event <span className="gradient-text">Agenda</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            An evening of strategic insights, executive dialogue, and networking.
          </p>
        </div>

        <div ref={ref} className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px">
            <motion.div
              className="w-full bg-gradient-to-b from-primary to-accent origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <motion.div
            className="space-y-8 md:space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.18
                }
              }
            }}
          >
            {agendaItems.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                key={item.time}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 18 } }
                }}
                className={`relative flex items-start gap-8 pl-12 md:pl-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot with animation */}
                <motion.div
                  className="absolute left-4 top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.2 + i * 0.18 }}
                  viewport={{ once: true }}
                />

                {/* Content */}
                <div className={`md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {item.time}
                  </span>
                  <h3 className="mt-1 font-heading text-lg font-700">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
    </SectionWrapper>
  );
};

export default Agenda;
