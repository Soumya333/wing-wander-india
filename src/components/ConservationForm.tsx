import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Heart, Leaf, Camera, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/components/auth/AuthProvider";
import { AuthModal } from "@/components/auth/AuthModal";
import { supabase } from "@/integrations/supabase/client";

const contributionSchema = z.object({
  amount: z.number().min(1, "Amount must be at least ₹1").max(1000000, "Amount exceeds maximum limit"),
  quantity: z.number().min(1, "Quantity must be at least 1").max(1000, "Quantity too large").optional(),
  message: z.string().max(500, "Message too long").optional(),
});

type ContributionData = z.infer<typeof contributionSchema>;

const contributionOptions = [
  {
    id: 'adopt_tiger',
    icon: Heart,
    title: "Adopt a Tiger",
    description: "Support tiger conservation by adopting a tiger in one of India's national parks. Your contribution helps fund anti-poaching efforts and habitat protection.",
    baseAmount: 5000,
    unit: "month",
    action: "Adopt Now"
  },
  {
    id: 'plant_trees',
    icon: Leaf,
    title: "Plant Native Trees",
    description: "Help restore wildlife corridors by funding native tree plantation projects that connect fragmented habitats across tiger reserves.",
    baseAmount: 500,
    unit: "tree",
    action: "Plant Trees"
  },
  {
    id: 'wildlife_monitoring',
    icon: Camera,
    title: "Wildlife Monitoring",
    description: "Support our camera trap network that monitors wildlife populations and helps researchers track endangered species movements.",
    baseAmount: 10000,
    unit: "camera",
    action: "Fund Monitoring"
  },
  {
    id: 'community_programs',
    icon: Users,
    title: "Community Programs",
    description: "Empower local communities living near wildlife reserves through sustainable livelihood programs that reduce human-wildlife conflict.",
    baseAmount: 2000,
    unit: "family",
    action: "Support Communities"
  }
];

interface ContributionModalProps {
  option: typeof contributionOptions[0];
}

const ContributionModal = ({ option }: ContributionModalProps) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const form = useForm<ContributionData>({
    resolver: zodResolver(contributionSchema),
    defaultValues: {
      amount: option.baseAmount,
      quantity: 1,
      message: "",
    },
  });

  const onSubmit = async (data: ContributionData) => {
    if (!user) {
      setAuthModalOpen(true);
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('conservation_contributions')
        .insert([
          {
            user_id: user.id,
            contribution_type: option.id,
            amount: data.amount,
            quantity: data.quantity || 1,
            message: data.message,
          },
        ]);

      if (error) throw error;

      toast({
        title: "Contribution Submitted!",
        description: `Thank you for contributing ₹${data.amount} to ${option.title}. You'll receive updates on how your contribution is making a difference.`,
      });
      
      setModalOpen(false);
      form.reset();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to submit contribution. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const Icon = option.icon;

  return (
    <>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogTrigger asChild>
          <Button className="bg-primary hover:bg-primary/90">
            {option.action}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Icon className="w-5 h-5" />
              {option.title}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount (₹)</Label>
              <Input
                id="amount"
                type="number"
                min="1"
                {...form.register('amount', { valueAsNumber: true })}
              />
              {form.formState.errors.amount && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.amount.message}
                </p>
              )}
            </div>

            {option.id === 'plant_trees' && (
              <div className="space-y-2">
                <Label htmlFor="quantity">Number of Trees</Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  {...form.register('quantity', { valueAsNumber: true })}
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea
                id="message"
                placeholder="Leave a message about your contribution..."
                {...form.register('message')}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Processing...' : `Contribute ₹${form.watch('amount')}`}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <AuthModal
        open={authModalOpen}
        onOpenChange={setAuthModalOpen}
        defaultMode="signup"
      />
    </>
  );
};

export const ConservationContributeEnhanced = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Make a Difference Today</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Join us in protecting India's incredible wildlife heritage. Every contribution, big or small, 
          helps preserve these magnificent creatures for future generations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contributionOptions.map((option, index) => {
          const Icon = option.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {option.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    ₹{option.baseAmount}/{option.unit}
                  </span>
                  <ContributionModal option={option} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="bg-muted/50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-semibold mb-4">100% of Your Contribution Goes to Conservation</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          We believe in complete transparency. Every rupee you contribute is directly used for conservation efforts. 
          You'll receive regular updates on how your contribution is making a difference.
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="lg">
            View Impact Reports
          </Button>
          <Button size="lg">
            Custom Contribution
          </Button>
        </div>
      </div>
    </div>
  );
};