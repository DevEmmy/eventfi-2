"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    q: "What is an NFT ticket?",
    a: "An NFT ticket is a digital ticket issued on the blockchain. It's verifiable, unique, and can be resold or collected as proof of attendance.",
  },
  {
    q: "How do I join an event or buy a ticket?",
    a: "Browse events, connect your wallet, and purchase tickets directly. Your NFT ticket will appear in your wallet.",
  },
  {
    q: "Which wallets are supported?",
    a: "You can use MetaMask, WalletConnect, and other popular Web3 wallets to log in and manage your tickets.",
  },
  {
    q: "How does equipment rental work?",
    a: "Organizers and users can list or rent event equipment. Payments and deposits are handled by smart contracts for security.",
  },
  {
    q: "Is EventFi safe to use?",
    a: "Yes! All transactions are on-chain, tickets are verifiable, and smart contracts ensure trustless payments and rentals.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="w-full py-20 px-4 flex flex-col items-center ">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 text-center">Frequently Asked Questions</h2>
      <div className="max-w-2xl w-full mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white/10 rounded-xl border border-white/10">
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="text-white font-semibold text-lg">{faq.q}</span>
              <FaChevronDown className={`ml-2 text-[#845EC2] transition-transform ${open === i ? 'rotate-180' : ''}`} />
            </button>
            {open === i && (
              <div className="px-6 pb-4 text-white/80 text-base animate-fade-in">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection; 