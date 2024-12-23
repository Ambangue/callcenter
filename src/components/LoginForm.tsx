import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from 'sonner';
import { User, Lock, Loader2, AlertCircle, Mail, Phone, HelpCircle } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showResetForm, setShowResetForm] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!username.trim() || !password.trim()) {
      setError('Tous les champs sont obligatoires');
      return false;
    }
    if (username.length < 3) {
      setError("Le nom d'utilisateur doit contenir au moins 3 caractères");
      return false;
    }
    if (password.length < 4) {
      setError('Le mot de passe doit contenir au moins 4 caractères');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    console.log('Tentative de connexion avec:', { username, password, rememberMe });
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (username === 'admin' && password === 'admin') {
        console.log('Connexion réussie');
        if (rememberMe) {
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("username", username);
        }
        sessionStorage.setItem("isAuthenticated", "true");
        sessionStorage.setItem("user", JSON.stringify({ username, role: 'admin' }));
        toast.success('Connexion réussie ! Redirection...');
        navigate('/dashboard');
      } else {
        console.log('Échec de la connexion');
        setAttempts(prev => prev + 1);
        if (attempts >= 2) {
          toast.error('Trop de tentatives. Veuillez réessayer plus tard.');
          setIsLoading(false);
          return;
        }
        throw new Error('Identifiants incorrects');
      }
    } catch (err) {
      console.error('Erreur de connexion:', err);
      setError('Identifiants incorrects');
      toast.error('Échec de la connexion');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetEmail) {
      toast.error('Veuillez entrer votre email');
      return;
    }
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Si votre email est valide, vous recevrez les instructions de réinitialisation.');
      setShowResetForm(false);
      setResetEmail('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6 w-full max-w-sm mx-auto animate-fade-in">
      {error && (
        <Alert variant="destructive" className="animate-shake">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4">
          <div className="relative">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Nom d'utilisateur"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                        setError('');
                      }}
                      className="pl-10 form-input-transition"
                      disabled={isLoading}
                      autoComplete="username"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Entrez votre nom d'utilisateur</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          <div className="relative">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      type="password"
                      placeholder="Mot de passe"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setError('');
                      }}
                      className="pl-10 form-input-transition"
                      disabled={isLoading}
                      autoComplete="current-password"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Entrez votre mot de passe</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="rounded border-gray-300 text-primary focus:ring-primary"
              disabled={isLoading}
            />
            <span className="text-gray-600">Se souvenir de moi</span>
          </label>
          <Dialog open={showResetForm} onOpenChange={setShowResetForm}>
            <DialogTrigger asChild>
              <button
                type="button"
                className="text-primary hover:underline focus:outline-none"
              >
                Mot de passe oublié ?
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Réinitialisation du mot de passe</DialogTitle>
                <DialogDescription>
                  Entrez votre adresse email pour recevoir les instructions de réinitialisation.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handlePasswordReset} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    'Envoyer les instructions'
                  )}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Button 
          type="submit" 
          className="w-full transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]" 
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Connexion en cours...
            </>
          ) : (
            'Se connecter'
          )}
        </Button>
      </form>

      <div className="space-y-4 text-center text-sm text-gray-600">
        <div className="flex items-center justify-center gap-2">
          <Phone className="h-4 w-4" />
          <span>Support téléphonique : 0123456789</span>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <button className="flex items-center justify-center gap-2 mx-auto text-primary hover:underline">
              <HelpCircle className="h-4 w-4" />
              Guide de connexion
            </button>
          </DialogTrigger>
          <DialogContent>
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
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};