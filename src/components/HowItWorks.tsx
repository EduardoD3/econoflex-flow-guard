import { ArrowRight, Link2, Plug2, CheckCircle } from "lucide-react";
import installationDiagram from "@/assets/installation-diagram.png";

const HowItWorks = () => {
  const steps = [
    {
      icon: Link2,
      title: "Passo 1",
      description: "Engate rápido da mangueira de combustível",
    },
    {
      icon: Plug2,
      title: "Passo 2",
      description: "Conecte o ECONOFLEX com a agulha voltada para o lado da flauta",
    },
    {
      icon: CheckCircle,
      title: "Passo 3",
      description: "Finalize no bico conector da flauta",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Como funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Instalação rápida. Economia real. Sem complicação.
          </p>
        </div>
        
        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-xl group">
                <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              
              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <ArrowRight className="h-8 w-8 text-accent" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Installation Diagram */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border border-primary/20">
            <img 
              src={installationDiagram} 
              alt="Diagrama de Instalação ECONOFLEX" 
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          
          {/* Warning Note */}
          <div className="mt-8 bg-accent/10 border border-accent/30 rounded-2xl p-6">
            <p className="text-center text-sm md:text-base font-medium">
              <span className="font-bold">Observação:</span> Em caso de adaptação, siga as instruções específicas do seu modelo.
            </p>
          </div>
        </div>
        
        {/* Bottom text */}
        <p className="text-center text-muted-foreground mt-12 text-lg">
          Cada equipamento é produzido de acordo com a marca e potência do seu veículo.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
