"use client";
import React from "react";
import { FaUserTie, FaUserFriends } from "react-icons/fa";

const ForOrganizersAndAttendees = () => (
  <section className="w-full py-20 px-4 flex flex-col items-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 text-center">Why EventFi?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
      {/* Organizers */}
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/10 flex flex-col items-center">
        <FaUserTie size={40} className="text-[#845EC2] mb-4" />
        <h3 className="text-2xl font-bold text-white mb-4">For Organizers</h3>
        <ul className="text-white/80 text-base space-y-3 list-disc list-inside">
          <li>Sell NFT tickets in minutes</li>
          <li>Manage events and equipment rentals easily</li>
          <li>Engage your audience with in-app chat & games</li>
          <li>Get paid instantly with crypto</li>
        </ul>
      </div>
      {/* Attendees */}
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/10 flex flex-col items-center">
        <FaUserFriends size={40} className="text-[#FF6F91] mb-4" />
        <h3 className="text-2xl font-bold text-white mb-4">For Attendees</h3>
        <ul className="text-white/80 text-base space-y-3 list-disc list-inside">
          <li>Collect NFT tickets & POAPs</li>
          <li>Join event chats and win rewards</li>
          <li>Discover local & token-gated events</li>
          <li>Rent or share event gear peer-to-peer</li>
        </ul>
      </div>
    </div>
  </section>
);

export default ForOrganizersAndAttendees; 