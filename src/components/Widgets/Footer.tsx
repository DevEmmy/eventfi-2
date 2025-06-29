"use client";
import React from "react";
import { Location, Message, ArrowRight, Facebook, Instagram, Youtube, Call } from "iconsax-react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#181824] to-[#0F0F1A] border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">EventFi</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Discover and book amazing events in the Web3 ecosystem. From crypto meetups to NFT art galleries, 
                we connect you with the future of digital experiences.
              </p>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Location color="#845EC2" size={16} />
                <span>San Francisco, CA</span>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Message color="#845EC2" size={16} />
                <span>hello@eventfi.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Call color="#845EC2" size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-[#845EC2] transition-colors text-sm">
                  Browse Events
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#845EC2] transition-colors text-sm">
                  Create Event
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#845EC2] transition-colors text-sm">
                  Event Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#845EC2] transition-colors text-sm">
                  Featured Events
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#845EC2] transition-colors text-sm">
                  Free Events
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#845EC2] transition-colors text-sm">
                  Local Events
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-[#845EC2] transition-colors text-sm">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#845EC2] transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#845EC2] transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#845EC2] transition-colors text-sm">
                  Event Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#845EC2] transition-colors text-sm">
                  Safety & Security
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#845EC2] transition-colors text-sm">
                  Report Issue
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Stay Updated</h4>
            <p className="text-white/70 text-sm mb-4">
              Get notified about the latest events and exclusive offers.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <div className="flex items-center bg-white/10 rounded-lg border border-white/20 p-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent text-white placeholder-white/50 text-sm outline-none px-3"
                />
                <button className="bg-[#845EC2] hover:bg-[#845EC2]/80 text-white p-2 rounded-md transition-colors">
                  <ArrowRight color="#ffffff" size={16} />
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="text-white font-semibold mb-3 text-sm">Follow Us</h5>
              <div className="flex items-center gap-3">
                <a href="#" className="bg-white/10 hover:bg-[#845EC2] p-2 rounded-lg transition-colors">
                  <Facebook color="#ffffff" size={18} />
                </a>
                <a href="#" className="bg-white/10 hover:bg-[#845EC2] p-2 rounded-lg transition-colors">
                  <Instagram color="#ffffff" size={18} />
                </a>
                <a href="#" className="bg-white/10 hover:bg-[#845EC2] p-2 rounded-lg transition-colors">
                  <FaTwitter color="#ffffff" size={18} />
                </a>
                <a href="#" className="bg-white/10 hover:bg-[#845EC2] p-2 rounded-lg transition-colors">
                  <FaLinkedin color="#ffffff" size={18} />
                </a>
                <a href="#" className="bg-white/10 hover:bg-[#845EC2] p-2 rounded-lg transition-colors">
                  <Youtube color="#ffffff" size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/50 text-sm">
              © 2024 EventFi. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-white/50 text-sm">
              <a href="#" className="hover:text-[#845EC2] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#845EC2] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#845EC2] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 