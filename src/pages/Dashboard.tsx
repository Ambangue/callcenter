import { DashboardStats } from "@/components/DashboardStats";
import { CallsChart } from "@/components/CallsChart";
import { Card } from "@/components/ui/card";
import { DashboardNav } from "@/components/DashboardNav";
import { Footer } from "@/components/Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      
      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto space-y-6">
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
                  { label: "Demandeurs d'emploi", value: "45%", color: "bg-blue-500" },
                  { label: "Demandes de récépissé", value: "15%", color: "bg-green-500" },
                  { label: "Demandes de stages", value: "20%", color: "bg-yellow-500" },
                  { label: "Reconversion professionnelle", value: "10%", color: "bg-purple-500" },
                  { label: "Orientation professionnelle", value: "5%", color: "bg-pink-500" },
                  { label: "Autres demandes", value: "5%", color: "bg-gray-500" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className={`w-2 h-2 rounded-full ${item.color}`} />
                    <span className="flex-1 text-sm text-gray-600">{item.label}</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;