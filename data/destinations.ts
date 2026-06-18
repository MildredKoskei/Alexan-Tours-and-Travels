export interface Destination {
  name: string;
  img: string;
  activities: string;
  explanation: string;
}

export interface PackageDay {
  day: string;
  title: string;
  description: string;
}

export interface Attraction {
  name: string;
  description: string;
}

export interface TourPackage {
  title: string;
  slug: string;
  subtitle: string;
  price: string;
  overview: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: PackageDay[];
  highlights: string[];
  attractions?: Attraction[];
  country: string;
}

export const destinations: Destination[] = [
  { 
    name: "Kenya", 
    img: "/images/kenya.png",
    activities: "Safari Drives, Balloon Safaris",
    explanation: "Witness the Great Migration and explore the vast savannahs."
  },
  { 
    name: "Tanzania", 
    img: "/images/tanzania.png",
    activities: "Wildlife Viewing, Mount Kilimanjaro",
    explanation: "Experience the iconic Serengeti plains and majestic peaks."
  },
  { 
    name: "Dubai", 
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    activities: "Desert Safaris, Luxury Shopping",
    explanation: "Marvel at futuristic architecture and world-class luxury."
  },
  { 
    name: "Maldives", 
    img: "/images/maldives.png",
    activities: "Scuba Diving, Resort Relaxation",
    explanation: "Unwind in overwater villas surrounded by crystal-clear turquoise waters."
  },
  { 
    name: "Zanzibar", 
    img: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80",
    activities: "Snorkeling, Spice Tours",
    explanation: "Relax on pristine white-sand beaches and historic Stone Town."
  }
];
