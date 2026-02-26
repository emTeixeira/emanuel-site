import { PanelTop, Globe, Code2 } from "lucide-react";

const services = [
  {
    icon: PanelTop,
    title: "Landing Pages",
    description: "Páginas de alta conversão, otimizadas para captar leads e gerar resultados reais para o seu negócio.",
  },
  {
    icon: Globe,
    title: "Sites Institucionais",
    description: "Sites profissionais que transmitem credibilidade e fortalecem a presença digital da sua empresa.",
  },
  {
    icon: Code2,
    title: "Projetos Personalizados",
    description: "Soluções sob medida desenvolvidas com as tecnologias mais modernas do mercado.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
            Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            O que eu posso <span className="gradient-text">criar para você</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Soluções web completas para alavancar o seu negócio no mundo digital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="gradient-border rounded-xl p-8 text-left hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                <service.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
