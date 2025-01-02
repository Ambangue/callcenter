import { DashboardNav } from "@/components/DashboardNav";
import { ViciDialDashboard } from "@/components/vicidial/ViciDialDashboard";
import { CallCenterSection } from "@/components/dashboard/CallCenterSection";
import { StatsSection } from "@/components/dashboard/StatsSection";
import { TaskSection } from "@/components/dashboard/TaskSection";
import { ConfigSection } from "@/components/dashboard/ConfigSection";

const Dashboard = () => {
  console.log("Rendering Dashboard page with enhanced features");
  
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />
      <main className="pt-16 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold">Centre d'Appels ACPE</h1>
          
          <ViciDialDashboard />
          <CallCenterSection />
          <StatsSection />
          <TaskSection />
          <ConfigSection />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;