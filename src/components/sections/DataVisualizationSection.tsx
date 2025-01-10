import { DataGlobe } from "@/components/visualizations/DataGlobe";
import { RecentApplications } from "@/components/RecentApplications";
import { JobCategories } from "@/components/JobCategories";

export const DataVisualizationSection = () => {
  return (
    <div className="md:col-span-2 space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
        <DataGlobe />
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow animate-fade-in">
        <h2 className="text-2xl font-bold mb-4">File d'attente des appels</h2>
        <RecentApplications />
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow animate-fade-in delay-100">
        <h2 className="text-2xl font-bold mb-4">Historique des interactions</h2>
        <JobCategories />
      </div>
    </div>
  );
};