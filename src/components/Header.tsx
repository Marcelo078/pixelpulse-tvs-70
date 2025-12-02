import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, Tv, ExternalLink } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const categories = [
  { name: "Suplementos", url: "https://mercadolivre.com/sec/1WqdDGr" },
  { name: "Ofertas Limitadas", url: "https://mercadolivre.com/sec/14GQgfK" },
  { name: "Pet Shop", url: "https://mercadolivre.com/sec/2w3WCFN" },
  { name: "Peças de Trator", url: "https://mercadolivre.com/sec/2d6sMcw" },
  { name: "Notebooks", url: "https://mercadolivre.com/sec/2cQ33FV" },
  { name: "TVs", url: "https://mercadolivre.com/sec/2DLVWrw" },
  { name: "Construção", url: "https://mercadolivre.com/sec/23DZvGp" },
  { name: "Creatina", url: "https://mercadolivre.com/sec/1e23ygz" },
  { name: "Smart Home", url: "https://mercadolivre.com/sec/32Q9odi" },
  { name: "Carrinhos de Bebês", url: "https://mercadolivre.com/sec/1RdnycU" },
  { name: "Bebedouros", url: "https://mercadolivre.com/sec/2CjPSqn" },
  { name: "Motos Infantil", url: "https://mercadolivre.com/sec/18DzYmU" },
  { name: "Triciclos", url: "https://mercadolivre.com/sec/2bb6TRL" },
  { name: "Espelhos", url: "https://mercadolivre.com/sec/1MEENov" },
  { name: "Placas de Vídeo", url: "https://mercadolivre.com/sec/1HnRJHj" },
  { name: "Bicicletas Ergométricas", url: "https://mercadolivre.com/sec/2nKZmda" },
  { name: "Hoverboard", url: "https://mercadolivre.com/sec/28Ru8g8" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
          <Tv className="h-6 w-6 text-primary" />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Melhores TVs
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Início
          </Link>
          <Link to="/sobre" className="text-sm font-medium transition-colors hover:text-primary">
            Sobre Nós
          </Link>
          <Link to="/privacidade" className="text-sm font-medium transition-colors hover:text-primary">
            Privacidade
          </Link>
          <Button asChild size="sm" className="bg-accent hover:bg-accent/90">
            <a href="https://mercadolivre.com/sec/2DLVWrw" target="_blank" rel="noopener noreferrer">
              Ver Ofertas <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              <Link to="/" className="text-lg font-medium">Início</Link>
              <Link to="/sobre" className="text-lg font-medium">Sobre Nós</Link>
              <Link to="/privacidade" className="text-lg font-medium">Privacidade</Link>
              <Link to="/termos" className="text-lg font-medium">Termos de Uso</Link>
              <div className="border-t pt-4 mt-4">
                <p className="text-sm font-semibold mb-2">Outras Categorias:</p>
                {categories.slice(0, 8).map((cat) => (
                  <a
                    key={cat.name}
                    href={cat.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-sm text-muted-foreground hover:text-primary"
                  >
                    {cat.name}
                  </a>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
