/**
 * Fonte única de conteúdo do site.
 * Dados de negócio reais da +Clima Refrigeração (Tamandaré-PE).
 */

export const BUSINESS = {
  name: "+Clima",
  legalName: "+Clima Refrigeração",
  tagline: "Refrigeração",
  url: "https://www.maisclimatamandare.com.br",
  phoneDisplay: "(81) 97302-3718",
  phoneRaw: "+5581973023718",
  whatsapp: "5581973023718",
  email: "contato@maisclimatamandare.com.br",
  city: "Tamandaré",
  state: "PE",
  base: "Tamandaré – PE",
  hours: "Segunda a sábado, das 8h às 19h",
  hoursShort: "Seg–Sáb · 8h–19h",
  instagram: "https://instagram.com/maisclimarefrigeracao",
  coords: { lat: -8.7591, lng: -35.1039 },
} as const;

export const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Como funciona" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#galeria", label: "Trabalhos" },
  { href: "#contato", label: "Contato" },
] as const;

export const HERO = {
  eyebrow: "Tamandaré · Mata Sul de PE",
  headline: ["Seu ar parou", "de gelar."],
  headlineAccent: "A gente resolve hoje.",
  sub: "Instalação, conserto e higienização de ar-condicionado com técnico certificado, preço fechado antes do serviço e 90 dias de garantia por escrito.",
  ticker: [
    "Limpeza de split a partir de R$ 100",
    "Atendimento no mesmo dia",
    "Garantia de 90 dias",
    "Orçamento sem compromisso",
    "Todas as marcas",
    "Técnicos certificados",
    "Split · Cassete · Piso-teto",
  ],
} as const;

/**
 * Promoção vigente — o gancho comercial da página.
 * TODO (cliente): confirmar as condições antes de publicar (tipo de aparelho
 * coberto, se há limite de BTU e se o valor muda fora de Tamandaré).
 */
export const PROMO = {
  eyebrow: "Promoção vigente",
  title: "Limpeza de split",
  price: "100",
  priceLabel: "a partir de",
  unit: "por aparelho",
  desc: "Higienização de split de parede com filtro, serpentina e bandeja lavados. O valor é confirmado no orçamento, antes de qualquer serviço.",
  includes: [
    "Filtro, serpentina e bandeja",
    "Teste de gelo na entrega",
    "Sem taxa de visita",
  ],
  note: "Valor por aparelho em Tamandaré e cidades vizinhas.",
} as const;

export const DIFFERENTIALS = [
  {
    id: "01",
    icon: "clock" as const,
    title: "Resposta no mesmo dia",
    desc: "Você chama no WhatsApp e recebe retorno em minutos. Na maior parte dos chamados, o técnico chega ainda no mesmo dia.",
  },
  {
    id: "02",
    icon: "shield" as const,
    title: "90 dias de garantia",
    desc: "Garantia por escrito em serviço e mão de obra. Se o mesmo defeito voltar dentro do prazo, a visita não é cobrada.",
  },
  {
    id: "03",
    icon: "quote" as const,
    title: "Preço fechado antes",
    desc: "O técnico diagnostica, mostra o que precisa e passa o valor. Só começa depois do seu ok — nada aparece na conta no final.",
  },
  {
    id: "04",
    icon: "badge" as const,
    title: "Instrumento, não chute",
    desc: "Manifold, alicate amperímetro e termômetro em toda visita. A gente mede antes de trocar qualquer peça.",
  },
] as const;

export const SERVICES = [
  {
    id: "instalacao",
    n: "01",
    title: "Instalação",
    lead: "Split, multi-split, cassete e piso-teto",
    desc: "Furação, tubulação de cobre dimensionada, vácuo na linha e teste de estanqueidade. Instalação feita para durar, não para acabar rápido.",
    points: ["Vácuo e teste de pressão", "Tubulação nova de cobre", "Acabamento em canaleta"],
    size: "lg" as const,
  },
  {
    id: "corretiva",
    n: "02",
    title: "Conserto",
    lead: "Não gela, pinga ou faz barulho",
    desc: "Diagnóstico com instrumento para achar a causa — não para trocar peça no chute.",
    points: ["Vazamento e carga de gás", "Placa e capacitor", "Compressor e ventilador"],
    size: "md" as const,
  },
  {
    id: "preventiva",
    n: "03",
    title: "Manutenção preventiva",
    lead: "Antes de quebrar no meio do verão",
    desc: "Limpeza de filtros e serpentina, medição de pressão e amperagem. Aparelho limpo gela mais e puxa menos energia.",
    points: ["Checklist de 12 itens", "Relatório do estado do aparelho"],
    size: "md" as const,
  },
  {
    id: "higienizacao",
    n: "04",
    title: "Higienização profunda",
    lead: "Acaba com o cheiro de mofo",
    desc: "Desmontagem, lavagem da evaporadora com bomba e produto bactericida. Turbina, serpentina e bandeja limpas de verdade.",
    points: ["Turbina e bandeja lavadas", "Produto bactericida"],
    size: "md" as const,
  },
  {
    id: "gas",
    n: "05",
    title: "Carga de gás",
    lead: "R-410A, R-32 e R-22",
    desc: "Antes de completar o gás, a gente encontra e corrige o vazamento. Sem isso, escapa tudo de novo em semanas.",
    points: ["Detecção de vazamento", "Carga por balança"],
    size: "sm" as const,
  },
  {
    id: "venda",
    n: "06",
    title: "Venda de equipamentos",
    lead: "Com instalação inclusa",
    desc: "Indicamos o BTU certo para o seu cômodo e entregamos instalado, testado e com nota.",
    points: ["Cálculo de BTU", "Marcas com assistência na região"],
    size: "sm" as const,
  },
] as const;

export const PROCESS = [
  {
    n: "01",
    title: "Chamado",
    time: "Retorno em minutos",
    desc: "Você manda mensagem contando o que está acontecendo — de preferência com um vídeo curto do aparelho ligado.",
  },
  {
    n: "02",
    title: "Diagnóstico",
    time: "Visita com hora marcada",
    desc: "O técnico mede pressão, amperagem e temperatura de insuflamento, mostra o problema e explica em português.",
  },
  {
    n: "03",
    title: "Execução",
    time: "Mesmo dia, na maioria dos casos",
    desc: "Serviço aprovado, mão na massa. Ambiente protegido com lona e limpo no final — o que a gente sujar, a gente limpa.",
  },
  {
    n: "04",
    title: "Garantia",
    time: "90 dias em serviço",
    desc: "Teste na sua frente, orientação de uso e garantia registrada. Voltou o defeito, voltamos nós.",
  },
] as const;

export const STATS = [
  { value: 500, prefix: "+", suffix: "", label: "atendimentos concluídos", note: "residenciais e comerciais" },
  { value: 5, prefix: "", suffix: " anos", label: "de rua e de bancada", note: "na Mata Sul" },
  { value: 98, prefix: "", suffix: "%", label: "voltam a chamar ou indicam", note: "clientes recorrentes" },
  { value: 90, prefix: "", suffix: " dias", label: "de garantia por escrito", note: "em todo serviço" },
] as const;

/**
 * Galeria de atendimentos.
 * TODO (cliente): trocar `src` pelas fotos reais de cada serviço em /public/images.
 * As imagens atuais vêm do material de divulgação da marca e servem de moldura visual.
 */
export const GALLERY = [
  {
    id: "higienizacao",
    src: "/images/unidade.jpg",
    title: "Higienização de evaporadora",
    place: "Tamandaré – PE",
    detail: "Split hi-wall com cheiro de mofo: turbina, serpentina e bandeja lavadas com bactericida.",
    span: "wide" as const,
  },
  {
    id: "instalacao",
    src: "/images/tecnico.jpg",
    title: "Instalação de split 18.000 BTU",
    place: "Rio Formoso – PE",
    detail: "Tubulação nova de cobre, vácuo na linha e acabamento em canaleta branca.",
    span: "tall" as const,
  },
  {
    id: "ambiente",
    src: "/images/ambiente.jpg",
    title: "Manutenção preventiva",
    place: "Barreiros – PE",
    detail: "Checklist completo, medição de pressão e amperagem antes do verão.",
    span: "normal" as const,
  },
  {
    id: "fluxo",
    src: "/images/fluxo.jpg",
    title: "Teste de insuflamento",
    place: "Sirinhaém – PE",
    detail: "Temperatura de saída medida na entrega do serviço, com o cliente presente.",
    span: "normal" as const,
  },
] as const;

export const FAQS = [
  {
    q: "Quanto custa uma manutenção de ar-condicionado?",
    a: "A limpeza simples de um split de parede começa em R$ 100 na promoção vigente. Higienização profunda, carga de gás e conserto dependem do que o técnico encontrar — e o valor é fechado com você antes de qualquer serviço começar.",
  },
  {
    q: "Em quanto tempo vocês atendem?",
    a: "O retorno no WhatsApp costuma sair em minutos dentro do horário comercial. Para Tamandaré e cidades vizinhas, a maioria dos chamados é atendida no mesmo dia ou no dia seguinte.",
  },
  {
    q: "Quais cidades vocês atendem?",
    a: "Base em Tamandaré-PE, atendendo Rio Formoso, Barreiros, Sirinhaém, Água Preta, São José da Coroa Grande e região da Mata Sul de Pernambuco. Fora dessa área, consulte pelo WhatsApp.",
  },
  {
    q: "De quanto em quanto tempo preciso limpar o aparelho?",
    a: "Uso residencial: a cada 6 meses. Litoral com maresia, casa com pet ou obra por perto: a cada 3 ou 4 meses. Comércio que roda o dia inteiro: trimestral. Aparelho sujo perde capacidade de gelar e puxa mais energia.",
  },
  {
    q: "O serviço tem garantia?",
    a: "Sim: 90 dias de garantia em serviço e mão de obra, registrada por escrito. Peça trocada segue a garantia do fabricante. Se o mesmo defeito voltar dentro do prazo, a visita não é cobrada.",
  },
  {
    q: "Vocês atendem qualquer marca?",
    a: "Sim — Samsung, LG, Midea, Springer, Elgin, Consul, Gree, Daikin, TCL e outras. Trabalhamos com split hi-wall, multi-split, cassete, piso-teto e janela.",
  },
  {
    q: "Só completar o gás resolve?",
    a: "Quase nunca. O sistema é selado: se faltou gás, existe vazamento em algum ponto. Completar sem corrigir faz o gás escapar de novo em poucas semanas e ainda coloca o compressor em risco. A gente localiza, corrige e só então recarrega.",
  },
] as const;

export const AREAS = [
  "Tamandaré",
  "Rio Formoso",
  "Barreiros",
  "Sirinhaém",
  "Água Preta",
  "São José da Coroa Grande",
  "Maraial",
  "Palmares",
] as const;

export const BRANDS = [
  "Samsung",
  "LG",
  "Midea",
  "Springer",
  "Elgin",
  "Consul",
  "Gree",
  "Daikin",
  "TCL",
  "Philco",
] as const;
