import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

export const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Mise à jour des dossiers", completed: false, priority: "high" },
    { id: 2, title: "Révision des demandes", completed: false, priority: "medium" },
    { id: 3, title: "Préparation du rapport", completed: true, priority: "low" }
  ]);

  const toggleTask = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const progress = (completedTasks / tasks.length) * 100;

  return (
    <Card className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Tâches en cours</h3>
        <span className="text-sm text-gray-500">
          {completedTasks}/{tasks.length} complétées
        </span>
      </div>
      
      <Progress value={progress} className="mb-4" />
      
      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Checkbox
              checked={task.completed}
              onCheckedChange={() => toggleTask(task.id)}
            />
            <span className={`flex-1 text-sm ${task.completed ? 'line-through text-gray-500' : ''}`}>
              {task.title}
            </span>
            <span className={`text-xs px-2 py-1 rounded ${
              task.priority === 'high' ? 'bg-red-100 text-red-800' :
              task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-green-100 text-green-800'
            }`}>
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};