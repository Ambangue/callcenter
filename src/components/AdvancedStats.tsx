import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

const hourlyData = [
  { heure: "8h", entrants: 45, sortants: 30, traites: 40 },
  { heure: "9h", entrants: 65, sortants: 40, traites: 55 },
  { heure: "10h", entrants: 80, sortants: 55, traites: 70 },
  { heure: "11h", entrants: 75, sortants: 60, traites: 65 },
  { heure: "12h", entrants: 45, sortants: 35, traites: 40 },
  { heure: "13h", entrants: 40, sortants: 30, traites: 35 },
  { heure: "14h", entrants: 70, sortants: 50, traites: 60 },
  { heure: "15h", entrants: 85, sortants: 65, traites: 75 },
  { heure: "16h", entrants: 60, sortants: 45, traites: 50 },
];

const channelData = [
  { name: "Téléphone", value: 60 },
  { name: "Email", value: 20 },
  { name: "Chat", value: 15 },
  { name: "SMS", value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const AdvancedStats = () => {
  console.log("Rendering AdvancedStats component");
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Volume d'appels par heure</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={hourlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="heure" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="entrants" 
                stroke="#0EA5E9" 
                name="Appels entrants"
              />
              <Line 
                type="monotone" 
                dataKey="sortants" 
                stroke="#10B981" 
                name="Appels sortants"
              />
              <Line 
                type="monotone" 
                dataKey="traites" 
                stroke="#6366F1" 
                name="Appels traités"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Répartition par canal</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={channelData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {channelData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};