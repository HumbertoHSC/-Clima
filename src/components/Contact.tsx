"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsappLogo, Phone, EnvelopeSimple, CheckCircle, WarningCircle } from "@phosphor-icons/react/dist/ssr";
import { SERVICE_OPTIONS } from "@/lib/data";
import { waLink, DEFAULT_WA_MESSAGE, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { Reveal } from "./motion/Reveal";

type FeedbackState = { type: "ok" | "error"; message: string } | null;

export function Contact() {
  const [feedback, setFeedback] = useState<FeedbackState>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "").trim();

    if (!name || !phone) {
      setFeedback({ type: "error", message: "Preencha nome e telefone para continuar." });
      return;
    }

    const text = `Olá! Meu nome é ${name}.\nTelefone: ${phone}\nServiço de interesse: ${service}${
      message ? `\nMensagem: ${message}` : ""
    }`;

    setFeedback({ type: "ok", message: "Obrigado! Vamos abrir o WhatsApp para concluir seu pedido de orçamento." });
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    form.reset();
  }

  return (
    <section id="contato" className="pt-[88px]">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-start gap-12 px-5">
        <Reveal className="min-w-[280px] flex-1 basis-[340px]">
          <span className="mb-3 inline-block text-[0.8rem] font-bold uppercase tracking-wide text-blue">
            Contato
          </span>
          <h2 className="font-head mb-3.5 text-[clamp(1.7rem,3.2vw,2.4rem)] font-extrabold text-navy">
            Vamos cuidar do seu conforto?
          </h2>
          <p className="mb-6 text-[1.02rem] leading-relaxed text-text-soft">
            Preencha o formulário ou fale direto pelo WhatsApp. Respondemos rápido, sem robô e sem enrolação.
          </p>

          <div className="mb-6 flex flex-col gap-4">
            <Channel icon={WhatsappLogo} label="WhatsApp" value="(81) 99999-9999" />
            <Channel icon={Phone} label="Telefone" value="(81) 99999-9999" />
            <Channel icon={EnvelopeSimple} label="E-mail" value="contato@maisclima.com.br" />
          </div>

          <motion.a
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-cta px-7 py-3.5 text-base font-bold text-white"
          >
            Chamar no WhatsApp agora
          </motion.a>
        </Reveal>

        <Reveal className="min-w-[300px] flex-1 basis-[400px] rounded-[20px] border border-card-border bg-white p-8" y={30}>
          <form onSubmit={handleSubmit} aria-label="Formulário de solicitação de orçamento" noValidate>
            <div className="mb-[18px]">
              <label htmlFor="f-name" className="mb-1.5 block text-sm font-bold text-navy">
                Nome
              </label>
              <input
                id="f-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full rounded-xl border-[1.5px] border-input-border bg-input-bg px-3.5 py-3 text-[0.96rem] text-text outline-none focus:border-blue"
              />
            </div>

            <div className="mb-[18px] grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="f-phone" className="mb-1.5 block text-sm font-bold text-navy">
                  Telefone / WhatsApp
                </label>
                <input
                  id="f-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className="w-full rounded-xl border-[1.5px] border-input-border bg-input-bg px-3.5 py-3 text-[0.96rem] text-text outline-none focus:border-blue"
                />
              </div>
              <div>
                <label htmlFor="f-service" className="mb-1.5 block text-sm font-bold text-navy">
                  Tipo de serviço
                </label>
                <select
                  id="f-service"
                  name="service"
                  defaultValue={SERVICE_OPTIONS[0]}
                  className="w-full rounded-xl border-[1.5px] border-input-border bg-input-bg px-3.5 py-3 text-[0.96rem] text-text outline-none focus:border-blue"
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-[18px]">
              <label htmlFor="f-message" className="mb-1.5 block text-sm font-bold text-navy">
                Mensagem
              </label>
              <textarea
                id="f-message"
                name="message"
                placeholder="Conte um pouco sobre o que você precisa..."
                className="min-h-[100px] w-full resize-y rounded-xl border-[1.5px] border-input-border bg-input-bg px-3.5 py-3 text-[0.96rem] text-text outline-none focus:border-blue"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-full bg-cta py-3.5 text-center text-base font-bold text-white"
            >
              Solicitar orçamento
            </motion.button>

            <AnimatePresence mode="wait">
              {feedback && (
                <motion.p
                  key={feedback.message}
                  role="status"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`mt-3 flex items-center justify-center gap-1.5 text-center text-sm font-semibold ${
                    feedback.type === "ok" ? "text-success" : "text-error"
                  }`}
                >
                  {feedback.type === "ok" ? (
                    <CheckCircle weight="fill" className="h-4 w-4" />
                  ) : (
                    <WarningCircle weight="fill" className="h-4 w-4" />
                  )}
                  {feedback.message}
                </motion.p>
              )}
            </AnimatePresence>

            <p className="mt-3 text-center text-xs text-text-softer">
              Ao enviar, abriremos o WhatsApp com sua mensagem já preenchida.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Channel({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof WhatsappLogo;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3.5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ice">
        <Icon weight="bold" className="h-5 w-5 text-navy" />
      </span>
      <div>
        <strong className="block text-[0.95rem] text-navy">{label}</strong>
        <span className="text-[0.88rem] text-text-softer">{value}</span>
      </div>
    </div>
  );
}
