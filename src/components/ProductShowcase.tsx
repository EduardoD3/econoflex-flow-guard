import productCompatible from "@/assets/product-compatible.png";

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary via-primary-dark to-accent rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
              {/* Product Image */}
              <div className="relative">
                <div className="animate-float">
                  <img 
                    src={productCompatible} 
                    alt="ECONOFLEX - Produto" 
                    className="w-full max-w-md mx-auto drop-shadow-2xl"
                  />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full -z-10" />
              </div>
              
              {/* Product Info */}
              <div className="text-white space-y-6">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <span className="text-sm font-bold uppercase tracking-wide">ECONOFLEX</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Produto em polímero de alta resistência
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <p className="text-lg text-white/90">
                      Compatível com flauta de combustível de diversos modelos
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <p className="text-lg text-white/90">
                      Rótulo "ECONOFLEX" visível para identificação
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <p className="text-lg text-white/90">
                      Construção robusta para uso prolongado
                    </p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/20">
                  <p className="text-sm text-white/70 italic">
                    Cada equipamento é produzido de acordo com a marca e potência do seu veículo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-5deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ProductShowcase;
