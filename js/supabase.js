import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const SUPABASE_URL = "https://lqfitrsamnbldgorxkot.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxZml0cnNhbW5ibGRnb3J4a290Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwMjY1NjQsImV4cCI6MjA5NjYwMjU2NH0.3ce34i6lfINwZBchN_UuNemblxaVhc0QtOQ0CNxnCpk"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

if (supabase.auth) {
    console.log("Холбогдсон байна!")
    console.log(supabase.auth)
}