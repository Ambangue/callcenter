import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const QuickMessage = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) {
      toast.error("Veuillez entrer un message");
      return;
    }
    
    console.log("Message envoyé:", message);
    toast.success("Message envoyé avec succès");
    setMessage("");
  };

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">Message rapide</h3>
      <div className="flex space-x-2">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Écrivez votre message..."
          className="flex-1"
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button onClick={handleSend} size="icon">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};