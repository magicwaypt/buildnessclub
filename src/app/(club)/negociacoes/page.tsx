const pipeline = [
  {
    title: "Em validação",
    items: [
      {
        name: "Mesa de compras: comunicações B2B (Q2)",
        owner: "Curadoria Buildness",
        value: "Poupança 8–15%",
        scope: "18 empresas interessadas",
      },
      {
        name: "Energia inteligente (monitorização + optimização)",
        owner: "Mesa Energia",
        value: "Deal €120k–€300k",
        scope: "12 empresas interessadas",
      },
    ],
  },
  {
    title: "Em due diligence",
    items: [
      {
        name: "Licenciamento software financeiro",
        owner: "Mesa Procurement",
        value: "18 licenças disponíveis",
        scope: "RFP em curso",
      },
      {
        name: "Seguro corporate PME",
        owner: "Grupo Seguros",
        value: "Poupança 10–18%",
        scope: "4 propostas recebidas",
      },
    ],
  },
  {
    title: "Confirmado",
    items: [
      {
        name: "Negociação coletiva: telecom",
        owner: "Buildness + Parceiros",
        value: "Contrato assinado",
        scope: "Arranque em 30 dias",
      },
      {
        name: "Parceria logística nacional",
        owner: "Comissão Operações",
        value: "Desconto médio 12%",
        scope: "Implementação faseada",
      },
    ],
  },
];

const highlights = [
  {
    title: "Poupança média estimada",
    value: "€38k",
    sub: "Baseada em 12 negociações activas",
  },
  {
    title: "Negociações activas",
    value: "7",
    sub: "Em curso neste trimestre",
  },
  {
    title: "Taxa de sucesso",
    value: "82%",
    sub: "Últimos 6 meses",
  },
];

const filters = ["Compras", "Energia", "Financeiro", "Parcerias", "Logística"];

const recommended = [
  {
    name: "Mesa de compras: TI & cibersegurança",
    value: "Poupança 9–14%",
    timeframe: "Início em 3 semanas",
    tag: "Alta prioridade",
  },
  {
    name: "Fornecedor de energia (contratos fixos)",
    value: "Economia €25k/ano",
    timeframe: "Due diligence aberta",
    tag: "Match",
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[rgb(var(--line))] bg-slate-100/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600">
      {children}
    </span>
  );
}

export default function NegociacoesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-[11px] font-semibold tracking-[0.2em] text-slate-500">
            NEGOCIAÇÕES
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            Oportunidades em curso
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Negociações coletivas com foco em poupança, escala e acesso a parceiros.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="rounded-xl px-4 py-2.5 text-sm font-semibold border border-[rgb(var(--line))] bg-white hover:bg-slate-50 transition">
            Ver pipeline completo
          </button>
          <button className="rounded-xl px-4 py-2.5 text-sm font-semibold bg-[rgb(var(--bronze))] text-white shadow-sm hover:opacity-90 transition">
            Publicar pedido
          </button>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl bg-white border border-[rgb(var(--line))] p-6 shadow-sm"
          >
            <div className="text-xs font-semibold text-slate-500 tracking-[0.18em]">
              {item.title}
            </div>
            <div className="mt-3 text-3xl font-semibold text-slate-900">{item.value}</div>
            <div className="mt-2 text-sm text-slate-600">{item.sub}</div>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="lg:col-span-3 space-y-5">
          <section className="rounded-3xl bg-white border border-[rgb(var(--line))] shadow-sm">
            <header className="px-6 py-5 border-b border-[rgb(var(--line))]">
              <div className="text-sm font-semibold text-slate-900">Pipeline</div>
              <div className="text-xs text-slate-500 mt-1">
                Estado das negociações coletivas.
              </div>
            </header>
            <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
              {pipeline.map((column) => (
                <div
                  key={column.title}
                  className="rounded-2xl border border-[rgb(var(--line))] bg-slate-50 p-4"
                >
                  <div className="text-sm font-semibold text-slate-900">{column.title}</div>
                  <div className="mt-3 space-y-3">
                    {column.items.map((deal) => (
                      <div
                        key={deal.name}
                        className="rounded-2xl border border-[rgb(var(--line))] bg-white p-4"
                      >
                        <div className="text-sm font-semibold text-slate-900">{deal.name}</div>
                        <div className="mt-1 text-xs text-slate-500">{deal.owner}</div>
                        <div className="mt-2 text-xs text-slate-600">{deal.value}</div>
                        <div className="mt-1 text-xs text-slate-500">{deal.scope}</div>
                        <div className="mt-3 flex gap-2">
                          <button className="rounded-xl px-3 py-2 text-xs font-semibold bg-[rgb(var(--bronze))] text-white shadow-sm hover:opacity-90 transition">
                            Ver detalhes
                          </button>
                          <button className="rounded-xl px-3 py-2 text-xs font-semibold border border-[rgb(var(--line))] bg-white hover:bg-slate-50 transition">
                            Seguir
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-5">
          <section className="rounded-3xl bg-white border border-[rgb(var(--line))] shadow-sm">
            <header className="px-6 py-5 border-b border-[rgb(var(--line))]">
              <div className="text-sm font-semibold text-slate-900">Filtros</div>
              <div className="text-xs text-slate-500 mt-1">Escolha por tema.</div>
            </header>
            <div className="p-6 flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className="rounded-full border border-[rgb(var(--line))] bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  {filter}
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-white border border-[rgb(var(--line))] shadow-sm">
            <header className="px-6 py-5 border-b border-[rgb(var(--line))]">
              <div className="text-sm font-semibold text-slate-900">Recomendados</div>
              <div className="text-xs text-slate-500 mt-1">
                Matches por setor e dimensão.
              </div>
            </header>
            <div className="p-6 space-y-3">
              {recommended.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-[rgb(var(--line))] bg-slate-50 p-4"
                >
                  <Tag>{item.tag}</Tag>
                  <div className="mt-2 text-sm font-semibold text-slate-900">{item.name}</div>
                  <div className="mt-1 text-xs text-slate-600">{item.value}</div>
                  <div className="mt-1 text-xs text-slate-500">{item.timeframe}</div>
                  <button className="mt-3 w-full rounded-xl px-4 py-2.5 text-sm font-semibold bg-[rgb(var(--bronze))] text-white shadow-sm hover:opacity-90 transition">
                    Entrar na mesa
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-white border border-[rgb(var(--line))] shadow-sm">
            <header className="px-6 py-5 border-b border-[rgb(var(--line))]">
              <div className="text-sm font-semibold text-slate-900">Próximos passos</div>
              <div className="text-xs text-slate-500 mt-1">
                Sugestões rápidas para avançar.
              </div>
            </header>
            <div className="p-6 space-y-2 text-sm text-slate-700">
              <div className="flex items-center justify-between">
                <span>Partilhar requisitos</span>
                <Tag>Checklist</Tag>
              </div>
              <div className="flex items-center justify-between">
                <span>Confirmar budget</span>
                <Tag>Financeiro</Tag>
              </div>
              <button className="mt-4 w-full rounded-xl px-4 py-2.5 text-sm font-semibold border border-[rgb(var(--line))] bg-white hover:bg-slate-50 transition">
                Abrir guia de negociação
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
