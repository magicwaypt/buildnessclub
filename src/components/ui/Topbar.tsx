export function Topbar() {
  // UI-only mock
  const userName = "John Doe";
  const role = "Managing Director";
  const plan = "PRO";
  const initials = "JD";

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-[rgb(var(--line))]">
      <div className="h-16 px-8 flex items-center justify-between">
        <div className="flex items-center gap-4 min-w-0">
          <div className="text-[11px] font-semibold tracking-[0.22em] text-slate-500">
            INTRANET
          </div>
          <div className="hidden lg:block h-4 w-px bg-[rgb(var(--line))]" />
          <div className="hidden lg:block text-sm text-slate-700">
            Bem-vindo ao Buildness Club. O que pretende fazer hoje?
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3 w-[520px] max-w-[50vw] border border-[rgb(var(--line))] bg-slate-50 px-4 py-2">
          <span className="text-slate-400 text-sm">⌘</span>
          <input
            placeholder="Pesquisar: eventos, empresas, oportunidades…"
            className="w-full bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400"
          />
          <div className="h-4 w-px bg-[rgb(var(--line))]" />
          <span className="text-xs text-slate-500">K</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgb(var(--line))] bg-white text-slate-600 hover:bg-slate-50 transition"
            aria-label="Notificações"
          >
            <BellIcon />
          </button>
          <span className="hidden sm:inline-flex rounded-full px-3 py-1 text-xs font-semibold border border-[rgb(var(--line))] bg-white text-slate-700">
            {plan}
          </span>

          <div className="flex items-center gap-3">
            <div className="text-right leading-tight hidden sm:block">
              <div className="text-sm font-semibold text-slate-900">{userName}</div>
              <div className="text-xs text-slate-500">{role}</div>
            </div>

            <div className="h-10 w-10 rounded-full grid place-items-center bg-[rgb(var(--ink))] text-white text-xs font-semibold border border-[rgb(var(--bronze))]">
              {initials}
            </div>
          </div>
        </div>
      </div>

      <div className="h-[2px] bg-[linear-gradient(90deg,rgba(197,151,96,0.0),rgba(197,151,96,1),rgba(197,151,96,0.0))]" />
    </header>
  );
}

function BellIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9a6 6 0 0 1 12 0v4l2 2H4l2-2z" />
      <path d="M9.5 19a2.5 2.5 0 0 0 5 0" />
    </svg>
  );
}
