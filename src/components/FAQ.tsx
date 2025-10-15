import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Funciona no meu carro?",
      answer: "Sim, o ECONOFLEX é compatível com a flauta de combustível de diversos modelos. Cada equipamento é produzido de acordo com a marca e potência do seu veículo.",
    },
    {
      question: "Perde garantia?",
      answer: "Não. A instalação é plug-and-play e não altera componentes críticos do veículo, preservando a garantia do fabricante.",
    },
    {
      question: "Quanto tempo leva para instalar?",
      answer: "Em média, menos de 10 minutos. O processo é simples e não exige ferramentas especiais ou conhecimentos avançados.",
    },
    {
      question: "Precisa de manutenção?",
      answer: "Verificações periódicas dos engates são suficientes. A manutenção é mínima e pode ser feita pelo próprio usuário.",
    },
    {
      question: "Posso remover quando quiser?",
      answer: "Sim, a instalação é completamente reversível. Você pode remover o ECONOFLEX a qualquer momento sem deixar marcas ou danos.",
    },
    {
      question: "Tem garantia/devolução?",
      answer: "Sim. Oferecemos garantia do produto e suporte completo na instalação via WhatsApp para garantir sua satisfação.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tudo o que você precisa saber sobre o ECONOFLEX
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 hover:border-primary/50 transition-all"
              >
                <AccordionTrigger className="text-lg font-bold hover:text-primary text-left py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
