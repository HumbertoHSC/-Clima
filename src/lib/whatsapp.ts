export const WHATSAPP_NUMBER = "5581999999999"; // TODO: substituir pelo número real (DDI+DDD+número)

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WA_MESSAGE =
  "Olá! Vim pelo site e gostaria de solicitar um orçamento.";
