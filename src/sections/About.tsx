import React from "react";

const features = [
  { label: "Format", value: "Closed-Door Roundtable" },
  { label: "Audience", value: "CXO & Enterprise Leaders" },
  { label: "Focus", value: "AV-IT Convergence" },
  { label: "Networking", value: "Dinner & Cocktails" },
];

const About = () => (
  <section className="w-full bg-gradient-to-br from-[#181929] via-[#1a1b2e] to-[#181929] px-2 py-8 flex justify-center">
    <div className="w-full max-w-6xl rounded-3xl border border-[#a259ff] shadow-[0_0_16px_2px_rgba(162,89,255,0.25)] px-6 md:px-12 py-8 md:py-10 relative" style={{boxShadow: '0 0 16px 2px #a259ff55, 0 8px 32px 0 #0008'}}>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Heading and Paragraphs */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl font-extrabold text-white mb-3 relative w-fit">
            About the Forum
            <span className="block h-[3px] w-2/3 bg-gradient-to-r from-[#a259ff] to-[#43e97b] rounded-full mt-2 absolute left-0 bottom-[-18px] opacity-80" />
          </h2>
          <div className="h-6" />
          <p className="text-gray-300 text-sm md:text-base leading-7 mb-3 max-w-2xl">
            The CXO Leaders' Roundtable 2026 brings together top enterprise leaders to engage in a high-level dialogue on AV-IT convergence — the strategic integration of audiovisual and information technology infrastructure to build intelligent, future-ready workplaces.
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-7 max-w-2xl">
            This closed-door session is designed for CXOs, CTOs, CIOs, and senior decision-makers to explore enterprise transformation through hybrid collaboration, scalable governance, and next-generation technology frameworks.
          </p>
        </div>
        {/* Right: Illustration */}
        <div className="flex items-center justify-center h-full">
          <img
            src="/data/About%20the%20Forum%20(1).gif"
            alt="Forum Illustration"
            className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto object-contain drop-shadow-xl"
            style={{minHeight: '180px'}}
          />
        </div>
      </div>
      {/* Feature Cards with Flip Animation */}
      <div className="mt-10 flex flex-wrap gap-6 justify-center md:justify-between">
        {features.map((f, i) => (
          <div
            key={f.label}
            className="[perspective:600px] min-w-[180px] flex-1 max-w-xs mb-4 md:mb-0 group"
          >
            <div className="relative w-full h-[80px] transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
              {/* Front */}
              <button tabIndex={0} className="absolute inset-0 flex items-center justify-center bg-white/5 border border-gray-700 rounded-xl px-6 py-2 shadow-md transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none group-focus-within:opacity-0 group-focus-within:pointer-events-none [backface-visibility:hidden] w-full h-full">
                <span className="text-[#c084fc] font-extrabold text-2xl text-center w-full drop-shadow-[0_2px_8px_rgba(162,89,255,0.5)]">{f.label}</span>
              </button>
              {/* Back */}
              <div className="absolute inset-0 flex items-center justify-center bg-white/5 border border-gray-700 rounded-xl px-6 py-2 shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto [transform:rotateY(180deg)] [backface-visibility:hidden] w-full h-full z-10">
                <span className="text-gray-300 text-sm font-medium text-center w-full">{f.value}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
