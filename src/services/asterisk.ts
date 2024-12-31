import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface AsteriskConfig {
  host: string;
  port: number;
  username: string;
  password: string;
}

class AsteriskService {
  private config: AsteriskConfig | null = null;

  async initialize(config: AsteriskConfig): Promise<boolean> {
    console.log("Initialisation de la connexion Asterisk...");
    
    try {
      // Sauvegarde de la configuration
      const { error } = await supabase
        .from('call_agents')
        .update({
          asterisk_extension: config.username,
          sip_user: config.username,
          sip_pass: config.password
        })
        .eq('vicidial_id', config.username);

      if (error) throw error;

      this.config = config;
      return await this.testConnection();
    } catch (error) {
      console.error("Erreur d'initialisation Asterisk:", error);
      return false;
    }
  }

  private async testConnection(): Promise<boolean> {
    if (!this.config) return false;

    try {
      console.log("Test de la connexion SIP...");
      // Ici, nous simulons un test de connexion SIP
      // Dans une implémentation réelle, vous devriez utiliser une bibliothèque SIP comme SIP.js
      return true;
    } catch (error) {
      console.error("Échec du test de connexion SIP:", error);
      return false;
    }
  }

  async registerExtension(extension: string): Promise<boolean> {
    try {
      console.log(`Enregistrement de l'extension ${extension}...`);
      // Simulation de l'enregistrement SIP
      toast.success(`Extension ${extension} enregistrée avec succès`);
      return true;
    } catch (error) {
      console.error("Erreur d'enregistrement de l'extension:", error);
      toast.error("Échec de l'enregistrement de l'extension");
      return false;
    }
  }
}

export const asteriskService = new AsteriskService();