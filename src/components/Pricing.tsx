import { Check, Shield, MessageCircle, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();
  
  const features = [
    "Produto ECONOFLEX original",
    "Instalação em menos de 10 minutos",
    "Compatível com a flauta de combustível",
    "Suporte na instalação via WhatsApp",
    "Garantia do fabricante",
    "Manutenção simples",
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-secondary to-secondary/80 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,138,0,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(245,158,11,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Oferta Especial
          </h2>
          <p className="text-xl text-white/80">
            Invista em economia real para o seu veículo
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-card to-card/50 rounded-3xl p-8 md:p-12 border-2 border-primary shadow-2xl backdrop-blur-sm">
            {/* Price */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/30 mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-bold text-primary">MELHOR OFERTA</span>
              </div>
              
              <div className="mb-2">
                <span className="text-5xl md:text-6xl font-extrabold text-foreground">R$ 118</span>
              </div>
              <p className="text-muted-foreground text-lg">à vista ou 12x sem juros</p>
            </div>
            
            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 flex-shrink-0">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* Bonus */}
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <MessageCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-foreground mb-1">Bônus Especial</div>
                  <p className="text-muted-foreground">
                    Suporte completo na instalação via WhatsApp com nossa equipe especializada
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <Button 
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 text-black font-bold text-xl py-8 rounded-2xl shadow-xl hover:scale-105 transition-transform"
              onClick={() => navigate("/compra")}
            >
              Comprar agora
            </Button>
            
            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Compra segura</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CreditCard className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Parcelamento sem juros</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
