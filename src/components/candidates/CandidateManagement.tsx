import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CandidateList } from "./CandidateList";
import { InterviewTracker } from "./InterviewTracker";
import { ResumeLibrary } from "./ResumeLibrary";
import { InteractionHistory } from "./InteractionHistory";
import { useToast } from "@/hooks/use-toast";

export const CandidateManagement = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("list");

  console.log("Rendering CandidateManagement component");
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    console.log("Tab changed to:", value);
  };
  
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold">Gestion des Candidats</h1>
      
      <Tabs defaultValue="list" className="w-full" onValueChange={handleTabChange}>
        <TabsList className="grid grid-cols-4 w-full max-w-2xl">
          <TabsTrigger value="list">Liste des Candidats</TabsTrigger>
          <TabsTrigger value="resumes">CV-thèque</TabsTrigger>
          <TabsTrigger value="interviews">Entretiens</TabsTrigger>
          <TabsTrigger value="history">Historique</TabsTrigger>
        </TabsList>
        
        <TabsContent value="list" className="mt-6">
          <CandidateList />
        </TabsContent>
        
        <TabsContent value="resumes" className="mt-6">
          <ResumeLibrary />
        </TabsContent>
        
        <TabsContent value="interviews" className="mt-6">
          <InterviewTracker />
        </TabsContent>
        
        <TabsContent value="history" className="mt-6">
          <InteractionHistory />
        </TabsContent>
      </Tabs>
    </div>
  );
};