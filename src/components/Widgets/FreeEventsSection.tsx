"use client";
import React, { useRef } from "react";
import { Location, Calendar, Clock, People, Star, Heart, Share, ArrowLeft, ArrowRight, Gift } from "iconsax-react";

const freeEvents = [
  {
    name: "Crypto 101 Workshop",
    category: "Education",
    distance: "0.4 miles away",
    date: "Dec 15, 2024",
    time: "3:00 PM",
    location: "Community Center, SF",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
    attendees: 65,
    rating: 4.8,
    originalPrice: 25,
  },
  {
    name: "NFT Art Exhibition",
    category: "Art",
    distance: "1.2 miles away",
    date: "Dec 18, 2024",
    time: "5:00 PM",
    location: "Digital Art Museum, SF",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=400&q=80",
    attendees: 120,
    rating: 4.9,
    originalPrice: 30,
  },
  {
    name: "Blockchain Meetup",
    category: "Networking",
    distance: "0.8 miles away",
    date: "Dec 20, 2024",
    time: "7:00 PM",
    location: "Tech Co-working Space, SF",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=400&q=80",
    attendees: 45,
    rating: 4.7,
    originalPrice: 15,
  },
  {
    name: "Web3 Gaming Demo",
    category: "Gaming",
    distance: "2.1 miles away",
    date: "Dec 22, 2024",
    time: "2:00 PM",
    location: "Gaming Lounge, SF",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80",
    attendees: 80,
    rating: 4.6,
    originalPrice: 20,
  },
  {
    name: "DeFi Strategy Session",
    category: "Finance",
    distance: "1.5 miles away",
    date: "Dec 25, 2024",
    time: "4:00 PM",
    location: "Financial District, SF",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    attendees: 35,
    rating: 4.8,
    originalPrice: 40,
  },
  {
    name: "Crypto Music Jam",
    category: "Music",
    distance: "0.9 miles away",
    date: "Dec 28, 2024",
    time: "8:00 PM",
    location: "Music Studio, SF",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
    attendees: 55,
    rating: 4.5,
    originalPrice: 25,
  },
];

const categoryColors = {
  Education: "border-[#00C9A7] text-[#00C9A7] bg-white/10",
  Art: "border-[#FF6F91] text-[#FF6F91] bg-white/10",
  Networking: "border-[#845EC2] text-[#845EC2] bg-white/10",
  Gaming: "border-[#0081CF] text-[#0081CF] bg-white/10",
  Finance: "border-[#D65DB1] text-[#D65DB1] bg-white/10",
  Music: "border-[#FF9671] text-[#FF9671] bg-white/10",
};

const FreeEventsSection = () => {
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
        <Gift color="#00C9A7" size={32} />
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Free Events</h2>
        <span className="px-3 py-1 rounded-full text-sm font-bold border border-[#00C9A7] text-[#00C9A7] bg-[#00C9A7]/10">
          Limited Time
        </span>
      </div>
      <div className="relative w-full max-w-7xl">
        <button
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#181824] border border-white/10 rounded-full p-3 shadow-lg hover:bg-[#00C9A7] hover:text-white transition-colors"
          onClick={() => scroll('left')}
        >
          <ArrowLeft color="#ffffff" size={22} />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scrollbar-thin scrollbar-thumb-[#00C9A7]/40 scrollbar-track-transparent py-4 px-2 md:px-8 snap-x snap-mandatory"
        >
          {freeEvents.map((event, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden flex flex-col bg-gradient-to-br from-[#00C9A7]/10 to-transparent backdrop-blur-xl border border-[#00C9A7]/30 shadow-xl min-w-[300px] max-w-[300px] snap-center transition-all duration-300 hover:border-[#00C9A7] hover:shadow-2xl hover:scale-105"
            >
              {/* Free badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 rounded-full text-xs font-bold border border-[#00C9A7] text-[#00C9A7] bg-black/40 backdrop-blur-sm">
                  FREE
                </span>
              </div>
              {/* Original price badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="px-2 py-1 rounded-full text-xs font-bold border border-white/30 text-white/70 bg-black/40 backdrop-blur-sm line-through">
                  ${event.originalPrice}
                </span>
              </div>
              {/* Category badge */}
              <div className="absolute top-12 right-4 z-20">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${categoryColors[event.category as keyof typeof categoryColors] || 'border-[#845EC2] text-[#845EC2] bg-white/10'}`}>
                  {event.category}
                </span>
              </div>
              {/* Event image */}
              <div className="relative w-full h-40">
                <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181824cc] to-transparent" />
                <div className="absolute bottom-2 right-2 flex gap-2 z-10">
                  <button className="bg-black/40 hover:bg-[#00C9A7]/80 text-white p-2 rounded-full transition-colors">
                    <Heart color="#ffffff" size={14} />
                  </button>
                </div>
              </div>
              {/* Card content */}
              <div className="flex flex-col flex-1 px-5 py-4 gap-3">
                <div className="text-lg font-bold text-white leading-tight">{event.name}</div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Location color="#00C9A7" size={14} />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-4 text-white/70 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar color="#00C9A7" size={14} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock color="#00C9A7" size={14} />
                    <span>{event.time}</span>
                  </div>
                </div>
                {/* Stats row */}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-3 text-white/70 text-sm">
                    <span className="flex items-center gap-1">
                      <People color="#ffffff" size={14} /> {event.attendees}
                    </span>
                    <span className="flex items-center gap-1 text-yellow-400">
                      <Star color="#fbbf24" size={14} /> {event.rating}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-[#00C9A7]">
                    FREE
                  </div>
                </div>
                {/* Action button */}
                <button className="mt-4 w-full py-2.5 rounded-xl border-2 border-[#00C9A7] bg-[#00C9A7]/20 text-[#00C9A7] font-bold text-sm shadow hover:bg-[#00C9A7] hover:text-white transition-all">
                  RSVP Free
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#181824] border border-white/10 rounded-full p-3 shadow-lg hover:bg-[#00C9A7] hover:text-white transition-colors"
          onClick={() => scroll('right')}
        >
          <ArrowRight color="#ffffff" size={22} />
        </button>
      </div>
    </section>
  );
};

export default FreeEventsSection; 