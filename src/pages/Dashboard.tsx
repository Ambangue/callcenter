import { DashboardNav } from "@/components/DashboardNav";
import { DashboardStats } from "@/components/DashboardStats";
import { NotificationCenter } from "@/components/NotificationCenter";
import { GlobalSearch } from "@/components/GlobalSearch";
import { UserProfile } from "@/components/UserProfile";
import { ThemeToggle } from "@/components/ThemeToggle";
import { DataFilter } from "@/components/DataFilter";
import { ActivityLog } from "@/components/ActivityLog";
import { TaskList } from "@/components/TaskList";
import { QuickMessage } from "@/components/QuickMessage";
import { CallsChart } from "@/components/CallsChart";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />
      
      <main className="pt-16 px-4">
        <div className="container mx-auto space-y-8">
          {/* Header avec recherche et notifications */}
          <div className="flex items-center justify-between mt-8">
            <GlobalSearch />
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <NotificationCenter />
            </div>
          </div>

          {/* Statistiques */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Vue d'ensemble</h2>
            <DashboardStats />
          </section>

          {/* Graphique des appels */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Statistiques des appels</h2>
            <CallsChart />
          </section>

          {/* Contenu principal avec filtres et activités */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <TaskList />
              <ActivityLog />
            </div>
            
            <div className="space-y-6">
              <QuickMessage />
              <div className="bg-card rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold mb-4">Filtres</h3>
                <DataFilter />
              </div>
              <UserProfile />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;