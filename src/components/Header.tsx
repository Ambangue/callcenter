import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <Phone className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">ACPE Call Center</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="ghost">Tableau de bord</Button>
            </Link>
            <Link to="/profile">
              <Button variant="outline" size="icon">
                <User className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};