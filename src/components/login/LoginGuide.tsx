import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HelpCircle } from "lucide-react";

export const LoginGuide = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center justify-center gap-2 mx-auto text-primary hover:underline">
          <HelpCircle className="h-4 w-4" />
          Guide de connexion
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Guide de connexion</DialogTitle>
          <DialogDescription>
            <div className="space-y-4 text-left">
              <p>Pour vous connecter :</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Utilisez vos identifiants fournis par l'administrateur</li>
                <li>Le nom d'utilisateur doit contenir au moins 3 caractères</li>
                <li>Le mot de passe doit contenir au moins 4 caractères</li>
                <li>En cas d'oubli, utilisez la fonction "Mot de passe oublié"</li>
                <li>Pour toute assistance, contactez le support</li>
              </ul>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Conseils de sécurité :</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Ne partagez jamais vos identifiants</li>
                  <li>Utilisez un mot de passe unique et complexe</li>
                  <li>Déconnectez-vous après chaque session</li>
                </ul>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};