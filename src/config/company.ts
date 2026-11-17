export interface ProductConfig {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  shortDescription: string;
  applications: string[];
  sectors: string[];
  benefits: string[];
  image: string;
  badge?: string;
  faqs: { question: string; answer: string }[];
  whatsappMessage: string;
}

export const COMPANY = {
  name: "Pontual Balanças",
  tradeName: "Pontual Balanças",
  corporateName: "Pontual Balanças Comércio, Importação e Serviços Ltda - ME",
  cnpj: "10.518.258/0001-38",
  foundedYear: 2008,
  sinceText: "Desde 2008",
  slogan: "Pesagem precisa para quem não pode parar.",
  secondarySlogan: "Você conhece, você confia!",
  
  address: {
    street: "Av. Cesário Crosara, 1480",
    neighborhood: "Presidente Roosevelt",
    city: "Uberlândia",
    state: "MG",
    stateFullName: "Minas Gerais",
    cep: "38401-048",
    full: "Av. Cesário Crosara, 1480 - Pres. Roosevelt, Uberlândia - MG, 38401-048",
    region: "Triângulo Mineiro e região",
    accessibility: "Entrada e estacionamento acessíveis para cadeirantes",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.793732646271!2d-48.2936932!3d-18.8962299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445037eb9db4d%3A0xa9ea6ebcb617cfcf!2sAv.%20Ces%C3%A1rio%20Crosara%2C%201480%20-%20Pres.%20Roosevelt%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038401-048!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr",
    googleProfileUrl: "https://share.google/ZU9rkvtQqsgh96TwZ",
  },

  phone: {
    display: "(34) 3236-2016",
    link: "tel:+553432362016",
  },

  whatsapp: {
    display: "(34) 99124-0204",
    number: "5534991240204",
    defaultMessage: "Olá! Vim através do site da Pontual Balanças e gostaria de solicitar um orçamento.",
    altDisplay: "(34) 99216-0071",
    altNumber: "5534992160071",
  },

  email: {
    display: "[CONFIRMAR: contato@pontualbalancas.com.br]",
    link: "mailto:contato@pontualbalancas.com.br",
  },

  hours: {
    weekdays: "Segunda a sexta-feira, das 08h às 18h",
    weekend: "Fechado aos sábados, domingos e feriados",
  },

  reviews: {
    rating: "4.9",
    maxRating: "5.0",
    count: 43,
    source: "Avaliações no Google",
    profileUrl: "https://share.google/ZU9rkvtQqsgh96TwZ",
  },

  authorizedBrands: [
    {
      name: "COIMMA",
      segment: "Balanças e Troncos de Contenção Bovinos",
      image: "/images/selo-coimma.jpg",
    },
    {
      name: "Datamars / TRU-TEST",
      segment: "Balanças Eletrônicas para Pecuária",
      image: "/images/selo-trutest.jpg",
    },
    {
      name: "RDA Sistemas de Pesagem",
      segment: "Balanças Industriais e de Fluxo",
      image: "/images/balanca-fluxo-industrial.jpg",
    },
  ],

  differentials: [
    {
      id: "caminhao-inmetro",
      title: "Caminhão de Pesos Padrão INMETRO",
      description: "Levamos pesos padrão rastreados e guindaste munck até sua fazenda ou indústria para calibração e montagem no local, sem necessidade de desmontagem.",
      highlight: "Diferencial Exclusivo",
      image: "/images/caminhao-pesos-padrao.jpg",
    },
    {
      id: "autorizada",
      title: "Assistência Técnica Autorizada",
      description: "Representante e assistência técnica credenciada das principais marcas do mercado (COIMMA, Datamars/Tru-Test e RDA Sistemas).",
      highlight: "Credenciamento Oficial",
      image: "/images/fachada-pontual-balancas.jpg",
    },
    {
      id: "tempo-mercado",
      title: "Tradição desde 2008",
      description: "Quase duas décadas de atuação sólida em Uberlândia e no Triângulo Mineiro, construindo parcerias duradouras com o agronegócio e a indústria.",
      highlight: "Desde 2008",
      image: "/images/logo-fachada.jpg",
    },
    {
      id: "solucao-completa",
      title: "Solução Completa de Ponta a Ponta",
      description: "Venda (novas e seminovas revisadas), montagem técnica, calibração periódica e manutenção preventiva e corretiva com um único fornecedor.",
      highlight: "Tudo em Um Só Lugar",
      image: "/images/pesos-padrao-500kg.jpg",
    },
  ],
};

export const PRODUCTS: ProductConfig[] = [
  {
    id: "rodoviaria",
    name: "Balança Rodoviária",
    slug: "rodoviaria",
    tagline: "Pesagem confiável na entrada e saída de cargas pesadas",
    shortDescription: "Plataformas de alta robustez para pesagem de caminhões, carretas e bitrens. Essenciais para evitar multas por excesso de carga e eliminar perdas financeiras na expedição e recebimento.",
    applications: [
      "Controle de entrada e saída de grãos e safras",
      "Pesagem de matérias-primas e insumos a granel",
      "Monitoramento de peso por eixo e peso bruto total",
      "Pátios de reciclagem e terminais logísticos",
    ],
    sectors: ["Fazendas e Armazéns", "Indústrias em Geral", "Frigoríficos", "Reciclagem e Mineração"],
    benefits: [
      "Evita multas por excesso de peso por eixo e PBT na rodovia",
      "Garante exatidão comercial na compra e venda por tonelada",
      "Calibração em campo com nosso caminhão de pesos padrão INMETRO",
      "Opções novas e seminovas revisadas com garantia",
    ],
    image: "/images/balanca-pesa-eixos.jpg",
    badge: "Forte da Empresa",
    whatsappMessage: "Olá, vim pelo site da Pontual Balanças e gostaria de um orçamento para Balança Rodoviária.",
    faqs: [
      {
        question: "Com que frequência devo calibrar minha balança rodoviária?",
        answer: "Recomenda-se realizar verificações periódicas preventivas e calibração anual ou semestral, conforme o fluxo de pesagem e as normas metrológicas vigentes.",
      },
      {
        question: "Vocês realizam a calibração da balança rodoviária no local?",
        answer: "Sim! Dispomos de caminhão próprio equipado com guindaste munck e pesos padrão rastreados ao INMETRO, calibrando a plataforma diretamente no seu pátio ou fazenda.",
      },
      {
        question: "Vocês trabalham com balanças rodoviárias seminovas?",
        answer: "Sim, comercializamos equipamentos seminovos totalmente revisados, testados e com garantia de precisão e funcionamento.",
      },
      {
        question: "Qual a capacidade de peso atendida?",
        answer: "[CONFIRMAR: capacidades em toneladas e dimensões conforme projeto solicitado].",
      },
    ],
  },
  {
    id: "industrial",
    name: "Balança Industrial",
    slug: "industrial",
    tagline: "Precisão absoluta no controle de processos, produção e expedição",
    shortDescription: "Sistemas de pesagem para ambientes industriais exigentes: balanças de piso, balanças de fluxo contínuo para grãos, balanças suspensas e pesagem de bancada.",
    applications: [
      "Controle contínuo de fluxo de materiais e grãos",
      "Pesagem de paletes, fardos e caixas na expedição",
      "Pesagem suspensa com dinamômetros em pontes rolantes",
      "Formulação e dosagem precisa em linhas de produção",
    ],
    sectors: ["Indústrias de Alimentos e Bebidas", "Frigoríficos", "Usinas e Terminais", "Metalmecânica e Químico"],
    benefits: [
      "Rastreabilidade e conformidade com rigorosos padrões de auditoria",
      "Resistência a ambientes severos, umidade e poeira",
      "Indicadores digitais modernos com saída para impressoras e sistemas ERP",
      "Assistência técnica autorizada e peças originais",
    ],
    image: "/images/balanca-fluxo-industrial.jpg",
    badge: "Alta Precisão",
    whatsappMessage: "Olá, vim pelo site da Pontual Balanças e gostaria de um orçamento para Balança Industrial.",
    faqs: [
      {
        question: "Vocês atendem balanças industriais de fluxo contínuo?",
        answer: "Sim, comercializamos, instalamos e prestamos suporte em balanças de fluxo industrial homologadas pelo INMETRO (como sistemas RDA).",
      },
      {
        question: "Vocês consertam balanças industriais de outras marcas?",
        answer: "Sim, realizamos diagnósticos, reparos em células de carga, placas e indicadores digitais de diversas marcas do mercado.",
      },
      {
        question: "Fornecem laudo de calibração para auditorias de qualidade?",
        answer: "Sim, nossos serviços de calibração e ajuste utilizam pesos padrão rastreados e emitem relatórios técnicos comprobatórios.",
      },
    ],
  },
  {
    id: "ferroviaria",
    name: "Balança Ferroviária",
    slug: "ferroviaria",
    tagline: "Solução especializada para pesagem de vagões e trens",
    shortDescription: "Sistemas robustos para pesagem de vagões de trem em terminais intermodais, ramais ferroviários e pátios de carga. Pesagem estática e dinâmica de vagões cheios e vazios.",
    applications: [
      "Pesagem de vagões graneleiros em terminais de transbordo",
      "Controle de carga em vagões de minério e fertilizantes",
      "Terminal rodoferroviário e portos secos",
    ],
    sectors: ["Terminais Intermodais", "Usinas de Grãos e Açúcar", "Mineração e Siderurgia", "Logística Ferroviária"],
    benefits: [
      "Projetadas para resistir a altíssimas cargas e impactos dinâmicos",
      "Agilidade operacional no carregamento e descarregamento de trens",
      "Instalação e alinhamento metrológico especializado",
      "Suporte técnico ágil para evitar paralisações de linha férrea",
    ],
    image: "/images/balanca-pesa-eixos-modulo.jpg",
    badge: "Grande Porte",
    whatsappMessage: "Olá, vim pelo site da Pontual Balanças e gostaria de um orçamento para Balança Ferroviária.",
    faqs: [
      {
        question: "Como funciona a montagem e instalação da balança ferroviária?",
        answer: "Nossa equipe realiza o planejamento técnico junto à engenharia do terminal, montagem dos módulos, calibração e testes com padrões certificados.",
      },
      {
        question: "Vocês prestam manutenção preventiva em ramais ferroviários?",
        answer: "Sim, oferecemos planos de manutenção periódica para garantir que a balança opere continuamente sem falhas nas janelas de carregamento.",
      },
    ],
  },
  {
    id: "gado",
    name: "Balança para Gado",
    slug: "gado",
    tagline: "Controle de ganho de peso, apartação e venda justa do seu rebanho",
    shortDescription: "Balanças eletrônicas para pecuária, troncos de contenção com pesagem integrada e barras de pesagem portáteis para instalação em bretes e currais.",
    applications: [
      "Pesagem de animais individuais para controle de ganho médio diário (GMD)",
      "Pesagem de lotes para venda e embarque para frigorífico",
      "Manejo sanitário e vacinação com peso exato",
      "Confinamentos e pecuária de corte intensiva",
    ],
    sectors: ["Fazendas de Pecuária de Corte", "Confinamentos Bovinos", "Frigoríficos e Abatedouros", "Leilões e Exposições Agropecuárias"],
    benefits: [
      "Representante e Assistência Autorizada COIMMA e Datamars / TRU-TEST",
      "Barras de pesagem eletrônica reforçadas com alta velocidade de estabilização",
      "Indicadores digitais com cálculo automático do peso mesmo com o animal em movimento",
      "Montagem no local e revisão de caixas e estruturas de madeira/aço",
    ],
    image: "/images/balanca-gado-fazenda.jpg",
    badge: "Forte da Empresa",
    whatsappMessage: "Olá, vim pelo site da Pontual Balanças e gostaria de um orçamento para Balança para Gado.",
    faqs: [
      {
        question: "A balança consegue pesar o animal agitado ou se mexendo?",
        answer: "Sim. Os indicadores eletrônicos Tru-Test e Coimma possuem tecnologia de estabilização rápida que calcula o peso exato mesmo com o animal em movimento.",
      },
      {
        question: "As barras de pesagem podem ser instaladas em qualquer tronco ou brete existente?",
        answer: "Sim, as barras de pesagem são extremamente versáteis e podem ser adaptadas sob troncos de contenção de madeira ou gaiolas já existentes na sua fazenda.",
      },
      {
        question: "Vocês atendem fazendas e confinamentos em toda a região?",
        answer: "Sim, atendemos propriedades rurais em Uberlândia, no Triângulo Mineiro e regiões produtoras vizinhas.",
      },
    ],
  },
];

export const SERVICES = [
  {
    id: "venda",
    title: "Venda de Balanças Novas e Seminovas",
    shortDescription: "Fornecemos balanças rodoviárias, industriais e pecuárias novas com garantia de fábrica, além de equipamentos seminovos rigorosamente inspecionados.",
    description: "Seja para montar uma estrutura nova ou expandir seu pátio de pesagem com economia, a Pontual Balanças oferece assessoria completa para dimensionar o equipamento ideal para a sua necessidade operacional. Trabalhamos com opções novas e seminovas revisadas.",
    steps: [
      { step: "1", title: "Diagnóstico Operacional", desc: "Análise da sua demanda de carga, fluxo de veículos ou animais e espaço disponível." },
      { step: "2", title: "Proposta Comercial Transparente", desc: "Apresentação das melhores opções novas ou seminovas com orçamento detalhado." },
      { step: "3", title: "Entrega e Instalação Técnica", desc: "Logística e posicionamento profissional do equipamento na sua base." },
      { step: "4", title: "Calibração e Entrega Técnica", desc: "Testes práticos de funcionamento e emissão dos registros de calibração." },
    ],
    whatsappMsg: "Olá, vim pelo site e gostaria de um orçamento para compra de balança.",
    image: "/images/balanca-plataforma-piso.jpg",
  },
  {
    id: "calibracao",
    title: "Calibração com Caminhão de Pesos Padrão INMETRO",
    shortDescription: "Diferencial central: nosso caminhão próprio com pesos padrão rastreados e munck realiza a calibração no seu local, sem necessidade de desmontar a balança.",
    description: "Pesagem incorreta causa prejuízos silenciosos a cada pesagem e expõe sua empresa a autuações e multas em fiscalizações do IPEM/INMETRO. Com o caminhão de calibração da Pontual Balanças, aplicamos massas padrão certificadas de até 500kg cada diretamente na sua balança rodoviária ou industrial.",
    steps: [
      { step: "1", title: "Agendamento da Visita", desc: "Definição de data e horário conforme a conveniência da sua operação para minimizar paradas." },
      { step: "2", title: "Deslocamento do Caminhão Munck", desc: "Nossa unidade móvel vai até a sua empresa ou fazenda carregada com os pesos padrão certificados." },
      { step: "3", title: "Testes de Carga e Excentricidade", desc: "Verificação metrológica completa de linearidade, repetibilidade e ajustes finos nas células de carga." },
      { step: "4", title: "Relatório e Selagem", desc: "Emissão de laudo técnico de conformidade para auditorias de qualidade e órgãos fiscalizadores." },
    ],
    highlight: "Diferencial Central",
    whatsappMsg: "Olá, gostaria de agendar uma calibração com caminhão de pesos padrão.",
    image: "/images/caminhao-pesos-padrao.jpg",
  },
  {
    id: "montagem",
    title: "Montagem e Instalação Especializada",
    shortDescription: "Instalação mecânica, civil e eletrônica de balanças de grande porte no seu local por técnicos experientes.",
    description: "Uma balança só entrega a precisão prometida se a sua base civil e instalação mecânica forem executadas milimetricamente. Nossa equipe cuida do nivelamento, montagem de vigas, células de carga, cabeamento protegido e aterramento contra descargas elétricas.",
    steps: [
      { step: "1", title: "Avaliação da Fundação Civil", desc: "Inspeção do fosso ou base de concreto para garantir drenagem e rigidez estrutural." },
      { step: "2", title: "Posicionamento da Estrutura", desc: "Içamento e nivelamento das plataformas e quadros com guindaste especializado." },
      { step: "3", title: "Ligação Eletrônica e Células", desc: "Instalação e proteção das células de carga, caixa de junção e indicador digital." },
      { step: "4", title: "Testes com Carga Real", desc: "Validação operacional com aferição e treinamento da equipe operadora." },
    ],
    whatsappMsg: "Olá, gostaria de saber mais sobre a montagem e instalação de balança.",
    image: "/images/balanca-gado-base.jpg",
  },
  {
    id: "manutencao",
    title: "Conserto e Assistência Técnica Autorizada",
    shortDescription: "Atendimento ágil para manutenção corretiva e preventiva de balanças rodoviárias, industriais e de gado das principais marcas.",
    description: "Balança parada é prejuízo imediato: safra travada, caminhão esperando ou abate atrasado. Oferecemos socorro técnico especializado em Uberlândia e região, com diagnóstico preciso e peças originais para restaurar a pesagem rapidamente.",
    steps: [
      { step: "1", title: "Chamado Técnico Imediato", desc: "Contato pelo WhatsApp ou telefone para triagem do defeito apresentado." },
      { step: "2", title: "Deslocamento de Equipe", desc: "Nossos técnicos vão até o local equipados com ferramentas e componentes para reparo." },
      { step: "3", title: "Substituição e Reparo", desc: "Troca de células de carga, recalibração de indicador, revisão de fiações e tirantes." },
      { step: "4", title: "Aferição e Liberação", desc: "Testes de pesagem para garantir exatidão antes de liberar o equipamento para uso." },
    ],
    whatsappMsg: "Olá, preciso de manutenção urgente ou conserto para minha balança.",
    image: "/images/barras-pesagem-gado.jpg",
  },
];

export const SECTORS = [
  {
    id: "fazenda",
    title: "Fazendas e Agronegócio",
    target: "Produtores rurais, gerentes de fazenda e administradores agrícolas",
    pain: "Balança descalibrada ou com defeito na safra causa perda de grãos, divergência com transportadoras e atrasos no escoamento.",
    solution: "Balanças rodoviárias para caminhões de grãos e balanças de pesagem animal com calibração garantida no local antes do início da safra.",
    products: ["Balança Rodoviária", "Balança para Gado"],
    link: "/balancas/rodoviaria",
    image: "/images/balanca-gado-fazenda.jpg",
  },
  {
    id: "confinamento",
    title: "Confinamentos Bovinos",
    target: "Gerentes de confinamento, zootecnistas e médicos veterinários",
    pain: "Falta de precisão no ganho médio diário (GMD) compromete a conversão alimentar e prejudica a margem de lucro por lote.",
    solution: "Balanças eletrônicas para gado e troncos integrados com indicadores de estabilização rápida, além de balanças rodoviárias para controle de insumos e ração.",
    products: ["Balança para Gado", "Balança Rodoviária"],
    link: "/balancas/gado",
    image: "/images/barras-pesagem-pontual.jpg",
  },
  {
    id: "industria",
    title: "Indústrias em Geral",
    target: "Gerentes industriais, supervisores de logística e manutenção",
    pain: "Variação de peso em lotes gera desperdício de matéria-prima, devolução de pedidos e risco de multas fiscais.",
    solution: "Balanças de piso, balanças de fluxo contínuo e calibração periódica com peso padrão para atender auditorias ISO e normas legais.",
    products: ["Balança Industrial", "Balança Rodoviária", "Balança Ferroviária"],
    link: "/balancas/industrial",
    image: "/images/balanca-fluxo-industrial.jpg",
  },
  {
    id: "frigorifico",
    title: "Frigoríficos e Abatedouros",
    target: "Gerentes de operações, controle de qualidade e expedição",
    pain: "Inexatidão no peso do gado vivo na recepção ou das carcaças no embarque gera conflito direto com pecuaristas e clientes.",
    solution: "Sistemas robustos de pesagem animal, balanças rodoviárias de entrada/saída e balanças industriais de alta precisão.",
    products: ["Balança para Gado", "Balança Industrial", "Balança Rodoviária"],
    link: "/balancas/gado",
    image: "/images/balanca-plataforma-piso.jpg",
  },
  {
    id: "reciclagem",
    title: "Pátios de Reciclagem e Sucata",
    target: "Proprietários e encarregados de pátio",
    pain: "A margem de lucro na sucata e reciclagem depende 100% de centenas de quilos pesados corretamente na entrada e saída dos caminhões.",
    solution: "Balanças rodoviárias novas ou seminovas de alta resistência com manutenção ágil para garantir a rentabilidade a cada pesagem.",
    products: ["Balança Rodoviária"],
    link: "/balancas/rodoviaria",
    image: "/images/balanca-pesa-eixos.jpg",
  },
];

export function getWhatsAppLink(customMessage?: string, phoneNumber?: string): string {
  const number = phoneNumber || COMPANY.whatsapp.number;
  const message = encodeURIComponent(customMessage || COMPANY.whatsapp.defaultMessage);
  return `https://wa.me/${number}?text=${message}`;
}

