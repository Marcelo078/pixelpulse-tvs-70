import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <article className="container max-w-4xl prose prose-lg">
          <h1 className="font-display text-4xl font-bold mb-6">Isenção de Responsabilidade</h1>
          <p className="text-muted-foreground mb-8">Última atualização: 02 de Dezembro de 2025</p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">1. Informações Gerais</h2>
          <p>
            As informações contidas no site <strong>Melhores TVs</strong> são fornecidas apenas para fins informativos gerais. 
            Embora nos esforcemos para manter as informações atualizadas e corretas, não fazemos representações ou garantias de qualquer tipo, 
            expressas ou implícitas, sobre a completude, precisão, confiabilidade, adequação ou disponibilidade com relação ao site 
            ou às informações, produtos, serviços ou gráficos relacionados contidos no site.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">2. Preços e Disponibilidade</h2>
          <p>
            Os <strong>preços dos produtos</strong> mencionados neste site são fornecidos pelos varejistas parceiros e podem variar sem aviso prévio. 
            Não somos responsáveis por erros ou omissões nos preços listados. Os preços finais, promoções, e disponibilidade de produtos devem 
            ser verificados diretamente no site do varejista antes da compra.
          </p>
          <p>
            As imagens dos produtos são meramente ilustrativas e podem não representar exatamente o produto final. 
            Especificações técnicas podem ser alteradas pelos fabricantes sem aviso prévio.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">3. Análises e Opiniões</h2>
          <p>
            Nossas análises e recomendações são baseadas em pesquisas, especificações técnicas e avaliações disponíveis publicamente. 
            As opiniões expressas neste site são nossas próprias e não representam as opiniões dos fabricantes ou varejistas.
          </p>
          <p>
            A experiência individual com produtos pode variar. Recomendamos que você faça sua própria pesquisa e leia múltiplas fontes 
            antes de tomar decisões de compra.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">4. Links de Afiliados</h2>
          <p>
            Este site contém <strong>links de afiliados</strong> para varejistas online, incluindo o Mercado Livre. 
            Quando você clica nesses links e realiza uma compra, podemos receber uma comissão sem custo adicional para você.
          </p>
          <p>
            Não somos responsáveis pelas políticas, práticas ou conteúdo dos sites de terceiros vinculados. 
            A inclusão de qualquer link não implica endosso por nós do site. O uso de qualquer site vinculado é por conta e risco do usuário.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">5. Garantias e Suporte</h2>
          <p>
            Não fornecemos garantias sobre os produtos listados em nosso site. Todas as questões relacionadas a garantias, devoluções, 
            trocas e suporte técnico devem ser direcionadas diretamente aos fabricantes ou varejistas dos produtos.
          </p>
          <p>
            Não somos responsáveis por quaisquer danos, diretos ou indiretos, resultantes da compra ou uso de produtos mencionados neste site.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">6. Limitação de Responsabilidade</h2>
          <p>
            Em nenhuma circunstância seremos responsáveis por qualquer perda ou dano, incluindo, sem limitação, perda ou dano indireto ou consequente, 
            ou qualquer perda ou dano decorrente de perda de dados ou lucros decorrentes de, ou em conexão com, o uso deste site.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">7. Alterações no Conteúdo</h2>
          <p>
            O conteúdo deste site pode ser modificado, atualizado ou removido a qualquer momento sem aviso prévio. 
            Não garantimos que o site estará disponível continuamente ou que estará livre de erros.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">8. Conformidade Legal</h2>
          <p>
            Este site está em conformidade com as leis brasileiras aplicáveis, incluindo o Código de Defesa do Consumidor 
            e a Lei Geral de Proteção de Dados (LGPD).
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">9. Uso por Sua Conta e Risco</h2>
          <p>
            Seu uso deste site é por sua conta e risco. Se você não estiver satisfeito com qualquer conteúdo do site, 
            seu único e exclusivo recurso é descontinuar o uso do site.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">10. Contato</h2>
          <p>
            Se você tiver dúvidas sobre esta Isenção de Responsabilidade, entre em contato através da página <a href="/sobre" className="text-primary hover:underline">Sobre Nós</a>.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Disclaimer;
