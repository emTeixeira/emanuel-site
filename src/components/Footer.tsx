import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="text-xl font-bold gradient-text">
              Emanuel Teixeira
            </a>
            <p className="text-sm text-muted-foreground mt-3 max-w-sm leading-relaxed">
              Desenvolvedor web especializado em criar sites que convertem visitantes em clientes.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Links</h4>
            <ul className="space-y-2">
              <li><a href="/#servicos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Serviços</a></li>
              <li><a href="/#projetos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projetos</a></li>
              <li><a href="/#depoimentos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Depoimentos</a></li>
              <li><Link to="/sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sobre mim</Link></li>
              <li><Link to="/privacidade" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Termos de Privacidade</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Contato</h4>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/emanuelteixeira"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-muted-foreground" />
              </a>
              <a
                href="https://github.com/emanuelteixeira"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} className="text-muted-foreground" />
              </a>
              <a
                href="mailto:contato@emanuelteixeira.com"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="E-mail"
              >
                <Mail size={18} className="text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Emanuel Teixeira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
