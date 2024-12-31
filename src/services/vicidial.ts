import { supabase } from "@/integrations/supabase/client";

interface ViciDialConfig {
  serverUrl: string;
  username: string;
  password: string;
  asteriskServer: string;
  asteriskPort: number;
}

class ViciDialService {
  private config: ViciDialConfig | null = null;
  
  async initialize(config: ViciDialConfig) {
    console.log("Initialisation du service ViciDial avec la configuration:", {
      ...config,
      password: '***' // On masque le mot de passe dans les logs
    });
    
    // Nettoyage de l'URL du serveur
    config.serverUrl = this.sanitizeUrl(config.serverUrl);
    
    this.config = config;
    
    try {
      // Sauvegarde de la configuration dans Supabase
      const { error } = await supabase
        .from('vicidial_config')
        .upsert({
          server_url: config.serverUrl,
          api_user: config.username,
          api_pass: config.password,
          asterisk_server: config.asteriskServer,
          asterisk_port: config.asteriskPort,
          updated_at: new Date().toISOString()
        });

      if (error) {
        console.error("Erreur lors de la sauvegarde de la configuration:", error);
        throw error;
      }
      
      return await this.testConnection();
    } catch (error) {
      console.error("Erreur lors de l'initialisation de ViciDial:", error);
      return false;
    }
  }

  private sanitizeUrl(url: string): string {
    // Supprime les : en fin d'URL et s'assure que l'URL est bien formée
    url = url.replace(/:+$/, '');
    
    // S'assure que l'URL commence par http:// ou https://
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = `http://${url}`;
    }
    
    console.log("URL nettoyée:", url);
    return url;
  }

  private async testConnection(): Promise<boolean> {
    if (!this.config) {
      console.error("Configuration ViciDial non initialisée");
      return false;
    }

    try {
      console.log("Test de connexion à ViciDial...");
      const response = await fetch(`${this.config.serverUrl}/agc/api.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          source: 'test',
          user: this.config.username,
          pass: this.config.password,
        }),
      });

      console.log("Réponse du test de connexion ViciDial:", response.status);
      return response.ok;
    } catch (error) {
      console.error("Échec du test de connexion ViciDial:", error);
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
      console.error("Erreur lors de la récupération du statut de l'agent:", error);
      throw error;
    }
  }

  async updateAgentStatus(agentId: string, status: string) {
    try {
      const { data, error } = await supabase
        .from('call_agents')
        .update({ 
          status, 
          updated_at: new Date().toISOString() 
        })
        .eq('vicidial_id', agentId)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Erreur lors de la mise à jour du statut de l'agent:", error);
      throw error;
    }
  }
}

export const viciDialService = new ViciDialService();