"use client";
import React from "react";
import { FaTicketAlt, FaSearchLocation, FaUsers, FaCubes, FaWallet } from "react-icons/fa";

const features = [
  {
    icon: <FaTicketAlt size={56} className="text-[#845EC2]" />,
    title: "NFT-Based Ticketing",
    desc: "Tickets are issued as NFTs—verifiable, scam-proof, resellable, and collectible.",
  },
  {
    icon: <FaSearchLocation size={56} className="text-[#FF6F91]" />,
    title: "Event Discovery",
    desc: "Find events by location, interest, or price. Organizers manage events easily.",
  },
  {
    icon: <FaUsers size={56} className="text-[#00C9A7]" />,
    title: "Community Engagement",
    desc: "In-app chat, gamification, and NFT badges make events interactive and fun.",
  },
  {
    icon: <FaCubes size={56} className="text-[#FFD700]" />,
    title: "Equipment Rental",
    desc: "Peer-to-peer marketplace for event equipment, powered by smart contracts.",
  },
  {
    icon: <FaWallet size={56} className="text-[#0081CF]" />,
    title: "Wallet & Token Integration",
    desc: "Login with MetaMask/WalletConnect. Token-gated events and on-chain rewards.",
  },
];

const CoreFeaturesSection = () => (
  <section className="w-full py-20 px-4 flex flex-col items-center">
    <div className="max-w-4xl w-full mx-auto mb-14">
      <div className="mb-2">
        <span className="inline-block bg-white/10 text-white/70 text-xs font-semibold px-3 py-1 rounded-full mb-4">Features</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Everything Your Community Needs</h2>
      <p className="text-white/70 text-lg mb-2">EventFi's exceptional flexibility can handle any type of event. And we never stop innovating.</p>
    </div>
    <div className="flex flex-col gap-16 w-full max-w-5xl">
      {features.map((f, i) => (
        <div
          key={i}
          className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
        >
          {/* Icon/Visual */}
          <div className="flex-1 w-full flex justify-center items-center">
            <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl flex items-center justify-center p-8 min-w-[180px] min-h-[180px]">
              {f.icon}
            </div>
          </div>
          {/* Text */}
          <div className="flex-1 w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-bold text-white">{f.title}</span>
            </div>
            <div className="text-white/80 text-base mb-2">{f.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CoreFeaturesSection; 