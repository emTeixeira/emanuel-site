import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            ← Voltar ao início
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold mb-8">Termos de Privacidade</h1>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">1. Coleta de Informações</h2>
              <p>
                Este site pode coletar informações pessoais quando você entra em contato via WhatsApp ou formulário de contato, como nome, e-mail e telefone. Essas informações são utilizadas exclusivamente para responder às suas solicitações.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">2. Uso das Informações</h2>
              <p>
                As informações coletadas são utilizadas para comunicação sobre serviços, envio de propostas comerciais e melhoria da experiência do usuário. Não compartilhamos seus dados com terceiros.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">3. Cookies</h2>
              <p>
                Este site pode utilizar cookies para melhorar a experiência de navegação. Você pode desativar os cookies nas configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">4. Segurança</h2>
              <p>
                Adotamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, alteração ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">5. Contato</h2>
              <p>
                Para dúvidas sobre esta política de privacidade, entre em contato pelo e-mail: contato@emanuelteixeira.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
