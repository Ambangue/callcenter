import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Home,
  Users,
  BarChart2,
  Settings,
  Bell,
  Search,
  HelpCircle,
  MessageSquare,
} from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { ThemeToggle } from "./ThemeToggle";
import { NotificationCenter } from "./NotificationCenter";

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: "Tableau de bord", path: "/dashboard" },
    { icon: Users, label: "Profil", path: "/profile" },
    { icon: BarChart2, label: "Statistiques", path: "/statistics" },
    { icon: MessageSquare, label: "Messages", path: "/messages" },
    { icon: Settings, label: "Paramètres", path: "/settings" },
    { icon: HelpCircle, label: "Aide", path: "/help" },
  ];

  return (
    <div className="flex h-screen flex-col border-r bg-sidebar-background">
      <div className="flex h-14 items-center border-b px-4">
        <Search className="h-4 w-4 text-sidebar-foreground/50" />
        <input
          type="search"
          placeholder="Rechercher..."
          className="flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-sidebar-foreground/50"
        />
        <NotificationCenter />
        <ThemeToggle />
      </div>
      <ScrollArea className="flex-1 px-2">
        <div className="space-y-2 py-4">
          {menuItems.map((item) => (
            <Button
              key={item.path}
              variant="ghost"
              className={cn(
                "w-full justify-start",
                location.pathname === item.path &&
                  "bg-sidebar-accent text-sidebar-accent-foreground"
              )}
              onClick={() => navigate(item.path)}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </div>
      </ScrollArea>
      <div className="border-t p-4">
        <p className="text-xs text-sidebar-foreground/50">
          © 2024 ANPE. Tous droits réservés.
        </p>
      </div>
    </div>
  );
};