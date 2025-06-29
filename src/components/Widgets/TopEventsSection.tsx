"use client";
import React, { useRef } from "react";
import { Location, Calendar, Clock, People, Star, Heart, Share, ArrowLeft, ArrowRight } from "iconsax-react";

const events = [
  {
    name: "Web3 Developer Meetup",
    category: "Technology",
    distance: "0.5 miles away",
    date: "Dec 15, 2024",
    time: "7:00 PM",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    attendees: 156,
    rating: 4.8,
    price: 25,
  },
  {
    name: "Jazz Night at Blue Note",
    category: "Music",
    distance: "1.2 miles away",
    date: "Dec 18, 2024",
    time: "8:30 PM",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    attendees: 89,
    rating: 4.9,
    price: 45,
  },
  {
    name: "Gaming Tournament",
    category: "Gaming",
    distance: "2.1 miles away",
    date: "Dec 20, 2024",
    time: "2:00 PM",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80",
    attendees: 234,
    rating: 4.7,
    price: 15,
  },
  {
    name: "Solana Summer Fest",
    category: "Technology",
    distance: "3.5 miles away",
    date: "Jan 10, 2025",
    time: "6:00 PM",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    attendees: 320,
    rating: 4.9,
    price: 60,
  },
  {
    name: "Crypto Carnival",
    category: "Gaming",
    distance: "4.2 miles away",
    date: "Feb 2, 2025",
    time: "5:00 PM",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    attendees: 180,
    rating: 4.6,
    price: 30,
  },
  {
    name: "NFT Art Expo",
    category: "Art",
    distance: "0.8 miles away",
    date: "Mar 12, 2025",
    time: "3:00 PM",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    attendees: 210,
    rating: 4.8,
    price: 40,
  },
  {
    name: "Web3 Music Night",
    category: "Music",
    distance: "2.7 miles away",
    date: "Apr 18, 2025",
    time: "9:00 PM",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=400&q=80",
    attendees: 150,
    rating: 4.7,
    price: 35,
  },
  {
    name: "DeFi Summit",
    category: "Technology",
    distance: "5.0 miles away",
    date: "May 22, 2025",
    time: "10:00 AM",
    location: "San Jose, CA",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    attendees: 400,
    rating: 5.0,
    price: 80,
  },
  {
    name: "Blockchain Brunch",
    category: "Technology",
    distance: "1.5 miles away",
    date: "Jun 5, 2025",
    time: "11:00 AM",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    attendees: 120,
    rating: 4.5,
    price: 20,
  },
  {
    name: "DAO Day",
    category: "Technology",
    distance: "3.0 miles away",
    date: "Jul 15, 2025",
    time: "1:00 PM",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    attendees: 90,
    rating: 4.6,
    price: 22,
  },
];

const categoryColors = {
  Technology: "border-[#845EC2] text-[#845EC2] bg-white/10",
  Music: "border-[#D65DB1] text-[#D65DB1] bg-white/10",
  Gaming: "border-[#0081CF] text-[#0081CF] bg-white/10",
  Art: "border-[#FF6F91] text-[#FF6F91] bg-white/10",
};

const TopEventsSection = () => {
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
    <section className="w-full flex flex-col items-center py-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10">Top Events</h2>
      <div className="relative w-full max-w-7xl">
        <button
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#181824] border border-white/10 rounded-full p-3 shadow-lg hover:bg-[#845EC2] hover:text-white transition-colors"
          onClick={() => scroll('left')}
        >
          <ArrowLeft color="#ffffff" size={22} />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar scrollbar-thin scrollbar-thumb-[#845EC2]/40 scrollbar-track-transparent py-4 px-2 md:px-8 snap-x snap-mandatory"
        >
          {events.map((event, i) => (
            <div
              key={i}
              className="relative rounded-3xl overflow-hidden flex flex-col bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl min-w-[320px] max-w-[320px] snap-center transition-all duration-300 hover:border-[#845EC2] hover:shadow-2xl"
            >
              {/* Top badges */}
              <div className="absolute top-4 left-4 flex gap-2 z-20">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${categoryColors[event.category as keyof typeof categoryColors] || 'border-[#845EC2] text-[#845EC2] bg-white/10'}`}>{event.category}</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold border border-[#0081CF] text-[#0081CF] bg-white/10">{event.distance}</span>
              </div>
              {/* Event image with overlay icons */}
              <div className="relative w-full h-48">
                <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-2 right-4 flex gap-2 z-10">
                  <button className="bg-black/40 hover:bg-[#845EC2]/80 text-white p-2 rounded-full"><Heart color="#ffffff" size={16} /></button>
                  <button className="bg-black/40 hover:bg-[#845EC2]/80 text-white p-2 rounded-full"><Share color="#ffffff" size={16} /></button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#181824cc] to-transparent" />
              </div>
              {/* Card content */}
              <div className="flex flex-col flex-1 px-6 py-4 gap-2">
                <div className="text-lg font-bold text-white mb-1">{event.name}</div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Location color="#845EC2" size={16} />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Calendar color="#845EC2" size={16} />
                  <span>{event.date}</span>
                  <Clock color="#845EC2" size={16} className="ml-4" />
                  <span>{event.time}</span>
                </div>
                {/* Stats row */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-3 text-white/80 text-sm">
                    <span className="flex items-center gap-1"><People color="#ffffff" size={16} /> {event.attendees}</span>
                    <span className="flex items-center gap-1 text-yellow-400"><Star color="#fbbf24" size={16} /> {event.rating}</span>
                  </div>
                  <div className="text-xl font-extrabold text-[#D65DB1]">${event.price}</div>
                </div>
                {/* Action button */}
                <button className="mt-6 w-full py-3 rounded-xl border-2 border-[#845EC2] bg-white/10 text-[#845EC2] font-bold text-lg shadow hover:bg-[#845EC2] hover:text-white transition-all">Get Tickets</button>
              </div>
            </div>
          ))}
        </div>
        <button
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#181824] border border-white/10 rounded-full p-3 shadow-lg hover:bg-[#845EC2] hover:text-white transition-colors"
          onClick={() => scroll('right')}
        >
          <ArrowRight color="#ffffff" size={22} />
        </button>
      </div>
    </section>
  );
};

export default TopEventsSection; 