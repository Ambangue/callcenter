import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BarChart3, Users, Clock, Target } from "lucide-react";

export const AnimatedStats = () => {
  const [stats, setStats] = useState([
    { id: 1, label: "Appels en cours", value: 0, target: 45, icon: BarChart3 },
    { id: 2, label: "Agents actifs", value: 0, target: 28, icon: Users },
    { id: 3, label: "Temps moyen", value: 0, target: 120, icon: Clock },
    { id: 4, label: "Objectifs atteints", value: 0, target: 85, icon: Target },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats =>
        prevStats.map(stat => ({
          ...stat,
          value: stat.value < stat.target ? stat.value + 1 : stat.value
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.id}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: stat.id * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
                </div>
                <div className="rounded-full p-3 bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};