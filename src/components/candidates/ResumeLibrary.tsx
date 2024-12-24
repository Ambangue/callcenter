import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card } from "../ui/card";
import { Upload, Search, Download } from "lucide-react";
import { useToast } from "../../hooks/use-toast";

export const ResumeLibrary = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      toast({
        title: "CV téléchargé",
        description: `${file.name} a été ajouté à la CV-thèque.`
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher un CV..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          <label htmlFor="cv-upload" className="cursor-pointer">
            Ajouter un CV
          </label>
          <input
            id="cv-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={handleFileUpload}
          />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Exemple de CV */}
        <Card className="p-4 space-y-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Jean Dupont</h3>
              <p className="text-sm text-muted-foreground">Développeur Web</p>
              <p className="text-sm text-muted-foreground">Ajouté le 20/02/2024</p>
            </div>
            <Button variant="ghost" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};