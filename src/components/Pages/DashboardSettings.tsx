"use client"
import React, { useState } from 'react';
import { 
  Settings, 
  User,
  Shield,
  Notification,
  Colorfilter,
  Global,
  Key,
  Trash,
  DocumentDownload,
  DocumentUpload,
  Eye,
  EyeSlash,
  Check,
  CloseCircle,
  Lock,
  Unlock,
  Notification1,
  Message,
  Data,
  Security,
  Profile,
  
  DollarCircle,
  Clock,
  Warning2,
  InfoCircle,
  Save2
} from 'iconsax-react';

const DashboardSettings = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Enhanced mock settings data
  const [settings, setSettings] = useState({
    account: {
      email: 'john.doe@example.com',
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      phone: '+1 (555) 123-4567',
      timezone: 'America/Los_Angeles',
      language: 'English',
      currency: 'USD',
      bio: 'Event enthusiast and crypto lover',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    security: {
      twoFactorEnabled: true,
      emailVerification: true,
      sessionTimeout: 30,
      passwordLastChanged: '2024-11-15',
      loginHistory: [
        { date: '2024-12-10', time: '14:30', location: 'San Francisco, CA', device: 'Chrome on MacBook' },
        { date: '2024-12-08', time: '09:15', location: 'New York, NY', device: 'Safari on iPhone' },
        { date: '2024-12-05', time: '16:45', location: 'Los Angeles, CA', device: 'Firefox on Windows' }
      ],
      activeSessions: 2
    },
    notifications: {
      email: true,
      push: true,
      sms: false,
      marketing: false,
      eventReminders: true,
      ticketUpdates: true,
      systemUpdates: true,
      priceAlerts: false,
      newEvents: true,
      socialUpdates: false
    },
    privacy: {
      profileVisibility: 'public',
      showEmail: false,
      showPhone: false,
      allowMessages: true,
      dataSharing: false,
      showOnlineStatus: true,
      allowFriendRequests: true,
      showEventHistory: true
    },
    appearance: {
      theme: 'dark',
      fontSize: 'medium',
      compactMode: false,
      animations: true,
      showAvatars: true,
      colorScheme: 'purple',
      sidebarCollapsed: false
    },
    preferences: {
      defaultCurrency: 'USD',
      dateFormat: 'MM/DD/YYYY',
      timeFormat: '12-hour',
      weekStart: 'Monday',
      autoSave: true,
      rememberFilters: true
    }
  });

  const handleSettingChange = (section: string, setting: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [setting]: value
      }
    }));
    setHasUnsavedChanges(true);
  };

  const handlePasswordChange = () => {
    console.log('Password changed successfully');
    setHasUnsavedChanges(false);
  };

  const handleExportData = () => {
    console.log('Exporting user data...');
  };

  const handleDeleteAccount = () => {
    console.log('Account deletion requested...');
  };

  const handleSaveChanges = () => {
    console.log('Saving changes...');
    setHasUnsavedChanges(false);
  };

  const tabs = [
    { id: 'account', title: 'Account', icon: User, color: '#3b82f6' },
    { id: 'security', title: 'Security', icon: Shield, color: '#ef4444' },
    { id: 'notifications', title: 'Notifications', icon: Notification1, color: '#f59e0b' },
    { id: 'privacy', title: 'Privacy', icon: Eye, color: '#8b5cf6' },
    { id: 'appearance', title: 'Appearance', icon: Colorfilter, color: '#10b981' },
    { id: 'preferences', title: 'Preferences', icon: Settings, color: '#6366f1' },
    { id: 'data', title: 'Data & Export', icon: Data, color: '#ec4899' }
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
          <p className="text-white/70">Manage your account preferences and security</p>
        </div>
        <div className="flex items-center space-x-4">
          {hasUnsavedChanges && (
            <span className="text-yellow-400 text-sm flex items-center">
              <Warning2 size={16} className="mr-1" color="#f59e0b" />
              Unsaved changes
            </span>
          )}
          <button 
            onClick={handleSaveChanges}
            disabled={!hasUnsavedChanges}
            className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save2 size={20} className="inline mr-2" color="white" />
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-purple-600 text-white'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <IconComponent size={20} color={activeTab === tab.id ? 'white' : tab.color} />
                    <span className="font-medium">{tab.title}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
            {/* Account Settings */}
            {activeTab === 'account' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <User size={24} color="#3b82f6" />
                  <h2 className="text-2xl font-bold text-white">Account Settings</h2>
                </div>
                
                {/* Profile Section */}
                <div className="p-6 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-purple-600/20">
                      <img 
                        src={settings.account.avatar} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-lg">{settings.account.firstName} {settings.account.lastName}</h3>
                      <p className="text-white/70">@{settings.account.username}</p>
                      <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                        Change Photo
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">First Name</label>
                      <input
                        type="text"
                        value={settings.account.firstName}
                        onChange={(e) => handleSettingChange('account', 'firstName', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Last Name</label>
                      <input
                        type="text"
                        value={settings.account.lastName}
                        onChange={(e) => handleSettingChange('account', 'lastName', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
                      <input
                        type="email"
                        value={settings.account.email}
                        onChange={(e) => handleSettingChange('account', 'email', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={settings.account.phone}
                        onChange={(e) => handleSettingChange('account', 'phone', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Bio</label>
                      <textarea
                        value={settings.account.bio}
                        onChange={(e) => handleSettingChange('account', 'bio', e.target.value)}
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                        placeholder="Tell us about yourself..."
                      />
                    </div>
                  </div>
                </div>

                {/* Preferences Section */}
                <div className="p-6 rounded-lg bg-white/5 border border-white/10">
                  <h3 className="text-white font-medium text-lg mb-4">Preferences</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Timezone</label>
                      <select
                        value={settings.account.timezone}
                        onChange={(e) => handleSettingChange('account', 'timezone', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="America/Los_Angeles">Pacific Time (PT)</option>
                        <option value="America/New_York">Eastern Time (ET)</option>
                        <option value="Europe/London">London (GMT)</option>
                        <option value="Asia/Tokyo">Tokyo (JST)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Language</label>
                      <select
                        value={settings.account.language}
                        onChange={(e) => handleSettingChange('account', 'language', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Currency</label>
                      <select
                        value={settings.account.currency}
                        onChange={(e) => handleSettingChange('account', 'currency', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="USD">USD ($)</option>
                        <option value="EUR">EUR (€)</option>
                        <option value="GBP">GBP (£)</option>
                        <option value="JPY">JPY (¥)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield size={24} color="#ef4444" />
                  <h2 className="text-2xl font-bold text-white">Security Settings</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Security Status */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Lock size={20} color="#10b981" />
                        <span className="text-white font-medium">Two-Factor Auth</span>
                      </div>
                      <p className="text-sm text-white/70">Enabled</p>
                    </div>
                    <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Message size={20} color="#3b82f6" />
                        <span className="text-white font-medium">Email Verified</span>
                      </div>
                      <p className="text-sm text-white/70">Verified</p>
                    </div>
                    <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock size={20} color="#a855f7" />
                        <span className="text-white font-medium">Active Sessions</span>
                      </div>
                      <p className="text-sm text-white/70">{settings.security.activeSessions} devices</p>
                    </div>
                  </div>

                  {/* Security Options */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-center space-x-3">
                        <Lock size={20} color="#ef4444" />
                        <div>
                          <h3 className="text-white font-medium">Two-Factor Authentication</h3>
                          <p className="text-sm text-white/70">Add an extra layer of security to your account</p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.security.twoFactorEnabled}
                        onChange={(e) => handleSettingChange('security', 'twoFactorEnabled', e.target.checked)}
                        className="rounded border-white/30 text-purple-600 focus:ring-purple-500"
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-center space-x-3">
                        <Message size={20} color="#3b82f6" />
                        <div>
                          <h3 className="text-white font-medium">Email Verification</h3>
                          <p className="text-sm text-white/70">Require email verification for login</p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.security.emailVerification}
                        onChange={(e) => handleSettingChange('security', 'emailVerification', e.target.checked)}
                        className="rounded border-white/30 text-purple-600 focus:ring-purple-500"
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-center space-x-3">
                        <Clock size={20} color="#f59e0b" />
                        <div>
                          <h3 className="text-white font-medium">Session Timeout</h3>
                          <p className="text-sm text-white/70">Automatically log out after inactivity</p>
                        </div>
                      </div>
                      <select
                        value={settings.security.sessionTimeout}
                        onChange={(e) => handleSettingChange('security', 'sessionTimeout', parseInt(e.target.value))}
                        className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                      >
                        <option value={15}>15 minutes</option>
                        <option value={30}>30 minutes</option>
                        <option value={60}>1 hour</option>
                        <option value={120}>2 hours</option>
                      </select>
                    </div>
                  </div>

                  {/* Change Password */}
                  <div className="p-6 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center space-x-3 mb-4">
                      <Key size={20} color="#a855f7" />
                      <h3 className="text-white font-medium text-lg">Change Password</h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">Current Password</label>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 pr-10"
                            placeholder="Enter current password"
                          />
                          <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                          >
                            {showPassword ? <EyeSlash size={20} color="#6b7280" /> : <Eye size={20} color="#6b7280" />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">New Password</label>
                        <div className="relative">
                          <input
                            type={showNewPassword ? 'text' : 'password'}
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 pr-10"
                            placeholder="Enter new password"
                          />
                          <button
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                          >
                            {showNewPassword ? <EyeSlash size={20} color="#6b7280" /> : <Eye size={20} color="#6b7280" />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">Confirm New Password</label>
                        <div className="relative">
                          <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 pr-10"
                            placeholder="Confirm new password"
                          />
                          <button
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                          >
                            {showConfirmPassword ? <EyeSlash size={20} color="#6b7280" /> : <Eye size={20} color="#6b7280" />}
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={handlePasswordChange}
                        className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors"
                      >
                        <Key size={16} className="inline mr-2" color="white" />
                        Change Password
                      </button>
                    </div>
                  </div>

                  {/* Login History */}
                  <div className="p-6 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Security size={20} color="#6366f1" />
                        <h3 className="text-white font-medium text-lg">Recent Login Activity</h3>
                      </div>
                      <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                        View All
                      </button>
                    </div>
                    <div className="space-y-3">
                      {settings.security.loginHistory.map((login, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            <div>
                              <p className="text-white text-sm">{login.device}</p>
                              <p className="text-white/50 text-xs">{login.location} • {login.date} at {login.time}</p>
                            </div>
                          </div>
                          <button className="text-xs text-red-400 hover:text-red-300 transition-colors">
                            Revoke
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Notification1 size={24} color="#f59e0b" />
                  <h2 className="text-2xl font-bold text-white">Notification Settings</h2>
                </div>
                
                <div className="space-y-4">
                  {Object.entries(settings.notifications).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <h3 className="text-white font-medium capitalize">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </h3>
                        <p className="text-sm text-white/70">
                          Receive {key.replace(/([A-Z])/g, ' $1').toLowerCase()} notifications
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={(e) => handleSettingChange('notifications', key, e.target.checked)}
                        className="rounded border-white/30 text-purple-600 focus:ring-purple-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Privacy Settings */}
            {activeTab === 'privacy' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Eye size={24} color="#8b5cf6" />
                  <h2 className="text-2xl font-bold text-white">Privacy Settings</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Profile Visibility</label>
                    <select
                      value={settings.privacy.profileVisibility}
                      onChange={(e) => handleSettingChange('privacy', 'profileVisibility', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="public">Public</option>
                      <option value="private">Private</option>
                      <option value="friends">Friends Only</option>
                    </select>
                  </div>

                  {Object.entries(settings.privacy).slice(1).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <p className="text-white font-medium capitalize">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </p>
                        <p className="text-sm text-white/60">
                          {key === 'showEmail' && 'Show email in public profile'}
                          {key === 'showPhone' && 'Show phone number in public profile'}
                          {key === 'allowMessages' && 'Allow other users to send messages'}
                          {key === 'dataSharing' && 'Share data with third-party services'}
                          {key === 'showOnlineStatus' && 'Show when you are online'}
                          {key === 'allowFriendRequests' && 'Allow friend requests from other users'}
                          {key === 'showEventHistory' && 'Show your event history to others'}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={typeof value === 'boolean' ? value : false}
                          onChange={(e) => handleSettingChange('privacy', key, e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Appearance Settings */}
            {activeTab === 'appearance' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Colorfilter size={24} color="#10b981" />
                  <h2 className="text-2xl font-bold text-white">Appearance Settings</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Theme</label>
                    <select
                      value={settings.appearance.theme}
                      onChange={(e) => handleSettingChange('appearance', 'theme', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                      <option value="auto">Auto</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Font Size</label>
                    <select
                      value={settings.appearance.fontSize}
                      onChange={(e) => handleSettingChange('appearance', 'fontSize', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Color Scheme</label>
                    <select
                      value={settings.appearance.colorScheme}
                      onChange={(e) => handleSettingChange('appearance', 'colorScheme', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="purple">Purple</option>
                      <option value="blue">Blue</option>
                      <option value="green">Green</option>
                      <option value="red">Red</option>
                    </select>
                  </div>

                  {Object.entries(settings.appearance).slice(3).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <h3 className="text-white font-medium capitalize">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </h3>
                        <p className="text-sm text-white/70">
                          {key === 'compactMode' && 'Use compact layout'}
                          {key === 'animations' && 'Enable animations and transitions'}
                          {key === 'showAvatars' && 'Show user avatars in lists'}
                          {key === 'sidebarCollapsed' && 'Keep sidebar collapsed by default'}
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={typeof value === 'boolean' ? value : false}
                        onChange={(e) => handleSettingChange('appearance', key, e.target.checked)}
                        className="rounded border-white/30 text-purple-600 focus:ring-purple-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Preferences Settings */}
            {activeTab === 'preferences' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Settings size={24} color="#6366f1" />
                  <h2 className="text-2xl font-bold text-white">Preferences</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Default Currency</label>
                    <select
                      value={settings.preferences.defaultCurrency}
                      onChange={(e) => handleSettingChange('preferences', 'defaultCurrency', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                      <option value="JPY">JPY (¥)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Date Format</label>
                    <select
                      value={settings.preferences.dateFormat}
                      onChange={(e) => handleSettingChange('preferences', 'dateFormat', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Time Format</label>
                    <select
                      value={settings.preferences.timeFormat}
                      onChange={(e) => handleSettingChange('preferences', 'timeFormat', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="12-hour">12-hour</option>
                      <option value="24-hour">24-hour</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Week Start</label>
                    <select
                      value={settings.preferences.weekStart}
                      onChange={(e) => handleSettingChange('preferences', 'weekStart', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="Monday">Monday</option>
                      <option value="Sunday">Sunday</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  {Object.entries(settings.preferences).slice(4).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <h3 className="text-white font-medium capitalize">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </h3>
                        <p className="text-sm text-white/70">
                          {key === 'autoSave' && 'Automatically save changes'}
                          {key === 'rememberFilters' && 'Remember filter preferences'}
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={typeof value === 'boolean' ? value : false}
                        onChange={(e) => handleSettingChange('preferences', key, e.target.checked)}
                        className="rounded border-white/30 text-purple-600 focus:ring-purple-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Data & Export Settings */}
            {activeTab === 'data' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Data size={24} color="#ec4899" />
                  <h2 className="text-2xl font-bold text-white">Data & Export</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="p-6 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center space-x-3 mb-4">
                      <DocumentDownload size={20} color="#10b981" />
                      <h3 className="text-white font-medium text-lg">Export Your Data</h3>
                    </div>
                    <p className="text-sm text-white/70 mb-4">Download a copy of your personal data including events, tickets, and preferences</p>
                    <button
                      onClick={handleExportData}
                      className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors"
                    >
                      <DocumentDownload size={16} className="inline mr-2" color="white" />
                      Export Data
                    </button>
                  </div>

                  <div className="p-6 rounded-lg bg-red-500/10 border border-red-500/20">
                    <div className="flex items-center space-x-3 mb-4">
                      <Trash size={20} color="#ef4444" />
                      <h3 className="text-red-400 font-medium text-lg">Delete Account</h3>
                    </div>
                    <p className="text-sm text-white/70 mb-4">Permanently delete your account and all associated data. This action cannot be undone.</p>
                    <button
                      onClick={handleDeleteAccount}
                      className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition-colors"
                    >
                      <Trash size={16} className="inline mr-2" color="white" />
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSettings; 