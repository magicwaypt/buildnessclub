import Link from "next/link";
import { notFound } from "next/navigation";
import { companies } from "@/lib/companies";

const planFeatures = [
  { name: "Acesso à comunidade", Free: true, Pro: true, Executive: true, Investor: true },
  { name: "Introduções orientadas", Free: false, Pro: true, Executive: true, Investor: true },
  { name: "Mentorias e playbooks", Free: false, Pro: true, Executive: true, Investor: true },
  { name: "Eventos premium", Free: false, Pro: false, Executive: true, Investor: true },
  { name: "Projetos estratégicos", Free: false, Pro: false, Executive: false, Investor: true },
];

const plans = [
  {
    name: "Pro",
    price: "2.800€/ano",
    summary: "Networking com método e vantagens comerciais.",
    accent: "from-slate-900 to-slate-700",
    highlight: "Melhor para equipas comerciais de PMEs em escala",
  },
  {
    name: "Executive",
    price: "5.600€/ano",
    summary: "Influência estratégica, execução e aceleração.",
    accent: "from-amber-600 to-amber-500",
    highlight: "Ideal para líderes que querem alinhar estratégia e operação",
  },
  {
    name: "Investor",
    price: "Custom",
    summary: "Acesso privilegiado a oportunidades e empresas.",
    accent: "from-emerald-600 to-teal-500",
    highlight: "Plataforma para investidores, family offices e fundos",
  },
];

type Props = {
  params: {
    slug: string;
  };
};

export default function CompanyPage({ params }: Props) {
  const company = companies.find((item) => item.slug === params.slug);
  if (!company) return notFound();

  return (
    <div className="space-y-6">
      <header className="rounded-3xl border border-[rgb(var(--line))] bg-white px-6 py-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full border border-[rgb(var(--line))] bg-[rgb(var(--ink))] text-white text-xl font-semibold grid place-items-center">
              {company.logo}
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Perfil SaaS
              </div>
              <div className="text-2xl font-semibold text-slate-900">{company.name}</div>
              <p className="text-sm text-slate-600">{company.tagline}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/membros"
              className="rounded-full border border-[rgb(var(--line))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 hover:border-slate-400 hover:text-slate-900 transition"
            >
              Voltar ao diretório
            </Link>
            <button className="rounded-full border border-[rgb(var(--bronze))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[rgb(var(--bronze))] hover:bg-[rgb(var(--bronze))] hover:text-white transition">
              Pedir introdução
            </button>
          </div>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-slate-700">{company.description}</p>
      </header>

      <section className="rounded-3xl border border-[rgb(var(--line))] bg-white px-6 py-6 shadow-sm">
        <div className="flex flex-col gap-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            Planos Buildness
          </div>
          <h2 className="text-3xl font-semibold text-slate-900">
            Compare os níveis de engajamento e escolha o que precisa.
          </h2>
          <p className="text-sm text-slate-600">
            Todos os planos incluem acesso ao assistente, diretório e eventos mensais.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="flex flex-col rounded-2xl border border-[rgb(var(--line))] bg-slate-50 p-5 shadow-sm transition hover:border-slate-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{plan.name}</p>
                  <p className="text-xs text-slate-500">{plan.highlight}</p>
                </div>
                <div className="text-lg font-semibold text-slate-900">{plan.price}</div>
              </div>
              <p className="mt-3 text-sm text-slate-600">{plan.summary}</p>
              <button
                className={`mt-5 rounded-2xl px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r ${plan.accent} shadow-sm transition hover:opacity-90`}
              >
                Selecionar
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[rgb(var(--line))] bg-white px-6 py-6 shadow-sm">
        <div className="flex flex-col gap-6">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Características
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">O que está incluído em cada plano</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[640px] table-auto border-collapse text-sm">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-[0.3em] text-slate-500">
                    Recurso
                  </th>
                  {["Free", "Pro", "Executive", "Investor"].map((label) => (
                    <th
                      key={label}
                      className="px-4 py-3 text-center text-xs uppercase tracking-[0.2em] text-slate-500"
                    >
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {planFeatures.map((feature) => (
                  <tr key={feature.name} className="border-t border-[rgb(var(--line))]">
                    <td className="px-4 py-3 text-slate-700">{feature.name}</td>
                    {["Free", "Pro", "Executive", "Investor"].map((plan) => (
                      <td key={`${feature.name}-${plan}`} className="px-4 py-3 text-center text-slate-700">
                        {feature[plan as keyof typeof feature] ? "✔" : "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-[rgb(var(--line))] bg-white px-6 py-6 shadow-sm">
        <div className="text-sm font-semibold text-slate-900">História e destaques</div>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">{company.story}</p>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {company.highlights.map((highlight) => (
            <div
              key={highlight}
              className="rounded-2xl border border-[rgb(var(--line))] bg-slate-50 p-4 text-sm text-slate-700"
            >
              {highlight}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
