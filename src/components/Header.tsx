import React from "react";

const Header: React.FC = () => (
  <header className="w-full z-20 fixed top-0 left-0 bg-black/70 backdrop-blur border-b border-white/10 shadow-lg">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
      <div className="flex items-center gap-4">
      </div>
      <nav className="hidden md:flex gap-8 text-white font-semibold text-sm items-center">
        <a href="#about" className="hover:text-[#a18aff] transition-colors">About</a>
        <a href="#agenda" className="hover:text-[#a18aff] transition-colors">Agenda</a>
        <a href="#themes" className="hover:text-[#a18aff] transition-colors">Themes</a>
        <a href="#whyattend" className="hover:text-[#a18aff] transition-colors">Why Attend</a>
        <button
          className="px-5 py-2 rounded-lg font-extrabold text-white text-lg md:text-xl shadow-md transition-all bg-gradient-to-r from-[#7b6cff] via-[#a259ff] to-[#ff6ec4] hover:brightness-110 border-none outline-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.25)' }}
        >
          Register Now
        </button>
      </nav>
    </div>
  </header>
);

export default Header;
