import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Camera, MapPin, Binoculars } from "lucide-react";
import heroPeacock from "../assets/hero-peacock.jpg";
import heroBustard from "../assets/hero-bustard.jpg";
import heroFlorican from "../assets/hero-florican.jpg";
import heroOwlet from "../assets/hero-owlet.jpg";
import heroHeron from "../assets/hero-heron.jpg";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    { src: heroPeacock, alt: "Indian Peacock" },
    { src: heroBustard, alt: "Great Indian Bustard" },
    { src: heroFlorican, alt: "Bengal Florican" },
    { src: heroOwlet, alt: "Forest Owlet" },
    { src: heroHeron, alt: "White-bellied Heron" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with fade transition */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image.src})` }}
        />
      ))}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-earth-brown/80 via-earth-brown/60 to-transparent"></div>
      
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