"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

const baseMessages: Message[] = [
  {
    role: "system",
    content:
      "Você é o Assistente Club: um guia directo para membros do clube. Priorize secções, eventos e oportunidades relevantes e responda com clareza e espírito acolhedor.",
  },
  {
    role: "assistant",
    content:
      "Olá, sou o Assistente Club. Posso levá-lo a membros, negociações ou responder a dúvidas da plataforma. Como posso ajudar hoje?",
  },
];

const quickSuggestions = [
  "Mostre-me membros recentes do meu sector",
  "Quais oportunidades de negociação estão activas?",
  "Leve-me ao fórum sobre procurement",
];

export function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(baseMessages);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const isBusy = status === "loading";

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    const nextMessages: Message[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];
    setMessages(nextMessages);
    setInput("");
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: nextMessages }),
        cache: "no-store",
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error ?? "Erro ao falar com o assistente");
      }

      const { reply } = await response.json();
      setMessages([
        ...nextMessages,
        { role: "assistant", content: reply },
      ]);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Erro desconhecido");
      setStatus("error");
      return;
    } finally {
      setStatus("idle");
    }
  }

  function handleSuggestion(suggestion: string) {
    setInput(suggestion);
  }

  useEffect(() => {
    if (!open) return;
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, open]);

  return (
    <>
      {open && (
        <>
          <div className="pointer-events-auto fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm" />
          <div className="pointer-events-auto fixed bottom-6 right-6 z-50 w-[360px] rounded-3xl border border-[rgb(var(--line))] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.45)] overflow-hidden">
            <div className="px-5 py-4 border-b border-[rgb(var(--line))] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="h-9 w-9 rounded-2xl bg-emerald-600/10 text-emerald-600 grid place-items-center">
                  <AssistIcon />
                </span>
                <div>
                  <div className="text-sm font-semibold text-slate-900 tracking-tight">Assistente Club</div>
                  <div className="text-xs text-slate-500">
                    Posso guiá-lo pelas secções, eventos ou responder dúvidas do clube.
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="h-8 w-8 rounded-full border border-[rgb(var(--line))] text-slate-500 hover:text-slate-900 hover:bg-slate-50 text-sm transition"
                aria-label="Fechar assistente"
              >
                ✕
              </button>
            </div>

            <div className="px-5 py-4 text-sm text-slate-600 space-y-3">
              <div className="space-y-2">
                <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Histórico
                </div>
                <div
                  role="log"
                  aria-live="polite"
                  aria-label="Histórico da conversa"
                  className="max-h-[260px] space-y-2 overflow-y-auto pr-1"
                >
                  {messages
                    .filter((message) => message.role !== "system")
                    .map((message, idx) => (
                      <div
                        key={`${message.role}-${idx}-${message.content.slice(0, 12)}`}
                        className={`space-y-1 rounded-2xl px-3 py-2 ${
                          message.role === "assistant"
                            ? "bg-slate-50 border border-[rgb(var(--line))]"
                            : "bg-white border border-dashed border-slate-200"
                        }`}
                      >
                        <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-slate-500">
                          {message.role === "assistant" ? "Assistente" : "Você"}
                        </div>
                        <div className="text-sm text-slate-700">{message.content}</div>
                      </div>
                    ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              <div className="rounded-2xl border border-[rgb(var(--line))] bg-slate-50 p-3">
                <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Sugestões rápidas
                </div>
                <div className="mt-2 grid gap-2">
                  {quickSuggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => handleSuggestion(suggestion)}
                      className="text-left text-sm font-medium text-slate-700 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-200 rounded-lg px-2 py-1"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>

              {errorMessage && (
                <div className="rounded-2xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs text-rose-700">
                  {errorMessage}
                </div>
              )}
            </div>

            <form onSubmit={onSubmit} className="p-4 border-t border-[rgb(var(--line))] flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Pergunte algo ao assistente…"
                disabled={isBusy}
                className="flex-1 rounded-2xl border border-[rgb(var(--line))] bg-white px-4 py-2 text-sm outline-none focus:border-slate-400 disabled:bg-slate-50"
              />
              <button
                type="submit"
                disabled={isBusy}
                className="rounded-2xl px-4 py-2.5 text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-[0_10px_30px_rgba(14,165,233,0.35)] hover:opacity-95 transition disabled:opacity-60"
              >
                {isBusy ? "A pensar…" : "Enviar"}
              </button>
            </form>
          </div>
        </>
      )}

      {!open && (
        <div className="pointer-events-auto fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir assistente club"
            className="h-12 px-6 flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white border border-transparent shadow-[0_16px_45px_rgba(16,185,129,0.35)] hover:opacity-95 transition"
          >
            <span className="h-9 w-9 rounded-full bg-white/15 grid place-items-center">
              <AssistIcon />
            </span>
            <span className="text-sm font-semibold">Assistente Club</span>
          </button>
        </div>
      )}
    </>
  );
}

function AssistIcon() {
  return (
    <svg
      className="h-4 w-4 text-white"
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
