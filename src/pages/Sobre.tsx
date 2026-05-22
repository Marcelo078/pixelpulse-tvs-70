import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { TrendingUp, Shield, Award, Users } from "lucide-react";
import { Seo } from "@/components/Seo";

const Sobre = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="Sobre Nós — Melhores TVs"
        description="Conheça o Melhores TVs: nossa missão, valores e como produzimos análises imparciais das melhores Smart TVs 4K do Brasil."
        path="/sobre"
      />
      <Header />
      
      <main className="flex-1">
        <section className="gradient-hero text-primary-foreground py-16">
          <div className="container text-center">
            <h1 className="font-display text-5xl font-bold mb-4">Sobre o Melhores TVs</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Seu guia confiável para encontrar a TV perfeita com análises imparciais e ofertas exclusivas
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container max-w-4xl">
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="font-display text-3xl font-bold mb-4">Quem Somos</h2>
              <p>
                O <strong>Melhores TVs</strong> é um portal especializado em análises e comparações de Smart TVs e televisores. 
                Nossa missão é ajudar consumidores a tomar decisões informadas ao escolher suas próximas TVs, fornecendo informações detalhadas, 
                análises imparciais e acesso às melhores ofertas do mercado.
              </p>
              <p>
                Somos apaixonados por tecnologia e entendemos que escolher uma TV pode ser desafiador com tantas opções disponíveis. 
                Por isso, analisamos cuidadosamente cada produto, considerando especificações técnicas, qualidade de imagem e som, 
                recursos smart, e principalmente o custo-benefício.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="p-6">
                <TrendingUp className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-2">Análises Imparciais</h3>
                <p className="text-muted-foreground">
                  Nossas análises são baseadas em pesquisas aprofundadas, especificações técnicas e avaliações reais de usuários. 
                  Nunca comprometemos nossa integridade editorial por parcerias comerciais.
                </p>
              </Card>

              <Card className="p-6">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-2">Transparência Total</h3>
                <p className="text-muted-foreground">
                  Divulgamos claramente quando utilizamos links de afiliados. Esta transparência é fundamental para manter a confiança 
                  de nossos leitores e garantir que você saiba exatamente como nosso site funciona.
                </p>
              </Card>

              <Card className="p-6">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-2">Melhores Marcas</h3>
                <p className="text-muted-foreground">
                  Focamos em marcas reconhecidas e produtos com boa procedência. Analisamos TVs de fabricantes estabelecidos como 
                  Philco, Aiwa, AOC, Hisense, Toshiba e Britânia, garantindo qualidade e suporte pós-venda.
                </p>
              </Card>

              <Card className="p-6">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-2">Foco no Usuário</h3>
                <p className="text-muted-foreground">
                  Nosso conteúdo é criado pensando em você. Explicamos termos técnicos de forma clara, comparamos opções 
                  em diferentes faixas de preço e fornecemos recomendações personalizadas para diferentes necessidades.
                </p>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="font-display text-3xl font-bold mb-4">Nossa Metodologia</h2>
              <p>Cada análise de produto em nosso site segue um processo rigoroso:</p>
              <ol>
                <li><strong>Pesquisa de Mercado:</strong> Identificamos os modelos mais relevantes e populares</li>
                <li><strong>Análise Técnica:</strong> Estudamos especificações, recursos e tecnologias</li>
                <li><strong>Comparação:</strong> Contrastamos com produtos similares na mesma faixa de preço</li>
                <li><strong>Avaliações de Usuários:</strong> Consideramos feedback real de compradores</li>
                <li><strong>Custo-Benefício:</strong> Avaliamos se o preço é justo pelos recursos oferecidos</li>
              </ol>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-3xl font-bold mb-4">Divulgação de Afiliados</h2>
              <p>
                Este site participa do programa de afiliados do <strong>Mercado Livre</strong>. Quando você clica em nossos links de produtos 
                e realiza uma compra, podemos receber uma pequena comissão sem custo adicional para você.
              </p>
              <p>
                Essas comissões nos ajudam a manter o site funcionando, pagar por hospedagem, e continuar produzindo conteúdo de qualidade 
                gratuito para nossos leitores. É importante destacar que:
              </p>
              <ul>
                <li>Você não paga nada a mais por usar nossos links</li>
                <li>Nossa opinião editorial nunca é influenciada por comissões</li>
                <li>Recomendamos apenas produtos que acreditamos serem bons para nossos leitores</li>
                <li>Sempre divulgamos quando um link é de afiliado</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;
