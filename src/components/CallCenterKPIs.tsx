import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  PhoneIncoming, 
  PhoneOutgoing, 
  Clock, 
  UserCheck,
  TrendingUp
} from "lucide-react";

export const CallCenterKPIs = () => {
  const kpis = [
    {
      title: "Taux de réponse",
      value: "94%",
      target: "95%",
      progress: 94,
      icon: PhoneIncoming,
      trend: "+2.3%",
      color: "text-green-500"
    },
    {
      title: "Temps moyen de traitement",
      value: "4m 30s",
      target: "5m",
      progress: 85,
      icon: Clock,
      trend: "-30s",
      color: "text-blue-500"
    },
    {
      title: "Taux de placement",
      value: "68%",
      target: "70%",
      progress: 68,
      icon: UserCheck,
      trend: "+5%",
      color: "text-purple-500"
    }
  ];

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Indicateurs de Performance</h2>
      <div className="space-y-6">
        {kpis.map((kpi) => (
          <div key={kpi.title} className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className={`p-2 rounded-full bg-gray-100 ${kpi.color}`}>
                  <kpi.icon className="h-4 w-4" />
                </div>
                <span className="font-medium">{kpi.title}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-bold">{kpi.value}</span>
                <div className={`flex items-center text-sm ${
                  kpi.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {kpi.trend}
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <Progress value={kpi.progress} className="h-2" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Objectif: {kpi.target}</span>
                <span>{kpi.progress}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};