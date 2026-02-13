import React from "react";
import FlipCard from "../components/FlipCard";
import GradientHeading from "@/components/GradientHeading";
// ...existing code...

const themes = [
  {
    img: "/themePage/Governance & Security.png",
    title: "Governance & Security",
    desc: "Ensuring enterprise-grade security, compliance, and scalability in converged technology environments."
  },
  {
    img: "/themePage/CXO Insights & Best Practices.png",
    title: "CXO Insights & Best Practices",
    desc: "Peer-driven knowledge exchange on real-world enterprise technology implementation challenges."
  },
  {
    img: "/themePage/Future-Ready Enterprise.png",
    title: "Future-Ready Enterprise",
    desc: "Strategic planning and technology roadmaps for enterprise resilience and competitive advantage."
  },
  {
    img: "/themePage/Hybrid Collaboration.png",
    title: "Hybrid Collaboration",
    desc: "Building next-generation hybrid workplace infrastructure for seamless global collaboration."
  },
  {
    img: "/themePage/Strategic AV–IT Convergence.png",
    title: "Strategic AV–IT Convergence",
    desc: "Unifying audiovisual and IT infrastructure as a core enterprise enabler for digital transformation."
  },
];

const Themes = () => (
  <section className="w-full px-2 py-12 flex flex-col items-center bg-[#181929]">
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <GradientHeading first="Key Discussion" second="Themes" className="text-center mb-4" />
      <p className="text-base md:text-lg text-[#a3aed6] mb-6 text-center">Five strategic pillars driving the conversation at the roundtable.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mb-8">
        {themes.slice(0,3).map((t, i) => (
          <FlipCard key={i} img={t.img} title={t.title} desc={t.desc} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {themes.slice(3).map((t, i) => (
          <FlipCard key={i+3} img={t.img} title={t.title} desc={t.desc} />
        ))}
      </div>
    </div>
  </section>
);

export default Themes;
