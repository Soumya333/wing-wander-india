-- Create user profiles table for additional user information
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  country TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile" 
ON public.profiles FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create trip requests table
CREATE TABLE public.trip_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  country TEXT NOT NULL,
  phone TEXT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  duration TEXT NOT NULL,
  adults INTEGER NOT NULL DEFAULT 1,
  children INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'confirmed', 'completed', 'cancelled')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on trip_requests
ALTER TABLE public.trip_requests ENABLE ROW LEVEL SECURITY;

-- Trip requests policies
CREATE POLICY "Users can view their own trip requests" 
ON public.trip_requests FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create trip requests" 
ON public.trip_requests FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own trip requests" 
ON public.trip_requests FOR UPDATE 
USING (auth.uid() = user_id);

-- Create conservation contributions table
CREATE TABLE public.conservation_contributions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  contribution_type TEXT NOT NULL CHECK (contribution_type IN ('adopt_tiger', 'plant_trees', 'wildlife_monitoring', 'community_programs', 'custom')),
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT NOT NULL DEFAULT 'INR',
  quantity INTEGER DEFAULT 1,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'failed', 'refunded')),
  payment_reference TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on conservation_contributions
ALTER TABLE public.conservation_contributions ENABLE ROW LEVEL SECURITY;

-- Conservation contributions policies
CREATE POLICY "Users can view their own contributions" 
ON public.conservation_contributions FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create contributions" 
ON public.conservation_contributions FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own contributions" 
ON public.conservation_contributions FOR UPDATE 
USING (auth.uid() = user_id);

-- Create bird sightings table
CREATE TABLE public.bird_sightings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  species_name TEXT NOT NULL,
  common_name TEXT,
  scientific_name TEXT,
  location_name TEXT NOT NULL,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  observation_date DATE NOT NULL,
  observation_time TIME,
  count INTEGER DEFAULT 1,
  breeding_behavior BOOLEAN DEFAULT false,
  notes TEXT,
  photo_url TEXT,
  ebird_checklist_id TEXT,
  ebird_submission_status TEXT DEFAULT 'pending' CHECK (ebird_submission_status IN ('pending', 'submitted', 'verified', 'failed')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on bird_sightings
ALTER TABLE public.bird_sightings ENABLE ROW LEVEL SECURITY;

-- Bird sightings policies
CREATE POLICY "Users can view their own sightings" 
ON public.bird_sightings FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create sightings" 
ON public.bird_sightings FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own sightings" 
ON public.bird_sightings FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own sightings" 
ON public.bird_sightings FOR DELETE 
USING (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX idx_trip_requests_user_id ON public.trip_requests(user_id);
CREATE INDEX idx_trip_requests_status ON public.trip_requests(status);
CREATE INDEX idx_conservation_contributions_user_id ON public.conservation_contributions(user_id);
CREATE INDEX idx_conservation_contributions_type ON public.conservation_contributions(contribution_type);
CREATE INDEX idx_bird_sightings_user_id ON public.bird_sightings(user_id);
CREATE INDEX idx_bird_sightings_location ON public.bird_sightings(latitude, longitude);
CREATE INDEX idx_bird_sightings_date ON public.bird_sightings(observation_date);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_trip_requests_updated_at
  BEFORE UPDATE ON public.trip_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_conservation_contributions_updated_at
  BEFORE UPDATE ON public.conservation_contributions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_bird_sightings_updated_at
  BEFORE UPDATE ON public.bird_sightings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();