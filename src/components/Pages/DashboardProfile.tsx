"use client"
import React, { useState } from 'react';
import { 
  User, 
  Edit, 
  Camera, 
  Shield, 
  Key, 
  Notification, 
  Global, 
  Colorfilter,
  SmartHome,
  Sms,
  Map,
  Calendar,
  Wallet,
  Crown,
  Star,
  Award,
  Heart,
  MessageCircle,
  Share,
  DocumentDownload,
  Trash,
  TickCircle,
  CloseCircle
} from 'iconsax-react';

const DashboardProfile = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [isEditing, setIsEditing] = useState(false);

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
    location: 'San Francisco, CA',
    bio: 'Passionate event organizer and blockchain enthusiast. Love creating memorable experiences and connecting people through technology.',
    joinDate: 'March 2023',
    eventsCreated: 12,
    eventsAttended: 45,
    totalTickets: 67,
    savedEvents: 23,
    followers: 234,
    following: 156,
    rating: 4.8,
    badges: [
      { name: 'Event Creator', icon: Crown, color: '#FFD700', description: 'Created 10+ successful events' },
      { name: 'Early Adopter', icon: Star, color: '#FF6B6B', description: 'Joined during beta phase' },
      { name: 'Community Leader', icon: Award, color: '#4ECDC4', description: 'Active community member' },
      { name: 'Top Organizer', icon: Heart, color: '#D65DB1', description: 'High-rated event organizer' }
    ],
    preferences: {
      notifications: {
        email: true,
        push: true,
        sms: false
      },
      privacy: {
        profilePublic: true,
        showWallet: false,
        allowMessages: true
      },
      theme: 'dark',
      language: 'English'
    }
  };

  const profileSections = [
    {
      id: 'personal',
      title: 'Personal Info',
      icon: User,
      color: '#2CB67D',
      description: 'Basic profile information'
    },
    {
      id: 'security',
      title: 'Security',
      icon: Shield,
      color: '#FF6B6B',
      description: 'Password and security settings'
    },
    {
      id: 'preferences',
      title: 'Preferences',
      icon: Colorfilter,
      color: '#845EC2',
      description: 'App settings and notifications'
    },
    {
      id: 'activity',
      title: 'Activity',
      icon: Star,
      color: '#FBBF24',
      description: 'Your event history and stats'
    }
  ];

  const recentActivity = [
    {
      type: 'event',
      title: 'Created "Web3 Meetup" event',
      time: '2 days ago',
      icon: Crown,
      color: '#FFD700',
      status: 'completed'
    },
    {
      type: 'ticket',
      title: 'Purchased ticket for Ethereum Summit',
      time: '1 week ago',
      icon: Star,
      color: '#FF6B6B',
      status: 'completed'
    },
    {
      type: 'review',
      title: 'Left 5-star review for Crypto Gallery',
      time: '2 weeks ago',
      icon: Heart,
      color: '#D65DB1',
      status: 'completed'
    },
    {
      type: 'badge',
      title: 'Earned "Top Organizer" badge',
      time: '1 month ago',
      icon: Award,
      color: '#4ECDC4',
      status: 'completed'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Profile</h1>
          <p className="text-white/70">Manage your account and preferences</p>
        </div>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center space-x-2 px-4 py-2 bg-[#845EC2] hover:bg-[#6d4fa1] text-white rounded-lg transition-colors duration-200"
        >
          <Edit size={16} />
          <span>{isEditing ? 'Save' : 'Edit Profile'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10">
            {/* Avatar Section */}
            <div className="text-center mb-6">
              <div className="relative inline-block">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#845EC2]/20"
                />
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#845EC2] rounded-full flex items-center justify-center hover:bg-[#6d4fa1] transition-colors">
                  <Camera size={16} color="white" />
                </button>
              </div>
              <h2 className="text-xl font-bold text-white mt-4">{user.name}</h2>
              <p className="text-white/70 text-sm">{user.email}</p>
              <div className="flex items-center justify-center space-x-1 mt-2">
                <Star size={16} color="#FBBF24" />
                <span className="text-white text-sm font-medium">{user.rating}</span>
                <span className="text-white/60 text-sm">({user.followers} reviews)</span>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0081CF]/20 flex items-center justify-center">
                    <Crown size={16} color="#0081CF" />
                  </div>
                  <span className="text-white text-sm">Events Created</span>
                </div>
                <span className="text-white font-bold">{user.eventsCreated}</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2CB67D]/20 flex items-center justify-center">
                    <Calendar size={16} color="#2CB67D" />
                  </div>
                  <span className="text-white text-sm">Events Attended</span>
                </div>
                <span className="text-white font-bold">{user.eventsAttended}</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FBBF24]/20 flex items-center justify-center">
                    <Star size={16} color="#FBBF24" />
                  </div>
                  <span className="text-white text-sm">Total Tickets</span>
                </div>
                <span className="text-white font-bold">{user.totalTickets}</span>
              </div>
            </div>

            {/* Badges */}
            <div>
              <h3 className="text-white font-semibold mb-3">Badges</h3>
              <div className="space-y-2">
                {user.badges.map((badge, index) => {
                  const IconComponent = badge.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 p-2 bg-white/5 rounded-lg">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center" 
                           style={{ backgroundColor: `${badge.color}20` }}>
                        <IconComponent size={12} color={badge.color} />
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-sm font-medium">{badge.name}</p>
                        <p className="text-white/60 text-xs">{badge.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tab Navigation */}
          <div className="flex space-x-1 bg-black/30 rounded-lg p-1">
            {profileSections.map((section) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)}
                  className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
                    activeTab === section.id
                      ? 'bg-[#845EC2] text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <IconComponent size={16} color={activeTab === section.id ? 'white' : section.color} />
                  <span className="text-sm font-medium">{section.title}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10">
            {activeTab === 'personal' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-4">Personal Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue={user.name}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#845EC2] disabled:opacity-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue={user.email}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#845EC2] disabled:opacity-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      defaultValue={user.phone}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#845EC2] disabled:opacity-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">Location</label>
                    <input
                      type="text"
                      defaultValue={user.location}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#845EC2] disabled:opacity-50"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Bio</label>
                  <textarea
                    defaultValue={user.bio}
                    disabled={!isEditing}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#845EC2] disabled:opacity-50 resize-none"
                  />
                </div>
                
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Wallet Address</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      defaultValue={user.walletAddress}
                      disabled={!isEditing}
                      className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#845EC2] disabled:opacity-50"
                    />
                    <button className="px-4 py-3 bg-[#845EC2] hover:bg-[#6d4fa1] text-white rounded-lg transition-colors">
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-4">Security Settings</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-[#FF6B6B]/20 flex items-center justify-center">
                        <Key size={20} color="#FF6B6B" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Change Password</h4>
                        <p className="text-white/60 text-sm">Update your account password</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-[#845EC2] hover:bg-[#6d4fa1] text-white rounded-lg transition-colors">
                      Change
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-[#2CB67D]/20 flex items-center justify-center">
                        <Shield size={20} color="#2CB67D" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Two-Factor Authentication</h4>
                        <p className="text-white/60 text-sm">Add an extra layer of security</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-[#845EC2] hover:bg-[#6d4fa1] text-white rounded-lg transition-colors">
                      Enable
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-[#FBBF24]/20 flex items-center justify-center">
                        <SmartHome size={20} color="#FBBF24" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Device Management</h4>
                        <p className="text-white/60 text-sm">Manage your connected devices</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-[#845EC2] hover:bg-[#6d4fa1] text-white rounded-lg transition-colors">
                      Manage
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-4">Preferences</h3>
                
                <div className="space-y-6">
                  {/* Notifications */}
                  <div>
                    <h4 className="text-white font-semibold mb-4">Notifications</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Sms size={16} color="#845EC2" />
                          <span className="text-white">Email Notifications</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked={user.preferences.notifications.email} className="sr-only peer" />
                          <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#845EC2]"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Notification size={16} color="#845EC2" />
                          <span className="text-white">Push Notifications</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked={user.preferences.notifications.push} className="sr-only peer" />
                          <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#845EC2]"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  {/* Privacy */}
                  <div>
                    <h4 className="text-white font-semibold mb-4">Privacy</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Global size={16} color="#845EC2" />
                          <span className="text-white">Public Profile</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked={user.preferences.privacy.profilePublic} className="sr-only peer" />
                          <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#845EC2]"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Wallet size={16} color="#845EC2" />
                          <span className="text-white">Show Wallet Address</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked={user.preferences.privacy.showWallet} className="sr-only peer" />
                          <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#845EC2]"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
                
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => {
                    const IconComponent = activity.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center mt-1" 
                             style={{ backgroundColor: `${activity.color}20` }}>
                          <IconComponent size={16} color={activity.color} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-medium">{activity.title}</p>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile; 