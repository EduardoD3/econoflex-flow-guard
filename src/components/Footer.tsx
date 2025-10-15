import { Fuel, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Fuel className="h-8 w-8 text-primary" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full" />
              </div>
              <span className="text-xl font-bold">ECONOFLEX</span>
            </div>
            <p className="text-white/70 text-sm">
              Economizador de Combustível com tecnologia plug-and-play
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">Como funciona</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Garantia</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                <span>contato@econoflex.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} ECONOFLEX. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
