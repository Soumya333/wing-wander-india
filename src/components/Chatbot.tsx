import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
import { useAuth } from '@/components/auth/AuthProvider';

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

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Destination queries
    if (message.includes('destination') || message.includes('place') || message.includes('where')) {
      return "🌟 We offer amazing birding destinations across India! Some popular options include:\n\n• **Kaziranga National Park** - Great for spotting the Bengal Florican\n• **Bharatpur Bird Sanctuary** - Perfect for waterbirds\n• **Munnar, Kerala** - Excellent for hill station species\n• **Sundarbans** - Unique mangrove bird species\n\nWould you like detailed information about any specific destination? I can help you choose based on the season and birds you're interested in!";
    }
    
    // Booking queries
    if (message.includes('book') || message.includes('reservation') || message.includes('trip') || message.includes('plan')) {
      return "📅 I'd be happy to help you plan your birding trip! Here's what I can assist with:\n\n• **Trip Planning**: Best routes and timing\n• **Accommodation**: Bird-friendly lodges and camps\n• **Guide Services**: Expert local birding guides\n• **Equipment**: Binoculars and photography gear\n\nTo start your booking, please use our 'Plan Your Trip' section on the main page, or contact our team directly. Would you like me to guide you through the booking process?";
    }
    
    // Season/timing queries
    if (message.includes('season') || message.includes('time') || message.includes('when') || message.includes('best')) {
      return "🗓️ Great question! Bird watching seasons vary by region:\n\n• **Winter (Oct-Mar)**: Best for migratory species, especially in northern regions\n• **Monsoon (Jun-Sep)**: Excellent for breeding birds and lush landscapes\n• **Summer (Apr-Jun)**: Good for hill stations and early morning birding\n\nEach destination has its peak seasons. Which region or specific birds are you interested in? I can provide more targeted timing advice!";
    }
    
    // Bird species queries
    if (message.includes('bird') || message.includes('species') || message.includes('see') || message.includes('spot')) {
      return "🦅 India is home to over 1,300 bird species! Some highlights include:\n\n• **Tigers & Birds**: Combine wildlife viewing in national parks\n• **Waterbirds**: Herons, egrets, and kingfishers near wetlands\n• **Hill Station Species**: Thrushes, flycatchers, and barbets\n• **Raptors**: Eagles, hawks, and owls\n\nAre you looking for any specific type of bird or habitat? I can recommend the best destinations for your interests!";
    }
    
    // Equipment queries
    if (message.includes('equipment') || message.includes('binocular') || message.includes('camera') || message.includes('gear')) {
      return "📷 Essential birding equipment recommendations:\n\n• **Binoculars**: 8x42 or 10x42 for optimal viewing\n• **Camera**: DSLR with telephoto lens (300mm+) for photography\n• **Field Guide**: Regional bird identification books\n• **Clothing**: Earth-toned, comfortable clothing\n• **Accessories**: Notebook, pen, and field bag\n\nWe can arrange equipment rental for your trip. Would you like specific brand recommendations or rental information?";
    }
    
    // Pricing queries
    if (message.includes('price') || message.includes('cost') || message.includes('fee') || message.includes('charge')) {
      return "💰 Our pricing varies based on:\n\n• **Duration**: Day trips vs multi-day expeditions\n• **Group Size**: Private vs group tours\n• **Accommodation**: Budget to luxury options\n• **Season**: Peak vs off-season rates\n• **Services**: Guide, transport, meals included\n\nFor detailed pricing, please contact our team or fill out the trip planning form. We offer customized packages to fit different budgets!";
    }
    
    // Contact queries
    if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('reach')) {
      return "📞 You can reach us through:\n\n• **Phone**: +91-9876543210\n• **Email**: info@bigcatlover.com\n• **WhatsApp**: Click the WhatsApp option in our Contact section\n• **Website**: Use our contact form\n\nOur team is available 9 AM - 7 PM IST. For urgent inquiries, WhatsApp is the fastest way to reach us!";
    }
    
    // Default response
    return "Thank you for your question! I'm here to help with birding destinations, trip planning, bookings, and general birding information. Could you please be more specific about what you'd like to know? \n\nFor complex inquiries, our expert team is available through the Contact Us section. 😊";
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