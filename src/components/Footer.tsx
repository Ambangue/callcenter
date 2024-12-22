export const Footer = () => {
  return (
    <footer className="bg-primary text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Agence Nationale Pour l'Emploi - Tous droits réservés</p>
      </div>
    </footer>
  );
};