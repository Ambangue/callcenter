import { CallCenterKPIs } from "@/components/CallCenterKPIs";
import { LiveCallMonitor } from "@/components/LiveCallMonitor";
import { CallManagement } from "@/components/CallManagement";
import { AgentMonitor } from "@/components/vicidial/AgentMonitor";

export const CallCenterSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CallCenterKPIs />
        </div>
        <div>
          <LiveCallMonitor />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
          <CallManagement />
        </div>
        <div>
          <AgentMonitor />
        </div>
      </div>
    </>
  );
};