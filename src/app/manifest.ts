import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "+Clima — Ar-condicionado em Tamandaré e Mata Sul de PE",
    short_name: "+Clima",
    description:
      "Instalação, manutenção e higienização de ar-condicionado em Tamandaré-PE e Mata Sul de Pernambuco.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf9f5",
    theme_color: "#14335a",
    lang: "pt-BR",
    icons: [
      {
        src: "/brand/icon-navy.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
