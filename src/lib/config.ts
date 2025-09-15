export const WHATSAPP_NUMBER = "5531997143677";

export const WHATSAPP_MESSAGES = {
  scheduleDate: "Olá! Gostaria de agendar uma data no Cine 104.",
  scheduleVisit: "Olá! Gostaria de agendar uma visita para conhecer o Cine 104.",
};

export function createWhatsAppLink(message: string, phone: string = WHATSAPP_NUMBER): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
