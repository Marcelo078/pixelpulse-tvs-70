import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Termos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <article className="container max-w-4xl prose prose-lg">
          <h1 className="font-display text-4xl font-bold mb-6">Termos de Uso</h1>
          <p className="text-muted-foreground mb-8">Última atualização: 02 de Dezembro de 2025</p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e usar o site <strong>Melhores TVs</strong>, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. 
            Se você não concordar com qualquer parte destes termos, não deve usar este site.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">2. Uso do Site</h2>
          <p>Este site é fornecido para fins informativos e educacionais. Você concorda em usar o site apenas para fins legais e de maneira que não:</p>
          <ul>
            <li>Infrinja os direitos de terceiros</li>
            <li>Restrinja ou iniba o uso do site por outras pessoas</li>
            <li>Viole qualquer lei ou regulamento aplicável</li>
            <li>Transmita conteúdo malicioso ou prejudicial</li>
          </ul>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">3. Conteúdo e Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo presente neste site, incluindo textos, imagens, gráficos, logotipos e código, é propriedade de <strong>Melhores TVs</strong> 
            ou de seus fornecedores de conteúdo e está protegido por leis de direitos autorais e propriedade intelectual.
          </p>
          <p>
            Você não pode copiar, reproduzir, distribuir ou criar trabalhos derivados do conteúdo sem permissão expressa por escrito.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">4. Links de Afiliados</h2>
          <p>
            Este site participa de programas de afiliados, incluindo o programa de afiliados do <strong>Mercado Livre</strong>. 
            Quando você clica em links de afiliados e realiza uma compra, podemos receber uma comissão sem custo adicional para você.
          </p>
          <p>
            Nosso conteúdo editorial não é influenciado por essas parcerias comerciais, e sempre fornecemos análises honestas e imparciais.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">5. Isenção de Responsabilidade</h2>
          <p>
            As informações fornecidas neste site são apenas para fins informativos gerais. Embora nos esforcemos para manter as informações atualizadas e corretas, 
            não fazemos representações ou garantias de qualquer tipo, expressas ou implícitas, sobre a completude, precisão, confiabilidade ou disponibilidade do conteúdo.
          </p>
          <p>
            Qualquer dependência que você coloque em tais informações é estritamente por sua conta e risco.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">6. Preços e Disponibilidade</h2>
          <p>
            Os preços dos produtos mencionados neste site podem variar e estão sujeitos a alterações sem aviso prévio. 
            Sempre verifique os preços atuais e a disponibilidade diretamente no site do varejista antes de fazer uma compra.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">7. Links Externos</h2>
          <p>
            Este site pode conter links para sites externos que não são fornecidos ou mantidos por nós. 
            Não temos controle sobre o conteúdo e as práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">8. Modificações dos Termos</h2>
          <p>
            Reservamo-nos o direito de revisar estes termos de uso a qualquer momento. Ao continuar a usar este site após tais modificações, 
            você concorda em estar vinculado aos termos revisados.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">9. Lei Aplicável</h2>
          <p>
            Estes termos serão regidos e interpretados de acordo com as leis do Brasil, e você se submete à jurisdição exclusiva dos tribunais brasileiros.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">10. Contato</h2>
          <p>
            Se você tiver dúvidas sobre estes Termos de Uso, entre em contato através da página <a href="/sobre" className="text-primary hover:underline">Sobre Nós</a>.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Termos;
