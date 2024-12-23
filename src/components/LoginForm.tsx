import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';
import { User, Lock, Loader2, AlertCircle, Shield, Eye, EyeOff } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { LoginInput } from './login/LoginInput';
import { PasswordReset } from './login/PasswordReset';
import { LoginGuide } from './login/LoginGuide';
import { SupportInfo } from './login/SupportInfo';
import { SecurityInfo } from './login/SecurityInfo';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [lastAttemptTime, setLastAttemptTime] = useState<Date | null>(null);
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

    // Vérification du délai entre les tentatives
    if (lastAttemptTime && attempts >= 3) {
      const timeSinceLastAttempt = new Date().getTime() - lastAttemptTime.getTime();
      if (timeSinceLastAttempt < 300000) { // 5 minutes
        toast.error('Trop de tentatives. Veuillez attendre 5 minutes.');
        return;
      } else {
        setAttempts(0);
      }
    }
    
    setIsLoading(true);
    console.log('Tentative de connexion avec:', { username, rememberMe });
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (username === 'admin' && password === 'admin') {
        console.log('Connexion réussie');
        if (rememberMe) {
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("username", username);
          localStorage.setItem("lastLoginDate", new Date().toISOString());
        }
        sessionStorage.setItem("isAuthenticated", "true");
        sessionStorage.setItem("user", JSON.stringify({ 
          username, 
          role: 'admin',
          lastLogin: new Date().toISOString()
        }));
        toast.success('Connexion réussie ! Redirection...');
        navigate('/dashboard');
      } else {
        console.log('Échec de la connexion');
        setAttempts(prev => prev + 1);
        setLastAttemptTime(new Date());
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
          <LoginInput
            icon={User}
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError('');
            }}
            disabled={isLoading}
            tooltipText="Entrez votre nom d'utilisateur"
            autoComplete="username"
          />
          
          <div className="relative">
            <LoginInput
              icon={Lock}
              type={showPassword ? "text" : "password"}
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              disabled={isLoading}
              tooltipText="Entrez votre mot de passe"
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
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
          <PasswordReset />
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
            <>
              <Shield className="mr-2 h-4 w-4" />
              Se connecter
            </>
          )}
        </Button>
      </form>

      <div className="space-y-4">
        <SecurityInfo attempts={attempts} />
        <SupportInfo />
        <LoginGuide />
      </div>
    </div>
  );
};