// FlipCard component for Themes section
import React, { useState } from "react";

interface FlipCardProps {
  img: string;
  title: string;
  desc: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ img, title, desc }) => {
  const [flipped, setFlipped] = useState(false);

  // Mouse enter/leave for hover flip, touch for mobile
  const handleMouseEnter = () => setFlipped(true);
  const handleMouseLeave = () => setFlipped(false);
  const handleTouch = () => setFlipped((f) => !f);

  return (
    <div
      className="relative w-[340px] h-[220px] rounded-2xl border border-[#7c5cff] bg-[#181929] shadow-lg overflow-hidden cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouch}
      style={{ perspective: "1000px" }}
    >
      <div
        className="absolute w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "none"
        }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full flex items-end justify-center"
          style={{
            backfaceVisibility: "hidden"
          }}
        >
          <img src={img} alt={title} className="absolute w-full h-full object-cover opacity-90" />
        </div>
        {/* Back Side */}
        <div
          className="absolute w-full h-full flex flex-col items-center justify-center bg-[#20223a] rounded-2xl p-6"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="text-white font-extrabold text-2xl text-center mb-2">{title}</div>
          <div className="text-[#a3aed6] text-lg leading-snug text-center">{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
