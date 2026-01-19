const members = [
  {
    name: "Carla Mendes",
    role: "CEO",
    company: "NovaMetrica",
    industry: "SaaS Financeiro",
    region: "Porto",
    plan: "Pro",
    initials: "CM",
    highlight: "Procura parceiros de vendas na Peninsula Iberica.",
  },
  {
    name: "Rui Andrade",
    role: "Director de Operacoes",
    company: "Mare Verde",
    industry: "Producao Sustentavel",
    region: "Lisboa",
    plan: "Executive",
    initials: "RA",
    highlight: "Procura benchmarking de procurement colaborativo.",
  },
  {
    name: "Sofia Costa",
    role: "CFO",
    company: "AtlasTech",
    industry: "Industria 4.0",
    region: "Braga",
    plan: "Investor",
    initials: "SC",
    highlight: "Disponivel para partilhas sobre pricing B2B.",
  },
  {
    name: "Tiago Lima",
    role: "Head of Sales",
    company: "Sinal Aberto",
    industry: "Comms B2B",
    region: "Coimbra",
    plan: "Free",
    initials: "TL",
    highlight: "A procurar introducoes no sector energia.",
  },
];

const categories = [
  { name: "Energia", count: 18 },
  { name: "Procurement", count: 22 },
  { name: "Pricing", count: 14 },
  { name: "Operacoes", count: 19 },
  { name: "IA aplicada", count: 9 },
  { name: "Talento", count: 7 },
];

const regions = ["Lisboa", "Porto", "Braga", "Coimbra", "Faro"];

const insights = [
  { label: "Novos membros este mes", value: "38" },
  { label: "Introducoes realizadas", value: "124" },
  { label: "Conversas ativas", value: "57" },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[rgb(var(--line))] bg-slate-100/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600">
      {children}
    </span>
  );
}

export default function MembrosPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-[11px] font-semibold tracking-[0.2em] text-slate-500">
            MEMBROS
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            Directorio do clube
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Encontre membros por industria, localizacao e interesses.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="rounded-xl px-4 py-2.5 text-sm font-semibold border border-[rgb(var(--line))] bg-white hover:bg-slate-50 transition">
            Ver introducoes
          </button>
          <button className="rounded-xl px-4 py-2.5 text-sm font-semibold bg-[rgb(var(--bronze))] text-white shadow-sm hover:opacity-90 transition">
            Pedir introducao
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="lg:col-span-3 space-y-5">
          <section className="rounded-3xl bg-white border border-[rgb(var(--line))] shadow-sm">
            <header className="px-6 py-5 border-b border-[rgb(var(--line))] flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-900">Membros relevantes</div>
                <div className="text-xs text-slate-500 mt-1">
                  Sugestoes baseadas no seu perfil e actividade recente.
                </div>
              </div>
              <div className="flex flex-1 items-center gap-3 rounded-full border border-[rgb(var(--line))] bg-slate-50 px-4 py-2 max-w-full lg:max-w-[420px]">
                <span className="text-slate-400 text-sm">🔎</span>
                <input
                  placeholder="Pesquisar por industria, empresa ou tema..."
                  className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
              </div>
            </header>
            <div className="p-6 space-y-4">
              {members.map((member, idx) => (
                <div key={member.name}>
                  <div className="rounded-2xl border border-[rgb(var(--line))] bg-slate-50 p-5">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-start gap-4 min-w-0">
                        <div className="h-12 w-12 rounded-full grid place-items-center bg-[rgb(var(--ink))] text-white text-xs font-semibold border border-[rgb(var(--bronze))]">
                          {member.initials}
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-slate-900">
                            {member.name} · {member.role}
                          </div>
                          <div className="text-xs text-slate-500 mt-1">
                            {member.company} · {member.industry} · {member.region}
                          </div>
                          <div className="mt-2 text-sm text-slate-700">
                            {member.highlight}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Tag>{member.plan}</Tag>
                        <button className="rounded-xl px-4 py-2.5 text-sm font-semibold bg-[rgb(var(--bronze))] text-white shadow-sm hover:opacity-90 transition">
                          Pedir introducao
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <button className="rounded-xl px-4 py-2.5 text-sm font-semibold border border-[rgb(var(--line))] bg-white hover:bg-slate-50 transition">
                        Ver perfil
                      </button>
                      <button className="rounded-xl px-4 py-2.5 text-sm font-semibold border border-[rgb(var(--line))] bg-white hover:bg-slate-50 transition">
                        Guardar
                      </button>
                    </div>
                  </div>
                  {idx < members.length - 1 && <div className="mt-4 h-px bg-[rgb(var(--line))]" />}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-white border border-[rgb(var(--line))] shadow-sm">
            <header className="px-6 py-5 border-b border-[rgb(var(--line))]">
              <div className="text-sm font-semibold text-slate-900">Insights da rede</div>
              <div className="text-xs text-slate-500 mt-1">
                Actividade e crescimento do clube.
              </div>
            </header>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {insights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[rgb(var(--line))] bg-slate-50 p-4"
                >
                  <div className="text-xs font-semibold text-slate-500 tracking-[0.16em]">
                    {item.label}
                  </div>
                  <div className="mt-3 text-2xl font-semibold text-slate-900">{item.value}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-5">
          <section className="rounded-3xl bg-white border border-[rgb(var(--line))] shadow-sm">
            <header className="px-6 py-5 border-b border-[rgb(var(--line))]">
              <div className="text-sm font-semibold text-slate-900">Categorias</div>
              <div className="text-xs text-slate-500 mt-1">Filtre por interesse.</div>
            </header>
            <div className="p-6 space-y-3">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="rounded-2xl border border-[rgb(var(--line))] bg-slate-50 p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-slate-900">{category.name}</div>
                    <Tag>{category.count}</Tag>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-white border border-[rgb(var(--line))] shadow-sm">
            <header className="px-6 py-5 border-b border-[rgb(var(--line))]">
              <div className="text-sm font-semibold text-slate-900">Regioes</div>
              <div className="text-xs text-slate-500 mt-1">Onde quer expandir.</div>
            </header>
            <div className="p-6 flex flex-wrap gap-2">
              {regions.map((region) => (
                <button
                  key={region}
                  className="rounded-full border border-[rgb(var(--line))] bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  {region}
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-white border border-[rgb(var(--line))] shadow-sm">
            <header className="px-6 py-5 border-b border-[rgb(var(--line))]">
              <div className="text-sm font-semibold text-slate-900">Precisa de alguem?</div>
              <div className="text-xs text-slate-500 mt-1">
                Crie um pedido para a comunidade.
              </div>
            </header>
            <div className="p-6 space-y-3 text-sm text-slate-700">
              <div className="rounded-2xl border border-[rgb(var(--line))] bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-900">Pedido rapido</div>
                <div className="mt-1 text-xs text-slate-500">
                  Descreva o perfil ou contacto que precisa.
                </div>
                <button className="mt-3 w-full rounded-xl px-4 py-2.5 text-sm font-semibold bg-[rgb(var(--bronze))] text-white shadow-sm hover:opacity-90 transition">
                  Abrir pedido
                </button>
              </div>
              <button className="w-full rounded-xl px-4 py-2.5 text-sm font-semibold border border-[rgb(var(--line))] bg-white hover:bg-slate-50 transition">
                Ver pedidos ativos
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
