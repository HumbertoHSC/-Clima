import { BUSINESS } from "./site";

/** Monta o deep link do WhatsApp com a mensagem já escrita. */
export function waLink(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_MESSAGE =
  "Olá! Vim pelo site da +Clima e quero um orçamento.";

export const MESSAGES = {
  orcamento: DEFAULT_MESSAGE,
  urgente:
    "Olá! Meu ar-condicionado parou de gelar e preciso de atendimento com urgência.",
  servico: (servico: string) =>
    `Olá! Vim pelo site da +Clima e quero um orçamento de ${servico.toLowerCase()}.`,
  promo:
    "Olá! Vi no site a promoção de limpeza de split a partir de R$ 100 e quero agendar.",
} as const;

