import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CandidateList } from "./CandidateList";
import { InterviewTracker } from "./InterviewTracker";
import { ResumeLibrary } from "./ResumeLibrary";
import { InteractionHistory } from "./InteractionHistory";

export const CandidateManagement = () => {
  console.log("Rendering CandidateManagement component");
  
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Gestion des Candidats</h1>
      
      <Tabs defaultValue="list" className="w-full">
        <TabsList>
          <TabsTrigger value="list">Liste des Candidats</TabsTrigger>
          <TabsTrigger value="resumes">CV-thèque</TabsTrigger>
          <TabsTrigger value="interviews">Entretiens</TabsTrigger>
          <TabsTrigger value="history">Historique</TabsTrigger>
        </TabsList>
        
        <TabsContent value="list">
          <CandidateList />
        </TabsContent>
        
        <TabsContent value="resumes">
          <ResumeLibrary />
        </TabsContent>
        
        <TabsContent value="interviews">
          <InterviewTracker />
        </TabsContent>
        
        <TabsContent value="history">
          <InteractionHistory />
        </TabsContent>
      </Tabs>
    </div>
  );
};