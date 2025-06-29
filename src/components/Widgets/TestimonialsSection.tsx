"use client";
import React from "react";
import { FaEthereum, FaBitcoin, FaDiscord, FaTelegram } from "react-icons/fa";

const testimonials = [
  {
    quote: "EventFi made our NFT conference a breeze—secure tickets, live chat, and real engagement!",
    name: "Alex P.",
    role: "Event Organizer"
  },
  {
    quote: "I love collecting NFT tickets and joining event games. The future of events is here!",
    name: "Samira K.",
    role: "Event Attendee"
  },
  {
    quote: "Renting equipment and getting paid in crypto was seamless. Highly recommend EventFi!",
    name: "Jordan L.",
    role: "Equipment Lender"
  },
];

const partners = [
  { icon: <FaEthereum size={32} className="text-[#845EC2]" />, name: "Ethereum" },
  { icon: <FaBitcoin size={32} className="text-[#FFD700]" />, name: "Bitcoin" },
  { icon: <FaDiscord size={32} className="text-[#7289da]" />, name: "Discord" },
  { icon: <FaTelegram size={32} className="text-[#0088cc]" />, name: "Telegram" },
];

const TestimonialsSection = () => (
  <section className="w-full py-20 px-4 flex flex-col items-center bg-gradient-to-b from-[#181824] to-[#23234a]">
    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 text-center">What People Are Saying</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mb-12">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-white/10 rounded-2xl p-8 shadow-lg border border-white/10 flex flex-col items-center">
          <div className="text-white/90 text-lg mb-4 font-semibold">“{t.quote}”</div>
          <div className="text-white/60 text-sm">— {t.name}, {t.role}</div>
        </div>
      ))}
    </div>
    <div className="flex items-center gap-8 mb-2">
      {partners.map((p, i) => (
        <div key={i} className="flex flex-col items-center">
          {p.icon}
          <span className="text-white/60 text-xs mt-1">{p.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection; 