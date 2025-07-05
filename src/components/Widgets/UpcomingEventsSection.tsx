"use client";
import React, { useRef } from "react";
import { Location, Calendar, Clock, People, Star, Heart, Share, ArrowLeft, ArrowRight } from "iconsax-react";
import { FaFire } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { events } from '@/data/events';

// Filter upcoming events (events happening soon)
const upcomingEvents = events

const categoryColors = {
  Technology: "border-[#845EC2] text-[#845EC2] bg-white/10",
  Music: "border-[#D65DB1] text-[#D65DB1] bg-white/10",
  Gaming: "border-[#0081CF] text-[#0081CF] bg-white/10",
  Art: "border-[#FF6F91] text-[#FF6F91] bg-white/10",
};

const UpcomingEventsSection = () => {
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
      <div className="flex items-center gap-3 mb-10">
        <FaFire color="#FF6F91" size={32} />
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Upcoming Events</h2>
      </div>
      <div className="relative w-full max-w-7xl">
        <button
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#181824] border border-white/10 rounded-full p-3 shadow-lg hover:bg-[#FF6F91] hover:text-white transition-colors"
          onClick={() => scroll('left')}
        >
          <ArrowLeft color="#ffffff" size={22} />
        </button>
        
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scrollbar-thin scrollbar-thumb-[#FF6F91]/40 scrollbar-track-transparent py-4 px-2 md:px-8 snap-x snap-mandatory"
        >
          {upcomingEvents.map((event, i) => (
            <div
              key={event.id}
              className="relative rounded-2xl overflow-hidden flex flex-col bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 shadow-xl min-w-[300px] max-w-[300px] snap-center transition-all duration-300 hover:border-[#FF6F91] hover:shadow-2xl hover:scale-105 cursor-pointer"
              onClick={() => handleEventClick(event.id)}
            >
              {/* Urgency badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 rounded-full text-xs font-bold border border-[#FF6F91] text-[#FF6F91] bg-black/40 backdrop-blur-sm">
                  {event.isFree ? 'FREE' : 'SOON'}
                </span>
              </div>
              {/* Category badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${categoryColors[event.category as keyof typeof categoryColors] || 'border-[#845EC2] text-[#845EC2] bg-white/10'}`}>
                  {event.category}
                </span>
              </div>
              {/* Event image */}
              <div className="relative w-full h-40">
                <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181824cc] to-transparent" />
                <div className="absolute bottom-2 right-2 flex gap-2 z-10">
                  <button 
                    className="bg-black/40 hover:bg-[#FF6F91]/80 text-white p-2 rounded-full transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle like functionality
                    }}
                  >
                    <Heart color="#ffffff" size={14} />
                  </button>
                </div>
              </div>
              {/* Card content */}
              <div className="flex flex-col flex-1 px-5 py-4 gap-3">
                <div className="text-lg font-bold text-white leading-tight">{event.name}</div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Location color="#FF6F91" size={14} />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-4 text-white/70 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar color="#FF6F91" size={14} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock color="#FF6F91" size={14} />
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
                  <div className="text-lg font-bold text-[#FF6F91]">
                    {event.isFree ? 'FREE' : `$${event.price}`}
                  </div>
                </div>
                {/* Action button */}
                <button 
                  className="mt-4 w-full py-2.5 rounded-xl border-2 border-[#FF6F91] bg-[#FF6F91]/10 text-[#FF6F91] font-bold text-sm shadow hover:bg-[#FF6F91] hover:text-white transition-all"
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
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#181824] border border-white/10 rounded-full p-3 shadow-lg hover:bg-[#FF6F91] hover:text-white transition-colors"
          onClick={() => scroll('right')}
        >
          <ArrowRight color="#ffffff" size={22} />
        </button>
      </div>
    </section>
  );
};

export default UpcomingEventsSection; 