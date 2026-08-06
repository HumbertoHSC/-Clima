import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Public_Sans } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://www.maisclima.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "+Clima | Manutenção e Instalação de Ar-Condicionado em Tamandaré e Mata Sul de PE",
  description:
    "+Clima realiza instalação, manutenção preventiva e corretiva, higienização e contratos de manutenção de ar-condicionado em Tamandaré-PE e Mata Sul de Pernambuco. Orçamento rápido pelo WhatsApp.",
  keywords: [
    "ar condicionado Tamandaré",
    "manutenção de ar condicionado PE",
    "instalação de split",
    "higienização ar condicionado",
    "Mata Sul de Pernambuco",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "+Clima | Ar-condicionado com conforto que dá pra confiar",
    description:
      "Instalação, manutenção e higienização de ar-condicionado em Tamandaré-PE e Mata Sul de Pernambuco. Fale agora pelo WhatsApp.",
    url: siteUrl,
    siteName: "+Clima",
  },
  twitter: {
    card: "summary_large_image",
    title: "+Clima | Ar-condicionado com conforto que dá pra confiar",
    description:
      "Instalação, manutenção e higienização de ar-condicionado em Tamandaré-PE e Mata Sul de Pernambuco.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // verification: { google: "SUBSTITUA-PELO-CODIGO-DO-GOOGLE-SEARCH-CONSOLE" },
  icons: {
    icon: "/brand/icon-navy.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": `${siteUrl}/#business`,
  name: "+Clima",
  url: siteUrl,
  image: `${siteUrl}/brand/logo-horizontal.svg`,
  logo: `${siteUrl}/brand/logo-horizontal.svg`,
  description:
    "Instalação, manutenção preventiva e corretiva, higienização e contratos de manutenção de ar-condicionado.",
  // TODO: endereço e coordenadas são placeholders — substituir pelos dados reais do negócio.
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Example, 123 – Centro",
    addressLocality: "Tamandaré",
    addressRegion: "PE",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -8.7591,
    longitude: -35.1039,
  },
  areaServed: [
    "Tamandaré-PE",
    "Rio Formoso-PE",
    "Barreiros-PE",
    "Sirinhaém-PE",
    "Água Preta-PE",
    "Mata Sul de Pernambuco",
  ],
  telephone: "+55-81-7302-3718",
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "19:00",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${plusJakarta.variable} ${publicSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-hidden antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-[999] focus:rounded-br-lg focus:bg-navy focus:px-4 focus:py-2.5 focus:text-white"
        >
          Pular para o conteúdo
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
