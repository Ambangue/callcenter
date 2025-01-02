import { TaskList } from "@/components/TaskList";
import { ActivityLog } from "@/components/ActivityLog";

export const TaskSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <TaskList />
      </div>
      <div>
        <ActivityLog />
      </div>
    </div>
  );
};