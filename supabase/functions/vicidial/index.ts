import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    if (req.method === 'POST') {
      const { server_url, api_user, api_pass, asterisk_server, asterisk_port } = await req.json()
      
      console.log('Configuring ViciDial:', { server_url, api_user, asterisk_server, asterisk_port })

      // Store ViciDial configuration
      const { data, error } = await supabase
        .from('vicidial_config')
        .upsert({
          server_url,
          api_user,
          api_pass,
          asterisk_server,
          asterisk_port
        })
        .select()
        .single()

      if (error) throw error

      return new Response(
        JSON.stringify({ success: true, data }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (req.method === 'GET') {
      const { data, error } = await supabase
        .from('vicidial_config')
        .select('*')
        .limit(1)
        .single()

      if (error && error.code !== 'PGRST116') throw error

      return new Response(
        JSON.stringify({ success: true, data }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    throw new Error(`Method ${req.method} not allowed`)

  } catch (error) {
    console.error('ViciDial API error:', error)
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400
      }
    )
  }
})