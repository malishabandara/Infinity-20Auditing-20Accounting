import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const whatsappNumber = "971545628525";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <Button
          className="pointer-events-auto shadow-lg shadow-primary/30"
          size="lg"
        >
          <MessageCircle className="size-4" />
          Chat on WhatsApp
        </Button>
      </a>
    </div>
  );
};
