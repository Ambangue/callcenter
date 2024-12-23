import { Bell } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useState } from "react";

export const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Nouvelle demande",
      message: "Une nouvelle demande a été soumise",
      time: "Il y a 5 min",
    },
    {
      id: 2,
      title: "Mise à jour système",
      message: "Le système a été mis à jour",
      time: "Il y a 1 heure",
    },
  ]);

  const clearNotifications = () => {
    setNotifications([]);
    console.log("Notifications cleared");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {notifications.length > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
              {notifications.length}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <h3 className="font-semibold">Notifications</h3>
          <Button variant="ghost" size="sm" onClick={clearNotifications}>
            Tout effacer
          </Button>
        </div>
        {notifications.length === 0 ? (
          <div className="p-4 text-center text-sm text-gray-500">
            Aucune notification
          </div>
        ) : (
          notifications.map((notification) => (
            <DropdownMenuItem key={notification.id} className="p-4 cursor-pointer">
              <div>
                <div className="font-medium">{notification.title}</div>
                <div className="text-sm text-gray-500">{notification.message}</div>
                <div className="text-xs text-gray-400 mt-1">{notification.time}</div>
              </div>
            </DropdownMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};