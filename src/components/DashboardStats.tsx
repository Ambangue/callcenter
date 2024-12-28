import { Card } from "@/components/ui/card";
import { Phone, PhoneIncoming, PhoneOutgoing, Clock, Users } from "lucide-react";

export const DashboardStats = () => {
  console.log("Rendering DashboardStats component");
  
  const stats = [
    { 
      label: "Appels entrants", 
      value: "127", 
      change: "+12%",
      icon: PhoneIncoming,
      color: "text-green-500"
    },
    { 
      label: "Appels sortants", 
      value: "89", 
      change: "+5%",
      icon: PhoneOutgoing,
      color: "text-blue-500"
    },
    { 
      label: "Temps moyen d'appel", 
      value: "4m 30s", 
      change: "-8%",
      icon: Clock,
      color: "text-orange-500"
    },
    { 
      label: "Agents actifs", 
      value: "24", 
      change: "+2",
      icon: Users,
      color: "text-purple-500"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">{stat.label}</h3>
              <div className="mt-2 flex items-baseline gap-2">
                <p className="text-2xl font-semibold">{stat.value}</p>
                <span className={`text-sm ${
                  stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stat.change}
                </span>
              </div>
            </div>
            <div className={`rounded-full p-3 bg-gray-100 ${stat.color}`}>
              <stat.icon className="h-6 w-6" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};