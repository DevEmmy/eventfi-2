"use client";
import React, { useRef } from "react";
import { Location, Calendar, Clock, People, Star, Heart, Share, ArrowLeft, ArrowRight, Crown } from "iconsax-react";

const featuredEvents = [
  {
    name: "Ethereum Summit 2024",
    category: "Technology",
    distance: "1.8 miles away",
    date: "Dec 30, 2024",
    time: "9:00 AM",
    location: "Convention Center, SF",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=400&q=80",
    attendees: 1200,
    rating: 4.9,
    price: 299,
    isFeatured: true,
    description: "The biggest Ethereum event of the year featuring top speakers and networking opportunities.",
  },
  {
    name: "Crypto Art Gala",
    category: "Art",
    distance: "0.6 miles away",
    date: "Jan 5, 2025",
    time: "7:00 PM",
    location: "Modern Art Museum, SF",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=400&q=80",
    attendees: 450,
    rating: 4.8,
    price: 150,
    isFeatured: true,
    description: "Exclusive showcase of the finest crypto art with live auctions and artist meetups.",
  },
  {
    name: "DeFi Masters Conference",
    category: "Finance",
    distance: "2.3 miles away",
    date: "Jan 12, 2025",
    time: "8:00 AM",
    location: "Financial District, SF",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    attendees: 800,
    rating: 4.9,
    price: 199,
    isFeatured: true,
    description: "Advanced DeFi strategies and insights from industry leaders and pioneers.",
  },
  {
    name: "Web3 Gaming Expo",
    category: "Gaming",
    distance: "1.1 miles away",
    date: "Jan 18, 2025",
    time: "10:00 AM",
    location: "Gaming Arena, SF",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80",
    attendees: 650,
    rating: 4.7,
    price: 89,
    isFeatured: true,
    description: "Experience the future of gaming with playable demos and exclusive reveals.",
  },
  {
    name: "NFT Music Festival",
    category: "Music",
    distance: "3.2 miles away",
    date: "Jan 25, 2025",
    time: "6:00 PM",
    location: "Outdoor Amphitheater, SF",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
    attendees: 2000,
    rating: 4.8,
    price: 120,
    isFeatured: true,
    description: "A revolutionary music festival where every ticket is an NFT with unique benefits.",
  },
  {
    name: "Blockchain Startup Demo Day",
    category: "Technology",
    distance: "0.9 miles away",
    date: "Feb 2, 2025",
    time: "2:00 PM",
    location: "Innovation Hub, SF",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    attendees: 300,
    rating: 4.9,
    price: 75,
    isFeatured: true,
    description: "Meet the next generation of blockchain startups and invest in the future.",
  },
];

const categoryColors = {
  Technology: "border-[#845EC2] text-[#845EC2] bg-white/10",
  Art: "border-[#FF6F91] text-[#FF6F91] bg-white/10",
  Finance: "border-[#D65DB1] text-[#D65DB1] bg-white/10",
  Gaming: "border-[#0081CF] text-[#0081CF] bg-white/10",
  Music: "border-[#FF9671] text-[#FF9671] bg-white/10",
};

const FeaturedEventsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.8;
    scrollRef.current.scrollTo({
      left: dir === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="w-full flex flex-col items-center py-20 ">
      <div className="flex items-center gap-3 mb-10">
        <Crown color="#FFD700" size={32} />
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Featured Events</h2>
        <span className="px-3 py-1 rounded-full text-sm font-bold border border-[#FFD700] text-[#FFD700] bg-[#FFD700]/10">
          Premium
        </span>
      </div>
      <div className="relative w-full max-w-7xl">
        <button
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#181824] border border-white/10 rounded-full p-3 shadow-lg hover:bg-[#FFD700] hover:text-white transition-colors"
          onClick={() => scroll('left')}
        >
          <ArrowLeft color="#ffffff" size={22} />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar scrollbar-thin scrollbar-thumb-[#FFD700]/40 scrollbar-track-transparent py-4 px-2 md:px-8 snap-x snap-mandatory"
        >
          {featuredEvents.map((event, i) => (
            <div
              key={i}
              className="relative rounded-3xl overflow-hidden flex flex-col bg-gradient-to-br from-[#FFD700]/10 via-white/5 to-transparent backdrop-blur-xl border border-[#FFD700]/30 shadow-2xl min-w-[350px] max-w-[350px] snap-center transition-all duration-300 hover:border-[#FFD700] hover:shadow-3xl hover:scale-105"
            >
              {/* Featured badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 rounded-full text-xs font-bold border border-[#FFD700] text-[#FFD700] bg-black/40 backdrop-blur-sm flex items-center gap-1">
                  <Crown color="#FFD700" size={12} />
                  FEATURED
                </span>
              </div>
              {/* Category badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${categoryColors[event.category as keyof typeof categoryColors] || 'border-[#845EC2] text-[#845EC2] bg-white/10'}`}>
                  {event.category}
                </span>
              </div>
              {/* Event image */}
              <div className="relative w-full h-52">
                <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181824cc] to-transparent" />
                <div className="absolute bottom-2 right-2 flex gap-2 z-10">
                  <button className="bg-black/40 hover:bg-[#FFD700]/80 text-white p-2 rounded-full transition-colors">
                    <Heart color="#ffffff" size={16} />
                  </button>
                  <button className="bg-black/40 hover:bg-[#FFD700]/80 text-white p-2 rounded-full transition-colors">
                    <Share color="#ffffff" size={16} />
                  </button>
                </div>
              </div>
              {/* Card content */}
              <div className="flex flex-col flex-1 px-6 py-5 gap-3">
                <div className="text-xl font-bold text-white leading-tight">{event.name}</div>
                <p className="text-white/70 text-sm leading-relaxed">{event.description}</p>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Location color="#FFD700" size={16} />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-4 text-white/70 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar color="#FFD700" size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock color="#FFD700" size={16} />
                    <span>{event.time}</span>
                  </div>
                </div>
                {/* Stats row */}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-4 text-white/70 text-sm">
                    <span className="flex items-center gap-1">
                      <People color="#ffffff" size={16} /> {event.attendees}
                    </span>
                    <span className="flex items-center gap-1 text-yellow-400">
                      <Star color="#fbbf24" size={16} /> {event.rating}
                    </span>
                  </div>
                  <div className="text-2xl font-extrabold text-[#FFD700]">
                    ${event.price}
                  </div>
                </div>
                {/* Action button */}
                <button className="mt-5 w-full py-3 rounded-xl border-2 border-[#FFD700] bg-[#FFD700]/20 text-[#FFD700] font-bold text-lg shadow hover:bg-[#FFD700] hover:text-white transition-all">
                  Get Premium Tickets
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#181824] border border-white/10 rounded-full p-3 shadow-lg hover:bg-[#FFD700] hover:text-white transition-colors"
          onClick={() => scroll('right')}
        >
          <ArrowRight color="#ffffff" size={22} />
        </button>
      </div>
    </section>
  );
};

export default FeaturedEventsSection; 