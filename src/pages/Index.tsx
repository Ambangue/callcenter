import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SearchJobs } from "@/components/SearchJobs";
import { RecentApplications } from "@/components/RecentApplications";
import { AIAssistant } from "@/components/AIAssistant";
import { JobCategories } from "@/components/JobCategories";
import { AnimatedStats } from "@/components/dashboard/AnimatedStats";
import { LiveAlerts } from "@/components/alerts/LiveAlerts";
import { DataGlobe } from "@/components/visualizations/DataGlobe";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Bienvenue sur ACPE OmniCall",
        description: "Centre d'appels unifié pour un service optimal",
      });
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="bg-primary text-white py-16 animate-fade-in relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            ACPE OmniCall Center
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in delay-100">
            Plateforme unifiée pour une gestion optimale des interactions
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 -mt-8">
        <div className="mb-8">
          <AnimatedStats />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;