import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, Camera, MapPin, Plus, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/components/auth/AuthProvider";
import { AuthModal } from "@/components/auth/AuthModal";
import { supabase } from "@/integrations/supabase/client";

const sightingSchema = z.object({
  speciesName: z.string().min(2, "Species name is required").max(100, "Species name too long"),
  commonName: z.string().max(100, "Common name too long").optional(),
  scientificName: z.string().max(100, "Scientific name too long").optional(),
  locationName: z.string().min(2, "Location name is required").max(200, "Location name too long"),
  latitude: z.number().min(-90).max(90).optional(),
  longitude: z.number().min(-180).max(180).optional(),
  observationDate: z.date({
    required_error: "Observation date is required",
  }).refine((date) => date <= new Date(), "Date cannot be in the future"),
  observationTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format").optional(),
  count: z.number().min(1, "Count must be at least 1").max(10000, "Count seems unrealistic"),
  breedingBehavior: z.boolean(),
  notes: z.string().max(1000, "Notes too long").optional(),
  photoUrl: z.string().url("Invalid URL format").optional().or(z.literal("")),
});

type SightingData = z.infer<typeof sightingSchema>;

export const BirdSightingForm = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const form = useForm<SightingData>({
    resolver: zodResolver(sightingSchema),
    defaultValues: {
      speciesName: "",
      commonName: "",
      scientificName: "",
      locationName: "",
      count: 1,
      breedingBehavior: false,
      notes: "",
      photoUrl: "",
    },
  });

  const onSubmit = async (data: SightingData) => {
    if (!user) {
      setAuthModalOpen(true);
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('bird_sightings')
        .insert([
          {
            user_id: user.id,
            species_name: data.speciesName,
            common_name: data.commonName,
            scientific_name: data.scientificName,
            location_name: data.locationName,
            latitude: data.latitude,
            longitude: data.longitude,
            observation_date: data.observationDate.toISOString().split('T')[0],
            observation_time: data.observationTime,
            count: data.count,
            breeding_behavior: data.breedingBehavior,
            notes: data.notes,
            photo_url: data.photoUrl,
          },
        ]);

      if (error) throw error;

      toast({
        title: "Sighting Recorded!",
        description: `Your ${data.speciesName} sighting at ${data.locationName} has been saved. You can now submit it to eBird.`,
      });
      
      setModalOpen(false);
      form.reset();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to record sighting. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogTrigger asChild>
          <Button size="lg" className="bg-forest-green hover:bg-forest-green/90">
            <Plus className="w-4 h-4 mr-2" />
            Record New Sighting
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Camera className="w-5 h-5" />
              Record Bird Sighting
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="speciesName">Species Name *</Label>
                <Input
                  id="speciesName"
                  placeholder="e.g., Indian Peacock"
                  {...form.register('speciesName')}
                />
                {form.formState.errors.speciesName && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.speciesName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="commonName">Common Name</Label>
                <Input
                  id="commonName"
                  placeholder="e.g., Peacock"
                  {...form.register('commonName')}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="scientificName">Scientific Name</Label>
                <Input
                  id="scientificName"
                  placeholder="e.g., Pavo cristatus"
                  {...form.register('scientificName')}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="locationName">Location *</Label>
                <Input
                  id="locationName"
                  placeholder="e.g., Corbett National Park"
                  {...form.register('locationName')}
                />
                {form.formState.errors.locationName && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.locationName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="count">Count</Label>
                <Input
                  id="count"
                  type="number"
                  min="1"
                  {...form.register('count', { valueAsNumber: true })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="latitude">Latitude</Label>
                <Input
                  id="latitude"
                  type="number"
                  step="any"
                  placeholder="e.g., 29.5319"
                  {...form.register('latitude', { valueAsNumber: true })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="longitude">Longitude</Label>
                <Input
                  id="longitude"
                  type="number"
                  step="any"
                  placeholder="e.g., 79.1947"
                  {...form.register('longitude', { valueAsNumber: true })}
                />
              </div>

              <div className="space-y-2">
                <Label>Observation Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !form.watch('observationDate') && "text-muted-foreground"
                      )}
                    >
                      {form.watch('observationDate') ? (
                        format(form.watch('observationDate'), "PPP")
                      ) : (
                        <span>Pick observation date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={form.watch('observationDate')}
                      onSelect={(date) => form.setValue('observationDate', date!)}
                      disabled={(date) => date > new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {form.formState.errors.observationDate && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.observationDate.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="observationTime">Time</Label>
                <Input
                  id="observationTime"
                  type="time"
                  {...form.register('observationTime')}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="photoUrl">Photo URL</Label>
              <Input
                id="photoUrl"
                type="url"
                placeholder="Link to your bird photo"
                {...form.register('photoUrl')}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="breedingBehavior"
                checked={form.watch('breedingBehavior')}
                onCheckedChange={(checked) => 
                  form.setValue('breedingBehavior', checked as boolean)
                }
              />
              <Label htmlFor="breedingBehavior">Breeding behavior observed</Label>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                placeholder="Additional observations, behavior notes, etc."
                {...form.register('notes')}
              />
            </div>

            <div className="flex gap-2">
              <Button type="submit" className="flex-1" disabled={isSubmitting}>
                {isSubmitting ? 'Recording...' : 'Record Sighting'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => window.open('https://ebird.org/submit', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Submit to eBird
              </Button>
            </div>
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