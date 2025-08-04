import { createClient } from '@supabase/supabase-js';

// Use environment variables if available, otherwise use the hardcoded values
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://dgilkvoqovclzgwnmbfp.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnaWxrdm9xb3ZjbHpnd25tYmZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzMTc0MTQsImV4cCI6MjA2OTg5MzQxNH0.z-kbreoomZRBTxPz0Nk2GhO2MlkDk4pj57xpI5iM1W8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Define the waitlist entry type
export interface WaitlistEntry {
  email: string;
  company_name?: string;
  ai_systems_count?: number;
  selected_plan: 'free' | 'core' | 'enterprise';
}

// Function to add a new waitlist entry
export async function addToWaitlist(entry: WaitlistEntry) {
  const { data, error } = await supabase
    .from('waitlist')
    .insert([entry])
  
  if (error) {
    throw error;
  }
  
  return data;
} 