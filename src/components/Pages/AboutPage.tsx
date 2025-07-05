"use client"
import React from 'react'
import NavBar from '../Widgets/NavBar'
import Footer from '../Widgets/Footer'
import { FaTicketAlt, FaSearchLocation, FaUsers, FaCubes, FaWallet, FaRocket, FaShieldAlt, FaGlobe } from "react-icons/fa"

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Olaosebikan Emmanuel",
      role: "CEO & Co-Founder",
      image: "https://www.svgrepo.com/show/452030/avatar-default.svg",
      bio: "Passionate about making Web3 accessible to everyone."
    },
    {
      name: "Joshua",
      role: "Co-Founder & Product Manager", 
      image: "https://www.svgrepo.com/show/452030/avatar-default.svg",
      bio: "Blockchain enthusiast."
    },
    {
      name: "May Frost",
      role: "Head of Design",
      image: "https://www.svgrepo.com/show/452030/avatar-default.svg",
      bio: "Design veteran from Airbnb and Uber. Believes great UX can change the world."
    },
    {
        name: "Olaniyan Precious",
        role: "Head of Content",
        image: "https://www.svgrepo.com/show/452030/avatar-default.svg",
        bio: "Content creator and community manager."
    }
  ]

  const howItWorks = [
    {       
      step: "01",
      title: "Create Your Event",
      description: "Set up your event in minutes with our intuitive dashboard. Choose from NFT ticketing, equipment rentals, and community features.",
      icon: <FaRocket className="text-[#845EC2]" size={32} />
    },
    {
      step: "02", 
      title: "Mint NFT Tickets",
      description: "Generate unique, verifiable NFT tickets for your attendees. Each ticket is a collectible digital asset with built-in security.",
      icon: <FaTicketAlt className="text-[#FF6F91]" size={32} />
    },
    {
      step: "03",
      title: "Engage Your Community",
      description: "Use our in-app chat, gamification features, and POAP rewards to keep attendees engaged before, during, and after events.",
      icon: <FaUsers className="text-[#00C9A7]" size={32} />
    },
    {
      step: "04",
      title: "Scale & Grow",
      description: "Access analytics, manage equipment rentals, and expand your reach with our comprehensive event management tools.",
      icon: <FaGlobe className="text-[#FFD700]" size={32} />
    }
  ]

  const stats = [
    { number: "10,000+", label: "Events Created" },
    { number: "500,000+", label: "Tickets Sold" },
    { number: "50+", label: "Cities Worldwide" },
    { number: "99.9%", label: "Uptime" }
  ]

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
            background: 'radial-gradient(ellipse at center,rgb(169, 129, 233) 0%,rgb(50, 30, 82) 70%)',
          }}
        />
      </div>

      {/* Hero Section */}
      <div className='pt-20 pb-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto text-center'>
          <span className="inline-block bg-white/10 text-white/70 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            About Us
          </span>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6'>
            Reinventing Events for the Web3 Generation
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto mb-8'>
            We're building the future of event management, where every ticket is an NFT, 
            every attendee is part of a community, and every event is an unforgettable experience.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className='px-4 sm:px-6 lg:px-8 mb-20'>
        <div className='max-w-7xl mx-auto'>
          <div className="relative bg-[#181824]/90 rounded-2xl border border-white/10 shadow-xl px-10 py-12 max-w-4xl mx-auto">
            <span className="absolute -top-5 left-6 px-4 py-1 rounded-full bg-[#845EC2] text-white text-xs font-semibold shadow">
              Our Mission
            </span>
            <div className="text-4xl md:text-5xl font-extrabold text-white mb-4 mt-4">
              Empowering 10,000+ Event Creators
            </div>
            <div className="text-lg text-white/70 mb-6">
              To launch, manage, and grow their communities with Web3 ticketing and tools. 
              We believe that events should be more than just gatherings—they should be 
              transformative experiences that create lasting connections and memories.
            </div>
            <div className="text-white/60 text-base">
              Founded in 2023, EventFi emerged from a simple observation: the event industry 
              was ready for a Web3 revolution. Traditional ticketing systems were plagued with 
              fraud, scalping, and poor user experiences. We saw an opportunity to leverage 
              blockchain technology to solve these problems while creating new possibilities 
              for community building and engagement.
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className='px-4 sm:px-6 lg:px-8 mb-20'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <div className='text-3xl md:text-4xl font-bold text-white mb-2'>{stat.number}</div>
                <div className='text-gray-400 text-sm'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className='px-4 sm:px-6 lg:px-8 mb-20'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <span className="inline-block bg-white/10 text-white/70 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              How It Works
            </span>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              From Idea to Unforgettable Event
            </h2>
            <p className='text-gray-300 max-w-2xl mx-auto'>
              Our platform makes it easy to create, manage, and grow your events with 
              cutting-edge Web3 technology and community features.
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {howItWorks.map((step, index) => (
              <div key={index} className='bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-lg'>
                <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0'>
                    <div className='w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center'>
                      {step.icon}
                    </div>
                  </div>
                  <div className='flex-1'>
                    <div className='text-sm text-[#845EC2] font-semibold mb-2'>{step.step}</div>
                    <h3 className='text-xl font-bold text-white mb-3'>{step.title}</h3>
                    <p className='text-gray-300'>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className='px-4 sm:px-6 lg:px-8 mb-20'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <span className="inline-block bg-white/10 text-white/70 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Our Team
            </span>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Meet the Visionaries
            </h2>
            <p className='text-gray-300 max-w-2xl mx-auto'>
              We're a team of passionate builders, designers, and entrepreneurs 
              dedicated to revolutionizing the event industry.
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            {teamMembers.map((member, index) => (
              <div key={index} className='bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-lg text-center'>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className='w-24 h-24 rounded-full mx-auto mb-4 object-cover'
                />
                <h3 className='text-xl font-bold text-white mb-2'>{member.name}</h3>
                <div className='text-[#845EC2] font-semibold mb-3'>{member.role}</div>
                <p className='text-gray-300 text-sm'>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className='px-4 sm:px-6 lg:px-8 mb-20'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <span className="inline-block bg-white/10 text-white/70 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Our Values
            </span>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              What Drives Us Forward
            </h2>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-lg text-center'>
              <div className='w-16 h-16 bg-[#845EC2]/20 rounded-xl flex items-center justify-center mx-auto mb-4'>
                <FaShieldAlt className="text-[#845EC2]" size={32} />
              </div>
              <h3 className='text-xl font-bold text-white mb-3'>Trust & Security</h3>
              <p className='text-gray-300'>
                We prioritize the security of our users' data and transactions, 
                leveraging blockchain technology for transparency and trust.
              </p>
            </div>
            
            <div className='bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-lg text-center'>
              <div className='w-16 h-16 bg-[#FF6F91]/20 rounded-xl flex items-center justify-center mx-auto mb-4'>
                <FaUsers className="text-[#FF6F91]" size={32} />
              </div>
              <h3 className='text-xl font-bold text-white mb-3'>Community First</h3>
              <p className='text-gray-300'>
                We believe in the power of community and design our platform 
                to foster meaningful connections between event creators and attendees.
              </p>
            </div>
            
            <div className='bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-lg text-center'>
              <div className='w-16 h-16 bg-[#00C9A7]/20 rounded-xl flex items-center justify-center mx-auto mb-4'>
                <FaRocket className="text-[#00C9A7]" size={32} />
              </div>
              <h3 className='text-xl font-bold text-white mb-3'>Innovation</h3>
              <p className='text-gray-300'>
                We constantly push the boundaries of what's possible, 
                exploring new technologies to enhance the event experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='px-4 sm:px-6 lg:px-8 mb-20'>
        <div className='max-w-4xl mx-auto'>
          <div className='bg-gradient-to-r from-[#845EC2] to-[#D65DB1] rounded-2xl p-12 text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Ready to Transform Your Events?
            </h2>
            <p className='text-white/90 text-lg mb-8 max-w-2xl mx-auto'>
              Join thousands of event creators who are already using EventFi to 
              build amazing communities and unforgettable experiences.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='px-8 py-4 bg-white text-[#845EC2] font-bold rounded-xl hover:bg-gray-100 transition-colors'>
                Get Started Today
              </button>
              <button className='px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#845EC2] transition-colors'>
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AboutPage 