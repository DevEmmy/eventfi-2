"use client";
import React, { useState, useEffect } from 'react'
import { Ticket, Chart, Calendar, SearchNormal, User, Star } from 'iconsax-react'
import Link from 'next/link'

const statWidgets = [
  {
    icon: <Ticket color="#7f5af0" size={24} />, stat: '3,200+', label: 'Tickets Sold', style: 'top-8 left-0 md:left-[-120px] md:top-16',
  },
  {
    icon: <Calendar color="#2cb67d" size={24} />, stat: '48', label: 'Active Events', style: 'bottom-8 right-0 md:right-[-120px] md:bottom-24',
  },
  {
    icon: <Chart color="#fbbf24" size={24} />, stat: '+58%', label: 'Growth', style: 'top-1/2 right-0 md:right-[-100px] md:top-1/3',
  },
]

const images = [
  "https://optim.tildacdn.one/tild3766-3036-4634-b665-633133663630/-/resize/318x/-/format/webp/Frame_2085663108.png.webp",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80",
]

const floatingIcons = [
  { icon: <Ticket color='#845EC2' size={24} />, style: 'top-[10%] left-[8%] animate-bounceY1' },
  { icon: <Calendar color='#2cb67d' size={24} />, style: 'top-[15%] right-[12%] animate-bounceY2' },
  { icon: <User color='#D65DB1' size={24} />, style: 'bottom-[32%] left-[14%] animate-bounceY3' },
  { icon: <Star color='#fbbf24' size={24} />, style: 'bottom-[26%] right-[18%] animate-bounceY4' },
  { icon: <Calendar color='#0081CF' size={24} />, style: 'top-[30%] left-[10%] animate-bounceY5' },
]

const Banner = () => {
  const [imgIdx, setImgIdx] = useState(0)
  const [fade, setFade] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setImgIdx((prev) => (prev + 1) % images.length)
        setFade(true)
      }, 400)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Navigate to explore page with search query
    window.location.href = `/explore?search=${encodeURIComponent(searchQuery)}`
  }

  return (
    <section className="relative flex flex-col items-center justify-center py-12 md:py-20 w-full px-4">
      {/* Floating Icons - Hidden on mobile, visible on desktop */}
      <div className="hidden md:block">
        {floatingIcons.map((f, i) => (
          <div
            key={i}
            className={`pointer-events-none absolute z-30 ${f.style}`}
            style={{ filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.12))' }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 flex items-center justify-center border border-white/10 shadow-lg grayscale" style={{ boxShadow: '0 4px 16px 0 rgba(0,0,0,0.2), inset 0 -12px 24px 0 rgba(0,0,0,0.3)' }}>
              {f.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Light background effect */}
      <div
        className="pointer-events-none fixed left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] md:w-[480px] md:h-[320px] lg:w-[600px] lg:h-[400px] z-0"
        aria-hidden
      >
        <div
          className="w-full h-screen rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(ellipse at center,rgb(169, 129, 233) 0%,rgb(50, 30, 82) 70%)',
          }}
        />
      </div>

      {/* Pill label */}
      <span className="mb-4 px-4 md:px-6 py-2 rounded-full bg-white/10 text-white/80 text-xs md:text-sm font-medium tracking-wide shadow backdrop-blur-md border border-white/10 z-10">
        Web3 Event Platform
      </span>

      {/* Headline */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-extrabold text-center text-white leading-tight drop-shadow-lg z-10 px-4">
        Reinventing Events <br className="hidden sm:block" /> for the Web3 Generation
      </h1>
     
      {/* Search Section */}
      <form onSubmit={handleSearch} className="w-full flex justify-center mt-6 md:mt-8 mb-6 md:mb-8 z-10 px-4">
        <div className="flex flex-col sm:flex-row items-center w-full max-w-xl bg-white/10 backdrop-blur-md rounded-2xl md:rounded-full px-4 md:px-6 py-3 md:py-4 shadow-lg border border-white/10 gap-3 sm:gap-0">
          <div className="flex items-center w-full">
            <SearchNormal color="#845EC2" size={18} className="mr-3 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search for events, locations, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-white text-base md:text-lg placeholder-white/60 min-w-0"
            />
          </div>
          <button type="submit" className="w-full sm:w-auto px-6 py-2 rounded-md md:rounded-full bg-[#845EC2] text-white font-semibold shadow hover:bg-[#6d4fa1] transition-colors text-sm md:text-base whitespace-nowrap">
            Search
          </button>
        </div>
      </form>

      {/* Browse All Events Button */}
      <div className="mb-6 md:mb-8 z-10 px-4">
        <Link href="/explore">
          <button className="px-6 md:px-8 py-3 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-sm md:text-base">
            Browse All Events
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className='w-full flex justify-center items-center py-6 md:py-10 relative px-4'>
        {/* Glassy floating dots - Hidden on mobile */}
        <div className="hidden md:block">
          <div className="fixed top-[12%] left-[30%] w-6 h-6 rounded-full bg-white/20 blur-md opacity-60 z-20" />
          <div className="fixed top-[35%] right-[22%] w-4 h-4 rounded-full bg-white/10 blur-sm opacity-50 z-20" />
          <div className="fixed bottom-[18%] left-[38%] w-8 h-8 rounded-full bg-white/15 blur-lg opacity-40 z-20" />
          <div className="fixed bottom-[28%] right-[30%] w-5 h-5 rounded-full bg-white/20 blur-md opacity-60 z-20" />
          <div className="fixed top-[50%] left-[18%] w-3 h-3 rounded-full bg-white/10 blur-sm opacity-40 z-20" />
        </div>
        
        <img
          src={"https://optim.tildacdn.one/tild3766-3036-4634-b665-633133663630/-/resize/318x/-/format/webp/Frame_2085663108.png.webp"}
          alt="Event Preview"
          className={`w-full md:w-[48%] h-[40vh] md:h-[50vh] lg:h-[60vh] object-cover rounded-2xl md:rounded-3xl transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Glassmorphic overlay - Hidden on mobile */}
        <div className="hidden md:block absolute top-5 left-1/2 -translate-x-1/2 w-full md:w-2/3 lg:w-1/2 h-[65vh] rounded-3xl pointer-events-none -z-10 border border-white/10" style={{background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)'}} />
      </div>

      <style jsx>{`
        @keyframes bounceY1 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-18px); } }
        @keyframes bounceY2 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-28px); } }
        @keyframes bounceY3 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-22px); } }
        @keyframes bounceY4 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-16px); } }
        @keyframes bounceY5 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-24px); } }
        .animate-bounceY1 { animation: bounceY1 3.2s infinite cubic-bezier(0.4,0,0.2,1); }
        .animate-bounceY2 { animation: bounceY2 3.8s infinite cubic-bezier(0.4,0,0.2,1); }
        .animate-bounceY3 { animation: bounceY3 3.5s infinite cubic-bezier(0.4,0,0.2,1); }
        .animate-bounceY4 { animation: bounceY4 4.1s infinite cubic-bezier(0.4,0,0.2,1); }
        .animate-bounceY5 { animation: bounceY5 3.7s infinite cubic-bezier(0.4,0,0.2,1); }
        .floating-icon-glass {
          box-shadow: 0 4px 16px 0 rgba(0,0,0,0.12), inset 0 2px 16px 0 rgba(255,255,255,0.18);
        }
      `}</style>
    </section>
  )
}

export default Banner