import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, CreditCard, Lock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const marca = searchParams.get("marca") || "";
  const ano = searchParams.get("ano") || "";
  const modelo = searchParams.get("modelo") || "";

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card">("pix");
  const [processing, setProcessing] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    // Simular processamento
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Aqui você integraria com seu gateway de pagamento real
    // Por exemplo: Stripe, Mercado Pago, PagSeguro, etc.
    alert("Pagamento processado com sucesso! (Demo)");
    setProcessing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0D] via-[#111827] to-[#0B0B0D]">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <Link
            to="/compra"
            className="inline-flex items-center gap-2 text-white hover:text-[#FF8A00] transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-semibold">Voltar</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Formulário */}
            <div className="lg:col-span-2">
              <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-8">
                  <Lock className="h-6 w-6 text-[#FF8A00]" />
                  <h2 className="text-2xl font-bold text-white">
                    Pagamento Seguro
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Dados Pessoais */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-4">
                      Dados Pessoais
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/80 text-sm mb-2">
                          Nome Completo
                        </label>
                        <Input
                          required
                          value={formData.nome}
                          onChange={(e) => handleInputChange("nome", e.target.value)}
                          className="bg-secondary border-white/20 text-white"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 text-sm mb-2">
                          E-mail
                        </label>
                        <Input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="bg-secondary border-white/20 text-white"
                          placeholder="seu@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 text-sm mb-2">
                          Telefone
                        </label>
                        <Input
                          required
                          value={formData.telefone}
                          onChange={(e) =>
                            handleInputChange("telefone", e.target.value)
                          }
                          className="bg-secondary border-white/20 text-white"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 text-sm mb-2">
                          CPF
                        </label>
                        <Input
                          required
                          value={formData.cpf}
                          onChange={(e) => handleInputChange("cpf", e.target.value)}
                          className="bg-secondary border-white/20 text-white"
                          placeholder="000.000.000-00"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Endereço */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-4">
                      Endereço de Entrega
                    </h3>
                    <div className="grid gap-4">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-white/80 text-sm mb-2">
                            CEP
                          </label>
                          <Input
                            required
                            value={formData.cep}
                            onChange={(e) => handleInputChange("cep", e.target.value)}
                            className="bg-secondary border-white/20 text-white"
                            placeholder="00000-000"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-white/80 text-sm mb-2">
                            Endereço
                          </label>
                          <Input
                            required
                            value={formData.endereco}
                            onChange={(e) =>
                              handleInputChange("endereco", e.target.value)
                            }
                            className="bg-secondary border-white/20 text-white"
                            placeholder="Rua, Avenida..."
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-white/80 text-sm mb-2">
                            Número
                          </label>
                          <Input
                            required
                            value={formData.numero}
                            onChange={(e) =>
                              handleInputChange("numero", e.target.value)
                            }
                            className="bg-secondary border-white/20 text-white"
                            placeholder="123"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-white/80 text-sm mb-2">
                            Complemento
                          </label>
                          <Input
                            value={formData.complemento}
                            onChange={(e) =>
                              handleInputChange("complemento", e.target.value)
                            }
                            className="bg-secondary border-white/20 text-white"
                            placeholder="Apto, Bloco..."
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-white/80 text-sm mb-2">
                            Bairro
                          </label>
                          <Input
                            required
                            value={formData.bairro}
                            onChange={(e) =>
                              handleInputChange("bairro", e.target.value)
                            }
                            className="bg-secondary border-white/20 text-white"
                            placeholder="Centro"
                          />
                        </div>
                        <div>
                          <label className="block text-white/80 text-sm mb-2">
                            Cidade
                          </label>
                          <Input
                            required
                            value={formData.cidade}
                            onChange={(e) =>
                              handleInputChange("cidade", e.target.value)
                            }
                            className="bg-secondary border-white/20 text-white"
                            placeholder="São Paulo"
                          />
                        </div>
                        <div>
                          <label className="block text-white/80 text-sm mb-2">
                            Estado
                          </label>
                          <Input
                            required
                            value={formData.estado}
                            onChange={(e) =>
                              handleInputChange("estado", e.target.value)
                            }
                            className="bg-secondary border-white/20 text-white"
                            placeholder="SP"
                            maxLength={2}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Método de Pagamento */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-4">
                      Método de Pagamento
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("pix")}
                        className={`p-6 rounded-2xl border-2 transition-all ${
                          paymentMethod === "pix"
                            ? "border-[#FF8A00] bg-[#FF8A00]/10"
                            : "border-white/20 bg-secondary"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-[#32BCAD] flex items-center justify-center text-white font-bold">
                              PIX
                            </div>
                            <div className="text-left">
                              <div className="text-white font-bold">PIX</div>
                              <div className="text-white/60 text-sm">
                                Aprovação instantânea
                              </div>
                            </div>
                          </div>
                          {paymentMethod === "pix" && (
                            <Check className="h-6 w-6 text-[#FF8A00]" />
                          )}
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod("card")}
                        className={`p-6 rounded-2xl border-2 transition-all ${
                          paymentMethod === "card"
                            ? "border-[#FF8A00] bg-[#FF8A00]/10"
                            : "border-white/20 bg-secondary"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <CreditCard className="w-12 h-12 text-[#FF8A00]" />
                            <div className="text-left">
                              <div className="text-white font-bold">
                                Cartão de Crédito
                              </div>
                              <div className="text-white/60 text-sm">
                                Em até 12x sem juros
                              </div>
                            </div>
                          </div>
                          {paymentMethod === "card" && (
                            <Check className="h-6 w-6 text-[#FF8A00]" />
                          )}
                        </div>
                      </button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={processing}
                    className="w-full bg-gradient-to-r from-[#FF8A00] to-[#F59E0B] hover:opacity-90 text-black font-bold text-xl py-8 rounded-2xl shadow-xl hover:scale-105 transition-transform disabled:opacity-50"
                  >
                    {processing ? "Processando..." : "Finalizar Compra"}
                  </Button>
                </form>
              </div>
            </div>

            {/* Resumo do Pedido */}
            <div className="lg:col-span-1">
              <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Resumo do Pedido
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-white/80">
                    <span>Produto</span>
                    <span className="font-semibold text-white">ECONOFLEX</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Veículo</span>
                    <span className="font-semibold text-white">
                      {marca.toUpperCase()} {modelo} {ano}
                    </span>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex justify-between text-white/80">
                      <span>Produto</span>
                      <span>R$ 297,00</span>
                    </div>
                    <div className="flex justify-between text-white/80 mt-2">
                      <span>Frete</span>
                      <span className="text-[#FF8A00] font-semibold">GRÁTIS</span>
                    </div>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex justify-between text-white text-xl font-bold">
                      <span>Total</span>
                      <span>R$ 297,00</span>
                    </div>
                    <div className="text-white/60 text-sm mt-1">
                      ou 12x de R$ 24,75 sem juros
                    </div>
                  </div>
                </div>

                <div className="bg-[#FF8A00]/10 border border-[#FF8A00]/30 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-white text-sm">
                    <Check className="h-4 w-4 text-[#FF8A00]" />
                    <span>Entrega em 7-10 dias úteis</span>
                  </div>
                  <div className="flex items-center gap-2 text-white text-sm">
                    <Check className="h-4 w-4 text-[#FF8A00]" />
                    <span>Suporte via WhatsApp incluso</span>
                  </div>
                  <div className="flex items-center gap-2 text-white text-sm">
                    <Check className="h-4 w-4 text-[#FF8A00]" />
                    <span>Garantia do fabricante</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
