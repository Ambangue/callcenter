import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SearchJobs } from "@/components/SearchJobs";
import { RecentApplications } from "@/components/RecentApplications";
import { AIAssistant } from "@/components/AIAssistant";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Phone, Users, Clock, BarChart } from "lucide-react";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

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

  console.log("Rendering Index page");
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const callCenterStats = [
    {
      icon: Phone,
      label: "Appels en attente",
      value: "12",
      trend: "+2",
      color: "text-blue-500"
    },
    {
      icon: Users,
      label: "Agents actifs",
      value: "8",
      trend: "-1",
      color: "text-green-500"
    },
    {
      icon: Clock,
      label: "Temps moyen d'attente",
      value: "2:30",
      trend: "-0:15",
      color: "text-orange-500"
    },
    {
      icon: BarChart,
      label: "Taux de résolution",
      value: "92%",
      trend: "+2%",
      color: "text-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Section Héro */}
      <section className="bg-primary text-white py-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            ACPE OmniCall Center
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Plateforme unifiée pour une gestion optimale des interactions
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 -mt-8">
        {/* Statistiques en temps réel */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {callCenterStats.map((stat, index) => (
            <Card key={index} className="p-6 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
                </div>
                <div className={`rounded-full p-3 bg-gray-100 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-4 text-sm">
                <span className={stat.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                  {stat.trend}
                </span>
                <span className="text-muted-foreground ml-1">depuis 1h</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Section Principale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {/* File d'attente et gestion des appels */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow animate-fade-in">
              <h2 className="text-2xl font-bold mb-4">File d'attente des appels</h2>
              <RecentApplications />
            </div>
            
            {/* Historique des interactions */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow animate-fade-in delay-100">
              <h2 className="text-2xl font-bold mb-4">Historique des interactions</h2>
              <JobCategories />
            </div>
          </div>

          {/* Barre latérale */}
          <div className="space-y-6">
            {/* Assistant IA */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow animate-fade-in delay-200">
              <h2 className="text-2xl font-bold mb-4">Assistant IA</h2>
              <AIAssistant />
            </div>
            
            {/* Recherche rapide */}
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