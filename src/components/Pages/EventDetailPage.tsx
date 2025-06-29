"use client"
import React, { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import NavBar from '../Widgets/NavBar'
import Footer from '../Widgets/Footer'
import { 
  Location, 
  Calendar, 
  Clock, 
  People, 
  Star, 
  Heart, 
  Share, 
  ArrowLeft,
  Map,
  Ticket,
  User,
  Building,
  Clock as ClockIcon,
  Crown,
  Check,
  
} from "iconsax-react"
import { getEventById } from '@/data/events'

interface EventDetailPageProps {
  eventId: string
}

const EventDetailPage = () => {
  const router = useRouter()
  const [selectedTicketType, setSelectedTicketType] = useState<string>('')
  const [isLiked, setIsLiked] = useState(false)
  
  const { id: eventId } = useParams()
  const event = getEventById(eventId as string)
  
  if (!event) {
    return (
      <div className='text-white/90 min-h-screen'>
        <NavBar />
        <div className='pt-20 pb-12 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto text-center'>
            <div className='text-6xl mb-4'>😕</div>
            <h1 className='text-4xl font-bold mb-4'>Event Not Found</h1>
            <p className='text-xl text-gray-300 mb-8'>
              The event you're looking for doesn't exist or has been removed.
            </p>
            <button 
              onClick={() => router.push('/explore')}
              className='px-6 py-3 rounded-full bg-[#845EC2] text-white font-semibold hover:bg-[#6d4fa1] transition-colors'
            >
              Browse Events
            </button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

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
  }

  const handleGetTickets = () => {
    if (selectedTicketType) {
      // Handle ticket purchase logic here
      alert(`Redirecting to purchase ${selectedTicketType} tickets for ${event.name}`)
    } else {
      alert('Please select a ticket type')
    }
  }

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

      {/* Back Button */}
      <div className='pt-20 pb-6 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <button 
            onClick={() => router.back()}
            className='flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6'
          >
            <ArrowLeft size={20} color='white'/>
            Back to Events
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className='px-4 sm:px-6 lg:px-8 pb-12'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Main Content */}
            <div className='lg:col-span-2'>
              {/* Event Image */}
              <div className='relative rounded-3xl overflow-hidden mb-8'>
                <img 
                  src={event.image} 
                  alt={event.name}
                  className='w-full h-[400px] md:h-[500px] object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-[#181824cc] to-transparent' />
                
                {/* Badges */}
                <div className='absolute top-6 left-6 flex gap-3 z-10'>
                  {event.isFeatured && (
                    <span className='px-3 py-1 rounded-full text-xs font-bold border border-[#FFD700] text-[#FFD700] bg-black/40 backdrop-blur-sm flex items-center gap-1'>
                      <Crown color="#FFD700" size={12} />
                      FEATURED
                    </span>
                  )}
                  {event.isFree && (
                    <span className='px-3 py-1 rounded-full text-xs font-bold border border-[#00C9A7] text-[#00C9A7] bg-black/40 backdrop-blur-sm'>
                      FREE
                    </span>
                  )}
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${categoryColors[event.category as keyof typeof categoryColors] || 'border-[#845EC2] text-[#845EC2] bg-white/10'}`}>
                    {event.category}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className='absolute top-6 right-6 flex gap-2 z-10'>
                  <button 
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-3 rounded-full transition-colors ${isLiked ? 'bg-[#FF6F91] text-white' : 'bg-black/40 hover:bg-[#FF6F91]/80 text-white'}`}
                  >
                    <Heart color={isLiked ? "#ffffff" : "#ffffff"} size={20} />
                  </button>
                  <button className='bg-black/40 hover:bg-[#845EC2]/80 text-white p-3 rounded-full transition-colors'>
                    <Share color="#ffffff" size={20} />
                  </button>
                </div>
              </div>

              {/* Event Details */}
              <div className='space-y-8'>
                {/* Title and Description */}
                <div>
                  <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>{event.name}</h1>
                  <p className='text-xl text-white/70 leading-relaxed'>{event.description}</p>
                </div>

                {/* Key Information */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='flex items-center gap-3 text-white/80'>
                    <Location color="#845EC2" size={24} />
                    <div>
                      <p className='font-semibold'>{event.location}</p>
                      <p className='text-sm text-white/60'>{event.venue.address}, {event.venue.city}, {event.venue.state} {event.venue.zipCode}</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-3 text-white/80'>
                    <Calendar color="#845EC2" size={24} />
                    <div>
                      <p className='font-semibold'>{event.date}</p>
                      <p className='text-sm text-white/60'>{event.time}</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-3 text-white/80'>
                    <People color="#845EC2" size={24} />
                    <div>
                      <p className='font-semibold'>{event.attendees} attendees</p>
                      <p className='text-sm text-white/60'>Capacity: {event.venue.capacity}</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-3 text-white/80'>
                    <Star color="#fbbf24" size={24} />
                    <div>
                      <p className='font-semibold'>{event.rating}/5.0 rating</p>
                      <p className='text-sm text-white/60'>Based on reviews</p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h3 className='text-lg font-semibold text-white mb-3'>Tags</h3>
                  <div className='flex flex-wrap gap-2'>
                    {event.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className='px-3 py-1 rounded-full text-sm border border-white/20 text-white/80 bg-white/5'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h3 className='text-lg font-semibold text-white mb-3'>Highlights</h3>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    {event.highlights.map((highlight, index) => (
                      <div key={index} className='flex items-center gap-2 text-white/80'>
                        <Check color="#00C9A7" size={16} />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Agenda */}
                <div>
                  <h3 className='text-lg font-semibold text-white mb-4'>Event Agenda</h3>
                  <div className='space-y-3'>
                    {event.agenda.map((item, index) => (
                      <div key={index} className='flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10'>
                        <div className='flex-shrink-0'>
                          <div className='text-[#845EC2] font-semibold'>{item.time}</div>
                        </div>
                        <div>
                          <h4 className='font-semibold text-white mb-1'>{item.title}</h4>
                          <p className='text-white/70 text-sm'>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Speakers */}
                {event.speakers && event.speakers.length > 0 && (
                  <div>
                    <h3 className='text-lg font-semibold text-white mb-4'>Featured Speakers</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                      {event.speakers.map((speaker, index) => (
                        <div key={index} className='flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10'>
                          <img 
                            src={speaker.image} 
                            alt={speaker.name}
                            className='w-12 h-12 rounded-full object-cover'
                          />
                          <div>
                            <h4 className='font-semibold text-white'>{speaker.name}</h4>
                            <p className='text-white/70 text-sm'>{speaker.title}</p>
                            <p className='text-white/60 text-xs'>{speaker.company}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Organizer */}
                <div>
                  <h3 className='text-lg font-semibold text-white mb-4'>Organizer</h3>
                  <div className='flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10'>
                    <img 
                      src={event.organizerImage} 
                      alt={event.organizer}
                      className='w-16 h-16 rounded-full object-cover'
                    />
                    <div>
                      <h4 className='font-semibold text-white'>{event.organizer}</h4>
                      <p className='text-white/70 text-sm'>Event Organizer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className='lg:col-span-1'>
              <div className='sticky top-24 space-y-6'>
                {/* Ticket Selection */}
                <div className='bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20'>
                  <h3 className='text-xl font-bold text-white mb-4'>Get Tickets</h3>
                  <div className='space-y-4'>
                    {event.tickets.map((ticket, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          selectedTicketType === ticket.type 
                            ? 'border-[#845EC2] bg-[#845EC2]/10' 
                            : 'border-white/20 bg-white/5 hover:border-white/40'
                        }`}
                        onClick={() => setSelectedTicketType(ticket.type)}
                      >
                        <div className='flex justify-between items-start mb-2'>
                          <h4 className='font-semibold text-white'>{ticket.type}</h4>
                          <div className='text-right'>
                            <div className='text-2xl font-bold text-[#845EC2]'>
                              {ticket.price === 0 ? 'FREE' : `$${ticket.price}`}
                            </div>
                            <div className='text-sm text-white/60'>
                              {ticket.available} available
                            </div>
                          </div>
                        </div>
                        <ul className='space-y-1'>
                          {ticket.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className='flex items-center gap-2 text-sm text-white/80'>
                              <Check color="#00C9A7" size={14} />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={handleGetTickets}
                    className='w-full mt-6 py-3 rounded-xl bg-[#845EC2] text-white font-bold text-lg hover:bg-[#6d4fa1] transition-colors'
                  >
                    {event.isFree ? 'RSVP Free' : 'Get Tickets'}
                  </button>
                </div>

                {/* Venue Information */}
                <div className='bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20'>
                  <h3 className='text-xl font-bold text-white mb-4 flex items-center gap-2'>
                    <Building color="#845EC2" size={24} />
                    Venue
                  </h3>
                  <div className='space-y-3'>
                    <div>
                      <h4 className='font-semibold text-white'>{event.venue.name}</h4>
                      <p className='text-white/70 text-sm'>{event.venue.address}</p>
                      <p className='text-white/70 text-sm'>{event.venue.city}, {event.venue.state} {event.venue.zipCode}</p>
                    </div>
                    <div>
                      <h5 className='font-semibold text-white mb-2'>Amenities</h5>
                      <div className='flex flex-wrap gap-2'>
                        {event.venue.amenities.map((amenity, index) => (
                          <span key={index} className='px-2 py-1 rounded-full text-xs bg-white/10 text-white/80'>
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Stats */}
                <div className='bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20'>
                  <h3 className='text-xl font-bold text-white mb-4'>Event Stats</h3>
                  <div className='space-y-4'>
                    <div className='flex justify-between items-center'>
                      <span className='text-white/70'>Attendees</span>
                      <span className='font-semibold text-white'>{event.attendees}</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-white/70'>Rating</span>
                      <span className='font-semibold text-white flex items-center gap-1'>
                        <Star color="#fbbf24" size={16} />
                        {event.rating}/5.0
                      </span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-white/70'>Capacity</span>
                      <span className='font-semibold text-white'>{event.venue.capacity}</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-white/70'>Distance</span>
                      <span className='font-semibold text-white'>{event.distance}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default EventDetailPage 