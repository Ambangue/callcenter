import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Campaign {
  id: string;
  name: string;
  description: string;
  status: string;
  start_date: string;
  end_date: string;
  target_calls: number;
  completed_calls: number;
  success_rate: number;
}

export const CampaignList = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        console.log("Fetching campaigns...");
        const { data, error } = await supabase
          .from("call_campaigns")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        console.log("Fetched campaigns:", data);
        setCampaigns(data || []);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
        toast({
          title: "Erreur",
          description: "Impossible de charger les campagnes",
          variant: "destructive",
        });
      }
    };

    fetchCampaigns();
  }, [toast]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-green-500";
      case "completed":
        return "text-blue-500";
      case "draft":
        return "text-gray-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead>Objectif</TableHead>
            <TableHead>Réalisés</TableHead>
            <TableHead>Taux de succès</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaigns.map((campaign) => (
            <TableRow key={campaign.id}>
              <TableCell className="font-medium">{campaign.name}</TableCell>
              <TableCell>
                <span className={getStatusColor(campaign.status)}>
                  {campaign.status}
                </span>
              </TableCell>
              <TableCell>{campaign.target_calls}</TableCell>
              <TableCell>{campaign.completed_calls}</TableCell>
              <TableCell>{campaign.success_rate}%</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      // TODO: Implémenter la modification
                      toast({
                        description: "Fonctionnalité à venir",
                      });
                    }}
                  >
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      // TODO: Implémenter la suppression
                      toast({
                        description: "Fonctionnalité à venir",
                      });
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};