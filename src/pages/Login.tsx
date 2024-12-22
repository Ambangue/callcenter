import { LoginForm } from "@/components/LoginForm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-lg animate-fade-in">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">
              Agence Nationale pour l'Emploi
            </h2>
            <p className="text-gray-600">
              Connectez-vous à votre compte
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;