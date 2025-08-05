import Hero from "@/components/Hero";
import DestinationGrid from "@/components/DestinationGrid";
import PlanTripForm from "@/components/PlanTripForm";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import Testimonials from "@/components/Testimonials";
import ConservationContribute from "@/components/ConservationContribute";
import EBirdSection from "@/components/EBirdSection";
import TopHighlightTabs from "@/components/TopHighlightTabs";
import QuickAccessButtons from "@/components/QuickAccessButtons";
import { UserMenu } from "@/components/auth/UserMenu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* User Menu */}
      <div className="fixed top-6 right-6 z-50">
        <UserMenu />
      </div>
      <SocialLinks />
      <Hero />
      <div className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <TopHighlightTabs />
          
          {/* Quick Access Buttons */}
          <QuickAccessButtons />

          {/* Main Features Section */}
          <Tabs defaultValue="conservation" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-gradient-to-r from-sky-blue/10 to-earth-brown/10 p-1 rounded-xl border border-sky-blue/20">
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
