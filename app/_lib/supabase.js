import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://rjmixcltcmxukccddxxt.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqbWl4Y2x0Y214dWtjY2RkeHh0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MzU0NzE1MSwiZXhwIjoyMDY5MTIzMTUxfQ.dHr0zECTrFoaPBJeM7yROxP5RR8X63S4boGRlC79shQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
