import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search, Download } from "lucide-react";
import { useToast } from "../../hooks/use-toast";

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

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher un candidat..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Button onClick={handleExport}>
          <Download className="mr-2 h-4 w-4" />
          Exporter
        </Button>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Téléphone</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Dernier contact</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCandidates.map((candidate) => (
              <TableRow key={candidate.id}>
                <TableCell>{candidate.name}</TableCell>
                <TableCell>{candidate.email}</TableCell>
                <TableCell>{candidate.phone}</TableCell>
                <TableCell>{candidate.status}</TableCell>
                <TableCell>{candidate.lastContact}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};