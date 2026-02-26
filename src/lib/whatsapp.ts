const WHATSAPP_NUMBER = "5521975212775";

export const getWhatsAppLink = (message?: string) => {
  const defaultMessage = "Olá! Gostaria de saber mais sobre seus serviços de desenvolvimento web.";
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};
