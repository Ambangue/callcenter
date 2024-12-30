import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { CandidateManagement } from "./components/candidates/CandidateManagement";
import { CampaignManagement } from "./components/campaigns/CampaignManagement";
import Index from "./pages/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/candidates" element={<CandidateManagement />} />
        <Route path="/campaigns" element={<CampaignManagement />} />
        {/* Catch all route - redirect to dashboard */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;