export const NAV_LINKS = [
  { href: "#topo", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
];

export const TRUST_POINTS = [
  "Atendimento no mesmo dia",
  "Técnicos certificados",
  "Garantia em todo serviço",
];

export const SERVICES = [
  {
    title: "Instalação",
    desc: "Split, multi-split e cassete, prontos e testados.",
  },
  {
    title: "Manutenção preventiva",
    desc: "Evita quebras e reduz a conta de luz.",
  },
  {
    title: "Manutenção corretiva",
    desc: "Ar não gela mais? A gente resolve hoje.",
  },
  {
    title: "Higienização",
    desc: "Ar mais limpo e mais saudável.",
  },
  {
    title: "Contrato de manutenção",
    desc: "Prioridade no atendimento e preço fechado.",
  },
] as const;

export const DIFFERENTIALS = [
  {
    n: "01",
    title: "Técnicos certificados",
    desc: "Treinados nas principais marcas.",
  },
  {
    n: "02",
    title: "Atendimento rápido",
    desc: "Muitas vezes no mesmo dia.",
  },
  {
    n: "03",
    title: "Garantia por escrito",
    desc: "Sem letras miúdas.",
  },
  {
    n: "04",
    title: "Orçamento sem compromisso",
    desc: "Você aprova antes da gente começar.",
  },
] as const;

export const STEPS = [
  { n: "01", title: "Contato", desc: "Você chama a gente no WhatsApp contando o que está acontecendo." },
  { n: "02", title: "Visita técnica", desc: "Agendamos um horário e o técnico vai até você com o equipamento certo." },
  { n: "03", title: "Orçamento", desc: "Você aprova o serviço antes da gente colocar a mão — sem surpresas na conta." },
  { n: "04", title: "Execução e garantia", desc: "Serviço feito com capricho, testado na entrega e com garantia por escrito." },
] as const;

export const STATS = [
  { value: 500, prefix: "+", suffix: "", label: "Clientes atendidos" },
  { value: 10, prefix: "", suffix: "+", label: "Anos de mercado" },
  { value: 98, prefix: "", suffix: "%", label: "Clientes satisfeitos" },
  { value: 24, prefix: "", suffix: "h", label: "Resposta rápida no WhatsApp" },
] as const;

export const TESTIMONIALS = [
  {
    quote: "O ar nunca mais parou no meio do verão.",
    name: "Marina Souza",
    location: "Tamandaré-PE",
    initials: "MS",
    color: "#14335A",
  },
  {
    quote: "Atendimento rápido, técnico explicou tudo.",
    name: "Carlos Andrade",
    location: "Rio Formoso-PE",
    initials: "CA",
    color: "#4f7fa8",
  },
  {
    quote: "Contrato fechado, nunca mais tive dor de cabeça.",
    name: "Fernanda Lima",
    location: "Barreiros-PE",
    initials: "FL",
    color: "#A3501F", // accessible cta tone — matches --color-cta (white initials need 4.5:1, not the lighter --color-accent)
  },
] as const;

export const AREAS = [
  "Tamandaré-PE",
  "Rio Formoso-PE",
  "Barreiros-PE",
  "Sirinhaém-PE",
  "Água Preta-PE",
  "Mata Sul de Pernambuco",
];

export const FAQS = [
  {
    question: "Quanto custa a manutenção de ar-condicionado?",
    answer: "A partir de R$ 100 na promoção vigente. Orçamento sem compromisso antes de qualquer serviço.",
  },
  {
    question: "Vocês atendem aos finais de semana?",
    answer: "Atendemos de segunda a sábado, das 8h às 19h.",
  },
  {
    question: "Quais áreas vocês atendem?",
    answer: "Tamandaré-PE e toda a Mata Sul de Pernambuco.",
  },
  {
    question: "O serviço tem garantia?",
    answer: "Sim, todo serviço sai com garantia por escrito.",
  },
  {
    question: "Quanto tempo leva para o atendimento?",
    answer: "Muitas vezes no mesmo dia do chamado.",
  },
  {
    question: "Vocês atendem qualquer marca de ar-condicionado?",
    answer: "Sim, técnicos certificados nas principais marcas do mercado.",
  },
] as const;
