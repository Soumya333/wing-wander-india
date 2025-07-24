import { Button } from "@/components/ui/button";
import { Camera, MapPin, Binoculars } from "lucide-react";
import heroImage from "../assets/hero-peacock.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-earth-brown/80 via-earth-brown/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="mb-8 flex justify-center items-center gap-3">
          <Binoculars className="w-12 h-12 text-sunset-orange" />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Bird Photography
            <span className="block text-sunset-orange">Destinations</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-warm-cream">
          Discover India's most spectacular birding locations with expert guides, 
          perfect timing, and comfortable stays for unforgettable wildlife photography adventures.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="nature" size="lg" className="text-lg px-8 py-3">
            <Camera className="mr-2" />
            Explore Destinations
          </Button>
          <Button variant="sunset" size="lg" className="text-lg px-8 py-3">
            <MapPin className="mr-2" />
            Plan Your Trip
          </Button>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-sunset-orange mb-2">50+</div>
            <div className="text-warm-cream">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sunset-orange mb-2">1000+</div>
            <div className="text-warm-cream">Bird Species</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sunset-orange mb-2">200+</div>
            <div className="text-warm-cream">Expert Guides</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;