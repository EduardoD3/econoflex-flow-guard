import { useState } from "react";
import { ArrowLeft, Check, Shield, Fuel } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

const Compra = () => {
  const [marca, setMarca] = useState("");
  const [ano, setAno] = useState("");
  const [modelo, setModelo] = useState("");

  // Gerar anos de 1990 até o ano atual
  const anosDisponiveis = Array.from(
    { length: new Date().getFullYear() - 1989 },
    (_, i) => new Date().getFullYear() - i
  );

  const marcas = {
    fiat: ["Uno", "Palio", "Strada", "Toro", "Argo", "Mobi", "Cronos"],
    volkswagen: ["Gol", "Polo", "Virtus", "T-Cross", "Nivus", "Saveiro", "Fox"],
    chevrolet: ["Onix", "Prisma", "Tracker", "S10", "Montana", "Spin", "Cruze"],
    ford: ["Ka", "EcoSport", "Ranger", "Fusion", "Focus"],
    renault: ["Kwid", "Sandero", "Logan", "Duster", "Captur", "Oroch"],
    hyundai: ["HB20", "Creta", "Tucson", "ix35", "Santa Fe"],
    toyota: ["Corolla", "Hilux", "Etios", "Yaris", "SW4", "Corolla Cross"],
    honda: ["Civic", "City", "HR-V", "Fit", "WR-V", "CR-V"],
    nissan: ["Versa", "Kicks", "Frontier", "March", "Sentra"],
    jeep: ["Renegade", "Compass", "Commander"],
    peugeot: ["208", "2008", "3008", "Partner"],
    citroen: ["C3", "C4 Cactus", "Aircross"],
  };

  const modelosDisponiveis = marca ? (marcas[marca as keyof typeof marcas] || []) : [];

  // ---- ALTERAÇÃO MÍNIMA: configurar aqui a base do gateway de pagamento ----
  // Substitua pela URL real do seu provedor (ex: "https://checkout.meugateway.com/checkout")
  const PAYMENT_BASE = "https://comprasseguradaonline.store/c/ced37c2bb2";
  // -------------------------------------------------------------------------

  const handleComprar = () => {
    if (!marca || !ano || !modelo) {
      alert("Por favor, preencha todos os campos do veículo.");
      return;
    }

    const paymentUrl = `${PAYMENT_BASE}?marca=${encodeURIComponent(
      marca
    )}&ano=${encodeURIComponent(ano)}&modelo=${encodeURIComponent(modelo)}`;

    // Abre em nova aba de forma segura
    window.open(paymentUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0D] via-[#111827] to-[#0B0B0D]">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-[#FF8A00] transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-semibold">Voltar</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#FF8A00]/10 px-4 py-2 rounded-full border border-[#FF8A00]/30 mb-6">
              <Fuel className="h-5 w-5 text-[#FF8A00]" />
              <span className="text-sm font-bold text-[#FF8A00]">ECONOFLEX</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Finalize seu Pedido
            </h1>
            <p className="text-xl text-[#9CA3AF]">
              Informe os dados do seu veículo para garantir a compatibilidade
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            {/* Vehicle Info */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-6">
                Dados do Veículo
              </h2>
              
              <div className="space-y-6">
                {/* Marca e Ano */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Marca */}
                  <div>
                    <label className="block text-white font-medium mb-3">
                      Marca do Veículo
                    </label>
                    <Select value={marca} onValueChange={(value) => {
                      setMarca(value);
                      setModelo(""); // Reset modelo quando marca muda
                    }}>
                      <SelectTrigger className="w-full h-12 bg-secondary border-white/20 text-secondary-foreground">
                        <SelectValue placeholder="Selecione a marca" />
                      </SelectTrigger>
                      <SelectContent className="border-white/20">
                        <SelectItem value="fiat">Fiat</SelectItem>
                        <SelectItem value="volkswagen">Volkswagen</SelectItem>
                        <SelectItem value="chevrolet">Chevrolet</SelectItem>
                        <SelectItem value="ford">Ford</SelectItem>
                        <SelectItem value="renault">Renault</SelectItem>
                        <SelectItem value="hyundai">Hyundai</SelectItem>
                        <SelectItem value="toyota">Toyota</SelectItem>
                        <SelectItem value="honda">Honda</SelectItem>
                        <SelectItem value="nissan">Nissan</SelectItem>
                        <SelectItem value="jeep">Jeep</SelectItem>
                        <SelectItem value="peugeot">Peugeot</SelectItem>
                        <SelectItem value="citroen">Citroën</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Ano */}
                  <div>
                    <label className="block text-white font-medium mb-3">
                      Ano do Veículo
                    </label>
                    <Select value={ano} onValueChange={setAno}>
                      <SelectTrigger className="w-full h-12 bg-secondary border-white/20 text-secondary-foreground">
                        <SelectValue placeholder="Selecione o ano" />
                      </SelectTrigger>
                      <SelectContent className="border-white/20">
                        {anosDisponiveis.map((a) => (
                          <SelectItem key={a} value={a.toString()}>
                            {a}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Modelo */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    Modelo do Veículo
                  </label>
                  <Select 
                    value={modelo} 
                    onValueChange={setModelo}
                    disabled={!marca}
                  >
                    <SelectTrigger className="w-full h-12 bg-secondary border-white/20 text-secondary-foreground disabled:opacity-50">
                      <SelectValue placeholder={marca ? "Selecione o modelo" : "Selecione a marca primeiro"} />
                    </SelectTrigger>
                    <SelectContent className="border-white/20">
                      {modelosDisponiveis.map((m) => (
                        <SelectItem key={m} value={m}>
                          {m}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Product Summary */}
            <div className="bg-[#FF8A00]/5 border border-[#FF8A00]/20 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Resumo do Produto
              </h3>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="text-white font-semibold text-lg">
                    ECONOFLEX - Economizador de Combustível
                  </div>
                  <div className="text-[#9CA3AF] text-sm mt-1">
                    Instalação rápida • Compatível com flauta
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white">R$ 118</div>
                  <div className="text-sm text-[#9CA3AF]">ou 12x sem juros</div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm text-white">
                  <Check className="h-4 w-4 text-[#FF8A00]" />
                  <span>Instalação em 10 minutos</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white">
                  <Check className="h-4 w-4 text-[#FF8A00]" />
                  <span>Suporte via WhatsApp</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white">
                  <Check className="h-4 w-4 text-[#FF8A00]" />
                  <span>Garantia do fabricante</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white">
                  <Check className="h-4 w-4 text-[#FF8A00]" />
                  <span>Sem modificações complexas</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              onClick={handleComprar}
              disabled={!marca || !ano || !modelo}
              className="w-full bg-gradient-to-r from-[#FF8A00] to-[#F59E0B] hover:opacity-90 text-black font-bold text-xl py-8 rounded-2xl shadow-xl hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
            >
              Ir para Pagamento
            </Button>
            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-[#9CA3AF]">
                <Shield className="h-5 w-5 text-[#FF8A00]" />
                <span className="text-sm font-medium">Compra segura</span>
              </div>
              <div className="flex items-center gap-2 text-[#9CA3AF]">
                <Check className="h-5 w-5 text-[#FF8A00]" />
                <span className="text-sm font-medium">Garantia inclusa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compra;
