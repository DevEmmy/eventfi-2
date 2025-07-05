"use client"
import React, { useState } from 'react';
import { 
  Add, 
  Save2, 
  Eye,
  DocumentUpload,
  Calendar,
  Location,
  User,
  DollarCircle,
  Tag,
  DocumentText,
  Image,
  Clock,
  Global
} from 'iconsax-react';

const DashboardCreate = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    basicInfo: {
      name: '',
      category: '',
      description: '',
      image: ''
    },
    details: {
      date: '',
      time: '',
      endTime: '',
      timezone: 'America/Los_Angeles',
      location: '',
      venue: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      capacity: '',
      isOnline: false,
      onlineUrl: ''
    },
    tickets: [
      {
        type: 'Regular',
        price: 0,
        available: 100,
        benefits: ['Event access'],
        description: ''
      }
    ],
    settings: {
      isPublic: true,
      allowWaitlist: true,
      requireApproval: false,
      tags: [],
      highlights: []
    }
  });

  const categories = [
    'Technology', 'Art', 'Music', 'Business', 'Education', 
    'Health', 'Sports', 'Food', 'Travel', 'Other'
  ];

  const timezones = [
    'America/Los_Angeles',
    'America/New_York',
    'Europe/London',
    'Asia/Tokyo',
    'Australia/Sydney'
  ];

  const handleInputChange = (section: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const handleTicketChange = (index: number, field: string, value: any) => {
    const updatedTickets = [...formData.tickets];
    updatedTickets[index] = {
      ...updatedTickets[index],
      [field]: value
    };
    setFormData(prev => ({
      ...prev,
      tickets: updatedTickets
    }));
  };

  const addTicket = () => {
    setFormData(prev => ({
      ...prev,
      tickets: [
        ...prev.tickets,
        {
          type: 'VIP',
          price: 0,
          available: 50,
          benefits: ['Event access'],
          description: ''
        }
      ]
    }));
  };

  const removeTicket = (index: number) => {
    if (formData.tickets.length > 1) {
      setFormData(prev => ({
        ...prev,
        tickets: prev.tickets.filter((_, i) => i !== index)
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Event data:', formData);
  };

  const steps = [
    { id: 1, title: 'Basic Info', icon: Add },
    { id: 2, title: 'Event Details', icon: Calendar },
    { id: 3, title: 'Tickets', icon: DollarCircle },
    { id: 4, title: 'Settings', icon: Global }
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Create Event</h1>
          <p className="text-white/70">Set up your event and start selling tickets</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors">
            <Eye size={20} className="inline mr-2" color='white'/>
            Preview
          </button>
          <button 
            onClick={handleSubmit}
            className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium transition-colors"
          >
            <Save2 size={20} className="inline mr-2" color='white'/>
            Save Draft
          </button>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                  activeStep >= step.id 
                    ? 'bg-purple-600 border-purple-600 text-white' 
                    : 'border-white/30 text-white/50'
                }`}>
                  <IconComponent size={20} color='white'/>
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  activeStep >= step.id ? 'text-white' : 'text-white/50'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    activeStep > step.id ? 'bg-purple-600' : 'bg-white/30'
                  }`} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/10">
        {/* Step 1: Basic Info */}
        {activeStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Basic Information</h2>
            
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Event Name *
              </label>
              <input
                type="text"
                value={formData.basicInfo.name}
                onChange={(e) => handleInputChange('basicInfo', 'name', e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter event name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Category *
              </label>
              <select
                value={formData.basicInfo.category}
                onChange={(e) => handleInputChange('basicInfo', 'category', e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Select category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Description *
              </label>
              <textarea
                value={formData.basicInfo.description}
                onChange={(e) => handleInputChange('basicInfo', 'description', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                placeholder="Describe your event..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Event Image
              </label>
              <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center">
                <DocumentUpload size={48} className="mx-auto text-white/50 mb-4" />
                <p className="text-white/70 mb-2">Upload event image</p>
                <button type="button" className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-sm transition-colors">
                  Choose File
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Event Details */}
        {activeStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Event Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  value={formData.details.date}
                  onChange={(e) => handleInputChange('details', 'date', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Start Time *
                </label>
                <input
                  type="time"
                  value={formData.details.time}
                  onChange={(e) => handleInputChange('details', 'time', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  End Time
                </label>
                <input
                  type="time"
                  value={formData.details.endTime}
                  onChange={(e) => handleInputChange('details', 'endTime', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Timezone
                </label>
                <select
                  value={formData.details.timezone}
                  onChange={(e) => handleInputChange('details', 'timezone', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {timezones.map(tz => (
                    <option key={tz} value={tz}>{tz}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                id="isOnline"
                checked={formData.details.isOnline}
                onChange={(e) => handleInputChange('details', 'isOnline', e.target.checked)}
                className="rounded border-white/30 text-purple-600 focus:ring-purple-500"
              />
              <label htmlFor="isOnline" className="text-white">This is an online event</label>
            </div>

            {formData.details.isOnline ? (
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Online Meeting URL
                </label>
                <input
                  type="url"
                  value={formData.details.onlineUrl}
                  onChange={(e) => handleInputChange('details', 'onlineUrl', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="https://..."
                />
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Venue Name
                  </label>
                  <input
                    type="text"
                    value={formData.details.venue}
                    onChange={(e) => handleInputChange('details', 'venue', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Venue name"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={formData.details.address}
                    onChange={(e) => handleInputChange('details', 'address', e.target.value)}
                    className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Address"
                  />
                  <input
                    type="text"
                    value={formData.details.city}
                    onChange={(e) => handleInputChange('details', 'city', e.target.value)}
                    className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="City"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={formData.details.state}
                    onChange={(e) => handleInputChange('details', 'state', e.target.value)}
                    className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="State"
                  />
                  <input
                    type="text"
                    value={formData.details.zipCode}
                    onChange={(e) => handleInputChange('details', 'zipCode', e.target.value)}
                    className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="ZIP Code"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Capacity
              </label>
              <input
                type="number"
                value={formData.details.capacity}
                onChange={(e) => handleInputChange('details', 'capacity', e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Maximum attendees"
              />
            </div>
          </div>
        )}

        {/* Step 3: Tickets */}
        {activeStep === 3 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Tickets</h2>
              <button
                type="button"
                onClick={addTicket}
                className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-sm transition-colors"
              >
                <Add size={16} className="inline mr-2" />
                Add Ticket Type
              </button>
            </div>

            {formData.tickets.map((ticket, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Ticket Type {index + 1}</h3>
                  {formData.tickets.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeTicket(index)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Ticket Type
                    </label>
                    <input
                      type="text"
                      value={ticket.type}
                      onChange={(e) => handleTicketChange(index, 'type', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="e.g., Regular, VIP, Early Bird"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Price ($)
                    </label>
                    <input
                      type="number"
                      value={ticket.price}
                      onChange={(e) => handleTicketChange(index, 'price', parseFloat(e.target.value) || 0)}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="0 for free"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Available Quantity
                    </label>
                    <input
                      type="number"
                      value={ticket.available}
                      onChange={(e) => handleTicketChange(index, 'available', parseInt(e.target.value) || 0)}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Number of tickets"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Description
                    </label>
                    <input
                      type="text"
                      value={ticket.description}
                      onChange={(e) => handleTicketChange(index, 'description', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Brief description"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Step 4: Settings */}
        {activeStep === 4 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Event Settings</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Public Event</h3>
                  <p className="text-sm text-white/70">Anyone can find and join this event</p>
                </div>
                <input
                  type="checkbox"
                  checked={formData.settings.isPublic}
                  onChange={(e) => handleInputChange('settings', 'isPublic', e.target.checked)}
                  className="rounded border-white/30 text-purple-600 focus:ring-purple-500"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Allow Waitlist</h3>
                  <p className="text-sm text-white/70">Let people join a waitlist when sold out</p>
                </div>
                <input
                  type="checkbox"
                  checked={formData.settings.allowWaitlist}
                  onChange={(e) => handleInputChange('settings', 'allowWaitlist', e.target.checked)}
                  className="rounded border-white/30 text-purple-600 focus:ring-purple-500"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Require Approval</h3>
                  <p className="text-sm text-white/70">Manually approve attendees</p>
                </div>
                <input
                  type="checkbox"
                  checked={formData.settings.requireApproval}
                  onChange={(e) => handleInputChange('settings', 'requireApproval', e.target.checked)}
                  className="rounded border-white/30 text-purple-600 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between pt-8 border-t border-white/10">
          <button
            type="button"
            onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
            disabled={activeStep === 1}
            className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setActiveStep(Math.min(4, activeStep + 1))}
              className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors"
            >
              {activeStep === 4 ? 'Create Event' : 'Next'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DashboardCreate; 