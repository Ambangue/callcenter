import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const Statistics = () => {
  const monthlyData = [
    { name: "Jan", demandes: 65, placements: 40 },
    { name: "Fév", demandes: 59, placements: 38 },
    { name: "Mar", demandes: 80, placements: 45 },
    { name: "Avr", demandes: 81, placements: 50 },
    { name: "Mai", demandes: 56, placements: 39 },
    { name: "Jun", demandes: 55, placements: 48 },
  ];

  const sectorData = [
    { name: "Agriculture", value: 30 },
    { name: "Industrie", value: 45 },
    { name: "Services", value: 60 },
    { name: "Commerce", value: 40 },
    { name: "Transport", value: 35 },
  ];

  return (
    <div className="container mx-auto py-8 px-4 animate-fade-in">
      <h1 className="text-3xl font-bold mb-8">Statistiques</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Demandes vs Placements</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="demandes"
                  stroke="#0EA5E9"
                  name="Demandes d'emploi"
                />
                <Line
                  type="monotone"
                  dataKey="placements"
                  stroke="#10B981"
                  name="Placements réussis"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Répartition par secteur</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sectorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="value"
                  fill="#0EA5E9"
                  name="Nombre de placements"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Statistics;