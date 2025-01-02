import { Wrench } from "lucide-react";

const Maintenance = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <Wrench className="w-20 h-20 text-primary mx-auto animate-spin-slow" />
        <h1 className="text-4xl font-bold">Maintenance en cours</h1>
        <p className="text-muted-foreground">
          Notre site est actuellement en maintenance. Nous serons bientôt de retour.
        </p>
        <p className="text-sm text-muted-foreground">
          Merci de votre patience.
        </p>
      </div>
    </div>
  );
};

export default Maintenance;