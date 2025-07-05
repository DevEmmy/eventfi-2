"use client"
import React, { useState } from 'react';
import { 
  Notification, 
  Check,
  Trash,
  Settings,
  Calendar,
  Ticket,
  Star,
  Message,
  Warning2,
  InfoCircle
} from 'iconsax-react';

const DashboardNotifications = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedNotifications, setSelectedNotifications] = useState<string[]>([]);

  // Mock notifications data
  const notifications = [
    {
      id: 'notif-1',
      type: 'event',
      title: 'Event Reminder: Ethereum Summit 2024',
      message: 'Your event starts in 2 hours. Don\'t forget to bring your ticket!',
      time: '2 hours ago',
      isRead: false,
      priority: 'high',
      eventId: 'ethereum-summit-2024'
    },
    {
      id: 'notif-2',
      type: 'ticket',
      title: 'Ticket Purchased Successfully',
      message: 'You have successfully purchased a ticket for Crypto Art Gallery Opening',
      time: '1 day ago',
      isRead: true,
      priority: 'medium',
      eventId: 'crypto-art-gallery-opening'
    },
    {
      id: 'notif-3',
      type: 'system',
      title: 'Wallet Connected',
      message: 'Your wallet has been successfully connected to EventFi',
      time: '2 days ago',
      isRead: true,
      priority: 'low'
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'event': return Calendar;
      case 'ticket': return Ticket;
      case 'system': return InfoCircle;
      case 'reminder': return Notification;
      default: return Notification;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'event': return 'text-blue-400';
      case 'ticket': return 'text-green-400';
      case 'system': return 'text-purple-400';
      case 'reminder': return 'text-yellow-400';
      default: return 'text-white/70';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    if (activeTab === 'all') return true;
    if (activeTab === 'unread') return !notification.isRead;
    return notification.type === activeTab;
  });

  const handleMarkAsRead = (notificationId: string) => {
    console.log(`Marking notification ${notificationId} as read`);
  };

  const handleDeleteNotification = (notificationId: string) => {
    console.log(`Deleting notification ${notificationId}`);
  };

  const handleSelectNotification = (notificationId: string) => {
    setSelectedNotifications(prev => 
      prev.includes(notificationId) 
        ? prev.filter(id => id !== notificationId)
        : [...prev, notificationId]
    );
  };

  const handleMarkAllAsRead = () => {
    console.log('Marking all notifications as read');
  };

  const handleDeleteSelected = () => {
    console.log('Deleting selected notifications:', selectedNotifications);
    setSelectedNotifications([]);
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Notifications</h1>
          <p className="text-white/70">Stay updated with your events and activities</p>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={handleMarkAllAsRead}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
          >
            <Check size={20} className="inline mr-2" color="white" />
            Mark All Read
          </button>
          {selectedNotifications.length > 0 && (
            <button 
              onClick={handleDeleteSelected}
              className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition-colors"
            >
              <Trash size={20} className="inline mr-2" color="white" />
              Delete Selected
            </button>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Total</p>
              <p className="text-2xl font-bold text-white">{notifications.length}</p>
            </div>
            <Notification size={32} color="#a855f7" />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Unread</p>
              <p className="text-2xl font-bold text-white">
                {notifications.filter(n => !n.isRead).length}
              </p>
            </div>
            <Warning2 size={32} color="#ef4444" />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Events</p>
              <p className="text-2xl font-bold text-white">
                {notifications.filter(n => n.type === 'event').length}
              </p>
            </div>
            <Calendar size={32} color="#3b82f6" />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Tickets</p>
              <p className="text-2xl font-bold text-white">
                {notifications.filter(n => n.type === 'ticket').length}
              </p>
            </div>
            <Ticket size={32} color="#4ade80" />
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-white/5 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('all')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'all'
              ? 'bg-purple-600 text-white'
              : 'text-white/70 hover:text-white'
          }`}
        >
          All ({notifications.length})
        </button>
        <button
          onClick={() => setActiveTab('unread')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'unread'
              ? 'bg-purple-600 text-white'
              : 'text-white/70 hover:text-white'
          }`}
        >
          Unread ({notifications.filter(n => !n.isRead).length})
        </button>
        <button
          onClick={() => setActiveTab('event')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'event'
              ? 'bg-purple-600 text-white'
              : 'text-white/70 hover:text-white'
          }`}
        >
          Events ({notifications.filter(n => n.type === 'event').length})
        </button>
        <button
          onClick={() => setActiveTab('ticket')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'ticket'
              ? 'bg-purple-600 text-white'
              : 'text-white/70 hover:text-white'
          }`}
        >
          Tickets ({notifications.filter(n => n.type === 'ticket').length})
        </button>
      </div>

      {/* Notifications List */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden">
        {filteredNotifications.length === 0 ? (
          <div className="text-center py-12">
            <Notification size={64} className="mx-auto mb-4" color="#6b7280" />
            <h3 className="text-xl font-semibold text-white mb-2">No notifications</h3>
            <p className="text-white/70">
              {activeTab === 'all' 
                ? 'You\'re all caught up! No notifications at the moment.'
                : `No ${activeTab} notifications found.`
              }
            </p>
          </div>
        ) : (
          <div className="divide-y divide-white/10">
            {filteredNotifications.map((notification) => {
              const IconComponent = getNotificationIcon(notification.type);
              return (
                <div 
                  key={notification.id} 
                  className={`p-6 hover:bg-white/5 transition-colors ${
                    !notification.isRead ? 'bg-white/5' : ''
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    {/* Checkbox */}
                    <input
                      type="checkbox"
                      checked={selectedNotifications.includes(notification.id)}
                      onChange={() => handleSelectNotification(notification.id)}
                      className="mt-1 rounded border-white/30 text-purple-600 focus:ring-purple-500"
                    />
                    
                    {/* Icon */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      notification.type === 'event' ? 'bg-blue-500/20' :
                      notification.type === 'ticket' ? 'bg-green-500/20' :
                      notification.type === 'system' ? 'bg-purple-500/20' :
                      'bg-yellow-500/20'
                    }`}>
                      <IconComponent size={20} color={
                        notification.type === 'event' ? '#3b82f6' :
                        notification.type === 'ticket' ? '#4ade80' :
                        notification.type === 'system' ? '#a855f7' :
                        '#eab308'
                      } />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className={`font-medium ${notification.isRead ? 'text-white/70' : 'text-white'}`}>
                              {notification.title}
                            </h3>
                            <span className={`w-2 h-2 rounded-full ${getPriorityColor(notification.priority)}`}></span>
                          </div>
                          <p className="text-sm text-white/70 mb-2">{notification.message}</p>
                          <div className="flex items-center space-x-4 text-xs text-white/50">
                            <span>{notification.time}</span>
                            {notification.eventId && (
                              <button className="text-purple-400 hover:text-purple-300 transition-colors">
                                View Event
                              </button>
                            )}
                          </div>
                        </div>
                        
                        {/* Actions */}
                        <div className="flex items-center space-x-2">
                          {!notification.isRead && (
                            <button
                              onClick={() => handleMarkAsRead(notification.id)}
                              className="p-1 rounded hover:bg-white/10 transition-colors"
                              title="Mark as read"
                            >
                              <Check size={16} color="#6b7280" />
                            </button>
                          )}
                          <button
                            onClick={() => handleDeleteNotification(notification.id)}
                            className="p-1 rounded hover:bg-white/10 transition-colors"
                            title="Delete notification"
                          >
                            <Trash size={16} color="#6b7280" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Notification Settings */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Notification Settings</h2>
          <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors">
            <Settings size={20} className="inline mr-2" color="white" />
            Manage Settings
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
            <div>
              <p className="text-white font-medium">Event Reminders</p>
              <p className="text-sm text-white/70">Get notified before events</p>
            </div>
            <input type="checkbox" defaultChecked className="rounded border-white/30 text-purple-600 focus:ring-purple-500" />
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
            <div>
              <p className="text-white font-medium">Ticket Updates</p>
              <p className="text-sm text-white/70">Receive ticket notifications</p>
            </div>
            <input type="checkbox" defaultChecked className="rounded border-white/30 text-purple-600 focus:ring-purple-500" />
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
            <div>
              <p className="text-white font-medium">System Notifications</p>
              <p className="text-sm text-white/70">App updates and announcements</p>
            </div>
            <input type="checkbox" defaultChecked className="rounded border-white/30 text-purple-600 focus:ring-purple-500" />
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
            <div>
              <p className="text-white font-medium">Marketing</p>
              <p className="text-sm text-white/70">Promotional content</p>
            </div>
            <input type="checkbox" className="rounded border-white/30 text-purple-600 focus:ring-purple-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNotifications; 