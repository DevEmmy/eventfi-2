"use client"
import React, { useState, useEffect } from 'react'
import NavBar from '../Widgets/NavBar'
import Footer from '../Widgets/Footer'
import { Location, Calendar, Clock, People, Star, Heart, Share } from "iconsax-react";
import { useRouter } from 'next/navigation';
import { events, searchEvents, getEventsByCategory } from '@/data/events';

const categories = [
  "All",
  "Technology",
  "Music",
  "Business",
  "Art",
  "Food & Drink",
  "Health & Wellness",
  "Sports",
  "Education"
]

const categoryColors = {
  Technology: "border-[#845EC2] text-[#845EC2] bg-white/10",
  Music: "border-[#D65DB1] text-[#D65DB1] bg-white/10",
  Gaming: "border-[#0081CF] text-[#0081CF] bg-white/10",
  Art: "border-[#FF6F91] text-[#FF6F91] bg-white/10",
  Business: "border-[#2cb67d] text-[#2cb67d] bg-white/10",
  "Food & Drink": "border-[#fbbf24] text-[#fbbf24] bg-white/10",
  "Health & Wellness": "border-[#FF6F91] text-[#FF6F91] bg-white/10",
  Sports: "border-[#0081CF] text-[#0081CF] bg-white/10",
  Education: "border-[#845EC2] text-[#845EC2] bg-white/10",
};

const ExplorePage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('date')
  const router = useRouter()

  // Handle URL search parameters
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const searchParam = urlParams.get('search')
      if (searchParam) {
        setSearchTerm(searchParam)
      }
    }
  }, [])

  // Get filtered events based on search and category
  let filteredEvents = searchTerm 
    ? searchEvents(searchTerm)
    : getEventsByCategory(selectedCategory)

  // Apply category filter if not searching
  if (!searchTerm && selectedCategory !== 'All') {
    filteredEvents = filteredEvents.filter(event => event.category === selectedCategory)
  }

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      case 'price':
        return a.price - b.price
      case 'title':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  const handleEventClick = (eventId: string) => {
    router.push(`/event/${eventId}`);
  };

  return (
    <div className='text-white/90 min-h-screen'>
      <NavBar />

      {/* Light background effect */}
      <div
        className="pointer-events-none fixed left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[320px] md:w-[600px] md:h-[400px] z-0"
        aria-hidden
      >
        <div
          className="w-full h-screen rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(ellipse at center, #fff 0%, #fff0 70%)',
          }}
        />
      </div>
      
      {/* Hero Section */}
      <div className='pt-20 pb-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto text-center'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 '>
            Explore Events
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto mb-8'>
            Discover amazing events happening around you. From tech conferences to music festivals, 
            find your next unforgettable experience.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className='px-4 sm:px-6 lg:px-8 mb-12'>
        <div className='max-w-7xl mx-auto'>
          <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              {/* Search */}
              <div>
                <label className='block text-sm font-medium text-gray-300 mb-2'>Search Events</label>
                <input
                  type='text'
                  placeholder='Search by title, description, or location...'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
              </div>

              {/* Category Filter */}
              <div>
                <label className='block text-sm font-medium text-gray-300 mb-2'>Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className='block text-sm font-medium text-gray-300 mb-2'>Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                >
                  <option value='date'>Date</option>
                  <option value='price'>Price</option>
                  <option value='title'>Title</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className='px-4 sm:px-6 lg:px-8 pb-20'>
        <div className='max-w-7xl mx-auto'>
          {sortedEvents.length === 0 ? (
            <div className='text-center py-12'>
              <div className='text-6xl mb-4'>🔍</div>
              <h3 className='text-2xl font-semibold text-gray-300 mb-2'>No events found</h3>
              <p className='text-gray-400'>Try adjusting your search criteria or browse all events.</p>
            </div>
          ) : (
            <>
              <div className='mb-8'>
                <h2 className='text-2xl font-semibold text-gray-300'>
                  {sortedEvents.length} event{sortedEvents.length !== 1 ? 's' : ''} found
                </h2>
              </div>
              
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {sortedEvents.map(event => (
                  <div
                    key={event.id}
                    className="relative rounded-3xl overflow-hidden flex flex-col bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl transition-all duration-300 hover:border-[#845EC2] hover:shadow-2xl cursor-pointer"
                    onClick={() => handleEventClick(event.id)}
                  >
                    {/* Top badges */}
                    <div className="absolute top-4 left-4 flex gap-2 z-20">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${categoryColors[event.category as keyof typeof categoryColors] || 'border-[#845EC2] text-[#845EC2] bg-white/10'}`}>
                        {event.category}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-bold border border-[#0081CF] text-[#0081CF] bg-white/10">
                        {event.distance}
                      </span>
                    </div>
                    
                    {/* Event image with overlay icons */}
                    <div className="relative w-full h-48">
                      <img 
                        src={event.image} 
                        alt={event.name}
                        className="w-full h-full object-cover"
                      />
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
                          <span className="flex items-center gap-1">
                            <People color="#ffffff" size={16} /> {event.attendees}
                          </span>
                          <span className="flex items-center gap-1 text-yellow-400">
                            <Star color="#fbbf24" size={16} /> {event.rating}
                          </span>
                        </div>
                        <div className="text-xl font-extrabold text-[#D65DB1]">
                          {event.isFree ? 'Free' : `$${event.price}`}
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
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ExplorePage 