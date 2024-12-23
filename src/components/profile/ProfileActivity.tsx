import { Card } from "@/components/ui/card";
import { Activity } from "lucide-react";

export const ProfileActivity = () => {
  const activities = [
    {
      action: "Connexion au système",
      date: "Aujourd'hui à 09:30",
    },
    {
      action: "Mise à jour du profil",
      date: "Hier à 14:15",
    },
    {
      action: "Document ajouté",
      date: "Il y a 2 jours",
    },
  ];

  return (
    <Card className="p-6 col-span-1 md:col-span-2">
      <div className="flex items-center space-x-2 mb-4">
        <Activity className="h-5 w-5" />
        <h3 className="text-lg font-semibold">Activité récente</h3>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-muted rounded-lg"
          >
            <span>{activity.action}</span>
            <span className="text-sm text-muted-foreground">{activity.date}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};