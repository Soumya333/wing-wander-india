import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
import { useAuth } from '@/components/auth/AuthProvider';
import { destinations } from '@/data/destinations';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length === 0 && user) {
      // Welcome message
      const welcomeMessage: Message = {
        id: '1',
        text: `Hello ${user.user_metadata?.full_name || 'there'}! I'm your birding assistant. I can help you with:\n\n• Destination recommendations\n• Trip planning and booking\n• Bird species information\n• Best viewing seasons\n• Equipment suggestions\n\nHow can I assist you today?`,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [user, messages.length]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const findDestinationMatch = (message: string) => {
    const normalizedMessage = message.toLowerCase();
    return destinations.find(dest => 
      normalizedMessage.includes(dest.name.toLowerCase()) ||
      normalizedMessage.includes(dest.location.toLowerCase()) ||
      dest.name.toLowerCase().split(' ').some(word => normalizedMessage.includes(word)) ||
      dest.location.toLowerCase().split(' ').some(word => normalizedMessage.includes(word))
    );
  };

  const generateBookingGuidance = (destination: any) => {
    const guide = destination.guides?.[0];
    const homestay = destination.homestays?.[0];
    
    return `🎯 **${destination.name}** - Perfect choice!\n\n📋 **Booking Process:**\n\n**Step 1: Planning**\n• Best time: ${destination.bestTime}\n• Bird species: ${destination.birdSpeciesCount}+ species\n• Duration: 2-4 days recommended\n\n**Step 2: Guide & Accommodation**\n• Expert guide: ${guide?.name || 'Available'} (${guide?.experience || 'Experienced local guide'})\n• Stay options: ${homestay?.name || 'Local homestays available'}\n• Guide fee: ₹${guide?.price || '2,000-3,000'}/day\n\n**Step 3: Book Now**\n• Use our "Plan Your Trip" form on the main page\n• Select "${destination.name}" from the destination dropdown\n• Our team will contact you within 24 hours\n• Customize your itinerary based on your interests\n\n**Highlights:** ${destination.highlights?.slice(0, 2).join(', ') || 'Amazing birding experience'}\n\nWould you like me to help you with any specific aspect of the booking?`;
  };

  const generateCustomPackageOffer = (message: string) => {
    // Extract potential destination from message
    const words = message.split(' ');
    const potentialDestination = words.find(word => 
      word.length > 3 && 
      !['want', 'visit', 'trip', 'book', 'plan', 'like', 'would', 'travel'].includes(word.toLowerCase())
    );
    
    return `🌍 **Custom Package Available!**\n\n${potentialDestination ? `I see you're interested in **${potentialDestination}**! ` : ''}While this destination isn't in our standard birding tours, we specialize in creating customized birding expeditions worldwide!\n\n🎨 **Our Custom Package Includes:**\n\n• **Expert Research**: Local birding hotspots identification\n• **Local Guides**: Experienced birding guides in your destination\n• **Accommodation**: Bird-friendly lodges and eco-stays\n• **Transportation**: Comfortable vehicles for birding sites\n• **Equipment**: Binoculars and field guides provided\n• **Permits**: All necessary permissions arranged\n\n✨ **Why Choose Our Custom Packages:**\n• 15+ years of international birding experience\n• Partnerships with local ornithologists worldwide\n• Flexible itineraries based on your preferences\n• Photography support for bird enthusiasts\n• Small group sizes (2-8 people) for better birding\n\n📞 **Next Steps:**\n1. Fill our "Plan Your Trip" form with your destination\n2. Select "Filming Expedition" or "Wildlife Photography" category\n3. Mention your specific location in the message\n4. Our expedition team will create a detailed proposal\n\n🕐 **Timeline**: Custom packages typically take 7-14 days to plan\n\nReady to explore birds in your dream destination?`;
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Check for specific destination mentions first
    const matchedDestination = findDestinationMatch(message);
    
    if (matchedDestination && (message.includes('book') || message.includes('trip') || message.includes('visit') || message.includes('plan') || message.includes('want') || message.includes('go'))) {
      return generateBookingGuidance(matchedDestination);
    }
    
    // Check for destination queries without specific matches
    if ((message.includes('visit') || message.includes('go to') || message.includes('trip to') || message.includes('book') || message.includes('plan')) && 
        !matchedDestination && 
        (message.includes('place') || message.includes('destination') || message.match(/\b[A-Za-z]{3,}\b/))) {
      return generateCustomPackageOffer(message);
    }
    
    // General destination queries
    if (message.includes('destination') || message.includes('place') || message.includes('where')) {
      return "🌟 We offer amazing birding destinations across India! Some popular options include:\n\n• **Kaziranga National Park** - Great for spotting the Bengal Florican\n• **Bharatpur Bird Sanctuary** - Perfect for waterbirds\n• **Munnar, Kerala** - Excellent for hill station species\n• **Sundarbans** - Unique mangrove bird species\n• **Corbett Tiger Reserve** - Tigers and birds combined\n• **Ladakh Highlands** - High-altitude species\n\nJust mention any destination you're interested in, and I'll guide you through the booking process! For places not in our list, we create customized packages.";
    }
    
    // Enhanced booking queries
    if (message.includes('book') || message.includes('reservation') || message.includes('trip') || message.includes('plan')) {
      return "📅 I'd love to help you plan your perfect birding trip! Here's how I can assist:\n\n🎯 **For Our Featured Destinations:**\n• Mention any destination name for instant booking guidance\n• Get details on guides, accommodation, and pricing\n• Step-by-step booking process\n\n🌍 **For Other Destinations:**\n• Custom packages for any location worldwide\n• Specialized birding expeditions\n• Tailored itineraries based on your interests\n\n📋 **Quick Start:**\n1. Tell me which destination interests you\n2. I'll provide specific booking guidance\n3. Use our 'Plan Your Trip' form for official booking\n\nWhich destination would you like to explore?";
    }
    
    // Season/timing queries with destination context
    if (message.includes('season') || message.includes('time') || message.includes('when') || message.includes('best')) {
      if (matchedDestination) {
        return `🗓️ **${matchedDestination.name}** Timing:\n\n• **Best Season**: ${matchedDestination.bestTime}\n• **Peak Birding**: Early morning (6-10 AM) and evening (4-6 PM)\n• **Bird Species**: ${matchedDestination.birdSpeciesCount}+ species expected\n• **Weather**: ${matchedDestination.bestTime.includes('Winter') ? 'Cool and pleasant' : matchedDestination.bestTime.includes('Monsoon') ? 'Rainy but lush' : 'Moderate temperatures'}\n\n📅 **Planning Tips:**\n• Book 2-3 weeks in advance for peak season\n• Stay minimum 2-3 days for best birding experience\n• Early morning departure recommended\n\nReady to plan your trip for ${matchedDestination.name}?`;
      }
      return "🗓️ Great question! Bird watching seasons vary by region:\n\n• **Winter (Oct-Mar)**: Best for migratory species, especially in northern regions\n• **Monsoon (Jun-Sep)**: Excellent for breeding birds and lush landscapes\n• **Summer (Apr-Jun)**: Good for hill stations and early morning birding\n\nMention a specific destination, and I'll give you detailed timing advice! Each location has its peak seasons.";
    }
    
    // Bird species queries
    if (message.includes('bird') || message.includes('species') || message.includes('see') || message.includes('spot')) {
      if (matchedDestination) {
        return `🦅 **${matchedDestination.name}** Bird Species:\n\n• **Total Species**: ${matchedDestination.birdSpeciesCount}+ birds recorded\n• **Highlights**: ${matchedDestination.highlights?.slice(0, 3).join(', ') || 'Diverse species mix'}\n• **Best Spots**: ${matchedDestination.description.slice(0, 100)}...\n\nWant to book a birding trip here? I can guide you through the process!`;
      }
      return "🦅 India is home to over 1,300 bird species! Some highlights include:\n\n• **Tigers & Birds**: Combine wildlife viewing in national parks\n• **Waterbirds**: Herons, egrets, and kingfishers near wetlands\n• **Hill Station Species**: Thrushes, flycatchers, and barbets\n• **Raptors**: Eagles, hawks, and owls\n• **Endemic Species**: India has 78 endemic birds\n\nMention a destination, and I'll tell you exactly what birds you can expect to see there!";
    }
    
    // Equipment queries
    if (message.includes('equipment') || message.includes('binocular') || message.includes('camera') || message.includes('gear')) {
      return "📷 Essential birding equipment recommendations:\n\n• **Binoculars**: 8x42 or 10x42 for optimal viewing\n• **Camera**: DSLR with telephoto lens (300mm+) for photography\n• **Field Guide**: Regional bird identification books\n• **Clothing**: Earth-toned, comfortable clothing\n• **Accessories**: Notebook, pen, and field bag\n\nWe provide equipment rental for all our trips! Mention your destination, and I'll include equipment details in your booking guidance.";
    }
    
    // Pricing queries
    if (message.includes('price') || message.includes('cost') || message.includes('fee') || message.includes('charge')) {
      return "💰 Our pricing varies based on:\n\n• **Duration**: Day trips vs multi-day expeditions\n• **Group Size**: Private vs group tours\n• **Accommodation**: Budget to luxury options\n• **Season**: Peak vs off-season rates\n• **Services**: Guide, transport, meals included\n\n📊 **Sample Pricing**:\n• Day trip: ₹3,000-5,000 per person\n• 3-day package: ₹15,000-25,000 per person\n• Custom expeditions: Quote based on requirements\n\nMention a specific destination for exact pricing and booking guidance!";
    }
    
    // Contact queries
    if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('reach')) {
      return "📞 You can reach us through:\n\n• **Phone**: +91-9876543210\n• **Email**: info@bigcatlover.com\n• **WhatsApp**: Click the WhatsApp option in our Contact section\n• **Website**: Use our contact form\n\nOur team is available 9 AM - 7 PM IST. For urgent inquiries, WhatsApp is the fastest way to reach us!";
    }
    
    // Help queries
    if (message.includes('help') || message.includes('assist') || message.includes('guide')) {
      return "🤖 **I'm your AI Birding Assistant!** Here's how I can help:\n\n🎯 **Instant Services:**\n• Name any destination → Get booking guidance\n• Ask about timing → Get season recommendations\n• Mention birds → Get species information\n• Ask about gear → Get equipment advice\n\n🌟 **Try These:**\n• \"I want to visit Kaziranga\" → Instant booking guide\n• \"Trip to Goa\" → Custom package offer\n• \"Best time for Munnar\" → Detailed timing info\n• \"Birds in Bharatpur\" → Species information\n\nJust mention any destination or ask any birding question!";
    }
    
    // Default response
    return "Thank you for your question! I'm your comprehensive birding assistant. I can help with:\n\n🎯 **Instant Booking Guidance**: Just mention any destination!\n🌍 **Custom Packages**: For destinations not in our list\n📅 **Trip Planning**: Timing, guides, and accommodation\n🦅 **Bird Information**: Species and spotting tips\n\nTry asking: \"I want to visit [destination name]\" or \"Trip to [any place]\" and I'll provide detailed guidance!\n\nWhat destination interests you? 😊";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!user) return null;

  return (
    <>
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl hover:shadow-3xl z-40 bg-gradient-to-r from-forest-green to-forest-green/90 hover:from-forest-green/90 hover:to-forest-green border-2 border-white/20 backdrop-blur-sm animate-pulse hover:animate-none transition-all duration-300"
          size="icon"
        >
          <div className="flex flex-col items-center">
            <Bot className="h-7 w-7 text-white mb-0.5" />
            <span className="text-[10px] text-white font-medium">AI Assistant</span>
          </div>
        </Button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col border-2 border-forest-green/20 backdrop-blur-sm bg-white/95 dark:bg-gray-900/95">
          <CardHeader className="pb-3 bg-gradient-to-r from-forest-green to-forest-green/90 text-white rounded-t-lg">
            <CardTitle className="flex items-center justify-between text-lg">
              <div className="flex items-center">
                <div className="relative">
                  <Bot className="mr-3 h-6 w-6 text-white" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <div className="font-semibold">AI Birding Assistant</div>
                  <div className="text-xs text-white/80 font-normal">Always here to help!</div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 text-white hover:bg-white/20 hover:text-white"
              >
                <X className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col p-4 pt-4">
            <ScrollArea className="flex-1 pr-2 max-h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-forest-green/30 scrollbar-track-gray-100" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {message.sender === 'bot' && (
                          <Bot className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                        )}
                        {message.sender === 'user' && (
                          <User className="h-4 w-4 mt-0.5 text-primary-foreground flex-shrink-0" />
                        )}
                        <div className="text-sm whitespace-pre-line">
                          {message.text}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                      <div className="flex items-center gap-2">
                        <Bot className="h-4 w-4 text-primary" />
                        <div className="text-sm text-muted-foreground">
                          Assistant is typing...
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            
            <div className="flex gap-2 mt-4">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about destinations, bookings, or birding tips..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;