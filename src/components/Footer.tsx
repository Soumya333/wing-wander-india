import logo from "@/assets/big-cat-lover-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex items-center space-x-4">
            <img 
              src={logo} 
              alt="The Big Cat Lover Logo" 
              className="w-16 h-16 rounded-full object-cover"
            />
            <h3 className="text-2xl font-bold text-primary">The Big Cat Lover</h3>
          </div>
          
          <div className="max-w-2xl">
            <p className="text-muted-foreground mb-4">
              Discover the incredible wildlife and bird diversity of India with expert guides who are passionate about conservation and nature photography. From the majestic tigers of central India to the exotic birds of the Himalayas, we create unforgettable experiences.
            </p>
            <p className="text-lg font-semibold text-primary">
              Leading Birding & Wildlife trips across India for last 25 years
            </p>
          </div>
          
          <div className="pt-6 border-t border-border/50 text-sm text-muted-foreground">
            <p>&copy; 2024 The Big Cat Lover. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;