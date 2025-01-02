import { ViciDialConfig } from "@/components/vicidial/ViciDialConfig";
import { DataFilter } from "@/components/DataFilter";
import { QuickStats } from "@/components/QuickStats";

export const ConfigSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ViciDialConfig />
      <div className="space-y-6">
        <DataFilter />
        <QuickStats />
      </div>
    </div>
  );
};