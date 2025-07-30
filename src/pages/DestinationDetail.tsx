import { useParams, useNavigate } from "react-router-dom";
import { destinations } from "@/data/destinations";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Calendar, Phone, Car, Plane, Train, Home, Star, Users, Camera } from "lucide-react";

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find(d => d.id === id);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Destination not found</h1>
          <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-brown/90 via-earth-brown/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-6xl mx-auto px-6 pb-8 text-white w-full">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mb-4 text-white hover:bg-white/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Destinations
            </Button>
            <h1 className="text-5xl font-bold mb-2">{destination.name}</h1>
            <div className="flex items-center gap-2 text-xl text-warm-cream">
              <MapPin className="w-5 h-5" />
              <span>{destination.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-forest-green" />
                  About This Destination
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {destination.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {destination.highlights.map((highlight, index) => (
                    <Badge key={index} variant="outline" className="border-forest-green text-forest-green">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Bird Species */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-forest-green" />
                  Bird Species ({destination.birdSpecies.length}+)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {destination.birdSpecies.map((species, index) => (
                    <div key={index} className="bg-accent rounded-lg p-3 text-sm font-medium">
                      {species}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* How to Reach */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-forest-green" />
                  How to Reach
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Plane className="w-5 h-5 text-sky-blue mt-1" />
                  <div>
                    <div className="font-medium">By Air</div>
                    <div className="text-sm text-muted-foreground">{destination.howToReach.nearestAirport}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Train className="w-5 h-5 text-sky-blue mt-1" />
                  <div>
                    <div className="font-medium">By Train</div>
                    <div className="text-sm text-muted-foreground">{destination.howToReach.nearestRailway}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-sky-blue mt-1" />
                  <div>
                    <div className="font-medium">By Road</div>
                    <div className="text-sm text-muted-foreground">{destination.howToReach.roadAccess}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-blue mt-1" />
                  <div>
                    <div className="font-medium">Local Transport</div>
                    <div className="text-sm text-muted-foreground">{destination.howToReach.localTransport}</div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <a 
                    href={destination.howToReach.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-forest-green text-white rounded-lg hover:bg-forest-green/80 transition-colors text-sm font-medium"
                  >
                    <MapPin className="w-4 h-4" />
                    Get Road Directions
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Best Time */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-forest-green" />
                  Best Time to Visit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-accent rounded-lg p-4">
                  <div className="font-medium text-forest-green">{destination.bestTime}</div>
                </div>
              </CardContent>
            </Card>

            {/* Guides */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-forest-green" />
                  Expert Guides
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {destination.guides.map((guide, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="font-medium">{guide.name}</div>
                    <div className="text-sm text-muted-foreground mb-2">{guide.experience} • {guide.specialization}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-forest-green">{guide.price}</span>
                      <Button size="sm" variant="outline">
                        <Phone className="w-4 h-4 mr-1" />
                        Contact
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Homestays */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-forest-green" />
                  Recommended Stays
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {destination.homestays.map((homestay, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-medium">{homestay.name}</div>
                        <div className="text-sm text-muted-foreground">{homestay.type}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-forest-green">{homestay.price}</div>
                        <div className="text-xs text-muted-foreground">{homestay.distance}</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {homestay.amenities.slice(0, 3).map((amenity, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                      {homestay.amenities.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{homestay.amenities.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      <Phone className="w-4 h-4 mr-1" />
                      Contact Homestay
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;