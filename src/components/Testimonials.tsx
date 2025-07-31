import bbcLogo from "@/assets/partner-bbc.jpg";
import natgeoLogo from "@/assets/partner-natgeo.jpg";
import discoveryLogo from "@/assets/partner-discovery.jpg";
import ntcaLogo from "@/assets/partner-ntca.jpg";
import sudhirPhoto from "@/assets/photographer-sudhir.jpg";
import nallaPhoto from "@/assets/photographer-nalla.jpg";
import mohanPhoto from "@/assets/photographer-mohan.jpg";
import kalyanPhoto from "@/assets/photographer-kalyan.jpg";
import sandeshPhoto from "@/assets/photographer-sandesh.jpg";

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

  const photographerTestimonials = [
    {
      name: "Sudhir Shivaram",
      photo: sudhirPhoto,
      introduction: "Award-winning wildlife photographer and educator known for tiger photography workshops",
      testimonial: "Exceptional field expertise and local knowledge made our tiger photography expedition truly memorable. The guides' understanding of animal behavior helped us capture incredible shots."
    },
    {
      name: "Nalla Muthu",
      photo: nallaPhoto,
      introduction: "Renowned wildlife filmmaker, National Award winner for 'Machli' documentary",
      testimonial: "Professional service and deep conservation ethics. Their commitment to responsible wildlife tourism sets them apart in the industry."
    },
    {
      name: "Mohan Thomas",
      photo: mohanPhoto,
      introduction: "Wildlife photographer and conservationist with over 200 tiger photographs",
      testimonial: "Outstanding local connections and habitat knowledge. Every trip with them has been productive and ethically conducted."
    },
    {
      name: "Kalyan Varma",
      photo: kalyanPhoto,
      introduction: "National Geographic photographer and filmmaker, co-founder of India Nature Watch",
      testimonial: "Their expertise in wildlife behavior and conservation approach makes them ideal partners for serious wildlife photography."
    },
    {
      name: "Sandesh Kadur",
      photo: sandeshPhoto,
      introduction: "Conservation photographer and National Geographic Explorer",
      testimonial: "Unmatched field experience and dedication to wildlife conservation. Their eco-friendly approach aligns perfectly with conservation goals."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Photographer Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Photographer Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from renowned wildlife photographers who have traveled with us and experienced our commitment to ethical wildlife tourism.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {photographerTestimonials.map((photographer, index) => (
            <div key={index} className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center mb-4">
                <img 
                  src={photographer.photo} 
                  alt={photographer.name}
                  className="w-20 h-20 object-cover rounded-full mb-3"
                />
                <h3 className="text-lg font-semibold">{photographer.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{photographer.introduction}</p>
              </div>
              <blockquote className="text-muted-foreground italic leading-relaxed">
                "{photographer.testimonial}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Conservation Partnerships */}
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