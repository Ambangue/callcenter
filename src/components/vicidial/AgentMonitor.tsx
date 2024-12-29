import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Phone, PhoneOff, User } from "lucide-react";

interface Agent {
  id: string;
  vicidial_id: string;
  status: string;
  last_call_time: string;
  extension: string;
}

export const AgentMonitor = () => {
  const [agents, setAgents] = useState<Agent[]>([]);

  useEffect(() => {
    // Initial fetch
    fetchAgents();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('agent-updates')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'call_agents'
        },
        (payload) => {
          console.log('Agent update received:', payload);
          fetchAgents();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchAgents = async () => {
    try {
      const { data, error } = await supabase
        .from('call_agents')
        .select('*')
        .order('status');

      if (error) throw error;
      setAgents(data || []);
    } catch (error) {
      console.error("Error fetching agents:", error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'online':
        return 'bg-green-500';
      case 'on_call':
        return 'bg-yellow-500';
      case 'offline':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Moniteur des Agents</h2>
        <Badge variant="outline">
          {agents.length} agent{agents.length > 1 ? 's' : ''}
        </Badge>
      </div>

      <div className="space-y-4">
        {agents.map((agent) => (
          <div
            key={agent.id}
            className="flex items-center justify-between p-4 bg-muted rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <div className={`w-3 h-3 rounded-full ${getStatusColor(agent.status)}`} />
              <div>
                <p className="font-medium">Agent {agent.vicidial_id}</p>
                <p className="text-sm text-muted-foreground">Ext: {agent.extension}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              {agent.status === 'on_call' ? (
                <Phone className="h-5 w-5 text-yellow-500" />
              ) : agent.status === 'online' ? (
                <User className="h-5 w-5 text-green-500" />
              ) : (
                <PhoneOff className="h-5 w-5 text-red-500" />
              )}
              <Badge variant="secondary">
                {agent.status.replace('_', ' ')}
              </Badge>
            </div>
          </div>
        ))}

        {agents.length === 0 && (
          <div className="text-center text-muted-foreground py-8">
            Aucun agent trouvé
          </div>
        )}
      </div>
    </Card>
  );
};