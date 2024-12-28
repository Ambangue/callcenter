import { DashboardNav } from "@/components/DashboardNav";
import { QuickStats } from "@/components/QuickStats";
import { JobCategories } from "@/components/JobCategories";
import { RecentApplications } from "@/components/RecentApplications";
import { UpcomingInterviews } from "@/components/UpcomingInterviews";
import { SearchJobs } from "@/components/SearchJobs";
import { ActivityLog } from "@/components/ActivityLog";
import { AdvancedStats } from "@/components/AdvancedStats";
import { TaskList } from "@/components/TaskList";
import { DataFilter } from "@/components/DataFilter";
import { DashboardStats } from "@/components/DashboardStats";

const Dashboard = () => {
  console.log("Rendering Dashboard page");
  
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />
      <main className="pt-16 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold">Tableau de bord ACPE</h1>
          
          <SearchJobs />
          <DashboardStats />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <AdvancedStats />
            </div>
            <div>
              <ActivityLog />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TaskList />
            <div className="space-y-6">
              <DataFilter />
              <QuickStats />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <JobCategories />
            <RecentApplications />
          </div>
          
          <UpcomingInterviews />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;