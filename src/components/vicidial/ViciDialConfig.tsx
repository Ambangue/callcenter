import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { viciDialService } from "@/services/vicidial";

export const ViciDialConfig = () => {
  const [config, setConfig] = useState({
    serverUrl: "http://vicibox11:8089",
    username: "",
    password: "",
    asteriskServer: "vicibox11",
    asteriskPort: 5038
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      console.log("Tentative de connexion à ViciDial avec la configuration:", config);
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
          <Label htmlFor="serverUrl">URL du serveur ViciDial</Label>
          <Input
            id="serverUrl"
            value={config.serverUrl}
            onChange={(e) => setConfig({ ...config, serverUrl: e.target.value })}
            placeholder="http://vicibox11:8089"
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

        <div className="space-y-2">
          <Label htmlFor="asteriskServer">Serveur Asterisk</Label>
          <Input
            id="asteriskServer"
            value={config.asteriskServer}
            onChange={(e) => setConfig({ ...config, asteriskServer: e.target.value })}
            placeholder="vicibox11"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="asteriskPort">Port Asterisk</Label>
          <Input
            id="asteriskPort"
            type="number"
            value={config.asteriskPort}
            onChange={(e) => setConfig({ ...config, asteriskPort: parseInt(e.target.value) })}
            placeholder="5038"
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