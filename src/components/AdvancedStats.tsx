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
  Cell,
  BarChart,
  Bar
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const hourlyData = [
  { heure: "8h", demandeurs: 45, entreprises: 30, placements: 40 },
  { heure: "9h", demandeurs: 65, entreprises: 40, placements: 55 },
  { heure: "10h", demandeurs: 80, entreprises: 55, placements: 70 },
  { heure: "11h", demandeurs: 75, entreprises: 60, placements: 65 },
  { heure: "12h", demandeurs: 45, entreprises: 35, placements: 40 },
  { heure: "13h", demandeurs: 40, entreprises: 30, placements: 35 },
  { heure: "14h", demandeurs: 70, entreprises: 50, placements: 60 },
  { heure: "15h", demandeurs: 85, entreprises: 65, placements: 75 },
  { heure: "16h", demandeurs: 60, entreprises: 45, placements: 50 },
];

const channelData = [
  { name: "Téléphone", value: 60 },
  { name: "Email", value: 20 },
  { name: "Chat", value: 15 },
  { name: "SMS", value: 5 },
];

const satisfactionData = [
  { niveau: "Très satisfait", value: 45 },
  { niveau: "Satisfait", value: 30 },
  { niveau: "Neutre", value: 15 },
  { niveau: "Insatisfait", value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const AdvancedStats = () => {
  console.log("Rendering AdvancedStats component");
  
  return (
    <div className="space-y-6 animate-fade-in">
      <Tabs defaultValue="activite" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="activite">Activité Horaire</TabsTrigger>
          <TabsTrigger value="canaux">Canaux</TabsTrigger>
          <TabsTrigger value="satisfaction">Satisfaction</TabsTrigger>
        </TabsList>

        <TabsContent value="activite">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Activités par heure</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={hourlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="heure" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="demandeurs" 
                    stroke="#0EA5E9" 
                    name="Demandeurs contactés"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="entreprises" 
                    stroke="#10B981" 
                    name="Entreprises contactées"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="placements" 
                    stroke="#6366F1" 
                    name="Placements"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="canaux">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Répartition par canal</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={channelData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={150}
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
        </TabsContent>

        <TabsContent value="satisfaction">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Niveau de satisfaction</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={satisfactionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="niveau" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#0EA5E9" name="Nombre d'utilisateurs" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};