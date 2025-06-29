import React from "react";

const PurposeSection = () => {
  return (
    <section className="w-full flex justify-center py-16">
      <div className="relative bg-[#181824]/90 rounded-2xl border border-white/10 shadow-xl px-10 py-12 max-w-xl w-full flex flex-col items-start">
        {/* Pill label */}
        <span className="absolute -top-5 left-6 px-4 py-1 rounded-full bg-[#845EC2] text-white text-xs font-semibold shadow">Our Mission</span>
        {/* Main Stat/Headline */}
        <div className="text-5xl md:text-6xl font-extrabold text-white mb-4 mt-4">Empowering 10,000+</div>
        {/* Supporting statement */}
        <div className="text-lg text-white/70 mb-2">Event creators to launch, manage, and grow their communities with Web3 ticketing and tools.</div>
      </div>
    </section>
  );
};

export default PurposeSection; 