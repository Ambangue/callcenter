import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Calendar, Clock, User } from "lucide-react";

interface Interview {
  id: number;
  candidateName: string;
  date: string;
  time: string;
  status: "planned" | "completed" | "cancelled";
}

export const InterviewTracker = () => {
  const [interviews] = useState<Interview[]>([
    {
      id: 1,
      candidateName: "Marie Martin",
      date: "2024-02-25",
      time: "14:00",
      status: "planned"
    },
    {
      id: 2,
      candidateName: "Pierre Durant",
      date: "2024-02-26",
      time: "10:00",
      status: "planned"
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Entretiens à venir</h2>
        <Button>
          Planifier un entretien
        </Button>
      </div>

      <div className="grid gap-4">
        {interviews.map((interview) => (
          <Card key={interview.id} className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{interview.candidateName}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{interview.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{interview.time}</span>
                </div>
              </div>
              <div className="space-x-2">
                <Button variant="outline" size="sm">
                  Modifier
                </Button>
                <Button variant="destructive" size="sm">
                  Annuler
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};