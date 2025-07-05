"use client"
import React, { useState } from 'react';
import { 
  Ticket, 
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
  Check
} from 'iconsax-react';

const DashboardTickets = () => {
  const [activeTab, setActiveTab] = useState('all-tickets');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Mock tickets data
  const tickets = [
    {
      id: 'ticket-001',
      eventTitle: 'Ethereum Summit 2024',
      eventDate: 'Dec 30, 2024',
      eventTime: '9:00 AM',
      eventLocation: 'San Francisco, CA',
      eventImage: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=400&q=80',
      ticketType: 'VIP Pass',
      ticketNumber: 'ETH-2024-001',
      price: 150,
      status: 'active',
      purchaseDate: 'Nov 15, 2024',
      qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ETH-2024-001',
      category: 'Technology',
      description: 'Premium access to all sessions and exclusive networking events.'
    },
    {
      id: 'ticket-002',
      eventTitle: 'Crypto Art Gallery Opening',
      eventDate: 'Dec 12, 2024',
      eventTime: '7:00 PM',
      eventLocation: 'Downtown Gallery',
      eventImage: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=400&q=80',
      ticketType: 'General Admission',
      ticketNumber: 'CAG-2024-002',
      price: 0,
      status: 'active',
      purchaseDate: 'Dec 1, 2024',
      qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CAG-2024-002',
      category: 'Art',
      description: 'Access to the gallery opening and networking reception.'
    },
    {
      id: 'ticket-003',
      eventTitle: 'DeFi Workshop & Networking',
      eventDate: 'Dec 20, 2024',
      eventTime: '2:00 PM',
      eventLocation: 'Tech Hub',
      eventImage: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=400&q=80',
      ticketType: 'Workshop Pass',
      ticketNumber: 'DEFI-2024-003',
      price: 75,
      status: 'used',
      purchaseDate: 'Nov 20, 2024',
      qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=DEFI-2024-003',
      category: 'Finance',
      description: 'Hands-on workshop with materials and certification included.'
    },
    {
      id: 'ticket-004',
      eventTitle: 'Web3 Meetup San Francisco',
      eventDate: 'Dec 30, 2024',
      eventTime: '6:00 PM',
      eventLocation: 'San Francisco, CA',
      eventImage: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=400&q=80',
      ticketType: 'Early Bird',
      ticketNumber: 'WEB3-2024-004',
      price: 25,
      status: 'expired',
      purchaseDate: 'Nov 10, 2024',
      qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=WEB3-2024-004',
      category: 'Technology',
      description: 'Networking event with refreshments and swag bag included.'
    }
  ];

  const ticketTabs = [
    {
      id: 'all-tickets',
      title: 'All Tickets',
      icon: Ticket,
      color: '#845EC2',
      count: tickets.length
    },
    {
      id: 'active',
      title: 'Active',
      icon: TickCircle,
      color: '#2CB67D',
      count: tickets.filter(t => t.status === 'active').length
    },
    {
      id: 'used',
      title: 'Used',
      icon: Check,
      color: '#4ECDC4',
      count: tickets.filter(t => t.status === 'used').length
    },
    {
      id: 'expired',
      title: 'Expired',
      icon: CloseCircle,
      color: '#FF6B6B',
      count: tickets.filter(t => t.status === 'expired').length
    }
  ];

  const filters = [
    { id: 'all', label: 'All Tickets', color: '#845EC2' },
    { id: 'free', label: 'Free', color: '#4ECDC4' },
    { id: 'paid', label: 'Paid', color: '#FBBF24' },
    { id: 'vip', label: 'VIP', color: '#FFD700' },
    { id: 'workshop', label: 'Workshop', color: '#D65DB1' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30' };
      case 'used':
        return { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' };
      case 'expired':
        return { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/30' };
      default:
        return { bg: 'bg-gray-500/20', text: 'text-gray-400', border: 'border-gray-500/30' };
    }
  };

  const getTicketTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'vip pass':
        return { bg: 'bg-[#FFD700]/20', text: 'text-[#FFD700]', border: 'border-[#FFD700]/30' };
      case 'workshop pass':
        return { bg: 'bg-[#D65DB1]/20', text: 'text-[#D65DB1]', border: 'border-[#D65DB1]/30' };
      case 'early bird':
        return { bg: 'bg-[#4ECDC4]/20', text: 'text-[#4ECDC4]', border: 'border-[#4ECDC4]/30' };
      default:
        return { bg: 'bg-[#845EC2]/20', text: 'text-[#845EC2]', border: 'border-[#845EC2]/30' };
    }
  };

  const filteredTickets = tickets.filter(ticket => {
    if (activeTab === 'all-tickets') return true;
    return ticket.status === activeTab;
  });

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">My Tickets</h1>
          <p className="text-white/70">Manage and view your event tickets</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-[#845EC2] hover:bg-[#6d4fa1] text-white rounded-lg transition-colors duration-200">
          <Add size={16} color="white" />
          <span>Buy Tickets</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm font-medium">Total Tickets</p>
              <p className="text-3xl font-bold text-white mt-1">{tickets.length}</p>
              <p className="text-xs text-white/50 mt-1">+2 this month</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-[#845EC2]/20 flex items-center justify-center">
              <Ticket size={28} color="#845EC2" />
            </div>
          </div>
        </div>
        
        <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm font-medium">Active Tickets</p>
              <p className="text-3xl font-bold text-white mt-1">{tickets.filter(t => t.status === 'active').length}</p>
              <p className="text-xs text-white/50 mt-1">Ready to use</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-[#2CB67D]/20 flex items-center justify-center">
              <TickCircle size={28} color="#2CB67D" />
            </div>
          </div>
        </div>
        
        <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm font-medium">Total Spent</p>
              <p className="text-3xl font-bold text-white mt-1">$250</p>
              <p className="text-xs text-white/50 mt-1">+$75 this month</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-[#FBBF24]/20 flex items-center justify-center">
              <Wallet size={28} color="#FBBF24" />
            </div>
          </div>
        </div>
        
        <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm font-medium">Upcoming Events</p>
              <p className="text-3xl font-bold text-white mt-1">2</p>
              <p className="text-xs text-white/50 mt-1">Next: Dec 12</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-[#4ECDC4]/20 flex items-center justify-center">
              <Calendar size={28} color="#4ECDC4" />
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-black/30 rounded-lg p-1">
        {ticketTabs.map((tab) => {
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
            placeholder="Search tickets..."
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

      {/* Tickets Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredTickets.map((ticket) => {
          const statusColors = getStatusColor(ticket.status);
          const typeColors = getTicketTypeColor(ticket.ticketType);
          
          return (
            <div key={ticket.id} className="bg-black/50 backdrop-blur-md rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 overflow-hidden group">
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={ticket.eventImage} 
                  alt={ticket.eventTitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Status Badge */}
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${statusColors.bg} ${statusColors.text} ${statusColors.border}`}>
                  {ticket.status}
                </div>
                
                {/* Type Badge */}
                <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${typeColors.bg} ${typeColors.text} ${typeColors.border}`}>
                  {ticket.ticketType}
                </div>
                
                {/* Action Buttons */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="flex space-x-1">
                    <button className="w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#845EC2] transition-colors">
                      <Code size={14} color="white" />
                    </button>
                    <button className="w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#2CB67D] transition-colors">
                      <DocumentDownload size={14} color="white" />
                    </button>
                    <button className="w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#FBBF24] transition-colors">
                      <Printer size={14} color="white" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Ticket Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#845EC2] transition-colors">
                    {ticket.eventTitle}
                  </h3>
                  <button className="text-white/60 hover:text-[#845EC2] transition-colors">
                    <More size={16} />
                  </button>
                </div>
                
                <p className="text-white/70 text-sm mb-4 line-clamp-2">
                  {ticket.description}
                </p>
                
                {/* Ticket Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-white/60">
                    <Clock size={14} color="#845EC2" />
                    <span>{ticket.eventDate} at {ticket.eventTime}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-white/60">
                    <Map size={14} color="#845EC2" />
                    <span>{ticket.eventLocation}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-white/60">
                    <Ticket size={14} color="#845EC2" />
                    <span>{ticket.ticketNumber}</span>
                  </div>
                </div>
                
                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-white">
                      {ticket.price === 0 ? 'Free' : `$${ticket.price}`}
                    </span>
                    <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full">
                      {ticket.category}
                    </span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="p-2 text-white/60 hover:text-[#845EC2] transition-colors">
                      <Share size={16} />
                    </button>
                    <button className="p-2 text-white/60 hover:text-[#845EC2] transition-colors">
                      <Eye size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredTickets.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-[#845EC2]/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Ticket size={32} color="#845EC2" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No tickets found</h3>
          <p className="text-white/60 mb-6">Purchase tickets for upcoming events</p>
          <button className="px-6 py-3 bg-[#845EC2] hover:bg-[#6d4fa1] text-white rounded-lg transition-colors">
            Browse Events
          </button>
        </div>
      )}
    </div>
  );
};

export default DashboardTickets; 