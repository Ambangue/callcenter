import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SearchJobs } from "@/components/SearchJobs";
import { JobCategories } from "@/components/JobCategories";
import { RecentApplications } from "@/components/RecentApplications";
import { AIAssistant } from "@/components/AIAssistant";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    // Simuler un chargement initial
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Bienvenue sur ANPE Connect",
        description: "Trouvez votre prochain emploi ou le candidat idéal.",
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Section Héro */}
      <section className="bg-primary text-white py-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Votre Carrière, Notre Mission
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Connectez-vous avec les meilleures opportunités professionnelles
          </p>
          <div className="max-w-3xl mx-auto">
            <SearchJobs />
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 -mt-8">
        {/* Section Principale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {/* Catégories d'emploi avec animation */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow animate-fade-in">
              <h2 className="text-2xl font-bold mb-4">Catégories Populaires</h2>
              <JobCategories />
            </div>
            
            {/* Candidatures récentes avec animation */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow animate-fade-in delay-100">
              <h2 className="text-2xl font-bold mb-4">Candidatures Récentes</h2>
              <RecentApplications />
            </div>
          </div>

          {/* Barre latérale */}
          <div className="space-y-6">
            {/* Assistant IA avec animation */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow animate-fade-in delay-200">
              <h2 className="text-2xl font-bold mb-4">Assistant IA</h2>
              <AIAssistant />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;