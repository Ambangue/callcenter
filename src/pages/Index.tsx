import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { LoadingScreen } from "@/components/LoadingScreen";
import { HeroSection } from "@/components/sections/HeroSection";
import { DataVisualizationSection } from "@/components/sections/DataVisualizationSection";
import { SidebarSection } from "@/components/sections/SidebarSection";
import ErrorBoundary from "@/components/ErrorBoundary";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    const initializeApp = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading(false);
        
        toast({
          description: "Bienvenue sur ACPE OmniCall - Centre d'appels unifié",
        });
      } catch (error) {
        console.error("Erreur lors de l'initialisation:", error);
        toast({
          description: "Une erreur est survenue lors du chargement",
          variant: "destructive",
        });
      }
    };

    initializeApp();
  }, [toast]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background">
        <HeroSection />
        <DataVisualizationSection />
        <SidebarSection />
      </div>
    </ErrorBoundary>
  );
};

export default Index;