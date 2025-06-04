// filepath: /Users/jakekozak/Downloads/cannabis-rezept-leicht-main 2/src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iyfecyhkowdmuzwnnxgl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5ZmVjeWhrb3dkbXV6d25ueGdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwMzU2NjQsImV4cCI6MjA2NDYxMTY2NH0.MsuQvSFyIm0MpyUbW3bAoDUJDLHIhvVv4pUlbW1089s';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);