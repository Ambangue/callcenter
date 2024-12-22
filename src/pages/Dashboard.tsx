import { DashboardStats } from "@/components/DashboardStats";
import { CallsChart } from "@/components/CallsChart";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Tableau de bord</h1>
        <p className="text-sm text-muted-foreground">
          Dernière mise à jour: {new Date().toLocaleTimeString()}
        </p>
      </div>
      
      <DashboardStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Évolution des appels</h2>
          <CallsChart />
        </Card>
        
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Répartition des demandes</h2>
          <div className="space-y-4">
            {[
              { label: "Demandeurs d'emploi", value: "45%" },
              { label: "Demandes de récépissé", value: "15%" },
              { label: "Demandes de stages", value: "20%" },
              { label: "Reconversion professionnelle", value: "10%" },
              { label: "Orientation professionnelle", value: "5%" },
              { label: "Autres demandes", value: "5%" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{item.label}</span>
                <span className="font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;