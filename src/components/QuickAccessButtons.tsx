import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { User, Phone, ArrowRight } from 'lucide-react';

const QuickAccessButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-6 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Quick Access</h2>
        <p className="text-muted-foreground">
          Manage your profile or get in touch with our birding experts
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Management Card */}
        <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-primary/20">
          <CardContent className="p-6 text-center">
            <div className="mb-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <User className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Profile Management</h3>
              <p className="text-muted-foreground mb-4">
                Update your personal information, preferences, and birding experience details
              </p>
            </div>
            <Button 
              onClick={() => navigate('/profile')}
              className="w-full group"
            >
              Manage Profile
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </CardContent>
        </Card>

        {/* Contact Us Card */}
        <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-secondary/20">
          <CardContent className="p-6 text-center">
            <div className="mb-4">
              <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Contact Us</h3>
              <p className="text-muted-foreground mb-4">
                Get in touch with our expert team for trip planning and birding guidance
              </p>
            </div>
            <Button 
              onClick={() => navigate('/contact')}
              variant="secondary"
              className="w-full group"
            >
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuickAccessButtons;