export type Company = {
  name: string;
  logo: string;
  slug: string;
  tagline: string;
  description: string;
  story: string;
  highlights: string[];
};

export const companies: Company[] = [
  {
    name: "NovaMétrica",
    logo: "NM",
    slug: "novametrica",
    tagline: "Analytics financeiro para PMEs",
    description:
      "NovaMétrica acelera decisões com dashboards financeiros colaborativos e alertas proativos.",
    story:
      "Fundada por ex-CFOs de scale-ups tech, NovaMétrica nasceu para equilibrar rigor financeiro com agilidade operacional. Hoje apoia mais de 120 PMEs com sensores de margem, automação de closing e indicadores de risco conectados a ERPs.",
    highlights: [
      "Analytics preditivo para cash flow de PMEs",
      "Conecta dados de procurement, vendas e operações",
      "Programa Buildness: mentorias quinzenais em margem",
    ],
  },
  {
    name: "Maré Verde",
    logo: "MV",
    slug: "mare-verde",
    tagline: "Supply chain sustentável",
    description:
      "Maré Verde coordena procurement circular com fornecedores certificados em energia e logística.",
    story:
      "Começou como um piloto de procurement verde para um cluster de fábricas no Norte e expandiu para cobertura ibérica. Hoje cruza indicadores de sustentabilidade e compliance para permitir compras colaborativas com impactos medidos.",
    highlights: [
      "Catálogo GreenNet com +200 fornecedores auditados",
      "Análise de emissões para cada contrato",
      "Mesa série de compras mensais no clube",
    ],
  },
  {
    name: "AtlasTech",
    logo: "AT",
    slug: "atlastech",
    tagline: "Indústria 4.0 operacional",
    description:
      "AtlasTech integra sensores e data lakes para operações com visibilidade em tempo real e parceiros de automação.",
    story:
      "Fundada por engenheiros de produção industrial, AtlasTech equilibra hardware & software para fábricas inteligentes. Ligam linhas de produção a parceiros do clube para acelerar benchmarking e visitas conjuntas.",
    highlights: [
      "Operações 4.0 com monitorização edge + cloud",
      "Projetos com cooperativas do Norte e BragaLab",
      "Webinars trimestrais sobre manutenção preditiva",
    ],
  },
  {
    name: "Sinal Aberto",
    logo: "SA",
    slug: "sinal-aberto",
    tagline: "Comunicações B2B conectadas",
    description:
      "Sinal Aberto desenha parcerias mútuas e contracts flexíveis com equipas comerciais em crescimento.",
    story:
      "Nasceu numa aceleradora de telecoms e hoje cria redes cross-supply para PMEs com equipas remotas. Usa playbooks de flexibilidade contratual para permitir respostas rápidas em mercados B2B complexos.",
    highlights: [
      "Playbooks de contratos adaptáveis",
      "Operações com clientes europeus e LATAM",
      "Clube Sinal: encontros mensais sobre revenue operations",
    ],
  },
  {
    name: "Grupo 4C",
    logo: "4C",
    slug: "grupo-4c",
    tagline: "Governança e compliance",
    description:
      "Grupo 4C apoia conselhos e dirigentes com playbooks de compliance, auditorias e due diligence.",
    story:
      "Equipa de consultoria criada por ex-parceiros de Big Four e CFOs industriais. Agora oferece jornadas de compliance contínuo e labs de governance com membro do clube, focando PMEs que querem maturity sem processos pesados.",
    highlights: [
      "Playbooks de compliance para PMEs industriais",
      "Labs com advogados parceiros do clube",
      "Programa 4C+ com auditorias rápidas",
    ],
  },
  {
    name: "BluePeak",
    logo: "BP",
    slug: "bluepeak",
    tagline: "Plataforma de talento",
    description:
      "BluePeak liga equipas comerciais a empreendedores de engenharia com metodologias de skills mapping.",
    story:
      "BluePeak nasceu em Lisboa com a missão de reduzir gaps entre vendas e engenharia. Hoje mapeia competências em tempo real para permitir turnos raspados e equipas de marketing técnico no clube.",
    highlights: [
      "Skills mapping dinâmico com heatmaps",
      "Parcerias com hubs de talento no Porto e Braga",
      "Comitê Buildness para planeamento de squads",
    ],
  },
  {
    name: "Vértice",
    logo: "V",
    slug: "vertice",
    tagline: "IA aplicada a pricing",
    description:
      "Vértice cria pricing guards dinâmicos para deals complexos com múltiplos stakeholders.",
    story:
      "Spin-out de pesquisadores de IA aplicada a revenue, a Vértice usa reinforcement learning para adaptar pricing durante ciclos longos. Cobra perto de 22% de melhoria nas margens de contratos B2B e ajuda o clube a coordenar grupos de investimento.",
    highlights: [
      "IA para pricing em tempo real",
      "Tracks com investidores por território",
      "Compatibilidade com iniciativas Executive",
    ],
  },
  {
    name: "NorteLab",
    logo: "NL",
    slug: "nortelab",
    tagline: "Inovação regional",
    description:
      "NorteLab incubadora para PMEs com protótipos e laboratórios colaborativos no Norte.",
    story:
      "É um laboratório de co-criação fundado por empresários do Porto e Braga. Hoje abriga rondas de protótipos, workshops de inovação aberta e residências para founders que testam novas categorias de serviços.",
    highlights: [
      "Residências de inovação com parcerias universitárias",
      "Workshops hands-on para PMEs industriais",
      "Laboratórios partilhados e kits de testes rápidos",
    ],
  },
];
