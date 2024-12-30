import { Navigate } from "react-router-dom";

const Index = () => {
  console.log("Rendering Index component - redirecting to dashboard");
  return <Navigate to="/dashboard" replace />;
};

export default Index;