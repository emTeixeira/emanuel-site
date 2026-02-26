export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  image: string;
  liveUrl?: string;
  whatsappMessage: string;
  seo: {
    title: string;
    description: string;
  };
}

export const projects: Project[] = [
  {
    slug: "projeto-dentista",
    title: "Site para Clínica Odontológica",
    shortDescription: "Landing page moderna para clínica odontológica com agendamento online e galeria de resultados.",
    fullDescription: "Desenvolvemos um site completo para uma clínica odontológica, focado em converter visitantes em pacientes. O design transmite confiança e profissionalismo, com integração de agendamento online e galeria de antes/depois dos tratamentos.",
    features: ["Design responsivo", "Agendamento online", "Galeria de resultados", "SEO otimizado", "Integração WhatsApp"],
    image: "/assets/projects/projeto-dentista.jpg",
    liveUrl: "",
    whatsappMessage: "Olá, gostaria de solicitar um orçamento para um site de clínica odontológica.",
    seo: {
      title: "Site para Dentista | Emanuel Teixeira - Web Developer",
      description: "Site profissional para clínicas odontológicas com foco em conversão e agendamento online.",
    },
  },
  {
    slug: "projeto-advogado",
    title: "Site para Escritório de Advocacia",
    shortDescription: "Site institucional elegante para escritório de advocacia com áreas de atuação e formulário de contato.",
    fullDescription: "Criamos um site institucional sofisticado para um escritório de advocacia, destacando áreas de atuação e transmitindo autoridade e credibilidade. Inclui formulário de contato integrado e blog para publicação de artigos jurídicos.",
    features: ["Design elegante", "Áreas de atuação", "Blog integrado", "Formulário de contato", "Performance otimizada"],
    image: "/assets/projects/projeto-advogado.jpg",
    liveUrl: "",
    whatsappMessage: "Olá, gostaria de solicitar um orçamento para um site de escritório de advocacia.",
    seo: {
      title: "Site para Advogado | Emanuel Teixeira - Web Developer",
      description: "Site institucional profissional para escritórios de advocacia com foco em credibilidade e conversão.",
    },
  },
  {
    slug: "projeto-doceria",
    title: "Site para Doceria e Confeitaria",
    shortDescription: "Site apetitoso para doceria e confeitaria com cardápio digital interativo e reservas online.",
    fullDescription: "Desenvolvemos um site atraente para doceria e confeitaria com cardápio digital interativo e galeria de fotos dos pratos. O design foca em despertar o apetite e facilitar a experiência do cliente.",
    features: ["Cardápio digital", "Galeria de fotos", "Integração delivery", "Google Maps integrado"],
    image: "/assets/projects/projeto-doceria.jpg",
    liveUrl: "",
    whatsappMessage: "Olá, gostaria de solicitar um orçamento para um site de doceria e confeitaria.",
    seo: {
      title: "Site para Doceria e Confeitaria | Emanuel Teixeira - Web Developer",
      description: "Site profissional para docerias e confeitarias com cardápio digital e sistema de reservas online.",
    },
  },
  {
    slug: "projeto-academia",
    title: "Site para Academia",
    shortDescription: "Landing page energética para academia com planos, horários e área do aluno.",
    fullDescription: "Criamos uma landing page dinâmica e energética para uma academia, com apresentação dos planos, grade de horários das aulas, galeria do espaço e depoimentos de alunos. Design focado em motivação e conversão de novos membros.",
    features: ["Grade de horários", "Planos e preços", "Galeria do espaço", "Depoimentos", "CTA para matrícula"],
    image: "/assets/projects/projeto-academia.jpg",
    liveUrl: "",
    whatsappMessage: "Olá, gostaria de solicitar um orçamento para um site de academia.",
    seo: {
      title: "Site para Academia | Emanuel Teixeira - Web Developer",
      description: "Site profissional para academias com foco em captação de alunos e conversão.",
    },
  },
  {
    slug: "projeto-portfolio",
    title: "Site para Portfólio Profissional",
    shortDescription: "Site de portfólio profissional para desenvolvedores e designers com apresentação de projetos e habilidades.",
    fullDescription: "Criamos um site de portfólio profissional para desenvolvedores e designers, com apresentação de projetos, habilidades técnicas e informações de contato. Design moderno e responsivo que destaca o trabalho do profissional.",
    features: ["Apresentação de projetos", "Habilidades técnicas", "Informações de contato", "Design responsivo", "SEO otimizado"],
    image: "/assets/projects/projeto-portfolio.jpg",
    liveUrl: "https://emteixeira.github.io/react-portfolio/",
    whatsappMessage: "Olá, gostaria de solicitar um orçamento para um site de portfólio profissional.",
    seo: {
      title: "Site para Portfólio Profissional | Emanuel Teixeira - Web Developer",
      description: "Site de portfólio profissional para desenvolvedores e designers com apresentação de projetos e habilidades.",
    },
  },
];
