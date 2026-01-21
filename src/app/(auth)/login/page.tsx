"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { CompanyMarquee } from "@/components/ui/CompanyMarquee";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    // UI-only: simula autenticação
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 550);
  }

  function onSubscribe() {
    window.location.href = "/planos";
  }

  return (
    <div className="min-h-screen bg-[rgb(var(--bg))]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* LEFT */}
        <div className="hidden lg:block bg-[rgb(var(--sidebar))] text-white border-r border-white/10">
          <div className="h-full flex flex-col">
            <div className="px-10 py-10 border-b border-white/10">
              <div className="text-sm font-semibold tracking-tight">Buildness</div>
              <div className="text-xs text-white/60 mt-1">Clube · Intranet</div>
              <div className="mt-5 h-[2px] w-16 bg-[rgb(var(--bronze))]" />
            </div>

            <div className="px-10 py-10 space-y-6">
              <div>
                <div className="text-[11px] font-semibold tracking-[0.22em] text-white/60">
                  CLUBE PREMIUM DE PMEs
                </div>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight">
                  Buildness Club
                </h1>
                <p className="mt-3 text-white/75 max-w-md leading-relaxed">
                  Networking com método, curadoria e execução prática. Acesso por subscrição
                  com quatro níveis: Free, Pro, Executive e Investor.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 max-w-md">
                {[
                  { t: "Oportunidades", d: "Pipeline e deals" },
                  { t: "Eventos", d: "Agenda curada" },
                  { t: "Fórum", d: "Discussões com valor" },
                  { t: "Assistente", d: "IA para orientar decisões" },
                ].map((x) => (
                  <div
                    key={x.t}
                    className="border border-white/10 bg-[rgb(var(--sidebar2))] p-4"
                  >
                    <div className="text-sm font-semibold">{x.t}</div>
                    <div className="mt-1 text-xs text-white/60">{x.d}</div>
                  </div>
                ))}
              </div>

              <div className="text-xs text-white/50">
                Plataforma privada. Conteúdos e ligações sujeitos a confidencialidade.
              </div>
            </div>

            <div className="mt-auto px-10 py-8 border-t border-white/10 text-xs text-white/50">
              © {new Date().getFullYear()} Buildness
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-center px-5 py-10">
          <div className="w-full max-w-[520px]">
            <div className="mb-6">
              <div className="text-[11px] font-semibold tracking-[0.22em] text-slate-500">
                ACESSO
              </div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                Entrar
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Acesso reservado a membros autorizados. Se ainda não tem conta, pode iniciar a subscrição.
              </p>
            </div>

            <div className="border border-[rgb(var(--line))] bg-white">
              <div className="px-6 py-5 border-b border-[rgb(var(--line))] flex items-center justify-between">
                <div className="text-sm font-semibold text-slate-900">Credenciais</div>
              </div>

              <form onSubmit={onSubmit} className="p-6 space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full border border-[rgb(var(--line))] bg-white px-4 py-3 text-sm outline-none focus:border-slate-400"
                    placeholder="nome@empresa.pt"
                    autoComplete="email"
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">Palavra-passe</label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="mt-1 w-full border border-[rgb(var(--line))] bg-white px-4 py-3 text-sm outline-none focus:border-slate-400"
                    placeholder="••••••••"
                    autoComplete="current-password"
                    required
                    disabled={loading}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    type="submit"
                    className="rounded-xl px-4 py-3 text-sm font-semibold bg-[rgb(var(--bronze))] text-white shadow-sm hover:opacity-90 transition disabled:opacity-60"
                    disabled={loading}
                  >
                    {loading ? "A validar..." : "Entrar no clube"}
                  </button>

                  <button
                    type="button"
                    onClick={onSubscribe}
                    className="px-4 py-3 text-sm font-semibold border border-[rgb(var(--line))] bg-white hover:bg-slate-50 transition"
                    disabled={loading}
                  >
                    Ver planos / Subscrever
                  </button>
                </div>

                <div className="flex items-center justify-between pt-1 text-sm">
                  <button type="button" className="text-slate-600 hover:text-slate-900" disabled={loading}>
                    Esqueci-me da palavra-passe
                  </button>
                  <div className="text-xs text-slate-500">
                    Suporte: <span className="font-semibold text-slate-700">clube@buildness.pt</span>
                  </div>
                </div>
              </form>

              <CompanyMarquee
                heading="EMPRESAS MEMBROS (EXEMPLO)"
                caption="Ao entrar, concorda com as regras do clube e com a confidencialidade entre membros."
              />
            </div>

            <div className="lg:hidden mt-6 border border-[rgb(var(--line))] bg-white px-5 py-4">
              <div className="text-sm font-semibold text-slate-900">Buildness Club</div>
              <div className="text-xs text-slate-600 mt-1">
                Intranet premium para PMEs — curadoria e execução sem ruído.
              </div>
              <div className="mt-3 h-[2px] w-12 bg-[rgb(var(--bronze))]" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
