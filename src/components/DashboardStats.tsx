import { Card } from "@/components/ui/card";

export const DashboardStats = () => {
  const stats = [
    { label: "Appels entrants", value: "127", change: "+12%" },
    { label: "Appels sortants", value: "89", change: "+5%" },
    { label: "Taux de réponse", value: "92%", change: "+3%" },
    { label: "Demandes en attente", value: "34", change: "-8%" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground">{stat.label}</h3>
          <div className="mt-2 flex items-baseline gap-2">
            <p className="text-2xl font-semibold">{stat.value}</p>
            <span className={`text-sm ${
              stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
            }`}>
              {stat.change}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
};