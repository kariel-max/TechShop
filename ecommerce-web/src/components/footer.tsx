// src/components/Footer.tsx
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo e descrição */}
        <div>
          <h2 className="text-2xl font-bold">TechStore</h2>
          <p className="mt-3 text-sm text-gray-200">
            Seu destino para tecnologia, inovação e os melhores preços.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Links Rápidos</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><Link to="/main" className="hover:underline">Início</Link></li>
            <li><Link to="/produtos" className="hover:underline">Produtos</Link></li>
            <li><Link to="/sobre" className="hover:underline">Sobre nós</Link></li>
            <li><Link to="/contato" className="hover:underline">Contato</Link></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contato</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li className="flex items-center gap-2">
              <Phone size={16} /> (11) 99999-9999
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> contato@techstore.com
            </li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Siga-nos</h3>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-gray-300"><Facebook /></Link>
            <Link to="#" className="hover:text-gray-300"><Instagram /></Link>
            <Link to="#" className="hover:text-gray-300"><Twitter /></Link>
          </div>
        </div>
      </div>

      {/* Direitos autorais */}
      <div className="bg-black bg-opacity-20 text-center py-4 text-sm text-gray-200">
        © {new Date().getFullYear()} TechStore. Todos os direitos reservados.
      </div>
    </footer>
  );
};