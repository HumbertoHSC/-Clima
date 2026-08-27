import Image from "next/image";
import { BUSINESS, NAV_LINKS, SERVICES, AREAS } from "@/lib/site";
import { waLink, MESSAGES } from "@/lib/whatsapp";
import { IconInstagram, IconWhatsApp, IconArrow } from "@/components/ui/Icons";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Tamandar%C3%A9%2C+PE";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-steel bg-void">
      {/* marca d'água tipográfica sangrando na base */}
      <span
        aria-hidden="true"
        className="u-expanded pointer-events-none absolute -bottom-10 left-1/2 w-full -translate-x-1/2 select-none text-center text-[clamp(5rem,19vw,17rem)] leading-none text-white-warm/[0.035]"
      >
        +CLIMA
      </span>

      <div className="relative mx-auto max-w-[1440px] px-5 pb-14 pt-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* marca */}
          <div className="lg:col-span-4">
            {/* Aqui entra o selo original da marca, ao lado do tipo do site. */}
            <div className="flex items-center gap-4">
              <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-steel-2">
                <Image
                  src="/brand/selo.jpg"
                  alt="Selo da +Clima Refrigeração"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="u-expanded text-2xl font-bold text-white-warm">
                  +Clima
                </span>
                <span className="u-tag mt-1.5 text-fog">Refrigeração</span>
              </span>
            </div>

            <p className="mt-6 max-w-xs leading-relaxed text-fog">
              Instalação, conserto e higienização de ar-condicionado em Tamandaré e
              na Mata Sul de Pernambuco. Técnico certificado, garantia por escrito.
            </p>

            <div className="mt-7 flex gap-3">
              <a
                href={waLink(MESSAGES.orcamento)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar no WhatsApp"
                className="flex h-11 w-11 items-center justify-center border border-steel-2 text-fog transition-colors hover:border-ice hover:text-ice"
              >
                <IconWhatsApp className="h-4 w-4" />
              </a>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da +Clima"
                className="flex h-11 w-11 items-center justify-center border border-steel-2 text-fog transition-colors hover:border-ice hover:text-ice"
              >
                <IconInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* navegação */}
          <nav aria-label="Rodapé" className="lg:col-span-2">
            <h2 className="u-tag mb-5 text-fog/60">Navegação</h2>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.95rem] text-chalk transition-colors hover:text-ice"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* serviços */}
          <div className="lg:col-span-3">
            <h2 className="u-tag mb-5 text-fog/60">Serviços</h2>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href={waLink(MESSAGES.servico(service.title))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.95rem] text-chalk transition-colors hover:text-ice"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contato */}
          <div className="lg:col-span-3">
            <h2 className="u-tag mb-5 text-fog/60">Contato</h2>
            <ul className="flex flex-col gap-4 text-[0.95rem]">
              <li>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="u-condensed text-xl font-semibold text-white-warm transition-colors hover:text-ice"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="text-fog">{BUSINESS.hours}</li>
              <li>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-chalk transition-colors hover:text-ice"
                >
                  Base em {BUSINESS.base}
                  <span className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <IconArrow />
                  </span>
                </a>
              </li>
              <li className="text-fog">
                Atende: {AREAS.slice(0, 5).join(", ")} e região.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-steel pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="u-tag text-fog/50">
            © {year} {BUSINESS.legalName} · Todos os direitos reservados
          </p>
          <p className="u-tag text-fog/50">
            Emergência? Chame a qualquer hora — respondemos no horário comercial.
          </p>
        </div>
      </div>
    </footer>
  );
}
