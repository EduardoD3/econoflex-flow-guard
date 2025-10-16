import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-b from-primary via-primary-dark to-secondary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Pronto para economizar?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Junte-se a centenas de motoristas que já estão economizando combustível com o ECONOFLEX
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg"
              className="bg-white hover:bg-white/90 text-black font-bold text-xl px-10 py-8 rounded-2xl shadow-2xl hover:scale-105 transition-transform"
              onClick={() => navigate("/compra")}
            >
              Comprar agora
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-white font-bold text-xl px-10 py-8 rounded-2xl backdrop-blur-sm"
              onClick={() => window.open("https://wa.me/5511999999999?text=Tenho%20dúvidas%20sobre%20o%20ECONOFLEX", "_blank")}
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Falar no WhatsApp
            </Button>
          </div>
          
          <div className="pt-8">
            <p className="text-sm text-white/70 max-w-2xl mx-auto">
              <strong>Aviso técnico:</strong> Siga o manual do veículo e as boas práticas de segurança. 
              Em caso de adaptação, utilize o kit correto para o seu modelo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
