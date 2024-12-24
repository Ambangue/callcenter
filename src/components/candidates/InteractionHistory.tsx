import { Card } from "../ui/card";
import { MessageSquare, Phone, Calendar } from "lucide-react";

interface Interaction {
  id: number;
  type: "message" | "call" | "meeting";
  candidateName: string;
  date: string;
  description: string;
}

export const InteractionHistory = () => {
  const interactions: Interaction[] = [
    {
      id: 1,
      type: "message",
      candidateName: "Jean Dupont",
      date: "2024-02-20",
      description: "Email de suivi envoyé concernant l'entretien"
    },
    {
      id: 2,
      type: "call",
      candidateName: "Marie Martin",
      date: "2024-02-19",
      description: "Appel de présélection effectué"
    },
    {
      id: 3,
      type: "meeting",
      candidateName: "Pierre Durant",
      date: "2024-02-18",
      description: "Entretien technique réalisé"
    }
  ];

  const getIcon = (type: Interaction["type"]) => {
    switch (type) {
      case "message":
        return <MessageSquare className="h-4 w-4" />;
      case "call":
        return <Phone className="h-4 w-4" />;
      case "meeting":
        return <Calendar className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-4">
      {interactions.map((interaction) => (
        <Card key={interaction.id} className="p-4">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-muted rounded-full">
              {getIcon(interaction.type)}
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium">{interaction.candidateName}</h3>
                <span className="text-sm text-muted-foreground">{interaction.date}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {interaction.description}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};