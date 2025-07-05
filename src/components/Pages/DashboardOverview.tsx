"use client"
import React, { useState } from 'react';
import { 
  User, 
  Calendar, 
  Ticket, 
  Add, 
  Bookmark, 
  Settings, 
  Notification, 
  Wallet,
  Chart,
  MessageCircle,
  Heart,
  TrendUp,
  Star,
  Clock,
  Map
} from 'iconsax-react';
import Link from 'next/link';

const DashboardOverview = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const dashboardSections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: Chart,
      description: 'Dashboard summary and quick actions',
      href: '/dashboard',
      color: '#845EC2'
    },
    {
      id: 'profile',
      title: 'Profile',
      icon: User,
      description: 'View and edit your profile information',
      href: '/dashboard/profile',
      color: '#2CB67D'
    },
    {
      id: 'events',
      title: 'My Events',
      icon: Calendar,
      description: 'Events you\'ve created or are attending',
      href: '/dashboard/events',
      color: '#0081CF'
    },
    {
      id: 'tickets',
      title: 'My Tickets',
      icon: Ticket,
      description: 'View and manage your event tickets',
      href: '/dashboard/tickets',
      color: '#FBBF24'
    },
    {
      id: 'saved',
      title: 'Saved Events',
      icon: Bookmark,
      description: 'Events you\'ve bookmarked',
      href: '/dashboard/saved',
      color: '#D65DB1'
    },
    {
      id: 'create',
      title: 'Create Event',
      icon: Add,
      description: 'Create a new event',
      href: '/dashboard/create',
      color: '#FF6B6B'
    },
    {
      id: 'wallet',
      title: 'Wallet',
      icon: Wallet,
      description: 'Manage your wallet and transactions',
      href: '/dashboard/wallet',
      color: '#4ECDC4'
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: Notification,
      description: 'Manage your notifications',
      href: '/dashboard/notifications',
      color: '#45B7D1'
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: Settings,
      description: 'Account and app settings',
      href: '/dashboard/settings',
      color: '#96CEB4'
    }
  ];

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    walletAddress: '0x1234...5678',
    eventsAttending: 5,
    eventsCreated: 2,
    ticketsOwned: 8,
    savedEvents: 12,
    totalSpent: 1250,
    upcomingEvents: 3,
    pastEvents: 2
  };

  // Mock recent activity
  const recentActivity = [
    {
      type: 'ticket',
      title: 'Purchased ticket for Ethereum Summit 2024',
      time: '2 hours ago',
      icon: Ticket,
      color: '#FBBF24',
      status: 'completed'
    },
    {
      type: 'event',
      title: 'Created event: Web3 Meetup',
      time: '1 day ago',
      icon: Add,
      color: '#FF6B6B',
      status: 'pending'
    },
    {
      type: 'saved',
      title: 'Saved Crypto Art Gallery Opening',
      time: '3 days ago',
      icon: Bookmark,
      color: '#D65DB1',
      status: 'completed'
    },
    {
      type: 'wallet',
      title: 'Connected wallet successfully',
      time: '1 week ago',
      icon: Wallet,
      color: '#4ECDC4',
      status: 'completed'
    }
  ];

  // Mock upcoming events
  const upcomingEvents = [
    {
      id: 'ethereum-summit',
      name: 'Ethereum Summit 2024',
      date: 'Dec 30, 2024',
      time: '9:00 AM',
      location: 'San Francisco',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=400&q=80',
      attendees: 1200,
      status: 'confirmed'
    },
    {
      id: 'crypto-gallery',
      name: 'Crypto Art Gallery Opening',
      date: 'Dec 12, 2024',
      time: '6:00 PM',
      location: 'Downtown Gallery',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=400&q=80',
      attendees: 85,
      status: 'confirmed'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Welcome back, {user.name}!</h1>
        <p className="text-white/70">Here's what's happening with your events</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm font-medium">Events Attending</p>
              <p className="text-3xl font-bold text-white mt-1">{user.eventsAttending}</p>
              <p className="text-xs text-white/50 mt-1">+2 from last month</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-[#0081CF]/20 flex items-center justify-center">
              <Calendar size={28} color="#0081CF" />
            </div>
          </div>
        </div>
        
        <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm font-medium">Events Created</p>
              <p className="text-3xl font-bold text-white mt-1">{user.eventsCreated}</p>
              <p className="text-xs text-white/50 mt-1">+1 this month</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-[#FF6B6B]/20 flex items-center justify-center">
              <Add size={28} color="#FF6B6B" />
            </div>
          </div>
        </div>
        
        <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm font-medium">Tickets Owned</p>
              <p className="text-3xl font-bold text-white mt-1">{user.ticketsOwned}</p>
              <p className="text-xs text-white/50 mt-1">Total value: ${user.totalSpent}</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-[#FBBF24]/20 flex items-center justify-center">
              <Ticket size={28} color="#FBBF24" />
            </div>
          </div>
        </div>
        
        <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm font-medium">Saved Events</p>
              <p className="text-3xl font-bold text-white mt-1">{user.savedEvents}</p>
              <p className="text-xs text-white/50 mt-1">+3 this week</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-[#D65DB1]/20 flex items-center justify-center">
              <Bookmark size={28} color="#D65DB1" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Quick Actions</h2>
            <Link href="/dashboard" className="text-[#845EC2] hover:text-[#6d4fa1] text-sm font-medium transition-colors">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dashboardSections.slice(1).map((section) => {
              const IconComponent = section.icon;
              return (
                <Link
                  key={section.id}
                  href={section.href}
                  className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`} 
                         style={{ backgroundColor: `${section.color}20` }}>
                      <IconComponent size={24} color={section.color} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white group-hover:text-[#845EC2] transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-sm text-white/70 mt-1">{section.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Recent Activity & Upcoming Events */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
            <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <div className="space-y-4">
                {recentActivity.map((activity, index) => {
                  const IconComponent = activity.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center mt-1" 
                           style={{ backgroundColor: `${activity.color}20` }}>
                        <IconComponent size={16} color={activity.color} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white font-medium truncate">{activity.title}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs text-white/60">{activity.time}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            activity.status === 'completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {activity.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button className="w-full mt-4 text-sm text-[#845EC2] hover:text-[#6d4fa1] transition-colors font-medium">
                View all activity
              </button>
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Upcoming Events</h2>
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-black/50 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={event.image} 
                        alt={event.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium truncate">{event.name}</h3>
                      <div className="flex items-center space-x-4 mt-1 text-xs text-white/60">
                        <div className="flex items-center space-x-1">
                          <Clock size={12} color="#845EC2" />
                          <span>{event.date} at {event.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Map size={12} color="#845EC2" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                        {event.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/dashboard/events" className="block mt-4 text-sm text-[#845EC2] hover:text-[#6d4fa1] transition-colors font-medium text-center">
              View all events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview; 