import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const FinalCTA = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-3xl mx-auto text-center gradient-border rounded-2xl p-10 sm:p-16 overflow-hidden">
          {/* Subtle top light effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-40 bg-gradient-to-b from-primary/15 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pronto para ter um site profissional que{" "}
            <span className="gradient-text">gera resultados?</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Vamos conversar sobre o seu projeto. Sem compromisso, sem enrolação.
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg px-8 py-4 rounded-lg text-base font-semibold text-primary-foreground hover:opacity-90 transition-opacity inline-flex items-center gap-2 glow-shadow"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
