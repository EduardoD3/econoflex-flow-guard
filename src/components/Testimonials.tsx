import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Lucas R.",
      text: "Instalei em 10 minutos e já senti diferença.",
      rating: 5,
      // adicione aqui a URL da foto (opcional)
      image: "/images/testimonials/lucas.jpg",
    },
    {
      name: "Camila S.",
      text: "Fácil, limpo e eficiente.",
      rating: 5,
      image: "", // sem imagem -> mostra iniciais
    },
    {
      name: "Renato F.",
      text: "Excelente suporte na instalação.",
      rating: 5,
      image: "/images/testimonials/renato.jpg",
    },
  ];

  const getInitials = (fullName) => {
    if (!fullName) return "";
    const parts = fullName.trim().split(" ");
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground">
            Confiança comprovada por quem já usa
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-12 mb-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">500+</div>
            <div className="text-muted-foreground font-medium">Instalações realizadas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">98%</div>
            <div className="text-muted-foreground font-medium">Satisfação dos clientes</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-xl relative group overflow-hidden"
            >
              {/* Top row: avatar + name + rating */}
              <div className="flex items-center gap-4 mb-4">
                {/* Avatar: imagem ou fallback com iniciais */}
                {t.image ? (
                  <img
                    src={t.image}
                    alt={`${t.name} — foto do cliente`}
                    onError={(e) => {
                      // se erro ao carregar, substitui por fallback visual (inicial)
                      e.currentTarget.style.display = "none";
                      const parent = e.currentTarget.parentElement;
                      if (!parent) return;
                      const fallback = document.createElement("div");
                      fallback.className =
                        "h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shadow-sm";
                      fallback.textContent = getInitials(t.name);
                      parent.appendChild(fallback);
                    }}
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/10 shadow-sm"
                  />
                ) : (
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shadow-sm">
                    {getInitials(t.name)}
                  </div>
                )}

                <div>
                  <div className="font-bold text-primary">{t.name}</div>
                  <div className="text-sm text-muted-foreground">Cliente satisfeito</div>
                </div>
              </div>

              {/* Quote icon (decorativo) */}
              <Quote className="h-10 w-10 text-accent/30 mb-4" />

              {/* Stars (duplicated under name for visual) */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-lg mb-6 leading-relaxed">
                "{t.text}"
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
