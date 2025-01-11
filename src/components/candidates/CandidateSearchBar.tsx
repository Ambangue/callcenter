import { Search } from "lucide-react";
import { Input } from "../ui/input";

interface CandidateSearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const CandidateSearchBar = ({ searchTerm, onSearchChange }: CandidateSearchBarProps) => {
  console.log("Rendering CandidateSearchBar with search term:", searchTerm);
  
  return (
    <div className="relative flex-1 max-w-sm">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Rechercher un candidat..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-8"
      />
    </div>
  );
};