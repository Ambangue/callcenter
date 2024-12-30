import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to dashboard on component mount
    navigate("/dashboard");
  }, [navigate]);

  // Return a loading state while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-2">Loading...</h1>
        <p className="text-gray-600">Redirecting to dashboard</p>
      </div>
    </div>
  );
};

export default Index;