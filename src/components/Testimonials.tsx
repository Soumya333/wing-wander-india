import bbcLogo from "@/assets/partner-bbc.jpg";
import natgeoLogo from "@/assets/partner-natgeo.jpg";
import discoveryLogo from "@/assets/partner-discovery.jpg";
import ntcaLogo from "@/assets/partner-ntca.jpg";

const Testimonials = () => {
  const partnerships = [
    {
      name: "BBC Wildlife",
      logo: bbcLogo,
      description: "Collaborated on multiple wildlife documentaries showcasing India's endangered species. Our expertise helped capture rare footage of tigers and leopards in their natural habitat, contributing to global wildlife awareness."
    },
    {
      name: "National Geographic",
      logo: natgeoLogo,
      description: "Provided field support and local expertise for conservation photography projects. Assisted in documenting the recovery of tiger populations in central India and bird migration patterns across the subcontinent."
    },
    {
      name: "Discovery Channel",
      logo: discoveryLogo,
      description: "Facilitated wildlife filming expeditions for nature documentaries. Our guides helped crews safely document predator behavior and contributed to educational content about Indian wildlife conservation efforts."
    },
    {
      name: "NTCA",
      logo: ntcaLogo,
      description: "Working partnership with National Tiger Conservation Authority on habitat monitoring and community-based conservation initiatives. Contributing to tiger census data and supporting anti-poaching efforts across protected reserves."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Conservation Partnerships</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Proud to work alongside leading conservation organizations to protect India's incredible wildlife heritage and share their stories with the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnerships.map((partner, index) => (
            <div key={index} className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="w-16 h-16 object-contain rounded"
                />
                <h3 className="text-xl font-semibold">{partner.name}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;