import Image from "next/image";
import Link from "next/link";
import { InstagramLogo, FacebookLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { NAV_LINKS } from "@/lib/data";
import { waLink, DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark py-[52px] pb-6">
      <div className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-11 border-b border-white/10 px-5 pb-9">
        <div className="min-w-[220px] flex-1 basis-[260px]">
          <Image src="/brand/logo-white.svg" alt="+Clima" width={130} height={34} className="mb-3.5 h-8 w-auto" />
          <p className="mb-4 max-w-[280px] text-[0.9rem] leading-relaxed text-footer-text">
            Manutenção, instalação e conserto de ar-condicionado com atendimento próximo — para sua casa ou empresa.
          </p>
          <div className="flex gap-2.5">
            <SocialLink href="#" label="Instagram" icon={InstagramLogo} />
            <SocialLink href="#" label="Facebook" icon={FacebookLogo} />
            <SocialLink href={waLink(DEFAULT_WA_MESSAGE)} label="WhatsApp" icon={WhatsappLogo} />
          </div>
        </div>

        <div className="basis-[190px]">
          <h4 className="mb-4 text-sm font-bold text-white">Navegação</h4>
          <div className="flex flex-col gap-2.5">
            {NAV_LINKS.filter((l) => l.href !== "#topo").map((link) => (
              <Link key={link.href} href={link.href} className="text-[0.88rem] text-footer-text hover:text-white">
                {link.label}
              </Link>
            ))}
            <Link href="#areas" className="text-[0.88rem] text-footer-text hover:text-white">
              Áreas atendidas
            </Link>
          </div>
        </div>

        <div className="basis-[220px]">
          <h4 className="mb-4 text-sm font-bold text-white">Contato</h4>
          <div className="flex flex-col gap-2.5 text-[0.88rem] text-footer-text">
            <a href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              WhatsApp: (81) 99999-9999
            </a>
            <a href="mailto:contato@maisclima.com.br" className="hover:text-white">
              contato@maisclima.com.br
            </a>
            <span>Rua Example, 123 – Centro, Tamandaré-PE</span>
            <span>Seg a sáb, 8h às 19h</span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-5 flex max-w-[1240px] flex-wrap justify-between gap-2.5 px-5">
        <span className="text-[0.82rem] text-footer-text-dim">© {year} +Clima. Todos os direitos reservados.</span>
        <span className="text-[0.82rem] text-footer-text-dim">Conforto que dá pra confiar.</span>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: typeof WhatsappLogo;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 text-social-icon transition-colors hover:bg-cta hover:text-white"
    >
      <Icon weight="fill" className="h-4 w-4" />
    </a>
  );
}
