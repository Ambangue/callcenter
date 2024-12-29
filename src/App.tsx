import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { CandidateManagement } from "./components/candidates/CandidateManagement";
import { CampaignManagement } from "./components/campaigns/CampaignManagement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/candidates" element={<CandidateManagement />} />
        <Route path="/campaigns" element={<CampaignManagement />} />
        {/* Catch all route - redirect to dashboard */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;