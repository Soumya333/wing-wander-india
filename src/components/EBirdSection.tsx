import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Camera, MapPin, Users } from "lucide-react";

const EBirdSection = () => {
  const eBirdFeatures = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Document Your Sightings",
      description: "Record every bird species you observe during your wildlife photography expeditions"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location-Based Tracking",
      description: "Pin exact locations where you spotted rare species in our recommended destinations"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Contribute to Science",
      description: "Your data helps researchers track bird populations and migration patterns across India"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-sky-blue/5 via-background to-forest-green/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-forest-green to-sky-blue bg-clip-text text-transparent">
            Update Your Sightings on eBird
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Share your incredible bird discoveries with the global birding community. Your sightings from our destinations contribute to vital conservation research and help fellow birders plan their expeditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {eBirdFeatures.map((feature, index) => (
            <Card key={index} className="border-2 border-transparent hover:border-forest-green/20 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-forest-green/10 rounded-full w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="bg-card border-2 border-forest-green/20 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Ready to Upload Your Sightings?</h3>
            <p className="text-muted-foreground mb-6">
              Join millions of birders worldwide who use eBird to track their observations and contribute to bird conservation efforts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-forest-green hover:bg-forest-green/90"
                onClick={() => window.open('https://ebird.org/submit', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Submit to eBird
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-forest-green text-forest-green hover:bg-forest-green/10"
                onClick={() => window.open('https://ebird.org/explore', '_blank')}
              >
                Explore eBird Data
              </Button>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Your contributions help scientists understand bird populations, migration patterns, and conservation needs across India's diverse ecosystems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EBirdSection;