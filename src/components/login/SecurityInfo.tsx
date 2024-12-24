import { Shield, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

interface SecurityInfoProps {
  attempts: number;
}

export const SecurityInfo = ({ attempts }: SecurityInfoProps) => {
  const getSecurityMessage = () => {
    if (attempts === 0) return null;
    if (attempts === 1) {
      return {
        type: "default" as const,
        message: "Premier essai incorrect. Vérifiez vos identifiants."
      };
    }
    if (attempts === 2) {
      return {
        type: "default" as const,
        message: "Attention : Deuxième tentative échouée. Une tentative restante avant le blocage temporaire."
      };
    }
    return {
      type: "destructive" as const,
      message: "Compte temporairement bloqué pour des raisons de sécurité. Réessayez dans 5 minutes."
    };
  };

  const securityInfo = getSecurityMessage();

  if (!securityInfo) return null;

  return (
    <Alert variant={securityInfo.type} className="animate-fade-in">
      {securityInfo.type === "destructive" ? (
        <AlertTriangle className="h-4 w-4" />
      ) : (
        <Shield className="h-4 w-4" />
      )}
      <AlertDescription>{securityInfo.message}</AlertDescription>
    </Alert>
  );
};