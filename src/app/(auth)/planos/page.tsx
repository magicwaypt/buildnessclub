export default function PlanosPage() {
  return (
    <div className="min-h-screen bg-[rgb(var(--bg))] px-8 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="text-[11px] font-semibold tracking-[0.22em] text-slate-500">SUBSCRIÇÃO</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Planos</h1>
        <p className="mt-2 text-slate-600">
          Selecione o plano que melhor se ajusta ao nível de envolvimento pretendido.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Free", desc: "Entrada no ecossistema e primeiras ligações." },
            { name: "Pro", desc: "Networking com método e vantagens comerciais." },
            { name: "Executive", desc: "Influência, estratégia e aceleração." },
            { name: "Investor", desc: "Acesso privilegiado a oportunidades." },
          ].map((p) => (
            <div key={p.name} className="border border-[rgb(var(--line))] bg-white p-5">
              <div className="text-sm font-semibold text-slate-900">{p.name}</div>
              <div className="mt-2 text-sm text-slate-600">{p.desc}</div>
              <button className="mt-4 w-full rounded-xl px-4 py-3 text-sm font-semibold bg-[rgb(var(--bronze))] text-white shadow-sm hover:opacity-90 transition">
                Seleccionar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
