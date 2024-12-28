import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PhoneIncoming, PhoneOutgoing, MessageSquare, Mail, Briefcase, UserCheck } from "lucide-react";

export const ActivityLog = () => {
  console.log("Rendering ActivityLog component");

  const activities = [
    {
      id: 1,
      type: "placement",
      agent: "Jean Makiese",
      contact: "Entreprise ABC",
      time: "Il y a 5 min",
      description: "Placement réussi - Développeur Web",
      icon: UserCheck,
      iconColor: "text-green-500"
    },
    {
      id: 2,
      type: "appel-entrant",
      agent: "Marie Lumumba",
      contact: "Demandeur d'emploi",
      time: "Il y a 15 min",
      description: "Suivi de candidature",
      icon: PhoneIncoming,
      iconColor: "text-blue-500"
    },
    {
      id: 3,
      type: "entreprise",
      agent: "Pierre Kasa",
      contact: "Entreprise XYZ",
      time: "Il y a 30 min",
      description: "Nouvelle offre d'emploi enregistrée",
      icon: Briefcase,
      iconColor: "text-purple-500"
    },
    {
      id: 4,
      type: "email",
      agent: "Sarah Mobutu",
      contact: "Candidat",
      time: "Il y a 45 min",
      description: "Convocation entretien envoyée",
      icon: Mail,
      iconColor: "text-orange-500"
    },
  ];

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">Activités récentes</h3>
      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50"
            >
              <div className={`rounded-full p-2 bg-gray-100 ${activity.iconColor}`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{activity.agent}</p>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
                <p className="text-sm text-gray-600">{activity.contact}</p>
                <p className="text-xs text-gray-500">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};