import { Heart, Leaf, Camera, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ConservationContribute = () => {
  const contributionOptions = [
    {
      icon: Heart,
      title: "Adopt a Tiger",
      description: "Support tiger conservation by adopting a tiger in one of India's national parks. Your contribution helps fund anti-poaching efforts and habitat protection.",
      amount: "₹5,000/month",
      action: "Adopt Now"
    },
    {
      icon: Leaf,
      title: "Plant Native Trees",
      description: "Help restore wildlife corridors by funding native tree plantation projects that connect fragmented habitats across tiger reserves.",
      amount: "₹500/tree",
      action: "Plant Trees"
    },
    {
      icon: Camera,
      title: "Wildlife Monitoring",
      description: "Support our camera trap network that monitors wildlife populations and helps researchers track endangered species movements.",
      amount: "₹10,000/camera",
      action: "Fund Monitoring"
    },
    {
      icon: Users,
      title: "Community Programs",
      description: "Empower local communities living near wildlife reserves through sustainable livelihood programs that reduce human-wildlife conflict.",
      amount: "₹2,000/family",
      action: "Support Communities"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Make a Difference Today</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Join us in protecting India's incredible wildlife heritage. Every contribution, big or small, 
          helps preserve these magnificent creatures for future generations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contributionOptions.map((option, index) => {
          const Icon = option.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {option.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{option.amount}</span>
                  <Button className="bg-primary hover:bg-primary/90">
                    {option.action}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="bg-muted/50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-semibold mb-4">100% of Your Contribution Goes to Conservation</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          We believe in complete transparency. Every rupee you contribute is directly used for conservation efforts. 
          You'll receive regular updates on how your contribution is making a difference.
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="lg">
            View Impact Reports
          </Button>
          <Button size="lg">
            Custom Contribution
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConservationContribute;