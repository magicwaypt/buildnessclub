const topics = [
  {
    title: "Como reduzir custo de energia sem perder flexibilidade?",
    summary:
      "Discussao pratica sobre clausulas, indexacao e como negociar sem comprometer o negocio.",
    tags: ["Energia", "Procurement"],
    replies: 18,
    last: "ha 2h",
    author: "Carla Mendes",
  },
  {
    title: "Framework de pricing para PMEs B2B (com exemplos reais)",
    summary: "Modelos simples para elevar margem sem perder volume.",
    tags: ["Pricing", "Receita"],
    replies: 24,
    last: "ha 4h",
    author: "Rui Andrade",
  },
  {
    title: "Que KPIs usar para procurement com equipas pequenas?",
    summary: "Metricas minimas para controlar poupanca, risco e performance.",
    tags: ["Procurement", "Operacoes"],
    replies: 11,
    last: "ha 1d",
    author: "Sofia Costa",
  },
];

const featured = {
  title: "Mastery: supply chain resiliente (playbook + casos reais)",
  summary:
    "Resumo executivo do playbook apresentado no ultimo evento. Inclui benchmarks e templates.",
  tags: ["Masterclass", "Operacoes"],
  replies: 32,
  last: "ha 3h",
};

const categories = [
  { name: "Energia", count: 12 },
  { name: "Pricing", count: 8 },
  { name: "Operacoes", count: 14 },
  { name: "IA aplicada", count: 6 },
  { name: "Procurement", count: 10 },
  { name: "Talento", count: 4 },
];

const hotQuestions = [
  "Como negociar contratos variaveis em energia?",
  "Exemplos de procurement partilhado entre PMEs",
  "IA para suporte ao cliente sem perder qualidade",
];

const filters = ["Mais recentes", "Mais activos", "Pro", "Executive", "Investor"];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[rgb(var(--line))] bg-slate-100/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600">
      {children}
    </span>
  );
}

export default function ForumPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-[11px] font-semibold tracking-[0.2em] text-slate-500">FÓRUM</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            Tópicos em curso
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Partilhe contextos, receba respostas e aprenda com membros do clube.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="rounded-xl px-4 py-2.5 text-sm font-semibold border border-[rgb(var(--line))] bg-white hover:bg-slate-50 transition">
            Ver categorias
          </button>
          <button className="rounded-xl px-4 py-2.5 text-sm font-semibold bg-[rgb(var(--bronze))] text-white shadow-sm hover:opacity-90 transition">
            Novo tópico
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-5">
          <section className="rounded-3xl bg-white border border-[rgb(var(--line))] shadow-sm">
            <header className="px-6 py-5 border-b border-[rgb(var(--line))]">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-slate-900">Em destaque</div>
                  <div className="text-xs text-slate-500 mt-1">Curado pela equipa.</div>
                </div>
                <Tag>Mastery</Tag>
              </div>
            </header>
            <div className="p-6">
              <div className="rounded-2xl border border-[rgb(var(--line))] bg-slate-50 p-5">
                <div className="flex flex-wrap items-center gap-2">
                  {featured.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                  <span className="text-xs text-slate-500">
                    {featured.replies} respostas · {featured.last}
                  </span>
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-900">{featured.title}</div>
                <div className="mt-1 text-sm text-slate-600">{featured.summary}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="rounded-xl px-4 py-2.5 text-sm font-semibold bg-[rgb(var(--bronze))] text-white shadow-sm hover:opacity-90 transition">
                    Ler tópico
                  </button>
                  <button className="rounded-xl px-4 py-2.5 text-sm font-semibold border border-[rgb(var(--line))] bg-white hover:bg-slate-50 transition">
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white border border-[rgb(var(--line))] shadow-sm">
            <header className="px-6 py-5 border-b border-[rgb(var(--line))]">
              <div className="text-sm font-semibold text-slate-900">Tópicos activos</div>
              <div className="text-xs text-slate-500 mt-1">
                Mais recentes por sector, com actividade nas ultimas 24h.
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    className="rounded-full border border-[rgb(var(--line))] bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </header>
            <div className="p-6 space-y-4">
              {topics.map((topic, idx) => (
                <div key={topic.title}>
                  <div className="rounded-2xl border border-[rgb(var(--line))] bg-slate-50 p-4">
                    <div className="flex flex-wrap items-center gap-2">
                      {topic.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                      <span className="text-xs text-slate-500">
                        {topic.replies} respostas · {topic.last}
                      </span>
                    </div>
                    <div className="mt-2 text-sm font-semibold text-slate-900">
                      {topic.title}
                    </div>
                    <div className="mt-1 text-sm text-slate-600">{topic.summary}</div>
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs text-slate-500">por {topic.author}</span>
                      <div className="flex gap-2">
                        <button className="rounded-xl px-4 py-2.5 text-sm font-semibold bg-[rgb(var(--bronze))] text-white shadow-sm hover:opacity-90 transition">
                          Responder
                        </button>
                        <button className="rounded-xl px-4 py-2.5 text-sm font-semibold border border-[rgb(var(--line))] bg-white hover:bg-slate-50 transition">
                          Seguir
                        </button>
                      </div>
                    </div>
                  </div>
                  {idx < topics.length - 1 && <div className="mt-4 h-px bg-[rgb(var(--line))]" />}
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-5">
          <section className="rounded-3xl bg-white border border-[rgb(var(--line))] shadow-sm">
            <header className="px-6 py-5 border-b border-[rgb(var(--line))]">
              <div className="text-sm font-semibold text-slate-900">Categorias</div>
              <div className="text-xs text-slate-500 mt-1">Explore por tema.</div>
            </header>
            <div className="p-6 space-y-3">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="rounded-2xl border border-[rgb(var(--line))] bg-slate-50 p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-slate-900">{category.name}</div>
                    <Tag>{category.count} tópicos</Tag>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-white border border-[rgb(var(--line))] shadow-sm">
            <header className="px-6 py-5 border-b border-[rgb(var(--line))]">
              <div className="text-sm font-semibold text-slate-900">Perguntas quentes</div>
              <div className="text-xs text-slate-500 mt-1">
                Tópicos com mais actividade esta semana.
              </div>
            </header>
            <div className="p-6 space-y-3">
              {hotQuestions.map((question) => (
                <div
                  key={question}
                  className="rounded-2xl border border-[rgb(var(--line))] bg-slate-50 p-4 text-sm font-semibold text-slate-900"
                >
                  {question}
                </div>
              ))}
              <button className="w-full rounded-xl px-4 py-2.5 text-sm font-semibold border border-[rgb(var(--line))] bg-white hover:bg-slate-50 transition">
                Ver todos os tópicos
              </button>
            </div>
          </section>

          <section className="rounded-3xl bg-white border border-[rgb(var(--line))] shadow-sm">
            <header className="px-6 py-5 border-b border-[rgb(var(--line))]">
              <div className="text-sm font-semibold text-slate-900">Precisa de ajuda?</div>
              <div className="text-xs text-slate-500 mt-1">
                Use um template rapido para começar.
              </div>
            </header>
            <div className="p-6 space-y-2 text-sm text-slate-700">
              <div className="flex items-center justify-between">
                <span>Pedido de recomendações</span>
                <Tag>Modelo</Tag>
              </div>
              <div className="flex items-center justify-between">
                <span>Partilha de KPI/metricas</span>
                <Tag>Modelo</Tag>
              </div>
              <button className="mt-4 w-full rounded-xl px-4 py-2.5 text-sm font-semibold bg-[rgb(var(--bronze))] text-white shadow-sm hover:opacity-90 transition">
                Criar tópico com modelo
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
