import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  brand: string;
  image: string;
  slug: string;
  specs: string[];
}

interface ProductCarouselProps {
  products: Product[];
  title: string;
}

export const ProductCarousel = ({ products, title }: ProductCarouselProps) => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="font-display text-3xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-in">
              <div className="aspect-video bg-gradient-to-br from-secondary to-muted relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={`${product.name} - Melhores Preços e Ofertas`}
                  className="w-full h-full object-contain p-4"
                />
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                  {product.brand}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 line-clamp-2">{product.name}</h3>
                <ul className="space-y-1 mb-4 text-sm text-muted-foreground">
                  {product.specs.slice(0, 3).map((spec, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <Button asChild variant="default" className="flex-1">
                    <Link to={`/produto/${product.slug}`}>
                      Saiba Mais
                    </Link>
                  </Button>
                  <Button asChild variant="default" className="bg-accent hover:bg-accent/90">
                    <a
                      href="https://mercadolivre.com/sec/2DLVWrw"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ver oferta no Mercado Livre"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
