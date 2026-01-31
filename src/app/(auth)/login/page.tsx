"use client";

import { useState, type FormEvent } from "react";
import { CompanyMarquee } from "@/components/ui/CompanyMarquee";

const heroHighlights = [
  "Negociação coletiva",
  "Economia de escala",
  "Economia de partilha",
];

type HeroCardProps = {
  onSubscribe: () => void;
  variant?: "light" | "dark";
};

function HeroCard({ onSubscribe, variant = "light" }: HeroCardProps) {
  const isDark = variant === "dark";
  const sectionClass = isDark
    ? "rounded-3xl border border-white/20 bg-[rgb(var(--sidebar2))]/80 p-6 shadow-lg shadow-black/40 backdrop-blur"
    : "rounded-3xl border border-[rgb(var(--line))] bg-white/70 p-6 shadow-lg shadow-slate-900/5 backdrop-blur";
  const tagLineClass = isDark ? "text-[11px] font-semibold tracking-[0.3em] text-white/70" : "text-[11px] font-semibold tracking-[0.3em] text-slate-500";
  const headingClass = isDark ? "mt-3 text-3xl font-semibold leading-snug text-white" : "mt-3 text-3xl font-semibold leading-snug text-slate-900";
  const bodyClass = isDark ? "mt-3 text-sm text-white/80" : "mt-3 text-sm text-slate-600";
  const chipClass = isDark
    ? "rounded-full border border-white/30 bg-white/10 px-3 py-1 text-white/80"
    : "rounded-full border border-slate-200 px-3 py-1 text-slate-600";
  const captionClass = isDark ? "self-center text-xs text-white/70" : "self-center text-xs text-slate-500";

  return (
    <section className={sectionClass}>
      <div className={tagLineClass}>Buildness Club</div>
      <h1 className={headingClass}>
        A comunidade privada de empresários e gestores validados criada para fazer crescer as PME.
      </h1>
      <p className={bodyClass}>
        No Buildness Club transformamos inteligência coletiva em resultados: negociação coletiva,
        economia de escala e partilha para que tu ganhes oportunidades e benefícios reais, cada vez
        melhores, à medida que a comunidade cresce.
      </p>
      <p className={bodyClass}>
        Um modelo freemium onde todos ganham — entras gratuitamente, crias valor desde o primeiro dia e
        evoluis conforme os teus objetivos.
      </p>
      <div className="mt-5 flex flex-wrap gap-2 text-xs">
        {heroHighlights.map((tag) => (
          <span key={tag} className={chipClass}>
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onSubscribe}
          className="rounded-full bg-[rgb(var(--bronze))] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition"
        >
          Aderir gratuitamente
        </button>
        <span className={captionClass}>
          Cria valor imediato para ti e para a tua equipa.
        </span>
      </div>
    </section>
  );
}

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
        <div className="hidden lg:block bg-gradient-to-b from-black via-slate-900/80 to-[rgb(var(--bronze))] text-white border-r border-white/10">
          <div className="h-full flex flex-col">
            <div className="px-8 py-6 border-b border-white/10">
              <div className="text-sm font-semibold tracking-tight">Buildness</div>
              <div className="text-xs text-white/60 mt-1">Clube · Empresarial</div>
              <div className="mt-5 h-[2px] w-16 bg-[rgb(var(--bronze))]" />
            </div>

            <div className="flex grow items-center justify-center px-8 py-6">
              <div className="w-full max-w-[520px]">
                <HeroCard onSubscribe={onSubscribe} variant="dark" />
              </div>
            </div>

            <div className="mt-auto px-8 py-6 border-t border-white/10 text-xs text-white/70">
              © {new Date().getFullYear()} Buildness
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-center px-5 py-8">
          <div className="w-full max-w-[520px] space-y-5">
            <div className="lg:hidden">
              <HeroCard onSubscribe={onSubscribe} />
            </div>

            <div className="space-y-3">
              <div className="px-4 sm:px-0">
                <div className="text-[11px] font-semibold tracking-[0.22em] text-slate-500">
                  ACESSO
                </div>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                  Entrar
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Acesso reservado a membros autorizados. Se ainda não tens conta, podes iniciar a subscrição e entrar sem custos iniciais.
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
            </div>

            <div className="lg:hidden mt-6 border border-[rgb(var(--line))] bg-white px-5 py-4">
              <div className="text-sm font-semibold text-slate-900">Buildness Club</div>
              <div className="text-xs text-slate-600 mt-1">
                Comunidade premium para PMEs — curadoria e execução sem ruído.
              </div>
              <div className="mt-3 h-[2px] w-12 bg-[rgb(var(--bronze))]" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
