export const NAV_LINKS = [
  { href: "#topo", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export const TRUST_POINTS = [
  "Atendimento no mesmo dia",
  "Técnicos certificados",
  "Garantia em todo serviço",
];

export const SERVICES = [
  {
    title: "Instalação de ar-condicionado",
    desc: "Instalação de split, multi-split e cassete, com acabamento limpo e testes de performance.",
  },
  {
    title: "Manutenção preventiva",
    desc: "Revisões periódicas que evitam quebras, prolongam a vida do aparelho e reduzem a conta de luz.",
  },
  {
    title: "Manutenção corretiva",
    desc: "Diagnóstico rápido e reparo de vazamentos, ruídos, mau cheiro e falhas de refrigeração.",
  },
  {
    title: "Higienização",
    desc: "Limpeza de filtros, serpentina e dutos para um ar mais saudável em casa ou no trabalho.",
  },
  {
    title: "Contratos de manutenção",
    desc: "Planos residenciais e comerciais com manutenção recorrente, prioridade de atendimento e preço fechado.",
  },
] as const;

export const DIFFERENTIALS = [
  {
    n: "01",
    title: "Técnicos certificados",
    desc: "Profissionais treinados e atualizados nas principais marcas e tecnologias de ar-condicionado.",
  },
  {
    n: "02",
    title: "Atendimento rápido",
    desc: "Visita técnica agendada com agilidade, muitas vezes no mesmo dia do chamado.",
  },
  {
    n: "03",
    title: "Garantia de serviço",
    desc: "Todo serviço realizado sai com garantia por escrito — sem letras miúdas.",
  },
  {
    n: "04",
    title: "Orçamento sem compromisso",
    desc: "Você aprova o valor antes da gente colocar a mão no seu equipamento.",
  },
] as const;

export const STEPS = [
  { n: "01", title: "Contato", desc: "Você chama no WhatsApp ou preenche o formulário contando o que está acontecendo." },
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
    quote: "Depois que a +Clima veio aqui em casa, o ar nunca mais parou no meio do verão.",
    name: "Marina Souza",
    location: "Tamandaré-PE",
    initials: "MS",
    color: "#14335A",
  },
  {
    quote: "Atendimento rápido e o técnico explicou tudo antes de mexer no aparelho.",
    name: "Carlos Andrade",
    location: "Rio Formoso-PE",
    initials: "CA",
    color: "#4f7fa8",
  },
  {
    quote: "Fechamos o contrato de manutenção da loja com eles e nunca mais tivemos dor de cabeça.",
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

export const SERVICE_OPTIONS = [
  "Instalação",
  "Manutenção preventiva",
  "Manutenção corretiva",
  "Higienização",
  "Contrato de manutenção",
  "Outro",
];

export const FAQS = [
  {
    question: "Quanto custa a manutenção de ar-condicionado?",
    answer:
      "A manutenção preventiva sai a partir de R$ 100 na promoção vigente. O valor final depende do tipo de aparelho e do serviço necessário — você sempre recebe um orçamento sem compromisso antes da execução.",
  },
  {
    question: "Vocês atendem aos finais de semana?",
    answer: "Atendemos de segunda a sábado, das 8h às 19h.",
  },
  {
    question: "Quais áreas vocês atendem?",
    answer:
      "Atendemos Tamandaré-PE e toda a Mata Sul de Pernambuco, incluindo Rio Formoso, Barreiros, Sirinhaém, Água Preta e arredores.",
  },
  {
    question: "O serviço tem garantia?",
    answer: "Sim, todo serviço realizado pela +Clima sai com garantia por escrito.",
  },
  {
    question: "Quanto tempo leva para o atendimento?",
    answer:
      "Muitas vezes conseguimos atender no mesmo dia do chamado, dependendo da disponibilidade na sua região.",
  },
  {
    question: "Vocês fazem instalação e manutenção de qualquer marca?",
    answer:
      "Sim, nossos técnicos são treinados e certificados nas principais marcas e tecnologias de ar-condicionado do mercado.",
  },
] as const;
