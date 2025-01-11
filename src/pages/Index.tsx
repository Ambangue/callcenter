import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedStats } from "@/components/dashboard/AnimatedStats";
import { useToast } from "@/hooks/use-toast";
import { LoadingScreen } from "@/components/LoadingScreen";
import { HeroSection } from "@/components/sections/HeroSection";
import { DataVisualizationSection } from "@/components/sections/DataVisualizationSection";
import { SidebarSection } from "@/components/sections/SidebarSection";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    // Simuler un temps de chargement pour l'initialisation
    const initializeApp = async () => {
      try {
        // Attendre que les composants soient chargés
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading(false);
        
        toast({
          title: "Bienvenue sur ACPE OmniCall",
          description: "Centre d'appels unifié pour un service optimal",
        });
      } catch (error) {
        console.error("Erreur lors de l'initialisation:", error);
        toast({
          title: "Erreur",
          description: "Une erreur est survenue lors du chargement",
          variant: "destructive",
        });
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background">
        <Header />
        
        <HeroSection />

        <main className="container mx-auto px-4 py-8 -mt-8">
          <div className="mb-8">
            <AnimatedStats />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DataVisualizationSection />
            <SidebarSection />
          </div>
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default Index;