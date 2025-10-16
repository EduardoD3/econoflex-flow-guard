import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Lucas R.",
      role: "Morador de Porto Velho",
      text:
        "Instalei em 10 minutos e, já no primeiro mês, minha conta teve uma queda visível — sensação de economia real. O produto é intuitivo e a equipe me orientou rápido. Recomendo pra quem quer resultado sem complicação.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Camila S.",
      role: "Arquiteta",
      text:
        "Fácil de usar, design discreto e funcionou exatamente como prometeram. Achei a instalação tranquila e o suporte respondeu minhas dúvidas em menos de 24h. Voltei a indicar pra clientes.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Renato F.",
      role: "Pequeno empresário",
      text:
        "Tive um problema durante a configuração e o suporte resolveu via chamada remota — muito atenciosos. Hoje o sistema está estável e entregando o que foi prometido. Valeu cada centavo.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
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
            <article
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-xl relative group overflow-hidden"
            >
              {/* Top row: avatar + name + rating */}
              <div className="flex items-center gap-4 mb-4">
                {/* Avatar: imagem ou fallback com iniciais */}
                <div className="relative">
                  <img
                    src={t.image}
                    alt={`Foto do cliente — ${t.name}`}
                    onError={(e) => {
                      // fallback criado diretamente no DOM caso a imagem quebre
                      e.currentTarget.style.display = "none";
                      const parent = e.currentTarget.parentElement;
                      if (!parent) return;
                      const already = parent.querySelector(".avatar-fallback");
                      if (already) return;
                      const fallback = document.createElement("div");
                      fallback.className =
                        "avatar-fallback h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shadow-sm";
                      fallback.textContent = getInitials(t.name);
                      parent.appendChild(fallback);
                    }}
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/10 shadow-sm"
                  />
                  {/* caso queira forçar um overlay small (opcional) */}
                </div>

                <div>
                  <div className="font-bold text-primary">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>

              {/* Quote icon (decorativo) */}
              <Quote className="h-10 w-10 text-accent/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-hidden>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-lg mb-6 leading-relaxed">
                “{t.text}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
