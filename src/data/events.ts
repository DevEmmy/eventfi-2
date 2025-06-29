export interface Event {
  id: string
  name: string
  category: string
  distance: string
  date: string
  time: string
  location: string
  image: string
  attendees: number
  rating: number
  price: number
  description: string
  isFree?: boolean
  isFeatured?: boolean
  originalPrice?: number
  organizer: string
  organizerImage: string
  tags: string[]
  highlights: string[]
  agenda: {
    time: string
    title: string
    description: string
  }[]
  speakers?: {
    name: string
    title: string
    company: string
    image: string
  }[]
  venue: {
    name: string
    address: string
    city: string
    state: string
    zipCode: string
    capacity: number
    amenities: string[]
  }
  tickets: {
    type: string
    price: number
    available: number
    benefits: string[]
  }[]
}

export const events: Event[] = [
  {
    id: "ethereum-summit-2024",
    name: "Ethereum Summit 2024",
    category: "Technology",
    distance: "1.8 miles away",
    date: "Dec 30, 2024",
    time: "9:00 AM",
    location: "Convention Center, SF",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=400&q=80",
    attendees: 1200,
    rating: 4.9,
    price: 299,
    isFeatured: true,
    description: "The biggest Ethereum event of the year featuring top speakers and networking opportunities. Join us for three days of cutting-edge discussions, workshops, and networking with the brightest minds in the blockchain space.",
    organizer: "Ethereum Foundation",
    organizerImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=100&q=80",
    tags: ["Blockchain", "DeFi", "Smart Contracts", "Web3"],
    highlights: [
      "Keynote speeches from Ethereum core developers",
      "Hands-on workshops for developers",
      "Networking with industry leaders",
      "Exclusive access to latest developments"
    ],
    agenda: [
      {
        time: "9:00 AM",
        title: "Opening Ceremony",
        description: "Welcome and introduction to the summit"
      },
      {
        time: "10:00 AM",
        title: "Keynote: The Future of Ethereum",
        description: "Vitalik Buterin shares insights on Ethereum's roadmap"
      },
      {
        time: "11:30 AM",
        title: "DeFi Panel Discussion",
        description: "Leading DeFi protocols discuss the future of finance"
      },
      {
        time: "1:00 PM",
        title: "Lunch & Networking",
        description: "Connect with fellow attendees and speakers"
      },
      {
        time: "2:30 PM",
        title: "Smart Contract Workshop",
        description: "Hands-on coding session for developers"
      },
      {
        time: "4:00 PM",
        title: "Networking Mixer",
        description: "Casual networking with drinks and appetizers"
      }
    ],
    speakers: [
      {
        name: "Vitalik Buterin",
        title: "Co-founder",
        company: "Ethereum",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
      },
      {
        name: "Charles Hoskinson",
        title: "CEO",
        company: "IOHK",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
      },
      {
        name: "Gavin Wood",
        title: "Founder",
        company: "Polkadot",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
      }
    ],
    venue: {
      name: "San Francisco Convention Center",
      address: "123 Main Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      capacity: 2000,
      amenities: ["WiFi", "AV Equipment", "Catering", "Parking", "Accessibility"]
    },
    tickets: [
      {
        type: "Early Bird",
        price: 199,
        available: 50,
        benefits: ["Full conference access", "Workshop materials", "Networking dinner", "Swag bag"]
      },
      {
        type: "Regular",
        price: 299,
        available: 200,
        benefits: ["Full conference access", "Workshop materials", "Networking dinner"]
      },
      {
        type: "VIP",
        price: 599,
        available: 25,
        benefits: ["Full conference access", "Exclusive VIP lounge", "Meet & greet with speakers", "Premium swag bag", "Priority seating"]
      }
    ]
  },
  {
    id: "crypto-art-gallery-opening",
    name: "Crypto Art Gallery Opening",
    category: "Art",
    distance: "0.3 miles away",
    date: "Dec 12, 2024",
    time: "6:00 PM",
    location: "Downtown Gallery, SF",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=400&q=80",
    attendees: 85,
    rating: 4.9,
    price: 0,
    isFree: true,
    description: "Experience the intersection of art and blockchain technology. This exclusive gallery opening showcases the finest crypto art from emerging and established digital artists.",
    organizer: "Crypto Art Collective",
    organizerImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
    tags: ["NFT", "Digital Art", "Crypto", "Gallery"],
    highlights: [
      "Exclusive NFT art showcase",
      "Meet the artists",
      "Live art demonstrations",
      "Cocktail reception"
    ],
    agenda: [
      {
        time: "6:00 PM",
        title: "Gallery Opening",
        description: "Welcome and introduction to the exhibition"
      },
      {
        time: "6:30 PM",
        title: "Artist Presentations",
        description: "Featured artists discuss their work and process"
      },
      {
        time: "7:30 PM",
        title: "Live Art Demo",
        description: "Watch artists create digital art in real-time"
      },
      {
        time: "8:30 PM",
        title: "Networking & Cocktails",
        description: "Mix and mingle with artists and collectors"
      }
    ],
    venue: {
      name: "Downtown Art Gallery",
      address: "456 Art Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94102",
      capacity: 150,
      amenities: ["WiFi", "Projection System", "Refreshments", "Security"]
    },
    tickets: [
      {
        type: "Free Admission",
        price: 0,
        available: 100,
        benefits: ["Gallery access", "Artist meet & greet", "Refreshments"]
      }
    ]
  },
  {
    id: "blockchain-networking-mixer",
    name: "Blockchain Networking Mixer",
    category: "Technology",
    distance: "1.1 miles away",
    date: "Dec 13, 2024",
    time: "7:30 PM",
    location: "Tech Hub, SF",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=400&q=80",
    attendees: 120,
    rating: 4.7,
    price: 15,
    description: "Connect with blockchain professionals, entrepreneurs, and enthusiasts in a relaxed networking environment. Perfect for building relationships and exploring opportunities.",
    organizer: "Blockchain SF",
    organizerImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80",
    tags: ["Networking", "Blockchain", "Startups", "Professional"],
    highlights: [
      "Professional networking",
      "Lightning talks",
      "Open bar",
      "Startup showcase"
    ],
    agenda: [
      {
        time: "7:30 PM",
        title: "Check-in & Welcome",
        description: "Registration and welcome drinks"
      },
      {
        time: "8:00 PM",
        title: "Lightning Talks",
        description: "Quick presentations from industry leaders"
      },
      {
        time: "8:30 PM",
        title: "Networking Session",
        description: "Structured networking with fellow professionals"
      },
      {
        time: "9:30 PM",
        title: "Open Networking",
        description: "Casual networking with drinks and appetizers"
      }
    ],
    venue: {
      name: "Tech Hub SF",
      address: "789 Innovation Drive",
      city: "San Francisco",
      state: "CA",
      zipCode: "94103",
      capacity: 200,
      amenities: ["WiFi", "AV Equipment", "Bar", "Catering", "Parking"]
    },
    tickets: [
      {
        type: "General Admission",
        price: 15,
        available: 80,
        benefits: ["Event access", "Open bar", "Appetizers", "Networking materials"]
      }
    ]
  },
  {
    id: "nft-music-festival",
    name: "NFT Music Festival",
    category: "Music",
    distance: "2.0 miles away",
    date: "Dec 14, 2024",
    time: "5:00 PM",
    location: "Music Hall, SF",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
    attendees: 300,
    rating: 4.8,
    price: 35,
    description: "A revolutionary music festival where every ticket is an NFT with unique benefits. Experience the future of music ownership and digital collectibles.",
    organizer: "NFT Music Collective",
    organizerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    tags: ["Music", "NFT", "Festival", "Digital Collectibles"],
    highlights: [
      "Live performances from top artists",
      "NFT ticket benefits",
      "Exclusive merchandise",
      "Backstage access for NFT holders"
    ],
    agenda: [
      {
        time: "5:00 PM",
        title: "Doors Open",
        description: "Check-in and NFT verification"
      },
      {
        time: "6:00 PM",
        title: "Opening Act",
        description: "Local artists kick off the festival"
      },
      {
        time: "7:30 PM",
        title: "Main Performances",
        description: "Headlining artists take the stage"
      },
      {
        time: "10:00 PM",
        title: "After Party",
        description: "Exclusive after-party for NFT holders"
      }
    ],
    venue: {
      name: "SF Music Hall",
      address: "321 Harmony Avenue",
      city: "San Francisco",
      state: "CA",
      zipCode: "94104",
      capacity: 500,
      amenities: ["Sound System", "Lighting", "Bar", "Merchandise", "VIP Areas"]
    },
    tickets: [
      {
        type: "General NFT Ticket",
        price: 35,
        available: 200,
        benefits: ["Event access", "Exclusive NFT", "Merchandise discount", "Future event perks"]
      },
      {
        type: "VIP NFT Ticket",
        price: 75,
        available: 50,
        benefits: ["All general benefits", "Backstage access", "Meet & greet", "Premium merchandise"]
      }
    ]
  },
  {
    id: "defi-workshop",
    name: "DeFi Workshop",
    category: "Technology",
    distance: "0.8 miles away",
    date: "Dec 16, 2024",
    time: "2:00 PM",
    location: "Innovation Center, SF",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
    attendees: 45,
    rating: 4.6,
    price: 25,
    description: "Learn the fundamentals of Decentralized Finance (DeFi) through hands-on workshops and expert guidance. Perfect for beginners and intermediate users.",
    organizer: "DeFi Academy",
    organizerImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    tags: ["DeFi", "Education", "Workshop", "Hands-on"],
    highlights: [
      "Hands-on DeFi tutorials",
      "Expert guidance",
      "Take-home materials",
      "Community access"
    ],
    agenda: [
      {
        time: "2:00 PM",
        title: "Introduction to DeFi",
        description: "Overview of decentralized finance concepts"
      },
      {
        time: "3:00 PM",
        title: "Yield Farming Workshop",
        description: "Hands-on session on yield farming strategies"
      },
      {
        time: "4:30 PM",
        title: "Liquidity Provision",
        description: "Learn about providing liquidity to DeFi protocols"
      },
      {
        time: "6:00 PM",
        title: "Q&A & Networking",
        description: "Ask questions and connect with experts"
      }
    ],
    venue: {
      name: "Innovation Center",
      address: "654 Tech Boulevard",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      capacity: 100,
      amenities: ["WiFi", "Computers", "Projector", "Coffee", "Snacks"]
    },
    tickets: [
      {
        type: "Workshop Ticket",
        price: 25,
        available: 40,
        benefits: ["Full workshop access", "Materials", "Community access", "Follow-up resources"]
      }
    ]
  },
  {
    id: "gaming-lan-party",
    name: "Gaming LAN Party",
    category: "Gaming",
    distance: "1.5 miles away",
    date: "Dec 17, 2024",
    time: "4:00 PM",
    location: "Gaming Arena, SF",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80",
    attendees: 180,
    rating: 4.5,
    price: 20,
    description: "Join fellow gamers for an epic LAN party featuring the latest games, tournaments, and prizes. Experience the thrill of competitive gaming in a social environment.",
    organizer: "Gaming SF",
    organizerImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
    tags: ["Gaming", "LAN Party", "Tournament", "Competitive"],
    highlights: [
      "Multiple gaming tournaments",
      "High-end gaming equipment",
      "Prizes and giveaways",
      "Food and refreshments"
    ],
    agenda: [
      {
        time: "4:00 PM",
        title: "Check-in & Setup",
        description: "Registration and equipment setup"
      },
      {
        time: "5:00 PM",
        title: "Tournament Registration",
        description: "Sign up for various gaming tournaments"
      },
      {
        time: "6:00 PM",
        title: "Tournaments Begin",
        description: "Competitive gaming across multiple titles"
      },
      {
        time: "9:00 PM",
        title: "Prize Ceremony",
        description: "Award ceremony for tournament winners"
      }
    ],
    venue: {
      name: "Gaming Arena SF",
      address: "987 Game Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94106",
      capacity: 250,
      amenities: ["Gaming PCs", "Consoles", "High-speed Internet", "Food", "Beverages"]
    },
    tickets: [
      {
        type: "General Admission",
        price: 20,
        available: 150,
        benefits: ["Event access", "Tournament entry", "Food & drinks", "Gaming equipment"]
      }
    ]
  },
  {
    id: "web3-startup-pitch-night",
    name: "Web3 Startup Pitch Night",
    category: "Technology",
    distance: "0.6 miles away",
    date: "Dec 19, 2024",
    time: "6:30 PM",
    location: "Venture Studio, SF",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    attendees: 75,
    rating: 4.9,
    price: 0,
    isFree: true,
    description: "Watch innovative Web3 startups pitch their ideas to a panel of investors and industry experts. Network with entrepreneurs and discover the next big thing in blockchain.",
    organizer: "Web3 Ventures",
    organizerImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=100&q=80",
    tags: ["Startups", "Pitch Night", "Investors", "Web3"],
    highlights: [
      "Startup pitches",
      "Investor panel",
      "Networking opportunities",
      "Free admission"
    ],
    agenda: [
      {
        time: "6:30 PM",
        title: "Registration & Networking",
        description: "Check-in and pre-event networking"
      },
      {
        time: "7:00 PM",
        title: "Welcome & Introductions",
        description: "Event overview and panel introductions"
      },
      {
        time: "7:15 PM",
        title: "Startup Pitches",
        description: "5-minute pitches from selected startups"
      },
      {
        time: "8:30 PM",
        title: "Q&A & Feedback",
        description: "Panel questions and audience feedback"
      },
      {
        time: "9:00 PM",
        title: "Networking & Drinks",
        description: "Post-event networking with drinks"
      }
    ],
    venue: {
      name: "Venture Studio",
      address: "147 Startup Lane",
      city: "San Francisco",
      state: "CA",
      zipCode: "94107",
      capacity: 120,
      amenities: ["WiFi", "Projector", "Refreshments", "Networking space"]
    },
    tickets: [
      {
        type: "Free Admission",
        price: 0,
        available: 100,
        benefits: ["Event access", "Networking", "Refreshments", "Startup materials"]
      }
    ]
  }
]

export const getEventById = (id: string): Event | undefined => {
  return events.find(event => event.id === id)
}

export const getEventsByCategory = (category: string): Event[] => {
  if (category === 'All') return events
  return events.filter(event => event.category === category)
}

export const searchEvents = (query: string): Event[] => {
  const lowercaseQuery = query.toLowerCase()
  return events.filter(event => 
    event.name.toLowerCase().includes(lowercaseQuery) ||
    event.description.toLowerCase().includes(lowercaseQuery) ||
    event.location.toLowerCase().includes(lowercaseQuery) ||
    event.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
} 