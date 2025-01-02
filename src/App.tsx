import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { CandidateManagement } from "./components/candidates/CandidateManagement";
import { CampaignManagement } from "./components/campaigns/CampaignManagement";
import Index from "./pages/Index";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";
import Maintenance from "./pages/Maintenance";

function App() {
  // Simulation de l'état de maintenance (à connecter à votre backend plus tard)
  const isInMaintenance = false;

  if (isInMaintenance) {
    return <Maintenance />;
  }

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/candidates" 
            element={
              <ProtectedRoute>
                <CandidateManagement />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/campaigns" 
            element={
              <ProtectedRoute>
                <CampaignManagement />
              </ProtectedRoute>
            } 
          />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Toaster />
      </AuthProvider>
    </Router>
  );
}

export default App;