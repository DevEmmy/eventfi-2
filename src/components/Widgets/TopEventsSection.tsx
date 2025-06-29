"use client";
import React, { useRef } from "react";
import { Location, Calendar, Clock, People, Star, Heart, Share, ArrowLeft, ArrowRight } from "iconsax-react";
import { useRouter } from 'next/navigation';
import { events } from '@/data/events';

// Get top events (highly rated events)
const topEvents = events
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 10);

const categoryColors = {
  Technology: "border-[#845EC2] text-[#845EC2] bg-white/10",
  Music: "border-[#D65DB1] text-[#D65DB1] bg-white/10",
  Gaming: "border-[#0081CF] text-[#0081CF] bg-white/10",
  Art: "border-[#FF6F91] text-[#FF6F91] bg-white/10",
};

const TopEventsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.8;
    scrollRef.current.scrollTo({
      left: dir === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleEventClick = (eventId: string) => {
    router.push(`/event/${eventId}`);
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
          {topEvents.map((event, i) => (
            <div
              key={event.id}
              className="relative rounded-3xl overflow-hidden flex flex-col bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl min-w-[320px] max-w-[320px] snap-center transition-all duration-300 hover:border-[#845EC2] hover:shadow-2xl cursor-pointer"
              onClick={() => handleEventClick(event.id)}
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
                  <button 
                    className="bg-black/40 hover:bg-[#845EC2]/80 text-white p-2 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle like functionality
                    }}
                  >
                    <Heart color="#ffffff" size={16} />
                  </button>
                  <button 
                    className="bg-black/40 hover:bg-[#845EC2]/80 text-white p-2 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle share functionality
                    }}
                  >
                    <Share color="#ffffff" size={16} />
                  </button>
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
                  <div className="text-xl font-extrabold text-[#D65DB1]">
                    {event.isFree ? 'FREE' : `$${event.price}`}
                  </div>
                </div>
                {/* Action button */}
                <button 
                  className="mt-6 w-full py-3 rounded-xl border-2 border-[#845EC2] bg-white/10 text-[#845EC2] font-bold text-lg shadow hover:bg-[#845EC2] hover:text-white transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEventClick(event.id);
                  }}
                >
                  {event.isFree ? 'RSVP Free' : 'Get Tickets'}
                </button>
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