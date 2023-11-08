import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://onzhnkepzpjlhrxsaoke.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9uemhua2VwenBqbGhyeHNhb2tlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzOTc0MDIsImV4cCI6MjAxNDk3MzQwMn0.D4HdzbHEz-46tWvUjtPXLHyPnxcuRDW4bTdInfHRhg4'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
