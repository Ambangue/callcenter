import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";  // Add this import

export const UpcomingInterviews = () => {
  const interviews = [
    {
      id: 1,
      candidate: "Paul Bokolo",
      position: "Ingénieur Logiciel",
      date: "2024-02-26",
      time: "10:00",
      location: "Brazzaville",
      type: "En personne",
    },
    {
      id: 2,
      candidate: "Sophie Mobutu",
      position: "Designer UX",
      date: "2024-02-27",
      time: "14:30",
      location: "En ligne",
      type: "Virtuel",
    },
  ];

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Entretiens à venir</h2>
      <div className="space-y-4">
        {interviews.map((interview) => (
          <div key={interview.id} className="p-4 border rounded-lg hover:bg-gray-50">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-medium">{interview.candidate}</h3>
                <p className="text-sm text-muted-foreground">{interview.position}</p>
              </div>
              <Badge variant="outline">{interview.type}</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{interview.date}</span>
                <Clock className="h-4 w-4 ml-4 mr-2" />
                <span>{interview.time}</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{interview.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};