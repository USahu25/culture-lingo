// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://fjdacetqncqnwngtkmyr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqZGFjZXRxbmNxbnduZ3RrbXlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2NDA4NzUsImV4cCI6MjA1MzIxNjg3NX0.PNPBCYQM4Q7utgdQ-meKcY4fuiB8Eipat4OVfRB2l-U";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);