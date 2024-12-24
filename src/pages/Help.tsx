import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const Help = () => {
  const faqs = [
    {
      question: "Comment créer un compte ?",
      answer: "Pour créer un compte, contactez votre administrateur qui vous fournira vos identifiants de connexion."
    },
    {
      question: "J'ai oublié mon mot de passe",
      answer: "Utilisez la fonction 'Mot de passe oublié' sur la page de connexion pour réinitialiser votre mot de passe."
    },
    {
      question: "Comment contacter le support ?",
      answer: "Vous pouvez contacter le support par email à support@anpe.bj ou par téléphone au 0123456789."
    },
    {
      question: "Quels sont les horaires du service ?",
      answer: "Le service est disponible du lundi au vendredi de 8h à 17h."
    }
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Centre d'aide</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Guides rapides</h2>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
              <span>Guide de prise en main</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-green-500 rounded-full"></span>
              <span>Tutoriels vidéo</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-purple-500 rounded-full"></span>
              <span>Documentation complète</span>
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Contact support</h2>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Notre équipe de support est disponible pour vous aider du lundi au vendredi de 8h à 17h.
            </p>
            <div className="space-y-2">
              <p className="flex items-center space-x-2">
                <span className="font-semibold">Email:</span>
                <span>support@anpe.bj</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="font-semibold">Téléphone:</span>
                <span>0123456789</span>
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Questions fréquentes</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Help;