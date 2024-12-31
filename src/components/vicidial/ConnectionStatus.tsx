import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";

interface ConnectionStatusProps {
  viciDialStatus: boolean;
  asteriskStatus: boolean;
  isLoading: boolean;
}

export const ConnectionStatus = ({ 
  viciDialStatus, 
  asteriskStatus, 
  isLoading 
}: ConnectionStatusProps) => {
  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">État des Connexions</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span>ViciDial</span>
          {isLoading ? (
            <Badge variant="outline" className="flex items-center">
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Connexion...
            </Badge>
          ) : viciDialStatus ? (
            <Badge variant="success" className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Connecté
            </Badge>
          ) : (
            <Badge variant="destructive" className="flex items-center">
              <XCircle className="h-4 w-4 mr-2" />
              Déconnecté
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span>Asterisk</span>
          {isLoading ? (
            <Badge variant="outline" className="flex items-center">
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Connexion...
            </Badge>
          ) : asteriskStatus ? (
            <Badge variant="success" className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Connecté
            </Badge>
          ) : (
            <Badge variant="destructive" className="flex items-center">
              <XCircle className="h-4 w-4 mr-2" />
              Déconnecté
            </Badge>
          )}
        </div>
      </div>
    </Card>
  );
};