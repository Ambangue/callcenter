import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogOut, Home, Phone, MessageSquare, BarChart3 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export const DashboardNav = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-30 top-0">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <img src="/anpe-logo.png" alt="ANPE Logo" className="h-8 mr-3" />
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
              ACPE Dashboard
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Home className="mr-2 h-4 w-4" />
                Accueil
              </Button>
              <Button variant="ghost" size="sm">
                <Phone className="mr-2 h-4 w-4" />
                Appels
              </Button>
              <Button variant="ghost" size="sm">
                <MessageSquare className="mr-2 h-4 w-4" />
                Messages
              </Button>
              <Button variant="ghost" size="sm">
                <BarChart3 className="mr-2 h-4 w-4" />
                Statistiques
              </Button>
            </div>
            
            <Button 
              variant="destructive" 
              size="sm"
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Déconnexion
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};