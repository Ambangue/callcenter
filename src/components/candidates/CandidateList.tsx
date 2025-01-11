import { useState } from "react";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { useToast } from "../../hooks/use-toast";
import { CandidateSearchBar } from "./CandidateSearchBar";
import { CandidateTable } from "./CandidateTable";

interface Candidate {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: string;
  lastContact: string;
}

export const CandidateList = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  
  const candidates: Candidate[] = [
    {
      id: 1,
      name: "Jean Dupont",
      email: "jean.dupont@email.com",
      phone: "+229 97 12 34 56",
      status: "En cours",
      lastContact: "2024-02-20"
    },
    {
      id: 2,
      name: "Marie Martin",
      email: "marie.martin@email.com",
      phone: "+229 97 98 76 54",
      status: "Entretien planifié",
      lastContact: "2024-02-19"
    }
  ];

  const handleExport = () => {
    toast({
      title: "Export en cours",
      description: "Le fichier sera téléchargé dans quelques instants."
    });
  };

  const filteredCandidates = candidates.filter(candidate =>
    Object.values(candidate).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  console.log("Rendering CandidateList with filtered candidates:", filteredCandidates.length);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <CandidateSearchBar 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        <Button onClick={handleExport}>
          <Download className="mr-2 h-4 w-4" />
          Exporter
        </Button>
      </div>

      <CandidateTable candidates={filteredCandidates} />
    </div>
  );
};