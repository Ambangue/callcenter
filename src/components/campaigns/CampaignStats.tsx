import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card } from "@/components/ui/card";

export const CampaignStats = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        console.log("Fetching campaign stats...");
        const { data, error } = await supabase
          .from("call_campaigns")
          .select("*")
          .order("created_at", { ascending: true });

        if (error) throw error;

        const formattedStats = data?.map((campaign) => ({
          name: campaign.name,
          objectif: campaign.target_calls,
          réalisés: campaign.completed_calls,
          taux: campaign.success_rate,
        }));

        console.log("Fetched campaign stats:", formattedStats);
        setStats(formattedStats || []);
      } catch (error) {
        console.error("Error fetching campaign stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Performance des campagnes</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={stats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="objectif"
                stroke="#0EA5E9"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="réalisés"
                stroke="#10B981"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="taux"
                stroke="#6366F1"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};