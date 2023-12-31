import { createClient } from "@supabase/supabase-js";


const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
const supabaseKEy = import.meta.env.VITE_APP_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKEy);

export default supabase;
