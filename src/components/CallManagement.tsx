import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Phone, PhoneCall, PhoneOff, Mic, MicOff, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const CallManagement = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);
  const [volume, setVolume] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCall = () => {
    if (!phoneNumber) {
      toast.error("Veuillez entrer un numéro de téléphone");
      return;
    }
    setIsCallActive(!isCallActive);
    if (!isCallActive) {
      toast.success(`Appel en cours vers ${phoneNumber}`);
    } else {
      toast.info("Appel terminé");
    }
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Gestion des Appels</h2>
        <Badge variant={isCallActive ? "destructive" : "secondary"}>
          {isCallActive ? "En appel" : "Disponible"}
        </Badge>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Numéro de téléphone</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+33 1 23 45 67 89"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div className="flex justify-between items-center gap-4">
          <Button
            variant={isCallActive ? "destructive" : "default"}
            className="flex-1"
            onClick={handleCall}
          >
            {isCallActive ? (
              <>
                <PhoneOff className="mr-2 h-4 w-4" />
                Raccrocher
              </>
            ) : (
              <>
                <Phone className="mr-2 h-4 w-4" />
                Appeler
              </>
            )}
          </Button>
        </div>

        {isCallActive && (
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? (
                <MicOff className="h-4 w-4" />
              ) : (
                <Mic className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setVolume(!volume)}
            >
              {volume ? (
                <Volume2 className="h-4 w-4" />
              ) : (
                <VolumeX className="h-4 w-4" />
              )}
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};