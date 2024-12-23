import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { User, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "../hooks/use-toast";

export const UserProfile = () => {
  const { toast } = useToast();
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@anpe.bj",
    phone: "+229 21 30 68 36",
    address: "Cotonou, Bénin",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    toast({
      title: "Profil mis à jour",
      description: "Vos informations ont été mises à jour avec succès.",
    });
    console.log("Profile updated:", profile);
  };

  return (
    <Card className="p-6">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Profil Utilisateur</h2>
          <Button
            variant={isEditing ? "destructive" : "default"}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Annuler" : "Modifier"}
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4">
            <div className="flex items-center space-x-4">
              <User className="h-5 w-5 text-gray-500" />
              {isEditing ? (
                <div className="flex-1">
                  <Label htmlFor="name">Nom</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) =>
                      setProfile({ ...profile, name: e.target.value })
                    }
                  />
                </div>
              ) : (
                <span>{profile.name}</span>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="h-5 w-5 text-gray-500" />
              {isEditing ? (
                <div className="flex-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) =>
                      setProfile({ ...profile, email: e.target.value })
                    }
                  />
                </div>
              ) : (
                <span>{profile.email}</span>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5 text-gray-500" />
              {isEditing ? (
                <div className="flex-1">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) =>
                      setProfile({ ...profile, phone: e.target.value })
                    }
                  />
                </div>
              ) : (
                <span>{profile.phone}</span>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="h-5 w-5 text-gray-500" />
              {isEditing ? (
                <div className="flex-1">
                  <Label htmlFor="address">Adresse</Label>
                  <Input
                    id="address"
                    value={profile.address}
                    onChange={(e) =>
                      setProfile({ ...profile, address: e.target.value })
                    }
                  />
                </div>
              ) : (
                <span>{profile.address}</span>
              )}
            </div>
          </div>

          {isEditing && (
            <Button type="submit" className="w-full">
              Enregistrer les modifications
            </Button>
          )}
        </form>
      </div>
    </Card>
  );
};