import React, { useState } from "react";
import { Fuel, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Left: logo */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center">
              <Fuel className="h-8 w-8 text-primary" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-extrabold text-white tracking-tight">ECONOFLEX</span>
              <span className="text-[10px] text-[#9CA3AF] -mt-0.5">Economizador de Combustível</span>
            </div>
          </div>

          {/* Right: desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-[#FF8A00] to-[#F59E0B] text-black font-semibold hover:scale-105 transform transition-all shadow-md"
              onClick={() => scrollToSection("pricing")}
              aria-label="Comprar agora - ir para seção preços"
            >
              Comprar agora
            </Button>

            <Button
              className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold hover:scale-105 transform transition-all shadow-md"
              onClick={() =>
                window.open(
                  "https://wa.me/5592995199578?text=Quero%20ECONOFLEX",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              aria-label="Falar no WhatsApp"
            >
              <MessageSquare className="h-4 w-4" />
              Falar no WhatsApp
            </Button>
          </div>

          {/* Mobile menu toggle (optional) */}
          <div className="md:hidden flex items-center gap-2">
            <button
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-white/6 hover:bg-white/10 transition"
            >
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Optional mobile expanded menu (appears under navbar when toggled) */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-secondary/95 border-t border-white/6 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-3 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToSection("pricing");
                }}
                className="w-full text-left px-4 py-3 rounded-lg bg-gradient-to-r from-[#FF8A00] to-[#F59E0B] text-black font-semibold"
                aria-label="Comprar agora - menu mobile"
              >
                Comprar agora
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/5592995199578?text=Quero%20ECONOFLEX",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="w-full text-left px-4 py-3 rounded-lg bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold"
                aria-label="Falar no WhatsApp - menu mobile"
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5" />
                  <span>Falar no WhatsApp</span>
                </div>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile CTA bar - fixed bottom (high-visibility) */}
      <div
        className="fixed left-4 right-4 bottom-4 z-50 md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="bg-transparent">
          <div className="flex gap-3">
            <button
              onClick={() => scrollToSection("pricing")}
              className="flex-1 inline-flex items-center justify-center gap-3 px-4 py-4 rounded-2xl bg-gradient-to-r from-[#FF8A00] to-[#F59E0B] text-black font-extrabold text-lg shadow-2xl transform transition hover:scale-[1.02]"
              aria-label="Comprar agora - ação principal"
            >
              Comprar agora
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://wa.me/5592995199578?text=Quero%20ECONOFLEX",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] shadow-2xl transform transition hover:scale-[1.02]"
              aria-label="Falar no WhatsApp - ação rápida"
              title="Falar no WhatsApp"
            >
              <MessageSquare className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
