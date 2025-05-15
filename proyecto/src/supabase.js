import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ygnuugohgouhoowayqpn.supabase.co/';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnbnV1Z29oZ291aG9vd2F5cXBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMzc5ODYsImV4cCI6MjA2MjkxMzk4Nn0._HeQW6lPVY_ApYczGZ4NQH627uJ6EENJ57CQQg7AneA apikey';
export const supabase = createClient(supabaseUrl, supabaseKey);