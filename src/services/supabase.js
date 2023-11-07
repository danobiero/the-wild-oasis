import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gjqfaxrwinzsuzivktmo.supabase.co";

//const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqcWZheHJ3aW56c3V6aXZrdG1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5ODg3MzgsImV4cCI6MjAxMjU2NDczOH0.JNCGHz4D4NNorlM-4hUH8WvCpY5IBCp4dYHytRmEnUk";
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqcWZheHJ3aW56c3V6aXZrdG1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5ODg3MzgsImV4cCI6MjAxMjU2NDczOH0.JNCGHz4D4NNorlM-4hUH8WvCpY5IBCp4dYHytRmEnUk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
