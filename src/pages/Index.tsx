import Hero from "@/components/Hero";
import DestinationGrid from "@/components/DestinationGrid";
import PlanTripForm from "@/components/PlanTripForm";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import Testimonials from "@/components/Testimonials";
import ConservationContribute from "@/components/ConservationContribute";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SocialLinks />
      <Hero />
      <div className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="destinations" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-gradient-to-r from-forest-green/10 via-warm-cream/10 to-sky-blue/10 p-1 rounded-lg">
              <TabsTrigger value="destinations" className="data-[state=active]:bg-forest-green data-[state=active]:text-white">Destinations</TabsTrigger>
              <TabsTrigger value="plan-trip" className="data-[state=active]:bg-warm-cream data-[state=active]:text-earth-brown">Plan Your Trip</TabsTrigger>
              <TabsTrigger value="conservation" className="data-[state=active]:bg-sky-blue data-[state=active]:text-white">Contribute to Conservation</TabsTrigger>
            </TabsList>
            <TabsContent value="destinations">
              <DestinationGrid />
            </TabsContent>
            <TabsContent value="plan-trip">
              <PlanTripForm />
            </TabsContent>
            <TabsContent value="conservation">
              <ConservationContribute />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
