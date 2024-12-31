import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone, PhoneCall, PhoneOff, Mic, MicOff, Volume2, VolumeX, User, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const ViciDialDashboard = () => {
  const [customerInfo, setCustomerInfo] = useState({
    titre: "",
    prenom: "",
    nom: "",
    adresse1: "",
    adresse2: "",
    ville: "",
    codePostal: "",
    telephone: "",
    telephoneAlt: "",
    email: "",
    genre: "",
    commentaires: "",
    notesAppel: ""
  });

  const [callStatus, setCallStatus] = useState({
    isActive: false,
    isMuted: false,
    hasAudio: true
  });

  const [agentStats, setAgentStats] = useState({
    totalCalls: 0,
    successfulCalls: 0,
    averageCallTime: "0:00"
  });

  useEffect(() => {
    console.log("Initializing ViciDial dashboard");
    // Simulation des statistiques pour la démo
    setAgentStats({
      totalCalls: 45,
      successfulCalls: 32,
      averageCallTime: "4:30"
    });
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDialNext = () => {
    toast.info("Composition du numéro suivant...");
    setCallStatus(prev => ({ ...prev, isActive: true }));
  };

  const handleHangup = () => {
    toast.info("Appel terminé");
    setCallStatus(prev => ({ ...prev, isActive: false }));
  };

  const toggleMute = () => {
    setCallStatus(prev => ({ ...prev, isMuted: !prev.isMuted }));
    toast.info(callStatus.isMuted ? "Micro activé" : "Micro désactivé");
  };

  const toggleAudio = () => {
    setCallStatus(prev => ({ ...prev, hasAudio: !prev.hasAudio }));
    toast.info(callStatus.hasAudio ? "Audio désactivé" : "Audio activé");
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Interface Agent ViciDial</h2>
          <p className="text-muted-foreground">Session ID: 8600051</p>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant={callStatus.isActive ? "destructive" : "secondary"}>
            {callStatus.isActive ? "En appel" : "Disponible"}
          </Badge>
          <span className="text-sm text-muted-foreground">Campagne: TOPCALL</span>
          <Button variant="destructive" size="sm">DÉCONNEXION</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-blue-500" />
            <div>
              <p className="text-sm text-muted-foreground">Appels totaux</p>
              <p className="text-xl font-bold">{agentStats.totalCalls}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <PhoneCall className="h-5 w-5 text-green-500" />
            <div>
              <p className="text-sm text-muted-foreground">Appels réussis</p>
              <p className="text-xl font-bold">{agentStats.successfulCalls}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-purple-500" />
            <div>
              <p className="text-sm text-muted-foreground">Temps moyen</p>
              <p className="text-xl font-bold">{agentStats.averageCallTime}</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex gap-4">
            {!callStatus.isActive ? (
              <Button 
                className="w-full bg-green-600 hover:bg-green-700" 
                onClick={handleDialNext}
              >
                <Phone className="mr-2 h-4 w-4" />
                COMPOSER PROCHAIN NUMÉRO
              </Button>
            ) : (
              <Button 
                variant="destructive" 
                className="w-full" 
                onClick={handleHangup}
              >
                <PhoneOff className="mr-2 h-4 w-4" />
                RACCROCHER
              </Button>
            )}
          </div>

          {callStatus.isActive && (
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleMute}
              >
                {callStatus.isMuted ? (
                  <MicOff className="h-4 w-4" />
                ) : (
                  <Mic className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={toggleAudio}
              >
                {callStatus.hasAudio ? (
                  <Volume2 className="h-4 w-4" />
                ) : (
                  <VolumeX className="h-4 w-4" />
                )}
              </Button>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Prénom</Label>
              <Input 
                value={customerInfo.prenom}
                onChange={(e) => handleInputChange("prenom", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Nom</Label>
              <Input 
                value={customerInfo.nom}
                onChange={(e) => handleInputChange("nom", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Adresse</Label>
            <Input 
              value={customerInfo.adresse1}
              onChange={(e) => handleInputChange("adresse1", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Ville</Label>
              <Input 
                value={customerInfo.ville}
                onChange={(e) => handleInputChange("ville", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Code Postal</Label>
              <Input 
                value={customerInfo.codePostal}
                onChange={(e) => handleInputChange("codePostal", e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Téléphone</Label>
              <Input 
                value={customerInfo.telephone}
                onChange={(e) => handleInputChange("telephone", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Téléphone Alt.</Label>
              <Input 
                value={customerInfo.telephoneAlt}
                onChange={(e) => handleInputChange("telephoneAlt", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Email</Label>
            <Input 
              type="email"
              value={customerInfo.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Genre</Label>
            <Select 
              value={customerInfo.genre}
              onValueChange={(value) => handleInputChange("genre", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner le genre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="N">Non défini</SelectItem>
                <SelectItem value="M">Masculin</SelectItem>
                <SelectItem value="F">Féminin</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Commentaires</Label>
            <Textarea 
              value={customerInfo.commentaires}
              onChange={(e) => handleInputChange("commentaires", e.target.value)}
              className="min-h-[100px]"
              placeholder="Ajouter des commentaires..."
            />
          </div>

          <div className="space-y-2">
            <Label>Notes d'appel</Label>
            <Textarea 
              value={customerInfo.notesAppel}
              onChange={(e) => handleInputChange("notesAppel", e.target.value)}
              className="min-h-[100px]"
              placeholder="Ajouter des notes d'appel..."
            />
          </div>
        </div>
      </div>
    </Card>
  );
};