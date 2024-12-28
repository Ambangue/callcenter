import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

export const SearchJobs = () => {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Rechercher un emploi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Titre du poste ou mot-clé"
              className="pl-9"
            />
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Ville ou région"
              className="pl-9"
            />
          </div>
          <div className="relative">
            <Briefcase className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Secteur d'activité"
              className="pl-9"
            />
          </div>
        </div>
        <Button className="w-full">
          Rechercher
        </Button>
      </div>
    </Card>
  );
};