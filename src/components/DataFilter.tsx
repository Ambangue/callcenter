import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";

export const DataFilter = () => {
  console.log("Rendering DataFilter component");

  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <Label>Type d'interaction</Label>
        <Select defaultValue="all">
          <SelectTrigger>
            <SelectValue placeholder="Sélectionner un type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous</SelectItem>
            <SelectItem value="demandeurs">Demandeurs d'emploi</SelectItem>
            <SelectItem value="entreprises">Entreprises</SelectItem>
            <SelectItem value="placements">Placements</SelectItem>
            <SelectItem value="formations">Formations</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label>Statut</Label>
        <Select defaultValue="all">
          <SelectTrigger>
            <SelectValue placeholder="Sélectionner un statut" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous</SelectItem>
            <SelectItem value="en-cours">En cours</SelectItem>
            <SelectItem value="place">Placé</SelectItem>
            <SelectItem value="en-formation">En formation</SelectItem>
            <SelectItem value="en-attente">En attente</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label>Période</Label>
        <Select defaultValue="today">
          <SelectTrigger>
            <SelectValue placeholder="Sélectionner une période" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Aujourd'hui</SelectItem>
            <SelectItem value="week">Cette semaine</SelectItem>
            <SelectItem value="month">Ce mois</SelectItem>
            <SelectItem value="custom">Personnalisé</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};