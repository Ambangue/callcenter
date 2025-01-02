import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <AlertCircle className="w-20 h-20 text-destructive mx-auto" />
        <h1 className="text-4xl font-bold">Page non trouvée</h1>
        <p className="text-muted-foreground">
          Désolé, la page que vous recherchez n'existe pas.
        </p>
        <div className="space-x-4">
          <Button onClick={() => navigate(-1)}>Retour</Button>
          <Button variant="outline" onClick={() => navigate("/")}>
            Accueil
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Error404;