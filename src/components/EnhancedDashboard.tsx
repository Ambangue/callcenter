import { AdvancedStats } from "./AdvancedStats";
import { DataTable } from "./DataTable";
import { TaskList } from "./TaskList";
import { ActivityLog } from "./ActivityLog";
import { QuickMessage } from "./QuickMessage";
import { NotificationCenter } from "./NotificationCenter";
import { GlobalSearch } from "./GlobalSearch";
import { DashboardStats } from "./DashboardStats";

export const EnhancedDashboard = () => {
  console.log("Rendering EnhancedDashboard component");
  
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* En-tête du tableau de bord */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Tableau de bord ANPE</h1>
          <div className="flex items-center space-x-4">
            <GlobalSearch />
            <NotificationCenter />
          </div>
        </div>

        {/* Statistiques rapides */}
        <DashboardStats />

        {/* Graphiques avancés */}
        <AdvancedStats />

        {/* Section principale */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tableau de données et activités */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Candidats récents</h2>
              <DataTable />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TaskList />
              <ActivityLog />
            </div>
          </div>

          {/* Barre latérale */}
          <div className="space-y-6">
            <QuickMessage />
            <div className="bg-card rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Activités récentes</h2>
              <ActivityLog />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};