import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Camera, Users } from "lucide-react";
import { Destination } from "@/data/destinations";

interface DestinationCardProps {
  destination: Destination;
  onExplore: (id: string) => void;
}

const DestinationCard = ({ destination, onExplore }: DestinationCardProps) => {
  return (
    <Card className="group hover:shadow-card-nature transition-all duration-500 hover:scale-105 overflow-hidden bg-card border-0">
      <div className="relative overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-brown/80 via-transparent to-transparent"></div>
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-warm-cream/90 text-earth-brown">
            {destination.state}
          </Badge>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
          <div className="flex items-center gap-1 text-warm-cream">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{destination.location}</span>
          </div>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {destination.description}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-forest-green" />
            <span className="text-xs">Best: {destination.bestTime.split(' ')[0]}-{destination.bestTime.split(' ')[2]}</span>
          </div>
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-forest-green" />
            <span className="text-xs">{destination.birdSpecies.length}+ Species</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-4 h-4 text-forest-green" />
          <span className="text-xs text-muted-foreground">
            {destination.guides.length} Expert Guides Available
          </span>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {destination.highlights.slice(0, 2).map((highlight, index) => (
            <Badge key={index} variant="outline" className="text-xs border-forest-green text-forest-green">
              {highlight}
            </Badge>
          ))}
        </div>
        
        <Button 
          variant="nature" 
          className="w-full"
          onClick={() => onExplore(destination.id)}
        >
          Explore Destination
        </Button>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;