import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Privacidade = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <article className="container max-w-4xl prose prose-lg">
          <h1 className="font-display text-4xl font-bold mb-6">Política de Privacidade</h1>
          <p className="text-muted-foreground mb-8">Última atualização: 02 de Dezembro de 2025</p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">1. Informações que Coletamos</h2>
          <p>
            O site <strong>Melhores TVs</strong> coleta informações básicas de navegação através de cookies e ferramentas de análise como Google Analytics. 
            Não coletamos informações pessoais identificáveis, como nome, endereço de e-mail ou número de telefone, a menos que você opte por fornecê-las voluntariamente através de formulários de contato.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">2. Como Usamos as Informações</h2>
          <p>As informações coletadas são utilizadas para:</p>
          <ul>
            <li>Melhorar a experiência do usuário no site</li>
            <li>Analisar padrões de tráfego e comportamento dos visitantes</li>
            <li>Personalizar conteúdo e ofertas relevantes</li>
            <li>Cumprir obrigações legais</li>
          </ul>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">3. Cookies</h2>
          <p>
            Utilizamos cookies para melhorar sua experiência de navegação. Cookies são pequenos arquivos de texto armazenados em seu dispositivo que nos ajudam a:
          </p>
          <ul>
            <li>Lembrar suas preferências</li>
            <li>Entender como você interage com o site</li>
            <li>Fornecer conteúdo personalizado</li>
          </ul>
          <p>
            Você pode desativar cookies através das configurações do seu navegador, mas isso pode afetar algumas funcionalidades do site.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">4. Links de Afiliados</h2>
          <p>
            Este site contém <strong>links de afiliados</strong> para o Mercado Livre. Quando você clica nesses links e realiza uma compra, podemos receber uma comissão. 
            Isso não afeta o preço que você paga e nos ajuda a manter o site funcionando e produzindo conteúdo de qualidade.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">5. Compartilhamento de Informações</h2>
          <p>
            Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário para:
          </p>
          <ul>
            <li>Cumprir com obrigações legais</li>
            <li>Proteger nossos direitos e propriedade</li>
            <li>Prevenir fraudes ou abusos</li>
          </ul>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">6. Segurança</h2>
          <p>
            Implementamos medidas de segurança adequadas para proteger as informações coletadas contra acesso não autorizado, alteração ou destruição.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">7. Direitos do Usuário</h2>
          <p>Você tem o direito de:</p>
          <ul>
            <li>Acessar as informações que temos sobre você</li>
            <li>Solicitar a correção de dados incorretos</li>
            <li>Solicitar a exclusão de seus dados</li>
            <li>Opor-se ao processamento de seus dados</li>
          </ul>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">8. Alterações nesta Política</h2>
          <p>
            Podemos atualizar esta política de privacidade periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre quaisquer alterações.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">9. Contato</h2>
          <p>
            Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato através da página <a href="/sobre" className="text-primary hover:underline">Sobre Nós</a>.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Privacidade;
