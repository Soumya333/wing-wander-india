import { destinations } from "@/data/destinations";
import DestinationCard from "./DestinationCard";
import { useNavigate } from "react-router-dom";

const DestinationGrid = () => {
  const navigate = useNavigate();

  const handleExplore = (id: string) => {
    navigate(`/destination/${id}`);
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured <span className="text-forest-green">Destinations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From the wetlands of Rajasthan to the highlands of Ladakh, discover India's most 
            spectacular birding locations with comprehensive travel information.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard 
              key={destination.id} 
              destination={destination}
              onExplore={handleExplore}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationGrid;