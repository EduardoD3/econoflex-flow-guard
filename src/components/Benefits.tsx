import { Fuel, Clock, Wrench, Layers, Shield, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Fuel,
      title: "Economia de combustível",
      description: "Reduza seus gastos com combustível de forma eficiente",
    },
    {
      icon: Clock,
      title: "Instalação ≤ 10 min",
      description: "Processo rápido e descomplicado para você",
    },
    {
      icon: Wrench,
      title: "Sem alterações complexas",
      description: "Não exige modificações no sistema do veículo",
    },
    {
      icon: Layers,
      title: "Compatível com a flauta",
      description: "Funciona perfeitamente com a flauta de combustível",
    },
    {
      icon: Shield,
      title: "Manutenção simples",
      description: "Verificações periódicas básicas são suficientes",
    },
    {
      icon: Zap,
      title: "Construção robusta",
      description: "Polímero de alta resistência para durabilidade",
    },
  ];

  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,138,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,138,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Por que escolher o ECONOFLEX?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Tecnologia plug-and-play que entrega resultados reais
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all hover:bg-secondary-foreground/10 group"
            >
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="h-7 w-7 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-white/70 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
