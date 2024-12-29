import { supabase } from "@/integrations/supabase/client";

interface ViciDialConfig {
  serverUrl: string;
  username: string;
  password: string;
}

class ViciDialService {
  private config: ViciDialConfig | null = null;
  
  async initialize(config: ViciDialConfig) {
    console.log("Initializing ViciDial service with config:", config);
    this.config = config;
    return this.testConnection();
  }

  private async testConnection(): Promise<boolean> {
    try {
      const response = await fetch(`${this.config?.serverUrl}/agc/api.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          source: 'test',
          user: this.config?.username || '',
          pass: this.config?.password || '',
        }),
      });

      console.log("ViciDial connection test response:", response.status);
      return response.ok;
    } catch (error) {
      console.error("ViciDial connection test failed:", error);
      return false;
    }
  }

  async getAgentStatus(agentId: string) {
    try {
      const { data, error } = await supabase
        .from('call_agents')
        .select('*')
        .eq('vicidial_id', agentId)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error fetching agent status:", error);
      throw error;
    }
  }

  async updateAgentStatus(agentId: string, status: string) {
    try {
      const { data, error } = await supabase
        .from('call_agents')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('vicidial_id', agentId)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error updating agent status:", error);
      throw error;
    }
  }
}

export const viciDialService = new ViciDialService();