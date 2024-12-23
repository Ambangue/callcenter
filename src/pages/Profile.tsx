import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { User, Mail, Phone, MapPin, Camera } from "lucide-react";
import { ProfileStats } from "@/components/profile/ProfileStats";
import { ProfileActivity } from "@/components/profile/ProfileActivity";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Admin User",
    email: "admin@anpe.bj",
    phone: "+229 21 30 68 36",
    address: "Cotonou, Bénin",
    avatar: "/placeholder.svg"
  });

  const handleSave = () => {
    setIsEditing(false);
    toast.success("Profil mis à jour avec succès");
  };

  return (
    <div className="container mx-auto py-8 px-4 animate-fade-in">
      <h1 className="text-3xl font-bold mb-8">Profil Utilisateur</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="p-6 col-span-1">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <img
                src={profileData.avatar}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute bottom-0 right-0 rounded-full"
                onClick={() => toast.info("Fonctionnalité à venir")}
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="text-center">
              <h2 className="text-xl font-semibold">{profileData.name}</h2>
              <p className="text-muted-foreground">Administrateur</p>
            </div>

            <Button
              className="w-full"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Annuler" : "Modifier le profil"}
            </Button>
          </div>
        </Card>

        <Card className="p-6 col-span-1 md:col-span-2">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <User className="h-5 w-5 text-muted-foreground" />
                {isEditing ? (
                  <Input
                    value={profileData.name}
                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                  />
                ) : (
                  <span>{profileData.name}</span>
                )}
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-muted-foreground" />
                {isEditing ? (
                  <Input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  />
                ) : (
                  <span>{profileData.email}</span>
                )}
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-muted-foreground" />
                {isEditing ? (
                  <Input
                    value={profileData.phone}
                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                  />
                ) : (
                  <span>{profileData.phone}</span>
                )}
              </div>
              
              <div className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                {isEditing ? (
                  <Input
                    value={profileData.address}
                    onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                  />
                ) : (
                  <span>{profileData.address}</span>
                )}
              </div>
            </div>

            {isEditing && (
              <Button onClick={handleSave}>Enregistrer les modifications</Button>
            )}
          </div>
        </Card>

        <ProfileStats />
        <ProfileActivity />
      </div>
    </div>
  );
};

export default Profile;