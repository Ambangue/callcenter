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
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";

const monthlyData = [
  { name: "Jan", placements: 65, entretiens: 120, offres: 80 },
  { name: "Fév", placements: 59, entretiens: 110, offres: 75 },
  { name: "Mar", placements: 80, entretiens: 140, offres: 90 },
  { name: "Avr", placements: 81, entretiens: 145, offres: 95 },
  { name: "Mai", placements: 56, entretiens: 100, offres: 70 },
  { name: "Jun", placements: 55, entretiens: 95, offres: 65 },
];

const sectorData = [
  { name: "Agriculture", value: 30 },
  { name: "Industrie", value: 45 },
  { name: "Services", value: 60 },
  { name: "Commerce", value: 40 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const AdvancedStats = () => {
  console.log("Rendering AdvancedStats component");
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Évolution mensuelle</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="placements" 
                stroke="#0EA5E9" 
                name="Placements"
              />
              <Line 
                type="monotone" 
                dataKey="entretiens" 
                stroke="#10B981" 
                name="Entretiens"
              />
              <Line 
                type="monotone" 
                dataKey="offres" 
                stroke="#6366F1" 
                name="Offres"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Répartition par secteur</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={sectorData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {sectorData.map((entry, index) => (
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