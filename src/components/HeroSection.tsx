import { ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Badge } from "@/components/ui/badge";
import heroBg from "@/assets/hero-bg.jpg";

const heroBadges = [
  "Landing Pages",
  "Sites Institucionais",
  "SEO",
  "Alta Conversão",
  "Design Responsivo",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <div className="animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-6">
            Web Developer
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6">
            Sites que transformam{" "}
            <span className="gradient-text">visitantes em clientes</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
            Desenvolvimento estratégico de landing pages e sites profissionais com foco em performance, design moderno e conversão
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {heroBadges.map((text) => (
              <Badge
                key={text}
                variant="outline"
                className="px-3 py-1 text-[10px] font-medium tracking-wider uppercase bg-transparent border-border/50"
                style={{ color: "#9ca3b0" }}
              >
                {text}
              </Badge>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg px-8 py-4 rounded-lg text-base font-semibold text-primary-foreground hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 glow-shadow"
            >
              Solicitar Orçamento
              <ArrowRight size={18} />
            </a>
            <a
              href="#projetos"
              className="px-8 py-4 rounded-lg text-base font-semibold text-foreground border border-border hover:bg-muted transition-colors inline-flex items-center justify-center"
            >
              Ver Projetos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
