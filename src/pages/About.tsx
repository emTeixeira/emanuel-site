import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Voltar ao início
          </Link>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
              Sobre mim
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold">
              Quem é <span className="gradient-text">Emanuel Teixeira</span>
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Photo */}
            <div className="gradient-border rounded-2xl overflow-hidden aspect-square">
              <img
                src="/assets/about/emanuel.jpg"
                alt="Emanuel Teixeira"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Transformando ideias em <span className="gradient-text">experiências digitais</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sou desenvolvedor web com paixão por criar sites e landing pages que realmente fazem a diferença para os negócios dos meus clientes. Acredito que um bom site vai muito além da estética — ele precisa converter, engajar e gerar resultados.
                </p>
                <p>
                  Com experiência em tecnologias modernas como React, Next.js e Tailwind CSS, desenvolvo projetos com foco em performance, responsividade e SEO. Cada projeto é tratado como único, com uma estratégia personalizada para atingir os objetivos do cliente.
                </p>
                <p>
                  Minha missão é democratizar o acesso a sites profissionais de alta qualidade, ajudando empresas e profissionais autônomos a marcarem presença no mundo digital com autoridade e confiança.
                </p>
                <p>
                  Quando não estou codificando, estou estudando novas tendências de design e tecnologia para entregar sempre o melhor aos meus clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
