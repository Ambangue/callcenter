import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { viciDialService } from "@/services/vicidial";

export const ViciDialConfig = () => {
  const [config, setConfig] = useState({
    serverUrl: "",
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const success = await viciDialService.initialize(config);
      if (success) {
        toast.success("Configuration ViciDial réussie");
      } else {
        toast.error("Échec de la connexion à ViciDial");
      }
    } catch (error) {
      console.error("ViciDial configuration error:", error);
      toast.error("Erreur de configuration ViciDial");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">Configuration ViciDial</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="serverUrl">URL du serveur</Label>
          <Input
            id="serverUrl"
            value={config.serverUrl}
            onChange={(e) => setConfig({ ...config, serverUrl: e.target.value })}
            placeholder="https://votre-serveur-vicidial.com"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="username">Nom d'utilisateur</Label>
          <Input
            id="username"
            value={config.username}
            onChange={(e) => setConfig({ ...config, username: e.target.value })}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Mot de passe</Label>
          <Input
            id="password"
            type="password"
            value={config.password}
            onChange={(e) => setConfig({ ...config, password: e.target.value })}
            required
          />
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Configuration en cours..." : "Configurer ViciDial"}
        </Button>
      </form>
    </Card>
  );
};