export interface Destination {
  id: string;
  name: string;
  location: string;
  state: string;
  image: string;
  description: string;
  bestTime: string;
  birdSpecies: string[];
  guides: Guide[];
  howToReach: HowToReach;
  homestays: Homestay[];
  highlights: string[];
}

export interface Guide {
  name: string;
  experience: string;
  contact: string;
  specialization: string;
  price: string;
}

export interface HowToReach {
  nearestAirport: string;
  nearestRailway: string;
  roadAccess: string;
  localTransport: string;
}

export interface Homestay {
  name: string;
  type: string;
  price: string;
  contact: string;
  amenities: string[];
  distance: string;
}

export const destinations: Destination[] = [
  {
    id: "bharatpur",
    name: "Keoladeo National Park",
    location: "Bharatpur, Rajasthan",
    state: "Rajasthan",
    image: "/src/assets/destination-rajasthan.jpg",
    description: "A UNESCO World Heritage Site and one of the world's most important bird breeding and feeding grounds. Home to over 370 bird species.",
    bestTime: "October to March (winter migratory season)",
    birdSpecies: ["Painted Stork", "Siberian Crane", "Sarus Crane", "Greater Flamingo", "Bar-headed Goose", "Northern Pintail"],
    guides: [
      {
        name: "Raj Kumar Sharma",
        experience: "25+ years",
        contact: "+91 9876543210",
        specialization: "Migratory birds and wetland ecology",
        price: "₹2,000/day"
      },
      {
        name: "Mohan Singh",
        experience: "15+ years", 
        contact: "+91 9876543211",
        specialization: "Bird photography and behavior",
        price: "₹1,500/day"
      }
    ],
    howToReach: {
      nearestAirport: "Delhi (180 km) - Indira Gandhi International Airport",
      nearestRailway: "Bharatpur Junction (5 km from park)",
      roadAccess: "Well connected by road from Delhi, Agra, and Jaipur",
      localTransport: "Cycle rickshaws, battery-operated vehicles available inside park"
    },
    homestays: [
      {
        name: "Bird Paradise Homestay",
        type: "Family-run guesthouse",
        price: "₹2,500/night",
        contact: "+91 9876543212",
        amenities: ["Free WiFi", "Bird watching equipment", "Home-cooked meals", "Early morning tea"],
        distance: "2 km from park entrance"
      },
      {
        name: "Keoladeo Nature Lodge",
        type: "Eco-friendly resort",
        price: "₹4,000/night",
        contact: "+91 9876543213", 
        amenities: ["Swimming pool", "Restaurant", "Guided tours", "Photography workshops"],
        distance: "1 km from park entrance"
      }
    ],
    highlights: ["UNESCO World Heritage Site", "370+ bird species", "Best for migratory birds", "World-class wetland ecosystem"]
  },
  {
    id: "munnar",
    name: "Munnar Hills",
    location: "Munnar, Kerala",
    state: "Kerala",
    image: "/src/assets/destination-kerala.jpg",
    description: "A hill station in Western Ghats known for its endemic bird species and misty tea plantations. Perfect for high-altitude bird photography.",
    bestTime: "September to May (post-monsoon and winter)",
    birdSpecies: ["Nilgiri Flycatcher", "Kerala Laughingthrush", "White-bellied Blue Flycatcher", "Broad-tailed Grassbird", "Munnar Bush Warbler"],
    guides: [
      {
        name: "Thomas Mathew",
        experience: "20+ years",
        contact: "+91 9876543214",
        specialization: "Endemic Western Ghats species",
        price: "₹2,200/day"
      },
      {
        name: "Ravi Krishnan",
        experience: "12+ years",
        contact: "+91 9876543215", 
        specialization: "High-altitude birding and tea estate birds",
        price: "₹1,800/day"
      }
    ],
    howToReach: {
      nearestAirport: "Cochin International Airport (110 km)",
      nearestRailway: "Aluva Railway Station (110 km)",
      roadAccess: "Well-connected hill roads from Cochin and Madurai",
      localTransport: "Local taxis and auto-rickshaws available"
    },
    homestays: [
      {
        name: "Tea Garden Homestay",
        type: "Plantation bungalow",
        price: "₹3,500/night",
        contact: "+91 9876543216",
        amenities: ["Tea plantation walks", "Bird watching decks", "Organic meals", "Bonfire evenings"],
        distance: "5 km from Munnar town"
      },
      {
        name: "Misty Mountains Lodge",
        type: "Mountain retreat",
        price: "₹5,000/night", 
        contact: "+91 9876543217",
        amenities: ["Valley views", "Nature trails", "Photography guides", "Ayurvedic spa"],
        distance: "8 km from Munnar town"
      }
    ],
    highlights: ["Endemic Western Ghats species", "Tea plantation birding", "Misty mountain mornings", "High-altitude specialties"]
  },
  {
    id: "ladakh",
    name: "Ladakh Highlands",
    location: "Leh-Ladakh, Jammu & Kashmir",
    state: "Ladakh",
    image: "/src/assets/destination-himalayas.jpg",
    description: "High-altitude desert landscape offering unique Himalayan and Tibetan bird species in stark, dramatic terrain.",
    bestTime: "May to September (accessible season)",
    birdSpecies: ["Black-necked Crane", "Tibetan Sandgrouse", "Brown-headed Gull", "Himalayan Snowcock", "Ladakh Urial", "Golden Eagle"],
    guides: [
      {
        name: "Tenzin Norbu",
        experience: "18+ years",
        contact: "+91 9876543218",
        specialization: "High-altitude and Tibetan species",
        price: "₹2,800/day"
      },
      {
        name: "Lobzang Angmo",
        experience: "10+ years",
        contact: "+91 9876543219",
        specialization: "Buddhist monastery birds and culture",
        price: "₹2,200/day"
      }
    ],
    howToReach: {
      nearestAirport: "Kushok Bakula Rimpochee Airport, Leh (6 km)",
      nearestRailway: "Jammu Tawi (700 km) - then road journey",
      roadAccess: "Manali-Leh Highway (May-Oct) or Srinagar-Leh Highway",
      localTransport: "Shared taxis, private vehicles, motorcycles"
    },
    homestays: [
      {
        name: "Ladakhi Heritage Home",
        type: "Traditional Ladakhi house",
        price: "₹3,000/night",
        contact: "+91 9876543220",
        amenities: ["Traditional architecture", "Local cuisine", "Mountain views", "Cultural experiences"],
        distance: "15 km from Leh"
      },
      {
        name: "Himalayan Eagles Nest",
        type: "Mountain lodge",
        price: "₹4,500/night",
        contact: "+91 9876543221",
        amenities: ["Oxygen support", "Heated rooms", "Western & local food", "Expedition support"],
        distance: "20 km from Leh"
      }
    ],
    highlights: ["Rare high-altitude species", "Dramatic Himalayan landscape", "Buddhist monastery birding", "Unique cold desert ecosystem"]
  }
];