import { Search, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "1",
    title: "Estratégia",
    description: "Entendo o seu negócio, público-alvo e objetivos para criar um plano sob medida.",
  },
  {
    icon: Code,
    step: "2",
    title: "Desenvolvimento",
    description: "Codifico o site com tecnologias modernas, design responsivo e foco em performance.",
  },
  {
    icon: Rocket,
    step: "3",
    title: "Lançamento",
    description: "Publico o site otimizado para SEO e acompanho os resultados com você.",
  },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
            Processo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Como <span className="gradient-text">funciona</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Um processo simples e eficiente para transformar sua ideia em realidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.step} className="text-center relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/40 to-transparent" />
              )}
              <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6 glow-shadow">
                <step.icon size={32} className="text-primary-foreground" />
              </div>
              <span className="text-3xl font-extrabold gradient-text mb-2 block">
                {step.step}
              </span>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
