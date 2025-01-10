import { LiveAlerts } from "@/components/alerts/LiveAlerts";
import { AIAssistant } from "@/components/AIAssistant";
import { SearchJobs } from "@/components/SearchJobs";

export const SidebarSection = () => {
  return (
    <div className="space-y-6">
      <LiveAlerts />
      
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow animate-fade-in delay-200">
        <h2 className="text-2xl font-bold mb-4">Assistant IA</h2>
        <AIAssistant />
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow animate-fade-in delay-300">
        <h2 className="text-2xl font-bold mb-4">Recherche usager</h2>
        <SearchJobs />
      </div>
    </div>
  );
};