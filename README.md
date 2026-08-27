# +Clima Refrigeração — landing page

Landing page de conversão para a **+Clima Refrigeração**, de Tamandaré-PE:
instalação, conserto, manutenção, higienização e carga de gás de ar-condicionado
em toda a Mata Sul de Pernambuco.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm start        # sobe o build
```

## Stack

| Camada           | Escolha                                                        |
| ---------------- | -------------------------------------------------------------- |
| Framework        | Next.js 15 (App Router) + React 19 + TypeScript                  |
| Estilo           | Tailwind CSS v4 com tokens próprios (`src/app/globals.css`)      |
| Animação de cena | GSAP 3 + ScrollTrigger (reveal, parallax, timeline do processo)  |
| Animação de UI   | Framer Motion (menu, acordeão, carrossel, lightbox)              |
| Rolagem          | Lenis, sincronizado ao ticker do GSAP                            |
| Tipografia       | Archivo (eixo `wdth`), Public Sans, JetBrains Mono via next/font |

## Sistema de design

Tudo vive em `@theme` no `globals.css` — não há cor padrão do Tailwind na
interface.

- **Base** grafite/antracite (`--color-ink`, `--color-ink-2`…)
- **Frio** azul-gelo saturado (`--color-ice`), usado com moderação
- **Quente** laranja queimado (`--color-ember`) como contraponto e cor de ação
- **Papel** (`--color-paper`) na faixa de números, para quebrar o ritmo escuro
- Texturas utilitárias: `u-noise` (grão), `u-blueprint` (grid técnico),
  `u-grille` (lâminas de ventilação), `u-tag` (etiqueta monoespaçada),
  `u-expanded` / `u-condensed` (eixo de largura da Archivo)

Cantos são chanfrados (`clip-path`), não arredondados; divisores são fios de
1px; os ícones são SVG desenhados à mão em `src/components/ui/Icons.tsx`.

## Estrutura

```
src/
├── app/                  layout, página, metadata, sitemap, robots, OG image
├── components/
│   ├── sections/         Header, Hero, Promo, Differentials, Services,
│   │                     Process, Stats, Gallery, Faq, CtaFinal, Footer
│   ├── motion/           Reveal, Stagger, Parallax, Counter
│   ├── providers/        SmoothScroll (Lenis + GSAP + trava de rolagem)
│   └── ui/               Logo, Icons, MagneticButton, Marquee, SectionHeading,
│                         Preloader, WhatsAppFloat
├── hooks/                useMediaQuery / usePrefersReducedMotion / useIsDesktop
└── lib/                  site.ts (conteúdo), whatsapp.ts, utils.ts
```

**Todo o texto do site está em `src/lib/site.ts`.** Para trocar o valor da
promoção (`PROMO`), telefone, cidades atendidas ou perguntas do FAQ, mexa só
nesse arquivo.

A promoção aparece em quatro pontos, todos alimentados por `PROMO`: ficha no
hero, fita do preço na faixa laranja, a própria faixa logo abaixo do hero e o
lembrete no fechamento. O FAQ também cita o valor.

## Movimento

- Entrada do hero coreografada: palavras sobem de dentro de máscaras, a foto é
  revelada por `clip-path` animado e as fichas técnicas entram em cascata.
- Reveal por seção com tempos variados (`Reveal`, `Stagger`).
- Parallax por scrub só em telas ≥768px — no mobile o custo não compensa.
- Linha do tempo do processo presa ao scroll: o trilho se preenche e cada etapa
  acende ao entrar na altura de leitura.
- Contadores, marquees, botões magnéticos, acordeão com altura animada,
  carrossel com arraste e inércia, lightbox com transição compartilhada.

### Acessibilidade e `prefers-reduced-motion`

Quando o sistema pede menos movimento:

- o Lenis **não é iniciado** (rolagem nativa);
- as timelines do GSAP são desligadas por `gsap.matchMedia()`;
- o Framer Motion segue a preferência via `<MotionConfig reducedMotion="user">`;
- o preloader é pulado;
- uma regra em `globals.css` devolve `opacity: 1` a tudo que nasce invisível —
  e um `<noscript>` faz o mesmo quando não há JavaScript.

Também: navegação por teclado com foco visível, `aria-expanded`/`aria-controls`
no menu e no FAQ, diálogo do lightbox com foco gerenciado e `Esc`, link de
"pular para o conteúdo", alt em todas as imagens de conteúdo.

## Contato

A página não tem formulário: todo chamado sai por WhatsApp com a mensagem já
escrita (`src/lib/whatsapp.ts`) ou por telefone. Cada serviço, a promoção e o
botão flutuante abrem a conversa com um texto próprio, para o atendimento já
saber do que se trata.

## Imagens

`scripts/prepare-images.mjs` recorta o material de divulgação da marca (os dois
JPEGs na raiz do projeto) em `public/images` e `public/brand` usando sharp:

```bash
node scripts/prepare-images.mjs
```

As fotos nunca aparecem cruas: recebem dessaturação, camada de cor fria em
`mix-blend-color`, grelha e vinheta.

> **Pendência do cliente:** a galeria (`GALLERY` em `src/lib/site.ts`) usa esse
> material como moldura. Assim que houver fotos reais de atendimentos, basta
> trocar o campo `src` de cada item — as legendas já descrevem os serviços.

## SEO e busca local

O domínio real é `maisclimatamandare.com.br` (`BUSINESS.url` em `src/lib/site.ts`)
— aponte o DNS para a Vercel antes de divulgar o link, senão canonical, Open
Graph e sitemap continuam corretos no código mas o link público não resolve.

Dois blocos de JSON-LD em `src/app/layout.tsx`:

- **`HVACBusiness`** — nome, telefone, área de atuação (`AREAS`), horário e o
  catálogo de serviços (`hasOfferCatalog`, gerado a partir de `SERVICES`).
- **`FAQPage`** — as mesmas perguntas do acordeão (`FAQS`), para o Google poder
  responder direto no resultado de busca em vez de só linkar a página.

Nenhum dos dois substitui o **Google Business Profile** — para aparecer no mapa
local ("manutenção de ar condicionado perto de mim", pacote de 3 resultados no
Maps) é preciso reivindicar/criar o perfil da +Clima no Google, com o mesmo
nome, telefone e horário daqui, e reunir avaliações reais de clientes. Isso não
é algo que o código resolve sozinho.

## Antes de publicar

1. Conferir o `@` do Instagram em `BUSINESS.instagram` (`src/lib/site.ts`).
2. Apontar o DNS de `maisclimatamandare.com.br` para o projeto na Vercel.
3. Preencher rua e número em `BUSINESS.postalCode`/JSON-LD (`src/lib/site.ts` e
   `src/app/layout.tsx`) — hoje o endereço tem CEP (55578-000), cidade e
   estado reais, mas sem rua e número, para não publicar algo inventado. Sem
   isso o Google tem menos confiança para mostrar o negócio no mapa local.
4. Substituir as fotos da galeria pelas reais.
5. Confirmar as condições da promoção em `PROMO` (aparelhos cobertos, limite de
   BTU, se o valor muda fora de Tamandaré).
6. Criar/reivindicar o Google Business Profile e verificar o site no Google
   Search Console (envie o sitemap em `/sitemap.xml`) assim que o domínio
   estiver no ar.
