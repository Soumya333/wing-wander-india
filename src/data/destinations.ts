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
  },
  {
    id: "arunachal",
    name: "Eaglenest Wildlife Sanctuary",
    location: "West Kameng, Arunachal Pradesh",
    state: "Arunachal Pradesh",
    image: "/src/assets/destination-mountains.jpg",
    description: "A biodiversity hotspot in the Eastern Himalayas, home to over 450 bird species including many rare and endemic species of the region.",
    bestTime: "October to April (post-monsoon and winter)",
    birdSpecies: ["Bugun Liocichla", "Ward's Trogon", "Beautiful Nuthatch", "Fire-tailed Myzornis", "Rusty-bellied Shortwing", "Grey-bellied Tesia"],
    guides: [
      {
        name: "Ramana Athreya",
        experience: "30+ years",
        contact: "+91 9876543222",
        specialization: "Endemic Himalayan species and ornithology research",
        price: "₹3,500/day"
      },
      {
        name: "Binanda Hatibaruah",
        experience: "22+ years",
        contact: "+91 9876543223",
        specialization: "Eastern Himalayan specialties and tribal birding",
        price: "₹2,800/day"
      }
    ],
    howToReach: {
      nearestAirport: "Tezpur Airport (150 km)",
      nearestRailway: "Rangapara North (120 km)",
      roadAccess: "Via Tezpur-Bhalukpong-Bomdila route, permits required",
      localTransport: "4WD vehicles essential, local jeeps available"
    },
    homestays: [
      {
        name: "Eaglenest Lodge",
        type: "Eco-lodge in forest",
        price: "₹4,000/night",
        contact: "+91 9876543224",
        amenities: ["Forest views", "Bird watching deck", "Local cuisine", "Guide services"],
        distance: "5 km from sanctuary entrance"
      },
      {
        name: "Himalayan Birder's Rest",
        type: "Mountain guesthouse",
        price: "₹3,200/night",
        contact: "+91 9876543225",
        amenities: ["Heated rooms", "Early morning birding", "Equipment rental", "Research library"],
        distance: "8 km from sanctuary"
      }
    ],
    highlights: ["450+ bird species", "Endemic Eastern Himalayan birds", "Bugun Liocichla discovery site", "Pristine montane forests"]
  },
  {
    id: "north-sikkim",
    name: "North Sikkim",
    location: "Lachung & Yumthang Valley, North Sikkim",
    state: "Sikkim", 
    image: "/src/assets/destination-mountains.jpg",
    description: "High-altitude birding paradise with alpine meadows and rhododendron forests, offering spectacular views and unique Himalayan species.",
    bestTime: "April to June and September to November",
    birdSpecies: ["Snow Partridge", "Himalayan Monal", "Blood Pheasant", "Satyr Tragopan", "Alpine Chough", "Grandala"],
    guides: [
      {
        name: "Phinjo Sherpa",
        experience: "18+ years",
        contact: "+91 9876543226",
        specialization: "High-altitude species and alpine ecology",
        price: "₹2,500/day"
      },
      {
        name: "Karma Bhutia",
        experience: "14+ years",
        contact: "+91 9876543227",
        specialization: "Rhododendron forest birds and photography",
        price: "₹2,200/day"
      }
    ],
    howToReach: {
      nearestAirport: "Bagdogra Airport (175 km)",
      nearestRailway: "New Jalpaiguri (185 km)",
      roadAccess: "Via Gangtok, permits required for North Sikkim",
      localTransport: "Shared jeeps and private vehicles, altitude acclimatization needed"
    },
    homestays: [
      {
        name: "Alpine Bird Lodge",
        type: "High-altitude lodge",
        price: "₹3,800/night",
        contact: "+91 9876543228",
        amenities: ["Oxygen support", "Valley views", "Local Sikkimese food", "Birding guides"],
        distance: "Lachung town center"
      },
      {
        name: "Yumthang Valley Camp",
        type: "Eco-camp with tents",
        price: "₹2,800/night",
        contact: "+91 9876543229",
        amenities: ["Alpine setting", "Campfire evenings", "Packed lunches", "Nature walks"],
        distance: "15 km from Lachung"
      }
    ],
    highlights: ["Alpine meadow birding", "Rhododendron blooms", "High-altitude specialists", "Spectacular mountain views"]
  },
  {
    id: "north-bengal",
    name: "Neora Valley National Park",
    location: "Kalimpong, North Bengal",
    state: "West Bengal",
    image: "/src/assets/destination-mountains.jpg", 
    description: "Dense virgin forest in the Eastern Himalayas, one of the richest biodiversity zones with over 265 bird species recorded.",
    bestTime: "October to March and May to June",
    birdSpecies: ["Rufous-necked Hornbill", "Great Pied Hornbill", "Sultan Tit", "Long-tailed Broadbill", "Rusty-cheeked Scimitar Babbler", "Chestnut-crowned Warbler"],
    guides: [
      {
        name: "Sonam Lepcha",
        experience: "20+ years",
        contact: "+91 9876543230",
        specialization: "Hornbills and forest canopy species",
        price: "₹2,200/day"
      },
      {
        name: "Ashok Pradhan",
        experience: "16+ years",
        contact: "+91 9876543231",
        specialization: "Understory birds and mammal tracking",
        price: "₹1,800/day"
      }
    ],
    howToReach: {
      nearestAirport: "Bagdogra Airport (85 km)",
      nearestRailway: "New Jalpaiguri (75 km)",
      roadAccess: "Well-connected via Siliguri-Kalimpong highway",
      localTransport: "Local taxis and shared vehicles to forest gates"
    },
    homestays: [
      {
        name: "Forest Edge Homestay",
        type: "Traditional hill home",
        price: "₹2,500/night",
        contact: "+91 9876543232",
        amenities: ["Forest proximity", "Home-cooked meals", "Garden birding", "Local culture"],
        distance: "3 km from park entrance"
      },
      {
        name: "Lepcha Heritage Home",
        type: "Cultural homestay",
        price: "₹2,200/night",
        contact: "+91 9876543233",
        amenities: ["Traditional architecture", "Organic vegetables", "Cultural programs", "Nature walks"],
        distance: "5 km from park"
      }
    ],
    highlights: ["Virgin forest ecosystem", "Hornbill conservation area", "265+ bird species", "Rich biodiversity zone"]
  },
  {
    id: "sattal",
    name: "Sattal Lake",
    location: "Sattal, Nainital, Uttarakhand",
    state: "Uttarakhand",
    image: "/src/assets/destination-water.jpg",
    description: "A cluster of seven interconnected freshwater lakes nestled in oak and pine forests, famous for resident and migratory waterfowl.",
    bestTime: "November to March and May to June",
    birdSpecies: ["Brown Fish Owl", "Crested Kingfisher", "Grey-headed Fish Eagle", "Wallcreeper", "Khalij Pheasant", "Himalayan Griffon"],
    guides: [
      {
        name: "Sanjay Sondhi",
        experience: "25+ years",
        contact: "+91 9876543234",
        specialization: "Waterfowl and forest edge species",
        price: "₹2,500/day"
      },
      {
        name: "Lalit Rana",
        experience: "18+ years",
        contact: "+91 9876543235",
        specialization: "Lake ecosystem and photography",
        price: "₹2,000/day"
      }
    ],
    howToReach: {
      nearestAirport: "Pantnagar Airport (60 km)",
      nearestRailway: "Kathgodam (22 km)",
      roadAccess: "Well-connected by road from Delhi and major hill stations",
      localTransport: "Local taxis and buses from Kathgodam"
    },
    homestays: [
      {
        name: "Sattal Birders Paradise",
        type: "Lakeside cottage",
        price: "₹3,200/night",
        contact: "+91 9876543236",
        amenities: ["Lake views", "Boating facility", "Bird hide access", "Photography equipment"],
        distance: "200m from main lake"
      },
      {
        name: "Oak & Pine Retreat",
        type: "Forest lodge",
        price: "₹2,800/night",
        contact: "+91 9876543237",
        amenities: ["Forest setting", "Bonfire area", "Nature library", "Guided walks"],
        distance: "1 km from lakes"
      }
    ],
    highlights: ["Seven interconnected lakes", "Waterfowl paradise", "Oak-pine forest birding", "Brown Fish Owl site"]
  },
  {
    id: "desert-national-park",
    name: "Desert National Park",
    location: "Jaisalmer, Rajasthan",
    state: "Rajasthan",
    image: "/src/assets/destination-desert.jpg",
    description: "One of the largest national parks in India, showcasing the desert ecosystem with unique adaptations and the Great Indian Bustard.",
    bestTime: "November to February (winter season)",
    birdSpecies: ["Great Indian Bustard", "MacQueen's Bustard", "Sandgrouse", "Cream-coloured Courser", "Desert Lark", "Brown Rock Chat"],
    guides: [
      {
        name: "Hanuman Singh",
        experience: "28+ years",
        contact: "+91 9876543238",
        specialization: "Great Indian Bustard and desert species",
        price: "₹2,800/day"
      },
      {
        name: "Gajendra Singh",
        experience: "20+ years",
        contact: "+91 9876543239",
        specialization: "Desert ecology and nocturnal species",
        price: "₹2,200/day"
      }
    ],
    howToReach: {
      nearestAirport: "Jaisalmer Airport (45 km)",
      nearestRailway: "Jaisalmer Railway Station (40 km)",
      roadAccess: "Well-connected from Jaisalmer city center",
      localTransport: "4WD vehicles essential for desert terrain"
    },
    homestays: [
      {
        name: "Desert Eagle Camp",
        type: "Luxury desert camp",
        price: "₹4,500/night",
        contact: "+91 9876543240",
        amenities: ["Desert safari", "Cultural programs", "Star gazing", "Traditional cuisine"],
        distance: "10 km from park entrance"
      },
      {
        name: "Bustard Point Lodge",
        type: "Eco-lodge",
        price: "₹3,200/night",
        contact: "+91 9876543241",
        amenities: ["Solar power", "Water conservation", "Local guides", "Desert walks"],
        distance: "5 km from park"
      }
    ],
    highlights: ["Great Indian Bustard habitat", "Largest desert park", "Unique desert ecosystem", "Fossil park nearby"]
  },
  {
    id: "nalsarovar",
    name: "Nalsarovar Bird Sanctuary",
    location: "Surendranagar, Gujarat",
    state: "Gujarat",
    image: "/src/assets/destination-water.jpg",
    description: "The largest wetland bird sanctuary in Gujarat, a paradise for waterfowl and a major stopover for migratory birds.",
    bestTime: "November to February (peak migratory season)",
    birdSpecies: ["Flamingo", "Pelican", "Brahminy Duck", "Purple Moorhen", "Painted Stork", "Rosy Pelican"],
    guides: [
      {
        name: "Devang Dholakia",
        experience: "22+ years",
        contact: "+91 9876543242",
        specialization: "Waterfowl identification and wetland ecology",
        price: "₹2,000/day"
      },
      {
        name: "Kiran Patel",
        experience: "15+ years",
        contact: "+91 9876543243",
        specialization: "Migratory patterns and boat birding",
        price: "₹1,800/day"
      }
    ],
    howToReach: {
      nearestAirport: "Ahmedabad Airport (110 km)",
      nearestRailway: "Viramgam Junction (35 km)",
      roadAccess: "Good road connectivity from Ahmedabad and Surendranagar",
      localTransport: "Boats available for lake exploration"
    },
    homestays: [
      {
        name: "Wetland View Resort",
        type: "Lake-facing resort",
        price: "₹3,000/night",
        contact: "+91 9876543244",
        amenities: ["Lake views", "Boat trips", "Birding equipment", "Gujarat cuisine"],
        distance: "500m from sanctuary"
      },
      {
        name: "Flamingo Point Homestay",
        type: "Family guesthouse",
        price: "₹2,200/night",
        contact: "+91 9876543245",
        amenities: ["Home-cooked food", "Local knowledge", "Bicycle rental", "Early morning trips"],
        distance: "2 km from lake"
      }
    ],
    highlights: ["Largest wetland in Gujarat", "Flamingo congregation", "100,000+ migratory birds", "Boat-based birding"]
  },
  {
    id: "bhigwan",
    name: "Bhigwan Bird Sanctuary",
    location: "Bhigwan, Pune, Maharashtra",
    state: "Maharashtra",
    image: "/src/assets/destination-water.jpg",
    description: "Known as the 'Bharatpur of Maharashtra', this backwater of Ujni Dam attracts thousands of migratory birds, especially flamingos.",
    bestTime: "November to March (migratory season)",
    birdSpecies: ["Lesser Flamingo", "Greater Flamingo", "Brahminy Duck", "Northern Shoveler", "Common Pochard", "Painted Stork"],
    guides: [
      {
        name: "Prasad Ganpule",
        experience: "20+ years",
        contact: "+91 9876543246",
        specialization: "Flamingo behavior and waterfowl photography",
        price: "₹2,200/day"
      },
      {
        name: "Sandesh Kadur",
        experience: "16+ years",
        contact: "+91 9876543247",
        specialization: "Wildlife photography and dam ecosystem",
        price: "₹2,500/day"
      }
    ],
    howToReach: {
      nearestAirport: "Pune Airport (100 km)",
      nearestRailway: "Daund Junction (35 km)",
      roadAccess: "Good road from Pune via Indapur-Baramati route",
      localTransport: "Local jeeps and boats for wetland access"
    },
    homestays: [
      {
        name: "Flamingo Fields Homestay",
        type: "Rural farmstay",
        price: "₹2,500/night",
        contact: "+91 9876543248",
        amenities: ["Farm experience", "Local Maharashtrian food", "Bullock cart rides", "Village tours"],
        distance: "3 km from birding spots"
      },
      {
        name: "Ujni Backwaters Lodge",
        type: "Waterfront accommodation",
        price: "₹3,200/night",
        contact: "+91 9876543249",
        amenities: ["Water views", "Fishing activities", "Boat arrangements", "Photography workshops"],
        distance: "1 km from main birding area"
      }
    ],
    highlights: ["Bharatpur of Maharashtra", "50,000+ flamingos", "Dam backwater ecosystem", "Easy accessibility from Pune"]
  },
  {
    id: "manas",
    name: "Manas National Park",
    location: "Baksa, Assam",
    state: "Assam",
    image: "/src/assets/destination-wildlife.jpg",
    description: "A UNESCO World Heritage Site and biosphere reserve, home to diverse habitats from grasslands to forests with over 450 bird species.",
    bestTime: "November to April (winter and early summer)",
    birdSpecies: ["Bengal Florican", "Great Hornbill", "Wreathed Hornbill", "Greater Adjutant", "Spot-billed Pelican", "Black-necked Stork"],
    guides: [
      {
        name: "Akash Gogoi",
        experience: "24+ years",
        contact: "+91 9876543250",
        specialization: "Grassland species and Bengal Florican",
        price: "₹2,500/day"
      },
      {
        name: "Babul Brahma",
        experience: "18+ years",
        contact: "+91 9876543251",
        specialization: "Hornbills and forest canopy birding",
        price: "₹2,200/day"
      }
    ],
    howToReach: {
      nearestAirport: "Lokpriya Gopinath Bordoloi International Airport, Guwahati (176 km)",
      nearestRailway: "Barpeta Road (40 km)",
      roadAccess: "Well-connected from Guwahati via NH31",
      localTransport: "Park jeeps and elephant safaris available"
    },
    homestays: [
      {
        name: "Manas Tiger Lodge",
        type: "Jungle lodge",
        price: "₹4,200/night",
        contact: "+91 9876543252",
        amenities: ["Jungle views", "Wildlife safaris", "Assamese cuisine", "Elephant rides"],
        distance: "2 km from park entrance"
      },
      {
        name: "Bodo Heritage Home",
        type: "Tribal cultural stay",
        price: "₹2,800/night",
        contact: "+91 9876543253",
        amenities: ["Cultural immersion", "Traditional crafts", "Folk performances", "Organic farming"],
        distance: "5 km from park"
      }
    ],
    highlights: ["UNESCO World Heritage Site", "Bengal Florican habitat", "450+ bird species", "Diverse ecosystems"]
  },
  {
    id: "kaziranga",
    name: "Kaziranga National Park",
    location: "Golaghat & Nagaon, Assam",
    state: "Assam",
    image: "/src/assets/destination-wildlife.jpg",
    description: "World-famous for one-horned rhinoceros, this UNESCO site also hosts over 480 bird species in its grasslands and wetlands.",
    bestTime: "November to April (dry season)",
    birdSpecies: ["Greater Adjutant", "Lesser Adjutant", "Black-necked Stork", "Swamp Francolin", "Jerdon's Babbler", "Bristled Grassbird"],
    guides: [
      {
        name: "Diganta Gogoi",
        experience: "26+ years",
        contact: "+91 9876543254",
        specialization: "Grassland raptors and adjutant storks",
        price: "₹2,800/day"
      },
      {
        name: "Robin Chutia",
        experience: "19+ years",
        contact: "+91 9876543255",
        specialization: "Wetland species and elephant-back birding",
        price: "₹2,400/day"
      }
    ],
    howToReach: {
      nearestAirport: "Jorhat Airport (97 km)",
      nearestRailway: "Furkating Junction (75 km)",
      roadAccess: "NH37 connects to all major ranges of the park",
      localTransport: "Park jeeps and elephant safaris for different ranges"
    },
    homestays: [
      {
        name: "Rhino Heritage Resort",
        type: "Wildlife resort",
        price: "₹5,200/night",
        contact: "+91 9876543256",
        amenities: ["Park views", "Multi-cuisine restaurant", "Spa services", "Wildlife library"],
        distance: "1 km from Kohora range"
      },
      {
        name: "Grassland View Homestay",
        type: "Eco-friendly stay",
        price: "₹3,500/night",
        contact: "+91 9876543257",
        amenities: ["Grassland views", "Assamese meals", "Tea garden visits", "Cultural shows"],
        distance: "3 km from park entrance"
      }
    ],
    highlights: ["UNESCO World Heritage Site", "480+ bird species", "Grassland ecosystem", "Rhino and bird combo"]
  }
];