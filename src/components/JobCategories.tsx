import { Card } from "@/components/ui/card";
import { Briefcase, Users, GraduationCap, Building2 } from "lucide-react";

export const JobCategories = () => {
  const categories = [
    {
      icon: Briefcase,
      name: "Emplois disponibles",
      count: 234,
      color: "text-blue-500"
    },
    {
      icon: Users,
      name: "Candidats actifs",
      count: 1423,
      color: "text-green-500"
    },
    {
      icon: GraduationCap,
      name: "Formations",
      count: 56,
      color: "text-purple-500"
    },
    {
      icon: Building2,
      name: "Entreprises partenaires",
      count: 89,
      color: "text-orange-500"
    }
  ];

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">Catégories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex items-center space-x-4 p-4 bg-muted rounded-lg cursor-pointer hover:bg-muted/80 transition-colors"
          >
            <div className={`p-3 rounded-full bg-background ${category.color}`}>
              <category.icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-medium">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.count}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};