import { LogIn } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-primary text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src="/anpe-logo.png" alt="ANPE Logo" className="h-12" />
          <h1 className="text-xl font-bold">Agence Nationale Pour l'Emploi</h1>
        </div>
        <div className="flex items-center gap-2">
          <LogIn className="h-5 w-5" />
          <span>Connexion</span>
        </div>
      </div>
    </header>
  );
};