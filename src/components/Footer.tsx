import { Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Phone className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold">ACPE Call Center</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ACPE. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};