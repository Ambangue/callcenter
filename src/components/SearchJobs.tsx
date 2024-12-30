import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";

export const SearchJobs = () => {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">Rechercher des offres d'emploi</h2>
      <div className="flex gap-2">
        <Input 
          placeholder="Titre, compétences ou entreprise..." 
          className="flex-1"
        />
        <Button>
          <Search className="h-4 w-4 mr-2" />
          Rechercher
        </Button>
      </div>
    </Card>
  );
};