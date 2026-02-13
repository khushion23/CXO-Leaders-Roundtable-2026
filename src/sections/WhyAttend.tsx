import SectionWrapper from "@/components/SectionWrapper";
import { CheckCircle } from "lucide-react";

import { GraduationCap, Handshake, Cpu, Sparkles } from "lucide-react";
import GradientHeading from "../components/GradientHeading";

const reasons = [
  { icon: GraduationCap, title: "Strategic Peer Learning", description: "Exchange insights with CXOs navigating similar enterprise challenges." },
  { icon: Handshake, title: "Executive Networking", description: "Build meaningful connections with senior technology decision-makers." },
  { icon: Cpu, title: "Enterprise Technology Insights", description: "Gain deep understanding of AV–IT convergence trends and best practices." },
  { icon: Sparkles, title: "Innovation & Collaboration", description: "Discover new frameworks for enterprise-wide technology collaboration." },
];

const WhyAttend = () => (
  <SectionWrapper id="why-attend">
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mt-8">
      {/* Left: Checklist */}
      <div className="flex-1 w-full max-w-xl lg:ml-16">
        <GradientHeading first="Why You Should" second="Attend" className="text-left mb-2" />
        <div className="h-1 w-32 bg-gradient-to-r from-[#7c5cff] to-[#43e97b] rounded mb-6" />
        <div className="grid gap-5">
          {reasons.map((reason, i) => (
            <div key={reason.title} className="flex items-start gap-4 p-5 rounded-xl border border-[#2a2d4a] bg-gradient-to-br from-[#23244a]/80 to-[#181929]/90 shadow-md">
              <span className="flex items-center justify-center h-8 w-8 rounded-lg bg-gradient-to-tr from-[#7c5cff]/20 to-[#43e97b]/20">
                <reason.icon className="h-5 w-5 text-primary" />
              </span>
              <div>
                <div className="text-white text-sm md:text-base font-bold leading-snug mb-0.5">{reason.title}</div>
                <div className="text-[#c3c8e6] text-xs md:text-sm leading-relaxed font-medium">{reason.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Right: Blue Circle Graphic */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          {/* Central Circle */}
          <div className="w-56 h-56 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#23244a] to-[#7c5cff] flex items-center justify-center shadow-2xl border-4 border-[#7c5cff]" style={{boxShadow:'0 0 32px 0 #7c5cff55, 0 0 0 4px #23244a'}}>
            <div className="text-center select-none">
              <div className="font-extrabold text-2xl md:text-3xl mb-1 text-white">Enterprise </div>
              <div className="font-extrabold text-2xl md:text-3xl" style={{color:'#e73ff7'}}>Collaboration</div>
            </div>
            {/* Orbiting Dots */}
            {[0, 72, 144, 216, 288].map((deg, i) => (
              <span
                key={i}
                className={`absolute w-5 h-5 md:w-7 md:h-7 rounded-full bg-white shadow-[0_0_16px_4px_#7c5cff88] border-2 border-[#43e97b]`}
                style={{
                  left: '50%',
                  top: '50%',
                  marginLeft: '-1.25rem', // half of w-5
                  marginTop: '-1.25rem',
                  transformOrigin: '90px', // for w-56, radius ~90px
                  animation: `orbit${i} 7s linear infinite`,
                  boxShadow: '0 0 16px 4px #7c5cff88, 0 0 8px 2px #43e97b55',
                  zIndex: 2
                }}
              />
            ))}
          </div>
          {/* Orbit Keyframes */}
          <style>{`
            @media (min-width: 768px) {
              .orbit-dot { transform-origin: 140px center; }
            }
            @keyframes orbit0 {
              0% { transform: rotate(0deg) translateX(90px) rotate(0deg); }
              100% { transform: rotate(360deg) translateX(90px) rotate(-360deg); }
            }
            @keyframes orbit1 {
              0% { transform: rotate(72deg) translateX(90px) rotate(-72deg); }
              100% { transform: rotate(432deg) translateX(90px) rotate(-432deg); }
            }
            @keyframes orbit2 {
              0% { transform: rotate(144deg) translateX(90px) rotate(-144deg); }
              100% { transform: rotate(504deg) translateX(90px) rotate(-504deg); }
            }
            @keyframes orbit3 {
              0% { transform: rotate(216deg) translateX(90px) rotate(-216deg); }
              100% { transform: rotate(576deg) translateX(90px) rotate(-576deg); }
            }
            @keyframes orbit4 {
              0% { transform: rotate(288deg) translateX(90px) rotate(-288deg); }
              100% { transform: rotate(648deg) translateX(90px) rotate(-648deg); }
            }
            @media (min-width: 768px) {
              @keyframes orbit0 {
                0% { transform: rotate(0deg) translateX(140px) rotate(0deg); }
                100% { transform: rotate(360deg) translateX(140px) rotate(-360deg); }
              }
              @keyframes orbit1 {
                0% { transform: rotate(72deg) translateX(140px) rotate(-72deg); }
                100% { transform: rotate(432deg) translateX(140px) rotate(-432deg); }
              }
              @keyframes orbit2 {
                0% { transform: rotate(144deg) translateX(140px) rotate(-144deg); }
                100% { transform: rotate(504deg) translateX(140px) rotate(-504deg); }
              }
              @keyframes orbit3 {
                0% { transform: rotate(216deg) translateX(140px) rotate(-216deg); }
                100% { transform: rotate(576deg) translateX(140px) rotate(-576deg); }
              }
              @keyframes orbit4 {
                0% { transform: rotate(288deg) translateX(140px) rotate(-288deg); }
                100% { transform: rotate(648deg) translateX(140px) rotate(-648deg); }
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default WhyAttend;
