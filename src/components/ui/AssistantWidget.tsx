"use client";

import { useState, type FormEvent } from "react";

export function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    // UI-only: aqui liga ao OpenAI depois
    setInput("");
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 w-[360px] rounded-3xl border border-[rgb(var(--line))] bg-white shadow-[0_20px_60px_rgba(11,18,32,0.2)] overflow-hidden">
          <div className="px-5 py-4 border-b border-[rgb(var(--line))] flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-900">Assistente Buildness</div>
              <div className="text-xs text-slate-500">
                Posso encaminhá-lo para secções e responder a dúvidas do clube.
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="h-8 w-8 rounded-full border border-[rgb(var(--line))] text-slate-500 hover:text-slate-900 hover:bg-slate-50 text-sm transition"
              aria-label="Fechar"
            >
              ✕
            </button>
          </div>

          <div className="px-5 py-4 text-sm text-slate-600 space-y-2 max-h-[240px] overflow-auto">
            <div className="rounded-2xl border border-[rgb(var(--line))] bg-slate-50 p-3">
              Sugestões:
              <div className="mt-2 grid gap-2">
                <button className="text-left text-sm hover:underline">
                  “Mostre-me membros recentes do meu sector”
                </button>
                <button className="text-left text-sm hover:underline">
                  “Que oportunidades de negociação estão activas?”
                </button>
                <button className="text-left text-sm hover:underline">
                  “Leve-me ao fórum sobre procurement”
                </button>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="p-4 border-t border-[rgb(var(--line))] flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escreva a sua pergunta…"
              className="flex-1 rounded-2xl border border-[rgb(var(--line))] bg-white px-4 py-2 text-sm outline-none focus:border-slate-400"
            />
            <button className="rounded-2xl px-4 py-2.5 text-sm font-semibold bg-[rgb(var(--bronze))] text-white shadow-sm hover:opacity-90 transition">
              Enviar
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="h-12 px-6 flex items-center gap-3 rounded-full bg-[rgb(var(--bronze))] text-white border border-[rgba(0,0,0,0.08)] shadow-[0_18px_40px_rgba(197,151,96,0.35)] hover:opacity-95 transition"
      >
        <span className="h-9 w-9 rounded-full bg-white/15 grid place-items-center">
          <ChatIcon />
        </span>
        <span className="text-sm font-semibold">Assistente</span>
      </button>
    </div>
  );
}

function ChatIcon() {
  return (
    <svg
      className="h-4 w-4"
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
