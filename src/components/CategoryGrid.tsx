import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

const categories = [
  { name: "Melhores Suplementos", url: "https://mercadolivre.com/sec/1WqdDGr", emoji: "💪" },
  { name: "Ofertas Limitadas", url: "https://mercadolivre.com/sec/14GQgfK", emoji: "🔥" },
  { name: "Pet Shop Completo", url: "https://mercadolivre.com/sec/2w3WCFN", emoji: "🐾" },
  { name: "Peças de Trator", url: "https://mercadolivre.com/sec/2d6sMcw", emoji: "🚜" },
  { name: "Melhores Notebooks", url: "https://mercadolivre.com/sec/2cQ33FV", emoji: "💻" },
  { name: "Melhores TVs", url: "https://mercadolivre.com/sec/2DLVWrw", emoji: "📺" },
  { name: "Construção", url: "https://mercadolivre.com/sec/23DZvGp", emoji: "🏗️" },
  { name: "Melhores Creatina", url: "https://mercadolivre.com/sec/1e23ygz", emoji: "💊" },
  { name: "Smart Home", url: "https://mercadolivre.com/sec/32Q9odi", emoji: "🏠" },
  { name: "Carrinhos de Bebês", url: "https://mercadolivre.com/sec/1RdnycU", emoji: "👶" },
  { name: "Bebedouros de Água", url: "https://mercadolivre.com/sec/2CjPSqn", emoji: "💧" },
  { name: "Motos Infantil Elétrica", url: "https://mercadolivre.com/sec/18DzYmU", emoji: "🏍️" },
  { name: "Triciclos Adulto", url: "https://mercadolivre.com/sec/2bb6TRL", emoji: "🚲" },
  { name: "Espelhos Orgânicos", url: "https://mercadolivre.com/sec/1MEENov", emoji: "🪞" },
  { name: "Placas de Vídeo", url: "https://mercadolivre.com/sec/1HnRJHj", emoji: "🎮" },
  { name: "Bicicletas Ergométricas", url: "https://mercadolivre.com/sec/2nKZmda", emoji: "🚴" },
  { name: "Hoverboard Skate", url: "https://mercadolivre.com/sec/28Ru8g8", emoji: "🛹" },
];

export const CategoryGrid = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="font-display text-3xl font-bold mb-4 text-center">Explore Outras Categorias</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Descubra as melhores ofertas em diversas categorias com análises detalhadas e preços imperdíveis
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Button
              key={category.name}
              asChild
              variant="outline"
              className="h-auto py-6 flex flex-col items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              <a href={category.url} target="_blank" rel="noopener noreferrer">
                <span className="text-3xl">{category.emoji}</span>
                <span className="text-sm font-semibold text-center">{category.name}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};
