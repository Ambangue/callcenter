import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const RecentApplications = () => {
  const applications = [
    {
      id: 1,
      candidate: "Jean Makiese",
      position: "Développeur Frontend",
      company: "TechCo",
      status: "En attente",
      date: "2024-02-25",
    },
    {
      id: 2,
      candidate: "Marie Lumumba",
      position: "Chef de Projet",
      company: "ConsultCo",
      status: "Accepté",
      date: "2024-02-24",
    },
    {
      id: 3,
      candidate: "Pierre Kasa",
      position: "Analyste Marketing",
      company: "MarketCo",
      status: "En cours",
      date: "2024-02-23",
    },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      "En attente": "bg-yellow-100 text-yellow-800",
      "Accepté": "bg-green-100 text-green-800",
      "En cours": "bg-blue-100 text-blue-800",
      "Refusé": "bg-red-100 text-red-800",
    };
    return styles[status as keyof typeof styles] || "";
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Candidatures récentes</h2>
      <div className="space-y-4">
        {applications.map((app) => (
          <div key={app.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Avatar />
              <div>
                <p className="font-medium">{app.candidate}</p>
                <p className="text-sm text-muted-foreground">{app.position} - {app.company}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge className={getStatusBadge(app.status)}>{app.status}</Badge>
              <span className="text-sm text-muted-foreground">{app.date}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};