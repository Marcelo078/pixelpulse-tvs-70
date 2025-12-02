import { Link } from "react-router-dom";
import { Tv } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold mb-4">
              <Tv className="h-5 w-5 text-primary" />
              <span>Melhores TVs</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Análises detalhadas e comparações das melhores TVs do mercado.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacidade" className="hover:text-primary transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/termos" className="hover:text-primary transition-colors">Termos de Uso</Link></li>
              <li><Link to="/sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link to="/disclaimer" className="hover:text-primary transition-colors">Isenção de Responsabilidade</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Marcas</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/marca/philco" className="hover:text-primary transition-colors">Philco</Link></li>
              <li><Link to="/marca/aiwa" className="hover:text-primary transition-colors">Aiwa</Link></li>
              <li><Link to="/marca/aoc" className="hover:text-primary transition-colors">AOC</Link></li>
              <li><Link to="/marca/hisense" className="hover:text-primary transition-colors">Hisense</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Outras Categorias</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://mercadolivre.com/sec/2cQ33FV" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Notebooks</a></li>
              <li><a href="https://mercadolivre.com/sec/32Q9odi" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Smart Home</a></li>
              <li><a href="https://mercadolivre.com/sec/1HnRJHj" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Placas de Vídeo</a></li>
              <li><a href="https://mercadolivre.com/sec/14GQgfK" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Ofertas Limitadas</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Melhores TVs. Todos os direitos reservados.</p>
          <p className="mt-2">
            Este site contém links de afiliados. Podemos receber comissões por compras realizadas através destes links.
          </p>
        </div>
      </div>
    </footer>
  );
};
