import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SearchJobs } from "@/components/SearchJobs";
import { JobCategories } from "@/components/JobCategories";
import { RecentApplications } from "@/components/RecentApplications";
import { AIAssistant } from "@/components/AIAssistant";

const Index = () => {
  console.log("Rendering Index page");
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <SearchJobs />
            <JobCategories />
            <RecentApplications />
          </div>
          <div className="space-y-6">
            <AIAssistant />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;