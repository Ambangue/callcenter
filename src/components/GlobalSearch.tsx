import { Search } from "lucide-react";
import { Input } from "./ui/input";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { useState } from "react";

export const GlobalSearch = () => {
  const [open, setOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([
    { id: 1, title: "Tableau de bord", type: "page", url: "/dashboard" },
    { id: 2, title: "Profil", type: "page", url: "/profile" },
    { id: 3, title: "Paramètres", type: "page", url: "/settings" },
  ]);

  return (
    <>
      <div className="relative w-full max-w-sm">
        <Input
          type="text"
          placeholder="Rechercher..."
          className="pl-10"
          onClick={() => setOpen(true)}
        />
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Tapez votre recherche..." />
        <CommandList>
          <CommandEmpty>Aucun résultat trouvé.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {searchResults.map((result) => (
              <CommandItem key={result.id}>
                <span>{result.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};