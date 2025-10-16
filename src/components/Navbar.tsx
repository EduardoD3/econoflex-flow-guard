import { Fuel, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Fuel className="h-8 w-8 text-primary" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full" />
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            className="bg-primary hover:bg-primary-dark text-black font-semibold"
            onClick={() => scrollToSection("pricing")}
          >
            Comprar agora
          </Button>
          <Button
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold hover:opacity-95 hover:scale-105 transform transition-shadow shadow-lg shadow-[#128C7E]/20"
            onClick={() =>
              window.open(
                "https://wa.me/5592995199578?text=Quero%20ECONOFLEX",
                "_blank",
                "noopener,noreferrer"
              )
            }
            aria-label="Falar no WhatsApp"
          >
            <MessageSquare className="h-4 w-4" />
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
