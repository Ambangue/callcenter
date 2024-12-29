import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, List, ChartBar } from "lucide-react";
import { CampaignList } from "./CampaignList";
import { CampaignForm } from "./CampaignForm";
import { CampaignStats } from "./CampaignStats";
import { useToast } from "@/components/ui/use-toast";

export const CampaignManagement = () => {
  const [view, setView] = useState<"list" | "new" | "stats">("list");
  const { toast } = useToast();
  
  console.log("Rendering CampaignManagement component with view:", view);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Gestion des Campagnes</h1>
          <div className="flex gap-2">
            <Button
              variant={view === "list" ? "default" : "outline"}
              onClick={() => setView("list")}
            >
              <List className="h-4 w-4 mr-2" />
              Liste
            </Button>
            <Button
              variant={view === "new" ? "default" : "outline"}
              onClick={() => setView("new")}
            >
              <Plus className="h-4 w-4 mr-2" />
              Nouvelle Campagne
            </Button>
            <Button
              variant={view === "stats" ? "default" : "outline"}
              onClick={() => setView("stats")}
            >
              <ChartBar className="h-4 w-4 mr-2" />
              Statistiques
            </Button>
          </div>
        </div>

        <Card className="p-6">
          {view === "list" && <CampaignList />}
          {view === "new" && <CampaignForm />}
          {view === "stats" && <CampaignStats />}
        </Card>
      </div>
    </div>
  );
};