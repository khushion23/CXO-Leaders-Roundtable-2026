import React from "react";

interface GradientHeadingProps {
  first: string;
  second: string;
  className?: string;
}

const GradientHeading: React.FC<GradientHeadingProps> = ({ first, second, className }) => (
  <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${className ?? ""}`}> 
    <span className="text-white">{first} </span>
    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{second}</span>
  </h2>
);

export default GradientHeading;
