import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS.legalName,
    short_name: BUSINESS.name,
    description:
      "Instalação, conserto e higienização de ar-condicionado em Tamandaré-PE e Mata Sul.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0e13",
    theme_color: "#0b0e13",
    lang: "pt-BR",
    icons: [{ src: "/brand/selo.jpg", sizes: "600x600", type: "image/jpeg" }],
  };
}
