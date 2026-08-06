export const WHATSAPP_NUMBER = "558173023718";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WA_MESSAGE =
  "Olá! Vim pelo site e gostaria de solicitar um orçamento.";
