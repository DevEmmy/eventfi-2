"use client"
import React, { useState, useEffect } from 'react'
import NavBar from '../Widgets/NavBar'
import Footer from '../Widgets/Footer'
import { Location, Calendar, Clock, People, Star, Heart, Share } from "iconsax-react";

// Mock data for events
const mockEvents = [
  {
    id: 1,
    name: "Tech Conference 2024",
    category: "Technology",
    distance: "0.5 miles away",
    date: "Mar 15, 2024",
    time: "09:00 AM",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
    attendees: 320,
    rating: 4.8,
    price: 299,
    description: "Join us for the biggest tech conference of the year featuring industry leaders and cutting-edge innovations."
  },
  {
    id: 2,
    name: "Jazz Night Under the Stars",
    category: "Music",
    distance: "1.2 miles away",
    date: "Mar 20, 2024",
    time: "07:00 PM",
    location: "Central Park, NY",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
    attendees: 89,
    rating: 4.9,
    price: 0,
    description: "An evening of smooth jazz music in the heart of the city."
  },
  {
    id: 3,
    name: "Startup Networking Mixer",
    category: "Business",
    distance: "2.1 miles away",
    date: "Mar 25, 2024",
    time: "06:30 PM",
    location: "Downtown Business Center",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop",
    attendees: 156,
    rating: 4.7,
    price: 50,
    description: "Connect with fellow entrepreneurs and investors in a relaxed networking environment."
  },
  {
    id: 4,
    name: "Art Exhibition Opening",
    category: "Art",
    distance: "0.8 miles away",
    date: "Mar 28, 2024",
    time: "05:00 PM",
    location: "Modern Art Gallery",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=250&fit=crop",
    attendees: 210,
    rating: 4.8,
    price: 25,
    description: "Discover emerging artists and their latest works in this exclusive exhibition."
  },
  {
    id: 5,
    name: "Food & Wine Festival",
    category: "Food & Drink",
    distance: "3.5 miles away",
    date: "Apr 05, 2024",
    time: "12:00 PM",
    location: "City Square",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop",
    attendees: 450,
    rating: 4.9,
    price: 75,
    description: "Taste the finest local and international cuisine paired with exceptional wines."
  },
  {
    id: 6,
    name: "Yoga Retreat Weekend",
    category: "Health & Wellness",
    distance: "4.2 miles away",
    date: "Apr 12, 2024",
    time: "08:00 AM",
    location: "Mountain Resort",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    attendees: 120,
    rating: 4.6,
    price: 199,
    description: "Reconnect with yourself through yoga, meditation, and nature."
  }
]

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

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
                    className="relative rounded-3xl overflow-hidden flex flex-col bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl transition-all duration-300 hover:border-[#845EC2] hover:shadow-2xl"
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
                        <button className="bg-black/40 hover:bg-[#845EC2]/80 text-white p-2 rounded-full">
                          <Heart color="#ffffff" size={16} />
                        </button>
                        <button className="bg-black/40 hover:bg-[#845EC2]/80 text-white p-2 rounded-full">
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
                          {event.price === 0 ? 'Free' : `$${event.price}`}
                        </div>
                      </div>
                      
                      {/* Action button */}
                      <button className="mt-6 w-full py-3 rounded-xl border-2 border-[#845EC2] bg-white/10 text-[#845EC2] font-bold text-lg shadow hover:bg-[#845EC2] hover:text-white transition-all">
                        Get Tickets
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