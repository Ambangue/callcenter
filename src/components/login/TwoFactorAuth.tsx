import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export const TwoFactorAuth = ({ onVerify, onCancel }: { 
  onVerify: (code: string) => void;
  onCancel: () => void;
}) => {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await onVerify(code);
      toast.success('Code 2FA vérifié avec succès');
    } catch (error) {
      toast.error('Code 2FA invalide');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold">Double Authentification</h3>
        <p className="text-sm text-gray-600">
          Veuillez entrer le code reçu par SMS/email
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Entrez le code à 6 chiffres"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          maxLength={6}
          className="text-center text-2xl tracking-widest"
          disabled={isLoading}
        />

        <div className="flex gap-2">
          <Button
            type="submit"
            className="flex-1"
            disabled={code.length !== 6 || isLoading}
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Vérifier
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={isLoading}
          >
            Annuler
          </Button>
        </div>
      </form>
    </div>
  );
};