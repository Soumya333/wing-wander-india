import Hero from "@/components/Hero";
import DestinationGrid from "@/components/DestinationGrid";
import PlanTripForm from "@/components/PlanTripForm";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import Testimonials from "@/components/Testimonials";
import ConservationContribute from "@/components/ConservationContribute";
import EBirdSection from "@/components/EBirdSection";
import TopHighlightTabs from "@/components/TopHighlightTabs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <TopHighlightTabs />
      <SocialLinks />
      <Hero />
      <div className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="destinations" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-gradient-to-r from-forest-green/10 via-warm-cream/10 via-sky-blue/10 to-earth-brown/10 p-1 rounded-xl border border-forest-green/20">
              <TabsTrigger 
                value="destinations" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-forest-green data-[state=active]:to-forest-green/90 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 rounded-lg font-medium"
              >
                Destinations
              </TabsTrigger>
              <TabsTrigger 
                value="plan-trip" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-warm-cream data-[state=active]:to-warm-cream/90 data-[state=active]:text-earth-brown data-[state=active]:shadow-lg transition-all duration-300 rounded-lg font-medium"
              >
                Plan Your Trip
              </TabsTrigger>
              <TabsTrigger 
                value="conservation" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-sky-blue data-[state=active]:to-sky-blue/90 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 rounded-lg font-medium"
              >
                Contribute to Conservation
              </TabsTrigger>
              <TabsTrigger 
                value="ebird" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-earth-brown data-[state=active]:to-earth-brown/90 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 rounded-lg font-medium"
              >
                Update Sightings on eBird
              </TabsTrigger>
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
            <TabsContent value="ebird">
              <EBirdSection />
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
