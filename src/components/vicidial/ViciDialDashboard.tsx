import { useState, useEffect } from "react";
import { ConnectionStatus } from "./ConnectionStatus";
import { ConnectionSetup } from "./ConnectionSetup";
import { CallManagement } from "@/components/CallManagement";
import { CallCenterKPIs } from "@/components/CallCenterKPIs";
import { AgentMonitor } from "./AgentMonitor";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

export const ViciDialDashboard = () => {
  const [connectionStatus, setConnectionStatus] = useState({
    viciDial: false,
    asterisk: false,
    isLoading: true
  });

  useEffect(() => {
    // Simulation de la vérification initiale des connexions
    const checkConnections = async () => {
      try {
        // Dans une implémentation réelle, vous devriez vérifier l'état des connexions
        // avec ViciDial et Asterisk ici
        setConnectionStatus({
          viciDial: false,
          asterisk: false,
          isLoading: false
        });
      } catch (error) {
        console.error("Erreur lors de la vérification des connexions:", error);
        toast.error("Erreur lors de la vérification des connexions");
        setConnectionStatus(prev => ({ ...prev, isLoading: false }));
      }
    };

    checkConnections();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Interface Agent ViciDial</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ConnectionStatus 
          viciDialStatus={connectionStatus.viciDial}
          asteriskStatus={connectionStatus.asterisk}
          isLoading={connectionStatus.isLoading}
        />
        <ConnectionSetup />
      </div>

      {(connectionStatus.viciDial && connectionStatus.asterisk) && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <CallCenterKPIs />
            </div>
            <div>
              <AgentMonitor />
            </div>
          </div>
          
          <CallManagement />
        </>
      )}
    </div>
  );
};