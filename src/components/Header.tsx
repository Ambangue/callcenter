import { LogIn, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Header = () => {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4">
        {/* Barre supérieure avec les informations de contact */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-white/10">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>+229 21 30 68 36</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>contact@anpe.bj</span>
            </div>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            <span>Lun - Ven: 8:00 - 17:00</span>
          </div>
        </div>

        {/* Barre principale avec logo et bouton de connexion */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-4">
            <img 
              src="/anpe-logo.png" 
              alt="ANPE Logo" 
              className="h-12 w-auto transition-transform duration-200 hover:scale-105"
            />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">ACPE Agence Congolaise Pour l'Emploi</h1>
              <p className="text-sm text-white/80 hidden md:block">
                Votre partenaire pour l'emploi
              </p>
            </div>
          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="flex items-center gap-2 hover:bg-white hover:text-primary transition-colors"
                >
                  <LogIn className="h-4 w-4" />
                  <span className="hidden md:inline">Connexion</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Connectez-vous à votre espace</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </header>
  );
};