import { Facebook, Twitter, Instagram } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="bg-primary/5 py-3">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center space-x-6 text-sm">
          <span className="text-muted-foreground">Find us on:</span>
          <a 
            href="#" 
            className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Facebook size={18} />
            <span>Facebook</span>
          </a>
          <a 
            href="#" 
            className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Twitter size={18} />
            <span>X</span>
          </a>
          <a 
            href="#" 
            className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Instagram size={18} />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;