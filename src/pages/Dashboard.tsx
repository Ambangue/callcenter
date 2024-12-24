import { DashboardNav } from "@/components/DashboardNav";
import { EnhancedDashboard } from "@/components/EnhancedDashboard";

const Dashboard = () => {
  console.log("Rendering Dashboard page");
  
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />
      <main className="pt-16">
        <EnhancedDashboard />
      </main>
    </div>
  );
};

export default Dashboard;