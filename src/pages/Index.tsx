import Hero from "@/components/Hero";
import DestinationGrid from "@/components/DestinationGrid";
import PlanTripForm from "@/components/PlanTripForm";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import Testimonials from "@/components/Testimonials";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SocialLinks />
      <Hero />
      <div className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="destinations" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="destinations">Destinations</TabsTrigger>
              <TabsTrigger value="plan-trip">Plan Your Trip</TabsTrigger>
            </TabsList>
            <TabsContent value="destinations">
              <DestinationGrid />
            </TabsContent>
            <TabsContent value="plan-trip">
              <PlanTripForm />
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
