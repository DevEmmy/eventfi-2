"use client";
import React, { useRef } from "react";
import { Location, Calendar, Clock, People, Star, Heart, Share, ArrowLeft, ArrowRight, Map } from "iconsax-react";
import { useRouter } from 'next/navigation';
import { events } from '@/data/events';

// Filter local events (events within 1 mile)
const localEvents = events.filter(event => {
  const distance = parseFloat(event.distance.split(' ')[0]);
  return distance <= 1.0;
});

const categoryColors = {
  Networking: "border-[#845EC2] text-[#845EC2] bg-white/10",
  Education: "border-[#00C9A7] text-[#00C9A7] bg-white/10",
  Art: "border-[#FF6F91] text-[#FF6F91] bg-white/10",
  Social: "border-[#D65DB1] text-[#D65DB1] bg-white/10",
  Wellness: "border-[#0081CF] text-[#0081CF] bg-white/10",
  Entertainment: "border-[#FF9671] text-[#FF9671] bg-white/10",
};

const LocalEventsSection = () => {
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
    <section className="w-full flex flex-col items-center py-20 ">
      <div className="flex items-center gap-3 mb-10">
        <Map color="#0081CF" size={32} />
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Local Events</h2>
        <span className="px-3 py-1 rounded-full text-sm font-bold border border-[#0081CF] text-[#0081CF] bg-[#0081CF]/10">
          Nearby
        </span>
      </div>
      <div className="relative w-full max-w-7xl">
        <button
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#181824] border border-white/10 rounded-full p-3 shadow-lg hover:bg-[#0081CF] hover:text-white transition-colors"
          onClick={() => scroll('left')}
        >
          <ArrowLeft color="#ffffff" size={22} />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar scrollbar-thin scrollbar-thumb-[#0081CF]/40 scrollbar-track-transparent py-4 px-2 md:px-8 snap-x snap-mandatory"
        >
          {localEvents.map((event, i) => (
            <div
              key={event.id}
              className="relative rounded-xl overflow-hidden flex flex-col bg-gradient-to-br from-[#0081CF]/10 to-transparent backdrop-blur-xl border border-[#0081CF]/30 shadow-lg min-w-[280px] max-w-[280px] snap-center transition-all duration-300 hover:border-[#0081CF] hover:shadow-xl hover:scale-105 cursor-pointer"
              onClick={() => handleEventClick(event.id)}
            >
              {/* Distance badge */}
              <div className="absolute top-3 left-3 z-20">
                <span className="px-2 py-1 rounded-full text-xs font-bold border border-[#0081CF] text-[#0081CF] bg-black/40 backdrop-blur-sm">
                  {event.distance}
                </span>
              </div>
              {/* Free badge */}
              {event.isFree && (
                <div className="absolute top-3 right-3 z-20">
                  <span className="px-2 py-1 rounded-full text-xs font-bold border border-[#00C9A7] text-[#00C9A7] bg-black/40 backdrop-blur-sm">
                    FREE
                  </span>
                </div>
              )}
              {/* Category badge */}
              <div className={`absolute ${event.isFree ? 'top-12' : 'top-12'} right-3 z-20`}>
                <span className={`px-2 py-1 rounded-full text-xs font-bold border ${categoryColors[event.category as keyof typeof categoryColors] || 'border-[#845EC2] text-[#845EC2] bg-white/10'}`}>
                  {event.category}
                </span>
              </div>
              {/* Event image */}
              <div className="relative w-full h-36">
                <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181824cc] to-transparent" />
                <div className="absolute bottom-2 right-2 z-10">
                  <button 
                    className="bg-black/40 hover:bg-[#0081CF]/80 text-white p-1.5 rounded-full transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle like functionality
                    }}
                  >
                    <Heart color="#ffffff" size={12} />
                  </button>
                </div>
              </div>
              {/* Card content */}
              <div className="flex flex-col flex-1 px-4 py-3 gap-2">
                <div className="text-base font-bold text-white leading-tight">{event.name}</div>
                <div className="flex items-center gap-1 text-white/70 text-xs">
                  <Location color="#0081CF" size={12} />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-3 text-white/70 text-xs">
                  <div className="flex items-center gap-1">
                    <Calendar color="#0081CF" size={12} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock color="#0081CF" size={12} />
                    <span>{event.time}</span>
                  </div>
                </div>
                {/* Stats row */}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2 text-white/70 text-xs">
                    <span className="flex items-center gap-1">
                      <People color="#ffffff" size={12} /> {event.attendees}
                    </span>
                    <span className="flex items-center gap-1 text-yellow-400">
                      <Star color="#fbbf24" size={12} /> {event.rating}
                    </span>
                  </div>
                  <div className="text-sm font-bold text-[#0081CF]">
                    {event.isFree ? 'FREE' : `$${event.price}`}
                  </div>
                </div>
                {/* Action button */}
                <button 
                  className="mt-3 w-full py-2 rounded-lg border border-[#0081CF] bg-[#0081CF]/10 text-[#0081CF] font-bold text-sm shadow hover:bg-[#0081CF] hover:text-white transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEventClick(event.id);
                  }}
                >
                  {event.isFree ? 'RSVP' : 'Get Tickets'}
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#181824] border border-white/10 rounded-full p-3 shadow-lg hover:bg-[#0081CF] hover:text-white transition-colors"
          onClick={() => scroll('right')}
        >
          <ArrowRight color="#ffffff" size={22} />
        </button>
      </div>
    </section>
  );
};

export default LocalEventsSection; 