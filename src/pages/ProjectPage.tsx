import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { getWhatsAppLink } from "@/lib/whatsapp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Projeto não encontrado</h1>
          <Link to="/" className="text-primary hover:underline inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  // SEO - update document title
  document.title = project.seo.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", project.seo.description);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Link
            to="/#projetos"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Voltar aos projetos
          </Link>

          <div className="rounded-xl overflow-hidden mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video object-cover"
            />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {project.fullDescription}
          </p>

          <div className="gradient-border rounded-xl p-6 sm:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">Funcionalidades</h2>
            <ul className="space-y-3">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 size={18} className="text-primary shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {project.liveUrl && (
            <div className="text-center mb-8">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border border-primary text-primary hover:bg-primary/10 transition-colors"
              >
                <ExternalLink size={16} />
                Ver site online
              </a>
            </div>
          )}

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Gostou deste projeto? Vamos criar algo similar para o seu negócio.
            </p>
            <a
              href={getWhatsAppLink(project.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg px-8 py-4 rounded-lg text-base font-semibold text-primary-foreground hover:opacity-90 transition-opacity inline-flex items-center gap-2 glow-shadow"
            >
              Quero um site assim
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectPage;
