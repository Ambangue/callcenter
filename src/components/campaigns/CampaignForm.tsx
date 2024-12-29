import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const CampaignForm = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    target_calls: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Creating new campaign with data:", formData);
      const { data, error } = await supabase.from("call_campaigns").insert([
        {
          name: formData.name,
          description: formData.description,
          target_calls: parseInt(formData.target_calls),
          status: "draft",
        },
      ]);

      if (error) throw error;

      console.log("Campaign created successfully:", data);
      toast({
        title: "Succès",
        description: "La campagne a été créée avec succès",
      });

      // Reset form
      setFormData({
        name: "",
        description: "",
        target_calls: "",
      });
    } catch (error) {
      console.error("Error creating campaign:", error);
      toast({
        title: "Erreur",
        description: "Impossible de créer la campagne",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Nom de la campagne</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="target_calls">Objectif d'appels</Label>
        <Input
          id="target_calls"
          type="number"
          value={formData.target_calls}
          onChange={(e) =>
            setFormData({ ...formData, target_calls: e.target.value })
          }
          required
        />
      </div>

      <Button type="submit" disabled={loading}>
        {loading ? "Création en cours..." : "Créer la campagne"}
      </Button>
    </form>
  );
};