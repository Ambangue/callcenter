import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

export const TaskList = () => {
  console.log("Rendering TaskList component");

  const [tasks, setTasks] = useState([
    { 
      id: 1, 
      title: "Rappeler M. Bokolo", 
      completed: false, 
      priority: "high",
      time: "10:30"
    },
    { 
      id: 2, 
      title: "Répondre aux emails en attente", 
      completed: false, 
      priority: "medium",
      time: "11:00"
    },
    { 
      id: 3, 
      title: "Mise à jour base contacts", 
      completed: true, 
      priority: "low",
      time: "14:00"
    },
    { 
      id: 4, 
      title: "Formation nouveaux agents", 
      completed: false, 
      priority: "high",
      time: "15:30"
    }
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
        <h3 className="text-lg font-semibold">Tâches du jour</h3>
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
            <div className="flex-1">
              <span className={`text-sm ${task.completed ? 'line-through text-gray-500' : ''}`}>
                {task.title}
              </span>
              <span className="text-xs text-gray-500 ml-2">
                {task.time}
              </span>
            </div>
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