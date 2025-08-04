import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';

const ContactUs = () => {
  const handleWhatsAppChat = () => {
    const phoneNumber = "919876543200"; // Company WhatsApp number
    const message = "Hello! I'm interested in birding and wildlife tours. Can you provide more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    const email = "info@thebigcatlover.com";
    const subject = "Birding Tour Inquiry";
    const body = "Hello,\n\nI'm interested in learning more about your birding and wildlife tours. Please provide more details.\n\nThank you!";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  };

  const handlePhoneClick = (number: string) => {
    window.open(`tel:${number}`);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to embark on an unforgettable birding adventure? Get in touch with our expert team to plan your perfect wildlife experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Phone Contact */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Phone className="w-5 h-5" />
                Call Us
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Main Office</p>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handlePhoneClick("+919876543200")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +91 98765 43200
                </Button>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Tour Bookings</p>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handlePhoneClick("+919876543201")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +91 98765 43201
                </Button>
              </div>
              <div className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Available 9 AM - 8 PM (IST)
              </div>
            </CardContent>
          </Card>

          {/* Email Contact */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Mail className="w-5 h-5" />
                Email Us
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">General Inquiries</p>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={handleEmailClick}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  info@thebigcatlover.com
                </Button>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Tour Bookings</p>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.open('mailto:bookings@thebigcatlover.com')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  bookings@thebigcatlover.com
                </Button>
              </div>
              <div className="text-xs text-muted-foreground">
                We respond within 24 hours
              </div>
            </CardContent>
          </Card>

          {/* WhatsApp Contact */}
          <Card className="hover:shadow-lg transition-shadow bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Chat
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-green-600">
                Get instant responses to your queries! Chat with our birding experts on WhatsApp.
              </p>
              <Button 
                onClick={handleWhatsAppChat}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Start WhatsApp Chat
              </Button>
              <div className="text-xs text-green-600 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Quick responses, 24/7 available
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Office Address */}
        <Card className="mt-8 bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary text-center">
              <MapPin className="w-5 h-5" />
              Visit Our Office
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="max-w-2xl mx-auto space-y-2">
              <p className="font-medium">The Big Cat Lover - Wildlife & Birding Tours</p>
              <p className="text-muted-foreground">
                123 Conservation Street, Wildlife District<br />
                New Delhi - 110001, India
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                25+ years of expertise in birding and wildlife conservation tours across India
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactUs;