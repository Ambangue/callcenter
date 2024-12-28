import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, Users, Briefcase, Calendar } from "lucide-react";

export const QuickStats = () => {
  const stats = [
    {
      title: "Demandeurs d'emploi",
      value: "1,234",
      change: "+12.3%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Offres d'emploi",
      value: "856",
      change: "+5.7%",
      trend: "up",
      icon: Briefcase,
    },
    {
      title: "Entretiens planifiés",
      value: "89",
      change: "-2.5%",
      trend: "down",
      icon: Calendar,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
              <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
            </div>
            <div className={`rounded-full p-2 ${
              stat.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
            }`}>
              <stat.icon className={`h-6 w-6 ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`} />
            </div>
          </div>
          <div className="flex items-center mt-4">
            {stat.trend === 'up' ? (
              <ArrowUpRight className="h-4 w-4 text-green-600" />
            ) : (
              <ArrowDownRight className="h-4 w-4 text-red-600" />
            )}
            <span className={`ml-2 text-sm ${
              stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change} ce mois
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
};