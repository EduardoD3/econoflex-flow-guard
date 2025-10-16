import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import productHero from "@/assets/product-hero.png";

const Hero = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary-dark to-secondary -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] -z-10" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium">Tecnologia plug-and-play</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Economize combustível com tecnologia plug-and-play.
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed">
              Instalação simples em menos de 10 minutos. Compatível com a flauta de combustível.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-white hover:bg-white/90 text-black font-bold text-lg px-8 py-6 rounded-2xl shadow-2xl hover:scale-105 transition-transform"
                onClick={() => navigate("/compra")}
              >
                Quero economizar agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-black hover:bg-white/50 hover:border-white font-semibold text-lg px-8 py-6 rounded-2xl "
                onClick={() => scrollToSection("how-it-works")}
              >
                Como funciona
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-6">
              {[
                "Instalação simples",
                "Compatível com vários modelos",
                "Garantia"
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-white/90">{badge}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Product Image */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img 
                src={productHero} 
                alt="ECONOFLEX - Economizador de Combustível" 
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-75" />
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
