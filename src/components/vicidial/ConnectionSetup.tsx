import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { viciDialService } from "@/services/vicidial";
import { asteriskService } from "@/services/asterisk";

export const ConnectionSetup = () => {
  const [config, setConfig] = useState({
    viciDialUser: "",
    viciDialPass: "",
    asteriskExtension: "",
    sipPassword: ""
  });
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    setIsConnecting(true);
    try {
      // Configuration ViciDial
      const viciDialSuccess = await viciDialService.initialize({
        serverUrl: "http://vicibox11:8089",
        username: config.viciDialUser,
        password: config.viciDialPass,
        asteriskServer: "vicibox11",
        asteriskPort: 5038
      });

      if (!viciDialSuccess) {
        throw new Error("Échec de la connexion à ViciDial");
      }

      // Configuration Asterisk
      const asteriskSuccess = await asteriskService.initialize({
        host: "vicibox11",
        port: 5060,
        username: config.asteriskExtension,
        password: config.sipPassword
      });

      if (!asteriskSuccess) {
        throw new Error("Échec de la connexion à Asterisk");
      }

      toast.success("Connexion établie avec succès");
    } catch (error) {
      console.error("Erreur de connexion:", error);
      toast.error("Erreur lors de la connexion");
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-6">Configuration de la Connexion</h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="viciDialUser">Identifiant ViciDial</Label>
          <Input
            id="viciDialUser"
            value={config.viciDialUser}
            onChange={(e) => setConfig({ ...config, viciDialUser: e.target.value })}
            placeholder="Votre identifiant ViciDial"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="viciDialPass">Mot de passe ViciDial</Label>
          <Input
            id="viciDialPass"
            type="password"
            value={config.viciDialPass}
            onChange={(e) => setConfig({ ...config, viciDialPass: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="asteriskExtension">Extension Asterisk</Label>
          <Input
            id="asteriskExtension"
            value={config.asteriskExtension}
            onChange={(e) => setConfig({ ...config, asteriskExtension: e.target.value })}
            placeholder="Ex: 8600051"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="sipPassword">Mot de passe SIP</Label>
          <Input
            id="sipPassword"
            type="password"
            value={config.sipPassword}
            onChange={(e) => setConfig({ ...config, sipPassword: e.target.value })}
          />
        </div>

        <Button 
          onClick={handleConnect} 
          className="w-full"
          disabled={isConnecting}
        >
          {isConnecting ? "Connexion en cours..." : "Se connecter"}
        </Button>
      </div>
    </Card>
  );
};