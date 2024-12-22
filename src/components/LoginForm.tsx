import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from 'sonner';
import { User, Lock, Loader2 } from 'lucide-react';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Tentative de connexion avec:', { username, password });
    
    try {
      // Simuler un délai de chargement
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (username === 'admin' && password === 'admin') {
        console.log('Connexion réussie');
        toast.success('Connexion réussie');
        navigate('/dashboard');
      } else {
        console.log('Échec de la connexion');
        toast.error('Identifiants incorrects');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-sm mx-auto animate-fade-in">
      <div className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="pl-10"
            disabled={isLoading}
          />
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10"
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="rounded border-gray-300" />
          <span className="text-gray-600">Se souvenir de moi</span>
        </label>
        <a href="#" className="text-accent hover:underline">
          Mot de passe oublié ?
        </a>
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Connexion en cours...
          </>
        ) : (
          'Se connecter'
        )}
      </Button>

      <div className="text-center text-sm text-gray-600">
        <p>
          Besoin d'aide ?{' '}
          <a href="#" className="text-accent hover:underline">
            Contactez le support
          </a>
        </p>
      </div>
    </form>
  );
};