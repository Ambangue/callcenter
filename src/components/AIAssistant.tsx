import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Brain, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

export const AIAssistant = () => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  console.log("Rendering AIAssistant component");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) {
      toast.error("Veuillez entrer une question");
      return;
    }

    setIsLoading(true);
    // Simulated AI response for now
    setTimeout(() => {
      const simulatedResponses = [
        "Suggérer d'appeler le candidat à un moment plus opportun",
        "Vérifier les disponibilités dans le calendrier",
        "Envoyer un email de suivi avec les détails discutés",
      ];
      setSuggestions(simulatedResponses);
      setIsLoading(false);
      setInput("");
      toast.success("Suggestions générées avec succès");
    }, 1500);
  };

  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-center gap-2 text-accent">
        <Brain className="h-6 w-6" />
        <h2 className="text-lg font-semibold">Assistant IA</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Posez votre question..."
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
      </form>

      {suggestions.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">
            Suggestions:
          </h3>
          <ul className="space-y-2">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-2 bg-accent/10 rounded-lg text-sm hover:bg-accent/20 transition-colors cursor-pointer"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
};