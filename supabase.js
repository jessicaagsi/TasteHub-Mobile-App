import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL =
  'https://lyyspqtvwveymediqwyn.supabase.co';

const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5eXNwcXR2d3ZleW1lZGlxd3luIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzMTAwODIsImV4cCI6MjA5NTg4NjA4Mn0.Ir3YYuOmUVqQVlTTMYSBMaLb0ANyFn25RxpIiWHrY4o';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);