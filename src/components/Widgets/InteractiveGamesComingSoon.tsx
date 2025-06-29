"use client";
import React from "react";
import { FaLock } from "react-icons/fa";
import { Clock } from "iconsax-react";

const InteractiveGamesComingSoon = () => {
  return (
    <section className="w-full flex flex-col items-center py-24 px-2 ">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Interactive Event Games</h2>
        <p className="text-white/80 text-lg mb-4">
          Engage your audience with real-time interactive games during your events
        </p>
        <div className="flex items-center justify-center gap-2 mb-2">
          <Clock size={20} color="#fff" className="opacity-80" />
          <span className="text-white/80 font-semibold">Coming Soon</span>
        </div>
      </div>
      <div className="relative w-full max-w-3xl flex flex-col items-center">
        {/* Blurred preview card */}
        <div className="w-full rounded-2xl border border-white/20 bg-[#181824]/80 backdrop-blur-lg shadow-2xl overflow-hidden relative" style={{ minHeight: 320 }}>
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="bg-black/60 rounded-xl px-10 py-10 flex flex-col items-center border border-white/10 shadow-xl">
              <FaLock size={48} color="#fff" className="mb-4 opacity-80" />
              <div className="text-2xl font-bold text-white mb-2">Coming Soon</div>
              <div className="text-white/70 text-base">This feature is currently in development</div>
            </div>
          </div>
          {/* Blurred background preview (fake content) */}
          <div className="blur-sm select-none pointer-events-none opacity-60">
            <div className="flex flex-col md:flex-row gap-8 p-10">
              <div className="flex-1 bg-[#2d1457] rounded-xl p-6 min-h-[180px] flex flex-col justify-center">
                <div className="text-white text-lg font-bold mb-4">Web3 Knowledge Quiz</div>
                <div className="flex flex-col gap-2">
                  <div className="bg-[#e63946] text-white font-semibold rounded-lg px-4 py-2 w-fit">Lower prices</div>
                  <div className="bg-[#f1c40f] text-white font-semibold rounded-lg px-4 py-2 w-fit">More sales</div>
                </div>
                <div className="text-white/60 text-xs mt-4">100+ players</div>
              </div>
              <div className="flex-1 bg-[#1a093b] rounded-xl p-6 min-h-[180px] flex flex-col justify-center">
                <div className="text-white/80 font-semibold mb-2">Interactive Games Features</div>
                <ul className="text-white/60 text-sm space-y-2">
                  <li>• Multiple Game Formats</li>
                  <li>• Live Leaderboards</li>
                  <li>• Token Rewards</li>
                  <li>• Real-time Results</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Waitlist button and note */}
        <button className="mt-10 bg-[#845EC2] hover:bg-[#6d3bbd] text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg transition-colors">
          Join the Waitlist
        </button>
        <div className="mt-4 text-white/70 text-base">
          Be the first to know when interactive games launch
        </div>
      </div>
    </section>
  );
};

export default InteractiveGamesComingSoon; 