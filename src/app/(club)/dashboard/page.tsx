import Link from "next/link";
import { CompanyMarquee } from "@/components/ui/CompanyMarquee";

type Member = {
  name: string;
  role: string;
  company: string;
  industry: string;
  region: string;
  initials: string;
  plan: "Free" | "Pro" | "Executive" | "Investor";
};

type Opportunity = {
  title: string;
  match: "Alta" | "Média";
  valueHint: string;
  category: string;
  why: string;
  cta: string;
};

type Insight = {
  title: string;
  bullets: string[];
  source: string;
  updated: string;
};

type ForumTopic = {
  title: string;
  meta: string;
  summary: string;
  tag: string;
};

type ActionItem = {
  title: string;
  detail: string;
  status: "A fazer" | "Recomendado" | "Concluído";
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[rgb(var(--line))] bg-slate-100/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600">
      {children}
    </span>
  );
}

function BronzePill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[rgb(var(--bronze))] bg-[rgba(197,151,96,0.12)] px-2.5 py-1 text-[11px] font-semibold text-slate-900">
      {children}
    </span>
  );
}

type ArrowVariant = "default" | "white";

function ArrowLink({
  href = "#",
  variant = "default",
  children,
}: {
  href?: string;
  variant?: ArrowVariant;
  children: React.ReactNode;
}) {
  const base = "inline-flex items-center gap-1 text-sm font-semibold transition";
  const variantClass =
    variant === "white"
      ? "text-white/90 hover:text-white"
      : "text-slate-500 hover:text-slate-700";

  return (
    <Link href={href} className={`${base} ${variantClass}`}>
      {children}
      <span aria-hidden="true" className="text-sm">
        →
      </span>
    </Link>
  );
}

function StatusPill({ status }: { status: ActionItem["status"] }) {
  const base =
    "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]";
  const styles =
    status === "Concluído"
      ? "border-slate-200 bg-slate-100 text-slate-600"
      : status === "Recomendado"
        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
        : "border-amber-200 bg-amber-50 text-amber-700";

  return <span className={`${base} ${styles}`}>{status}</span>;
}

function Card({
  eyebrow,
  title,
  right,
  icon,
  secondaryLink,
  children,
}: {
  eyebrow: string;
  title: string;
  right?: React.ReactNode;
  icon?: React.ReactNode;
  secondaryLink?: { href: string; label: string; variant?: ArrowVariant };
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-[rgb(var(--line))] bg-white shadow-sm">
      <header className="px-6 py-5 border-b border-[rgb(var(--line))] flex flex-col gap-2">
        <div className="flex items-start gap-4">
          {icon && (
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[rgb(var(--ink))] text-white shadow-sm">
              {icon}
            </span>
          )}
          <div>
            <div className="text-[11px] font-semibold tracking-[0.22em] text-slate-500">
              {eyebrow}
            </div>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-900">
              {title}
            </h3>
          </div>
        </div>
        {right}
        {secondaryLink && (
          <div className="pt-1">
            <ArrowLink href={secondaryLink.href} variant={secondaryLink.variant}>
              {secondaryLink.label}
            </ArrowLink>
          </div>
        )}
      </header>
      <div className="p-6">{children}</div>
    </section>
  );
}

function Divider() {
  return <div className="h-px bg-[rgb(var(--line))]" />;
}

function UsersIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3z" />
      <path d="M6 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3z" />
      <path d="M6 13c-2.2 0-4 1.6-4 3.5V19h8v-2.5C10 14.6 8.2 13 6 13z" />
      <path d="M16 13c-2.2 0-4 1.6-4 3.5V19h10v-2.5C22 14.6 18.2 13 16 13z" />
    </svg>
  );
}

function RadarIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 12l5-3" />
      <circle cx="12" cy="12" r="2" />
      <path d="M4 12h4M16 12h4M12 4v4M12 16v4" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 5h16v11H8l-4 4V5z" />
    </svg>
  );
}

function ChecklistIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 6h11M9 12h11M9 18h11" />
      <path d="M4 6l1.5 1.5L7.5 5" />
      <path d="M4 12l1.5 1.5L7.5 11" />
      <path d="M4 18l1.5 1.5L7.5 17" />
    </svg>
  );
}

function DealIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12h6l2 2h4l2-2h4" />
      <path d="M6 9V7a2 2 0 0 1 2-2h3" />
      <path d="M18 9V7a2 2 0 0 0-2-2h-3" />
      <path d="M9 14l-2 3" />
      <path d="M15 14l2 3" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  );
}

export default function DashboardPage() {
  // UI-only mock data (substitui por DB depois)
  const me = {
    name: "John Doe",
    plan: "Pro",
    industry: "Energia & Procurement",
    region: "Lisboa",
  };

  const stats = [
    { label: "Actividades pendentes", value: "9", href: "/actividades" },
    { label: "Negociações em curso", value: "6", href: "/negociacoes" },
    { label: "Tópicos em discussão", value: "14", href: "/forum" },
    { label: "Novas sugestões", value: "5", href: "/sugestoes" },
  ];

  const planBorder = {
    Free: "border-slate-300 bg-white text-slate-700",
    Pro: "border-[#c59b60] bg-[#fdf6ec] text-[#8c5f33]",
    Executive: "border-[#1f2c44] bg-white text-[#1f2c44]",
    Investor: "border-[#6b4d85] bg-white text-[#6b4d85]",
  } as const;

  const membersRecent: Member[] = [
    {
      name: "Carla Mendes",
      role: "CEO",
      company: "NovaMétrica",
      industry: "SaaS financeiro",
      region: "Porto",
      initials: "CM",
      plan: "Pro",
    },
    {
      name: "Rui Andrade",
      role: "Director de Operações",
      company: "Maré Verde",
      industry: "Produção sustentável",
      region: "Lisboa",
      initials: "RA",
      plan: "Executive",
    },
    {
      name: "Sofia Costa",
      role: "CFO",
      company: "AtlasTech",
      industry: "Indústria 4.0",
      region: "Braga",
      initials: "SC",
      plan: "Investor",
    },
    {
      name: "Tiago Lima",
      role: "Head of Sales",
      company: "Sinal Aberto",
      industry: "Comms B2B",
      region: "Coimbra",
      initials: "TL",
      plan: "Free",
    },
  ];

  const opportunities: Opportunity[] = [
    {
      title: "Mesa de compras: comunicações B2B (Q2)",
      match: "Alta",
      valueHint: "Poupança potencial: 8–15%",
      category: "Negociação colectiva",
      why: "Relevante para a sua indústria e dimensão (PME em crescimento).",
      cta: "Ver oportunidade",
    },
    {
      title: "Parceria: energia inteligente (monitorização + optimização)",
      match: "Média",
      valueHint: "Deal estimado: €120k–€300k",
      category: "Parcerias",
      why: "Empresas similares no clube já activaram leads neste tema.",
      cta: "Analisar fit",
    },
    {
      title: "Procurement partilhado: software financeiro (licenciamento)",
      match: "Alta",
      valueHint: "Licenças disponíveis: 18",
      category: "Economia de escala",
      why: "O seu perfil indica interesse em eficiência operacional.",
      cta: "Entrar na mesa",
    },
  ];

  const industryInsight: Insight = {
    title: "Energia & Procurement — sinais desta semana",
    bullets: [
      "Pressão nos contratos variáveis: procure renegociação com indexação limitada.",
      "Aumento de auditorias internas: prepare evidências de compliance e métricas.",
      "Procurement colaborativo: oportunidades mais fortes em comunicações e energia.",
    ],
    source: "Curadoria Buildness",
    updated: "Actualizado hoje, 09:20",
  };

  const forumHot: ForumTopic[] = [
    {
      title: "Como reduzir custo de energia sem perder flexibilidade?",
      meta: "18 respostas · Pro/Executive",
      summary:
        "Discussão prática sobre cláusulas, indexação e como negociar sem comprometer o negócio.",
      tag: "Energia",
    },
    {
      title: "Framework de pricing para PMEs B2B (com exemplos reais)",
      meta: "24 respostas · Pro",
      summary:
        "Modelos simples para elevar margem sem perder volume — com passos accionáveis.",
      tag: "Pricing",
    },
    {
      title: "Que KPIs usar para procurement com equipas pequenas?",
      meta: "11 respostas · Free/Pro",
      summary:
        "Métricas mínimas para controlar poupança, risco e performance com pouco overhead.",
      tag: "Procurement",
    },
  ];

  const actions: ActionItem[] = [
    {
      title: "Completar o seu perfil e indústria",
      detail: "Isto melhora recomendações de membros, eventos e negociações.",
      status: "Recomendado",
    },
    {
      title: "Publicar um pedido (Pedido & Oferta)",
      detail: "O que procura nas próximas 4 semanas? Clientes, fornecedores ou talento?",
      status: "A fazer",
    },
    {
      title: "Confirmar presença no próximo evento relevante",
      detail: "Escolha 1 evento e marque a sua participação.",
      status: "A fazer",
    },
    {
      title: "Definir 3 objectivos para o trimestre",
      detail: "Isto activa introduções 1:1 com base em objectivos.",
      status: "A fazer",
    },
  ];

  const quickActions = [
    { label: "Publicar pedido", href: "/negociacoes" },
    { label: "Criar tópico", href: "/forum" },
    { label: "Ver eventos", href: "/eventos" },
    { label: "Pesquisar membros", href: "/membros" },
  ];

  return (
    <div className="space-y-6">
      <CompanyMarquee caption="Empresas parceiras ativas e novas entradas no ecossistema do clube." />
      {/* Page header */}
      <div className="border border-[rgb(var(--line))] bg-white">
        <div className="px-6 py-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
              Resumo semanal
            </h1>
            <p className="mt-2 text-slate-600">
              Bem-vindo, {me.name}. Aqui tem um resumo objectivo do que mudou e do
              que vale a pena fazer a seguir.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <BronzePill>Plano {me.plan}</BronzePill>
            <Badge>{me.industry}</Badge>
            <Badge>{me.region}</Badge>
          </div>
        </div>
        <div className="h-[2px] bg-[linear-gradient(90deg,rgba(197,151,96,0.0),rgba(197,151,96,1),rgba(197,151,96,0.0))]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <section
            key={stat.label}
            className="rounded-2xl border border-transparent bg-[rgb(var(--bronze))] p-5 text-white shadow-sm"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              {stat.label}
            </div>
            <div className="mt-3 text-3xl font-semibold">{stat.value}</div>
            <div className="mt-1">
              <ArrowLink href={stat.href} variant="white">
                Ver mais
              </ArrowLink>
            </div>
          </section>
        ))}
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div className="space-y-6">
          {/* Members */}
          <Card
            eyebrow="MEMBROS RECENTES"
            title="Novas entradas relevantes"
            icon={<UsersIcon />}
            secondaryLink={{ href: "/membros", label: "Ver todos" }}
          >
            <div className="space-y-3">
              {membersRecent.map((m) => (
                <article
                  key={m.name}
                  className="rounded-2xl border border-[rgb(var(--line))] bg-white px-4 py-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative flex-shrink-0">
                        <div
                          className={`h-12 w-12 rounded-full border text-sm font-semibold flex items-center justify-center shadow-sm ${planBorder[m.plan]}`}
                        >
                          {m.initials}
                        </div>
                        <span className="absolute -bottom-1 -right-1 flex h-5 items-center justify-center rounded-full border border-white bg-white px-2 py-0.5 text-[10px] font-semibold uppercase text-slate-600 shadow-sm">
                          {m.plan}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-slate-900">
                          {m.name} · {m.role}
                        </div>
                        <div className="text-xs text-slate-500">
                          {m.company} · {m.industry} · {m.region}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <button className="flex-1 rounded-xl border border-transparent bg-[rgb(var(--bronze))] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 sm:flex-none">
                      Pedir introdução
                    </button>
                    <button className="flex-1 rounded-xl border border-[rgb(var(--line))] bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 sm:flex-none">
                      Ver perfil
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </Card>

          {/* Industry insight */}
          <Card
            eyebrow="INTELIGÊNCIA DO SEU SECTOR"
            title={industryInsight.title}
            icon={<RadarIcon />}
            right={<Badge>{industryInsight.updated}</Badge>}
          >
            <div className="space-y-3">
              <ul className="space-y-2 text-sm text-slate-700">
                {industryInsight.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-2 w-2 rounded-sm bg-[rgb(var(--bronze))]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 flex items-center justify-between">
                <div className="text-xs text-slate-500">{industryInsight.source}</div>
                <ArrowLink href="/relatorio">
                  Ver relatório
                </ArrowLink>
              </div>
            </div>
          </Card>
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          {/* Highlight / hero */}
          <section className="border border-[rgb(var(--line))] bg-white overflow-hidden">
            <div className="px-6 py-5 border-b border-[rgb(var(--line))] flex items-start justify-between">
              <div>
                <div className="text-[11px] font-semibold tracking-[0.22em] text-slate-500">
                  DESTAQUE
                </div>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-900">
                  Mastery: Pricing & Margem
                </h3>
              </div>
              <BronzePill>Recomendado</BronzePill>
            </div>

            <div className="p-6">
              <div className="border border-[rgb(var(--line))] bg-slate-50 p-5">
                <div className="text-sm text-slate-700">
                  Sessão prática com frameworks aplicáveis à sua PME. Curadoria + execução.
                </div>
                <div className="mt-3 text-xs text-slate-500">
                  Hoje · 12:00 · Online (link no evento)
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="rounded-xl px-4 py-2 text-sm font-semibold bg-[rgb(var(--bronze))] text-white shadow-sm hover:opacity-90 transition">
                    Ver detalhes
                  </button>
                  <button className="rounded-xl px-4 py-2 text-sm font-semibold border border-[rgb(var(--line))] bg-white hover:bg-slate-50 transition">
                    Abrir agenda
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Forum hot topics */}
          <Card
            eyebrow="FÓRUM"
            title="Tópicos em discussão"
            icon={<MessageIcon />}
            right={<Link className="text-sm font-semibold text-slate-700 hover:underline" href="/forum">Abrir fórum</Link>}
          >
            <div className="space-y-4">
              {forumHot.map((t, idx) => (
                <div key={t.title}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <BronzePill>{t.tag}</BronzePill>
                        <span className="text-xs text-slate-500">{t.meta}</span>
                      </div>
                      <div className="mt-2 text-sm font-semibold text-slate-900">
                        {t.title}
                      </div>
                      <div className="mt-1 text-sm text-slate-600">
                        {t.summary}
                      </div>
                    </div>

                  <button className="rounded-xl px-4 py-2 text-sm font-semibold border border-[rgb(var(--line))] bg-white hover:bg-slate-50 transition shrink-0">
                      Seguir
                    </button>
                  </div>

                  {idx < forumHot.length - 1 && <div className="mt-4"><Divider /></div>}
                </div>
              ))}
            </div>
          </Card>

          {/* Actions guide */}
          <Card
            eyebrow="GUIA DE ACÇÕES"
            title="O que vale a pena fazer a seguir"
            icon={<ChecklistIcon />}
            right={<Badge>4 passos</Badge>}
          >
            <div className="space-y-3">
              {actions.map((a) => (
                <div
                  key={a.title}
                  className="border border-[rgb(var(--line))] bg-slate-50 p-4"
                >
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      {a.title}
                    </div>
                    <div className="mt-1 text-sm text-slate-600">
                      {a.detail}
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-2">
                      <button className="rounded-xl px-4 py-2 text-sm font-semibold bg-[rgb(var(--bronze))] text-white shadow-sm hover:opacity-90 transition">
                        Executar agora
                      </button>
                      <button className="rounded-xl px-4 py-2 text-sm font-semibold border border-[rgb(var(--line))] bg-white hover:bg-slate-50 transition">
                        Mais tarde
                      </button>
                    </div>
                    <StatusPill status={a.status} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Column 3 */}
        <div className="space-y-6">
          {/* Opportunities */}
          <Card
            eyebrow="NEGOCIAÇÕES"
            title="Oportunidades recomendadas"
            icon={<DealIcon />}
            right={<ArrowLink href="/negociacoes">Ver todas</ArrowLink>}
          >
            <div className="space-y-4">
              {opportunities.map((o, idx) => (
                <div key={o.title}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <BronzePill>Match {o.match}</BronzePill>
                        <span className="text-xs text-slate-500">{o.category}</span>
                      </div>
                      <div className="mt-2 text-sm font-semibold text-slate-900">
                        {o.title}
                      </div>
                      <div className="mt-1 text-sm text-slate-600">
                        {o.why}
                      </div>
                      <div className="mt-2 text-xs text-slate-500">
                        {o.valueHint}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <button className="rounded-xl px-4 py-2 text-sm font-semibold bg-[rgb(var(--bronze))] text-white shadow-sm hover:opacity-90 transition">
                      {o.cta}
                    </button>
                    <button className="rounded-xl px-4 py-2 text-sm font-semibold border border-[rgb(var(--line))] bg-white hover:bg-slate-50 transition">
                      Guardar
                    </button>
                  </div>

                  {idx < opportunities.length - 1 && <div className="mt-4"><Divider /></div>}
                </div>
              ))}
            </div>
          </Card>

          {/* Quick actions */}
          <Card
            eyebrow="ACESSOS RÁPIDOS"
            title="Acções frequentes"
            icon={<BoltIcon />}
            right={<Badge>Atalhos</Badge>}
          >
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((qa) => (
                <Link
                  key={qa.label}
                  href={qa.href}
                  className="border border-[rgb(var(--line))] bg-slate-50 p-4 hover:bg-white transition"
                >
                  <div className="text-sm font-semibold text-slate-900">{qa.label}</div>
                  <div className="mt-1 text-xs text-slate-500">
                    Aceder
                  </div>
                </Link>
              ))}
              <button className="col-span-2 rounded-xl px-4 py-3 text-sm font-semibold bg-[rgb(var(--bronze))] text-white shadow-sm hover:opacity-90 transition">
                Abrir directório
              </button>
            </div>
          </Card>

          {/* Personal note */}
          <section className="border border-[rgb(var(--line))] bg-white">
            <div className="px-6 py-5 border-b border-[rgb(var(--line))]">
              <div className="text-[11px] font-semibold tracking-[0.22em] text-slate-500">
                PARA SI
              </div>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-900">
                Próxima acção recomendada
              </h3>
            </div>
            <div className="p-6">
              <div className="border border-[rgb(var(--line))] bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-900">
                  Publique um “Pedido” com o que pretende nas próximas 4 semanas.
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  Isto activa respostas do ecossistema e ajuda a gerar ligações úteis rapidamente.
                </div>
                <div className="mt-3 flex gap-2">
                  <button className="rounded-xl px-4 py-2 text-sm font-semibold bg-[rgb(var(--bronze))] text-white shadow-sm hover:opacity-90 transition">
                    Publicar pedido
                  </button>
                  <button className="rounded-xl px-4 py-2 text-sm font-semibold border border-[rgb(var(--line))] bg-white hover:bg-slate-50 transition">
                    Ver exemplos
                  </button>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-500">
                Dica: quanto mais específico for (prazo, orçamento, região), melhor a curadoria.
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
