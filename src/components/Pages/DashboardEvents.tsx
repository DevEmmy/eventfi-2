"use client"
import React, { useState } from 'react';
import { 
  Calendar, 
  Add, 
  Edit, 
  Trash, 
  SearchNormal, 
  Filter, 
  Sort, 
  Eye,
  User,
  Map,
  Clock,
  Star,
  Heart,
  Share,
  More,
  TickCircle,
  CloseCircle,
  Crown,
  Award,
  Wallet,
  Ticket
} from 'iconsax-react';

const DashboardEvents = () => {
  const [activeTab, setActiveTab] = useState('my-events');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Mock events data
  const myEvents = [
    {
      id: 'web3-meetup',
      title: 'Web3 Meetup San Francisco',
      date: 'Dec 30, 2024',
      time: '6:00 PM',
      location: 'San Francisco, CA',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=400&q=80',
      attendees: 120,
      maxAttendees: 150,
      status: 'upcoming',
      type: 'created',
      price: 25,
      category: 'Technology',
      description: 'Join us for an evening of networking and discussions about the future of Web3 technology.'
    },
    {
      id: 'crypto-gallery',
      title: 'Crypto Art Gallery Opening',
      date: 'Dec 12, 2024',
      time: '7:00 PM',
      location: 'Downtown Gallery',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=400&q=80',
      attendees: 85,
      maxAttendees: 100,
      status: 'upcoming',
      type: 'created',
      price: 0,
      category: 'Art',
      description: 'Exhibition featuring the latest in crypto art and digital collectibles.'
    },
    {
      id: 'blockchain-summit',
      title: 'Blockchain Summit 2024',
      date: 'Nov 15, 2024',
      time: '9:00 AM',
      location: 'Convention Center',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=400&q=80',
      attendees: 450,
      maxAttendees: 500,
      status: 'completed',
      type: 'created',
      price: 150,
      category: 'Technology',
      description: 'Annual blockchain conference featuring industry leaders and innovators.'
    }
  ];

  const attendingEvents = [
    {
      id: 'ethereum-summit',
      title: 'Ethereum Summit 2024',
      date: 'Dec 30, 2024',
      time: '9:00 AM',
      location: 'San Francisco',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=400&q=80',
      attendees: 1200,
      maxAttendees: 1500,
      status: 'upcoming',
      type: 'attending',
      price: 75,
      category: 'Technology',
      description: 'The premier Ethereum conference featuring the latest developments in the ecosystem.'
    },
    {
      id: 'defi-workshop',
      title: 'DeFi Workshop & Networking',
      date: 'Dec 20, 2024',
      time: '2:00 PM',
      location: 'Tech Hub',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=400&q=80',
      attendees: 45,
      maxAttendees: 60,
      status: 'upcoming',
      type: 'attending',
      price: 50,
      category: 'Finance',
      description: 'Hands-on workshop on DeFi protocols and yield farming strategies.'
    }
  ];

  const eventTabs = [
    {
      id: 'my-events',
      title: 'My Events',
      icon: Crown,
      color: '#FFD700',
      count: myEvents.length
    },
    {
      id: 'attending',
      title: 'Attending',
      icon: Ticket,
      color: '#845EC2',
      count: attendingEvents.length
    }
  ];

  const filters = [
    { id: 'all', label: 'All Events', color: '#845EC2' },
    { id: 'upcoming', label: 'Upcoming', color: '#2CB67D' },
    { id: 'completed', label: 'Completed', color: '#FF6B6B' },
    { id: 'free', label: 'Free', color: '#4ECDC4' },
    { id: 'paid', label: 'Paid', color: '#FBBF24' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30' };
      case 'completed':
        return { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' };
      case 'cancelled':
        return { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/30' };
      default:
        return { bg: 'bg-gray-500/20', text: 'text-gray-400', border: 'border-gray-500/30' };
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'created':
        return { bg: 'bg-[#FFD700]/20', text: 'text-[#FFD700]', border: 'border-[#FFD700]/30' };
      case 'attending':
        return { bg: 'bg-[#845EC2]/20', text: 'text-[#845EC2]', border: 'border-[#845EC2]/30' };
      default:
        return { bg: 'bg-gray-500/20', text: 'text-gray-400', border: 'border-gray-500/30' };
    }
  };

  const currentEvents = activeTab === 'my-events' ? myEvents : attendingEvents;

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Events</h1>
          <p className="text-white/70">Manage your events and track attendance</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-[#845EC2] hover:bg-[#6d4fa1] text-white rounded-lg transition-colors duration-200">
          <Add size={16} color='white'/>
          <span>Create Event</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm font-medium">Total Events</p>
              <p className="text-3xl font-bold text-white mt-1">{myEvents.length + attendingEvents.length}</p>
              <p className="text-xs text-white/50 mt-1">+2 this month</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-[#845EC2]/20 flex items-center justify-center">
              <Calendar size={28} color="#845EC2" />
            </div>
          </div>
        </div>
        
        <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm font-medium">Events Created</p>
              <p className="text-3xl font-bold text-white mt-1">{myEvents.length}</p>
              <p className="text-xs text-white/50 mt-1">+1 this month</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-[#FFD700]/20 flex items-center justify-center">
              <Crown size={28} color="#FFD700" />
            </div>
          </div>
        </div>
        
        <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm font-medium">Events Attending</p>
              <p className="text-3xl font-bold text-white mt-1">{attendingEvents.length}</p>
              <p className="text-xs text-white/50 mt-1">+1 this month</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-[#845EC2]/20 flex items-center justify-center">
              <Ticket size={28} color="#845EC2" />
            </div>
          </div>
        </div>
        
        <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm font-medium">Total Attendees</p>
              <p className="text-3xl font-bold text-white mt-1">1,900</p>
              <p className="text-xs text-white/50 mt-1">+15% from last month</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-[#2CB67D]/20 flex items-center justify-center">
              <User size={28} color="#2CB67D" />
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-black/30 rounded-lg p-1">
        {eventTabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-[#845EC2] text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <IconComponent size={16} color={activeTab === tab.id ? 'white' : tab.color} />
              <span className="text-sm font-medium">{tab.title}</span>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-white/20">
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <SearchNormal size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-black/50 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#845EC2]"
          />
        </div>
        
        <div className="flex space-x-2">
          <div className="relative">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="appearance-none pl-4 pr-10 py-3 bg-black/50 backdrop-blur-md border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#845EC2]"
            >
              {filters.map((filter) => (
                <option key={filter.id} value={filter.id} className="bg-black text-white">
                  {filter.label}
                </option>
              ))}
            </select>
            <Filter size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 pointer-events-none" />
          </div>
          
          <button className="px-4 py-3 bg-black/50 backdrop-blur-md border border-white/20 rounded-lg text-white hover:border-[#845EC2] transition-colors">
            <Sort size={16} />
          </button>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {currentEvents.map((event) => {
          const statusColors = getStatusColor(event.status);
          const typeColors = getEventTypeColor(event.type);
          const attendancePercentage = (event.attendees / event.maxAttendees) * 100;
          
          return (
            <div key={event.id} className="bg-black/50 backdrop-blur-md rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 overflow-hidden group">
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Status Badge */}
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${statusColors.bg} ${statusColors.text} ${statusColors.border}`}>
                  {event.status}
                </div>
                
                {/* Type Badge */}
                <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${typeColors.bg} ${typeColors.text} ${typeColors.border}`}>
                  {event.type}
                </div>
                
                {/* Action Buttons */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="flex space-x-1">
                    <button className="w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#845EC2] transition-colors">
                      <Eye size={14} color="white" />
                    </button>
                    <button className="w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#2CB67D] transition-colors">
                      <Edit size={14} color="white" />
                    </button>
                    <button className="w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#FF6B6B] transition-colors">
                      <Trash size={14} color="white" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Event Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#845EC2] transition-colors">
                    {event.title}
                  </h3>
                  <button className="text-white/60 hover:text-[#845EC2] transition-colors">
                    <More size={16} />
                  </button>
                </div>
                
                <p className="text-white/70 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>
                
                {/* Event Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-white/60">
                    <Clock size={14} color="#845EC2" />
                    <span>{event.date} at {event.time}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-white/60">
                    <Map size={14} color="#845EC2" />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-white/60">
                    <User size={14} color="#845EC2" />
                    <span>{event.attendees}/{event.maxAttendees} attendees</span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs text-white/60 mb-1">
                    <span>Attendance</span>
                    <span>{Math.round(attendancePercentage)}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div 
                      className="bg-[#845EC2] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${attendancePercentage}%` }}
                    />
                  </div>
                </div>
                
                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-white">
                      {event.price === 0 ? 'Free' : `$${event.price}`}
                    </span>
                    <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full">
                      {event.category}
                    </span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="p-2 text-white/60 hover:text-[#845EC2] transition-colors">
                      <Heart size={16} />
                    </button>
                    <button className="p-2 text-white/60 hover:text-[#845EC2] transition-colors">
                      <Share size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {currentEvents.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-[#845EC2]/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar size={32} color="#845EC2" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No events found</h3>
          <p className="text-white/60 mb-6">Create your first event or browse upcoming events</p>
          <button className="px-6 py-3 bg-[#845EC2] hover:bg-[#6d4fa1] text-white rounded-lg transition-colors">
            Create Event
          </button>
        </div>
      )}
    </div>
  );
};

export default DashboardEvents; 