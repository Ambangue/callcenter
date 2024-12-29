import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;