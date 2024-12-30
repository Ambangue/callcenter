import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Building } from "lucide-react";

export const RecentApplications = () => {
  const applications = [
    {
      company: "Tech Solutions",
      position: "Développeur Frontend",
      date: "Il y a 2 heures",
      status: "En attente"
    },
    {
      company: "Digital Agency",
      position: "UX Designer",
      date: "Il y a 3 heures",
      status: "Entretien"
    },
    {
      company: "StartUp Inc",
      position: "Product Manager",
      date: "Il y a 5 heures",
      status: "Candidature envoyée"
    }
  ];

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Candidatures récentes</h2>
        <Button variant="outline">Voir tout</Button>
      </div>
      
      <div className="space-y-4">
        {applications.map((application, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-muted rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-background rounded-full">
                <Building className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{application.position}</h3>
                <p className="text-sm text-muted-foreground">
                  {application.company}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                {application.date}
              </div>
              <Badge variant="secondary">{application.status}</Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};