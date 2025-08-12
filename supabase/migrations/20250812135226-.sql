-- Add missing category column to trip_requests table
ALTER TABLE public.trip_requests 
ADD COLUMN category text NOT NULL DEFAULT 'Leisure';

-- Add check constraint for valid categories
ALTER TABLE public.trip_requests 
ADD CONSTRAINT valid_category CHECK (category IN ('Leisure', 'Wildlife Photography', 'Business Visit', 'Filming Expedition'));