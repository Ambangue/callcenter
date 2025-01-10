import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Bell, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Alert {
  id: number;
  type: "info" | "warning" | "success" | "error";
  message: string;
  timestamp: Date;
}

export const LiveAlerts = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    const types: Alert["type"][] = ["info", "warning", "success", "error"];
    const messages = [
      "Nouvel agent connecté",
      "Pic d'appels détecté",
      "Objectif atteint",
      "Problème réseau détecté"
    ];

    const interval = setInterval(() => {
      const randomType = types[Math.floor(Math.random() * types.length)];
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      
      setAlerts(prev => [
        {
          id: Date.now(),
          type: randomType,
          message: randomMessage,
          timestamp: new Date()
        },
        ...prev.slice(0, 4)
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getIcon = (type: Alert["type"]) => {
    switch (type) {
      case "info": return <Info className="h-5 w-5 text-blue-500" />;
      case "warning": return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case "success": return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "error": return <Bell className="h-5 w-5 text-red-500" />;
    }
  };

  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <Bell className="h-5 w-5" />
        <h3 className="font-semibold">Alertes en temps réel</h3>
      </div>
      <div className="space-y-2">
        <AnimatePresence>
          {alerts.map((alert) => (
            <motion.div
              key={alert.id}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="flex items-center gap-2 p-2 rounded-lg bg-background"
            >
              {getIcon(alert.type)}
              <span className="flex-1">{alert.message}</span>
              <span className="text-sm text-muted-foreground">
                {alert.timestamp.toLocaleTimeString()}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Card>
  );
};