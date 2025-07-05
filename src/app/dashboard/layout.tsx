"use client"
import React from 'react';
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
  Logout
} from 'iconsax-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const sidebarItems = [
    {
      id: 'overview',
      title: 'Overview',
      icon: Chart,
      href: '/dashboard'
    },
    {
      id: 'profile',
      title: 'Profile',
      icon: User,
      href: '/dashboard/profile'
    },
    {
      id: 'events',
      title: 'My Events',
      icon: Calendar,
      href: '/dashboard/events'
    },
    {
      id: 'tickets',
      title: 'My Tickets',
      icon: Ticket,
      href: '/dashboard/tickets'
    },
    {
      id: 'saved',
      title: 'Saved Events',
      icon: Bookmark,
      href: '/dashboard/saved'
    },
    {
      id: 'create',
      title: 'Create Event',
      icon: Add,
      href: '/dashboard/create'
    },
    {
      id: 'wallet',
      title: 'Wallet',
      icon: Wallet,
      href: '/dashboard/wallet'
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: Notification,
      href: '/dashboard/notifications'
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: Settings,
      href: '/dashboard/settings'
    }
  ];

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    walletAddress: '0x1234...5678'
  };

  const getCurrentPage = () => {
    if (pathname === '/dashboard') return 'overview';
    return pathname.split('/')[2] || 'overview';
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation */}
      <div className="bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="w-full mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-white/70 hover:text-white transition-colors">
                ← Back to Home
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                <Notification size={20} color="#845EC2" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10">
                  <img 
                    src={user.avatar} 
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="hidden md:block">
                  <p className="text-white text-sm font-medium">{user.name}</p>
                  <p className="text-white/60 text-xs">{user.walletAddress}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-black/90 backdrop-blur-md border-r border-white/10 min-h-screen">
          <div className="p-6">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              <p className="text-white/70 text-sm">Manage your events</p>
            </div>

            <nav className="space-y-2">
              {sidebarItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = getCurrentPage() === item.id;
                
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-[#845EC2] text-white shadow-lg'
                        : 'text-white/70 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
                    }`}
                  >
                    <IconComponent 
                      size={20} 
                      color={isActive ? "#ffffff" : "#845EC2"}
                    />
                    <span className="font-medium">{item.title}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Logout */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <button className="flex items-center space-x-3 px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors w-full border border-transparent hover:border-white/10">
                <Logout size={20} color="#845EC2" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-black">
          <div className="p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout; 