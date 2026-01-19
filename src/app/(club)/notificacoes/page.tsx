export default function NotificacoesPage() {
  return (
    <div className="space-y-6">
      <div>
        <div className="text-[11px] font-semibold tracking-[0.2em] text-slate-500">NOTIFICAÇÕES</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Inbox</h1>
      </div>

      <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm space-y-3">
        {["Webinar IA aplicada", "Negociação coletiva concluída", "Novo post no fórum"].map((n) => (
          <div key={n} className="flex items-center justify-between rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition">
            <div>
              <div className="text-sm font-medium text-slate-900">{n}</div>
              <div className="text-sm text-slate-600 mt-1">há 2h</div>
            </div>
            <button className="rounded-xl bg-[rgb(var(--bronze))] px-3.5 py-2 text-xs font-semibold text-white shadow-sm hover:opacity-90 transition">
              Ver
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
