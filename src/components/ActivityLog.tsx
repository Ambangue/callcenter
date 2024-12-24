import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Clock, User, FileText } from "lucide-react";

export const ActivityLog = () => {
  const activities = [
    {
      id: 1,
      user: "Jean Dupont",
      action: "a créé un nouveau dossier",
      time: "Il y a 5 minutes",
      type: "create"
    },
    {
      id: 2,
      user: "Marie Martin",
      action: "a modifié le statut",
      time: "Il y a 15 minutes",
      type: "update"
    },
    {
      id: 3,
      user: "Paul Bernard",
      action: "a ajouté un commentaire",
      time: "Il y a 30 minutes",
      type: "comment"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "create":
        return <FileText className="h-4 w-4 text-green-500" />;
      case "update":
        return <Clock className="h-4 w-4 text-blue-500" />;
      case "comment":
        return <User className="h-4 w-4 text-purple-500" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">Activités récentes</h3>
      <ScrollArea className="h-[300px]">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {getIcon(activity.type)}
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium">{activity.user}</span>{" "}
                  {activity.action}
                </p>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};