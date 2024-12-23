import { Card } from "@/components/ui/card";
import { FileText, Users, Calendar } from "lucide-react";

export const ProfileStats = () => {
  const stats = [
    {
      icon: <FileText className="h-5 w-5" />,
      label: "Documents",
      value: "12",
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: "Collaborateurs",
      value: "48",
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Années d'expérience",
      value: "5",
    },
  ];

  return (
    <Card className="p-6 col-span-1">
      <h3 className="text-lg font-semibold mb-4">Statistiques</h3>
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {stat.icon}
              <span className="text-muted-foreground">{stat.label}</span>
            </div>
            <span className="font-semibold">{stat.value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};