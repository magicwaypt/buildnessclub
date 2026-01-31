import Link from "next/link";

const plans = [
  {
    name: "Buildness Club Free",
    accent: "bg-emerald-500/80",
    summary: "Acesso imediato ao ecossistema empresarial Buildness.",
    benefits: [
      "Membro oficial do Buildness Club.",
      "Networking qualificado entre empresários e gestores.",
      "Partilha de oportunidades, ideias, bens e serviços.",
      "Acesso a webinars, eventos e conferências empresariais.",
      "Ofertas exclusivas para membros.",
      "Sem custos. Sem compromisso.",
    ],
  },
  {
    name: "Buildness Club Pro",
    accent: "bg-sky-500/80",
    summary: "Networking com método. Resultados com consistência.",
    benefits: [
      "Gestor dedicado para ativar sinergias e oportunidades.",
      "Inclui todos os benefícios do plano Free.",
      "Reuniões mensais orientadas à geração de leads.",
      "Comunicação estruturada da empresa à comunidade.",
      "Acesso a projetos de economia partilhada e negociação coletiva.",
      "Ofertas exclusivas para membros Pro.",
    ],
  },
  {
    name: "Buildness Club Executive",
    accent: "bg-purple-500/80",
    summary: "Influência, alianças estratégicas e crescimento acelerado.",
    benefits: [
      "Destaque premium na página Buildness Club.",
      "Inclui todos os benefícios do plano Pro.",
      "Leads qualificadas e partilha de dados em total conformidade RGPD.",
      "Proposta de ofertas à comunidade com validação do Conselho Buildness.",
      "Acesso a alianças estratégicas entre empresas.",
      "Benefícios exclusivos para membros Executive.",
    ],
  },
  {
    name: "Buildness Investor",
    accent: "bg-amber-500/80",
    summary: "Acesso privilegiado. Decisão estratégica. Criação de valor.",
    benefits: [
      "Oportunidades de investimento exclusivas no ecossistema Buildness.",
      "Inclui todos os benefícios do plano Executive.",
      "Lugar no Conselho Empresarial Buildness Club, com direito de voto.",
      "Participação nos resultados da unidade (crédito anual proporcional).",
      "Programa de venture building para criação de novas empresas (capital + builders).",
      "Benefícios reservados a membros Investor.",
    ],
  },
];

const BenefitIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-4 w-4 flex-shrink-0 text-[rgb(var(--bronze))]"
  >
    <path
      fillRule="evenodd"
      d="M16.704 5.29a1 1 0 0 1 .072 1.415l-6.5 7a1 1 0 0 1-1.485.04l-3-3a1 1 0 0 1 1.414-1.415l2.292 2.293 5.792-6.232a1 1 0 0 1 1.415-.101z"
      clipRule="evenodd"
    />
  </svg>
);

export default function PlanosPage() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <nav className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white bg-white/80 px-5 py-4 shadow-sm shadow-slate-200">
          <Link href="/" className="text-lg font-semibold text-slate-900">
            Buildness Club
          </Link>
          <div className="flex gap-3 text-sm text-slate-500">
            <Link
              href="/"
              className="rounded-full border border-slate-200 px-4 py-2 transition hover:border-slate-400"
            >
              Voltar à home
            </Link>
            <Link
              href="/login"
              className="rounded-full border border-slate-200 px-4 py-2 font-semibold text-slate-900 transition hover:border-slate-400"
            >
              Entrar
            </Link>
          </div>
        </nav>

        <header className="rounded-3xl border border-white bg-white/90 p-8 shadow-lg shadow-slate-300/40">
          <div className="text-[11px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
            Subscrição
          </div>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900">
            Planos que acompanham o nível de envolvimento da tua empresa.
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Escolhe o plano que desbloqueia os recursos, rede e influência que precisas para acelerar o
            crescimento. Tudo com um layout pensado ao estilo SaaS: claro, direto e com uma chamada clara
            à ação.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
            <span className="rounded-full border border-slate-200 px-4 py-2">Apoio contínuo</span>
            <span className="rounded-full border border-slate-200 px-4 py-2">Comunidade validada</span>
            <span className="rounded-full border border-slate-200 px-4 py-2">Resultados tangíveis</span>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="flex flex-col rounded-3xl border border-[rgb(var(--line))] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className={`h-3 w-3 rounded-full ${plan.accent}`} />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Plano
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900">{plan.name}</h2>
              <p className="mt-2 text-sm text-slate-600">{plan.summary}</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {plan.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <BenefitIcon />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/planos/adesao"
                className="mt-6 inline-flex items-center justify-center rounded-2xl border border-[rgb(var(--bronze))] bg-[rgb(var(--bronze))]/95 px-6 py-3 text-base font-semibold text-white transition hover:bg-[rgb(var(--bronze))] hover:shadow-lg"
              >
                Subscrever este plano
              </Link>
            </article>
          ))}
        </section>

        <div className="rounded-3xl border border-dashed border-slate-300 bg-white/60 p-6 text-center shadow-sm">
          <p className="text-sm text-slate-500">
            Precisas de apoio para escolher? Fala connosco e vamos alinhar o plano ao teu desafio específico.
          </p>
          <Link
            href="/planos/adesao"
            className="mt-4 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
          >
            Submeter pedido de adesão
          </Link>
        </div>
      </div>
    </div>
  );
}
