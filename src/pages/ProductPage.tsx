import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, CheckCircle, TrendingUp, Award, Shield } from "lucide-react";
import { getProductBySlug } from "@/data/products";

const ProductPage = () => {
  const { slug } = useParams();
  const productData = slug ? getProductBySlug(slug) : undefined;

  // Redirect to 404 if product not found
  if (!productData) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <article className="container max-w-4xl">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{productData.brand}</span>
            <span className="mx-2">/</span>
            <span className="text-foreground">{productData.name}</span>
          </nav>

          {/* Product Header */}
          <header className="mb-8">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {productData.name} - <span className="text-primary">Melhores Preços</span> e <span className="text-accent">Ofertas</span>
            </h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                {productData.brand}
              </span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                4K UHD
              </span>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold">
                {productData.specs.size}
              </span>
            </div>
          </header>

          {/* Product Image */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-elevated">
            <img 
              src={productData.image} 
              alt={`${productData.name} - Análise Completa e Melhores Ofertas`}
              className="w-full aspect-video object-cover"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button asChild size="lg" className="flex-1 bg-accent hover:bg-accent/90 font-bold">
              <a href={productData.affiliateLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Comprar no Mercado Livre
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="flex-1">
              <a href={productData.affiliateLink} target="_blank" rel="noopener noreferrer">
                Ver Mais Ofertas
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <Card className="p-6 mb-8 gradient-card">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">Análise Imparcial</p>
                  <p className="text-xs text-muted-foreground">Baseada em dados reais</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">Marca Confiável</p>
                  <p className="text-xs text-muted-foreground">Procedência garantida</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">Transparência</p>
                  <p className="text-xs text-muted-foreground">Link de afiliado</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Specifications */}
          <Card className="p-6 mb-8">
            <h2 className="font-display text-2xl font-bold mb-4">Especificações Técnicas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(productData.specs).map(([key, value]) => (
                <div key={key} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold capitalize">{key.replace(/_/g, ' ')}</p>
                    <p className="text-sm text-muted-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-8">
            {productData.longDescription.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('##')) {
                return <h2 key={idx} className="font-display text-3xl font-bold mt-8 mb-4">{paragraph.replace('##', '').trim()}</h2>;
              }
              if (paragraph.startsWith('###')) {
                return <h3 key={idx} className="font-display text-2xl font-bold mt-6 mb-3">{paragraph.replace('###', '').trim()}</h3>;
              }
              return <p key={idx} className="mb-4 text-foreground leading-relaxed">{paragraph}</p>;
            })}
          </div>

          {/* Bottom CTA */}
          <Card className="p-8 text-center gradient-hero text-primary-foreground mb-8">
            <h3 className="font-display text-3xl font-bold mb-4">
              Garanta sua TV com as Melhores Ofertas
            </h3>
            <p className="text-lg mb-6 text-primary-foreground/90">
              Aproveite condições especiais e frete grátis
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
              <a href={productData.affiliateLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Ver Ofertas no Mercado Livre
              </a>
            </Button>
          </Card>

          {/* Next Article CTA */}
          <div className="border-t pt-8">
            <h3 className="font-display text-2xl font-bold mb-4">Leia Também</h3>
            <Link to="/" className="text-primary hover:underline font-semibold flex items-center gap-2">
              Ver todos os artigos sobre TVs
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;
