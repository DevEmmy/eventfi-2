"use client"
import React from "react";
import { DirectRight, Award, People } from "iconsax-react";

const stats = [
  {
    stat: "$300m",
    desc: "In ticket sales processed on EventFi",
    icon: <DirectRight color="#ffffff" size={24} />, color: "#845EC2", offset: "md:translate-y-8",
  },
  {
    stat: "60+",
    desc: "Major events powered by our platform",
    icon: <Award color="#ffffff" size={24} />, color: "#2cb67d", offset: "md:-translate-y-8",
  },
  {
    stat: "100K+",
    desc: "Active users every month",
    icon: <People color="#ffffff" size={24} />, color: "#fbbf24", offset: "md:translate-y-16",
  },
];

const StatCard = ({ stat, desc, icon, color, offset }: { stat: string, desc: string, icon: React.ReactNode, color: string, offset?: string }) => (
  <div className={`relative rounded-3xl px-12 py-16 flex flex-col justify-between min-w-[320px] min-h-[260px] transition-transform hover:-translate-y-2 hover:shadow-2xl ${offset}`}
    style={{}}
  >
    {/* Animated neon border */}
    <div
      className="pointer-events-none absolute inset-0 rounded-3xl z-0 border-2"
      style={{
        border: "2px solid transparent",
        background: `conic-gradient(from 0deg, ${color} 0%, #fff0 25%, ${color} 50%, #fff0 75%, ${color} 100%) border-box`,
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        animation: "spin 3s linear infinite"
      }}
    />
    {/* Icon badge */}
    <div className="absolute -top-7 left-10 flex items-center justify-center w-16 h-16 rounded-full border-4 z-10" style={{ borderColor: color, background: "#23233b" }}>
      {icon}
    </div>
    <div className="mt-12 text-6xl font-extrabold text-white mb-4 z-10">{stat}</div>
    <div className="text-xl text-white/70 z-10">{desc}</div>
    {/* <style jsx>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style> */}
  </div>
);

const StatsSection = () => (
  <section className="w-full flex justify-center py-20">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">
      {stats.map((s, i) => (
        <StatCard key={i} {...s} />
      ))}
    </div>
  </section>
);

export default StatsSection; 