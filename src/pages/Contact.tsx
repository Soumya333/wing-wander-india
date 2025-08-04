import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ContactUs from '@/components/ContactUs';
import { UserMenu } from '@/components/auth/UserMenu';
import SocialLinks from '@/components/SocialLinks';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* User Menu */}
      <div className="fixed top-6 right-6 z-50">
        <UserMenu />
      </div>
      <SocialLinks />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4 hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold text-primary mb-2">Contact Us</h1>
          <p className="text-muted-foreground text-lg">
            Get in touch with our birding experts to plan your perfect wildlife adventure
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-8">
        <ContactUs />
      </div>
    </div>
  );
};

export default Contact;