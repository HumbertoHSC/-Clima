import type { Metadata, Viewport } from "next";
import { Archivo, Public_Sans, JetBrains_Mono } from "next/font/google";
import { BUSINESS, AREAS } from "@/lib/site";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";

/* Display: grotesca industrial com eixo de largura — expandida nos títulos,
   condensada nos rótulos. Nada de Inter/Poppins. */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

/* Apoio: neutra, alta legibilidade em texto corrido. */
const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

/* Técnica: etiquetas, índices e medidas. */
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default:
      "+Clima Refrigeração | Conserto e instalação de ar-condicionado em Tamandaré-PE",
    template: "%s | +Clima Refrigeração",
  },
  description:
    "Ar-condicionado que parou de gelar? A +Clima atende no mesmo dia em Tamandaré e na Mata Sul de PE: instalação, conserto, manutenção preventiva, higienização e carga de gás. Orçamento fechado antes e 90 dias de garantia.",
  keywords: [
    "conserto de ar condicionado Tamandaré",
    "instalação de split Tamandaré PE",
    "manutenção de ar condicionado Mata Sul",
    "higienização de ar condicionado Rio Formoso",
    "carga de gás ar condicionado Barreiros",
    "técnico de refrigeração Pernambuco",
  ],
  authors: [{ name: BUSINESS.legalName }],
  creator: BUSINESS.legalName,
  alternates: { canonical: BUSINESS.url },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BUSINESS.url,
    siteName: BUSINESS.legalName,
    title: "+Clima Refrigeração | Seu ar parou de gelar? A gente resolve hoje",
    description:
      "Instalação, conserto e higienização de ar-condicionado em Tamandaré-PE e Mata Sul. Atendimento no mesmo dia, preço fechado antes e 90 dias de garantia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "+Clima Refrigeração | Ar-condicionado em Tamandaré-PE",
    description:
      "Conserto, instalação e higienização com atendimento no mesmo dia na Mata Sul de Pernambuco.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#0b0e13",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": `${BUSINESS.url}/#business`,
  name: BUSINESS.legalName,
  alternateName: BUSINESS.name,
  url: BUSINESS.url,
  image: `${BUSINESS.url}/brand/selo.jpg`,
  description:
    "Instalação, conserto, manutenção preventiva, higienização e carga de gás de ar-condicionado em Tamandaré-PE e Mata Sul de Pernambuco.",
  telephone: BUSINESS.phoneRaw,
  // Endereço completo omitido de propósito: só entra quando o cliente confirmar
  // rua e número reais. Localidade e área de atuação já são verdadeiras.
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.state,
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.coords.lat,
    longitude: BUSINESS.coords.lng,
  },
  areaServed: AREAS.map((area) => ({
    "@type": "City",
    name: `${area} - PE`,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  priceRange: "$$",
  sameAs: [BUSINESS.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${publicSans.variable} ${jetbrains.variable}`}
    >
      <head>
        {/* Sem JS, nada do que depende do reveal pode ficar invisível. */}
        <noscript>
          <style>{`[data-reveal],[data-stagger-item],[data-step]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-screen overflow-x-hidden antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-ice focus:px-4 focus:py-2.5 focus:text-ink"
        >
          Pular para o conteúdo
        </a>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
