"use client"
import React, { useState } from 'react';
import { 
  Bookmark, 
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
  Calendar,
  DocumentDownload,
  Printer,
  Code,
  Check,
  Notification,
  MessageCircle
} from 'iconsax-react';

const DashboardSaved = () => {
  const [activeTab, setActiveTab] = useState('all-saved');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Mock saved events data
  const savedEvents = [
    {
      id: 'event-001',
      title: 'Ethereum Summit 2024',
      date: 'Dec 30, 2024',
      time: '9:00 AM',
      location: 'San Francisco, CA',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=400&q=80',
      price: 150,
      status: 'upcoming',
      category: 'Technology',
      description: 'The premier Ethereum conference featuring the latest developments in the ecosystem.',
      attendees: 1200,
      maxAttendees: 1500,
      organizer: 'Ethereum Foundation',
      savedDate: 'Nov 15, 2024',
      notifications: true,
      tags: ['Blockchain', 'Web3', 'Networking']
    },
    {
      id: 'event-002',
      title: 'Crypto Art Gallery Opening',
      date: 'Dec 12, 2024',
      time: '7:00 PM',
      location: 'Downtown Gallery',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=400&q=80',
      price: 0,
      status: 'upcoming',
      category: 'Art',
      description: 'Exhibition featuring the latest in crypto art and digital collectibles.',
      attendees: 85,
      maxAttendees: 100,
      organizer: 'Digital Art Collective',
      savedDate: 'Dec 1, 2024',
      notifications: true,
      tags: ['NFT', 'Art', 'Gallery']
    },
    {
      id: 'event-003',
      title: 'DeFi Workshop & Networking',
      date: 'Dec 20, 2024',
      time: '2:00 PM',
      location: 'Tech Hub',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=400&q=80',
      price: 75,
      status: 'upcoming',
      category: 'Finance',
      description: 'Hands-on workshop on DeFi protocols and yield farming strategies.',
      attendees: 45,
      maxAttendees: 60,
      organizer: 'DeFi Academy',
      savedDate: 'Nov 20, 2024',
      notifications: true,
      tags: ['DeFi', 'Workshop', 'Finance']
    },
    {
      id: 'event-004',
      title: 'Web3 Meetup San Francisco',
      date: 'Dec 30, 2024',
      time: '6:00 PM',
      location: 'San Francisco, CA',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=400&q=80',
      price: 25,
      status: 'upcoming',
      category: 'Technology',
      description: 'Monthly networking event for Web3 enthusiasts and professionals.',
      attendees: 120,
      maxAttendees: 150,
      organizer: 'Web3 SF',
      savedDate: 'Nov 10, 2024',
      notifications: false,
      tags: ['Networking', 'Web3', 'Meetup']
    },
    {
      id: 'event-005',
      title: 'Blockchain Developer Conference',
      date: 'Jan 15, 2025',
      time: '10:00 AM',
      location: 'Convention Center',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=400&q=80',
      price: 200,
      status: 'upcoming',
      category: 'Technology',
      description: 'Annual conference for blockchain developers and architects.',
      attendees: 800,
      maxAttendees: 1000,
      organizer: 'Blockchain Devs',
      savedDate: 'Dec 5, 2024',
      notifications: true,
      tags: ['Development', 'Blockchain', 'Conference']
    },
    {
      id: 'event-006',
      title: 'NFT Marketplace Launch',
      date: 'Jan 8, 2025',
      time: '3:00 PM',
      location: 'Virtual Event',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=400&q=80',
      price: 0,
      status: 'upcoming',
      category: 'Art',
      description: 'Launch event for a new NFT marketplace platform.',
      attendees: 250,
      maxAttendees: 500,
      organizer: 'NFT Labs',
      savedDate: 'Dec 10, 2024',
      notifications: true,
      tags: ['NFT', 'Launch', 'Virtual']
    }
  ];

  const savedTabs = [
    {
      id: 'all-saved',
      title: 'All Saved',
      icon: Bookmark,
      color: '#845EC2',
      count: savedEvents.length
    },
    {
      id: 'upcoming',
      title: 'Upcoming',
      icon: Calendar,
      color: '#2CB67D',
      count: savedEvents.filter(e => e.status === 'upcoming').length
    },
    {
      id: 'free',
      title: 'Free Events',
      icon: Heart,
      color: '#4ECDC4',
      count: savedEvents.filter(e => e.price === 0).length
    },
    {
      id: 'paid',
      title: 'Paid Events',
      icon: Wallet,
      color: '#FBBF24',
      count: savedEvents.filter(e => e.price > 0).length
    }
  ];

  const filters = [
    { id: 'all', label: 'All Events', color: '#845EC2' },
    { id: 'technology', label: 'Technology', color: '#2CB67D' },
    { id: 'art', label: 'Art', color: '#FF6B6B' },
    { id: 'finance', label: 'Finance', color: '#4ECDC4' },
    { id: 'networking', label: 'Networking', color: '#D65DB1' }
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

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'technology':
        return { bg: 'bg-[#2CB67D]/20', text: 'text-[#2CB67D]', border: 'border-[#2CB67D]/30' };
      case 'art':
        return { bg: 'bg-[#FF6B6B]/20', text: 'text-[#FF6B6B]', border: 'border-[#FF6B6B]/30' };
      case 'finance':
        return { bg: 'bg-[#4ECDC4]/20', text: 'text-[#4ECDC4]', border: 'border-[#4ECDC4]/30' };
      default:
        return { bg: 'bg-[#845EC2]/20', text: 'text-[#845EC2]', border: 'border-[#845EC2]/30' };
    }
  };

  const filteredEvents = savedEvents.filter(event => {
    if (activeTab === 'all-saved') return true;
    if (activeTab === 'upcoming') return event.status === 'upcoming';
    if (activeTab === 'free') return event.price === 0;
    if (activeTab === 'paid') return event.price > 0;
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Saved Events</h1>
          <p className="text-white/70">Your bookmarked events and favorites</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-[#845EC2] hover:bg-[#6d4fa1] text-white rounded-lg transition-colors duration-200">
          <Add size={16} color="white" />
          <span>Browse Events</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm font-medium">Total Saved</p>
              <p className="text-3xl font-bold text-white mt-1">{savedEvents.length}</p>
              <p className="text-xs text-white/50 mt-1">+3 this month</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-[#845EC2]/20 flex items-center justify-center">
              <Bookmark size={28} color="#845EC2" />
            </div>
          </div>
        </div>
        
        <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm font-medium">Upcoming</p>
              <p className="text-3xl font-bold text-white mt-1">{savedEvents.filter(e => e.status === 'upcoming').length}</p>
              <p className="text-xs text-white/50 mt-1">Next: Dec 12</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-[#2CB67D]/20 flex items-center justify-center">
              <Calendar size={28} color="#2CB67D" />
            </div>
          </div>
        </div>
        
        <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm font-medium">Free Events</p>
              <p className="text-3xl font-bold text-white mt-1">{savedEvents.filter(e => e.price === 0).length}</p>
              <p className="text-xs text-white/50 mt-1">No cost</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-[#4ECDC4]/20 flex items-center justify-center">
              <Heart size={28} color="#4ECDC4" />
            </div>
          </div>
        </div>
        
        <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm font-medium">Paid Events</p>
              <p className="text-3xl font-bold text-white mt-1">{savedEvents.filter(e => e.price > 0).length}</p>
              <p className="text-xs text-white/50 mt-1">Total: $450</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-[#FBBF24]/20 flex items-center justify-center">
              <Wallet size={28} color="#FBBF24" />
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-black/30 rounded-lg p-1">
        {savedTabs.map((tab) => {
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
            placeholder="Search saved events..."
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
        {filteredEvents.map((event) => {
          const statusColors = getStatusColor(event.status);
          const categoryColors = getCategoryColor(event.category);
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
                
                {/* Category Badge */}
                <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${categoryColors.bg} ${categoryColors.text} ${categoryColors.border}`}>
                  {event.category}
                </div>
                
                {/* Action Buttons */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="flex space-x-1">
                    <button className="w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#845EC2] transition-colors">
                      <Eye size={14} color="white" />
                    </button>
                    <button className="w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#2CB67D] transition-colors">
                      <Bookmark size={14} color="white" />
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
                  
                  <div className="flex items-center space-x-2 text-sm text-white/60">
                    <Bookmark size={14} color="#845EC2" />
                    <span>Saved on {event.savedDate}</span>
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
                
                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {event.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-white/10 text-white/60 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-white">
                      {event.price === 0 ? 'Free' : `$${event.price}`}
                    </span>
                    <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full">
                      {event.organizer}
                    </span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className={`p-2 transition-colors ${event.notifications ? 'text-[#845EC2]' : 'text-white/60 hover:text-[#845EC2]'}`}>
                      <Notification size={16} />
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
      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-[#845EC2]/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Bookmark size={32} color="#845EC2" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No saved events found</h3>
          <p className="text-white/60 mb-6">Start saving events you're interested in</p>
          <button className="px-6 py-3 bg-[#845EC2] hover:bg-[#6d4fa1] text-white rounded-lg transition-colors">
            Browse Events
          </button>
        </div>
      )}
    </div>
  );
};

export default DashboardSaved; 