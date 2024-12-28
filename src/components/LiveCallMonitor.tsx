import { Card } from "@/components/ui/card";
import { Phone, PhoneCall, PhoneForwarded, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const LiveCallMonitor = () => {
  const activeAgents = [
    {
      id: 1,
      name: "Marie K.",
      status: "En appel",
      duration: "5:23",
      type: "Demandeur",
    },
    {
      id: 2,
      name: "Jean L.",
      status: "Disponible",
      type: "Entreprise",
    },
    {
      id: 3,
      name: "Sophie M.",
      status: "En pause",
      type: "Formation",
    }
  ];

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Moniteur d'appels en direct</h2>
        <Badge variant="secondary" className="px-2 py-1">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            En direct
          </div>
        </Badge>
      </div>

      <div className="space-y-4">
        {activeAgents.map((agent) => (
          <div key={agent.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center space-x-3">
              {agent.status === "En appel" ? (
                <PhoneCall className="h-5 w-5 text-green-500" />
              ) : agent.status === "Disponible" ? (
                <Phone className="h-5 w-5 text-blue-500" />
              ) : (
                <PhoneForwarded className="h-5 w-5 text-yellow-500" />
              )}
              <div>
                <p className="font-medium">{agent.name}</p>
                <p className="text-sm text-muted-foreground">{agent.type}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge 
                variant={agent.status === "En appel" ? "destructive" : 
                        agent.status === "Disponible" ? "default" : "secondary"}
              >
                {agent.status}
              </Badge>
              {agent.duration && (
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {agent.duration}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};```

Key changes:
1. Replaced "success" variant with "default" for "Disponible" status
2. Kept "destructive" for "En appel" status
3. Used "secondary" for "En pause" status

These changes resolve the TypeScript error by using only the predefined Badge variants from shadcn/ui.