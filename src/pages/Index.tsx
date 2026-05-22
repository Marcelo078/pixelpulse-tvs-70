import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCarousel } from "@/components/ProductCarousel";
import { CategoryGrid } from "@/components/CategoryGrid";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";
import { Seo } from "@/components/Seo";

// Get first 6 products for featured section
const featuredProducts = productsData.slice(0, 6).map((product) => ({
  id: product.id,
  name: product.name,
  brand: product.brand,
  image: product.image,
  slug: product.slug,
  specs: product.specs_list,
}));

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="Melhores TVs — Análises e Ofertas de Smart TVs 4K"
        description="Análises detalhadas, comparações imparciais e melhores ofertas em Smart TVs 4K das marcas Philco, Aiwa, AOC, Hisense e mais."
        path="/"
        type="website"
      />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative gradient-hero text-primary-foreground py-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10" />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="font-display text-5xl md:text-6xl font-black mb-6 leading-tight">
                As <span className="text-accent">Melhores TVs</span> do Mercado
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Análises detalhadas, comparações imparciais e as melhores ofertas em Smart TVs 4K, QLED e muito mais
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                  <a href="https://mercadolivre.com/sec/2DLVWrw" target="_blank" rel="noopener noreferrer">
                    Ver Todas as Ofertas <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Link to="/sobre">
                    Saiba Mais
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 border-b">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4 animate-slide-up">
                <div className="p-3 rounded-full bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Análises Imparciais</h3>
                  <p className="text-sm text-muted-foreground">Baseadas em testes reais</p>
                </div>
              </div>
              <div className="flex items-center gap-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <div className="p-3 rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Transparência Total</h3>
                  <p className="text-sm text-muted-foreground">Divulgamos links afiliados</p>
                </div>
              </div>
              <div className="flex items-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="p-3 rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Melhores Marcas</h3>
                  <p className="text-sm text-muted-foreground">Procedência garantida</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <ProductCarousel 
          products={featuredProducts} 
          title="🔥 TVs em Destaque - Melhores Preços e Ofertas"
        />

        {/* CTA Banner */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container text-center">
            <h2 className="font-display text-4xl font-bold mb-4">
              Encontre sua TV ideal com até 50% OFF
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Compare preços, especificações e avaliações de usuários
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
              <a href="https://mercadolivre.com/sec/2DLVWrw" target="_blank" rel="noopener noreferrer">
                Conferir Ofertas Agora <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>

        {/* Category Grid */}
        <CategoryGrid />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
