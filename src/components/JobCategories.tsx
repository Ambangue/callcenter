import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const JobCategories = () => {
  const categories = [
    { name: "Technologies", count: 156, trend: "hot" },
    { name: "Finance", count: 89, trend: "stable" },
    { name: "Marketing", count: 67, trend: "rising" },
    { name: "Santé", count: 45, trend: "new" },
    { name: "Education", count: 34, trend: "stable" },
  ];

  const getTrendBadge = (trend: string) => {
    const styles = {
      hot: "bg-red-100 text-red-800",
      stable: "bg-blue-100 text-blue-800",
      rising: "bg-green-100 text-green-800",
      new: "bg-purple-100 text-purple-800",
    };
    return styles[trend as keyof typeof styles] || "";
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Catégories d'emploi</h2>
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.name} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <span className="font-medium">{category.name}</span>
              <Badge variant="secondary">{category.count} offres</Badge>
            </div>
            <Badge className={getTrendBadge(category.trend)}>
              {category.trend.toUpperCase()}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
};